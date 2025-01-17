import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
			<div className="container relative">

				<div className="sofa-img">
					<img src="images/sofa.png" alt='' className="img-fluid"/>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img alt='' src="images/envelope-outline.svg"  className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>
				
							<form action="https://formspree.io/f/xrbzegzr" method="POST" className="row g-3">
								<div className="col-auto">
									<input name="name" type="text" className="form-control" placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input name="Email" type="email" className="form-control" placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary">
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>
				
						</div>
					</div>
				</div>

        <div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a href="/Home" className="footer-logo">Neelkanth Curtain Store<span>.</span></a></div>
						<p className="mb-4">Experience the art of window dressing with our exquisite collection of custom curtains, blinds, and shades. Get expert advice from our designers to transform your home.</p>
						<ul className="list-unstyled custom-social">
							<li><a href="Na"><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="Na"><span className="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="Na"><span className="fa fa-brands fa-instagram"></span></a></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="/About">About us</a></li>
									<li><a href="/Services">Services</a></li>									
									<li><a href="/Contact">Contact us</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="/Contact">Support</a></li>
									<li><a href="https://wa.me/919267993085">Live chat</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="/PolicyPages">Privacy Policy</a></li>
								</ul>
							</div>

							
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by Yuvraj Gupta <a href="https://shorturl.at/69nHe">Linkdin</a>
            </p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><a href="/TermsAndConditions">Terms &amp; Conditions</a></li>
								<li><a href="/PolicyPages">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
  )
}

export default Footer
