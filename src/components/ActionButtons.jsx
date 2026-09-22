import React, { useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaGoogle, FaApple, FaTimes } from 'react-icons/fa';

export const ActionButtons = () => {
    const [showCalendarModal, setShowCalendarModal] = useState(false);

    const whatsappUrl = 'https://wa.me/5527988470341';

    // Google Calendar URL
    const googleCalendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Love+Walk+2026&dates=20261024T090000Z/20261024T120000Z&details=The+Love+Walk+-+Parque+da+Cidade+Serra&location=Parque+da+Cidade+-+Serra,+ES';

    // Function to download .ics file for Apple Calendar / Outlook / iCal
    const downloadIcsFile = () => {
        const csData = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//The Love Walk//NONSGML v1.0//PT',
            'BEGIN:VEVENT',
            'UID:' + Date.now() + '@thelovewalk.com',
            'DTSTAMP:' + new Date().toISOString().replace(/-|:|\.\d\d\d/g, ''),
            'DTSTART:20261024T090000Z',
            'DTEND:20261024T120000Z',
            'SUMMARY:The Love Walk 2026 - Parque da Cidade',
            'DESCRIPTION:Caminhada do Amor no Parque da Cidade Serra',
            'LOCATION:Parque da Cidade - Serra, ES',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([csData], { type: 'text/calendar;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'TheLoveWalk2026.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="action-buttons-container">
            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-whatsapp"
            >
                <FaWhatsapp className="btn-icon whatsapp-icon" />
                <span className="btn-text">Whatsapp TdoA</span>
            </a>

            {/* Guarde na sua Agenda Button */}
            <button
                type="button"
                className="btn-action btn-agenda"
                onClick={() => setShowCalendarModal(true)}
            >
                <div className="calendar-icon-badge">
                    <FaCalendarAlt className="btn-icon" />
                    <span className="calendar-day-num">24</span>
                </div>
                <div className="btn-text-group">
                    <span className="btn-title">Guarde na sua agenda</span>
                    <span className="btn-subtitle">Sábado 24 de outubro | 09h</span>
                </div>
            </button>

            {/* Calendar Modal */}
            {showCalendarModal && (
                <div className="modal-overlay" onClick={() => setShowCalendarModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Salvar Evento na Agenda</h3>
                            <button
                                type="button"
                                className="close-btn"
                                onClick={() => setShowCalendarModal(false)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <p className="modal-description">
                            Escolha a sua agenda preferida para salvar "The Love Walk 2026":
                        </p>
                        <div className="modal-options">
                            <a
                                href={googleCalendarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-option-btn google-btn"
                                onClick={() => setShowCalendarModal(false)}
                            >
                                <FaGoogle className="option-icon" />
                                <span>Google Agenda</span>
                            </a>

                            <button
                                type="button"
                                className="modal-option-btn apple-btn"
                                onClick={() => {
                                    downloadIcsFile();
                                    setShowCalendarModal(false);
                                }}
                            >
                                <FaApple className="option-icon" />
                                <span>Apple Calendar / Outros (.ics)</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
