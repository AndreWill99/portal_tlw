import React from 'react';

export const MapEmbed = () => {
    return (
        <div className="map-embed-container">
            <div className="map-frame-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.353123719832!2d-40.26338622505824!3d-20.2026420468559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81fe9c0f8f9b7%3A0xaa57628b5afa138b!2sParque%20da%20Cidade!5e0!3m2!1spt-BR!2sbr!4v1790045880631!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Parque da Cidade - Google Maps"
                />
            </div>
        </div>
    );
};
