import Image from "next/image";
import React from "react";
import BgImage from "../public/Mask Group 8@2x.png"

const Smartworks = () => {
  return (
    <section className="w-full">
      <Image
        className=" w-full h-[550px]"
        alt="Mountains"
        src={BgImage}
      />
    </section>
  );
};

export default Smartworks;
