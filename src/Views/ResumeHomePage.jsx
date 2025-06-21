import react from "react";
import Header from "../Components/Header/Header";
import Intro from "../Components/Body/Intro";
import Projects from "../Components/Body/Projects";
import Tech from "../Components/Body/Tech";
import Code from "../Components/Body/Code";
import Footer from "../Components/Footer/Footer"
import DigitalSolutionsTools from "../Components/Body/DigitalSolutionsTools";

const HomePage = () => {
  return (
    <>
      
      <div className="">
      <Header />
        <Intro />
        <div className=" container mx-auto flex flex-row flex-wrap items-start justify-center my-10">
          <Projects />
        </div>
        <div className="bg-white container mx-auto flex flex-row flex-wrap items-start justify-center">
          <DigitalSolutionsTools />
        </div>

        <Footer />
      </div>
     
    </>
  );
};

export default HomePage;
