import React from "react";
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="social_media">
                <h3 className="follow">Follow us on</h3>
                <div className="icons">
                    <FaInstagram className="instagram" />
                    <FaLinkedin className="linkedin" />
                    <FaTwitter className="twitter" />
                </div>
            </div>
            <h3 className="copy">Copyright©  2022 by NYUNYU’S MART</h3>
        </footer>
    )
}

export default Footer