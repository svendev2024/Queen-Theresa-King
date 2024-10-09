import React from "react";
import { AnimationButton } from "../../../../components";

const AboutUs = () => {

  return (
    <>
      <div className="flex flex-col items-center px-36 py-28 bg-[#f7f4ff]">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center">FEEL&nbsp;THE&nbsp;BETTER!</div>
          <h2 className="text-4xl font-bold italic mt-2 text-[#090b86]">About&nbsp;Us</h2>
        </div>

        <div className="text-xl text-center mt-6">
          Queen Theresa King, a visionary community leader and tireless world peace advocate, orchestrates change through her music. Her impact, soulful melodies, and empowering lyrics reverberate across southern California and resonate with audiences globally. Born amidst the vibrant rhythms of New Orleans, Queen Theresa’s journey weaves compassion, resilience, and purpose. Known for her ability to connect hearts, she bridges gaps by providing essential resources to those grappling with economic, food, and housing insecurities. But her symphony extends beyond community borders; it has echoed in legislative halls, where she has lobbied for transformative change. As the founder of Eradicate the Hate Inc., Queen Theresa’s mission transcends notes and lyrics—it’s about empowering communities for change!
        </div>

        <div className="grid xl:grid-cols-2 gap-16 mt-12">
          <div className="p-4 bg-white rounded-md">
            <img src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-9-1.webp"></img>
          </div>
          <div className="flex flex-col py-4">
            <div className="text-xl text-center lg:text-start">
              Yet, it’s her musical alchemy that sets her apart. Queen Theresa’s compositions are more than melodies; they’re anthems for awareness and transformation. She weaves lyrics that motivate, inform, and empower. Imagine her co-producing alongside platinum producer Kenny McCloud and harmonizing with Stevie Wonder. Timberland’s review of her song “Letter” echoes through industry corridors—it should be an international hit, says Timberland. Her music style and presentation rival the sounds of Bobby McFerren who wrote the world’s #1 song “Don’t Worry Be Happy”. Queen Theresa’s inspiring music isn’t just entertainment; it’s a spiritual force, urging listeners to apply love’s principles to their lives.
            </div>
            <div className="mt-12">
              <AnimationButton content="VIEW OUR GALLERY" />
            </div>
          </div>
        </div>
     
        <div className="grid xl:grid-cols-2 gap-16 mt-12">
          <div className="flex flex-col py-4">
            <div className="text-xl text-center lg:text-start">
              Yet, it’s her musical alchemy that sets her apart. Queen Theresa’s compositions are more than melodies; they’re anthems for awareness and transformation. She weaves lyrics that motivate, inform, and empower. Imagine her co-producing alongside platinum producer Kenny McCloud and harmonizing with Stevie Wonder. Timberland’s review of her song “Letter” echoes through industry corridors—it should be an international hit, says Timberland. Her music style and presentation rival the sounds of Bobby McFerren who wrote the world’s #1 song “Don’t Worry Be Happy”. Queen Theresa’s inspiring music isn’t just entertainment; it’s a spiritual force, urging listeners to apply love’s principles to their lives.
            </div>
            <div className="mt-12">
              <AnimationButton content="VIEW OUR GALLERY" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-md">
            <img src="./images/304044827_583005743433615_4937597192354598047_n.jpg"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
