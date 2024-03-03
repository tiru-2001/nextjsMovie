import React from "react";
import { HeroSection } from "../components/index";

const page = () => {
  return (
    <>
      <HeroSection
        title={"our story"}
        alt={"about"}
        imageUrl={"/images/about1.svg"}
      />
    </>
  );
};

export default page;
