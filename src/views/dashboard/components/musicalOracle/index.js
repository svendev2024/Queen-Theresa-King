import React from "react";
import './musicalOracle.css'

const MusicalOracle = () => {

  return (
    <>
      <div className="flex text-white bg-[url('/public/images/b_W10-1-scaled.webp')] h-screen bg-cover bg-[#2f1b1b] bg-center w-full bg-blend-luminosity px-32 oracle-main">
        <div className="my-auto flex justify-between w-full gap-8 oracle-dash">
          <div className="flex flex-col py-8 gap-4 oracle-intro">
            <div className="text-3xl oracle-letter"><b>Melodies&nbsp;that&nbsp;Move&nbsp;You!</b></div>
            <div className="text-7xl playfair-font italic oracle-title">Musical Oracle</div>
            <div className="text-3xl oracle-letter">Dive&nbsp;into&nbsp;a&nbsp;World&nbsp;of&nbsp;Harmonious Sounds</div>
            <div className="mt-8">
              <button className="px-6 py-2 rounded-sm bg-main-pink">GET&nbsp;IN&nbsp;TOUCH</button>
            </div>
          </div>

          <div className="max-w-[550px] min-w-[390px] max-h-[390px] oracle-pic">
            <img src="./images/Untitled-design-47-1.png"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicalOracle