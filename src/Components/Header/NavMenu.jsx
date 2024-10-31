import react from "react";
import { Link } from 'react-router-dom';
import Search from "../Search/Search";

const NavMenu = () => {
  return (
    <>
      <div className="full-container flex flex-row justify-center md:justify-around lg:justify-around  pt-5 pb-5 px-10">
        <div className="">
          <p className="text-black bg-white rounded-md px-5 py-2">Professional resume</p>
        </div>
       {/*<Search />*/}
        <div>
          <ul className="flex flex-row justify-between gap-5 text-white uppercase">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            {/*<Link to="/blog">Blog</Link>*/}
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
