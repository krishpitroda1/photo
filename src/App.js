import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
// import Privacy from "./components/Privacy";
import End from './components/End';
import { Route, Routes } from "react-router-dom";
// import HashLoader from "react-spinners/HashLoader";
 import { useState} from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
   <div>
   
    <div>
    <Navbar />
    <div className="container mt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
         </Routes>
    </div>
    <End className="absolute"/>
  </div>

    
    </div>
  
  );
}

export default App;


// export default App;
