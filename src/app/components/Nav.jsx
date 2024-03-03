import Link from "next/link";
const Nav = ({ classname, toggle, setToggle }) => {
  return (
    <nav className={`${classname}`}>
      <Link
        onClick={() => {
          toggle ? setToggle((prev) => !prev) : undefined;
        }}
        href={"/about"}
      >
        About
      </Link>
      <Link
        onClick={() => {
          toggle ? setToggle((prev) => !prev) : undefined;
        }}
        href={"/contact"}
      >
        Contact
      </Link>
      <Link
        onClick={() => {
          toggle ? setToggle((prev) => !prev) : undefined;
        }}
        href={"/movies"}
      >
        Movies
      </Link>
    </nav>
  );
};

export default Nav;
