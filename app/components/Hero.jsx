import Image from 'next/image'
import phoenix from '../../public/images/phoenix.svg'

function Hero() {
  return (
    <div className="hero-container">
      <main className="hero-bg h-[96vh] md:h-[90vh] overflow-hidden first-element">
        <div className="container mx-auto flex flex-col md:flex-row p-4 md:p-6">
          <div className="md:w-5/12 flex flex-col py-20 text-white pt-24">
            <h1 className="font-title uppercase font-semibold text-7xl pb-3 leading-[1.2]">
              Masters of Excellence
            </h1>
            <p className="text-lg font-medium leading-relaxed">
              Association of Computer Engineering Students is the departmental
              club of Department of Computer Engineering at Dr. D. Y. Patil
              Institute of Technology, Pimpri
            </p>
          </div>
          <div className="md:w-7/12">
            {/* <Image src="/images/phoenix.svg" width={628} height={628} /> */}
            <Image
              className="relative top-[-80px] sm:top-0"
              src={phoenix}
              width={628}
              height={628}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
