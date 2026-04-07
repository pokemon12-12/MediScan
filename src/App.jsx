import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingChatbot from './components/FloatingChatbot';
import AuthModel from './components/AuthModel';

//  Navbar 

const Navbar = ({ onSignIn }) => {
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
            <span className="fw-bold">MEDISCAN</span>
            <small className="text-muted" style={{ fontSize: '0.7rem' }}>
              India’s Smart Pharmacy
            </small>
          </div>
        </a>

        {/* 🔍 Search */}
        <form onSubmit={handleSearch} className="d-flex mx-lg-auto flex-grow-1 px-4" style={{ maxWidth: '500px' }}>
          <div className="input-group shadow-sm rounded-pill overflow-hidden border">
            <input
              className="form-control border-0 shadow-none py-2 px-3"
              type="search"
              placeholder="Search medicines, stores, or Ayurveda"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn bg-white border-0 px-3">
              🔍
            </button>
          </div>
        </form>

        {/* 🔹 Links */}

        <ul className="navbar-nav ms-auto align-items-center gap-3">

          <li className="nav-item" style={{ cursor: "pointer" }}
          onClick={() => alert("Categories clicked")}
        >
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

          {/* 🔐 Sign In */}
          <li className="nav-item">
            <button onClick={handleSignIn} className="btn btn-success rounded-pill px-4 fw-semibold shadow-sm">
              Sign In
            </button>
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
const Hero = () => {
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
            <h1 className="display-4 fw-bold text-dark mt-3 mb-4">Stay Safe. Stay Healthy.<br />Your Medicines, Simplified.</h1>
            <p className="lead text-secondary mb-5">Scan prescriptions, discover Ayurvedic alternatives, and locate nearby medical stores with live availability.</p>
            <div className="d-flex gap-3">
              <button className="btn btn-dark rounded-pill px-4 py-2 fw-bold shadow">UPLOAD PRESCRIPTION</button>
              <button className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold bg-white shadow-sm">SEARCH MEDICINE</button>
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

// --- 3. Universal Search ---
const UniversalSearch = () => (
  <section className="container my-5 pt-5 text-center">
    <small className="text-uppercase fw-bold text-muted" style={{ letterSpacing: '2px' }}>Universal Search</small>
    <h2 className="fw-bold mt-2 mb-4">Search medicines, Ayurveda, and stores</h2>
    <div className="mx-auto mb-5" style={{ maxWidth: '800px' }}>
      <div className="input-group shadow-sm rounded-pill overflow-hidden border">
        <span className="input-group-text bg-white border-0 ps-4">🔍</span>
        <input type="text" className="form-control border-0 py-3 shadow-none" placeholder="Search medicine, Ayurvedic alternatives, or stores" />
        <button className="btn bg-white border-0 pe-4 text-secondary">🎙️</button>
      </div>
      <p className="small text-muted mt-3">Voice recognition uses the Web Speech API.</p>
    </div>

    <div className="row g-4">
      {[
        { name: "Paracetamol 650mg", alt: "Giloy + Tulsi blend", shop: "HealthHub Pharmacy", phone: "+91 91234 56789", active: true },
        { name: "Azithromycin 500mg", alt: "None", shop: "CityCare Medical", phone: "+91 98765 43210" },
        { name: "Metformin 500mg", alt: "Karela + Jamun capsules", shop: "Wellness Point", phone: "+91 99887 77665" }
      ].map((med, idx) => (
        <div className="col-md-4" key={idx}>
          <div className={`card h-100 border-0 shadow-sm rounded-4 p-4 text-start ${med.active ? 'border-top border-4 border-success' : ''}`}>
            <h6 className="fw-bold mb-1">{med.name}</h6>
            <p className="small text-muted mb-4">Ayurvedic: <span className="text-success">{med.alt}</span></p>
            <div className="mt-auto border-top pt-3">
              <p className="mb-0 fw-semibold small">{med.shop} • 4.6★</p>
              <p className="text-primary small fw-bold mb-0">{med.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- 4. Featured Medicines ---
const FeaturedMedicines = () => (
  <section className="container my-5 py-5">
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <small className="text-uppercase fw-bold text-muted">Featured Medicines</small>
        <h2 className="fw-bold mt-2">Dummy product cards with pricing</h2>
      </div>
      <span className="text-muted small">Image + Price</span>
    </div>
    <div className="row g-4">
      {[
        { name: "Paracetamol 650mg", cat: "Pain Relief", price: "45", color: "#eef2ff" },
        { name: "Azithromycin 500mg", cat: "Antibiotic", price: "110", color: "#fef2f2" },
        { name: "Metformin 500mg", cat: "Diabetes", price: "85", color: "#f0fdf4" }
      ].map((med, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="p-5 text-center" style={{ backgroundColor: med.color }}>
              <div className="bg-white rounded-3 shadow-sm mx-auto" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>💊</div>
            </div>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="fw-bold m-0">{med.name}</h6>
                <span className="badge rounded-pill bg-light text-dark border fw-normal">{med.cat}</span>
              </div>
              <p className="text-muted small mb-0">Retail price</p>
              <h4 className="fw-bold text-success mb-4">₹{med.price}</h4>
              <button className="btn btn-outline-dark w-100 rounded-pill fw-bold py-2">ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

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

// --- 6. Quick Categories ---
const QuickCategories = () => (
  <section className="container my-5">
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <small className="text-uppercase fw-bold text-muted">Quick Categories</small>
        <h2 className="fw-bold mt-2">Find medicines by intent</h2>
      </div>
      <button className="btn btn-outline-secondary rounded-pill btn-sm px-3 mb-2">Tap to explore</button>
    </div>
    <div className="row g-3">
      {["Fever", "Cold & Cough", "Pain Relief", "Diabetes", "BP", "Ayurvedic"].map((cat, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
            <h6 className="fw-bold mb-1">{cat}</h6>
            <p className="small text-muted mb-0">{idx === 5 ? "NEW 🌿" : "Quick Care"}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- 7. Nearby Stores ---
const NearbyStores = () => (
  <section className="container my-5 pb-5" id="stores">
    <div className="d-flex justify-content-between align-items-end mb-4">
      <div>
        <small className="text-uppercase fw-bold text-muted">Top Nearby Medical Stores</small>
        <h2 className="fw-bold mt-2">Availability + location intelligence</h2>
      </div>
      <span className="text-muted small">Maps ready</span>
    </div>
    <div className="d-flex flex-column gap-3">
      {[
        { name: "HealthHub Pharmacy", rate: "4.6", dist: "0.8 km", phone: "+91 91234 56789" },
        { name: "CityCare Medical", rate: "4.4", dist: "1.3 km", phone: "+91 98765 43210" }
      ].map((store, idx) => (
        <div className="card border-0 shadow-sm rounded-4 p-4" key={idx}>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="fw-bold mb-1">{store.name}</h5>
              <p className="text-muted small mb-0">📍 {store.dist} away • 📞 {store.phone}</p>
            </div>
            <span className="fw-bold text-warning">⭐ {store.rate}</span>
          </div>
          <button className="btn btn-light border w-100 mt-3 rounded-3 fw-bold text-uppercase py-2" style={{ fontSize: '0.75rem' }}>Get Directions</button>
        </div>
      ))}
    </div>
  </section>
);

// --- 8. Store Portal (Inventory Upload) ---
const StorePortal = () => {
  const fileInputRef = useRef(null);
  return (
    <section className="container my-5 py-5 border-top">
      <div className="row">
        <div className="col-lg-6">
          <small className="text-uppercase fw-bold text-muted">Store Inventory Upload</small>
          <h2 className="fw-bold mt-2 mb-4">Add products & availability</h2>
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h6 className="fw-bold mb-3">Upload Product</h6>
            <div className="mb-3"><input className="form-control bg-light border-0 py-2" placeholder="Product name" /></div>
            <div className="row g-2 mb-3">
              <div className="col-6"><input className="form-control bg-light border-0 py-2" placeholder="Price (₹)" /></div>
              <div className="col-6"><input className="form-control bg-light border-0 py-2" placeholder="Stock quantity" /></div>
            </div>
            <div className="border border-dashed rounded-3 p-3 text-center mb-3 bg-light bg-opacity-25" style={{ cursor: 'pointer' }} onClick={() => fileInputRef.current.click()}>
              <small className="text-muted">Upload product image</small>
              <input type="file" ref={fileInputRef} className="d-none" />
            </div>
            <button className="btn btn-success w-100 rounded-pill fw-bold py-2">SAVE PRODUCT</button>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <h5 className="fw-bold mb-3">Availability & Pricing</h5>
          <div className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden border">
            {["Paracetamol 650mg - ₹45", "Triphala Powder - ₹210", "Metformin 500mg - ₹85"].map((item, i) => (
              <div key={i} className="list-group-item d-flex justify-content-between align-items-center py-3">
                <span className="small fw-semibold">{item}</span>
                <button className="btn btn-sm btn-outline-danger border-0">✕</button>
              </div>
            ))}
          </div>
          <button className="btn btn-dark w-100 mt-3 rounded-pill fw-bold">SYNC INVENTORY</button>
        </div>
      </div>
    </section>
  );
};

// --- 9. Order + Payments ---
const OrdersAndPayments = () => (
  <section className="container my-5 py-5 bg-white rounded-4 shadow-sm border p-5">
    <small className="text-uppercase fw-bold text-muted">ORDER + PAYMENTS</small>
    <h2 className="fw-bold mt-2 mb-5">Fast checkout with smart reminders</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <h6 className="fw-bold mb-3">Razorpay / Stripe</h6>
        <p className="text-muted small">Add medicines, choose a store, and lock availability in seconds.</p>
      </div>
      <div className="col-md-4">
        <h6 className="fw-bold mb-3">Secure Payments</h6>
        <p className="text-muted small">Pay online with UPI, cards, or netbanking with instant receipt generation.</p>
      </div>
      <div className="col-md-4">
        <h6 className="fw-bold mb-3">Order Tracking</h6>
        <p className="text-muted small">Instant confirmation and follow-up reminders if purchases are missed.</p>
      </div>
    </div>
  </section>
);

// --- Main App Component ---
function App() {
  const [showAuth, setShowAuth] = useState(false);
  return (
    
    <div className="min-vh-100" style={{ backgroundColor: '#fdfdfd' }}>
      <Navbar onSignIn={() => setShowAuth(true)} />
      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      <main className="pb-5">
        <Hero />
        <UniversalSearch />
        <FeaturedMedicines />
        <AyurvedicDiscovery />
        <QuickCategories />
        <NearbyStores />
        <StorePortal />
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
