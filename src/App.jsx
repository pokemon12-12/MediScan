import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingChatbot from './components/FloatingChatbot';
import AuthModel from './components/AuthModel';

//  Navbar 

const Navbar = ({ onSignIn, onRegister, searchEnabled, searchInputRef, hasAccount }) => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // 🔍 Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for: " + search);
  };


  // 🌙 Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = !darkMode ? "#121212" : "#fdfdfd";
    document.body.style.color = !darkMode ? "#ffffff" : "#000000";
  };

  // 🛒 Cart Click
  const handleCart = () => {
    alert("Cart clicked 🛒");
  };

  // 🔐 Sign In Click
  const handleSignIn = () => {
    onSignIn();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3 sticky-top">
      <div className="container-fluid align-items-center">

        {/* 🔹 Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <div className="bg-success text-white rounded-3 d-flex align-items-center justify-content-center fw-bold"
            style={{ width: '38px', height: '38px' }}>
            MS
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">MedBridge</span>
            <small className="text-muted" style={{ fontSize:'0.7rem' }}>
              India's Smart Pharmacy
            </small>
          </div>
        </a>

        {/* 🔍 Search */}
        <form onSubmit={handleSearch} className="d-flex mx-lg-auto flex-grow-1 px-4" style={{ maxWidth: '500px' }}>
          <div className="input-group shadow-sm rounded-pill overflow-hidden border">
            <input
              ref={searchInputRef}
              className="form-control border-0 shadow-none py-2 px-3"
              type="search"
              placeholder="Search medicines, stores, or Ayurveda"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              disabled={!searchEnabled}
            />
            <button className="btn bg-white border-0 px-3" disabled={!searchEnabled}>
              🔍
            </button>
          </div>
        </form>

        {/* 🔹 Links */}

        <ul className="navbar-nav ms-auto align-items-center gap-3">

          <li className="nav-item" style={{ cursor: "pointer" }}
          onClick={() => alert("Categories clicked")}>
          <span className="nav-link fw-semibold">Categories</span>
        </li>

          <li className="nav-item" style={{ cursor: "pointer" }} onClick={() => alert("Stores clicked")}>
            <span className="nav-link fw-semibold">Stores</span>
          </li>

          {/* 🛒 Cart */}

          <li className="nav-item">

            <button
              onClick={handleCart}
              className="btn btn-light border rounded-pill px-3 fw-semibold">
              Cart
            </button>

          </li>

          {/* 🔐 Login | Register */}
          <li className="nav-item">
            {hasAccount ? (
              <button onClick={handleSignIn} className="btn btn-success rounded-pill px-3 py-2 fw-semibold shadow-sm">
                Login
              </button>
            ) : (
              <button onClick={onRegister} className="btn btn-outline-success rounded-pill px-3 py-2 fw-semibold shadow-sm">
                Login | Register
              </button>
            )}
          </li>

          {/* 🌙 Dark Mode */}
          <li className="nav-item">
            <button
              onClick={toggleDarkMode}
              className="btn btn-light rounded-circle"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

// --- 2. Hero Section ---
const Hero = ({ onEnableSearch }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFilePick = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      alert(`File selected: ${file.name}`);
    }
  };

  return (
    <section className="container mt-5">
      <div className="rounded-4 p-5 shadow-sm border border-light-subtle" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)', minHeight: '450px' }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <small className="text-uppercase fw-bold text-muted letter-spacing-1">MEDISCAN MVP</small>
            <h1 className="display-4 fw-bold text-dark mt-3 mb-4">Don’t search store to store for medicines<br/>MedBridge finds the nearest one for you</h1>
            <p className="lead text-secondary mb-5">Scan prescriptions, discover Ayurvedic alternatives, and locate nearby medical stores with live availability.</p>
          <div className="d-flex gap-3">
            <button
              className="btn btn-dark rounded-pill px-4 py-2 fw-bold shadow"
              onClick={() => fileInputRef.current?.click()}
            >
              UPLOAD PRESCRIPTION
            </button>
            <button
              className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold bg-white shadow-sm"
              onClick={onEnableSearch}
            >
              SEARCH MEDICINE
            </button>
            </div>
            <button className="btn btn-link text-dark text-decoration-none fw-semibold mt-4 p-0">🎙️ VOICE SEARCH</button>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="card border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold m-0">Prescription Scanner</h6>
                <span className="badge bg-light text-dark border">OCR + AI</span>
              </div>
              <div
                className="border border-2 border-dashed rounded-4 p-5 text-center bg-white mb-3"
                style={{ cursor: 'pointer' }}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="fs-2">📤</div>
                <p className="fw-bold mb-0 text-dark">{fileName ? fileName : "Drop file or click to upload"}</p>
                <small className="text-muted">PNG, JPG, PDF</small>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="d-none"
                  onChange={handleFilePick}
                />
              </div>
              <p className="fw-bold small mb-2">Detected medicines</p>
              <ul className="list-unstyled small text-secondary">
                <li>• Amoxicillin 500mg</li>
                <li>• Paracetamol 650mg</li>
                <li>• Omeprazole 20mg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- 5. Ayurvedic Discovery ---
const AyurvedicDiscovery = () => (
  <section className="container my-5 py-5">
    <div className="mb-4">
      <small className="text-uppercase fw-bold text-muted" style={{ letterSpacing: '2px' }}>AYURVEDIC DISCOVERY</small>
      <h2 className="fw-bold mt-2">Natural remedies with smart alternatives</h2>
    </div>
    <div className="d-flex gap-2 mb-4 flex-wrap">
      {["Immunity", "Digestion", "Skin care", "Stress relief"].map(tag => (
        <span key={tag} className="badge rounded-pill bg-white text-dark border px-3 py-2 fw-normal" style={{ cursor: 'pointer' }}>{tag}</span>
      ))}
    </div>
    <div className="row g-4">
      {[
        { name: "Ashwagandha Capsules", use: "Stress Relief", alt: "Anxiety support" },
        { name: "Triphala Powder", use: "Digestion", alt: "Gut cleanse" },
        { name: "Neem Tablets", use: "Skin Care", alt: "Detox" }
      ].map((item, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-bold mb-0">{item.name}</h6>
              <span className="badge bg-success bg-opacity-10 text-success border-success border-opacity-25 border">Ayurvedic</span>
            </div>
            <p className="small text-muted mb-1">{item.use}</p>
            <p className="small mb-4">Allopathic alternative: <span className="fw-semibold text-dark">{item.alt}</span></p>
            <button className="btn btn-light w-100 rounded-pill fw-bold border mt-auto">COMPARE OPTIONS</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- 9. Order + Payments ---
const OrdersAndPayments = () => (
  <section className="container my-5 py-5 bg-white rounded-4 shadow-sm border p-5">
    <small className="text-uppercase fw-bold text-muted">ORDER + PAYMENTS</small>
    <h2 className="fw-bold mt-2 mb-5">Fast checkout with smart reminders</h2>
    <div className="row g-4">
      {[
        {
          title: "Razorpay / Stripe",
          text: "Add medicines, choose a store, and lock availability in seconds.",
          img: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f6d2.png",
          alt: "Cart"
        },
        {
          title: "Secure Payments",
          text: "Pay online with UPI, cards, or netbanking with instant receipt generation.",
          img: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4b3.png",
          alt: "Card"
        },
        {
          title: "Order Tracking",
          text: "Instant confirmation and follow-up reminders if purchases are missed.",
          img: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e6.png",
          alt: "Package"
        }
      ].map((item) => (
        <div className="col-md-4" key={item.title}>
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <img
              src={item.img}
              alt={item.alt}
              width="56"
              height="56"
              className="mb-3"
            />
            <h6 className="fw-bold mb-2">{item.title}</h6>
            <p className="text-muted small mb-0">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Main App Component ---
function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [searchEnabled, setSearchEnabled] = useState(false);
  const searchInputRef = useRef(null);
  const [authMode, setAuthMode] = useState("register");
  const [hasAccount, setHasAccount] = useState(
    localStorage.getItem("mediscan_has_account") === "true"
  );

  const handleEnableSearch = () => {
    setSearchEnabled(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };
  return (
    
    <div className="min-vh-100" style={{ backgroundColor: '#fdfdfd' }}>
      <Navbar
        onSignIn={() => {
          setAuthMode("signin");
          setShowAuth(true);
        }}
        onRegister={() => {
          setAuthMode("register");
          setShowAuth(true);
        }}
        searchEnabled={searchEnabled}
        searchInputRef={searchInputRef}
        hasAccount={hasAccount}
      />
      {showAuth && (
        <AuthModel
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onRegistered={() => {
            localStorage.setItem("mediscan_has_account", "true");
            setHasAccount(true);
          }}
        />
      )}
      <main className="pb-5">
        <Hero onEnableSearch={handleEnableSearch} />
        <AyurvedicDiscovery />
        <OrdersAndPayments />
      </main>
      <footer className="bg-white border-top py-5 text-center">
        <p className="text-muted small mb-0">MediScan © 2026. India’s Smart Pharmacy Dashboard.</p>
        <div className="mt-2 small">
          <a href="#" className="text-decoration-none text-muted mx-2">Privacy</a>
          <a href="#" className="text-decoration-none text-muted mx-2">Terms</a>
          <a href="#" className="text-decoration-none text-muted mx-2">Support</a>
        </div>
      </footer>

      <FloatingChatbot />
    </div>
  );
}

export default App;
