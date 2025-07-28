import './App.css';
import { useEffect } from 'react';

// Declare Tally global type
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

function App() {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="eldorado-root">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          {/* Optional: SVG Island + Skyline */}
          <svg className="island-skyline" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="110" rx="180" ry="10" fill="#FFD700" opacity="0.2" />
            <rect x="80" y="60" width="30" height="40" fill="#3E4C59" />
            <rect x="120" y="40" width="20" height="60" fill="#0D1B2A" />
            <rect x="160" y="70" width="15" height="30" fill="#3E4C59" />
            <rect x="200" y="50" width="25" height="50" fill="#0D1B2A" />
            <rect x="250" y="65" width="18" height="35" fill="#3E4C59" />
            <rect x="280" y="80" width="12" height="20" fill="#0D1B2A" />
            <ellipse cx="200" cy="115" rx="200" ry="5" fill="#FFD700" opacity="0.4" />
          </svg>
        </div>
        <div className="hero-content">
          <h1>Own a Piece of El Dorado</h1>
          <p className="subtext">Invest in real estate. Starting from just ₹10,000.</p>
          <button className="cta-btn" disabled>
            Download App <span className="coming-soon">Coming Soon</span>
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-card">
            <div className="icon">🏠</div>
            <h3>Browse Properties</h3>
            <p>Explore curated real estate opportunities.</p>
          </div>
          <div className="step-card">
            <div className="icon">💸</div>
            <h3>Invest Fractionally</h3>
            <p>Start with as little as ₹10,000 and own a fraction.</p>
          </div>
          <div className="step-card">
            <div className="icon">📈</div>
            <h3>Earn Monthly Rent</h3>
            <p>Get your share of dividends.</p>
          </div>
          <div className="step-card">
            <div className="icon">📊</div>
            <h3>Track Your Returns</h3>
            <p>Monitor your portfolio and returns in real time.</p>
          </div>
        </div>
      </section>

      {/* Why El Dorado */}
      <section className="why-eldorado">
        <h2>Why El Dorado?</h2>
        <div className="reasons">
          <div className="reason-card">
            <div className="icon gold">₹</div>
            <h3>Low Entry Cost</h3>
            <p>Invest in  properties with minimal capital.</p>
          </div>
          <div className="reason-card">
            <div className="icon gold">🏢</div>
            <h3>Curated Properties</h3>
            <p>Only the best, thoroughly vetted assets.</p>
          </div>
          <div className="reason-card">
            <div className="icon gold">📜</div>
            <h3>Legal SPV Structure</h3>
            <p>Invest securely via regulated ownership.</p>
          </div>
          <div className="reason-card">
            <div className="icon gold">🔐</div>
            <h3>Fully Digital & KYC</h3>
            <p>Seamless, paperless onboarding and verification.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          El Dorado's mission is to democratize access to India's most coveted real estate. We believe everyone should have the opportunity to build wealth through property, regardless of their starting point. We exist for the dreamers, the hustlers, and the cautious savers who have been priced out of the traditional property market,El Dorado brings trust, simplicity, and accessibility to real estate investing.
        </p>
      </section>

      {/* Coming Soon Teaser */}
      <section className="coming-soon-teaser">
        <div className="app-preview">
          {/* Placeholder for mobile app preview */}
          <svg width="120" height="240" viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="220" rx="20" fill="#0D1B2A" stroke="#FFD700" strokeWidth="4"/>
            <rect x="35" y="30" width="50" height="180" rx="10" fill="#3E4C59" />
            <circle cx="60" cy="210" r="6" fill="#FFD700" />
          </svg>
        </div>
        <div className="teaser-content">
          <h3>iOS and Android apps launching soon</h3>
        </div>
      </section>

      {/* Survey Form */}
      <section className="survey-form">
        <div className="survey-container">
          <h2>Help Us Build Better</h2>
          <p>Share your thoughts and help shape the future of real estate investing</p>
          <div className="tally-form-wrapper">
            <iframe 
              data-tally-src="https://tally.so/embed/3x5Pzo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
              loading="lazy" 
              width="100%" 
              height={1597}
              frameBorder="0" 
              marginHeight={0}
              marginWidth={0}
              title="Eldorado - Real estate investment made affordable"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        
        <div className="footer-legal">© 2025 El Dorado. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
