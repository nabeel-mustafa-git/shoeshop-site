import { navLinks } from "../constants";
import { useState } from "react";
import hamburger from "../assests/icons/hamburger.svg";
import cross from "../assests/icons/cross.svg";

const Nav = () => {
  const [imgURL, setImgURL] = useState(hamburger);

  const handleClick = () => {
    imgURL === hamburger ? setImgURL(cross) : setImgURL(hamburger);
  };

  return (
    <div className="absolute z-10 w-full">
      <nav className="px-10 py-3 flex justify-between items-center max-container relative">
        <a className="logo tracking-tightest text-3xl" href="/">
          shoe
          <span className="text-main-color">s</span>
          hop
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-14 ${
            imgURL === hamburger
              ? "max-lg:hidden"
              : "flex-col absolute right-0 top-0 px-[3rem] py-[5rem] border-l-2 border-b-2 border-main-colorr rounded-bl-3xl bg-white shadow-2xl"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="text-slate-500 leading-normal hover:text-main-color" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={imgURL} alt="hamburger" width={27} height={25} className="cursor-pointer relative z-10" onClick={handleClick} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
