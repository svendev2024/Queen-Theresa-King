import React from "react";

const PressReview = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-[#f7f7f7]">
      <p className="text-center text-5xl italic py-4 text-main-blue">Press/Reviews</p>
      <div className="w-5/6 justify-center grid grid-cols-2 gap-8">
        <div className="border-b-2 border-main-pink bg-white p-8 rounded-xl">
          <div className="text-2xl">
            Gospel Jazz Singer Queen Theresa King Releases Single “This Too
            Shall Pass.”
          </div>
          <div>
            <div className="float-left mr-4 w-24">
              <img
                src="/images/304044827_583005743433615_4937597192354598047_n.jpg"
                alt="woman"
              />
            </div>
            <div className="text-gray-400">
              LOS ANGELES (April 2020) - Known for her jazzy, raspy and vocally
              unique sound, singer/songwriter and peace activist Queen Theresa
              King releases her long anticipated single “This Too Shall Pass”.
              The uplifting and powerful single is the first release from her
              forthcoming debut EP titled “It's Your Life”. The single is
              available now on all digital … Continue reading
            </div>
          </div>
        </div>

        <div className="border-b-2 border-main-pink text-main-pink bg-white p-8 rounded-xl text-lg">
          https://eurweb.com/2020/04/16/gospel-jazz-singer-queen-theresa-king-releases-long-awaited-timely-single-this-too-shall-pass-watch/
        </div>

        <div className="border-b-2 border-main-pink text-main-pink bg-white p-8 rounded-xl text-lg">
          https://www.urbaninsite.com/news/theresa-king-this-too-shall-pass/
        </div>

        <div className="border-b-2 border-main-pink bg-white p-8 rounded-xl text-2xl grid">
          <img src="/images/Queen-Theresa-King1-628x250.jpg" alt="woman" />
          <a href="https://uncommonmag.com/?p=1197" className="mt-4 hover:text-main-pink hover:underline transition-all duration-300">
            Peace Activist Queen Theresa King Releases Timely New Single 'This
            Too Shall Pass'
          </a>
        </div>
      </div>
    </div>
  );
};

export default PressReview;
