import React from 'react'

const Popularproduct = () => {
  return (
    <div className="popular-product">
			<div className="container">
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/polysterr.png" alt="" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Polyester Curtains</h3>
								<p>Experience the luxury of our velvet curtains, available in a range of colors and patterns to match your interior design.</p>
								<p><a href="/Info">Learn More</a></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/blackout.png" alt="" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Blackout Curtains</h3>
								<p>Block out light and noise with our high-quality blackout curtains, perfect for bedrooms and media rooms.</p>
								<p><a href="/Info">Learn More</a></p>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div className="product-item-sm d-flex">
							<div className="thumbnail">
								<img src="images/roman_blinds.png" alt="" className="img-fluid"/>
							</div>
							<div className="pt-3">
								<h3>Roman Shades</h3>
								<p>Elevate your windows with our stylish Roman shades, available in a range of fabrics and colors.</p>
								<p><a href="/Info">Learn More</a></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div> 
  )
}

export default Popularproduct
