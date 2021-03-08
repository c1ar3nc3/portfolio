import React from 'react'
import './Contact.scss'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-body">
        <div className="touring">
          <h3>Touring Artist</h3>
        </div>
        <div className="art-starts">
          <h3>ArtStarts</h3>
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
