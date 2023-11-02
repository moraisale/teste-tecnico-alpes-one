import React, { useEffect, useRef } from "react";
import "../../styles/Car/carsDropDownMenu.sass";
import Image from "next/image";
import { carsList } from "@/utils/carsList";
import IndividualCar from "./IndividualCar";
import CarouselButtons from "../Carousel/CarouselButtons";

interface ICarsDropDownMenu {
  isOpen: boolean;
  onClose: () => void;
}

const CarsDropDownMenu: React.FC<ICarsDropDownMenu> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div className="cars-dropdown-container" ref={dropdownRef}>
        <div className="cars-dropdown-menu">
          <Image
            className="left-arrow"
            src="/images/seta-a-esquerda.svg"
            alt="right-arrow"
            width={16}
            height={16}
          />
          <div className="car-list">
            {carsList.slice(0, 4).map((car, index) => (
              <IndividualCar
                image={car.image}
                name={car.name}
                key={+index}
                isDropDown={true}
              />
            ))}
          </div>
          <Image
            className="right-arrow"
            src="/images/seta-a-direita.svg"
            alt="right-arrow"
            width={16}
            height={16}
          />
        </div>
        <div className="carousel-container">
          <CarouselButtons />
        </div>
      </div>
    )
  );
};

export default CarsDropDownMenu;
