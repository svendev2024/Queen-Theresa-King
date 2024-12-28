export const bootstrapPermissions = async (strapi) => {
    const role = await strapi
        .db.query("plugin::users-permissions.role")
        .findOne({ where: {name: "Public" } });
    const publicRole = await strapi.service('plugin::users-permissions.role').findOne(role.id)

    const updateRole = async (contentTypeUid, perms) => {
        const contentType = await strapi.service("plugin::content-manager.content-types")
            .findContentType(contentTypeUid);

        if (!contentType) {
            return;
        }

        const controllerName = contentType.apiName.replace(".", "-");

        const updatedPermissions = {
            ...publicRole.permissions,
            [`${contentTypeUid.split(".")[0]}`]: {
                controllers: {
                    [controllerName]: perms,
                },
            },
        };

        await strapi
            .service("plugin::users-permissions.role")
            .updateRole(publicRole.id, {
                permissions: updatedPermissions,
            });
    };

    // Update permissions for existing content types
    const existingContentTypes = ["api::contact.contact"];
    await Promise.all(
        existingContentTypes.map((contentType) =>
            updateRole(contentType, {
                create: { enabled: true },
            })
        )
    );
};
