import react from "react"
import Header from "../Components/Header/Header"
import Intro from "../Components/Body/Intro"
import Projects from "../Components/Body/Projects"
const HomePage = () =>{


    return (
    <>
    
        <Header/>
        <div className="h-screen">
        <Intro/>
        <Projects/>
        </div>
    </>
    )
}

export default HomePage