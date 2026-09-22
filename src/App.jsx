import React from 'react';
import { Header } from './components/Header';
import { InstagramEmbed } from './components/InstagramEmbed';
import { ActionButtons } from './components/ActionButtons';
import { MapEmbed } from './components/MapEmbed';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portal-wrapper">
      <div className="portal-container">
        {/* Top Header & Hero Graphic Banner */}
        <Header />

        {/* Main Content Body */}
        <main className="portal-content">
          {/* Instagram Embedded Post */}
          <section className="section-instagram">
            <InstagramEmbed />
          </section>

          {/* Action Buttons (WhatsApp & Agenda) */}
          <section className="section-actions">
            <ActionButtons />
          </section>

          {/* Google Maps Embedded Frame */}
          <section className="section-map">
            <MapEmbed />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
