import React from "react";

const AnimationButton = ({ content, isAnimation }) => {
  return (
    <button className="px-6 py-2 rounded-sm bg-main-pink text-white">
      {content}
    </button>
  );
};

export default AnimationButton;
