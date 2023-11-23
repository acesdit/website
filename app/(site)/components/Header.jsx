function Header({title}) {
  return (
    <div className="hero-container nav-target">
      <main className="hero-bg">
        <div className="container mx-auto p-4 md:px-6">
          <div className="flex items-center pt-20 pb-8 text-white">
            <h1 className="font-title uppercase font-medium text-4xl">{title}</h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Header
