import React,{ Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () =>{
 return(
     <div>

        <Header />
        <div className="container col-md-5">

            <h3>Hello</h3>
            <p> lorem  </p>
            <h4 className="text-success"> From Healthy cafe</h4>
        </div>
         <Footer   company="TH Engineering.,co.ltd"
          email="teerawat.th@outlook.com" />
     </div>
 )   
}

export default About;