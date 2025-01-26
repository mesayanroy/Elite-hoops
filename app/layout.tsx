import "./globals.css"
import { Playfair_Display } from "next/font/google"
// import localFont from "next/font/local"
import Header from "./components/Header"
import Footer from "./components/Footer"


const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "EliteHoops",
  description: "Basketball accessories and equipment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} bg-black text-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

