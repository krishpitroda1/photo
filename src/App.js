import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Ai1k from "./components/AI1k";
import Error from "./components/Error";
import Privacy from "./components/Privacy";
import Tpo from "./components/Tpo";
import Students from "./components/Students";
import Collages from "./components/Collages";
import Consulting from "./components/Consulting";
import Mentoring from "./components/Mentoring";
import Vas from "./components/Vas";
import People from "./components/People";
import Health from "./components/Health";
import Fun from "./components/Fun";
import Csr from "./components/Csr";
 import Services from "./components/Services";
import End from './components/End';
import { Route, Routes } from "react-router-dom";
// import HashLoader from "react-spinners/HashLoader";
 import { useState} from "react";
 import Terms from "./components/Terms";
// import { keyframes } from "styled-components";
// import Carrers from "./components/Carrers";
// import PulseLoader from 'react-spinners/PulseLoader'
function App() {
  const override={
    display: "block",
    margin: "0 auto",
    position:'absolute',
    width:"100%",
    height:"100vh",
    }
 const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#1cbd68");
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },2000)
  },[])

  useEffect(() => {


    window.scrollTo(0, 0);
  }, [location.pathname]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
   <div>
   
    <div>
    <Navbar />
    <div className="container mt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
        <Route path="/Terms" element= {<Terms/>}/>
        <Route path="/Privacy" element={<Privacy/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/AI1k" element={<Ai1k/>} />
        <Route path="/People" element={<People/>} />
        <Route path="/Mentoring" element={<Mentoring/>} />
        <Route path="/Vas" element={<Vas/>} />
        <Route path="/Consulting" element={<Consulting/>} />
        <Route path="/Tpo" element={<Tpo/>} />
        <Route path="/Collages" element={<Collages/>} />
        <Route path="/Students" element={<Students/>} />
        <Route path="/Fun" element={<Fun/>} />
        <Route path="/Csr" element={<Csr/>} />
        <Route path="/Health" element={<Health/>} />
        
     
         </Routes>
    </div>
    <End className="absolute"/>
  </div>

    
    </div>
  
  );
}

export default App;