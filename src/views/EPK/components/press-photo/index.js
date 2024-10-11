import React from "react";

const PressPhoto = () => {
  const imageList = [
    {
      pic: "/images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ12.webp",
      title: "Red Carpet Premier of A Clear Shot film with Mario Peables",
    },
    {
      pic: "/images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ1.webp",
      title: "Red Carpet Premier of A Clear",
    },
    {
      pic: "/images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ.webp",
      title: "Red Carpet Premier of A Clear Shot film with Mario Peables",
    },
  ];

  return (
    <>
      <div className="py-28 px-4 lg:px-36">
        <h2 className="text-center text-4xl font-bold italic py-4 text-main-blue">
          Press&nbsp;Photos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageList.map((imageItem, imageIndex) => (
            <div
              className="flex flex-col items-center justify-between"
              key={imageIndex}
            >
              <img src={imageItem.pic} className="h-[400px] w-full" />
              <div className="bg-main-pink text-white w-full h-12 flex justify-center items-center text-center p-8 text-xl">
                {imageItem.title}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-center text-4xl font-bold itali text-main-blue mt-20 mb-4 italic">
          Video
        </h2>
        <iframe
          className="w-full h-[60vh]"
          src="https://www.youtube.com/embed/6shu3rXoR6c?feature=oembed"
        ></iframe>
      </div>
    </>
  );
};

export default PressPhoto;
