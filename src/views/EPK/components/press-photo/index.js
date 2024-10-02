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
      <div className="py-28 px-48">
        <p className="text-center text-5xl italic py-4 text-main-blue">
          Press Photos
        </p>

        <div className="grid grid-cols-3 gap-8">
          {imageList.map((imageItem, imageIndex) => (
            <div className="flex flex-col items-center justify-between w-96">
              <img src={imageItem.pic} className="h-[400px] w-full" />
              <div className="bg-main-pink text-white w-full h-12 flex justify-center items-center text-center p-8 text-xl">{imageItem.title}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-5xl itali text-main-blue mt-12 mb-4 italic">
          Video
        </p>
        <iframe className="w-full h-[60vh]" src="https://www.youtube.com/embed/6shu3rXoR6c?feature=oembed"></iframe>
      </div>
    </>
  );
};

export default PressPhoto;
