import React from 'react';

const ServicesContent = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Services</h1>
              <p style={{ marginBottom: '4px' }}></p>
              <ul style={{ color: 'white' }}>
                <li>
                  <strong>Curtains & Blinds:</strong> We offer a vast selection of fabrics, colors, and styles to create custom curtains, drapes, and blinds that perfectly fit your windows and your taste.
                </li>
                <li>
                  <strong>Expert Measuring & Installation:</strong> Our experienced team ensures a flawless fit with professional measuring and installation services for both curtains and blinds.
                </li>
                <li>
                  <strong>Curtain Stitching:</strong> Need a specific size or style? We offer in-house curtain stitching to meet your exact requirements.
                </li>
                <li>
                  <strong>Flooring:</strong> Elevate your space from the ground up with our extensive collection of flooring options.
                </li>
              </ul>
              <p style={{ color: 'white' }}>
                Our friendly and knowledgeable staff provides personalized consultations to guide you through the selection process, considering your style, needs, and budget. We source only the finest fabrics and materials, ensuring elegance, durability, and a luxurious feel in your home. Explore a world of design inspiration with our diverse collection of fabrics from around the globe.
              </p>
              <p>
                <a href="/Shop" className="btn btn-secondary me-2">Shop Now</a>
                <a href="/Info" className="btn btn-white-outline">Explore Our Services</a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="images/green_curtain2.png" className="img-fluid" alt="Green Curtain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;