import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const socials = [{
        display: 'Instagram',
        link: 'https://www.instagram.com/aces.dit/'
    }, {
        display: 'LinkedIn',
        link: 'https://www.linkedin.com/company/acesdit/'
    }, {
        display: 'GitHub',
        link: 'https://github.com/acesdit'
    }];

    const others = [{
        display: 'Verify Membership',
        link: '/construction'
    }, {
        display: 'Privacy Policy',
        link: '#'
    }, {
        display: 'Sitemap',
        link: '#'
    }];

    return (
        <footer className="bg-[#2C2C2C]">
            <div className='container mx-auto md:flex-row flex flex-col justify-center items-center md:items-start px-4 py-12 md:px-6'>
                <div className="md:w-2/4 flex flex-col md:flex-row">
                    <div className='flex justify-center items-center md:pr-12'>
                        <Image src="/acesLogo(Black).svg" height={124} width={124} alt="ACES Logo" />
                    </div>
                    <div className=''>
                        <h3 className='text-3xl font-title font-medium uppercase  text-white leading-normal pb-2 text-center md:text-left'>
                            Association of Computer <br /> Engineering Students
                        </h3>
                        <p className='text-white text-base text-center md:text-left'>
                            <Link className='transition-colors hover:text-secondary' href='https://engg.dypvp.edu.in/' target='_blank'>
                                Dr. D.Y. Patil Institute of Technology, <br /> Pimpri
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='md:w-1/4 flex flex-col'>
                    <h4 className='text-white font-bold tracking-wide mb-1 text-lg uppercase text-center pb-3 md:text-left mt-6 md:mt-0'>Socials</h4>
                    {socials.map(social => (<Link key={social.display} className="text-white font-light text-lg text-center pb-2 md:text-left transition-colors hover:text-secondary" href={social.link}>{social.display}</Link>))}
                </div>
                <div className='md:w-1/4 flex flex-col'>
                    <h4 className='text-white font-bold tracking-wide mb-1 text-lg uppercase text-center pb-3 md:text-left mt-6 md:mt-0'>Other Links</h4>
                    {others.map(other => (<Link key={other.display} className="text-white font-light text-lg text-center pb-2 md:text-left transition-colors hover:text-secondary" href={other.link}>{other.display}</Link>))}
                </div>
            </div>

            {/* Copyright */}
            <div className='flex bg-black justify-center items-center py-3'>
                <p className='text-white text-sm text-center leading-relaxed'>© 2023 Association of Computer Engineering Students, DIT. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer