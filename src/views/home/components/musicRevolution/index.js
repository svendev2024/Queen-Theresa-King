import React, { useState } from "react";
import { Paginator } from "../../../../components";

const MusicRevolution = () => {
  const [totalPage, setTotalPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const imageList = [
    {
      image: "./images/dfewtes-400x516.jpg",
    },
    {
      image: "./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-12-400x516.webp",
    },
    {
      image: "./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-11-400x516.webp",
    },
    {
      image: "./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-10-400x516.webp",
    },
    {
      image: "./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-8-400x516.webp",
    },
    {
      image: "./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-7-400x516.webp",
    },
    {
      image: "./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-6-400x516.webp",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center px-36 py-28">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center">
            JOIN&nbsp;THE&nbsp;MUSIC&nbsp;REVOLUTION
          </div>
          <h2 className="text-3xl font-bold italic mt-2 text-[#090b86]">
            World&nbsp;Peace&nbsp;Advocate
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 gap-4 justify-center">
        {imageList
          .slice((currentPage - 1) * 4, currentPage * 4)
          .map((imageItem, imageIndex) => (
            <div className="flex" key={imageIndex}>
              <img className="size-96 p-2" src={imageItem.image} alt="images" />
            </div>
          ))}
      </div>
      <div className="flex py-14">
        <Paginator
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default MusicRevolution;
