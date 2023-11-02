"use client";

import MobileHeader from "@/components/Header/MobileHeader";
import "../styles/mainPage.sass";
import "../styles/Buttons/request-a-quote.sass";
import AdversitingBanner from "@/components/Banner/AdversitingBanner";
import { carsList } from "@/utils/carsList";
import IndividualCar from "@/components/Cars/IndividualCar";
import MobileFooter from "@/components/Footer/MobileFooter";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import RequestQuoteModalMobile from "@/components/Modal/RequestQuoteModalMobile";
import DesktopHeader from "@/components/Header/DesktopHeader";
import "../styles/Car/car.sass";
import DesktopFooter from "@/components/Footer/DesktopFooter";
import FixedFooter from "@/components/Footer/FixedFooter";
import FixedHeader from "@/components/Header/FixedHeader";
import FloatingRequestQuoteModal from "@/components/Modal/FloatingRequestQuoteModal";
import ContactWhatsApp from "@/components/ContactWhatsApp";
import HeaderQuoteModal from "@/components/Modal/HeaderQuoteModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFixedModalOpen, setFixedIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setOpenFixed(false);
  };
  const openHeaderModal = () => setFixedIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setOpenFixed(true);
  };
  const closeFixedModal = () => setFixedIsModalOpen(false);

  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const [openFixed, setOpenFixed] = useState(isModalOpen ? false : true);

  return (
    <div className="main-container">
      {isLargerThan1024 && openFixed && (
        <FixedHeader onClick={openHeaderModal} />
      )}
      <div className="header">
        {isLargerThan1024 ? <DesktopHeader /> : <MobileHeader />}
      </div>
      <HeaderQuoteModal isOpen={isFixedModalOpen} onClose={closeFixedModal} />
      <RequestQuoteModalMobile isOpen={isModalOpen} onClose={closeModal} />
      {!isLargerThan1024 && (
        <div className="request-a-quote" onClick={openModal}>
          Solicite uma cotação
        </div>
      )}

      <AdversitingBanner />
      <div className="choose-your-bmw">
        <ContactWhatsApp width="43" height="43" />
        <p className="choose-bmw-title">ESCOLHA SEU BWM</p>
      </div>
      <div className="car-list-container">
        <div className="cars-list">
          {carsList.map((car, index) => (
            <IndividualCar
              isDropDown={false}
              image={car.image}
              name={car.name}
              key={+index}
              // onClick={isLargerThan1024 ? openHeaderModal : openModal}
              onClick={openModal}
            />
          ))}
        </div>
      </div>
      {isLargerThan769 ? <DesktopFooter /> : <MobileFooter />}
      {isLargerThan769 && <FixedFooter />}
    </div>
  );
}
