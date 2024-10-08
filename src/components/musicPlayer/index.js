// src/MusicPlayer.js  
import React, { useRef } from 'react';
import { nextIcon, prevIcon, stop, goTopIcon } from '../icons';

const MusicPlayer = () => {  
  const audioRef = useRef(null);  


  const scrollToTop = () => {  
    window.scrollTo({  
      top: 0,  
      behavior: 'smooth' // Optional: for a smooth scroll effect  
    });  
  };  

  
  return ( 
    <>
      <div className="bg-main-pink py-2 px-4 rounded-lg flex flex-col items-center fixed end-3.5 bottom-3.5 w-full sm:3/4 lg:w-2/5">
        <div className='flex justify-between w-full text-white px-3'>
          <div className='flex'>
            <div className='m-auto flex gap-3'>
              <div
                className="m-auto"
                dangerouslySetInnerHTML={{
                  __html: prevIcon,
                }}
              />
              <div
                className="m-auto"
                dangerouslySetInnerHTML={{
                  __html: stop,
                }}
              />
              <div
                className="m-auto"
                dangerouslySetInnerHTML={{
                  __html: nextIcon,
                }}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-xl'>
              <b>01 Its your life</b>
            </div>
            <div className='text-md'>
              Artist 1
            </div>
          </div>
        </div>
        <audio
          className='w-full h-[25px]'
          ref={audioRef}
          controls
        >
          <source src="horse.mp3" type="audio/mpeg"></source>
        </audio>
        {/* <audio  
          ref={audioRef}  
          src="path_to_your_audio_file.mp3"  
          onTimeUpdate={handleTimeUpdate}  
          onLoadedMetadata={handleTimeUpdate}  
        />
        <div className="flex items-center space-x-4">  
          <button onClick={() => audioRef.current.currentTime -= 10} className="text-white">⏮</button>  
          <button onClick={handlePlayPause} className="text-white">  
            {isPlaying ? '⏸' : '▶️'}  
          </button>
          <button onClick={() => audioRef.current.currentTime += 10} className="text-white">⏭</button>  
        </div>
        <div className="flex items-center space-x-2 mt-4">  
          <span className="text-white">{Math.floor(currentTime)} / {Math.floor(duration)}</span>  
          <input  
            type="range"  
            value={currentTime}  
            max={duration}
            onChange={(e) => {  
              audioRef.current.currentTime = e.target.value;  
              setCurrentTime(e.target.value);
            }}  
            className="w-full"  
          />  
        </div>  
        <div className="text-white mt-2">  
          <span>Kindness</span> - <span>Queen Theresa King</span>  
        </div>   */}
      </div>  
      <div 
        className='fixed bg-black opacity-30 hover:opacity-100 rounded-full bottom-40 right-7 p-3 cursor-pointer'
        onClick={() => scrollToTop()}
      >
        <div
          className="m-auto"
          dangerouslySetInnerHTML={{
            __html: goTopIcon,
          }}
        />
      </div>
    </> 
  ) 
};  

export default MusicPlayer;