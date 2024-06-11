import react from "react"
import Globe from "../../assets/globe.png"

const Footer = () =>{


    return (
    <>
        <div className=" mx-auto flex flex-row flex-wrap justify-center items-start h-1/5  pt-10 md:justify-center md:h-1/2 lg:justify-around lg:flex-nowrap lg:items-center lg:pt-10 lg:h-auto lg:py-10 lg:w-screen">
            <div>
                <hr className=" w-full bg-white"/>
                <p className="text-white text-base text-center">Copyright &copy; </p>
            </div>
        </div>
    </>
    )
}

export default Footer