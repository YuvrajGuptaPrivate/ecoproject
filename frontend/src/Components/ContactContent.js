import React from 'react'

const ContactContent = () => {
  return (
    <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Contact</h1>
								<p className="mb-4">Let's Get in Touch!
									At Neelkanth Traders, we're here to help you transform your home into a haven. Whether you have a question about our products, need assistance with a custom project, or simply want to schedule a consultation, we'd love to hear from you.
									We look forward to connecting with you!</p>
								<p><a href="https://wa.me/919267993085" className="btn btn-secondary me-2">Live Chat</a><a href="/Shop" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/green_curtain2.png"  alt='' className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default ContactContent
