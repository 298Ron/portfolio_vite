
import { Routes,Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ToastContainer } from "react-toastify";
function App() {


  return (
   
    <Container className="mb-4">
       <ToastContainer />
      <Navbar />
<Routes>
  <Route path="/" element={<Home/>}/>
</Routes>
<Footer/>
    </Container>
  )
}

export default App
