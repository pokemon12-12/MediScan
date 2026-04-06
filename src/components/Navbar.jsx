function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
      <div className="container-fluid">
        
        {/* Branding: Logo + Title + Tagline */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <div className="bg-success text-white rounded p-1 fw-bold" style={{ fontSize: '1.2rem' }}>MS</div>
          <div className="d-flex flex-column" style={{ lineHeight: '1.1' }}>
            <span className="fw-bold text-dark mb-0">MEDISCAN</span>
            <small className="text-muted" style={{ fontSize: '0.7rem' }}>India’s Smart Pharmacy</small>
          </div>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          
          {/* Search Bar - Adjusted to match the "Search medicines, stores, or Ayurveda" placeholder */}
          <form className="d-flex mx-lg-auto flex-grow-1" style={{ maxWidth: '450px' }}>
            <div className="input-group">
              <input
                className="form-control border-end-0 shadow-none"
                type="search"
                placeholder="Search medicines, stores, or Ayurveda"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary border-start-0" type="submit">
                🔍
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#features">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#stores">Stores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#orders">Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/dashboard">Dashboard</a>
            </li>

            {/* Utility Buttons */}
            <li className="nav-item ms-lg-2">
              <a href="/orders" className="btn btn-light fw-bold border shadow-sm">
                CART
              </a>
            </li>
            <li className="nav-item">
              <a href="/auth" className="btn btn-success fw-bold px-3">
                SIGN IN
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-dark border-0">
                [DARK]
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;