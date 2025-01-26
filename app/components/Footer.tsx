const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-2">EliteHoops</h2>
        <p className="mb-2">123 Basketball Street, Hoopsville, BK 12345</p>
        <p className="mb-2">Phone: (555) 123-4567</p>
        <p className="mb-2">Email: info@elitehoops.com</p>
        <p>&copy; {new Date().getFullYear()} EliteHoops. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

