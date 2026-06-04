import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { cart } = useCart();
  

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty,0);

  const deliveryFee  = 5;

  const total = (subtotal  + deliveryFee).toFixed(2);

  return (
    <div className="cart-summary">
    <div className="rounded-3xl border border-neutral-300 p-4 xl:p-6 xl:w-full xl:h-94">
      <h2 className="mb-4 text-2xl font-semibold xl:text-3xl">Order Summary</h2>

      <div className="space-y-2 text-sm xl:text-base">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">₹{subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Total Item</p>
          <p className="font-semibold">{totalItems}</p>
        </div>


        <div className="flex justify-between border-b border-neutral-300 pb-4">
          <p className="text-gray-600">Delivery Fee</p>
          <p className="font-semibold">₹{deliveryFee}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between text-lg font-semibold xl:text-xl">
        <p>Total</p>
        <p>₹{total}</p>
      </div>

      <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-3xl bg-gray-800
       text-white transition-colors cursor-pointer hover:bg-gray-900">
        Go to Checkout
        <i className="bx bx-arrow-right text-2xl"></i>
      </button>
    </div>
    </div>
  );
}