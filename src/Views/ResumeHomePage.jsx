import react from "react";
import Header from "../Components/Header/Header";
import Intro from "../Components/Body/Intro";
import Projects from "../Components/Body/Projects";
import Tech from "../Components/Body/Tech";
import Code from "../Components/Body/Code";
import Footer from "../Components/Footer/Footer"

const HomePage = () => {
  return (
    <>
      
      <div className="">
      <Header />
        <Intro />
        <div className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <Projects />
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <Code />
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <Tech />
        </div>
        <Footer />
      </div>
     
    </>
  );
};

export default HomePage;
