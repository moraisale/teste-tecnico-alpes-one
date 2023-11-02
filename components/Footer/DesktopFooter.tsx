import Image from "next/image";
import React from "react";
import "../../styles/Footer/desktopFooter.sass";

const DesktopFooter = () => {
  return (
    <div>
      <div className="desktop-footer">
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
          elementum orci, vitae commodo nibh. In vitae convallis nisl. Morbi
          rhoncus mattis purus sed commodo. Integer rhoncus ex risus. Proin
          efficitur elit nunc, ut pulvinar massa egestas in. Fusce quis quam
          viverra, pretium quam ac, consectetur lectus.
        </p>

        <div className="divider-container-desktop">
          <div className="divider-desktop" />
        </div>
        <div className="logos-container">
          <Image
            src="/images/logo-bmw-rio.svg"
            width={50.07}
            height={50.07}
            alt="Logo BMW"
          />
          <p className="copyright">
            © Copyright © 2021 Lorem ipsum dolor sit amet.
          </p>
          <div className="made-by-desktop">
            <p className="made-by-text">Feito por:</p>
            <Image
              src="/images/logo-alpes.png"
              width={124}
              height={24}
              alt="Logo Alpes One"
              onClick={() => window.open("https://alpes.one/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
