import Image from 'next/image'
import Header from '../components/Header'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import { getMembers } from '@/sanity/lib/client'

const MemberCard = ({ member }) => {
  // if (member.name == "Yash Jawale") console.log(member.image)
  // console.log(member.image ? urlForImage(member.image).width(160).height(160).url() : 'https://picsum.photos/160/160')
  return (
    <Link
      href="/"
      className={`flex group flex-col items-center border-[1px] border-solid border-black px-4 py-8 rounded-xl  relative transition-all hover:-translate-y-1 text-center  hover:shadow-xl ${
        member.clubPosts[0].category === 'faculty' ? 'bg-beige' : 'bg-white'
      }`}
    >
      <Image
        className="rounded-full border p-1 border-primary transition-all group-hover:border-[5px]"
        src={`${member.image ? urlForImage(member.image).width(400).height(400).url() : `https://picsum.photos/200/200`}`}
        width={160}
        height={160}
        alt={member.name}
      />
      <h3 className="font-title uppercase text-primary font-medium text-xl pt-4">
        {member.name}
      </h3>
      <p className="pt-1">{member.clubPosts[0].position}</p>
    </Link>
  )
}

async function Members() {
  // const members = [
  //   {
  //     _createdAt: '2023-11-18T04:20:24Z',
  //     clubPosts: [
  //       {
  //         position: 'Sr. Technical Head',
  //         _key: '0cff7cccfcf3',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //       {
  //         position: 'Jr. Technical Head',
  //         _key: 'a2d0cdeb4714',
  //         category: 'junior',
  //         tenure: '2022',
  //       },
  //     ],
  //     slug: { current: 'yash-jawale', _type: 'slug' },
  //     image: {
  //       alt: 'Yash Jawale',
  //       asset: {
  //         _ref: 'image-6158f367d46e207472cbba250b1d124941dd300c-2337x2337-jpg',
  //         _type: 'reference',
  //       },
  //       _type: 'image',
  //     },
  //     _type: 'member',
  //     membershipId: 'ACES2324YJ2625',
  //     name: 'Yash Jawale',
  //     _id: '14751c34-d8e1-4ca7-b480-1bf3392f5fd1',
  //     socials: {
  //       github: 'https://github.com/yashjawale',
  //       x: 'https://twitter.com/imyashjawale',
  //       instagram: 'https://www.instagram.com/imyashjawale/',
  //       linkedIn: 'https://www.linkedin.com/in/yashjawale/',
  //     },
  //     _updatedAt: '2023-11-22T13:34:42Z',
  //     email: 'yash25.j@gmail.com',
  //     _rev: 'DdA5NPXuRVnUaTtbLqEUqF',
  //     bio: "Well, I'm making this site...",
  //   },
  //   {
  //     _type: 'member',
  //     name: 'Atharva Morankar',
  //     bio: "I'm Atharva, a passionate 21-year-old pursuing my Bachelor's degree in Computer Science. \nI have a strong affinity for problem-solving and a deep enthusiasm for building projects that make an impact.",
  //     membershipId: 'ACES2324AM0209',
  //     socials: {
  //       x: 'https://twitter.com/atharva_09_',
  //       instagram: 'https://instagram.com/_atharva_09',
  //       linkedIn: 'https://www.linkedin.com/in/atharva-morankar-24788421a/',
  //       github: 'https://github.com/Atharva-Morankar-09',
  //     },
  //     email: 'atharva.morankar09@gmail.com',
  //     _rev: 'bvdFY8iWN5ZXtp8P5FsZKt',
  //     clubPosts: [
  //       {
  //         _key: '7313ec1ccf30f6cce7e2054f799f08a8',
  //         category: 'core',
  //         tenure: '2023',
  //         position: 'Secretary',
  //       },
  //       {
  //         tenure: '2022',
  //         position: 'Sr. ACES Representative',
  //         _key: '239a0da11caa2a544e8985e6e971d24d',
  //         category: 'core',
  //       },
  //       {
  //         position: 'Jr. Data Manager',
  //         _key: '7ec00c66d281f30ae1f039723154c2fa',
  //         category: 'core',
  //         tenure: '2021',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqRjEl',
  //     _updatedAt: '2023-11-22T15:04:19Z',
  //     slug: { current: 'atharva-morankar' },
  //     _createdAt: '2023-11-22T14:47:19Z',
  //   },
  //   {
  //     clubPosts: [
  //       {
  //         position: 'Joint Secretary',
  //         _key: 'af5c2fac9f7429984d39a680ab4996e1',
  //         category: 'core',
  //         tenure: '2023',
  //       },
  //       {
  //         position: 'Jr. External Affairs Officer',
  //         _key: '275fd5292546128c6471238508261abd',
  //         category: 'core',
  //         tenure: '2022',
  //       },
  //     ],
  //     name: 'Sujal Bagade',
  //     membershipId: 'ACES2324SB0924',
  //     email: 'sujalbagade123@gmail.com',
  //     slug: { current: 'sujal-bagade' },
  //     _createdAt: '2023-11-22T14:47:40Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqVR9b',
  //     _type: 'member',
  //     _id: 'DdA5NPXuRVnUaTtbLqRnJL',
  //     socials: {},
  //     _updatedAt: '2023-11-22T15:02:44Z',
  //   },
  //   {
  //     bio: 'Struggling Engineer- grasping hold over figma, photoshop, Representative of Computer science Club ACES and Campus representative for UNSTOP.',
  //     _id: 'DdA5NPXuRVnUaTtbLqRndf',
  //     email: 'purohitsharma0987@gmail.com',
  //     clubPosts: [
  //       {
  //         position: 'Sr. A.C.E.S. Representative',
  //         _key: '32f6b6b93a9028f3cd3750f846a2de8e',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //       {
  //         position: 'Jr. Public Relations Officer',
  //         _key: 'feb91cdc6d62499ae7cc0fbd89651f83',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     _rev: 'DdA5NPXuRVnUaTtbLqVMHf',
  //     _type: 'member',
  //     name: 'Jatin Sharma',
  //     membershipId: 'ACES2324JS1105',
  //     socials: {
  //       x: 'https://x.com/jatu_0987',
  //       instagram: 'https://instagram.com/jatinsharma_0987',
  //       linkedIn: 'https://www.linkedin.com/in/jatinsharma6969',
  //       github: 'https://github.com/JV-2701',
  //     },
  //     _updatedAt: '2023-11-22T15:02:25Z',
  //     slug: { current: 'jatin-sharma' },
  //     _createdAt: '2023-11-22T14:47:46Z',
  //   },
  //   {
  //     bio: 'A creative person , who likes art , craft , drawing and painting and also loves learning new things. Here to develope myself and learn from the experienced ones.',
  //     _id: 'DdA5NPXuRVnUaTtbLqRrI7',
  //     membershipId: 'ACES2324KA1613',
  //     socials: {
  //       github: 'https://github.com/krutikaahire',
  //       x: 'https://x.com/krutika_ahire',
  //       instagram: 'https://instagram.com/krutikaahire13',
  //       linkedIn: 'https://www.linkedin.com/in/krutika-ahire-90358a229',
  //     },
  //     slug: { current: 'krutika-ahire' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqVFp1',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Sr. Cultural Head',
  //         _key: 'd04b89ba17e0313fd9098e1978aa7660',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Krutika Ahire',
  //     _updatedAt: '2023-11-22T15:01:14Z',
  //     email: 'ahirekrutika13@gmail.com',
  //     _createdAt: '2023-11-22T14:48:01Z',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:48:07Z',
  //     clubPosts: [
  //       {
  //         position: 'Sr. Cultural Head',
  //         _key: '46db4ec5ee50f56cd17a9a016ec3e334',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //       {
  //         position: 'Jr. Cultural Head ',
  //         _key: '4fa1a2524e6854c50ca28a5b788c4022',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     bio: 'Enthusiastic for new things',
  //     membershipId: 'ACES2324AP1819',
  //     socials: {
  //       instagram: 'https://instagram.com/asmi_19_',
  //       linkedIn: 'https://www.linkedin.com/in/asmi-pulgam-612242256',
  //     },
  //     email: 'asmipulgam478@gmail.com',
  //     slug: { current: 'asmi-pulgam' },
  //     _rev: 'bvdFY8iWN5ZXtp8P5Frio3',
  //     _type: 'member',
  //     name: 'Asmi Pulgam',
  //     _id: 'DdA5NPXuRVnUaTtbLqRs5T',
  //     _updatedAt: '2023-11-22T15:00:49Z',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:48:13Z',
  //     clubPosts: [
  //       {
  //         category: 'senior',
  //         tenure: '2023',
  //         position: 'Sr. Event Manager',
  //         _key: '8d2559ab0a60169a3e52bd5810b6e283',
  //       },
  //       {
  //         position: 'Jr. Event Manager',
  //         _key: 'b6cbfb5695695fb065a3423fd7485f92',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     name: 'Tanvi Baviskar',
  //     _id: 'DdA5NPXuRVnUaTtbLqRsvj',
  //     membershipId: 'ACES2324TB2024',
  //     _rev: 'DdA5NPXuRVnUaTtbLqUyAV',
  //     _type: 'member',
  //     bio: "I'm Tanvi Baviskar, passionate about event management, ready to leverage my organizational prowess as the Event Manager for the club. Excited to craft extraordinary experiences and elevate the club's event presence by fostering connections.",
  //     socials: {
  //       github: 'https://github.com/tanvibaviskar',
  //       instagram: 'https://instagram.com/_tanviii_24',
  //       linkedIn: 'https://www.linkedin.com/in/tanvi-b-a5416422a',
  //     },
  //     _updatedAt: '2023-11-22T15:00:30Z',
  //     email: 'tanvi.baviskar24@gmail.com',
  //     slug: { current: 'tanvi-baviskar' },
  //   },
  //   {
  //     clubPosts: [
  //       {
  //         position: 'Sr. Event Manager',
  //         _key: 'f715aafa9275fbbec589783ae9a6e7d3',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqRtUZ',
  //     membershipId: 'ACES2324OV2114',
  //     socials: {
  //       x: 'https://x.com/OmkarVasekar14',
  //       instagram: 'https://instagram.com/vasekar_omkar',
  //       linkedIn: 'https://www.linkedin.com/in/omkar-vasekar-1a6130229',
  //       github: 'https://github.com/omkarvasekar',
  //     },
  //     _updatedAt: '2023-11-22T15:00:18Z',
  //     email: 'vasekaromkar@gmail.com',
  //     _type: 'member',
  //     _rev: 'yblsDKVOfabu1vzRxiziHK',
  //     name: 'Omkar Vasekar',
  //     bio: 'I am a tech enthusiast exploring various technologies and also trying to implement them to solve real life problems.',
  //     slug: { current: 'omkar-vasekar' },
  //     _createdAt: '2023-11-22T14:48:16Z',
  //   },
  //   {
  //     membershipId: 'ACES2324AS2303',
  //     _type: 'member',
  //     name: 'Avitosh Sandve',
  //     clubPosts: [
  //       {
  //         position: 'Sr. External Affairs Officer',
  //         _key: 'f16f7dbc8793338224780f3f1f91a4d9',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqRve7',
  //     socials: {},
  //     _updatedAt: '2023-11-22T14:59:54Z',
  //     email: 'avitosh313@gmail.com',
  //     slug: { current: 'avitosh-sandve' },
  //     _createdAt: '2023-11-22T14:48:22Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqUdzD',
  //   },
  //   {
  //     socials: {},
  //     _updatedAt: '2023-11-22T14:58:26Z',
  //     email: 'justanothersarvesh@gmail.com',
  //     slug: { current: 'sarvesh-rasal' },
  //     _createdAt: '2023-11-22T14:48:40Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqU8Hj',
  //     name: 'Sarvesh Rasal',
  //     membershipId: 'ACES2324SR2924',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Technical Head',
  //         _key: '4b1694517b4aa514a7692d5563b3af63',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqRyDn',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:48:49Z',
  //     _rev: 'yblsDKVOfabu1vzRxiyZ8b',
  //     _type: 'member',
  //     _id: 'DdA5NPXuRVnUaTtbLqRzoV',
  //     membershipId: 'ACES2324DJ3230',
  //     _updatedAt: '2023-11-22T14:57:39Z',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Public Relations Officer',
  //         _key: '47ac1e99a1ecd26dab913f0a26acb95b',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Dhiren Joshi',
  //     bio: 'Ambitious, inquisitive',
  //     socials: {
  //       github: 'https://github.com/dhiren-joshi',
  //       instagram: 'https://instagram.com/dhiren__joshi',
  //       linkedIn: 'https://www.linkedin.com/in/dhiren-joshi-79500518a',
  //     },
  //     email: 'dhirenjoshi2003@gmail.com',
  //     slug: { current: 'dhiren-joshi' },
  //   },
  //   {
  //     bio: 'enthusiastic about Finance,Marketing, Coding',
  //     slug: { current: 'sarthak-deokar' },
  //     _createdAt: '2023-11-22T14:48:52Z',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. External Affairs Officer',
  //         _key: '482a3ac9a6dc43a657d718e769164e31',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     membershipId: 'ACES2324SD3305',
  //     socials: {
  //       github: 'https://github.com/ZizzleStark',
  //       instagram: 'https://instagram.com/_sarthakdeokar_',
  //       linkedIn: 'https://www.linkedin.com/in/sarthak-deokar-622b86248',
  //     },
  //     _updatedAt: '2023-11-22T14:57:22Z',
  //     email: 'sarthakdeokar05@gmail.com',
  //     _rev: 'yblsDKVOfabu1vzRxiySvC',
  //     name: 'Sarthak Deokar',
  //     _id: 'DdA5NPXuRVnUaTtbLqS0Yx',
  //   },
  //   {
  //     _rev: 'bvdFY8iWN5ZXtp8P5FokuZ',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Jr. Event Manager',
  //         _key: '08ad1e9dbf863181e1a55f0f05d56ad4',
  //         category: 'junior',
  //       },
  //     ],
  //     name: 'Aniket Jaitkar',
  //     bio: 'Hello Myself Aniket and I am always passionate to do my work with dedication.',
  //     membershipId: 'ACES2324AJ3615',
  //     _updatedAt: '2023-11-22T14:56:40Z',
  //     email: 'aniketjaitkar1432@gmail.com',
  //     _createdAt: '2023-11-22T14:49:01Z',
  //     slug: { current: 'aniket-jaitkar' },
  //     _id: 'DdA5NPXuRVnUaTtbLqS6hH',
  //     socials: {
  //       github: 'https://github.com/LEARNER1432',
  //       instagram: 'https://www.instagram.com/a__n_i_k_e_t__',
  //       linkedIn: 'https://www.linkedin.com/in/aniket-jaitkar-5b009124b',
  //     },
  //     _type: 'member',
  //   },
  //   {
  //     email: 'vihaanj8@gmail.com',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Designer',
  //         _key: '025f7c2ebe715cb4234271f65048c48d',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqS9SZ',
  //     socials: {},
  //     name: 'Vihaan Jain',
  //     membershipId: 'ACES2324VJ4114',
  //     _updatedAt: '2023-11-22T14:55:15Z',
  //     slug: { current: 'vihaan-jain' },
  //     _createdAt: '2023-11-22T14:49:16Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqTHSt',
  //     _type: 'member',
  //   },
  //   {
  //     _rev: 'bvdFY8iWN5ZXtp8P5FoJcR',
  //     _type: 'member',
  //     name: 'Madhura Bhagat',
  //     socials: {
  //       github: 'https://github.com/13798-mad',
  //       instagram: 'https://instagram.com/madhuraaaa_._',
  //       linkedIn: 'https://www.linkedin.com/in/madhura-bhagat-35b2a1257',
  //     },
  //     email: 'bhagatmadhura5@gmail.com',
  //     slug: { current: 'madhura-bhagat' },
  //     _createdAt: '2023-11-22T14:49:25Z',
  //     clubPosts: [
  //       {
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. Cultural Head',
  //         _key: 'a02535daa4d360e796851cd2d4576217',
  //       },
  //     ],
  //     bio: '.',
  //     _id: 'DdA5NPXuRVnUaTtbLqS9jz',
  //     membershipId: 'ACES2324MB4424',
  //     _updatedAt: '2023-11-22T14:54:38Z',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:49:34Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqT2lH',
  //     name: 'Jayesh Sanap',
  //     membershipId: 'ACES2324JV4709',
  //     slug: { current: 'jayesh-sanap' },
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Cultural Head',
  //         _key: '1daa060dfe86c4d23ec0cf19dca8308a',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqSAuZ',
  //     socials: {},
  //     _updatedAt: '2023-11-22T14:53:53Z',
  //     email: 'jayeshsanap10@gmail.com',
  //   },
  //   {
  //     socials: {},
  //     email: 'surajpatil5228@gmail.com',
  //     slug: { current: 'suraj-patil' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqT2FL',
  //     _type: 'member',
  //     name: 'Suraj Patil',
  //     membershipId: 'ACES2324SP4816',
  //     _updatedAt: '2023-11-22T14:53:44Z',
  //     _createdAt: '2023-11-22T14:49:37Z',
  //     clubPosts: [
  //       {
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. Content Creator',
  //         _key: '82ef4672aab89e985eb38c6297f97d8c',
  //       },
  //     ],
  //     _id: 'DdA5NPXuRVnUaTtbLqSBEt',
  //   },
  //   {
  //     slug: { current: 'vivek-janbandhu' },
  //     _createdAt: '2023-11-22T14:49:40Z',
  //     _rev: 'yblsDKVOfabu1vzRxixPXK',
  //     _id: 'DdA5NPXuRVnUaTtbLqSBf1',
  //     membershipId: 'ACES2324VJ4920',
  //     socials: {
  //       instagram: 'https://instagram.com/vivek_j.11',
  //       linkedIn: 'https://www.linkedin.com/in/vivek-janbandhu-60a663259',
  //     },
  //     _updatedAt: '2023-11-22T14:53:32Z',
  //     email: 'vivekjanbandhu20@gmail.com',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Content Creator',
  //         _key: 'b4223ea04462c5223030c582e1c8d636',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Vivek Janbandhu',
  //     bio: "It's me, Vivek. I will be serving as a Jr. Content Creator for this tenure and I like photography because it a beautiful way to capture our precious moments",
  //   },
  //   {
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Jr. A.C.E.S. Representative',
  //         _key: 'c881a168c9ff47e4b534adf118981cff',
  //         category: 'junior',
  //       },
  //     ],
  //     membershipId: 'ACES2324GR5216',
  //     socials: {
  //       github: 'https://github.com/GauriRohadkar16',
  //       instagram: 'https://www.instagram.com/__glouryyyy__/',
  //       linkedIn: 'https://www.linkedin.com/in/gauri-rohadkar-785a3b28a',
  //     },
  //     email: 'rohadkarg@gmail.com',
  //     _createdAt: '2023-11-22T14:49:49Z',
  //     _rev: 'yblsDKVOfabu1vzRxixKco',
  //     name: 'Gauri Rohadkar',
  //     bio: 'Passionate and innovative individual with a global mindset, seamlessly blending analytical thinking with a collaborative spirit. Committed to constant growth and driven by purpose, I bring a dynamic approach to every endeavor, creating positive impact with a touch of creativity.',
  //     _id: 'DdA5NPXuRVnUaTtbLqSBtX',
  //     _updatedAt: '2023-11-22T14:52:50Z',
  //     slug: { current: 'gauri-rohadkar' },
  //   },
  //   {
  //     _updatedAt: '2023-11-22T14:52:33Z',
  //     email: 'riju1584@gmail.com',
  //     slug: { current: 'shone-sengupta' },
  //     _rev: 'bvdFY8iWN5ZXtp8P5FnxaV',
  //     clubPosts: [
  //       {
  //         position: 'Jr. A.C.E.S. Representative',
  //         _key: '27e25a9281d3b62e5d235d3287065efc',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Shone Sengupta',
  //     _id: 'DdA5NPXuRVnUaTtbLqSC2F',
  //     membershipId: 'ACES2324SS5315',
  //     _createdAt: '2023-11-22T14:49:52Z',
  //     _type: 'member',
  //     socials: {},
  //   },
  //   {
  //     email: 'tulsiborse21@gmail.com',
  //     _rev: 'DdA5NPXuRVnUaTtbLqSr0Z',
  //     name: 'Tulsi Borse',
  //     bio: 'I am very passionate about everything I do and not afraid to face any challenge!',
  //     _id: 'DdA5NPXuRVnUaTtbLqSCVH',
  //     membershipId: 'ACES2324TB5406',
  //     socials: {
  //       github: 'https://github.com/Triborse',
  //       instagram: 'https://instagram.com/tulsii.borse',
  //       linkedIn: 'https://www.linkedin.com/in/tulsi-borse-77818b245',
  //     },
  //     _updatedAt: '2023-11-22T14:52:03Z',
  //     slug: { current: 'tulsi-borse' },
  //     _createdAt: '2023-11-22T14:49:55Z',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. A.C.E.S. Representative',
  //         _key: '6dc4a196eb416cad0c7a05b4415a3ff9',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //   },
  //   {
  //     _updatedAt: '2023-11-22T17:03:50Z',
  //     email: 'bharti.sahu@dypvp.edu.in',
  //     _createdAt: '2023-11-22T17:03:50Z',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Faculty Coordinator',
  //         _key: '897189c3a67f',
  //         category: 'faculty',
  //         tenure: '2023',
  //       },
  //     ],
  //     membershipId: 'ACES2324BHFACL',
  //     _rev: 'bvdFY8iWN5ZXtp8P5GIRpj',
  //     name: 'Prof. Bharti Sahu',
  //     _id: 'b9ebd17e-00b8-4bac-a869-b6f2be8d6db2',
  //     slug: { current: 'prof-bharti-sahu', _type: 'slug' },
  //   },
  //   {
  //     socials: {},
  //     slug: { current: 'justin-davis' },
  //     _createdAt: '2023-11-22T14:47:17Z',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'President',
  //         _key: '79b17e4aaef63f117f78d97d4532124e',
  //         category: 'core',
  //         tenure: '2023',
  //       },
  //       {
  //         _key: '2c9c72f1fbe8cc552aefccf74df9d52c',
  //         category: 'core',
  //         tenure: '2022',
  //         position: 'Sr. Technical Head',
  //       },
  //       {
  //         position: 'Jr. Technical Head',
  //         _key: 'e55a36eec3c57d1d605af6b7246540d5',
  //         category: 'core',
  //         tenure: '2021',
  //       },
  //     ],
  //     membershipId: 'ACES2324JD0101',
  //     email: '02justindavis@gmail.com',
  //     _rev: 'yblsDKVOfabu1vzRxj1izB',
  //     name: 'Justin Davis',
  //     _id: 'bvdFY8iWN5ZXtp8P5Fm5GZ',
  //     _updatedAt: '2023-11-22T15:04:32Z',
  //   },
  //   {
  //     bio: 'Making everyday moments extraordinary✨️',
  //     _id: 'bvdFY8iWN5ZXtp8P5Fm6kJ',
  //     email: 'sanikadeshmukkh238@gmail.com',
  //     _type: 'member',
  //     _rev: 'yblsDKVOfabu1vzRxj1Ycq',
  //     clubPosts: [
  //       {
  //         position: 'Club Advisor',
  //         _key: 'ee6e9b8239837532b42cab0d29958eb0',
  //         category: 'core',
  //         tenure: '2023',
  //       },
  //       {
  //         position: 'Sr. Public Relations Officer',
  //         _key: 'c7b2a9fd8b9dfb62048bf9885214741e',
  //         category: 'core',
  //         tenure: '2022',
  //       },
  //       {
  //         position: 'Jr. Public Relations Officer',
  //         _key: '7f3c103b528760ac63f51b0b536640b7',
  //         category: 'core',
  //         tenure: '2021',
  //       },
  //     ],
  //     name: 'Sanika Deshmukkh',
  //     membershipId: 'ACES2324SD0323',
  //     socials: {
  //       github: 'https://github.com/Sanika238',
  //       instagram: 'https://instagram.com/sanikaxd',
  //       linkedIn: 'https://www.linkedin.com/in/sanika-deshmukkh-92407b21b',
  //     },
  //     _updatedAt: '2023-11-22T15:03:52Z',
  //     slug: { current: 'sanika-deshmukkh' },
  //     _createdAt: '2023-11-22T14:47:22Z',
  //   },
  //   {
  //     name: 'Yogeshwar Patil',
  //     _id: 'bvdFY8iWN5ZXtp8P5FmGwJ',
  //     slug: { current: 'yogeshwar-patil' },
  //     _createdAt: '2023-11-22T14:47:25Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqVkj9',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Club Advisor',
  //         _key: '442bb48afbe02b221fdcfad8477bb78a',
  //         category: 'core',
  //       },
  //       {
  //         position: 'Sr. Cultural Head',
  //         _key: 'ad4f6368e2eb9729fb397ab7dbc81555',
  //         category: 'core',
  //         tenure: '2022',
  //       },
  //       {
  //         position: 'Jr. Cultural Head',
  //         _key: '1d579a968ac8aa34d1e0f00261214ed2',
  //         category: 'core',
  //         tenure: '2021',
  //       },
  //     ],
  //     membershipId: 'ACES2324YP0416',
  //     socials: {},
  //     _updatedAt: '2023-11-22T15:03:42Z',
  //     email: 'yogi160721@gmail.com',
  //   },
  //   {
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Club Advisor',
  //         _key: 'd244dcbc9e5d93c1e7611575a7d9b455',
  //         category: 'core',
  //       },
  //       {
  //         position: 'Sr. Cultural Head',
  //         _key: '63b53a653bfde556d3882af4fce6544e',
  //         category: 'core',
  //         tenure: '2022',
  //       },
  //       {
  //         tenure: '2021',
  //         position: 'Jr. Cultural Head',
  //         _key: '6726bc6561855515b588f3c35ceb77da',
  //         category: 'core',
  //       },
  //     ],
  //     name: 'Khushi Agrawal',
  //     _id: 'bvdFY8iWN5ZXtp8P5FmHGh',
  //     membershipId: 'ACES2324KA0511',
  //     _createdAt: '2023-11-22T14:47:28Z',
  //     socials: {},
  //     _updatedAt: '2023-11-22T15:03:34Z',
  //     email: 'khushiashishagrawal@gmail.com',
  //     slug: { current: 'khushi-agrawal' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqVkJ1',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:47:31Z',
  //     _updatedAt: '2023-11-22T15:03:23Z',
  //     email: 'fatimataiba773@gmail.com',
  //     slug: { current: 'fatima-taiba' },
  //     _rev: 'yblsDKVOfabu1vzRxj1UdQ',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Club Advisor',
  //         _key: '9e981373f17dd0228b799a1cc82edfb6',
  //         category: 'core',
  //       },
  //       {
  //         position: 'Sr. External Affairs Officer',
  //         _key: 'b319cbf3d1781a673c064872ab222159',
  //         category: 'core',
  //         tenure: '2022',
  //       },
  //       {
  //         tenure: '2021',
  //         position: 'Jr. External Affairs Officer',
  //         _key: 'ce37bf70d55384ad908fcdab17574236',
  //         category: 'core',
  //       },
  //     ],
  //     name: 'Fatima Taiba',
  //     _id: 'bvdFY8iWN5ZXtp8P5FmJeV',
  //     membershipId: 'ACES2324FT0620',
  //     socials: {},
  //   },
  //   {
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Vice President',
  //         _key: 'b2020015d40d4d4af6c537aeb9881a39',
  //         category: 'core',
  //       },
  //       {
  //         _key: '8e88e30564c64b4b50a1be8ce801c776',
  //         category: 'core',
  //         tenure: '2022',
  //         position: 'Jr. Data Manager',
  //       },
  //     ],
  //     name: 'Pranav Mehendale',
  //     bio: 'Results-oriented engineering student with a vision for propelling A.C.E.S. to remarkable success. Leverages data and technology to deliver innovative solutions.',
  //     membershipId: 'ACES2324PM0814',
  //     email: 'pranavm1405@gmail.com',
  //     _createdAt: '2023-11-22T14:47:37Z',
  //     _rev: 'yblsDKVOfabu1vzRxj1BRu',
  //     socials: {
  //       github: 'https://github.com/pranavmm14',
  //       x: 'https://twitter.com/PM_Mehendale',
  //       instagram: 'https://www.instagram.com/pranavm_14/',
  //       linkedIn: 'https://www.linkedin.com/in/pranav-mehendale',
  //     },
  //     _updatedAt: '2023-11-22T15:02:56Z',
  //     slug: { current: 'pranav-mehendale' },
  //     _type: 'member',
  //     _id: 'bvdFY8iWN5ZXtp8P5FmKdf',
  //   },
  //   {
  //     _rev: 'bvdFY8iWN5ZXtp8P5Fs3RL',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         _key: '8f5ab3a00b2239834cf8b49e19b8fbd5',
  //         category: 'core',
  //         tenure: '2023',
  //         position: 'Treasurer',
  //       },
  //       {
  //         _key: '2b3d3fc5be063bdfe7ee8a159cfd6ebc',
  //         category: 'core',
  //         tenure: '2022',
  //         position: 'Jr. Technical Head',
  //       },
  //     ],
  //     name: 'Dev Phadol',
  //     membershipId: 'ACES2324DP1019',
  //     socials: {
  //       github: 'https://github.com/DEV-PHADOL',
  //       instagram: 'https://instagram.com/_phadol_dev_',
  //       linkedIn: 'https://www.linkedin.com/in/dev-phadol-b57504228',
  //     },
  //     _updatedAt: '2023-11-22T15:02:36Z',
  //     _createdAt: '2023-11-22T14:47:43Z',
  //     slug: { current: 'dev-phadol' },
  //     email: 'devphadol1919@gmail.com',
  //     _id: 'bvdFY8iWN5ZXtp8P5FmNGl',
  //     bio: "I'm Dev Phadol, currently serving as the Treasurer of ACES, where I seamlessly merge financial acumen. In my previous role as Jr. Technical Head.I'm passionate about exploring the intersection of technology and finance. My skills extend beyond coding, encompassing financial management and treasury operations. Eager to connect for discussions on the exciting confluence of tech and finance and explore collaborative opportunities. Let's connect and navigate this dynamic landscape together!",
  //   },
  //   {
  //     email: 'akshaybade2003@gmail.com',
  //     slug: { current: 'akshay-bade' },
  //     name: 'Akshay Bade',
  //     bio: "Myself Akshay Bade, the face of our club and a third-year Computer Engineering student. A passionate web developer, I thrive on solving complex problems in Data Structures and Algorithms, driving the club's vision with my technical expertise",
  //     socials: {
  //       github: 'https://github.com/akshaybade13',
  //       x: 'https://x.com/akshaybade1313',
  //       instagram: 'https://www.instagram.com/_akshay1313/',
  //       linkedIn: 'https://www.linkedin.com/in/akshay-bade-37705a219',
  //     },
  //     _updatedAt: '2023-11-22T15:02:13Z',
  //     _id: 'bvdFY8iWN5ZXtp8P5FmPF5',
  //     membershipId: 'ACES2324AB1213',
  //     _createdAt: '2023-11-22T14:47:49Z',
  //     _rev: 'yblsDKVOfabu1vzRxj0xrj',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         _key: '9672b65449606a643deb2a01994759cc',
  //         category: 'senior',
  //         tenure: '2023',
  //         position: 'Sr. A.C.E.S. Representative',
  //       },
  //       {
  //         position: 'Jr. ACES Representatives',
  //         _key: '1e026fd1bde84e1df15cede7c8f9e623',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //   },
  //   {
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Sr. Event Manager',
  //         _key: '6ec19080ff5184f8a5938ce21e92a463',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //       {
  //         position: 'Jr. Event Manager',
  //         _key: '44363140055140d76ae09cb51d5e9f7f',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     _id: 'bvdFY8iWN5ZXtp8P5FmYCd',
  //     membershipId: 'ACES2324DK2226',
  //     socials: {
  //       linkedIn: 'https://www.linkedin.com/in/divyanshu-khajuria-715961218',
  //       github: 'https://github.com/dk2655',
  //       instagram: 'https://instagram.com/divyanshu._.7',
  //     },
  //     _createdAt: '2023-11-22T14:48:19Z',
  //     name: 'Divyanshu Khajuria',
  //     bio: 'Greetings, I am Divyanshu Khajuria, Senior Event Manager at ACES. With a passion for crafting unforgettable experiences, I am dedicated to orchestrating events that redefine ACES image and leave an indelible mark on the landscape of memorable moments.',
  //     _updatedAt: '2023-11-22T15:00:06Z',
  //     email: 'divyanshukhajuria12@gmail.com',
  //     slug: { current: 'divyanshu-khajuria' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqUkxn',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:48:43Z',
  //     _rev: 'yblsDKVOfabu1vzRxiylGN',
  //     _type: 'member',
  //     _id: 'bvdFY8iWN5ZXtp8P5Fmhox',
  //     membershipId: 'ACES2324VB3005',
  //     socials: {
  //       github: 'https://github.com/ivahbavi',
  //       instagram: 'https://instagram.com/ivaibhavii',
  //     },
  //     slug: { current: 'vaibhavi-bhardwaj' },
  //     clubPosts: [
  //       {
  //         position: 'Jr. Technical Head',
  //         _key: 'c2d708e7359b81b7095af9b4c04ef23c',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Vaibhavi Bhardwaj',
  //     bio: "Hello there! I'm Vaibhavi Bhardwaj, currently serving as Jr. Technical Head in our club. I'm passionate about making a positive impact and working together to achieve our goals. Excited for the journey ahead!",
  //     _updatedAt: '2023-11-22T14:58:12Z',
  //     email: 'vaibhavibhardwaj5@gmail.com',
  //   },
  //   {
  //     email: 'gunjann127@gmail.com',
  //     slug: { current: 'gunjan-sharma' },
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Public Relations Officer',
  //         _key: 'e7caec03028266307cd457d184cb9e6a',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'bvdFY8iWN5ZXtp8P5Fmij1',
  //     membershipId: 'ACES2324GS3125',
  //     socials: {
  //       github: 'https://github.com/GunjanSharma2004',
  //       instagram: 'https://instagram.com/_gunjann',
  //       linkedIn: 'https://www.linkedin.com/in/gunjan-sharma-1a579428a',
  //     },
  //     _updatedAt: '2023-11-22T14:57:58Z',
  //     _createdAt: '2023-11-22T14:48:46Z',
  //     _rev: 'yblsDKVOfabu1vzRxiyhoG',
  //     name: 'Gunjan Sharma',
  //     bio: 'An ardent computer engineering student with a flair for effective communication, dedicated to bridging the gap between tech brilliance and public understanding as the Jr. Public Relations Officer. By cultivating a dynamic environment where innovation meets effective outreach, I strive to amplify our achievements and innovations with clarity and impact. Join me on the journey of transforming complex tech narratives into compelling stories for all to embrace.',
  //   },
  //   {
  //     _rev: 'yblsDKVOfabu1vzRxiyJ1P',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Jr. External Affairs Officer',
  //         _key: '9ed33f914c12f4f95beb664f2216f7c2',
  //         category: 'junior',
  //       },
  //     ],
  //     bio: "Fueling my engineering dreams with utmost passion,I'm all about infusing energy and enthusiasm into our club.Currently donning the hat of External Affairs Officer, I'm on a mission to bridge connections and foster collaboration within and beyond our community.Let's engineer some excitement together!",
  //     _id: 'bvdFY8iWN5ZXtp8P5Fmv3X',
  //     membershipId: 'ACES2324VT3505',
  //     slug: { current: 'vedant-takawane' },
  //     _createdAt: '2023-11-22T14:48:58Z',
  //     _type: 'member',
  //     name: 'Vedant Takawane',
  //     socials: {
  //       linkedIn: 'https://www.linkedin.com/in/vedant-takawane',
  //       instagram: 'https://instagram.com/ved.takawane',
  //     },
  //     _updatedAt: '2023-11-22T14:56:56Z',
  //     email: 'vedantvtakawane@gmail.com',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:49:19Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqTGfX',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Data Manager',
  //         _key: '340b09c4d9b3fd259fb0651d24c7615c',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     bio: 'to infinity and beyond☄️',
  //     _id: 'bvdFY8iWN5ZXtp8P5Fn4QZ',
  //     membershipId: 'ACES2324SA4209',
  //     socials: {
  //       github: 'https://github.com/shri-915',
  //       instagram: 'https://www.linkedin.com/in/shrimun-agarwal-75728924b',
  //       linkedIn: 'https://www.linkedin.com/in/shrimun-agarwal-75728924b',
  //     },
  //     _updatedAt: '2023-11-22T14:55:05Z',
  //     email: 'agarwalshrimun@gmail.com',
  //     _type: 'member',
  //     name: 'Shrimun Agarwal',
  //     slug: { current: 'shrimun-agarwal' },
  //   },
  //   {
  //     membershipId: 'ACES2324SM5126',
  //     socials: {
  //       github: 'https://github.com/ShrutiMare',
  //       instagram: 'https://instagram.com/shruti.mare',
  //       linkedIn: 'https://www.linkedin.com/in/shruti-mare-b53297272',
  //     },
  //     _updatedAt: '2023-11-22T14:53:02Z',
  //     slug: { current: 'shruti-mare' },
  //     _createdAt: '2023-11-22T14:49:46Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqSvVH',
  //     _type: 'member',
  //     bio: 'I am a team player and enjoy collaborating with my peers to achieve common goals. I am also passionate about expanding my knowledge and developing new skills across various subject areas.',
  //     clubPosts: [
  //       {
  //         _key: 'e24d19d62bef60eb08c60991bc45c9d6',
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. A.C.E.S. Representative',
  //       },
  //     ],
  //     name: 'Shruti Mare',
  //     _id: 'bvdFY8iWN5ZXtp8P5Fn9HH',
  //     email: 'shrutimare@gmail.com',
  //   },
  //   {
  //     _id: 'ca8e0455-0c72-4992-8c91-17d241750e18',
  //     _updatedAt: '2023-11-22T17:04:51Z',
  //     _rev: 'yblsDKVOfabu1vzRxjR5kx',
  //     name: 'Dr. Vinod Kimbahune',
  //     clubPosts: [
  //       {
  //         category: 'faculty',
  //         tenure: '2023',
  //         position: 'HOD, Computer Dept.',
  //         _key: '534acc5c5b33',
  //       },
  //     ],
  //     membershipId: 'ACES2324VKFACL',
  //     email: 'hod.compsci@dypvp.edu.in',
  //     slug: { current: 'dr-vinod-kimbahune', _type: 'slug' },
  //     _createdAt: '2023-11-22T17:04:51Z',
  //     _type: 'member',
  //   },
  //   {
  //     _id: 'yblsDKVOfabu1vzRxivIJ2',
  //     membershipId: 'ACES2324AM0702',
  //     socials: {},
  //     _createdAt: '2023-11-22T14:47:34Z',
  //     _rev: 'bvdFY8iWN5ZXtp8P5FsGLX',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Club Advisor',
  //         _key: '2d7a931ec96af21ebf1e8531e2d62afb',
  //         category: 'core',
  //       },
  //       {
  //         tenure: '2022',
  //         position: 'Sr. Technical Head',
  //         _key: 'b471afb818782450f1ccafa473a06543',
  //         category: 'core',
  //       },
  //       {
  //         _key: '610a07ef6c1b60fc8574d1e6c37de478',
  //         category: 'core',
  //         tenure: '2021',
  //         position: 'Jr. Technical Head',
  //       },
  //     ],
  //     name: 'Aryaman Modi',
  //     email: 'modiaryaman@gmail.com',
  //     slug: { current: 'aryaman-modi' },
  //     _updatedAt: '2023-11-22T15:03:09Z',
  //   },
  //   {
  //     slug: { current: 'anushka-sao' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqVJcB',
  //     _type: 'member',
  //     _id: 'yblsDKVOfabu1vzRxivQkQ',
  //     membershipId: 'ACES2324AS1316',
  //     email: 'annsao9545@gmail.com',
  //     _createdAt: '2023-11-22T14:47:52Z',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Sr. A.C.E.S. Representative',
  //         _key: 'bd41e83c391de450bf14b9cbfd222fb2',
  //         category: 'senior',
  //       },
  //     ],
  //     name: 'Anushka Sao',
  //     socials: {},
  //     _updatedAt: '2023-11-22T15:01:49Z',
  //   },
  //   {
  //     email: 'suryansh.sarawat@gmail.com',
  //     slug: { current: 'suryansh-sarawat' },
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Sr. A.C.E.S. Representative',
  //         _key: 'ed5ec6a1a83c4b01a5dee8526ed37b3a',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Suryansh Sarawat',
  //     _id: 'yblsDKVOfabu1vzRxivS84',
  //     _updatedAt: '2023-11-22T15:01:37Z',
  //     _createdAt: '2023-11-22T14:47:55Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqVIg7',
  //     bio: "I'm dedicated to exploring diverse interests, ranging from academic pursuits to extracurricular activities. With a zest for life and a keen sense of curiosity, I navigate the exciting journey of college, embracing challenges, and seizing every opportunity for personal and academic growth.",
  //     membershipId: 'ACES2324SS1408',
  //     socials: {
  //       github: 'https://github.com/papasarawat',
  //       instagram: 'https://instagram.com/surynsh8',
  //       linkedIn: 'https://www.linkedin.com/in/suryansh-sarawat-61b8a127a',
  //     },
  //   },
  //   {
  //     email: 'udayrajkoli22@gmail.com',
  //     _type: 'member',
  //     _id: 'yblsDKVOfabu1vzRxivTCg',
  //     membershipId: 'ACES2324UK1522',
  //     socials: {},
  //     _updatedAt: '2023-11-22T15:01:27Z',
  //     _createdAt: '2023-11-22T14:47:58Z',
  //     _rev: 'yblsDKVOfabu1vzRxj0iRM',
  //     clubPosts: [
  //       {
  //         category: 'senior',
  //         tenure: '2023',
  //         position: 'Sr. Content Creator',
  //         _key: 'bdf65eba29ea31d377d568e42526d7de',
  //       },
  //       {
  //         position: 'Jr. Photographer ',
  //         _key: '4eb70d32352e005b7d50f8949433d6ba',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     name: 'Udayraj Koli',
  //     slug: { current: 'udayraj-koli' },
  //   },
  //   {
  //     membershipId: 'ACES2324SS1707',
  //     socials: {},
  //     email: 'sohamsontakke2003@gmail.com',
  //     _createdAt: '2023-11-22T14:48:04Z',
  //     _rev: 'yblsDKVOfabu1vzRxj0TTX',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         _key: 'cb2d7500e98b30ab6c7bf341a35c7f58',
  //         category: 'senior',
  //         tenure: '2023',
  //         position: 'Sr. Cultural Head',
  //       },
  //       {
  //         category: 'senior',
  //         tenure: '2022',
  //         position: 'Jr. Cultural Head ',
  //         _key: 'f69eb844216c1844b53c065ffa6ed211',
  //       },
  //     ],
  //     name: 'Soham Sontakke',
  //     slug: { current: 'soham-sontakke' },
  //     _id: 'yblsDKVOfabu1vzRxivbBW',
  //     _updatedAt: '2023-11-22T15:01:00Z',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:48:10Z',
  //     clubPosts: [
  //       {
  //         position: 'Sr. Data Manager',
  //         _key: '114950150f53eb75739db73be04456b7',
  //         category: 'senior',
  //         tenure: '2023',
  //       },
  //       {
  //         category: 'senior',
  //         tenure: '2022',
  //         position: 'Jr. Technical Head',
  //         _key: 'f73277e611400270ef190993b750efff',
  //       },
  //     ],
  //     membershipId: 'ACES2324SP1924',
  //     _updatedAt: '2023-11-22T15:00:38Z',
  //     email: 'sahilsrinivas3@gmail.com',
  //     slug: { current: 'sahil-parupudi' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqV0Pr',
  //     _type: 'member',
  //     name: 'Sahil Parupudi',
  //     bio: 'Data, Data Everywhere! \nTrying to fit this data in 18,278 columns whilst striving to learn something new everyday.',
  //     _id: 'yblsDKVOfabu1vzRxivddm',
  //     socials: {
  //       github: 'https://github.com/sahil-s-246',
  //       instagram: 'https://www.instagram.com/sahilsrinivas_246',
  //       linkedIn: 'https://www.linkedin.com/in/sahil-parupudi-0ab787229/',
  //     },
  //   },
  //   {
  //     _type: 'member',
  //     _id: 'yblsDKVOfabu1vzRxivkOU',
  //     slug: { current: 'nikhil-waghmode' },
  //     _createdAt: '2023-11-22T14:48:25Z',
  //     _rev: 'bvdFY8iWN5ZXtp8P5Fq0Qp',
  //     clubPosts: [
  //       {
  //         _key: '60ef5e9110a0ec43f08ad02ba256691d',
  //         category: 'senior',
  //         tenure: '2023',
  //         position: 'Sr. External Affairs Officer',
  //       },
  //       {
  //         position: 'Jr. ACES Representative',
  //         _key: 'ec9e9d09f2f3bfd420d7cd17a3a206a9',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     name: 'Nikhil Waghmode',
  //     membershipId: 'ACES2324NW2413',
  //     socials: {},
  //     _updatedAt: '2023-11-22T14:59:40Z',
  //     email: 'nick13waghmode@gmail.com',
  //   },
  //   {
  //     email: 'kirtiagarwal.ka54@gmail.com',
  //     _type: 'member',
  //     name: 'Kirti Agarwal',
  //     bio: "I'm Kirti Agarwal, enthusiastic about public relations, and eager to utilize my communication skills as the Senior Public Relations Officer for the club. I am eager to build connections and enhance the club's presence.",
  //     _id: 'yblsDKVOfabu1vzRxivkcl',
  //     socials: {
  //       github: 'https://github.com/kirtiagarwal06',
  //       instagram: 'https://instagram.com/kirtiagarwal0601',
  //       linkedIn: 'https://www.linkedin.com/in/kirti-agarwal-69729622b',
  //     },
  //     slug: { current: 'kirti-agarwal' },
  //     _createdAt: '2023-11-22T14:48:28Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqUNDr',
  //     clubPosts: [
  //       {
  //         tenure: '2023',
  //         position: 'Sr. Public Relations Officer',
  //         _key: 'a9c77d172a839f53af51cc882a2d4fa4',
  //         category: 'senior',
  //       },
  //       {
  //         position: 'Jr. Public Relations Officer',
  //         _key: '2a907a88b2c8cc47b9e4ed7cdf1470d8',
  //         category: 'senior',
  //         tenure: '2022',
  //       },
  //     ],
  //     membershipId: 'ACES2324KA2506',
  //     _updatedAt: '2023-11-22T14:59:20Z',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:48:34Z',
  //     clubPosts: [
  //       {
  //         category: 'senior',
  //         tenure: '2023',
  //         position: 'Sr. Technical Head',
  //         _key: '9aab4b13855a07d4a2f0793c0b249668',
  //       },
  //       {
  //         tenure: '2022',
  //         position: 'Jr. Technical Head',
  //         _key: 'f7210036827ae7d068f2831b7ea83800',
  //         category: 'senior',
  //       },
  //     ],
  //     _id: 'yblsDKVOfabu1vzRxivoEO',
  //     membershipId: 'ACES2324PP2723',
  //     _updatedAt: '2023-11-22T14:58:56Z',
  //     slug: { current: 'prakhar-pandey' },
  //     _rev: 'yblsDKVOfabu1vzRxiyzJ6',
  //     _type: 'member',
  //     name: 'Prakhar Pandey',
  //     bio: "Hello, I'm Prakhar Pandey, a tech enthusiast eager to lead as the Technical Head. I'm dedicated to using my tech skills to drive our club to new heights in innovation and development. Let's embark on this exciting journey together!",
  //     socials: {
  //       github: 'https://github.com/prakharpandey04',
  //       x: 'https://twitter.com/pandeyprakhar04',
  //       instagram: 'https://www.instagram.com/prakharpandey04',
  //       linkedIn: 'https://www.linkedin.com/in/prakhar-pandey-0a15651b4/',
  //     },
  //     email: 'prakhar.p231@gmail.com',
  //   },
  //   {
  //     membershipId: 'ACES2324AS2802',
  //     _updatedAt: '2023-11-22T14:58:40Z',
  //     email: 'rajappr700@gmail.com',
  //     clubPosts: [
  //       {
  //         _key: 'af460fa9b06adf49d2496ea8ace0fde0',
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. Technical Head',
  //       },
  //     ],
  //     _id: 'yblsDKVOfabu1vzRxivrbk',
  //     _type: 'member',
  //     name: 'Aryan Sharma',
  //     socials: {},
  //     slug: { current: 'aryan-sharma' },
  //     _createdAt: '2023-11-22T14:48:37Z',
  //     _rev: 'bvdFY8iWN5ZXtp8P5FpdPj',
  //   },
  //   {
  //     socials: {
  //       github: 'https://github.com/Siddharthgitthub',
  //       instagram: 'https://instagram.com/siddharth__ig',
  //       linkedIn: 'https://www.linkedin.com/in/siddharth-singh-746a8a290',
  //     },
  //     _updatedAt: '2023-11-22T14:57:10Z',
  //     email: 'siddharthsingh.1004@gmail.com',
  //     slug: { current: 'siddharth-singh' },
  //     _createdAt: '2023-11-22T14:48:55Z',
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         _key: '5524adc286a9adf276fd356c904eee3b',
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. External Affairs Officer',
  //       },
  //     ],
  //     membershipId: 'ACES2324SS3410',
  //     _rev: 'DdA5NPXuRVnUaTtbLqTpJv',
  //     name: 'Siddharth Singh',
  //     bio: "As the External Affairs Officer at ACES, I'm passionate about building bridges and cultivating meaningful relationships. My role revolves around representing our club's values, initiatives, and impact beyond our immediate sphere.",
  //     _id: 'yblsDKVOfabu1vzRxivyfU',
  //   },
  //   {
  //     membershipId: 'ACES2324MG3729',
  //     socials: {},
  //     _updatedAt: '2023-11-22T14:56:25Z',
  //     email: 'manaswini.govadia@gmail.com',
  //     slug: { current: 'manaswini-govadia' },
  //     clubPosts: [
  //       {
  //         position: 'Jr. Event Manager',
  //         _key: '99c55cb99ac334ee66463c6910b62f91',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Manaswini Govadia',
  //     _type: 'member',
  //     _id: 'yblsDKVOfabu1vzRxiw4ec',
  //     _createdAt: '2023-11-22T14:49:04Z',
  //     _rev: 'bvdFY8iWN5ZXtp8P5Foir9',
  //   },
  //   {
  //     clubPosts: [
  //       {
  //         _key: '34ec390a85f394dc4ea33f51df49d0aa',
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. Event Manager',
  //       },
  //     ],
  //     membershipId: 'ACES2324NT3830',
  //     socials: {
  //       instagram: 'https://www.instagram.com/heyaitsnysa',
  //       linkedIn: 'https://www.linkedin.com/in/nysa-thukral-7657b920a',
  //     },
  //     _updatedAt: '2023-11-22T14:56:11Z',
  //     email: 'nysathukral6@gmail.com',
  //     _id: 'yblsDKVOfabu1vzRxiw7eB',
  //     slug: { current: 'nysa-thukral' },
  //     _createdAt: '2023-11-22T14:49:07Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqTe59',
  //     _type: 'member',
  //     name: 'Nysa Thukral',
  //     bio: 'I write poetries and love listening to music',
  //   },
  //   {
  //     _createdAt: '2023-11-22T14:49:10Z',
  //     _type: 'member',
  //     membershipId: 'ACES2324AP3903',
  //     email: 'adityabpawar393@gmail.com',
  //     slug: { current: 'aditya-pawar' },
  //     _rev: 'DdA5NPXuRVnUaTtbLqTTgd',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Event Manager',
  //         _key: 'f6f90ac94a462c9f44b97bab434580c3',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Aditya Pawar',
  //     bio: "I'm Aditya Pawar, a Computer Science enthusiast pursuing my Bachelor of Engineering. Proudly currently hold the role of Junior Events Manager at the Association of Computer Engineering Club in college. Excited to contribute and make a difference in every opportunity.",
  //     _id: 'yblsDKVOfabu1vzRxiwABC',
  //     socials: {
  //       github: 'https://github.com/AdityaPawar6174',
  //       instagram: 'https://instagram.com/aditya_b_pawar',
  //       linkedIn: 'https://www.linkedin.com/in/aditya-pawar-3348aa257',
  //     },
  //     _updatedAt: '2023-11-22T14:55:39Z',
  //   },
  //   {
  //     _updatedAt: '2023-11-22T14:55:25Z',
  //     email: 'saeeshinde5492@gmail.com',
  //     _createdAt: '2023-11-22T14:49:13Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqTMi3',
  //     _type: 'member',
  //     name: 'Saee Shinde',
  //     membershipId: 'ACES2324SS4029',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Designer',
  //         _key: '92421a31cb0392d99d3675cd92ac3db8',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     _id: 'yblsDKVOfabu1vzRxiwBFo',
  //     socials: {},
  //     slug: { current: 'saee-shinde' },
  //   },
  //   {
  //     slug: { current: 'prasanna-badgujar' },
  //     _createdAt: '2023-11-22T14:49:22Z',
  //     clubPosts: [
  //       {
  //         category: 'junior',
  //         tenure: '2023',
  //         position: 'Jr. Data Manager',
  //         _key: '62db18ae60505b47cdafec723ae8b8d4',
  //       },
  //     ],
  //     bio: "Hello, I'm Prasanna! With a calm and observant nature, I explore the realms of science and technology. In my role as a data manager in the team, I bring expertise in handling and managing data effectively. Alongside, I have a keen eye for photography, capturing life's moments.",
  //     _id: 'yblsDKVOfabu1vzRxiwC69',
  //     socials: {
  //       instagram: 'https://instagram.com/p.rasanna',
  //       linkedIn: 'https://www.linkedin.com/in/prasanna-badgujar-3b1992251',
  //     },
  //     _updatedAt: '2023-11-22T14:54:50Z',
  //     email: 'prasannabadgujar963@gmail.com',
  //     _rev: 'bvdFY8iWN5ZXtp8P5FoLkx',
  //     _type: 'member',
  //     name: 'Prasanna Badgujar',
  //     membershipId: 'ACES2324PB4318',
  //   },
  //   {
  //     clubPosts: [
  //       {
  //         position: 'Jr. Cultural Head',
  //         _key: 'b2042af87b40258aaf153ad4281681ab',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Shubham Khansare',
  //     socials: {
  //       github: 'https://github.com/Shubh-1a09',
  //       instagram: 'https://instagram.com/capt_shubh_07',
  //       linkedIn: 'https://www.linkedin.com/in/shubham-khansare-478748257',
  //     },
  //     email: 'shubhamkhansare2001@gmail.com',
  //     _createdAt: '2023-11-22T14:49:28Z',
  //     _type: 'member',
  //     bio: 'Hi myself shubham khansare I am an engineering student in the computer science stream currently pursuing my second year at dr. Dy  Patil institute of technology, pune I am a motivated and energetic engineering student capable of working under pressure and delivering the best in any situation.',
  //     _id: 'yblsDKVOfabu1vzRxiwCdS',
  //     membershipId: 'ACES2324SK4522',
  //     _updatedAt: '2023-11-22T14:54:19Z',
  //     slug: { current: 'shubham-khansare' },
  //     _rev: 'yblsDKVOfabu1vzRxixXpC',
  //   },
  //   {
  //     _type: 'member',
  //     _id: 'yblsDKVOfabu1vzRxiwDTn',
  //     membershipId: 'ACES2324MD4606',
  //     socials: {},
  //     slug: { current: 'maira-dharwal' },
  //     email: 'mairad2004@gmail.com',
  //     _createdAt: '2023-11-22T14:49:31Z',
  //     _rev: 'DdA5NPXuRVnUaTtbLqT4Xb',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Cultural Head',
  //         _key: '332eb535bf48aa9a780fc182c82ca59b',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Maira Dharwal',
  //     _updatedAt: '2023-11-22T14:54:03Z',
  //   },
  //   {
  //     _type: 'member',
  //     clubPosts: [
  //       {
  //         position: 'Jr. Content Creator',
  //         _key: '33ea0bc2e73c481a7ca681355d4db88b',
  //         category: 'junior',
  //         tenure: '2023',
  //       },
  //     ],
  //     name: 'Sudhanshu Lawhare',
  //     socials: {
  //       github: 'https://github.com/Shu-50',
  //       instagram: 'https://instagram.com/su.dhansh.u',
  //       linkedIn: 'https://www.linkedin.com/in/sudhanshu-lawhare-6a1074260',
  //     },
  //     _updatedAt: '2023-11-22T14:53:18Z',
  //     slug: { current: 'sudhanshu-lawhare' },
  //     _rev: 'bvdFY8iWN5ZXtp8P5Fo4Ud',
  //     bio: 'I am an football athlete on field and off with a creative mind in the realm of digital arts and animation, bringing imagination to life. An avid manga reader, delving into diverse worlds and narratives.',
  //     _id: 'yblsDKVOfabu1vzRxiwFFE',
  //     membershipId: 'ACES2324SL5023',
  //     email: 'lawhares@gmail.com',
  //     _createdAt: '2023-11-22T14:49:43Z',
  //   },
  // ]

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
    'Faculty Coordinator'
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
      <Header title="Meet the team" />
      <section className="container mx-auto p-4 md:px-6 pb-8 flex flex-col lg:flex-row md:gap-7">
        <div className="lg:w-4/5 h-fit">
          <h2 className="font-title uppercase text-primary font-semibold text-3xl py-6">
            {sequence[0].displayName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {groupedData[sequence[0].category].map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/5 md:pr-5">
          <h2 className="font-title uppercase text-primary font-semibold text-3xl py-6">
            Faculties
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 md:gap-7">
            {groupedData['faculty'].map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      {sequence.slice(1).map((seq) => (
        <section
          key={seq.category}
          className="container mx-auto p-4 md:px-6 pb-20 flex flex-col lg:flex-row md:gap-7"
        >
          {/* <div className="w-4/5 h-fit"> */}
          <div className="w-full h-fit">
            <h2 className="font-title uppercase text-primary font-semibold text-3xl py-6">
              {seq.displayName}
            </h2>
            {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7"> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
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
