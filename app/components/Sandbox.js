// Use this component to testing
import Image from 'next/image'

const Sandbox = ({title, body}) => {
  return (
    <div className="border-2 border-black rounded-lg p-6 bg-beige text-secondary">
      <Image src='/images/placeholder.png' width={300} height={200} alt='placeholder image' className='w-full mb-6 rounded-lg overflow-clip'/>
      <h3 className="font-title text-3xl font-bold uppercase pb-2 text-primary">{title}</h3>
      <p className='text-md'>{body}</p>
    </div>
  )
}

export default Sandbox