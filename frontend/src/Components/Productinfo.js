import React from 'react'

function FabricCare() {
  return (
    <div>
      <h3>Fabric Care</h3>
      <p>Please follow these care instructions to ensure the longevity of your curtains:</p>
        <li>Dry clean only</li>
        <li>Avoid direct sunlight</li>
        <li>Do not iron or steam</li>
    </div>
  );
}
function AboutSeller() {
  return (
    <div>
      <h3>About Seller</h3>
      <p>Welcome to our ecommerce curtain store! We are committed to providing high-quality curtains and excellent customer service. Established in 2014 by Mr. Rajesh Gupta, Neelkanth Traders is a renowned name in premium home furnishings. We are a chain of retail stores located in the heart of Gurugram, Haryana, catering to a discerning clientele that seeks to elevate their living spaces. Our Passion is Transforming Homes into Havens At Neelkanth Traders, we believe your home is a reflection of your unique style. Our dedicated team strives to understand your taste and individual needs. We offer a curated selection of home furnishing solutions that encompass a world of design inspiration Diverse Design Palette: Explore a captivating range of colors, textures, and patterns, sourced from around the globe. </p>
    </div>
  );
}




const Productinfo = () => {
  return (
    <div>
      <FabricCare />
      <AboutSeller />
    </div>
  )
}

export default Productinfo