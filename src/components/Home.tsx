import {  Col, Container, Row } from "react-bootstrap";
import projects from "../data/items.json";
import { ProjectGallery } from "./ProjectGallery";
import {} from "../App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { successMsg } from "../services/feedbackService";
import emailJs from "@emailjs/browser";
import { Link } from "react-router-dom";


export function Home(){



    // My skills
let languages: { img: string }[] = [
    { img: `./images/languages/javascript.png` },
    { img: `./images/languages/React-icon.png` },
    { img: `./images/languages/typescript.png` },
    { img: `/images/languages/html5.png` },
    { img: `./images/languages/css3.png` },
    { img: `./images/languages/bootstrap.png` },
    { img: `./images/languages/sass.png` },
];
/* Formik objects */
let formik = useFormik({
    initialValues:{name:"",email:"",message:""},
    validationSchema:yup.object({
        name:yup.string().required().min(2),
        email:yup.string().required().email(),
        message:yup.string().required().max(300),
    }),
    onSubmit(){
successMsg("Message sent succesffully!")
clear()
    }
})

/* Send email function with emailJs */
const sendEmail = (e:any)=>{
    e.preventDefault();
    emailJs.sendForm(`service_vis6cga`,`template_tlszy9a`,e.target,`rzHlV9MnjwYNF-Phc`)
}

/* Clear contact fields (inputs) */
let clear = () => {
    formik.resetForm()
}
    return <>
  
  <Container style={{textAlign:"center",paddingTop:"70px"}}  id="about">
    <div>
{/* HOME SECTION */}
{/* HOME SECTION */}
{/* HOME SECTION */}
{/*   <h1 className="text-light" style={{position:"relative",paddingTop:"80px"}} id="home">Home Page</h1> */}
</div>

{/* ABOUT SECTION*/}
  <h1 className="text-light mt-5" style={{position:"relative"/* ,paddingTop:"100px" */}} >About Me</h1>
  <div className="row mb-5 text-dark" style={{textAlign:"center"}}>
    
    {/* THE IMAGE */}

    <div className="col-lg-3  mt-3" >
  
        <img className="zoomOut" src="/images/avatar/Avatar.jpg" alt="profile picture" style={{width:"315px",borderRadius:"50px"}}/>
       
    </div>
     
    {/* PERSONAL INFO */}

<div className="col-lg-6 ">
    <h2 className="mt-3">Personal Info</h2>
    <p className="col-md-8 m-auto fs-5">  🔒Passionate 22 y.o Full-Stack Web Developer with a dynamic skill set,
    My journey into the tech realm was shaped by a commitment to communication, meticulous attention to details, and a collaborative teamwork ethos.
    🎓Having successfully completed the rigorous FullStack Developer program at HackerU.
    🚀 Beyond the code, my holistic approach to development integrates personal qualities that have been integral to my achievements, fostering an environment where creativity meets precision in the ever-evolving landscape of web development.🌐#WebDeveloper #Full-Stack</p>
      
    </div>
    {/* THE LANGUAGES */}
    <div className="col-lg-3 mt-3">
        
        <div className="row " >
            <h4>My Languages</h4>
           {languages.map((language=>(
          
           <div className="col-6 m-auto zoomIn my-3" key={language.img}><img src={language.img} alt={language.img} width={"50%"} /></div>
      
       
      
           )))}
           </div>
           
        </div>

  </div>
  <Link  to={`/cv/Ron-Shilimov-CV.pdf`} target="_blank" download><button className="btn some some p-3 mb-5 zoomOut " id="gallery" >DOWNLOAD RESUME</button></Link>

 

  {/* THE PROJECTS GALLERY  SECTION*/} 


  <div className="border-bottom pb-5" >
  <h1 className="text-light py-5 border-top "  style={{position:"relative",}} >My Gallery</h1>
    <Row xs={1} md={1}  lg={3} className="g-5 mb-3">
        {projects.map(project=>(
            <Col key={project.id}>
                <ProjectGallery {...project}/>
                </Col>
        ))}
    </Row>
    <span id="contact" />
    </div>



     {/* THE CONTACT SECTION*/}


  <div className="" style={{position:"relative"}}>

  <h1 className="text-light py-3 mt-5"  style={{position:"relative"}} >Contact Me</h1>
  <form  className="form row col-xl-5 m-auto"  id="myForm" onSubmit={(e)=>{
    sendEmail(e);
formik.handleSubmit(e);

  } }>
                    <div className="form-floating ">
                        <input type="text" className="form-control shadow mb-2"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                            placeholder="Name" />
                        <label htmlFor="name" className="ms-4 text-dark">Name</label>
                      {(formik.touched.name && formik.errors.name) && (
                         <small className="text-danger">Please enter your name</small>
                      )}
                      
                    </div>
                    <div className="form-floating ">
                        <input type="email" className="form-control shadow mb-2"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Email" />
                        <label htmlFor="email" className="ms-4 text-dark">Email</label>
                        {(formik.touched.email && formik.errors.email) && (
                            <small className="text-danger">Please enter corret email</small>)}
                    </div>
                    
                    <div className="form-floating ">
                            <textarea   className="text-dark  form-control shadow mb-2"
                            id="floatingmessage"
                             name="message"
                             value={formik.values.message}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur} 
                             placeholder="message" 
                             style={{resize:"none",height:"200px"}}></textarea>
                        <label 
                      id="message"
                        htmlFor="floatingmessage" 
                        className="ms-4 text-dark"
                       
                        >message</label>
                      {(formik.touched.message && formik.errors.message) && (
                         <small className="text-danger">Please enter a message</small>
                      )}
                    </div>
                    <div className="my-2 ">

                        <button className="btn btn-secondary col-12 my-2 zoomIn2" type="submit">SUBMIT</button>
                    
                    </div>
                </form>
                </div>
    </Container>
    </>
}