import React, { useState } from 'react';

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="position-fixed bottom-0 end-0 p-4" style={{ zIndex: 9999 }}>
      {open && (
        <div className="card shadow-lg border-0 rounded-4 mb-3" style={{ width: "280px" }}>
          <div className="card-body">
            <h6 className="fw-bold mb-2">MediScan Assistant</h6>
            <p className="small text-muted mb-3">
              Hi 👋 I’m here to help you. Ask me anything.
            </p>
            <div className="border rounded-3 p-2 small text-muted bg-light">
              Chatbot API ready. Responses will appear here.
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="btn btn-success rounded-circle shadow"
        style={{ width: "52px", height: "52px" }}
        aria-label="Open chatbot"
      >
        💬
      </button>
    </div>
  );
};

export default FloatingChatbot;
