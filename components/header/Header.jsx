import React from 'react'
import { SlMenu } from "react-icons/sl";
import Image from 'next/image';
import logo from "../../public/assets/thaya-logo-light.png"


export default function Header() {

 

 
  

  return (
    <>
        <header id='navbar' className='lg:h-auto z-20 px-[12px] pt-[5px] flex relative justify-center items-center'>
            <button className='absolute left-2'> <SlMenu color='#CCCCCC' className='w-[50px] lg:hidden h-[25px]'/> </button>
            <div className='z-20 lg:relative'>
                <Image className='w-[150px] h-[150px] lg:fil translate-y-[3px]' decoding="async" title="thaya-footer-logo-min" src={logo} alt=""  srcSet="https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-200x78.png 200w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min-400x156.png 400w, https://thaya-restaurant.de/wp-content/uploads/2021/02/thaya-footer-logo-min.png 426w"  />
                {/* <Image src="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light.png" srcSet="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light.png 1x, https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light2x.png 2x" width={200} height={199}  alt="Thaya Indian Restaurant Logo" data-retina_logo_url="https://thaya-restaurant.de/wp-content/uploads/2020/09/thaya-logo-light2x.png" className="" _mstalt="640380" _msthash="3" /> */}
            </div>
        </header>
    </>
  )
}
