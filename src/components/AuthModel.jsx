import React, { useState } from 'react';

const AuthModel = ({ onClose }) => {
  const [role, setRole] = useState("patient");
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
    if (role == "store") {
      console.log("Register Store:", storeForm);
    } else {
      console.log("Login Patient:", patientForm);
    }
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
              Register as Store
            </button>
            <button
              type="button"
              className={"btn " + (role === "patient" ? "btn-success" : "btn-outline-success")}
              onClick={() => setRole("patient")}
            >
              Login as Patient
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
              <button type="submit" className="btn btn-success w-100 fw-semibold rounded-pill">
                Register Store
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
                Login as Patient
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModel;
