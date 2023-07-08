import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div
      className="mx-auto grid max-w-2xl grid-cols-1 items-center 
    gap-x-8 gap-y-6 px-4 py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8 border-t-2 border-gray-200"
      id="contact"
    >
       <div className=" bg-white p-4">
        <h4 className="text-5xl font-extrabold text-center m-2 headingcursive ">
          <span
            className=" text-5xl bg-gradient-to-r from-orange-400 via-red-500
           to-cyan-700 bg-clip-text text-transparent"
          >
            Contact Me
          </span>
        </h4>
        <p
          className=" text-base text-cyan-950 font-bold 
        leading-relaxed mb-4 text-center"
        >
          Thank you for visiting My Portfolio! <br />
          If you have any questions, comments, or business inquiries, I am
          available to answer your questions and discuss any opportunities. Here
          is my contact information --&gt; 
        </p>
       
      </div>
       <div className=" bg-white  sm:border-0 md:border-l-4 lg:border-l-4 border-cyan-800 p-4">
      
        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
        >
          <Link
            className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4 border-2 border-gray-300 p-2 rounded-md hover:bg-gray-900 hover:text-amber-600"
            id="sendemail" target="_blank" rel="noopener noreferrer"
            href="mailto:preethi.lyn@gmail.com"
          >
            Click to Send Email
          </Link>
          
        </p>
        

        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
        >
          Email :
          <Link
            className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
            href="mailto:preethi.lyn@gmail.com" target="_blank" rel="noopener noreferrer"
          >
            {" "}
            preethi.lyn@gmail.com
          </Link>
        </p>
        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4 uppercase"
        >
         
          <Link
            className=" text-xl font-semibold text-center bg-slate-100 text-black
         mb-4 border p-2 rounded-md" style={{ letterSpacing: "0.2rem" }}
            href="https://drive.google.com/file/d/1y-Hod-tFwYAyUGtkQNYybBmauUk2EZnW/view?usp=sharing" target="_blank" rel="noopener noreferrer"
          >
            {" "}
           View Resume
          </Link>
        </p>

        <p
          className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
        >
          {" "}
          Follow Me :{" "}
          <span>
            <Link
              className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
              href="https://github.com/preethichals" target="_blank" rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </Link>
          </span>{" "}
          <span>
            <Link
              className=" text-xl text-cyan-950 font-bold text-center 
        leading-relaxed mb-4"
              href="https://www.linkedin.com/in/preethi-m-43289b6a/" target="_blank" rel="noopener noreferrer"
            >
              {" "}
              | LinkedIn{" "}
            </Link>{" "}
          </span>
          
        </p>
      </div>
     
     
    </div>
  );
}
