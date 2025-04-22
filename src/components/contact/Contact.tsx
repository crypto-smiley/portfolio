import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { text } from "../../helpers/text";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "john.arnold.crypto@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:john.arnold.crypto@gmail.com",
  },
  {
    name: "LINKEDIN:",
    info: "@crypto-smiley",
    icon: <AiFillLinkedin className="contact-icon" />,
    url: "https://twitter.com/0xTijan",
  },
  {
    name: "GitHub:",
    info: "@crypto-smiley",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/crypto-smiley",
  },
  {
    name: "LOCATION:",
    info: "Texas, United States",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/usa/texas",
  },
];

const Contact = () => {

  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">{text.contactHeading}</p>
        {/*<p className="text">If you have any questions or want to hire me, please contact me:</p>*/}
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="button-container">
        <a href="mailto:tijan@tijan.dev">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            {text.contactButton}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;