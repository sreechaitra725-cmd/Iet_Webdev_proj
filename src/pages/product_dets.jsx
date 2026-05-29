import { useParams,Link } from "react-router-dom";
import ITEMS from "../data/items";
import Rating from "../components/rating";

const ProductDetails = () => {

  const { id } = useParams();
  

  const product = ITEMS.find(
    (item) => item.id == id
  );

  if (!product) {
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