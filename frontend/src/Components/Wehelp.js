import React from 'react'

const Wehelp = () => {
  return (
    <div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src="images/wallpaper1.png" alt="Curtain Rod Installation"/></div>
							<div className="grid grid-2"><img src="images/curtain_rod.png" alt="Blinds"/></div>
							<div className="grid grid-3"><img src="images/blind.png" alt="WallPAPER"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Beautiful Homes</h2>
						<p>Transform your home with our exquisite collection of custom curtains, blinds, and shades. Our expert designers will guide you in selecting the perfect window treatments to enhance your interior design.</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Customized curtain solutions for any window style</li>
							<li>Expert design consultation to ensure a perfect fit</li>
							<li>High-quality materials and craftsmanship</li>
							<li>Professional installation for a hassle-free experience</li>
						  </ul>
						  <p><a href="/Contact" className="btn">Get Started Today</a></p>
						</div>
				</div>
			</div>
		</div>
  )
}

export default Wehelp
