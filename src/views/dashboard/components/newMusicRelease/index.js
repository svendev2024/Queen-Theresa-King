import React from "react";
import { Link } from "react-router-dom";
import "./newMusicRelease.css";

const NewMusicRelease = () => {
  return (
    <>
      <div className="flex flex-col bg-black h-screen text-white">
        <div className="flex flex-col p-8 m-auto">
          <div className="text-6xl playfair-font italic release-title text-center">
            New&nbsp;Music&nbsp;Release
          </div>
          <Link className="bg-white p-4 rounded-xl my-8" to="/epk-for-media">
            <img
              className="max-h-[65vh]"
              src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-14.webp"
            ></img>
          </Link>
          <Link className="text-2xl release-letter mx-auto" to="/epk-for-media">
            Click&nbsp;For&nbsp;EPK&nbsp;For&nbsp;Media
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewMusicRelease;
