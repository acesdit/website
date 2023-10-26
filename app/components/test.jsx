import Image from "next/image"

function WhoAreWeSection() {
  return (
    <section className="overflow-hidden bg-slate-200">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row  md:relative bg-red-300 py-20">
        <div className="md:w-1/2 bg-green-200">
          <h2 className="main-head">Who are we</h2>
          <p className="text-lg">
            Association of Computer Engineering Students is the departmental
            club of Department of Computer Engineering at Dr. D. Y. Patil
            Institute of Technology, Pimpri
          </p>
        </div>
        <div className="md:w-1/2 md:absolute -right-20 bg-purple-200"><Image className="" src="/images/team.png" width={640} height={340}/></div>
      </div>
    </section>
  )
}

export default WhoAreWeSection
