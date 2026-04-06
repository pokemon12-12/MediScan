const FeaturedMedicines = () => {
  const medicines = [
    {
      name: "Paracetamol 650mg",
      category: "Pain Relief",
      price: "45",
      image: "https://via.placeholder.com/150?text=Medicine+1" // Replace with your actual image path
    },
    {
      name: "Azithromycin 500mg",
      category: "Antibiotic",
      price: "110",
      image: "https://via.placeholder.com/150?text=Medicine+2"
    },
    {
      name: "Metformin 500mg",
      category: "Diabetes",
      price: "85",
      image: "https://via.placeholder.com/150?text=Medicine+3"
    }
  ];

  return (
    <section className="container my-5 py-5">
      <div className="mb-4">
        <small className="text-uppercase fw-bold text-muted" style={{ letterSpacing: '2px' }}>
          Featured Medicines
        </small>
        <div className="d-flex justify-content-between align-items-end">
          <h2 className="fw-bold mt-2">Dummy product cards with pricing</h2>
          <span className="text-muted small mb-2">Image + Price</span>
        </div>
      </div>

      <div className="row g-4">
        {medicines.map((med, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              {/* Product Image Area */}
              <div 
                className="d-flex align-items-center justify-content-center p-4" 
                style={{ backgroundColor: '#f8f9fa', minHeight: '200px' }}
              >
                <img 
                  src={med.image} 
                  alt={med.name} 
                  className="img-fluid rounded" 
                  style={{ maxHeight: '120px', mixBlendMode: 'multiply' }} 
                />
              </div>

              {/* Card Body */}
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className="fw-bold m-0">{med.name}</h6>
                  <span className="badge rounded-pill bg-light text-dark border fw-normal">
                    {med.category}
                  </span>
                </div>
                
                <div className="mt-4 mb-4">
                  <p className="text-muted small mb-0">Retail price</p>
                  <h4 className="fw-bold text-success mb-0">₹{med.price}</h4>
                </div>

                {/* Add to Cart Button */}
                <button className="btn btn-outline-dark w-100 rounded-pill fw-bold py-2 shadow-sm">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};