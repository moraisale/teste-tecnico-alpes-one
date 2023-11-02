import { phoneNumber } from "@/utils/phoneNumber";
import Image from "next/image";
import React, { useState } from "react";
import "../../styles/Header/desktopHeader.sass";
import CarsDropDownMenu from "../Cars/CarsDropDownMenu";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { GlobeIcon } from "../Icons/GlobeIcon";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon";

const DesktopHeader = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const openDropDown = () => setIsDropDownOpen(true);
  const closeDropDown = () => setIsDropDownOpen(false);

  const categories = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "X",
    "Z",
    "M",
    "I",
    "Plug-in-hybrid",
  ];

  return (
    <div className="desktop-header">
      <div className="header-container">
        <div className="buttons-container">
          <div className="contact-buttons">
            <div className="phone">
              <PhoneIcon width="19px" height="19px" />
              <p>{phoneNumber}</p>
            </div>
            <div className="virtual-tour">
              <GlobeIcon width="19px" height="19px" />
              <p>TOUR VIRTUAL</p>
            </div>
            <div className="whatsapp-button">
              <WhatsAppIcon width="19px" height="19px" />
              <p>WHATSAPP</p>
            </div>
          </div>
          <div className="categories">
            {categories.map((category, index) => (
              <div key={+index} className="category" onClick={openDropDown}>
                <p className="category-text">{category}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/images/logo-bmw-rio.svg"
          width={91.98}
          height={91.98}
          alt="BMW Icon"
        />
      </div>

      <CarsDropDownMenu isOpen={isDropDownOpen} onClose={closeDropDown} />
    </div>
  );
};

export default DesktopHeader;
