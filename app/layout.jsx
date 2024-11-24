import Header from "@/components/header/Header"
import "./globals.css"
import Footer from "@/components/footer/Footer"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
