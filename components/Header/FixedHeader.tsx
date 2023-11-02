import React, { useEffect, useState } from "react";
import "../../styles/Header/fixedHeader.sass";
import Image from "next/image";
import DropdownModal from "../Modal/DropDownModal";

interface IFixedHeader {
  onClick: () => void;
}

const FixedHeader: React.FC<IFixedHeader> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsModalOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    isVisible && (
      <div className="fixed-header">
        <Image
          src="/images/logo-bmw-rio.svg"
          width={40}
          height={40}
          alt="BMW Icon"
        />
        <div className="quote-button-fixed-header" onClick={openModal}>
          Solicitar cotação
        </div>
        <DropdownModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    )
  );
};

export default FixedHeader;
