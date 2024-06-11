import react from "react"
import Globe from "../../assets/globe.png"
import data from "../../data/data.json"
import { BeakerIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'



const Tech = () =>{

    const tools = data.tools;

    return (
    <>
        <div className="  mx-auto flex flex-row flex-wrap justify-center items-start h-1/2 w-3/4 pt-10 md:justify-center lg:justify-center lg:items-start  lg:h-auto lg:py-10 lg:w-1/2">
            <div  className="w-full md:w-3/4 lg:w-3/4">
                <h1 className=" text-white text-4xl md:text-6x1 lg:text-7xl text-center"> Tools</h1>
                <div  className="w-full py-5">
               <ul className="bg-white px-5 py-5 rounded flex flex-row flex-wrap justify-center items-start">
                {console.log(JSON.stringify(tools[0]?.name))}
                {tools.map((tool, index) =>
                        <li key={index} className="text-black flex flex-row flex-wrap justify-between items-center py-2">
                            <div><img src={`https://resumetresele.blob.core.windows.net/resumetresele${tool.imgUrl}`} target="_blank" className="w-28 md:w-44 lg:w-52"/></div>
                        </li>
                )}
                    
                </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Tech