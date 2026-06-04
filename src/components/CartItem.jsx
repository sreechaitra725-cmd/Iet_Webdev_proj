import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { ADD_TO_CART,REMOVE_FROM_CART,SUB_FROM_CART } = useCart();

  return (
    <div className="cart-page">
    <div className="rounded-3xl border border-neutral-300 xl:w-11/12">
      <div className="flex flex-col gap-6 border-b border-neutral-300 px-4 py-6 sm:flex-row sm:items-center">
        <img
          className="mx-auto w-36 rounded-2xl bg-gray-300 p-4 sm:mx-0 sm:w-32"
          src={item.product.image}
          alt={item.product.name}
        />

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold xl:text-2xl">{item.product.name}</h2>
            <i
              className="bx bx-trash cursor-pointer text-2xl text-red-600"
              onClick={() =>REMOVE_FROM_CART(item.product.id)}
            ></i>
          </div>

          <div className="flex gap-3 text-sm">
            <span className="font-semibold">Category:</span>
            <span className="text-gray-600">{item.product.category}</span>
          </div>

         

          <div className="mt-3 flex items-center justify-between">
            <h2 className="text-2xl font-semibold xl:text-3xl">₹{item.product.price}</h2>
            <div className="flex h-11 items-center gap-4 rounded-3xl bg-gray-300 px-4">
              <i
                className="bx bx-minus cursor-pointer text-xl"
                onClick={() =>SUB_FROM_CART(item.product.id)}
              ></i>
              <span className="text-xl">{item.qty}</span>
              <i
                className="bx bx-plus cursor-pointer text-xl"
                onClick={() => ADD_TO_CART(item.product.id)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}