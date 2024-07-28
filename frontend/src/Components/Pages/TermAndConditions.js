import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import "../TandC.css"

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar/>
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to Neelkanth Curtain Store, your premier destination for high-quality curtains. By accessing and using our website, you agree to be bound by these Terms and Conditions.
      </p>
      <h2>1. Definitions</h2>
      <p>
        In these Terms and Conditions, the following definitions apply:
        <ul>
          <li>"We" or "us" refers to Neelkanth Curtain Store.</li>
          <li>"You" or "your" refers to the customer.</li>
          <li>"Website" refers to NeelkanthCurtain.com .</li>
          <li>"Products" refers to the curtains and other items sold on our website.</li>
        </ul>
      </p>
      <h2>2. Use of the Website</h2>
      <p>
        You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the website by, any other person.
      </p>
      <h2>3. Product Information</h2>
      <p>
        We take reasonable care to ensure that the information on our website is accurate and up-to-date. However, we do not guarantee that the information is complete, accurate, or up-to-date.
      </p>
      <h2>4. Pricing and Payment</h2>
      <p>
        Prices for our products are as displayed on our website. We reserve the right to change prices at any time. Payment for products must be made in full before dispatch.
      </p>
      <h2>5. Delivery</h2>
      <p>
        We will use reasonable endeavors to deliver products within the estimated delivery times. However, we do not guarantee delivery times and will not be liable for any delays.
      </p>
      <h2>6. Alterations and Size Issues</h2>
      <p>
        If you experience any size issues with your product, please contact us within 3 days of delivery. We will work with you to alter the product to fit your needs. Please note that we do not accept returns or refunds for any other reason.
      </p>
      <h2>7. Intellectual Property</h2>
      <p>
        All intellectual property rights in our website and products are owned by us or our licensors. You may not reproduce, modify, or distribute any content from our website without our prior written consent.
      </p>
      <h2>8. Liability</h2>
      <p>
        We will not be liable for any loss or damage arising from your use of our website or products, except to the extent that such loss or damage is caused by our negligence or breach of these Terms and Conditions.
      </p>
      <h2>9. Governing Law</h2>
      <p>
        These Terms and Conditions will be governed by and construed in accordance with the laws of Haryana . Any disputes arising out of or in connection with these Terms and Conditions will be resolved through binding arbitration in accordance with the rules of the [Arbitration Association].
      </p>
      <h2>10. Changes to Terms and Conditions</h2>
      <p>
        We reserve the right to change these Terms and Conditions at any time. Your continued use of our website will be deemed acceptance of any changes.
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;