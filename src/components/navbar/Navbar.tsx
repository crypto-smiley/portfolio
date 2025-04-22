// src/Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Heading, Text } from "@chakra-ui/react";
import English from "../../images/english.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight*0.4) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? "show" : ""}`}>
      <div>
        <div className="navbarText">
          <Heading as="h2">
            John
          </Heading>
          <Text fontSize="2xl" className="name">
            Full Stack & Blockchain
          </Text>
        </div>
      </div>
      <div className="navbarRight">
        <div className="icons">
          <a href="https://t.me/TijanWeb3" target="_blank" rel="noreferrer">
            <AiFillLinkedin className="icon" />
          </a>
          <a href="https://github.com/crypto-smiley" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
          </a>
          <a href="mailto:john.arnold.crypto@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail className="icon" />
          </a>
        </div>
        <a href="/?l=en">
          <img src={English} className="language" alt="English" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
