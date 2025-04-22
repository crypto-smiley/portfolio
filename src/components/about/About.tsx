import React from "react";
import { Heading, Text, Button } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import "./About.css";
import { text } from "../../helpers/text";

const About = () => {
  
  // const [isVisible, setIsVisible] = useState<boolean>(true);
  // const hide = () => setIsVisible(false);

  const getFontSize = () => {
    const width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  };

  /*const getAlertSize = () => {
    const width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  };

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>
            💻{"   "}<a href="mailto:tijan@tijan.dev" className="contact-link">Hire Me!</a>
            <span className="follow-me-link">🐦{"   "}</span><a href="https://twitter.com/0xTijan" className="contact-link">Follow Me!</a>
          </Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      );
    }else{
      return null;
    }
  };*/

  return(
    <>
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title">
              <Heading as='h1' fontSize={getFontSize()} size='4xl'>
                <span className="name">🙂 JOHN</span>
              </Heading>
            </div>
            <div className="about-text-desc">
              <Text fontSize='3xl'>{text.aboutHi + " " + text.aboutIam + " " + text.aboutSkilled} <span className="name">Full Stack & Blockchain Engineer</span> {text.aboutText}</Text>
            </div>

            <div className="icons">
              <a href="https://twitter.com/0xTijan" target="_blank" rel="noreferrer">
                <AiFillLinkedin className="icon" />
              </a>
              <a href="https://github.com/0xTijan" target="_blank" rel="noreferrer">
                <AiFillGithub className="icon" />
              </a>
              <a href="mailto:john.arnold.crypto@gmail.com" target="_blank" rel="noreferrer">
                <AiOutlineMail className="icon" />
              </a>
            </div>

            <a href="mailto:john.arnold.crypto@gmail.com">
              <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
                {text.contactButton}
              </Button>
            </a>
          </div>
          <div className="about-avatar">
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="bottom-icon">
            <a href="#more">
              <BsChevronDown />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;