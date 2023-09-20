import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="gradient-container"><div className="gradient"></div></div>
      <div className="container">
        <Image src="/aceslogo.svg" width='215' height='215' />
        <h1>Under Maintenance</h1>
        <h3>Exciting changes are on the way!</h3>
        <p>Till then, connect with us via</p>
        <div className="social-container">
          <a href="https://www.instagram.com/aces.dit/" target="_blank"
          ><Image src="/instagram.svg" width='36' height='36' />aces.dit</a
          ><a
            href="https://www.linkedin.com/company/acesdit/"
            target="_blank"
            style={{ paddingLeft: 0 }}
          ><Image src="/linkedin.svg" width='36' height='36' />acesdit</a
          >
        </div>
      </div>
    </main>
  )
}
