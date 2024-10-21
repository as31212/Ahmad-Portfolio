import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  const [navActive,setNavActive] = useState(false);
  const toggleNav = ()=>{
    setNavActive(!navActive);
  }
  return (
    <>
        <Nav navActive={navActive} toggleNav={toggleNav} />
        <Home />
        <About />
        <Experience />
        <Projects />
        <br className=" min-h-screen" />
        <Contact />
    </>
  );
}

export default App;
