import Image from 'next/image'
import Header from '../components/Header'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { getMembers } from '@/sanity/lib/client'

// Page title
export const metadata = {
  title: 'Members | ACES DIT',
}

const MemberCard = ({ member }) => {
  return (
    <Link
      href={`/members/${member.slug}`}
      className={`flex group flex-col items-center border-[1px] border-solid border-black px-4 py-8 rounded-xl  relative transition-all hover:-translate-y-1 text-center  hover:shadow-xl ${
        member.clubPosts[0].category === 'faculty' ? 'bg-beige' : 'bg-white'
      }`}>
      <Image
        className='rounded-full border-[2px] p-1 border-primary transition-all group-hover:border-[5px]'
        src={`${
          member.image
            ? urlForImage(member.image).width(400).height(400).url()
            : `https://picsum.photos/200/200`
        }`}
        width={160}
        height={160}
        alt={member.name}
      />
      <h3 className='font-title uppercase text-primary font-medium text-xl pt-4'>
        {member.name}
      </h3>
      <p className='pt-1'>{member.clubPosts[0].position}</p>
    </Link>
  )
}

async function Members() {
  const members = await getMembers()
  const sequence = [
    { category: 'core', displayName: 'Core Team' },
    { category: 'senior', displayName: 'Senior Members' },
    { category: 'junior', displayName: 'Junior Members' },
  ]
  const groupedData = members.reduce((acc, member) => {
    const groupKey = member.clubPosts.filter((obj) => {
      return obj.tenure === '2023'
    })[0].category
    if (!acc[groupKey]) {
      acc[groupKey] = []
    }
    acc[groupKey].push(member)
    return acc
  }, {})

  // Define the custom order for categories
  const customCategoryOrder = [
    'President',
    'Secretary',
    'Vice President',
    'Joint Secretary',
    'Treasurer',
    'Club Advisor',
    'Sr. A.C.E.S. Representative',
    'Sr. Content Creator',
    'Sr. Cultural Heads',
    'Sr. Data Manager',
    'Sr. Event Manager',
    'Sr. External Affairs Officer',
    'Sr. Public Relations Officer',
    'Sr. Technical Head',
    'Jr. A.C.E.S. Representative',
    'Jr. Content Creator',
    'Jr. Cultural Heads',
    'Jr. Data Manager',
    'Jr. Event Manager',
    'Jr. External Affairs Officer',
    'Jr. Public Relations Officer',
    'Jr. Technical Head',
    'Faculty Coordinator',
  ]

  // Sort the keys based on the custom order
  function comparePositions(a, b) {
    const positionA = customCategoryOrder.indexOf(a.clubPosts[0].position)
    const positionB = customCategoryOrder.indexOf(b.clubPosts[0].position)

    // Use the indexOf method to determine the position order
    return positionA - positionB
  }

  // Arranging members
  sequence.forEach((el) => {
    groupedData[el.category].sort(comparePositions)
  })
  groupedData.faculty.sort(comparePositions)

  return (
    <>
      <Header title='Meet the team' />
      <section className='container mx-auto p-4 md:px-6 pb-8 flex flex-col lg:flex-row md:gap-7'>
        <div className='lg:w-4/5 h-fit'>
          <h2 className='font-title uppercase text-primary font-semibold text-3xl py-6'>
            {sequence[0].displayName}
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7'>
            {groupedData[sequence[0].category].map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className='lg:w-1/5 md:pr-5'>
          <h2 className='font-title uppercase text-primary font-semibold text-3xl py-6'>
            Faculties
          </h2>
          <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 md:gap-7'>
            {groupedData['faculty'].map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      {sequence.slice(1).map((seq) => (
        <section
          key={seq.category}
          className='container mx-auto p-4 md:px-6 pb-20 flex flex-col lg:flex-row md:gap-7'>
          {/* <div className="w-4/5 h-fit"> */}
          <div className='w-full h-fit'>
            <h2 className='font-title uppercase text-primary font-semibold text-3xl py-6'>
              {seq.displayName}
            </h2>
            {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7"> */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7'>
              {groupedData[seq.category].map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
          {/* <div className="md:w-1/5 md:pr-6"></div> */}
        </section>
      ))}
    </>
  )
}

export default Members
