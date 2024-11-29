import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null); // Initialize as null
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "Custom",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData; 
        let product = productDetails;

        // Create FormData and append the image
        let formData = new FormData();
        formData.append('productImage', image); // Change 'product' to 'productImage'

        try {
            // Upload the image
            responseData = await fetch(`https://ecoproject-backendd.onrender.com/upload`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            }).then((resp) => resp.json());

            if (responseData.success) {
                product.image = responseData.image_url; // Set the image URL
                console.log(product);

                // Add the product
                const addProductResponse = await fetch(`https://ecoproject-backendd.onrender.com/addproduct`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                }).then((resp) => resp.json());

                addProductResponse.success ? alert("Product Added") : alert("Failed to add product");
                
                // Optionally reset the form
                setProductDetails({
                    name: "",
                    image: "",
                    category: "Custom",
                    new_price: "",
                    old_price: ""
                });
                setImage(null); // Reset image
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the product.");
        }
    };

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="Custom">Custom</option>
                    <option value="Readymade">Readymade</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden style={{ width: 261, height: 261 }} />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    );
};

export default AddProduct;
