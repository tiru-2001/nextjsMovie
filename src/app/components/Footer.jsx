import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="sticky top-full py-4  bg-black px-2">
      <section className="flex flex-col gap-5">
        <h1 className="text-white text-center font-bold text-2xl capitalize">
          Follow Us on
        </h1>

        <section className="flex md:flex-row flex-col gap-4 md:gap-0 items-center my-0 mx-auto w-[60%] justify-evenly">
          <Link
            href="https://www.facebook.com/teshwar.teshwar.1"
            target="_blank"
          >
            <FaFacebookF className="w-7 h-7 text-green-400" />
          </Link>
          <Link href="https://github.com/tiru-2001" target="_blank">
            <FaGithub className="w-7 h-7 text-green-400" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tirumalesha-e-20589221a/"
            target="_blank"
          >
            <FaLinkedin className="w-7 h-7 text-green-400" />
          </Link>
          <Link
            href="https://www.instagram.com/tirumalesh1yadav/?hl=en"
            target="_blank"
          >
            <FaInstagram className="w-7 h-7 text-green-400" />
          </Link>
        </section>

        <section className="text-white  items-center md:flex-row flex-col text-xl my-0 mx-auto flex w-[40%] justify-evenly">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/movies"}>Movies</Link>
        </section>
      </section>
    </section>
  );
};

export default Footer;
