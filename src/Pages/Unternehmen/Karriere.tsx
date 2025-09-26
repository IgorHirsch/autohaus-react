import React, { useState } from "react";
import "../../Styles/pages/unternehmen/_karriere.scss";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  tasks: string[];
  requirements: string[];
  benefits: string[];
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

interface FormData {
  position: string;
  firstName: string;
  lastName: string;
  title: string;
  birthDate: string;
  gender: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  nationality: string;
  maritalStatus: string;
  children: string;
  education: string;
  driverLicense: string;
  additionalQualifications: string;
  careerHistory: string;
  hobbies: string;
  startDate: string;
  additionalComments: string;
  message: string;
  emailConsent: boolean;
  postConsent: boolean;
  phoneConsent: boolean;
  smsConsent: boolean;
  privacyConsent: boolean;
}

function Karriere() {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    position: "Initiativbewerbung",
    firstName: "",
    lastName: "",
    title: "",
    birthDate: "",
    gender: "",
    street: "",
    zipCode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    nationality: "",
    maritalStatus: "",
    children: "",
    education: "",
    driverLicense: "",
    additionalQualifications: "",
    careerHistory: "",
    hobbies: "",
    startDate: "",
    additionalComments: "",
    message: "",
    emailConsent: false,
    postConsent: false,
    phoneConsent: false,
    smsConsent: false,
    privacyConsent: false,
  });

  const jobPositions: JobPosition[] = [
    {
      id: "kfz-meister",
      title: "Kfz Meister Werkstattleiter (m/w/d)",
      department: "Werkstatt",
      location: "63069 Offenbach",
      type: "Festanstellung (Vollzeit)",
      description:
        "Für unser Team suchen wir als Verstärkung eine/n Kfz Meister Werkstattleiter (m/w/d)",
      tasks: [
        "Du führst Dein Team und koordinierst die Arbeiten der Werkstatt",
        "Du übernimmst die Endkontrolle der durchgeführten Arbeiten",
        "Du achtest auf die Einhaltung der Qualitätsstandards bei Wartungs- und Instandhaltungsarbeiten",
        "Koordination und Personalverantwortung für die Werkstattmitarbeiter",
      ],
      requirements: [
        "Erfolgreich abgeschlossene Berufsaubildung als Kfz-Mechatroniker Meister (m/w/d)",
        "mindestens 3 Jahre aktive Berufserfahrung",
        'sicherer Umgang mit der "modernen Reparaturmethode"',
        "selbstständige Arbeitsweise",
        "hohe Teamfähigkeit",
      ],
      benefits: [
        "Eine Festanstellung mit abwechslungsreichen Aufgaben",
        "Wertschätzung für Deinen Einsatz mit einer attraktiven Entlohnung",
        "Berufliche Entwicklung mit vielen Weiterbildungsmöglichkeiten",
        "Ein sympathisches Team von Kolleginnen und Kollegen",
      ],
      contact: {
        name: "Frau Andrea Mierzwa",
        email: "a.mierzwa@auto-emotion.de",
        phone: "069-8740334-31",
      },
    },
    {
      id: "kfz-serviceberater",
      title: "Kfz-Serviceberater (m/w/d)",
      department: "Kundenbetreuung",
      location: "63069 Offenbach",
      type: "Festanstellung (Vollzeit)",
      description:
        "Für unser Team suchen wir ab sofort als Verstärkung eine/n Kfz - Serviceberater (m/w/d) für die Marken Cupra, Seat und Nissan",
      tasks: [
        "Persönliche Kundenbetreuung und deren Beratung",
        "Erstellung von Serviceaufträgen mit Leistungs-, Preis- und Terminzusagen",
        "Serviceberatung am Fahrzeug",
        "Überwachung und nachhalten der zugesagten Termine",
        "Erstellung von Kostenvoranschlägen sowie Korrespondenz mit Versicherungen",
        "Bestellung und Verkauf von Serviceleistungen",
        "Bindung der Kunden durch fachliche Kompetenz",
      ],
      requirements: [
        "Abgeschlossene technische Ausbildung zum Kfz-Mechatroniker / Kfz-Servicetechniker (m/w/d)",
        "Erfahrung im Bereich Serviceberatung",
        "Du arbeitest Kundenorientiert und bringst Einfühlungsvermögen mit",
        "Eine sehr saubere, ordentliche und zuverlässige Arbeitsweise",
        "Argumentations- und Diagnosesicherheit",
      ],
      benefits: [
        "Eine Festanstellung mit abwechslungsreiche Aufgabe",
        "Wertschätzung für Deinen Einsatz mit einer attraktiven Entlohnung",
        "Die Möglichkeit zur Teilnahme an Schulungs- und Weiterbildungsmaßnahmen",
        "Ein sympathisches Team von Kolleginnen und Kollegen",
      ],
      contact: {
        name: "Frau Andrea Mierzwa",
        email: "a.mierzwa@auto-emotion.de",
        phone: "069-8740334-31",
      },
    },
    {
      id: "sachbearbeiter-buchhaltung",
      title: "Sachbearbeiter in der Buchhaltung (m/w/d)",
      department: "Administration",
      location: "63069 Offenbach",
      type: "Festanstellung (Vollzeit)",
      description:
        "Für unser Team suchen wir als Verstärkung eine/n Sachbearbeiter Buchhaltung / Buchhalter (m/w/d)",
      tasks: [
        "Ausführung der monatlichen Buchhaltung",
        "eigenverantworliche Kreditoren- und Debitorenbuchhaltung",
        "selbstständige Vorbereitung von Zahlungsläufen",
        "Mitwirkung von Monats- und Jahresabschlüssen",
        "Verantwortung von Mahnwesen und Umsatzsteuervoranmeldung",
        "Schriftwechsel mit Versicherungen und Banken",
      ],
      requirements: [
        "erfolgreich abgeschlossene Ausbildung als Buchhalter (m/w/d)",
        "einige Jahre Berufserfahrung sind wünschenswert",
        "Kenntnisse im Handels- und Steuerrecht",
        "exakter Arbeitsstil und Freude am Umgang mit Zahlen",
        "sicherer Umgang mit MS Office (Excel, Word)",
      ],
      benefits: [
        "Abwechslungsreiche Aufgaben bei einer aufstrebenden Marke",
        "Die Möglichkeit zur Teilnahme an Schulungs- und Weiterbildungsmaßnahmen",
        "Ein sympathisches Team von Kolleginnen und Kollegen",
      ],
      contact: {
        name: "Frau Andrea Mierzwa",
        email: "a.mierzwa@auto-emotion.de",
        phone: "069-874033431",
      },
    },
  ];

  const handleToggle = (jobId: string) => {
    setActiveJobId(activeJobId === jobId ? null : jobId);
    // Wenn ein neuer Job ausgewählt wird, setze die Position im Formular
    // nur wenn aktuell "Initiativbewerbung" ausgewählt ist
    if (activeJobId !== jobId && formData.position === "Initiativbewerbung") {
      const selectedJob = jobPositions.find((job) => job.id === jobId);
      if (selectedJob) {
        setFormData((prev) => ({
          ...prev,
          position: selectedJob.title,
        }));
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bewerbung eingereicht:", formData);
    // Hier würde die tatsächliche Übermittlung stattfinden
  };

  return (
    <section className="karriere" aria-labelledby="karriere-title">
      {/* Background mit Glow-Effekten wie in Willkommen */}
      <div className="karriere__background" aria-hidden="true">
        <span className="karriere__glow karriere__glow--left" />
        <span className="karriere__glow karriere__glow--right" />
      </div>

      <div className="karriere__container">
        {/* Hero Section - Following Über uns design pattern */}
        <section className="karriere__hero">
          <div className="karriere__hero-content">
            <span className="karriere__badge">
              Karriere bei Auto Emotion
              <span className="karriere__badge-dot" aria-hidden="true" />
            </span>
            <h1 id="karriere-title" className="karriere__title">
              Werden Sie Teil unseres Teams.
            </h1>
            <p className="karriere__lead">
              Entdecken Sie spannende Karrieremöglichkeiten in einem dynamischen
              Umfeld. Wir bieten Ihnen die Chance, Ihre Leidenschaft für
              Automobile in einem professionellen Team zu verwirklichen.
            </p>
            <p className="karriere__description">
              Von technischen Positionen in der Werkstatt bis hin zu beratenden
              Tätigkeiten im Verkauf – bei uns finden Sie vielseitige
              Möglichkeiten zur beruflichen Entwicklung mit attraktiven
              Sozialleistungen.
            </p>
          </div>

          <aside className="karriere__hero-card">
            <dl className="karriere__facts">
              <div className="karriere__fact">
                <dt>Offene Stellen</dt>
                <dd>{jobPositions.length} Positionen</dd>
              </div>
              <div className="karriere__fact">
                <dt>Standort</dt>
                <dd>63069 Offenbach</dd>
              </div>
              <div className="karriere__fact">
                <dt>Arbeitszeit</dt>
                <dd>Vollzeit & Teilzeit</dd>
              </div>
              <div className="karriere__fact">
                <dt>Einstieg</dt>
                <dd>Ab sofort möglich</dd>
              </div>
              <div className="karriere__fact">
                <dt>Branchen</dt>
                <dd>Automotive & Service</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Main Content Grid */}
        <div className="karriere__content">
          {/* Job Listings */}
          <div className="karriere__jobs">
            <h2 className="karriere__jobs-title">Offene Stellen</h2>
            <div className="karriere__jobs-list">
              {jobPositions.map((job) => (
                <article
                  key={job.id}
                  className={`karriere__job ${
                    activeJobId === job.id ? "karriere__job--active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="karriere__job-toggle"
                    onClick={() => handleToggle(job.id)}
                    aria-expanded={activeJobId === job.id}
                    aria-controls={`job-details-${job.id}`}
                  >
                    <div className="karriere__job-headings">
                      <h3 className="karriere__job-title">{job.title}</h3>
                      <div className="karriere__job-meta">
                        <span className="karriere__job-department">
                          {job.department}
                        </span>
                        <span className="karriere__job-location">
                          {job.location}
                        </span>
                        <span className="karriere__job-type">{job.type}</span>
                      </div>
                    </div>
                    <div className="karriere__job-icon" aria-hidden="true" />
                  </button>

                  {activeJobId === job.id && (
                    <div
                      id={`job-details-${job.id}`}
                      className="karriere__job-details"
                      role="region"
                      aria-label={`Details für ${job.title}`}
                    >
                      <div className="karriere__job-content">
                        <div className="karriere__job-section">
                          <h4 className="karriere__job-section-title">
                            Ihre Aufgaben
                          </h4>
                          <ul className="karriere__job-list">
                            {job.tasks.map((task, index) => (
                              <li
                                key={index}
                                className="karriere__job-list-item"
                              >
                                <span className="karriere__job-check">✓</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="karriere__job-section">
                          <h4 className="karriere__job-section-title">
                            Das bringen Sie mit
                          </h4>
                          <ul className="karriere__job-list">
                            {job.requirements.map((req, index) => (
                              <li
                                key={index}
                                className="karriere__job-list-item"
                              >
                                <span className="karriere__job-check">✓</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="karriere__job-section">
                          <h4 className="karriere__job-section-title">
                            Das bieten wir Ihnen
                          </h4>
                          <ul className="karriere__job-list">
                            {job.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="karriere__job-list-item"
                              >
                                <span className="karriere__job-check">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="karriere__job-contact">
                          <h4 className="karriere__job-contact-title">
                            Ihr Ansprechpartner
                          </h4>
                          <div className="karriere__job-contact-info">
                            <p>
                              <strong>{job.contact.name}</strong>
                            </p>
                            <p>
                              E-Mail:{" "}
                              <a href={`mailto:${job.contact.email}`}>
                                {job.contact.email}
                              </a>
                            </p>
                            <p>
                              Telefon:{" "}
                              <a href={`tel:${job.contact.phone}`}>
                                {job.contact.phone}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="karriere__application">
            <div className="karriere__form-container">
              <h2 className="karriere__form-title">
                Bewerbung {formData.position && `als ${formData.position}`}
              </h2>

              <form className="karriere__form" onSubmit={handleSubmit}>
                {/* Position Auswahl */}
                <fieldset className="karriere__fieldset">
                  <legend className="karriere__legend">Position</legend>

                  <div className="karriere__form-group">
                    <label htmlFor="position" className="karriere__label">
                      Bewerbung als *
                    </label>
                    <select
                      id="position"
                      name="position"
                      className="karriere__select"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Initiativbewerbung">
                        Initiativbewerbung
                      </option>
                      {jobPositions.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </fieldset>

                {/* Persönliche Daten */}
                <fieldset className="karriere__fieldset">
                  <legend className="karriere__legend">
                    Persönliche Daten
                  </legend>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label htmlFor="firstName" className="karriere__label">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="karriere__input"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="lastName" className="karriere__label">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="karriere__input"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label htmlFor="title" className="karriere__label">
                        Titel
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="karriere__input"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="birthDate" className="karriere__label">
                        Geburtsdatum
                      </label>
                      <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        className="karriere__input"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label htmlFor="gender" className="karriere__label">
                        Geschlecht
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="karriere__select"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Bitte wählen</option>
                        <option value="männlich">Männlich</option>
                        <option value="weiblich">Weiblich</option>
                        <option value="divers">Divers</option>
                      </select>
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="phone" className="karriere__label">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="karriere__input"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="karriere__form-group">
                    <label htmlFor="email" className="karriere__label">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="karriere__input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label htmlFor="street" className="karriere__label">
                        Straße / Nr.
                      </label>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        className="karriere__input"
                        value={formData.street}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="zipCode" className="karriere__label">
                        PLZ
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        className="karriere__input"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="city" className="karriere__label">
                        Ort
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="karriere__input"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label htmlFor="country" className="karriere__label">
                        Land
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="karriere__input"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Deutschland"
                      />
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="nationality" className="karriere__label">
                        Staatsbürgerschaft
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        className="karriere__input"
                        value={formData.nationality}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label
                        htmlFor="maritalStatus"
                        className="karriere__label"
                      >
                        Familienstand
                      </label>
                      <select
                        id="maritalStatus"
                        name="maritalStatus"
                        className="karriere__select"
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                      >
                        <option value="">Bitte wählen</option>
                        <option value="ledig">Ledig</option>
                        <option value="verheiratet">Verheiratet</option>
                        <option value="geschieden">Geschieden</option>
                        <option value="verwitwet">Verwitwet</option>
                      </select>
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="children" className="karriere__label">
                        Kinder
                      </label>
                      <input
                        type="text"
                        id="children"
                        name="children"
                        className="karriere__input"
                        value={formData.children}
                        onChange={handleInputChange}
                        placeholder="Anzahl"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Qualifikationen */}
                <fieldset className="karriere__fieldset">
                  <legend className="karriere__legend">Qualifikationen</legend>

                  <div className="karriere__form-group">
                    <label htmlFor="education" className="karriere__label">
                      Schulausbildung
                    </label>
                    <textarea
                      id="education"
                      name="education"
                      className="karriere__textarea"
                      value={formData.education}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="karriere__form-row">
                    <div className="karriere__form-group">
                      <label
                        htmlFor="driverLicense"
                        className="karriere__label"
                      >
                        Führerschein
                      </label>
                      <input
                        type="text"
                        id="driverLicense"
                        name="driverLicense"
                        className="karriere__input"
                        value={formData.driverLicense}
                        onChange={handleInputChange}
                        placeholder="z.B. Klasse B"
                      />
                    </div>
                    <div className="karriere__form-group">
                      <label htmlFor="startDate" className="karriere__label">
                        Frühestmöglicher Eintrittstermin
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        className="karriere__input"
                        value={formData.startDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="karriere__form-group">
                    <label
                      htmlFor="additionalQualifications"
                      className="karriere__label"
                    >
                      Zusätzliche Qualifikationen
                    </label>
                    <textarea
                      id="additionalQualifications"
                      name="additionalQualifications"
                      className="karriere__textarea"
                      value={formData.additionalQualifications}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="karriere__form-group">
                    <label htmlFor="careerHistory" className="karriere__label">
                      Beruflicher Werdegang
                    </label>
                    <textarea
                      id="careerHistory"
                      name="careerHistory"
                      className="karriere__textarea"
                      value={formData.careerHistory}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <div className="karriere__form-group">
                    <label htmlFor="hobbies" className="karriere__label">
                      Freizeitinteressen
                    </label>
                    <textarea
                      id="hobbies"
                      name="hobbies"
                      className="karriere__textarea"
                      value={formData.hobbies}
                      onChange={handleInputChange}
                      rows={2}
                    />
                  </div>
                </fieldset>

                {/* Nachricht */}
                <fieldset className="karriere__fieldset">
                  <legend className="karriere__legend">
                    Weitere Informationen
                  </legend>

                  <div className="karriere__form-group">
                    <label
                      htmlFor="additionalComments"
                      className="karriere__label"
                    >
                      Zusätzliche Kommentare
                    </label>
                    <textarea
                      id="additionalComments"
                      name="additionalComments"
                      className="karriere__textarea"
                      value={formData.additionalComments}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="karriere__form-group">
                    <label htmlFor="message" className="karriere__label">
                      Mitteilung
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="karriere__textarea"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>

                  <div className="karriere__form-group">
                    <label htmlFor="fileUpload" className="karriere__label">
                      Dateiupload
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      name="fileUpload"
                      className="karriere__file-input"
                      accept=".pdf,.doc,.docx"
                      multiple
                    />
                    <span className="karriere__file-hint">
                      PDF, DOC oder DOCX Dateien (max. 10MB pro Datei)
                    </span>
                  </div>
                </fieldset>

                {/* Einverständniserklärungen */}
                <fieldset className="karriere__fieldset">
                  <legend className="karriere__legend">
                    Einverständniserklärungen
                  </legend>

                  <div className="karriere__consent-group">
                    <p className="karriere__consent-text">
                      Ich erkläre mich damit einverstanden, dass meine
                      persönlichen Daten für Marketing- und Kommunikationszwecke
                      verwendet werden via:
                    </p>

                    <div className="karriere__consent-options">
                      <label className="karriere__checkbox-label">
                        <input
                          type="checkbox"
                          name="emailConsent"
                          className="karriere__checkbox"
                          checked={formData.emailConsent}
                          onChange={handleInputChange}
                        />
                        <span className="karriere__checkbox-text">E-Mail</span>
                      </label>

                      <label className="karriere__checkbox-label">
                        <input
                          type="checkbox"
                          name="postConsent"
                          className="karriere__checkbox"
                          checked={formData.postConsent}
                          onChange={handleInputChange}
                        />
                        <span className="karriere__checkbox-text">Post</span>
                      </label>

                      <label className="karriere__checkbox-label">
                        <input
                          type="checkbox"
                          name="phoneConsent"
                          className="karriere__checkbox"
                          checked={formData.phoneConsent}
                          onChange={handleInputChange}
                        />
                        <span className="karriere__checkbox-text">Telefon</span>
                      </label>

                      <label className="karriere__checkbox-label">
                        <input
                          type="checkbox"
                          name="smsConsent"
                          className="karriere__checkbox"
                          checked={formData.smsConsent}
                          onChange={handleInputChange}
                        />
                        <span className="karriere__checkbox-text">SMS</span>
                      </label>
                    </div>
                  </div>

                  <div className="karriere__privacy-consent">
                    <label className="karriere__checkbox-label karriere__checkbox-label--required">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        className="karriere__checkbox"
                        checked={formData.privacyConsent}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="karriere__checkbox-text">
                        Durch Absenden Ihrer Informationen bestätigen Sie, dass
                        Sie unsere{" "}
                        <a href="/datenschutz" className="karriere__link">
                          Datenschutzrichtlinie
                        </a>{" "}
                        gelesen haben und sich damit einverstanden erklären.
                        Diese Einwilligung kann jederzeit widerrufen werden,
                        z.B. über den Link zur Abmeldung im Newsletter. *
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/* Submit Button */}
                <div className="karriere__form-actions">
                  <button
                    type="submit"
                    className="karriere__submit-btn"
                    disabled={!formData.privacyConsent}
                  >
                    Bewerbung absenden
                    <svg
                      className="karriere__submit-icon"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 10h10m0 0-3.5-3.5M15 10l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Karriere;
