import react from "react"
import Globe from "../../assets/globe.png"
import data from "../../data/data.json"
import { BeakerIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'



const Projects = () =>{

    const projects = data.projects;

    return (
    <>
        <div className=" mx-auto flex flex-row flex-wrap justify-center items-start h-1/2 w-3/4  pt-10 md:justify-center lg:justify-center lg:items-start  lg:h-auto lg:py-10  lg:w-1/2">
            <div  className="w-full md:w-3/4 lg:w-3/4">
                <h1 className=" text-white text-4xl md:text-6x1 lg:text-7xl text-center"> Projects</h1>
                <div  className="w-full py-5">
               <ul className="bg-white px-5 rounded flex flex-row flex-wrap justify-center items-start py-5">
                {console.log(JSON.stringify(projects[0]?.name))}
                {projects.map((project, index) =>
                        <li key={index} className="text-black flex flex-row flex-wrap justify-between items-center py-2 w-1/2 px-2">
                            <div><a href={project.link} target="_blank">{project.name} <span><ArrowTopRightOnSquareIcon className="size-3 text-black-500 inline-block" /></span></a></div>
                        </li>
                )}
                    
                </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Projects