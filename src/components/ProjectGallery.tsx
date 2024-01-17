import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {} from "../App.css"
type ProjectGalleryProps ={
    id:number,
    title:string,
    img:string,
    description:string,
    stack:string,
    git:string,
    developmentField:string,
    link:string
}

export function ProjectGallery({
    title,
    img,
    description,
    stack,
    git,
    developmentField,
    link}:ProjectGalleryProps){
     
return (
<Card style={{overflow:"hidden",height:"100%"}} className="bg-black">
    
    <NavLink to={link} target="_blank">  <Card.Img variant="top" src={img} height={"200px"} style={{objectFit:"cover"}} className="zoomIn" /></NavLink>
  
  <Card.Body className="d-flex flex-column" >
<Card.Title className="justify-content-space-between align-items-baseline mb-4">
<span className="fs-2">{title}</span>
</Card.Title>
<div >
  <p >{description}</p>
  <p> <span className="fs-4"> Skills: <br /></span>{stack}</p>

  <p>  {developmentField}</p>

<NavLink to={git} target="_blank" style={{fontSize:" 30px"}}className="text-dark"><i  className="mt-5 fa-brands fa-github " ></i></NavLink>

</div>
  </Card.Body>


  
</Card>
)
}

