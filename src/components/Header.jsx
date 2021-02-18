import React, {useState} from 'react'
import  Menu from "../img/menu.svg"
import  Cancel from "../img/cancel.svg"
import { Box, Link, Image} from "@chakra-ui/react"

export default function Header() {
    const [active, setActive] = useState("true")
     const [btn, setbtn] = useState("false")
     const [navs, setNavs] = useState("true")
     const [show, setShow] = useState('true')

    
    function toggle1(e){
        e.preventDefault()
        setActive(!active)
        setbtn(!btn)
        setNavs(!navs)
        setShow(!show)
    
   
}
function toggle2(e){
 e.preventDefault()
        setActive(!active)
        setbtn(!btn)
         setNavs(!navs)
          setShow(!show)
}

function hide(e) {
    e.preventDefault()
        setActive(!active)
        setbtn(!btn)
         setNavs(!navs)
          setShow(!show)
}
    return (
         <Box w="100%" bg="#000000" color="#ffffff" pt="1.5em" pl={[ "1em", "2em","3em","4.5em"]} pr={[ "1em", "2em","3em","4.5em"]}>
    {active ?<Link href="/" d="block" >
            <Box d={{md:"flex"}}>
                <Image  src={Menu} alt="menu-icon" width={["8%", "6%", "4%", "2%"]} onClick={toggle1} />
               
            </Box>
        </Link> :  <> <Link href="/" d="bock" id="btn"  >
            <Box d={{md:"flex"}}>
                <Image  src={Cancel} alt="menu-icon" width={["8%", "6%", "4%", "2%"]} onClick={toggle2} />
                  
            </Box>
        </Link> <hr />
        <nav >
            <Link href="/" onClick={hide}>Home</Link> <br />
            <Link   href="/" onClick={hide}>About us</Link><br />
            <Link  href="/" onClick={hide}>Services</Link><br />
            <Link   href="/" onClick={hide}>Events</Link><br />
            <Link  href="/" onClick={hide}>Blog</Link><br />
            <Link   href="/" onClick={hide}>Contact us</Link>

            </nav>
            
        </>
        }
    </Box>
    )
}
