import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
       
          <p>Follow us for more Wine!</p>
          <div>
            <FaFacebookF className="favicon" />
            <FaInstagram className="favicon"></FaInstagram>
            <FaPinterestP className="favicon"></FaPinterestP>
            <FaEnvelope className="favicon"></FaEnvelope>
          </div>
     
      </footer>
    </>
  );
};

export default Footer;
