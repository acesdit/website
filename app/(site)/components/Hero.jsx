import Image from 'next/image'
import phoenix from '../../../public/images/phoenix.svg'

function Hero() {
  return (
    <div className="hero-container">
      <main className="hero-bg text-center md:text-left h-[50%] min-h-[85vh] max-h-[1080px] overflow-hidden pt-0 md:py-10 nav-target">
        <div className="container mx-auto flex flex-col md:flex-row p-4 md:p-6">
          <div className="md:w-1/2 flex flex-col gap-8 py-20 text-white">
            <h1 className="font-title uppercase font-semibold text-6xl pt-12 md:text-7xl leading-[1.2] md:max-w-[520px]">
              Masters of Excellence
            </h1>
            <p className="text-lg font-medium leading-relaxed md:max-w-lg">
              Empowering Students from over a decade, Association of Computer
              Engineering Students strives to create a supportive &
              collaborative community for all round development.
            </p>
          </div>
          <div className="md:w-1/2 mb-[-172px]">
            <Image
              className="relative top-[-80px] sm:top-0"
              src={phoenix}
              width={628}
              height={628}
              alt="Phoenix - The ACES Mascot"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
