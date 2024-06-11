import react from "react";

const NavMenu = () => {
  return (
    <>
      <div className="container flex flex-row justify-center md:justify-around lg:justify-around  pt-5 pb-5">
        <div className="">
          <p className="text-black bg-white rounded-md px-5 py-2">Professional resume</p>
        </div>
        <div>
          <ul className="flex flex-row justify-around gap-5">
            <li>
             {/* <p className="text-white">Home</p>*/}
            </li>
            <li>
             {/* <p className="text-white">Projects</p>*/}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
