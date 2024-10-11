import React from "react";

const Album = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 px-40 py-28 bg-blend-overlay bg-[url('/public/images/music-pattern-background.png')] bg-white-transparent">
        <div className="flex flex-col my-auto">
          <div className="text-5xl playfair-font italic text-center lg:text-start text-[#090b86]">
            Album
          </div>
          <div className="text-2xl text-main-pink mt-4 text-center lg:text-start">
            <b>Positivity</b>
          </div>
          <div className="text-xl mt-8 text-center lg:text-start">
            Not available Out of stock Upbeat reggae-hip-hop beat that is
            blended with the jazzy vocal signature sound of the authority that
            Queen Theresa King has become known for. Teaching the Spiritual
            Principles of Life through song, you are sure to pat your feet, move
            your head and get up and dance as you celebrate life!
          </div>
          <img
            className="mt-10"
            width={200}
            height={200}
            src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-14.webp"
          ></img>
          <div className="text-xl mt-8 text-center lg:text-start text-main-pink">
            <b>Positivity</b>
          </div>
        </div>
        <div className="flex justify-center p-4 rounded-md">
          <img
            className="border-[16px] border-[#eaeaea]"
            width={500}
            height={500}
            src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-14.webp"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Album;
