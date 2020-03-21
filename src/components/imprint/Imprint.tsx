import React, {useEffect, useState} from "react";
import {isMobile} from "react-device-detect";

interface IImprintProps {
    onImprintToggle?: (isOpen: boolean) => void;
}

const Imprint: React.FC<IImprintProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onImprintToggle = props.onImprintToggle
        ? props.onImprintToggle
        : (foo: boolean) => null;

    useEffect(() => {
        if (isOpen) {
            onImprintToggle(true);
        } else {
            onImprintToggle(false);
        }
    }, [isOpen, onImprintToggle]);

    const toggleImprint = () => {
        setIsOpen(!isOpen);
    };

    return (
        <span className={isMobile ? "small" : undefined}>
            <a href="#imprint" data-toggle="modal" onClick={toggleImprint}>
                Imprint
            </a>
            <div
                className="modal fade"
                id="imprint"
                data-tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                >
                    <div className="modal-content">
                        <div style={{padding: "1rem"}}>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-dark">
                            <h1>Imprint/Impressum</h1>
                            <p>
                                <strong>ELAN Berlin</strong>
                                <br />
                                Raquel Pogoda
                                <br />
                                Schoenhauser Allee 167
                                <br />
                                10435 Berlin
                            </p>
                            <p>und</p>
                            <p>
                                Ricardo Oswald
                                <br />
                                Wolliner Strasse 9
                                <br />
                                10435 Berlin
                            </p>
                            <p>
                                <strong>Vertreten durch:</strong>
                                <br />
                                Raquel Fedato & Ricardo Oswald
                            </p>
                            <p>
                                <strong>Kontakt:</strong>
                                <br />
                                E-Mail: hello@elanberlin.com
                            </p>
                            <p>
                                <strong>
                                    Verantwortlich für den Inhalt (gem. § 55
                                    Abs. 2 RStV):
                                </strong>
                                <br />
                                Raquel Fedato & Ricardo Oswald
                            </p>
                            <h2>DISCLAIMER – RECHTLICHE HINWEISE</h2>
                            <p>
                                § 1 Warnhinweis zu Inhalten
                                <br />
                                Die kostenlosen und frei zugänglichen Inhalte
                                dieser Webseite wurden mit größtmöglicher
                                Sorgfalt erstellt. Der Anbieter dieser Webseite
                                übernimmt jedoch keine Gewähr für die
                                Richtigkeit und Aktualität der bereitgestellten
                                kostenlosen und frei zugänglichen
                                journalistischen Ratgeber und Nachrichten.
                                Namentlich gekennzeichnete Beiträge geben die
                                Meinung des jeweiligen Autors und nicht immer
                                die Meinung des Anbieters wieder. Allein durch
                                den Aufruf der kostenlosen und frei zugänglichen
                                Inhalte kommt keinerlei Vertragsverhältnis
                                zwischen dem Nutzer und dem Anbieter zustande,
                                insoweit fehlt es am Rechtsbindungswillen des
                                Anbieters.
                            </p>
                            <p>
                                § 2 Externe Links
                                <br />
                                Diese Website enthält Verknüpfungen zu Websites
                                Dritter ("externe Links"). Diese Websites
                                unterliegen der Haftung der jeweiligen
                                Betreiber. Der Anbieter hat bei der erstmaligen
                                Verknüpfung der externen Links die fremden
                                Inhalte daraufhin überprüft, ob etwaige
                                Rechtsverstöße bestehen. Zu dem Zeitpunkt waren
                                keine Rechtsverstöße ersichtlich. Der Anbieter
                                hat keinerlei Einfluss auf die aktuelle und
                                zukünftige Gestaltung und auf die Inhalte der
                                verknüpften Seiten. Das Setzen von externen
                                Links bedeutet nicht, dass sich der Anbieter die
                                hinter dem Verweis oder Link liegenden Inhalte
                                zu Eigen macht. Eine ständige Kontrolle der
                                externen Links ist für den Anbieter ohne
                                konkrete Hinweise auf Rechtsverstöße nicht
                                zumutbar. Bei Kenntnis von Rechtsverstößen
                                werden jedoch derartige externe Links
                                unverzüglich gelöscht.
                            </p>
                            <p>
                                § 3 Urheber- und Leistungsschutzrechte
                                <br />
                                Die auf dieser Website veröffentlichten Inhalte
                                unterliegen dem deutschen Urheber- und
                                Leistungsschutzrecht. Jede vom deutschen
                                Urheber- und Leistungsschutzrecht nicht
                                zugelassene Verwertung bedarf der vorherigen
                                schriftlichen Zustimmung des Anbieters oder
                                jeweiligen Rechteinhabers. Dies gilt
                                insbesondere für Vervielfältigung, Bearbeitung,
                                Übersetzung, Einspeicherung, Verarbeitung bzw.
                                Wiedergabe von Inhalten in Datenbanken oder
                                anderen elektronischen Medien und Systemen.
                                Inhalte und Rechte Dritter sind dabei als solche
                                gekennzeichnet. Die unerlaubte Vervielfältigung
                                oder Weitergabe einzelner Inhalte oder
                                kompletter Seiten ist nicht gestattet und
                                strafbar. Lediglich die Herstellung von Kopien
                                und Downloads für den persönlichen, privaten und
                                nicht kommerziellen Gebrauch ist erlaubt.
                                <br />
                                Die Darstellung dieser Website in fremden Frames
                                ist nur mit schriftlicher Erlaubnis zulässig.
                            </p>
                            <p>
                                § 4 Besondere Nutzungsbedingungen
                                <br />
                                Soweit besondere Bedingungen für einzelne
                                Nutzungen dieser Website von den vorgenannten
                                Paragraphen abweichen, wird an entsprechender
                                Stelle ausdrücklich darauf hingewiesen. In
                                diesem Falle gelten im jeweiligen Einzelfall die
                                besonderen Nutzungsbedingungen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default Imprint;
