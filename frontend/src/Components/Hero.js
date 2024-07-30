import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Custom Curtains<span className="d-block"> & Blinds</span></h1>
              <h3 style={{ color: '#fefbfbfb' }}>Made-to-Measure <span className="d-block">Window Treatments</span></h3>
              <p className="mb-4">
                Neelkanth Curtain Store is your one-stop shop for all things window dressing and more! We specialize in creating custom curtains that not only elevate your space's aesthetics but also perfectly reflect your individual style. From classic elegance to modern minimalism, we offer a vast variety of styles to suit any taste. But curtains are just the beginning! We also provide blinds, wallpaper, PVC panels, flooring, and curtain rods, ensuring you have everything you need to bring your design vision to life. Plus, with our free in-home consultation, our experts will guide you through the process, making it effortless to find the perfect window treatments and interior finishes for your home, office, or commercial space.
              </p>
              <div className="intro-excerpt">
                <h1>Connect with us through WhatsApp</h1>
                <a href="https://wa.me/919267993085" >
                  <button className="btn btn-secondary me-2">Click to Connect</button>
                  </a>
                  <a href="https://maps.app.goo.gl/M6Az6iyxJoPidzfDA" className="btn btn-white-outline">Visit Our Offline Store</a>
                  </div>
                  <br/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="images/green_curtain2.png" alt="Curtain " className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
