import React, { useEffect, useState } from "react";
import "../../styles/Modal/RequestQuoteMobile.sass";
import { CarIcon } from "../Icons/CarIcon";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const RequestQuoteModalMobile: React.FC<IModal> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    modelo: "",
    mensagem: "",
    aceitoPolitica: false,
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen) {
        const modalElement = document.querySelector(".modal");
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
      <div className="modal">
        <div className="modal-content">
          <div className="close-button" onClick={onClose}>
            Minimizar
          </div>
          <div className="wrap">
            <div className="modal-title">
              <CarIcon width="28px" height="28px" color="#1C69D4" />
              <h2 className="title">Solicitar Cotação</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  className="input-data"
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome"
                />
              </div>
              <div className="input-container">
                <input
                  className="input-data"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                />
              </div>
              <div className="input-container">
                <input
                  className="input-data"
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Telefone"
                />
              </div>
              <div className="input-container">
                <select
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  required
                >
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
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Mensagem"
                />
              </div>
              <div className="radio">
                <input
                  className="input-radio"
                  type="checkbox"
                  name="aceitoPolitica"
                  checked={formData.aceitoPolitica}
                  onChange={handleChange}
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

export default RequestQuoteModalMobile;
