import { Container,Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {} from "../App.css"
import { useEffect, useState } from "react";

export function Navbar(){

    /* Scroll on click to specific div  by id*/
    function scrolldiv(divId:string) {
        var elem :any= document.getElementById(divId);
        elem.scrollIntoView();
    }



const [show,setShow] = useState(false)
const [lastScrollY, setLastScrollY] = useState(0);

/* Change navbaar css on scrollY */
const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(true); 
    } else if(window.scrollY==0){ // if scroll up show the navbar
        
            setShow(false);
       
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


    return (
    <Container className="mt-2 " style={{position:"fixed",zIndex:"3"}}>
    <NavbarBs className={`me-4`}>

    <Nav className={`navbar m-auto p-3  rounded-5 active ${show && 'hidden'}`}  style={{width:"600px"}}>
      {/*   <Nav.Link to="/" onClick={()=>scrolldiv("home")} as={NavLink} className="zoomIn ms-3">Home</Nav.Link> */}
        <Nav.Link to="" onClick={()=>scrolldiv("about")} as={NavLink} className="zoomIn ms-3">About</Nav.Link>
        <Nav.Link to="" onClick={()=>scrolldiv("gallery")} as={NavLink} className="zoomIn">Gallery</Nav.Link>
        <Nav.Link to="" onClick={()=>scrolldiv("contact")} as={NavLink} className="zoomIn me-3">Contact</Nav.Link>
    </Nav>
    
    </NavbarBs>
    </Container>
    )
}