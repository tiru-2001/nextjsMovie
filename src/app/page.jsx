import React from "react";
import { HeroSection } from "./components/index";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Lets watch movie together"}
        imageUrl={"/images/home.svg"}
        alt={"hero image"}
      />
    </>
  );
};

export default page;
