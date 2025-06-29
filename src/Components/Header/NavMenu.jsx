import react from "react";
import { Link } from 'react-router-dom';
import Search from "../Search/Search";

const NavMenu = () => {
  return (
    <>
    <nav className="sticky top-0 z-50">
      <div className="bg-white flex flex-col md:flex-row justify-center md:justify-around lg:justify-around  pt-5 pb-5 px-10 ">
        <div className="">
          <p className="text-slate-800 rounded-md px-5 py-2  text-center md:text-left">3L Technology & Innovation</p>
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
                  <a href="www.linkedin.com/in/leonardo-llanes-86184272" target="_blank">LINKEDIN</a>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center w-screen bg-blue-800 hidden md:block">
          <ul className=" flex flex-row justify-center gap-5 text-white py-3">
            <li>
              <a href="#consulting" >Consulting services</a>
            </li>
            <li>
              <a href="#odoosolutions" >Odoo ERP and Odoo.sh</a>
            </li>
                        <li>
              <a href="#crmsolutions" >CRM Solutions</a>
            </li>
            <li>
              <a href="#websolutions" >Web </a>
            </li>
            <li>
              <a href="#socialmedia" >Social media</a>
            </li>
            <li>
              <a href="#massemail" >Mass email </a>
            </li>
          </ul>
          </div>
        </div>
    </nav>
    </>
  );
};

export default NavMenu;
