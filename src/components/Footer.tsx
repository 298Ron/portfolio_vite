import { NavLink } from "react-router-dom"
import {} from "../App.css"

export function Footer(){
    return (
    <div className="mt-3  " style={{textAlign:"center",minHeight:"15vh",color:"black",marginBottom:"-50px"}}>
        <div className="row m-auto col-md-6" >
            <div className="mt-4 fs-2 bg-white p-3 rounded-5">
                
                <NavLink to="https://www.linkedin.com/in/ron-shilimov-16b132264/" target="_blank"><i className="fa-brands fa-linkedin icon col-3 zoomIn"></i></NavLink>
                <NavLink to="https://github.com/298Ron" target="_blank"><i className="fa-brands fa-github icon col-3 zoomIn"></i></NavLink>
                <NavLink to="https://www.facebook.com/Roman.Ron21" target="_blank"><i className="fa-brands fa-facebook icon col-3 zoomIn"></i></NavLink>
                <NavLink to="https://wa.me/972533396906" target="_blank"><i className="fa-brands fa-whatsapp icon col-3 zoomIn"></i></NavLink>
            </div>
        </div>
    </div>
    )
}