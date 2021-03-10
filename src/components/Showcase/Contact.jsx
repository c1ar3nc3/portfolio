import React from 'react'
import './Contact.scss'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import artstarts from '/Users/c1ar3nc3/Projects/portfolio/src/docs/artstarts-logo.png'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-body">
        <div className="art-logo">
          <img src={artstarts} alt="artstarts" />
        </div>
        <div className="art-cards">
          <div className="art-starts">
            <h3>Touring Artist</h3>
            <button className="art-button">artstarts Profile</button>
          </div>
          <div className="art-starts">
            <h3>Artist in the Classroom</h3>
            <button className="art-button">artstarts Profile</button>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <span className="icon-list">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaEnvelope />
        </span>
      </div>
    </div>
  )
}
