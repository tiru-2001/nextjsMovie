"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ jawSummary }) => {
  const {
    id,
    title,
    synopsis,
    backgroundImage: { url },
  } = jawSummary;
  return (
    <section className="p-2  bg-white rounded-md shadow flex flex-col   gap-2">
      <section className="flex  justify-center items-center">
        <div className="w-full border-2 border-red h-40 relative">
          <Image src={url} alt={"cardImage"} layout="fill" objectFit="cover" />
        </div>
      </section>

      <section className="my-2  flex flex-col gap-4">
        <h1 className="text-2xl mt-2  overflow-hidden h-9 overflow-ellipsis">
          {title}
        </h1>
        <p>{`${synopsis.substring(0, 69)}...`}</p>
        <Link href={`/movies/${id}`}>
          <button className="rounded-full outline-none py-2 px-3 text-center bg-black border border-black text-white hover:bg-white hover:text-black transition">
            Read more
          </button>
        </Link>
      </section>
    </section>
  );
};

export default MovieCard;
