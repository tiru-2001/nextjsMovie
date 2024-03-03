import { MovieCard } from "../components/index";
const Movies = async () => {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "51daf4d594msh37bea9ae9815165p179206jsn9826f4d33f64",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  let result;
  try {
    const response = await fetch(url, options);
    result = await response.json();
  } catch (error) {}

  return (
    <section className="flex bg-slate-200 gap-5 flex-col my-2">
      <section>
        <h1 className="text-4xl font-black py-4 text-center">
          Series & Movies
        </h1>
      </section>
      <section className=" border-2 py-4 px-3  justify-center grow grid grid-cols-[90%] sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {result?.titles?.map((curElem, ind) => (
          <div className=" flex lg:p-5 justify-center items-center " key={ind}>
            <MovieCard key={ind} {...curElem} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Movies;
