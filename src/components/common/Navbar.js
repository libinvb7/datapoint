import React from 'react'
import Datapoint from '/public/assets/images/Datapoint_logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <section className='  text-3xl fixed top-0 py-3 z-[99] backdrop-blur-sm w-[100%]'>
        <div className='container mx-auto '>
        <div className='flex justify-between items-center '>
            <div>

                <Image src={Datapoint} className='bg-white rounded-lg p-2' alt="data point logo" width={150} height={50}/>
            </div>
            <div className="flex justify-between items-center gap-10">
                <div>
                    <ul className='hidden xl:flex justify-between items-center gap-5'>
                        <li className='text-lg text-white'><a href="/about">Features</a></li>
                        <li className='text-lg text-white'><a href="">Pricing</a></li>
                        <li className='text-lg text-white'><a href="">Solutions</a></li>
                        <li className='text-lg text-white'><a href="">Industries</a></li>
                        <li className='text-lg text-white'><a href="">Resource</a></li>
                        <li className='text-lg text-white'><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='hidden xl:flex  items-center gap-3  '>
                    <button className='btn'>Get Started</button>
                    <button className='btn btn-primary'>Book a Demo</button>
                </div>
            </div>
        </div>


    </div>
    </section>
  )
}

export default Navbar