"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, ArrowLeft, Plus, Minus, X } from "lucide-react";

export default function CartPage() {
  // For demo purposes, we'll start with an empty cart
  const [cartItems, setCartItems] = useState<any[]>([]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-amber-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            Continue Shopping
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
        </div>

        {cartItems.length > 0 ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <div className="lg:col-span-7">
              <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      {/* Would replace with actual image */}
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image</span>
                      </div>
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <button 
                            className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-amber-700 hover:text-amber-800 flex items-center"
                          >
                            <X size={14} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                
                <dl className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <dt>Subtotal</dt>
                    <dd>${subtotal.toFixed(2)}</dd>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <dt>Shipping</dt>
                    <dd>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-900">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </dl>
                
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-amber-700 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-amber-800 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-xl font-medium text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">
              You haven't added any items to your cart yet. Start shopping to fill it with amazing furniture!
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-amber-700 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-amber-800"
              >
                View Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 