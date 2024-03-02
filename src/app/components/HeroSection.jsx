import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({ title, imageUrl, alt }) => {
  return (
    <section className="bg-gradient-to-r from-cyan-100 via-violet-400 to-blue-300">
      <section className="px-6 h-full sm:h-[500px] sm:flex-row flex-col gap-4 sm:gap-0  py-8 flex justify-between">
        <section className="flex items-center justify-center  flex-1">
          <section className="w-full sm:w-[75%] gap-5 flex flex-col items-center sm:items-start">
            <h1 className="text-3xl sm:text-5xl capitalize font-extrabold">
              {title}
            </h1>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              autem?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni, deserunt!
            </p>
            <Link href="/movies">
              <button className="rounded-full outline-none py-2 px-3 text-center bg-black text-white hover:bg-white hover:text-black transition">
                explore movies
              </button>
            </Link>
          </section>
        </section>
        <section className="flex justify-center items-center flex-1">
          <section className="flex h-[60%] w-[60%] items-center justify-center">
            <Image
              src={imageUrl}
              alt={alt}
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
