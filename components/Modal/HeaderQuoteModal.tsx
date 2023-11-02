import React, { useState, useEffect } from "react";
import "../../styles/Modal/headerQuoteModal.sass";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderQuoteModal: React.FC<IModal> = ({ isOpen, onClose }) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen) {
        const modalElement = document.querySelector(".header-modal");
        if (modalElement && !modalElement.contains(event.target as Node)) {
          onClose();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div className="header-modal">
        <div className="header-modal-content">
          <div className="close-button" onClick={onClose}>
            Minimizar
          </div>
          <div className="wrap">
            <div className="modal-title">
              <img src="/images/carro.svg" width={28} height={28} />
              <h2 className="title">Solicitar Cotação</h2>
            </div>
            <form>
              <div className="input-container">
                <input
                  className="input-data"
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                />
              </div>
              <div className="input-container">
                <input
                  className="input-data"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="input-container">
                <input
                  className="input-data"
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone"
                />
              </div>
              <div className="input-container">
                <select name="modelo" required>
                  <option value="" disabled>
                    Modelo
                  </option>
                </select>
              </div>
              <div className="input-container">
                <textarea
                  className="input-data"
                  id="mensagem"
                  name="mensagem"
                  placeholder="Mensagem"
                />
              </div>
              <div className="radio">
                <input
                  className="input-radio"
                  type="checkbox"
                  name="aceitoPolitica"
                />
                <p className="radio-text">
                  Aceito a{" "}
                  <span className="policy-span">Política de Privacidade.</span>
                </p>
              </div>
              <div className="send-area">
                <div className="send-button">Enviar</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default HeaderQuoteModal;
