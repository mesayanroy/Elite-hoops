"use client"

import { useState } from "react"
import Image from "next/image"

const products = [
  { id: 1, name: "Elite Pro Basketball", price: 59.99, image: "/assets/1.png" },
  { id: 2, name: "Slam Dunk Hoop", price: 199.99, image: "/assets/2.png" },
]

export default function OrderPage() {
  const [quantities, setQuantities] = useState({ 1: 0, 2: 0 })

  const updateQuantity = (id: number, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + change),
    }))
  }

  const total = products.reduce((sum, product) => sum + product.price * quantities[product.id], 0)

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    console.log("Order placed:", { products: quantities, total })
    alert("Order placed successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">Your Order</h1>
      {products.map((product) => (
        <div key={product.id} className="flex items-center justify-between mb-6 bg-purple-900 p-4 rounded-lg">
          <div className="flex items-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={80}
              height={80}
              className="rounded mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-300">${product.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(product.id, -1)}
              className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-1 px-2 rounded"
            >
              -
            </button>
            <span className="mx-4">{quantities[product.id]}</span>
            <button
              onClick={() => updateQuantity(product.id, 1)}
              className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-1 px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Total: ${total.toFixed(2)}</h2>
        <button
          onClick={handlePlaceOrder}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

