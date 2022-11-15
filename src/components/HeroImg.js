import "../Styles/HeroImgStyle.css";

import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="hrcontent">
                <p>HI, I'M IHSAN SETIYADI <br/> NIM 2110024 </p>
                <h1>This is my midterm exams web project</h1>
                {/* <div className="button">
                    <Link to="/project" className='btn'> Projects </Link>
                    <Link to="/contact" className='btn btn-light'> Contact </Link>
                </div> */}
            </div>
        </div>

    )
}

export default HeroImg;