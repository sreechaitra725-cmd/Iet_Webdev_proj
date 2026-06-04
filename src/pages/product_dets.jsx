import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Rating from "../components/rating";

const ProductDetails = () => {

  const { id } = useParams();

  const[product,FetchProduct]=useState();

  async function get_product() {
    const response = await fetch(`http://127.0.0.1:8000/Products/${id}`);
    const data = await response.json();
    if(data.message)
    alert(data.message);
    else
    FetchProduct(data)}
  
  useEffect(()=>{get_product()},[id]);

  if (!product)
    {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-details">
         <Link to="/" className="self-start cursor-pointer text-blue-600 hover:underline">
          Go to Home
        </Link>

      <img src={product.image} alt={product.name}/>

      <h3 className="product-title">{product.name}</h3>
      <h3 className="product-category">{product.category}</h3>
        <p className="product-description">{product.description}</p>


      <b className="product-price">₹{product.price}</b>
      <Rating/>

    </div>
  );
};

export default ProductDetails;