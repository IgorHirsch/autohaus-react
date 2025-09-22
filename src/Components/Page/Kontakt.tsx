import React, { useState } from "react";
import StarBorder from "../Elements/StarBorder";

interface KontaktProps {
  isActive: boolean;
  onClose: () => void;
}

interface FormData {
  vorname: string;
  email: string;
  strasse: string;
  plz: string;
  ort: string;
  telefon: string;
  mobil: string;
  nachricht: string;
  tourType: string;
}

function Kontakt({ isActive, onClose }: KontaktProps) {
  const [formData, setFormData] = useState<FormData>({
    vorname: "",
    email: "",
    strasse: "",
    plz: "",
    ort: "",
    telefon: "",
    mobil: "",
    nachricht: "",
    tourType: "private",
  });

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Kontakt Form submitted:", formData);
    onClose();
  };

  return (
    <section className={`kontakt-modal ${isActive ? "is-active" : ""}`}>
      
        <div className="kontakt-modal__content">
          <button
            type="button"
            className="kontakt-modal__close"
            aria-label="Modal schließen"
            onClick={onClose}
          >
            ×
          </button>

          <h3 className="kontakt-modal__heading">
            Nehmen Sie Kontakt mit uns auf!
          </h3>
          <p className="kontakt-modal__paragraph">Persönliche Daten</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form__horizontal">
              {/* Vorname */}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="kontakt-modal-name"
                  name="vorname"
                  placeholder="Vorname"
                  value={formData.vorname}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-name">
                  Vorname
                </label>
              </div>

              {/* E-Mail */}
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  id="kontakt-modal-email"
                  name="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-email">
                  E-Mail
                </label>
              </div>

              {/* Straße/Nr */}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="kontakt-modal-strasse"
                  name="strasse"
                  placeholder="Straße / Nr"
                  value={formData.strasse}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-strasse">
                  Straße / Nr
                </label>
              </div>

              {/* PLZ */}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="kontakt-modal-plz"
                  name="plz"
                  placeholder="PLZ"
                  value={formData.plz}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-plz">
                  PLZ
                </label>
              </div>

              {/* Ort */}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="kontakt-modal-ort"
                  name="ort"
                  placeholder="Ort"
                  value={formData.ort}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-ort">
                  Ort
                </label>
              </div>

              {/* Telefon */}
              <div className="form__group">
                <input
                  type="tel"
                  className="form__input"
                  id="kontakt-modal-telefon"
                  name="telefon"
                  placeholder="Festnetz"
                  value={formData.telefon}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-telefon">
                  Festnetz
                </label>
              </div>

              {/* Mobil */}
              <div className="form__group">
                <input
                  type="tel"
                  className="form__input"
                  id="kontakt-modal-mobil"
                  name="mobil"
                  placeholder="Mobil"
                  value={formData.mobil}
                  onChange={handleInputChange}
                />
                <label className="form__label" htmlFor="kontakt-modal-mobil">
                  Mobil
                </label>
              </div>
            </div>

            <div className="form__group">
              <textarea
                className="form__textarea form__input"
                id="kontakt-modal-message"
                name="nachricht"
                placeholder=""
                value={formData.nachricht}
                onChange={handleInputChange}
              />
              <label className="form__label" htmlFor="kontakt-modal-message">
                Mitteilung
              </label>
            </div>

            <div className="kontakt-modal__submit-container">
              <StarBorder
                as="button"
                type="submit"
                className="button button--form contact-button"
                color="red"
                speed="1s"
              >
                Nachricht senden!
              </StarBorder>
            </div>
          </form>
        </div>
    </section>
  );
}

export default Kontakt;
