import React from "react";

const Offer = () => {
  
  const offerList = [
    {
      image: "./images/creativity.png",
      title: "Inspirational Performances",
      content:
        "Combining soulful music with powerful messages, our performances are designed to move and inspire.",
    },
    {
      image: "./images/motivation.png",
      title: "Motivational Speaking",
      content:
        "From overcoming personal challenges to achieving professional success, QueenTheresaKing's speeches cover a wide range of topics aimed at motivating and empowering individuals.",
    },
    {
      image: "./images/webinar.png",
      title: "Workshops and Seminars",
      content:
        "Our interactive workshops and seminars provide hands-on experience and practical advice for personal and professional growth.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center px-36 py-28 bg-[#f2f2f2]">
        <div className="flex flex-col">
          <div className="text-xl text-center">MOTIVATION&nbsp;SPEAKER</div>
          <h2 className="text-4xl playfair-font font-bold italic mt-2 text-[#090b86] playfair-font">
            What&nbsp;We&nbsp;Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 pt-8 gap-4">
          {offerList.map((item, index) => (
            <div className="flex flex-col gap-2 sm:items-center lg:items-start lg:flex-row" key={index}>
              <div className="w-16">
                <img
                  src={item.image}
                  className="size-16 p-2"
                  alt="creativity"
                />
              </div>
              <div className="flex-1 ">
                <div className="italic text-3xl text-[#9407a9] sm:text-center lg:text-start">{item.title}</div>
                <div className="sm:text-center lg:text-start">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
