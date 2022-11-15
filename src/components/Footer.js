import "../Styles/FooterStyle.css";
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            Copyright &copy; {new Date().getFullYear()} | <a>Ihsan Setiyadi</a>
        </div>
    );
};

export default Footer;
