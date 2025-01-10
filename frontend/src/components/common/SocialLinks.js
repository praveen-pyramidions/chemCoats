import React from "react";
import "./social.css";
export default function SocialLinks() {
  return (
    <div>
      <div id="whatsapp-widget">
        <a href="https://wa.me/+919962699888" target="_blank" title="WhatsApp">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            title="WhatsApp Logo"
          />
        </a>
      </div>
      <div id="whatsapp-label">Have enquiries? Chat with us!</div>
    </div>
  );
}
