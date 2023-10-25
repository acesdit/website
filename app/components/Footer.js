import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const socials = [{
        display: 'Instagram',
        link: 'https://www.instagram.com/aces.dit/'
    }, {
        display: 'LinkedIn',
        link: 'https://www.linkedin.com/company/acesdit/'
    }];

    const others = [{
        display: 'Verify Membership',
        link: 'https://www.instagram.com/aces.dit/'
    }, {
        display: 'Privacy Policy',
        link: 'https://www.linkedin.com/company/acesdit/'
    }, {
        display: 'Sitemap',
        link: 'https://www.linkedin.com/company/acesdit/'
    }];

    return (
        <div>
            <div className='h-fit w-[100%] md:h-fit bg-[#2C2C2C] mx-auto md:flex-row flex flex-col justify-center items-center p-4'>
                <div className='w-48 mx-6 my-auto'>
                    <Image src="/acesLogo(Black).svg" height={124} width={124} />
                </div>
                <div className='my-auto'>
                    <h3 className='text-4xl font-title font-medium uppercase tracking-tighter text-white leading-normal text-center md:text-left'>
                        Association of Computer <br /> Engineering Students
                    </h3>
                    <p className='text-white text-base text-center md:text-left'>
                        Dr. D.Y. Patil Institute of Technology Pimpri
                    </p>
                </div>
                <div className='flex flex-col mx-20 my-auto'>
                    <h4 className='text-white font-bold tracking-wide mb-1 text-base text-center md:text-left mt-6 md:mt-0'>Socials</h4>
                    {socials.map(social => (<Link key={social.display} className="text-white font-light text-base text-center md:text-left" href={social.link}>{social.display}</Link>))}
                </div>
                <div className='flex flex-col my-auto'>
                    <h4 className='text-white font-bold tracking-wide mb-1 text-base text-center md:text-left mt-6 md:mt-0'>Other Links</h4>
                    {others.map(other => (<Link key={other.display} className="text-white font-light text-base text-center md:text-left" href={other.link}>{other.display}</Link>))}
                </div>
            </div>
            <div className='flex w-full bg-black h-8 justify-center items-center'>
                <p className='text-white opacity-70 text-sm'>© 2023 Association of Computer Engineering Students, DIT. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer