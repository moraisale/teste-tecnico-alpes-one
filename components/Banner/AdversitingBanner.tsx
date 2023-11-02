/* eslint-disable @next/next/no-img-element */
import React from "react";
import CarouselButtons from "../Carousel/CarouselButtons";
import { useMediaQuery } from "@chakra-ui/react";
import FloatingRequestQuoteModal from "../Modal/FloatingRequestQuoteModal";

const AdversitingBanner = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const [isLargerThan1340] = useMediaQuery("(min-width: 1340px)");

  return (
    <div className="adversiting-banner">
      <img
        src={
          isLargerThan769 ? "/images/desktop-.jpg" : "/images/mobile-banner.png"
        }
        alt="Adversiting banner"
        width="100%"
        height="100%"
      />
      {isLargerThan1340 && <FloatingRequestQuoteModal />}
      <CarouselButtons />
    </div>
  );
};

export default AdversitingBanner;
