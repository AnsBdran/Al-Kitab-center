import React from "react";

export default function Hero() {
  return (
    <div className="h-64  relative flex justify-center items-center">
      <img
        src="imgs/india.jpg"
        alt="القرآن الكريم"
        className="object-cover absolute inset-0 h-full w-full"
      />
      <div className="bg-slate-800 inset-0 absolute opacity-60"></div>
      <h1 className="z-10 text-slate-200 text-4xl lg:text-5xl lg:leading-snug font-semibold text-center px-4 leading-relaxed">
        <span className="text-white xs:text-5xl lg:text-6xl"> مركز الكتاب</span>{" "}
        <br className="hidden xs:block" />
        لتعليم القرآن الكريم والسنَّة النبوية.
      </h1>
    </div>
  );
}
