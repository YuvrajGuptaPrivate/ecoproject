import React from 'react'

const Whychooseus = () => {
  return (
    <div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Our Curtains</h2>
						<p>Experience the art of window dressing with our exquisite collection of custom curtains, blinds, and shades. From modern to traditional, we have the perfect solution for your home</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/ruler.svg" alt="" className="imf-fluid"/>
									</div>
									<h3>Accurate Measurements</h3>
									<p>We ensure precise measurements to guarantee a perfect fit for your windows.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/bag.svg" alt="" className="imf-fluid"/>
									</div>
									<h3>High-Quality Fabrics</h3>
									<p>We use only the finest materials, carefully selected to ensure durability and style.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/expert.svg" alt="" className="imf-fluid"/>
									</div>
									<h3>Expert Design Consultation</h3>
									<p>Our experienced designers will guide you in selecting the perfect curtains for your space.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/install.svg" alt="" className="imf-fluid"/>
									</div>
									<h3>Professional Installation</h3>
									<p>Our skilled installers will ensure a seamless and hassle-free installation process.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="images/green_curtain3.jpg" alt="" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
  )
}

export default Whychooseus
