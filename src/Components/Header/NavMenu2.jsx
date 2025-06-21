import react from "react";
import { Link } from 'react-router-dom';
import Search from "../Search/Search";

const NavMenu2 = () => {
  return (
    <>
    <nav className="sticky top-0 z-50">
      <div className="bg-white flex flex-row justify-center md:justify-around lg:justify-around  pt-5 pb-5 px-10 ">
        <div className="">
          <p className="text-slate-800 rounded-md px-5 py-2">3L Technology & Innovation</p>
        </div>
       {/*<Search />*/}
        <div className="flex flex-row justify-center items-center">
          <ul className="flex flex-row justify-between gap-5 text-slate-800  uppercase">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/resume">Resume</Link>
            </li>
           {/* <li>
            <Link to="/blog">Blog</Link>
            </li>*/}
       
             <li>
            <a href="www.linkedin.com/in/leonardo-llanes-86184272" target="_blank">LINKEDIN</a>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        </div>
    </nav>
    </>
  );
};

export default NavMenu2;
