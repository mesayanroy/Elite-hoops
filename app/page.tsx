import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-purple-500">Welcome to EliteHoops</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Your one-stop shop for premium basketball accessories and equipment
      </p>
      <Link href="/home" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </Link>
    </div>
  )
}

