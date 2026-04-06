import React, { useState } from 'react';

function AuthModal() {
  const [userType, setUserType] = useState('patient'); // 'patient' or 'store'

  return (
    <div className="modal fade" id="authModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
          
          <div className="modal-body p-5">
            <div className="text-center mb-4">
              <h3 className="fw-bold">Welcome to <span className="text-success">MEDISCAN</span></h3>
              <p className="text-muted">Enter your details to continue</p>
            </div>

            {/* Toggle Switch for User Type */}
            <div className="d-flex bg-light p-1 rounded-pill mb-4">
              <button 
                className={`btn w-50 rounded-pill fw-bold ${userType === 'patient' ? 'btn-success shadow-sm' : 'btn-light'}`}
                onClick={() => setUserType('patient')}
              >
                Patient
              </button>
              <button 
                className={`btn w-50 rounded-pill fw-bold ${userType === 'store' ? 'btn-success shadow-sm' : 'btn-light'}`}
                onClick={() => setUserType('store')}
              >
                Store / Pharmacy
              </button>
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold small">Email Address</label>
                <input type="email" className="form-control p-3 border-0 bg-light" placeholder="name@example.com" required />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold small">Phone Number</label>
                <input type="tel" className="form-control p-3 border-0 bg-light" placeholder="+91 XXXXX XXXXX" required />
              </div>
              
              <button type="submit" className="btn btn-dark w-100 py-3 fw-bold rounded-3">
                {userType === 'patient' ? 'LOGIN AS PATIENT' : 'REGISTER STORE'}
              </button>
            </form>

            <div className="text-center mt-4">
              <small className="text-muted">By continuing, you agree to our Terms of Service.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;