import { NavLink,useNavigate } from 'react-router-dom'
import DarkMode from './Darkmode';
import { useCart } from "../context/CartContext";
import Login from "./login"

const Navbar = () => {

const NAV_ITEMS = [
  { label: "Shop" , path: "/"},
  { label: "Collections", path: "/collections" },
  { label: "About", path: "/about" },
  { label: "Contact" , path: "/contact"},
];
const navigate = useNavigate();
const { cart } = useCart();

 const totalItems = cart.reduce((sum, item) => sum + item.qty,0);

    return ( 
      <>

       
        <div className='navbar-container'>


         < div className="left">
          <h2>MegaStore</h2>
          </div>
         
            
            <div className='centre'>
            <nav className="navbar">
            {
                NAV_ITEMS.map((item) => (<NavLink key={item.label} to={item.path}>
                    {item.label}
                </NavLink> ))
            }
            
        </nav>
        </div>
        <div className='right'>
        <DarkMode/>


        <div className='cart-section'>
            {totalItems > 0 && (
          <span className="cart-count">
            {totalItems}
          </span>
        )}

            <i className='bx bx-cart cursor-pointer text-3xl transition-colors hover:text-amber-600 xl:text-4xl' onClick={() => navigate("/cart")}></i>
            </div>
            <Login/>
       
        </div>
        </div>
        </>
        
     );
     
}
 
export default Navbar