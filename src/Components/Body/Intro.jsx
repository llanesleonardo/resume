import react from "react"
import Globe from "../../assets/globew.png"

const Intro = () =>{


    return (
    <>
        <div className="  container w-full mx-auto flex flex-row flex-wrap justify-center items-start h-1/5  pt-10 md:justify-center md:h-1/2 lg:justify-around lg:flex-nowrap lg:items-center lg:pt-10 lg:h-auto lg:py-10">
            <div className="text-center w-1/2">
                <h1 className=" text-white text-4xl md:text-6x1 lg:text-6xl">Leonardo LLanes</h1>
                <p className="text-white text-base"><b>Email: </b>llanesleonardo.developer@gmail.com</p>
            </div>
            <div className="mx-auto w-1/2">
                <img src={Globe} className="  w-1/3 hidden md:w-1/3 md:block md:mx-auto md:py-5 lg:flex-nowrap lg:justify-evenly lg:w-1/3 lg:block" />
            </div>
        </div>
    </>
    )
}

export default Intro