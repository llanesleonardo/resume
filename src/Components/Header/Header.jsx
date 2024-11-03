import react from "react"
import NavMenu from "./NavMenu"
import NavMenu2 from "./NavMenu2"
import { useLocation } from 'react-router-dom'

const Header = () =>{
const location = useLocation();
console.log(location.pathname);
    return (
    <>
        {location.pathname === '/' ? <NavMenu/> : <NavMenu2/>}

    </>
    )
}

export default Header