import Image from 'next/image'
import Link from 'next/link'
import BreadCrumb from '../../components/BreadCrumb'

async function Member() {
  return (
    <>
      <BreadCrumb
        parent="Members"
        parentLink="/member"
        child={'Pranav Mehendale'}
      />
      <div className="container mx-auto p-4 md:px-6 flex flex-col md:flex-row gap-8 py-16 lg:py-24">
        <div className='md:w-1/3 flex flex-col items-center'>
          <Image
            className="rounded-full border-[2px] p-1 border-primary transition-all"
            src="https://picsum.photos/200/200"
            width={360}
            height={360}
            alt='Pranav Mehendale'
          />
        </div>
        <div className='md:w-2/3 flex flex-col justify-center gap-4'>
          <h2 className="font-title uppercase font-semibold text-primary text-3xl">Pranav Mehendale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            blanditiis facilis ipsum. Animi cumque doloribus eius ex facilis
            fugit ipsa libero, molestiae neque qui quis reiciendis repellendus
            sapiente velit voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            blanditiis facilis ipsum. Animi cumque doloribus eius ex facilis
            fugit ipsa libero, molestiae neque qui quis reiciendis repellendus
            sapiente velit voluptates.
          </p>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3 bg-beige w-fit px-5 py-3 rounded-xl text-base'><span className='font-title font-medium pr-3 border-r-2 border-primary text-primary text-xl'>2022</span>Vice President</div>
            <div className='flex items-center gap-3 bg-beige w-fit px-5 py-3 rounded-xl text-base'><span className='font-title font-medium pr-3 border-r-2 border-primary text-primary text-xl'>2021</span>Jr. Data Manager</div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Member
