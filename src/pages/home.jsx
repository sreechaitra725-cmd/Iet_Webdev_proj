import ITEMS from "../data/items";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Rating from "../components/rating";

const Home = () => {
    const [searchval,Search]=useState("");
    const[category,SetCategory]=useState("All");
    const[price,SetPrice]=useState(0);

    const filtered = ITEMS.filter((item)=>{
        const searchmatch = item.name.toLowerCase().includes(searchval.toLowerCase()) 
        || item.category.toLowerCase().includes(searchval.toLowerCase());

        const categorymatch = category === "All" || item.category===category;

        const pricematch = price===0 || item.price<=price;

        return searchmatch && categorymatch && pricematch;
}
    );
    
    const { dispatch } = useCart();

    const handleAddToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item});
    };

    return (
        <>
        <section className="home-hero">
        <div>
          <p className="hero-eyebrow">Curated marketplace</p>
          <h1 className="hero-title">
            Discover premium products that feel made for you.
          </h1>
          <p className="hero-copy">
            Shop everyday favorites across home, tech, fitness, and lifestyle.
         
          </p>
        
        </div>
      </section>
        <div className="searchbar">
            <input  className="search"
            type="text" 
            placeholder="Search here" 
            value={searchval} 
            onChange={(e) => (Search(e.target.value))}/>

        </div>
        <div className="filters">
        <select
        value={category}
        onChange={(e) => SetCategory(e.target.value)}>
        
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
         <option value="Apparel">Apparel</option>
        <option value="Furniture">Furniture</option>
        <option value="Fitness">Fitness</option>
        <option value="Outdoors">Outdoors</option>
        <option value="Kitchen">Kitchen</option>
        </select>

         <select
        value={price}
        onChange={(e) => SetPrice(Number(e.target.value))}>
        
        <option value={0}>All Prices</option>
        <option value={20}>Below 20</option>
         <option value={40}>Below 40</option>
        <option value={80}>Below 80</option>
        </select>
        </div>
        
        <section className="products-list">
       
            {
                filtered.map((item)=>(
                    
                    <div key={item.id} className="each-product">
                        <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                        <div className="item-name"> {item.name} </div>
                        </Link>
                        <div> {item.category}</div>
                        <div> ₹{item.price} </div>
                         <Rating/>
                        <button
                        className="add-to-cart mt-5 w-full cursor-pointer rounded-se-2xl p-3"
                        onClick={()=>handleAddToCart(item)}
                        >
                        Add To Cart
                        </button>
                       
                    </div>
                    
                ))
            }
        </section>
        </>
      );
}
 
export default Home;