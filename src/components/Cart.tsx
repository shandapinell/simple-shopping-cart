import React, { useMemo } from 'react'
import { IProduct } from '../data/ProductList'

interface CartProps {
    cart: IProduct[];
    closeCart: () => void;
    removeFromCart: (product: IProduct) => void;
}

const Cart = ({cart, closeCart, removeFromCart}: CartProps) => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    const cartItems = useMemo(() => cart, [cart])
  return (
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold text-gray-900" id="modal-title">Cart ({cartItems.length})</h3>
              {
                cartItems.length > 0 ? (
                  <div className="mt-2 w-full">
                        {cart.map((product) => (
                            <div key={product.id} className="flex items-center justify-between">
                                <img src={product.image}onError={(e) => e.currentTarget.src = '/fallback-image.png'}  alt={product.title} className="w-10 h-10 object-cover" />
                                <h2 className="text-gray-500">{product.title}</h2>
                                <p className="text-gray-500">${product.price}</p>
                                <button aria-label="Remove from cart" className="mb-2" onClick={() => removeFromCart(product)}>Remove</button>
                            </div>
                        ))}
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Your cart is empty.</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <hr className="py-2"/>
        <div className="text-right text-gray-500 pr-6 mb-4">
            Total: ${total}
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-4">
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeCart}>Checkout</button>
          <button disabled={cartItems.length === 0} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={closeCart}>Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart