import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareButtons = () => {
    const instagramShareLink = `https://www.instagram.com`;
    const twitterShareLink = `https://twitter.com`;
    const facebookShareLink = `https://www.facebook.com`;

    return (
        <div className="share-buttons">
           
                <a href={instagramShareLink} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />

                </a>
                <a href={twitterShareLink} target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />

                </a>
                <a href={facebookShareLink} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />

                </a>


        </div>
    );
};

export default ShareButtons;
