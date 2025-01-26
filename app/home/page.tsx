"use client"

import { useState } from "react"
import Link from "next/link"

const products = [
  { id: 1, name: "Kids Basketball", price: 19.99, brand: "EliteHoops", category: "kids", size: 3 },
  { id: 2, name: "Men's Basketball", price: 29.99, brand: "EliteHoops", category: "men", size: 5 },
  { id: 3, name: "Kids Basketball Hoop", price: 89.99, brand: "DunkMaster", category: "kids", size: 4 },
  { id: 4, name: "Men's Basketball Shoes", price: 129.99, brand: "AirJump", category: "men", size: 5 },
  { id: 5, name: "Kids Basketball Jersey", price: 39.99, brand: "EliteHoops", category: "kids", size: 3 },
  { id: 6, name: "Professional Basketball System", price: 1199.99, brand: "DunkMaster", category: "men", size: 5 },
]

export default function HomePage() {
  const [priceRange, setPriceRange] = useState(1200)
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSize, setSelectedSize] = useState("All")

  const filteredProducts = products.filter(
    (product) =>
      product.price <= priceRange &&
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedSize === "All" || product.size === Number(selectedSize)),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">Our Products</h1>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="priceRange" className="block mb-2">
            Price Range: ${priceRange}
          </label>
          <input
            type="range"
            id="priceRange"
            min="6"
            max="1200"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="brand" className="block mb-2">
            Brand:
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-purple-900 text-white p-2 rounded w-full"
          >
            <option value="All">All Brands</option>
            <option value="EliteHoops">EliteHoops</option>
            <option value="DunkMaster">DunkMaster</option>
            <option value="AirJump">AirJump</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-purple-900 text-white p-2 rounded w-full"
          >
            <option value="All">All Categories</option>
            <option value="kids">Kids</option>
            <option value="men">Men</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block mb-2">
            Size:
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="bg-purple-900 text-white p-2 rounded w-full"
          >
            <option value="All">All Sizes</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-purple-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="mb-2">Price: ${product.price.toFixed(2)}</p>
            <p className="mb-2">Brand: {product.brand}</p>
            <p className="mb-2">Category: {product.category}</p>
            <p className="mb-4">Size: {product.size}</p>
            <Link
              href={`/product/${product.id}`}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

