import React from "react";
import { WhatsAppIcon } from "./Icons/WhatsAppIcon";
import "../styles/whatsApp.sass";

interface IWhatsAppButton {
  width: string;
  height: string;
}

const ContactWhatsApp: React.FC<IWhatsAppButton> = ({ width, height }) => {
  return (
    <div className="whatsapp-button-container">
      <WhatsAppIcon color="white" width={width} height={height} />
    </div>
  );
};

export default ContactWhatsApp;
