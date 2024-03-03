"use client";
import { useState } from "react";

const ContactForm = () => {
  const [fields, setFormfields] = useState({
    username: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChangeField = (e) => {
    setFormfields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        username: fields.username,
        email: fields.email,
        number: fields.number,
        message: fields.message,
      };
      const res = await fetch("api/backend/", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await res.json();
        alert("form submitted successfully");
        setFormfields({
          username: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        const { message } = await res.json();

        alert(message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section>
        <form
          onSubmit={submitForm}
          className="flex flex-col py-1 px-4 gap-3 border border-gray-400 items-center"
        >
          <label className=" flex flex-col">
            <span> Name:</span>

            <input
              className="px-3 py-1 border border-gray-400 rounded-md"
              type="text"
              name="username"
              onChange={handleChangeField}
              value={fields.username}
              required
            />
          </label>
          <label className=" flex flex-col">
            <span>Email:</span>
            <input
              className="px-3 py-1 border border-gray-400 rounded-md"
              type="email"
              name="email"
              onChange={handleChangeField}
              value={fields.email}
              required
            />
          </label>
          <label className=" flex flex-col">
            <span> Number:</span>
            <input
              className="px-3 py-1 border border-gray-400 rounded-md"
              type="number"
              name="number"
              onChange={handleChangeField}
              value={fields.number}
              required
            />
          </label>
          <textarea
            name="message"
            id="20"
            cols=""
            className="border px-3 rounded-md border-gray-400"
            rows="3"
            onChange={handleChangeField}
            value={fields.message}
            required
          ></textarea>
          <button className="rounded-full  px-2 py-1 border border-black hover:bg-black hover:text-white transition">
            Submit form
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
