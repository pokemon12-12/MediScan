import React, { useState } from 'react';

const AuthModel = ({ onClose, mode = "register", onRegistered }) => {
  const [role, setRole] = useState("patient");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [storeForm, setStoreForm] = useState({
    shopName: "",
    email: "",
    phone: ""
  });
  const [patientForm, setPatientForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleStoreChange = (e) => {
    setStoreForm({ ...storeForm, [e.target.name]: e.target.value });
  };

  const handlePatientChange = (e) => {
    setPatientForm({ ...patientForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "register") {
      if (role == "store") {
        console.log("Register Store:", storeForm);
      } else {
        console.log("Register Patient:", patientForm);
      }
      setOtpSent(true);
    } else {
      if (role == "store") {
        console.log("Sign In Store:", storeForm);
      } else {
        console.log("Sign In Patient:", patientForm);
      }
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp.trim()) return;
    // TODO: Replace with backend OTP verification
    setVerified(true);
    if (onRegistered) onRegistered();
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center p-3"
      style={{ zIndex: 9999 }}
    >
      <div className="card shadow-lg border-0 rounded-4 w-100" style={{ maxWidth: "520px" }}>
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">Sign In / Register</h5>
            <button onClick={onClose} className="btn btn-sm btn-light">✕</button>
          </div>

          <div className="btn-group w-100 mb-4">
            <button
              type="button"
              className={"btn " + (role === "store" ? "btn-success" : "btn-outline-success")}
              onClick={() => setRole("store")}
            >
              {mode === "register" ? "Register as Store" : "Sign In as Store"}
            </button>
            <button
              type="button"
              className={"btn " + (role === "patient" ? "btn-success" : "btn-outline-success")}
              onClick={() => setRole("patient")}
            >
              {mode === "register" ? "Register as Patient" : "Sign In as Patient"}
            </button>
          </div>

          {role === "store" ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Shop Name</label>
                <input
                  name="shopName"
                  value={storeForm.shopName}
                  onChange={handleStoreChange}
                  className="form-control"
                  placeholder="Enter shop name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  value={storeForm.email}
                  onChange={handleStoreChange}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  name="phone"
                  value={storeForm.phone}
                  onChange={handleStoreChange}
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              {mode === "register" && (
                <div className="mb-4">
                  <label className="form-label fw-semibold">Shop Location (Google Maps)</label>
                  <input
                    name="location"
                    className="form-control"
                    placeholder="Paste Google Maps link or address"
                  />
                </div>
              )}
              <button type="submit" className="btn btn-success w-100 fw-semibold rounded-pill">
                {mode === "register" ? "Register Store" : "Sign In Store"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  name="name"
                  value={patientForm.name}
                  onChange={handlePatientChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  value={patientForm.email}
                  onChange={handlePatientChange}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  name="phone"
                  value={patientForm.phone}
                  onChange={handlePatientChange}
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100 fw-semibold rounded-pill">
                {mode === "register" ? "Register Patient" : "Sign In Patient"}
              </button>
            </form>
          )}
          {mode === "register" && otpSent && !verified && (
            <form onSubmit={handleVerifyOtp} className="mt-4">
              <label className="form-label fw-semibold">Enter OTP sent to email</label>
              <div className="input-group">
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="form-control"
                  placeholder="6-digit OTP"
                />
                <button type="submit" className="btn btn-outline-success">
                  Verify
                </button>
              </div>
              <p className="small text-muted mt-2 mb-0">
                OTP sent to your email. Verify to complete registration.
              </p>
            </form>
          )}
          {mode === "register" && verified && (
            <p className="small text-success mt-3 mb-0">
              Verified successfully. You can now sign in next time.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModel;
