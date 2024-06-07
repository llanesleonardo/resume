import react from "react"
import Globe from "../../assets/globe.png"
import data from "../../data/data.json"
import { BeakerIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'



const Intro = () =>{

    const projects = data.projects;

    return (
    <>
        <div className="container dark:bg-slate-800 mx-auto flex flex-row flex-wrap justify-center items-start h-1/2 w-full  pt-10 md:justify-center lg:justify-center lg:items-start  lg:h-auto lg:py-10">
            <div  className="w-1/2">
                <h1 className=" text-white text-4xl md:text-6x1 lg:text-7xl text-center"> Projects</h1>
                <div  className="w-full py-5">
               <ul className="bg-white px-3 rounded">
                {console.log(JSON.stringify(projects[0]?.name))}
                {projects.map((project, index) =>
                        <li key={index} className="text-black flex flex-row flex-wrap justify-between items-center py-2">
                            <div><a href={project.link} target="_blank">{project.name} <span><ArrowTopRightOnSquareIcon className="size-3 text-black-500 inline-block" /></span></a></div>
                        </li>
                )}
                    
                </ul>
                </div>
            </div>
            <div>
                <img src={Globe} className="w-1/3 block mx-auto pt-10 md:w-1/2 md:hidden md:mx-auto md:py-5 lg:w-full lg:hidden" />
            </div>
        </div>
    </>
    )
}

export default Intro