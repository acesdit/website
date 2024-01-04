import Image from 'next/image'
import phoenix from '../../../public/images/phoenix.svg'

function Hero() {
  return (
    <div className="hero-container">
      <main className="hero-bg h-[50%] max-h-[94vh] md:max-h-[80vh] lg:max-h-[90vh] overflow-hidden pt-0 md:pt-24 nav-target">
        <div className="container mx-auto flex flex-col md:flex-row p-4 md:p-6">
          <div className="md:w-1/2 flex flex-col py-20 text-white">
            <h1 className="font-title uppercase font-semibold md:max-lg:text-5xl text-7xl pb-3 leading-[1.2]">
              Masters of Excellence
            </h1>
            <p className="text-lg font-medium leading-relaxed md:max-w-lg">
              Empowering Students from over a decade, Association of Computer Engineering Students strives to create a supportive & collaborative community for all round development.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              className="relative top-[-80px] sm:top-0"
              src={phoenix}
              width={628}
              height={628}
              alt='Phoenix - The ACES Mascot'
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
