import Header from "@/components/header/Header"
import "../globals.css"
import Footer from "@/components/footer/Footer"
export default function NonHomeLayout({ children }) {
  return (
    <>
      <div className="bg-[#1b1b1b]">
        <Header />
        <div className='h-[6vh] bg-[#262525]'></div>
        {children}
        <div className='h-[6vh] bg-[#262525]'></div>
      </div>
        
    </>
  )
}
