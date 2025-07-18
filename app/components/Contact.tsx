import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div
      id="contact"
      className="w-[1440px] h-screen  p-14 flex flex-col gap-15  items-center relative"
    >
      <div
        className="bg-[url(/images/backgroundHomePage.png)] bg-no-repeat
       bg-[position:350px] -z-1 opacity-100 absolute inset-0"
      ></div>
      <p
        className=" uppercase text-3xl font-bold tracking-[0.45em] 
      justify-center items-center text-transparent bg-clip-text bg-linear-to-r
       from-orange-900  via-yellow-600 to-orange-900 mt-10"
      >
        contact
      </p>
      <p className="text-secondarytext text-xl align-top w-[764px] h-[200px] text-center  tracking-[0.2em]">
        You can reach out using the form below or connect with me through one of
        the platforms. I'll get back to you as soon as possible!
      </p>

      <form className="flex flex-col w-[600px] relative ">
        <div className="relative mb-15">
          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            className="pb-6 px-4 bg-transparent text-lg w-full text-primarytext placeholder-secondarytext focus:outline-none"
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>
        <div className="relative mb-15">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL*"
            className="pb-6 px-4 bg-transparent text-lg w-full text-primarytext placeholder-secondarytext focus:outline-none"
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>
        <div className="relative mb-15">
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="pb-6 px-4 bg-transparent text-lg w-full text-primarytext placeholder-secondarytext focus:outline-none"
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>
        <div className="relative mb-15">
          <textarea
            placeholder="ENTER YOUR MESSAGE*"
            className="w-full px-4 bg-transparent text-primarytext placeholder-secondarytext text-lg resize-none pb-2 focus:outline-none"
            rows={4}
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>

        <button
          className="bg-header left-1/2 -translate-x-1/2 relative text-primarytext
         w-[129px] h-[39px] uppercase rounded-2xl font-bold tracking-[0.2em] cursor-pointer
         hover:border-1 hover:border-secondarytext hover:text-secondarytext hover:bg-transparent
         "
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
