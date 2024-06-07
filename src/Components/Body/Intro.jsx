import react from "react"
import Globe from "../../assets/globe.png"

const Intro = () =>{


    return (
    <>
        <div className="  container dark:bg-slate-800 mx-auto flex flex-row flex-wrap justify-center items-start h-1/5  pt-10 md:justify-center md:h-1/2 lg:justify-around lg:flex-nowrap lg:items-center lg:pt-10 lg:h-auto lg:py-10 lg:w-screen">
            <div >
                <h1 className=" text-white text-4xl md:text-6x1 lg:text-6xl">Leonardo LLanes</h1>
                <p className="text-white text-base"><b>Phone: </b>520-369-0754</p>
                <p className="text-white text-base"><b>Email: </b>llanesleonardo@gmail.com</p>
                <ul>
                    <li className="text-white"><img src=""/>LinkedIn</li>
                </ul>
            </div>
            <div>
                <img src={Globe} className="  w-1/3 hidden md:w-1/2 md:block md:mx-auto md:py-5 lg:flex-nowrap lg:justify-evenly lg:w-1/2 lg:block" />
            </div>
        </div>
    </>
    )
}

export default Intro