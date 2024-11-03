import react from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Body/Hero";
import ConsultingServices from "../Components/Body/ConsultingServices";
import BigMessage from "../Components/Body/BigMessage";
import DigitalSolutions from "../Components/Body/DigitalSolutions";
import Footer from "../Components/Footer/Footer";
import SocialMedia from "../Components/Body/SocialMedia";
import Hero2 from  "../Components/Body/Hero2";
import EmailServices from "../Components/Body/EmailServices";

const HomePage = () => {
  return (
    <>
      <div id='top' className="">
        <Header />
        <Hero />
        <div id='consulting' className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <ConsultingServices />
        </div>
        <div className="bg-white mx-auto flex flex-row flex-wrap items-start justify-center">
          <BigMessage />
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <Hero2 />
        </div>
        <div id='websolutions' className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <DigitalSolutions />
        </div>

        
        <div id='socialmedia' className="container mx-auto flex flex-row flex-wrap items-start justify-center">
          <SocialMedia />
        </div>
        <div id='massemail' className="bg-white mx-auto flex flex-row flex-wrap items-start justify-center">
          <EmailServices />
        </div>
        <div className="container mx-auto flex flex-row flex-wrap items-start justify-center"></div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
