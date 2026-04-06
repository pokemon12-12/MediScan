import React from 'react';

function Hero() {
  return (
    <div className="hero-wrapper" style={{ marginTop: '100px', marginBottom: '60px' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side: Text Content */}
          <div className="col-lg-6 mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Order Medicines <span className="text-success">Easily</span>
            </h1>
            <p className="lead text-muted mb-4">
              Upload your prescription and get your medicines delivered from your trusted local stores in minutes.
            </p>
            
            {/* Simple Feature Card */}
            <div className="card border-0 bg-light p-4 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success text-white rounded-circle p-2 px-3 fw-bold">1</div>
                <p className="mb-0 fw-semibold">Quick 10-Minute Delivery</p>
              </div>
              <hr className="text-muted opacity-25" />
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success text-white rounded-circle p-2 px-3 fw-bold">2</div>
                <p className="mb-0 fw-semibold">Verified Local Pharmacists</p>
              </div>
            </div>
          </div>

          {/* Right Side: Simple Prescription Card */}
          <div className="col-lg-5 offset-lg-1">
            <div className="card shadow-sm border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              
              {/* Card Header Color Strip */}
              <div className="bg-success" style={{ height: '8px' }}></div>
              
              <div className="card-body p-4 p-md-5 text-center">
                <div className="mb-4">
                  <div className="bg-success-subtle rounded-circle d-inline-block p-4">
                    <span style={{ fontSize: '2.5rem' }}>📄</span>
                  </div>
                </div>
                
                <h4 className="fw-bold mb-2">Prescription</h4>
                <p className="text-muted small mb-4">Upload a clear photo to process your order</p>
                
                {/* Minimalist Upload Box */}
                <div className="upload-area border rounded-3 p-4 mb-4" 
                     style={{ borderStyle: 'dashed', borderWidth: '2px', borderColor: '#cbd5e0' }}>
                  <input type="file" id="prescriptionLoad" hidden />
                  <label htmlFor="prescriptionLoad" className="btn btn-outline-success btn-sm fw-bold mb-2">
                    BROWSE FILES
                  </label>
                  <div className="text-secondary smaller" style={{ fontSize: '0.75rem' }}>
                    JPG, PNG or PDF (Max 5MB)
                  </div>
                </div>

                <button className="btn btn-success w-100 py-3 fw-bold shadow-sm" style={{ borderRadius: '10px' }}>
                  CONTINUE TO ORDER
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;