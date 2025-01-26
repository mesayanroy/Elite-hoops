import Link from "next/link"
import Image from "next/image"

const products = [
  { id: 1, name: "Elite Pro Basketball", price: 59.99, category: "Basketballs" },
  { id: 2, name: "Slam Dunk Hoop", price: 199.99, category: "Hoops" },
  { id: 3, name: "Air Jordan Sneakers", price: 129.99, category: "Footwear" },
  { id: 4, name: "Moisture-Wicking Jersey", price: 39.99, category: "Apparel" },
  { id: 5, name: "Digital Shot Clock", price: 89.99, category: "Accessories" },
  { id: 6, name: "Portable Ball Pump", price: 19.99, category: "Accessories" },
  { id: 7, name: "Training Agility Ladder", price: 29.99, category: "Training" },
  { id: 8, name: "Adjustable Wristbands", price: 9.99, category: "Accessories" },
  { id: 9, name: "Basketball Bag", price: 34.99, category: "Bags" },
  { id: 10, name: "Court Marking Tape", price: 14.99, category: "Accessories" },
  { id: 11, name: "Referee Whistle Set", price: 24.99, category: "Accessories" },
  { id: 12, name: "Youth Basketball", price: 29.99, category: "Basketballs" },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-500">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-purple-900 p-4 rounded-lg shadow-lg">
            <Image
              src={`/public/${product.id}.png`}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-300 mb-2">{product.category}</p>
            <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

