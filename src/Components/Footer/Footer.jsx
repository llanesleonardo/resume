import react from "react"
import Globe from "../../assets/globe.png"
import { ArrowLongUpIcon } from "@heroicons/react/24/outline"

const Footer = () =>{


    return (
    <>
        <div className=" mx-auto flex flex-row flex-wrap justify-center items-start h-1/5  pt-10 md:justify-center md:h-1/2 lg:justify-around lg:flex-nowrap lg:items-center lg:pt-10 lg:h-auto lg:py-10 lg:w-screen">
            <div>
                <div className="py-4 px-4 bg-white rounded mb-10">
                    <a href="#top" >
                    <ArrowLongUpIcon  className=" mx-auto w-8 h-8 text-slate-800"/>

                    </a>
                    </div>
                <hr className=" w-full bg-white"/>
                <p className="text-white text-base text-center">Copyright &copy; </p>
            </div>
        </div>
    </>
    )
}

export default Footer