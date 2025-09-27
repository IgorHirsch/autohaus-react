import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/pages/unternehmen/_unternehmen.scss";

function Unternehmen() {
  const companySections = [
    {
      id: "ueber-uns",
      title: "Über uns",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L2 12H5V20H9V14H15V20H19V12H22L12 3Z"
            fill="currentColor"
          />
          <path d="M7 14V16H9V14H7ZM15 14V16H17V14H15Z" fill="currentColor" />
        </svg>
      ),
      description: "Familienunternehmen seit über 30 Jahren.",
      ctaHref: "/ueber-uns",
      ctaLabel: "Zur Story",
    },
    {
      id: "team-ansprechpartner",
      title: "Team & Ansprechpartner",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            fill="currentColor"
          />
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            fill="currentColor"
          />
          <path
            d="M21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 9.67157 18.6716 9 19.5 9C20.3284 9 21 9.67157 21 10.5Z"
            fill="currentColor"
          />
          <path
            d="M6 10.5C6 11.3284 5.32843 12 4.5 12C3.67157 12 3 11.3284 3 10.5C3 9.67157 3.67157 9 4.5 9C5.32843 9 6 9.67157 6 10.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      description: "Ihre Ansprechpartner vor Ort.",
      ctaHref: "/unternehmen/ansprechpartner",
      ctaLabel: "Team kennenlernen",
    },
    {
      id: "karriere",
      title: "Karriere",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H16V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7ZM10 5H14V7H10V5Z"
            fill="currentColor"
          />
        </svg>
      ),
      description: "Karriere bei Auto Emotion.",
      ctaHref: "/karriere",
      ctaLabel: "Jetzt bewerben",
    },
    {
      id: "news-presse",
      title: "News & Presse",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
            fill="currentColor"
          />
          <path d="M7 8H17V10H7V8Z" fill="white" />
          <path d="M7 12H13V14H7V12Z" fill="white" />
          <path d="M7 16H15V18H7V16Z" fill="white" />
        </svg>
      ),
      description: "News & Events.",
      ctaHref: "/unternehmen/presse",
      ctaLabel: "News lesen",
    },
    {
      id: "nachhaltigkeit",
      title: "Nachhaltigkeit & Umwelt",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M9 12L11 14L16 9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="12" cy="8" r="1" fill="currentColor" />
          <path
            d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      ),
      description: "Nachhaltigkeit & Umwelt.",
      ctaHref: "/unternehmen/nachhaltigkeit",
      ctaLabel: "Mehr erfahren",
    },
    {
      id: "standorte-kontakt",
      title: "Standort & Kontakt",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
            fill="currentColor"
          />
          <circle cx="12" cy="10" r="3" fill="white" />
        </svg>
      ),
      description: "Kontakt & Anfahrt.",
      ctaHref: "/unternehmen/standorte",
      ctaLabel: "Standort besuchen",
    },
  ];

  return (
    <div className="unternehmen">
      <div className="unternehmen__header">
        <h2 className="unternehmen__title">Unternehmen</h2>
        <p className="unternehmen__subtitle"></p>
      </div>

      <div className="unternehmen__grid">
        {companySections.map((sec) => (
          <div key={sec.id} className="company-card">
            {sec.ctaHref ? (
              <Link to={sec.ctaHref} className="company-card__link">
                <div className="company-card__wrapper">
                  <div className="company-card__header">
                    <h3 className="company-card__title">{sec.title}</h3>
                  </div>

                  <div className="company-card__content">
                    <div className="company-card__icon">{sec.icon}</div>
                    <p className="company-card__description">
                      {sec.description}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="company-card__wrapper">
                <div className="company-card__header">
                  <h3 className="company-card__title">{sec.title}</h3>
                </div>

                <div className="company-card__content">
                  <div className="company-card__icon">{sec.icon}</div>
                  <p className="company-card__description">{sec.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Unternehmen;
