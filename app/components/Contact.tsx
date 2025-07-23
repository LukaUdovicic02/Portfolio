"use client";

import React, { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState<string>("");
  const [phonenumber, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMsg] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phonenumber, message }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setMsg("");
      } else {
        console.error("Failed to send email.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
    console.log(name);
  };
  return (
    <div
      id="contact"
      className="max-w-[1350px] mx-auto 2xs:w-full h-screen 2xs:p-8 sm:p-12 md:p-14 flex flex-col 2xs:gap-10 xs:gap-13 sm:gap-15 items-center relative"
    >
      <div
        className="bg-[url(/images/backgroundHomePage.png)] bg-no-repeat 2xs:bg-[position:0px_150px] 2xs:bg-[length:115%_60%]
                    -z-1 opacity-100 absolute inset-0"
      ></div>
      <p
        className=" uppercase sm:text-3xl font-bold 2xs:text-xl 2xs:tracking-[0.35em] sm:tracking-[0.45em] 
      justify-center items-center text-transparent bg-clip-text bg-linear-to-r
       from-orange-900  via-yellow-600 to-orange-900 mt-10 animated-gradient"
      >
        contact
      </p>
      <p
        className="text-secondarytext 2xs:w-full 2xs:h-[150px] sm:text-xl 
      xs:text-[17px] 2xs:text-[15px] align-top md:w-[764px] sm:h-[200px] text-center tracking-[0.2em]"
      >
        You can reach out using the form below or connect with me through one of
        the platforms. I&apos;ll get back to you as soon as possible!
      </p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col md:w-[600px]  2xs:w-full relative "
      >
        <div className="relative xs:mb-15 2xs:mb-5">
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="ENTER YOUR NAME*"
            className="pb-6 px-4 bg-transparent xs:text-lg w-full text-primarytext placeholder-secondarytext focus:outline-none"
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>
        <div className="relative xs:mb-15 2xs:mb-5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL*"
            className="pb-6 px-4 bg-transparent xs:text-lg w-full text-primarytext placeholder-secondarytext focus:outline-none"
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>
        <div className="relative xs:mb-15 2xs:mb-5">
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="PHONE NUMBER"
            className="pb-6 px-4 bg-transparent xs:text-lg w-full text-primarytext placeholder-secondarytext focus:outline-none"
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>
        <div className="relative xs:mb-15 2xs:mb-5">
          <textarea
            placeholder="ENTER YOUR MESSAGE*"
            required
            value={message}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full px-4 bg-transparent text-primarytext placeholder-secondarytext xs:text-lg 
            resize-none pb-2 focus:outline-none"
            rows={windowWidth && windowWidth <= 384 ? 3 : 4}
          />
          <span className="bg-secondarytext absolute bottom-0 h-1 w-full left-0"></span>
        </div>

        <input
          type="submit"
          className="bg-header left-1/2 -translate-x-1/2 relative text-primarytext
         xs:w-[129px] h-[39px] uppercase rounded-2xl font-bold tracking-[0.2em] cursor-pointer
         hover:border-1 hover:border-secondarytext hover:text-secondarytext hover:bg-transparent
         xs:bottom-8 sm:bottom-0
         "
          value="submit"
        />
      </form>
    </div>
  );
}

export default Contact;
