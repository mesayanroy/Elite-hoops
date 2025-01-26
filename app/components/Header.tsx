import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-purple-900 text-white p-4">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 sm:mb-0">
          EliteHoops
        </Link>
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
          <li>
            <Link href="/categories" className="px-2 py-1 hover:bg-purple-700 rounded">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-2 py-1 hover:bg-purple-700 rounded">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" className="px-2 py-1 hover:bg-purple-700 rounded">
              About
            </Link>
          </li>
          <li>
            <Link href="/order" className="px-2 py-1 hover:bg-purple-700 rounded">
              Order
            </Link>
          </li>
          <li>
            <Link href="/login" className="px-2 py-1 hover:bg-purple-700 rounded">
              Login/Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

