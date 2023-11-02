import Image from "next/image";
import React from "react";
import "../../styles/Header/mobileHeader.sass";
import { phoneNumber } from "@/utils/phoneNumber";
import { PhoneIcon } from "../Icons/PhoneIcon";

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <div className="phone-logo-container">
        <PhoneIcon width="19px" height="19px" color="#666666" />
        <p className="phone-number">{phoneNumber}</p>
      </div>
      <Image
        src="/images/logo-bmw-rio.svg"
        width={34.5}
        height={34.5}
        alt="BMW Icon"
      />
    </div>
  );
};

export default MobileHeader;
