  import React from 'react';
  import Feature from './Feature/Feature';
  import FirstImage from './Images/FirstImage/FirstImage';

  const FEATURES_INFORMATION = [
    {
      name: "Datenbanken von Kunden und Mitarbeitern",
      image: FirstImage,
      paragraph:
        "Informationen über alle Ihre Kunden und Mitarbeiter werden an einem Ort gesammelt, und Sie können neue Kontakte hinzufügen und wichtige Informationen eingeben.",
    },
    {
      name: "Lieferantenbank und Materialdatenbank",
      image: FirstImage,
      paragraph:
        "Finden Sie Informationen über Ihre Lieferanten in einer Lieferantendatenbank. Sie können die Verfügbarkeit von Materialien in der Bestandsdatenbank prüfen und Materialreserven anlegen.",
    },
    {
      name: "Kalender und Projektstatistiken",
      image: FirstImage,
      paragraph:
        "Verfolgen Sie den Fortschritt Ihrer Projekte, Anzeigen von Ereignissen im Kalender und Hinzufügen neuer Ereignisse. Visualisieren Sie Informationen über Ihre Einnahmen, Ausgaben und Gewinne.",
    },
    {
      name: "Finanzbuchhaltung und Personalbuchhaltung",
      image: FirstImage,
      paragraph:
        "Alle Rechnungen für ein Projekt und für mehrere Projekte anzeigen. Erfassung der Arbeitszeit von Mitarbeitern/Lieferanten. Interne Kosten nach Projekt anzeigen",
    },
  ];

  export default function FeaturesList () {
    return (
      <div className="features-list-wrapper">
        {FEATURES_INFORMATION.map((feature, index) => {
          return (
            <Feature
              key={index}
              name={feature.name}
              paragraph={feature.paragraph}
              image={feature.image}
            />
          );
        })}
      </div>
    );
  };