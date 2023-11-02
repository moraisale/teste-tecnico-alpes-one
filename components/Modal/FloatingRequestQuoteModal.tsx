import React, { useState } from "react";
import "../../styles/Modal/floatingRequestQuoteModal.sass";

const FloatingRequestQuoteModal = () => {
  return (
    <div className="floating-modal">
      <div className="floating-modal-content">
        <div className="wrap">
          <div className="modal-title">
            <img src="/images/carro.svg" width={28} height={28} />
            <h2 className="title">Solicitar Cotação</h2>
          </div>
          <form>
            <div className="floating-input-container">
              <input
                className="input-data"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
              />
            </div>
            <div className="floating-input-container">
              <input
                className="input-data"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div className="floating-input-container">
              <input
                className="input-data"
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
              />
            </div>
            <div className="floating-input-container">
              <select name="modelo" required>
                <option value="" disabled>
                  Modelo
                </option>
              </select>
            </div>
            <div className="floating-input-container">
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
  );
};

export default FloatingRequestQuoteModal;
