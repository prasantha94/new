import { url } from "inspector";
import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="relative image1 h-full flex justify-center items-center">
        {/* <Image
          layout="responsive"
          className=" w-full h-full"
          src="/Mask Group 2.png"
          width={600}
          height={600}
          alt=""
        /> */}
        <div className="flex flex-col items-center justify-center flex-1 px-10 text-center">
          <h1 className="text-5xl font-medium text-black max-w-lg tracking-wide">
            CAPABILITIES
          </h1>
          <p className="text-black text-lg">Mobile.</p>
          <p className="text-black text-lg">Web.</p>
          <p className="text-black text-lg">Cloud.</p>
          <button
            type="button"
            className="text-white bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Services
          </button>
        </div>
      </div>
      <div>
        <Image
          className="w-full h-full"
          src="/Mask Group 3.png"
          width={600}
          height={600}
          alt=""
        />
      </div>
    </section>
  );
};

export default Showcase;
