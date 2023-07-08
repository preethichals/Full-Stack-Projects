import React from "react";
import Image from "next/image";

import Projects from "../projects/page";
import pic from "../../../../public/assets/device.jpg";
import { getLogo } from "../../../../sanity/sanity_utils";
import Contact from "../contact/page";

export default async function Skills() {
  const logos = await getLogo();

  return (
    <>
      <div className="bg-red-50" id="skills">
        <div
          className=" container mx-auto grid max-w-2xl grid-cols-1 
            items-center gap-x-8 gap-y-16 px-4 py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:border-b-4 border-cyan-800 "
        >
          <div className=" p-1 m-1">
            <Image
              src={pic}
              width={500}
              height={400}
              alt="img-banner-01"
              className=" object-cover"
            />
          </div>
          <div className=" bg-gray-200 p-4 shadow-lg rounded-lg">
            <h4
              className="font-extrabold text-center headingcursive 
            text-5xl text-black border-b-2 border-gray-300"
            >
              About Me
            </h4>
            <div className="grid grid-cols-1 gap-2 justify-items-center bg-white p-4 ">
              <p className="text-xl text-cyan-950 text-center font-light leading-relaxed">
                With great passion, I have been building front-end designs for
                over three years, and I still find it exhilarating.
                <br /> I am continually seeking new opportunities to learn.
                <br />
                I&apos;m always eager to learn something new. <br />
                I&apos;m primarily focused on Full Stack Development, I am also
                fascinated by UI/UX designs, Brand Identity.
              </p>
            </div>
          </div>
        </div>
    
      
      {/* Skills */}
      <div
        className=" mx-auto grid max-w-2xl grid-cols-1 
        items-center gap-x-8 gap-y-16 px-4 py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8 "
      >
        <div className="bg-red-50 p-2">
          <h4 className="text-5xl text-center m-3 headingcursive">
            My Evolving Skillset
          </h4>
          <div
            className="grid grid-cols-2 bg-white"
            style={{ letterSpacing: "0.1rem" }}
          >
            <div
              className="rounded-md m-1 text-center p-2
              shadow-md shadow-red-500/50"
            >
              <h3 className=" text-red-700 text-lg font-bold rounded-md underline uppercase m-1">
                Front-End
              </h3>
              <p className="bg-white text-sky-900 text-base">
                HTML, CSS,
                <br /> React, Next Js
                <br />
                Bootstrap, Tailwind
              </p>
            </div>

            <div
              className="rounded-md m-1 text-center p-2
             shadow-md shadow-red-500/50"
            >
              <h3 className=" text-red-700 text-lg font-bold rounded-md underline uppercase m-1">
                DataBase
              </h3>
              <p className="bg-white text-sky-900 text-base">My SQL</p>
              <p className="bg-white text-sky-900 text-base"> MongoDB</p>
            </div>
            <div
              className="rounded-md m-1 text-center p-2
              shadow-md shadow-red-500/50"
            >
              <h4 className=" text-red-700 text-lg font-bold rounded-md underline uppercase m-1">
                Back-End
              </h4>
              <p className="bg-white text-sky-900 text-base">
                Node JS,
                <br /> Express
              </p>
            </div>

            <div
              className="rounded-md m-1 text-center p-2
              shadow-md shadow-red-500/50"
            >
              <h3 className=" text-red-700 text-lg font-bold rounded-md underline uppercase m-1">
                UI/UX design,
                <br /> Other <br />
              </h3>
              <p className="bg-white text-sky-900 text-base">Figma, Canva</p>
              <p className="bg-white text-sky-900 text-base">
                Postman, Git, AWS
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white  grid grid-cols-5 gap-2 justify-center p-2 ">
          {logos.map((logo) => (
            <div key={logo._id} className="border-1 border-sky-500">
              {logo.image && (
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={100}
                  height={150}
                  className=" object-contain rounded-lg m-1  p-1 bg-gray-50 scale-100
                   hover:scale-125 transition shadow-xl"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
       {/* Projects */}
      <Projects />

      <Contact />
    </>
  );
}
