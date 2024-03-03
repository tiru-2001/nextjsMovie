import Image from "next/image";
const page = async ({ params: { id } }) => {
  let main_Data;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "51daf4d594msh37bea9ae9815165p179206jsn9826f4d33f64",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    main_Data = result[0].details;
  } catch (error) {}

  return (
    <section className=" py-8  flex items-center justify-center ">
      <section className="h-[70%] flex flex-col p-3 gap-3">
        <h1 className="text-4xl font-bold">
          <span className=" text-red-600">Netflix</span>\
          <span>{main_Data?.type}</span>
        </h1>
        <section className="h-[300px] relative w-full sm:w-[60%]">
          <Image
            src={main_Data?.backgroundImage?.url}
            layout="fill"
            objectFit="cover"
          />
        </section>
        <section>
          <h1 className="text-3xl font-bold">{main_Data.title}</h1>
          <p>{main_Data.synopsis}</p>
        </section>
      </section>
    </section>
  );
};

export default page;
