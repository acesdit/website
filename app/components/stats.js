import Image from "next/image"

function StatsSection() {
  return (<section className="bg-beige">
    <div className="container p-4 md:p-6 mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 flex content-center justify-center md:justify-start py-12"><Image src="/images/img5.svg" className="w-[80%]" width={415} height={334} /></div>
      <div className="md:w-1/2 py-12 md:pr-44 flex flex-col justify-center"><h2 className="main-head">Sparking innovation
        among students</h2><p>Association of Computer Engineering Students is the departmental club of Department of Computer Engineering at Dr. D. Y. Patil Institute of Technology, Pimpri</p></div>
    </div>
    <div className="container bg-beige mx-auto px-16 flex flex-col md:flex-row text-center border-t-4 border-black">
      <div className="md:w-1/3 py-12"><h3 className="font-title font-medium text-7xl pb-2"><span>108</span>+</h3><p>Events organized</p></div>
      <div className="md:w-1/3 py-12"><h3 className="font-title font-medium text-7xl pb-2"><span>24,000</span>+</h3><p>Participants</p></div>
      <div className="md:w-1/3 py-12"><h3 className="font-title font-medium text-7xl pb-2"><span>470</span>+</h3><p>Members</p></div>
    </div>
  </section>)
}

export default StatsSection