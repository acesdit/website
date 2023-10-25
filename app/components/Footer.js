import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <div className='h-fit w-[100%] md:h-fit bg-[#2C2C2C] mx-auto md:flex-row flex flex-col justify-center items-center p-4'>
                <div className='w-48 mx-6 my-auto'>
                    <img alt="Association of Computer Engineering Students"
                         loading="lazy" decoding="async" data-nimg="fill"
                         style={{color:"transparent", height: "100%", width: "100%"}}
                         src="/acesLogo(Black).svg"/>
                </div>
                <div className='my-auto'>
                    <h3 className='text-4xl font-bold uppercase tracking-tighter text-white leading-none text-center md:text-left'>
                        Association of Computer <br/> Engineering Students
                    </h3>
                    <p className='text-white text-base text-center md:text-left'>
                        Dr. D.Y. Patil Institute of Technology Pimpri
                    </p>
                </div>
                <div className='flex flex-col mx-20 my-auto'>
                    <h4 className='text-white font-bold tracking-wide mb-1 text-base text-center md:text-left mt-6 md:mt-0'>Socials</h4>
                    <a href="https://www.instagram.com/aces.dit/" className='text-white font-light text-base text-center md:text-left'>Instagram</a>
                    <a href="https://www.linkedin.com/company/acesdit/" className='text-white font-light text-base text-center md:text-left'>LinkedIn</a>
                </div>
                <div className='flex flex-col my-auto'>
                    <h4 className='text-white font-bold tracking-wide mb-1 text-base text-center md:text-left mt-6 md:mt-0'>Other Links</h4>
                    <a href="" className='text-white font-light text-base text-center md:text-left'>Verify Membership</a>
                    <a href="" className='text-white font-light text-base text-center md:text-left'>Privacy Policy</a>
                    <a href="" className='text-white font-light text-base text-center md:text-left'>Site Map</a>
                </div>
            </div>
            <div className='flex w-full bg-black h-8 justify-center items-center'>
                <p className='text-white opacity-70 text-sm'>© 2023 Association of Computer Engineering Students, DIT. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer