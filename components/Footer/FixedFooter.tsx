import React from "react";
import "../../styles/Footer/fixedFooter.sass";
import { phoneNumber } from "@/utils/phoneNumber";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon";
import ContactWhatsApp from "../ContactWhatsApp";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { GlobeIcon } from "../Icons/GlobeIcon";

const FixedFooter = () => {
  return (
    <div className="fixed-footer">
      <ContactWhatsApp width="46" height="46" />
      <div className="container-btns">
        <div className="phone-number-container">
          <PhoneIcon width="19" height="19" color="#666666" />
          <p className="phone-number">{phoneNumber}</p>
        </div>
        <div className="virtual-tour-container">
          <GlobeIcon width="19" height="19" color="#666666" />
          <p className="phone-number">TOUR VIRTUAL</p>
        </div>
      </div>
    </div>
  );
};

export default FixedFooter;
