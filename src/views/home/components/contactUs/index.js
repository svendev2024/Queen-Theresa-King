import React, { useState } from "react";
import { AnimationButton } from "../../../../components";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Strapi API
    try {
      const response = await fetch('http://localhost:1337/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: formData,
        })
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        console.log('Contact form submitted successfully!');
        setIsSubmitted(true);
      } else {
        // Handle error (e.g., display an error message)
        console.error('Error submitting contact form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };
  return (
    <>
      <div className="flex flex-col px-8 py-28 bg-[url('/public/images/music-pattern-background.png')] bg-blend-overlay bg-white-transparent lg:px-36">
        <div className="flex flex-col">
          <div className="text-xl text-center">QUESTIONS?</div>
          <h2 className="text-4xl font-bold italic mt-2 text-[#090b86] text-center">
            Contact&nbsp;Us
          </h2>
        </div>
        {isSubmitted ? (
          <p>Your message has been sent!</p>
        ) : (
          <form className="flex flex-col px-4 mt-6 lg:px-20" onSubmit={handleSubmit}>
            {/* FIXME: Validation errors <div>Please, fill in the following field</div> */}
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                className="bg-[#dadbe7] text-white h-[45px] w-full p-4"
                placeholder="Name"
              />
              <input
                type="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                className="bg-[#dadbe7] text-white h-[45px] w-full p-4"
                placeholder="Email"
              />
            </div>
            <textarea
              className="bg-[#dadbe7] text-white w-full p-4 mt-6"
              onChange={handleChange}
              value={formData.message}
              name="message"
              rows="6"
              placeholder="Message"
            ></textarea>
            <div className="flex mt-2 flex-row-reverse">
              <AnimationButton content="Submit" />
            </div>
          </form>
        )}
        <div className="grid xl:grid-cols-2 gap-8 mt-12 lg:px-16">
          <div className="flex justify-center p-4 bg-white rounded-md">
            <img
              width={720}
              height={720}
              src="./images/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ-10-400x516.webp"
            ></img>
          </div>
          <div className="flex flex-col py-4">
            <div className="text-3xl text-main-pink">
              SINGER-SONGWRITER, ACTRESS, ACTIVIST
            </div>
            <div className="text-xl text-center lg:text-start mt-4">
              A New Orleans Native, Queen Theresa King started writing and
              singing music at the age of 5. Born into a family of ministers and
              jazz music artists, being a lyrical genius comes naturally.
              Writing and producing a variety of styles of music, while teaching
              the spiritual principles of life. Her unique style blends the
              music sounds of jazz, hip-hop, and reggae while adding spiritual
              truths to her celestial lyrical pot!
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
                <div className="italic text-3xl text-[#002b72]">
                  Email for inquiry
                </div>
                <div className="text-xl">qtkproductions@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
