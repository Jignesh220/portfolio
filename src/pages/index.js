import * as React from "react";
import { useEffect } from "react";
import Navbar from "../component/resuseable/Navbar";
import Nav from "../component/resuseable/Nav";
import Introduction from "../component/Introduction/Introduction";
import Footer from "../component/resuseable/Footer";
import About from "../component/About/About";
import Projects from "../component/Projects/Projects";
import Contact from "../component/Contact.js/Contact";
import Mfooter from "../component/resuseable/Mfooter";
import Aos from "aos";
import "aos/dist/aos.css"

import '../component/css/main.css'

const IndexPage = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  })
  return (
    <div>
      <Nav/>
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <Mfooter />
      <Footer/>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Jignesh Baria</title>;
