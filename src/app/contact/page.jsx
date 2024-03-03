import { ContactForm, ContactHeader } from "../components/index";

const page = () => {
  return (
    <section className="flex flex-col py-3 gap-3">
      <h1 className="text-4xl font-bold my-2 text-center">Contact </h1>
      <section className="grow flex flex-col items-center gap-5">
        <ContactHeader />
        <section className="flex items-center flex-col gap-1">
          <h1 className="my-3 text-3xl text-center font-bold">
            We'd love to hear <span className="text-red-500"> from your</span>
          </h1>
          <ContactForm />
        </section>
      </section>
    </section>
  );
};

export default page;
