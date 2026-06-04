import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {

  const { cart } = useCart();


  if (cart.length === 0) {
    return (
      <div className="cart-empty">
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Your MegaStore Cart is empty</h1>
        <Link to="/">
        <button className="mt-12 px-8 py-3 rounded-3xl bg-black text-white transition-colors hover:bg-gray-900 cursor-pointer">
          Go to Home
        </button>
        </Link>
      </div>
      </div>
    );
  }

  return (
    <div className="cart">
    <div className="mx-auto my-8 w-full px-4 xl:my-10 xl:w-10/12">
      <div className="space-y-4">
        <div className="flex items-center text-sm xl:text-base">
          <Link to="/">
          <h2 className="cursor-pointer font-semibold text-gray-600 hover:underline">
            Home &gt;
          </h2>
          </Link>
          <h2 className="ml-2 font-semibold">Cart</h2>
        </div>

        <h1 className="font-mono text-4xl xl:text-5xl">YOUR CART</h1>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-7/12">
          {cart.map((item) => (<CartItem key={item.product.id} item={item} />))}
        </div>

        <div className="w-full xl:w-5/12">
          <CartSummary />
        </div>
      </div>
    </div>
    </div>
  );
}