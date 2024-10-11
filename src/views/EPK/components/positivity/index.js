import React from "react";

const Positivity = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 px-40 py-28 bg-blend-overlay bg-white-transparent">
        <div className="flex justify-center p-4 rounded-md">
          <img
            className="border-[16px] border-[#eaeaea]"
            width={500}
            height={500}
            src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-14.webp"
          ></img>
        </div>
        <div className="flex flex-col my-auto">
          <h2 className="text-5xl italic text-center lg:text-start">
            Queen Theresa King
          </h2>
          <div className="text-2xl text-main-pink mt-4 text-center lg:text-start">
            <b>Queen Theresa King</b>
          </div>
          <div className="text-xl mt-8 text-center lg:text-start">
            A New Orleans Native, Queen Theresa King started writing and singing
            music at the age of 5. Born into a family of ministers and jazz
            music artist, being a lyrical genius comes natural. Writing and
            producing a variety of styles of music, while teaching the spiritual
            principles of life. Her unique style blends the music sounds of
            jazz, hip-hop and reggae, while adding spiritual truths to her
            celestial lyrical pot!
          </div>
        </div>
      </div>
    </>
  );
};

export default Positivity;
