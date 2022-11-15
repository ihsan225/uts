import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../Styles/About.css";
import IntroImg from "../assets/intro-bg.jpg";


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="about">
                <h1>ABOUT</h1>
                <br/>
                <p>This is a website project as a midterm exam assignment for a framework programming course majoring in informatics engineering - <a href="https://www.instagram.com/stmikantarbangsaofficial/?hl=id"><b>STMIK Antar Bangsa</b></a> <br/><br/>this web template I took from one of the youtube channels that I recreated and modified</p>
                <br/>
                <iframe width="472" height="266" src="https://www.youtube.com/embed/RcfvUWJqHOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About