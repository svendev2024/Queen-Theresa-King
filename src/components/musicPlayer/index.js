// src/MusicPlayer.js
import React, { useRef } from "react";
import {
  FaArrowUp,
  FaFastForward,
  FaFastBackward,
  FaPlay,
} from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for a smooth scroll effect
    });
  };

  return (
    <>
      <div className="bg-main-pink py-2 px-4 rounded-lg flex flex-col items-center fixed sm:end-3 bottom-3.5 w-full sm:3/4 lg:w-2/5">
        <div className="flex justify-between w-full text-white px-3">
          <div className="flex">
            <div className="m-auto flex gap-3">
              <FaFastBackward />
              <FaPlay />
              <FaFastForward />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl">
              <b>01 Its your life</b>
            </div>
            <div className="text-md">Artist 1</div>
          </div>
        </div>
        <audio className="w-full h-[25px]" ref={audioRef} controls>
          <source src="horse.mp3" type="audio/mpeg"></source>
        </audio>
      </div>
      <div
        className="fixed bg-black opacity-30 hover:opacity-100 rounded-full bottom-40 right-7 p-3 cursor-pointer"
        onClick={() => scrollToTop()}
      >
        <FaArrowUp className="text-white" />
      </div>
    </>
  );
};

export default MusicPlayer;
