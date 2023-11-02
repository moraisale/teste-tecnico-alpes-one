import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import "../../styles/Car/car.sass";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon";

interface ICar {
  name: string;
  image?: string;
  onClick?: () => void;
  isDropDown: boolean;
}

const IndividualCar: React.FC<ICar> = ({
  name,
  image,
  onClick,
  isDropDown,
}) => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  return (
    <div className="car-container">
      <Image
        src={image!}
        alt="Car picture"
        width={276}
        height={147}
        className="car-picture"
      />
      <div className="car-title">
        <p className="car-title-text">{name}</p>
      </div>
      <div className="container-buttons">
        {!isDropDown && (
          <div onClick={onClick}>
            <p className="quote-button">Cotação</p>
          </div>
        )}

        {!isLargerThan769 && (
          <div>
            <p className="call-button">Ligar</p>
          </div>
        )}
      </div>
      <div className="social-media-buttons">
        <p className="share">Compartilhe:</p>
        <FacebookIcon
          width="24px"
          height="24px"
          color="#666666"
          cursor="pointer"
          _hover={{ opacity: 0.5 }}
        />
        <WhatsAppIcon
          width="24px"
          height="24px"
          color="#666666"
          cursor="pointer"
          _hover={{ opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

export default IndividualCar;
