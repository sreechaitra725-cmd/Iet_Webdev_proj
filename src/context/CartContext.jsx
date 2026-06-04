import { createContext, useContext,useState,useEffect } from "react";


const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart,setCart]=useState([]);

  useEffect(()=>{get_CartItems()},[]);


  async function get_CartItems() {
    const response = await fetch("http://127.0.0.1:8000/cart");
    const data = await response.json();
    setCart(data)}

  async function ADD_TO_CART(id) {
    const response = await fetch(`http://127.0.0.1:8000/cart/add/${id}`,{method:"POST"});
    await get_CartItems();}

  async function SUB_FROM_CART(id) {
    const response = await fetch(`http://127.0.0.1:8000/cart/sub/${id}`,{method:"POST"});
    await get_CartItems();}



  async function REMOVE_FROM_CART(id) {
    const response = await fetch(`http://127.0.0.1:8000/cart/remove/${id}`,{method:"DELETE"});
    await get_CartItems();}

  

  

  return (
    <CartContext.Provider value={{ cart,ADD_TO_CART,SUB_FROM_CART,REMOVE_FROM_CART }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}