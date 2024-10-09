import React from "react";
import { AnimationButton } from "../../../../components";

const ContactUs = () => {

  return (
    <>
      <div className="flex flex-col px-40 py-28 bg-[url('/public/images/music-pattern-background.png')] bg-blend-overlay bg-white-transparent"> 
        <div className="flex flex-col">
          <div className="text-xl text-center">QUESTIONS?</div>
          <h2 className="text-4xl font-bold italic mt-2 text-[#090b86] text-center">
            Contact&nbsp;Us
          </h2>
        </div>
        <div className="flex flex-col px-32 mt-6">
          <div>Please, fill in the following field</div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <input type="text" className="bg-[#dadbe7] text-white h-[45px] w-full p-4" placeholder="Name"/>
            </div>
            <div>
              <input type="email" className="bg-[#dadbe7] text-white h-[45px] w-full p-4" placeholder="Email"/>
            </div>
          </div>
          <textarea className="bg-[#dadbe7] text-white w-full p-4 mt-6" rows="6" placeholder="Message"></textarea>
          <div className="flex mt-2 flex-row-reverse">
            <AnimationButton content="Submit" />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 gap-8 mt-12 px-20">
          <div className="flex justify-center p-4 bg-white rounded-md">
            <img width={720} height={720} src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-10-400x516.webp"></img>
          </div>
          <div className="flex flex-col py-4">
            <div className="text-3xl text-main-pink">SINGER-SONGWRITER, ACTRESS, ACTIVIST</div>
            <div className="text-xl text-center lg:text-start mt-4">
              A New Orleans Native, Queen Theresa King started writing and singing music at the age of 5. Born into a family of ministers and jazz music artists, being a lyrical genius comes naturally. Writing and producing a variety of styles of music, while teaching the spiritual principles of life. Her unique style blends the music sounds of jazz, hip-hop, and reggae while adding spiritual truths to her celestial lyrical pot!
            </div>
       
            <div className="flex mt-12">
              <div></div>
              <div className="flex flex-col">
                <div className="italic text-3xl text-[#002b72]">Call Us</div>
                <div className="text-xl">+1 (323) 812-4428</div>
              </div>
            </div>
            <div className="flex mt-12">
              <div></div>
              <div className="flex flex-col">
                <div className="italic text-3xl text-[#002b72]">Email for inquiry</div>
                <div className="text-xl">qtkproductions@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

 
    </>
  )
}

export default ContactUs