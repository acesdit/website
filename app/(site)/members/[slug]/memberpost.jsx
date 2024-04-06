'use client'
import Header from '../../components/Header'
import { createMember } from '@/sanity/lib/client'

const testMembers = [
  {
    2021: '',
    2022: '',
    2023: 'CEO',
    membership_id: 'ACES2324JD0101',
    name: 'Richard Hendricks',
    email: 'richard.hendricks@gmail.com',
    bio: 'i like pancake',
    category: 'core',
    linkedin: 'https://linkedin.com/richard/in?jfds=fds',
    instagram: '',
    github: 'https://github.com/richard',
    twitter: 'twitterurl',
  },
  {
    2021: 'Present',
    2022: 'Missing',
    2023: '',
    membership_id: 'ACES2324AM0209',
    name: 'Erlich Bachman',
    email: 'erlich@gmail.com',
    bio: '',
    category: 'core',
    linkedin: 'https://linkedin.com/richard',
    instagram: '',
    github: '',
    twitter: 'https://x.com/richard',
  },
  {
    2021: '',
    2022: '',
    2023: 'Java Developer',
    membership_id: 'ACES2324SD0323',
    name: 'Dinesh',
    email: 'dinesh@gmail.com',
    bio: '',
    category: 'core',
    linkedin: '',
    instagram: 'https://instagram.com/richard',
    github: 'https://github.com/richard',
    twitter: 'https://x.com/richard',
  },
  {
    2021: '',
    2022: '',
    2023: 'Systems Architect',
    membership_id: 'ACES2324YP0416',
    name: 'Gilfoyle',
    email: 'gilfoyle@gmail.com',
    bio: '',
    category: 'senior',
    linkedin: 'https://linkedin.com/richard',
    instagram: '',
    github: '',
    twitter: '',
  },
  {
    2021: 'Douchebag',
    2022: 'Douchebag',
    2023: 'Douchebag',
    membership_id: 'ACES2324KA0511',
    name: 'Jian Yang',
    email: 'jian@gmail.com',
    bio: '',
    category: 'senior',
    linkedin: '',
    instagram: '',
    github: 'https://github.com/richard',
    twitter: '',
  },
  {
    2021: '',
    2022: 'Venture Capitalist',
    2023: 'CFO',
    membership_id: 'ACES2324FT0620',
    name: 'Monica Hall',
    email: 'monica@gmail.com',
    bio: '',
    category: 'junior',
    linkedin: '',
    instagram: 'https://instagram.com/richard',
    github: '',
    twitter: '',
  },
  {
    2021: 'Venture Capitalist',
    2022: 'Founder',
    2023: 'CEO',
    membership_id: 'ACES2324AM0702',
    name: 'Laurie Bream',
    email: 'laurie@gmail.com',
    bio: '',
    category: 'junior',
    linkedin: '',
    instagram: 'https://instagram.com/monica',
    github: '',
    twitter: '',
  },
]

const finalMembers = [
  {
    membership_id: 'ACES2324JD0101',
    name: 'Justin Davis',
    email: '02justindavis@gmail.com',
    2023: 'President',
    2022: 'Sr. Technical Head',
    2021: 'Jr. Technical Head',
    bio: '',
    category: 'core',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324AM0209',
    name: 'Atharva Morankar',
    email: 'atharva.morankar09@gmail.com',
    2023: 'Secretary',
    2022: 'Sr. ACES Representative',
    2021: 'Jr. Data Manager',
    bio: "I'm Atharva, a passionate 21-year-old pursuing my Bachelor's degree in Computer Science. \nI have a strong affinity for problem-solving and a deep enthusiasm for building projects that make an impact.",
    category: 'core',
    linkedin: 'https://www.linkedin.com/in/atharva-morankar-24788421a/',
    github: 'https://github.com/Atharva-Morankar-09',
    instagram: 'https://instagram.com/_atharva_09?igshid=MTNiYzNiMzkwZA==',
    twitter: 'https://twitter.com/atharva_09_',
  },
  {
    membership_id: 'ACES2324SD0323',
    name: 'Sanika Deshmukkh',
    email: 'sanikadeshmukkh238@gmail.com',
    2023: 'Club Advisor',
    2022: 'Sr. Public Relations Officer',
    2021: 'Jr. Public Relations Officer',
    bio: 'Making everyday moments extraordinary✨️',
    category: 'core',
    linkedin:
      'https://www.linkedin.com/in/sanika-deshmukkh-92407b21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Sanika238',
    instagram: 'https://instagram.com/sanikaxd?igshid=OGQ5ZDc2ODk2ZA==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324YP0416',
    name: 'Yogeshwar Patil ',
    email: 'yogi160721@gmail.com',
    2023: 'Club Advisor',
    2022: 'Sr. Cultural Head',
    2021: 'Jr. Cultural Head',
    bio: '',
    category: 'core',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324KA0511',
    name: 'Khushi Agrawal ',
    email: 'khushiashishagrawal@gmail.com',
    2023: 'Club Advisor',
    2022: 'Sr. Cultural Head',
    2021: 'Jr. Cultural Head',
    bio: '',
    category: 'core',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324FT0620',
    name: 'Fatima Taiba ',
    email: 'fatimataiba773@gmail.com',
    2023: 'Club Advisor',
    2022: 'Sr. External Affairs Officer',
    2021: 'Jr. External Affairs Officer',
    bio: '',
    category: 'core',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324AM0702',
    name: 'Aryaman Modi',
    email: 'modiaryaman@gmail.com',
    2023: 'Club Advisor',
    2022: 'Sr. Technical Head',
    2021: 'Jr. Technical Head',
    bio: '',
    category: 'core',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324PM0814',
    name: 'Pranav Mehendale ',
    email: 'pranavm1405@gmail.com',
    2023: 'Vice President',
    2022: 'Jr. Data Manager',
    2021: '',
    bio: 'Results-oriented engineering student with a vision for propelling A.C.E.S. to remarkable success. Leverages data and technology to deliver innovative solutions.',
    category: 'core',
    linkedin: 'https://www.linkedin.com/in/pranav-mehendale',
    github: 'https://github.com/pranavmm14',
    instagram: 'https://www.instagram.com/pranavm_14/',
    twitter: 'https://twitter.com/PM_Mehendale',
  },
  {
    membership_id: 'ACES2324SB0924',
    name: 'Sujal Bagade',
    email: 'sujalbagade123@gmail.com',
    2023: 'Joint Secretary',
    2022: 'Jr. External Affairs Officer',
    2021: '',
    bio: '',
    category: 'core',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324DP1019',
    name: 'Dev Phadol ',
    email: 'devphadol1919@gmail.com',
    2023: 'Treasurer',
    2022: 'Jr. Technical Head',
    2021: '',
    bio: "I'm Dev Phadol, currently serving as the Treasurer of ACES, where I seamlessly merge financial acumen. In my previous role as Jr. Technical Head.I'm passionate about exploring the intersection of technology and finance. My skills extend beyond coding, encompassing financial management and treasury operations. Eager to connect for discussions on the exciting confluence of tech and finance and explore collaborative opportunities. Let's connect and navigate this dynamic landscape together! ",
    category: 'core',
    linkedin:
      'https://www.linkedin.com/in/dev-phadol-b57504228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/DEV-PHADOL',
    instagram: 'https://instagram.com/_phadol_dev_',
    twitter: '',
  },
  {
    membership_id: 'ACES2324JS1105',
    name: 'Jatin Sharma',
    email: 'purohitsharma0987@gmail.com',
    2023: 'Sr. A.C.E.S. Representative',
    2022: 'Jr. Public Relations Officer',
    2021: '',
    bio: 'Struggling Engineer- grasping hold over figma, photoshop, Representative of Computer science Club ACES and Campus representative for UNSTOP.',
    category: 'senior',
    linkedin:
      'https://www.linkedin.com/in/jatinsharma6969?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/JV-2701',
    instagram: 'https://instagram.com/jatinsharma_0987?igshid=NGVhN2U2NjQ0Yg==',
    twitter: 'https://x.com/jatu_0987?t=PJohuZ74hPILSPMG1f8GRg&s=09',
  },
  {
    membership_id: 'ACES2324AB1213',
    name: 'Akshay Bade',
    email: 'akshaybade2003@gmail.com',
    2023: 'Sr. A.C.E.S. Representative',
    2022: 'Jr. ACES Representatives',
    2021: '',
    bio: "Myself Akshay Bade, the face of our club and a third-year Computer Engineering student. A passionate web developer, I thrive on solving complex problems in Data Structures and Algorithms, driving the club's vision with my technical expertise",
    category: 'senior',
    linkedin: 'www.linkedin.com/in/akshay-bade-37705a219',
    github: 'https://github.com/akshaybade13',
    instagram: 'https://www.instagram.com/_akshay1313/',
    twitter: 'https://x.com/akshaybade1313',
  },
  {
    membership_id: 'ACES2324AS1316',
    name: 'Anushka Sao',
    email: 'annsao9545@gmail.com',
    2023: 'Sr. A.C.E.S. Representative',
    2022: '',
    2021: '',
    bio: '',
    category: 'senior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SS1408',
    name: 'Suryansh Sarawat',
    email: 'suryansh.sarawat@gmail.com',
    2023: 'Sr. A.C.E.S. Representative',
    2022: '',
    2021: '',
    bio: "I'm dedicated to exploring diverse interests, ranging from academic pursuits to extracurricular activities. With a zest for life and a keen sense of curiosity, I navigate the exciting journey of college, embracing challenges, and seizing every opportunity for personal and academic growth.",
    category: 'senior',
    linkedin: 'https://www.linkedin.com/in/suryansh-sarawat-61b8a127a',
    github: 'https://github.com/papasarawat',
    instagram: 'https://instagram.com/surynsh8?igshid=MmVlMjlkMTBhMg==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324UK1522',
    name: 'Udayraj Koli',
    email: 'udayrajkoli22@gmail.com',
    2023: 'Sr. Content Creator',
    2022: 'Jr. Photographer ',
    2021: '',
    bio: '',
    category: 'senior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324KA1613',
    name: 'Krutika Ahire',
    email: 'ahirekrutika13@gmail.com',
    2023: 'Sr. Cultural Head',
    2022: '',
    2021: '',
    bio: 'A creative person , who likes art , craft , drawing and painting and also loves learning new things. Here to develope myself and learn from the experienced ones.',
    category: 'senior',
    linkedin:
      'https://www.linkedin.com/in/krutika-ahire-90358a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/krutikaahire',
    instagram: 'https://instagram.com/krutikaahire13?igshid=MzMyNGUyNmU2YQ==',
    twitter: 'https://x.com/krutika_ahire?t=JqSPsAGntEmmtU5KvEzG1A&s=09',
  },
  {
    membership_id: 'ACES2324SS1707',
    name: 'Soham Sontakke',
    email: 'sohamsontakke2003@gmail.com',
    2023: 'Sr. Cultural Head',
    2022: 'Jr. Cultural Head ',
    2021: '',
    bio: '',
    category: 'senior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324AP1819',
    name: 'Asmi Pulgam',
    email: 'asmipulgam478@gmail.com',
    2023: 'Sr. Cultural Head',
    2022: 'Jr. Cultural Head ',
    2021: '',
    bio: 'Enthusiastic for new things ',
    category: 'senior',
    linkedin:
      'https://www.linkedin.com/in/asmi-pulgam-612242256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: '',
    instagram: 'https://instagram.com/asmi_19_?igshid=YTQwZjQ0NmI0OA==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SP1924',
    name: 'Sahil Parupudi',
    email: 'sahilsrinivas3@gmail.com',
    2023: 'Sr. Data Manager',
    2022: 'Jr. Technical Head',
    2021: '',
    bio: 'Data, Data Everywhere! \nTrying to fit this data in 18,278 columns whilst striving to learn something new everyday.',
    category: 'senior',
    linkedin: 'https://www.linkedin.com/in/sahil-parupudi-0ab787229/',
    github: 'https://github.com/sahil-s-246',
    instagram: 'https://www.instagram.com/sahilsrinivas_246',
    twitter: '',
  },
  {
    membership_id: 'ACES2324TB2024',
    name: 'Tanvi Baviskar ',
    email: 'tanvi.baviskar24@gmail.com',
    2023: 'Sr. Event Manager',
    2022: 'Jr. Event Manager',
    2021: '',
    bio: "I'm Tanvi Baviskar, passionate about event management, ready to leverage my organizational prowess as the Event Manager for the club. Excited to craft extraordinary experiences and elevate the club's event presence by fostering connections.",
    category: 'senior',
    linkedin:
      'https://www.linkedin.com/in/tanvi-b-a5416422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/tanvibaviskar',
    instagram: 'https://instagram.com/_tanviii_24?igshid=MzNlNGNkZWQ4Mg==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324OV2114',
    name: 'Omkar Vasekar ',
    email: 'vasekaromkar@gmail.com',
    2023: 'Sr. Event Manager',
    2022: '',
    2021: '',
    bio: 'I am a tech enthusiast exploring various technologies and also trying to implement them to solve real life problems.',
    category: 'senior',
    linkedin:
      'https://www.linkedin.com/in/omkar-vasekar-1a6130229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/omkarvasekar',
    instagram: 'https://instagram.com/vasekar_omkar?igshid=MmVlMjlkMTBhMg==',
    twitter: 'https://x.com/OmkarVasekar14?t=k7_NHP5-lXp-nrhMyQ36Zw&s=09',
  },
  {
    membership_id: 'ACES2324DK2226',
    name: 'Divyanshu Khajuria',
    email: 'divyanshukhajuria12@gmail.com',
    2023: 'Sr. Event Manager',
    2022: 'Jr. Event Manager',
    2021: '',
    bio: 'Greetings, I am Divyanshu Khajuria, Senior Event Manager at ACES. With a passion for crafting unforgettable experiences, I am dedicated to orchestrating events that redefine ACES image and leave an indelible mark on the landscape of memorable moments. ',
    category: 'senior',
    linkedin: 'https://www.linkedin.com/in/divyanshu-khajuria-715961218',
    github: 'https://github.com/dk2655',
    instagram: 'https://instagram.com/divyanshu._.7?igshid=YTQwZjQ0NmI0OA==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324AS2303',
    name: 'Avitosh Sandve ',
    email: 'avitosh313@gmail.com',
    2023: 'Sr. External Affairs Officer',
    2022: '',
    2021: '',
    bio: '',
    category: 'senior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324NW2413',
    name: 'Nikhil Waghmode ',
    email: 'nick13waghmode@gmail.com',
    2023: 'Sr. External Affairs Officer',
    2022: 'Jr. ACES Representative',
    2021: '',
    bio: '',
    category: 'senior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324KA2506',
    name: 'Kirti Agarwal',
    email: 'kirtiagarwal.ka54@gmail.com',
    2023: 'Sr. Public Relations Officer',
    2022: 'Jr. Public Relations Officer',
    2021: '',
    bio: "I'm Kirti Agarwal, enthusiastic about public relations, and eager to utilize my communication skills as the Senior Public Relations Officer for the club. I am eager to build connections and enhance the club's presence.",
    category: 'senior',
    linkedin:
      'https://www.linkedin.com/in/kirti-agarwal-69729622b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'github.com/kirtiagarwal06',
    instagram:
      'https://instagram.com/kirtiagarwal0601?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr',
    twitter: '',
  },
  {
    membership_id: 'ACES2324YJ2625',
    name: 'Yash Jawale',
    email: 'yash25.j@gmail.com',
    2023: 'Sr. Technical Head',
    2022: 'Jr. Technical Head',
    2021: '',
    bio: '',
    category: 'senior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324PP2723',
    name: 'Prakhar Pandey',
    email: 'prakhar.p231@gmail.com',
    2023: 'Sr. Technical Head',
    2022: 'Jr. Technical Head',
    2021: '',
    bio: "Hello, I'm Prakhar Pandey, a tech enthusiast eager to lead as the Technical Head. I'm dedicated to using my tech skills to drive our club to new heights in innovation and development. Let's embark on this exciting journey together!",
    category: 'senior',
    linkedin: 'https://www.linkedin.com/in/prakhar-pandey-0a15651b4/',
    github: 'https://github.com/prakharpandey04',
    instagram: 'https://www.instagram.com/prakharpandey04',
    twitter: 'https://twitter.com/pandeyprakhar04',
  },
  {
    membership_id: 'ACES2324AS2802',
    name: 'Aryan Sharma',
    email: 'rajappr700@gmail.com',
    2023: 'Jr. Technical Head',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SR2924',
    name: 'Sarvesh Rasal',
    email: 'justanothersarvesh@gmail.com',
    2023: 'Jr. Technical Head',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324VB3005',
    name: 'Vaibhavi Bhardwaj',
    email: 'vaibhavibhardwaj5@gmail.com',
    2023: 'Jr. Technical Head',
    2022: '',
    2021: '',
    bio: "Hello there! I'm Vaibhavi Bhardwaj, currently serving as Jr. Technical Head in our club. I'm passionate about making a positive impact and working together to achieve our goals. Excited for the journey ahead! ",
    category: 'junior',
    linkedin: '',
    github: 'https://github.com/ivahbavi',
    instagram: 'https://instagram.com/ivaibhavii?igshid=NzZlODBkYWE4Ng==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324GS3125',
    name: 'Gunjan Sharma',
    email: 'gunjann127@gmail.com',
    2023: 'Jr. Public Relations Officer',
    2022: '',
    2021: '',
    bio: 'An ardent computer engineering student with a flair for effective communication, dedicated to bridging the gap between tech brilliance and public understanding as the Jr. Public Relations Officer. By cultivating a dynamic environment where innovation meets effective outreach, I strive to amplify our achievements and innovations with clarity and impact. Join me on the journey of transforming complex tech narratives into compelling stories for all to embrace.',
    category: 'junior',
    linkedin: 'https://www.linkedin.com/in/gunjan-sharma-1a579428a',
    github: 'https://github.com/GunjanSharma2004',
    instagram: 'https://instagram.com/_gunjann?igshid=MzMyNGUyNmU2YQ==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324DJ3230',
    name: 'Dhiren Joshi',
    email: 'dhirenjoshi2003@gmail.com',
    2023: 'Jr. Public Relations Officer',
    2022: '',
    2021: '',
    bio: 'Ambitious, inquisitive',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/dhiren-joshi-79500518a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/dhiren-joshi',
    instagram:
      'https://instagram.com/dhiren__joshi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SD3305',
    name: 'Sarthak Deokar',
    email: 'sarthakdeokar05@gmail.com',
    2023: 'Jr. External Affairs Officer',
    2022: '',
    2021: '',
    bio: ' enthusiastic about Finance,Marketing, Coding ',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/sarthak-deokar-622b86248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/ZizzleStark',
    instagram: 'https://instagram.com/_sarthakdeokar_?igshid=NzZlODBkYWE4Ng==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SS3410',
    name: 'Siddharth Singh',
    email: 'siddharthsingh.1004@gmail.com',
    2023: 'Jr. External Affairs Officer',
    2022: '',
    2021: '',
    bio: "As the External Affairs Officer at ACES, I'm passionate about building bridges and cultivating meaningful relationships. My role revolves around representing our club's values, initiatives, and impact beyond our immediate sphere.",
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/siddharth-singh-746a8a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Siddharthgitthub',
    instagram: 'https://instagram.com/siddharth__ig',
    twitter: '',
  },
  {
    membership_id: 'ACES2324VT3505',
    name: 'Vedant Takawane',
    email: 'vedantvtakawane@gmail.com',
    2023: 'Jr. External Affairs Officer',
    2022: '',
    2021: '',
    bio: "Fueling my engineering dreams with utmost passion,I'm all about infusing energy and enthusiasm into our club.Currently donning the hat of External Affairs Officer, I'm on a mission to bridge connections and foster collaboration within and beyond our community.Let's engineer some excitement together!",
    category: 'junior',
    linkedin: 'https://www.linkedin.com/in/vedant-takawane',
    github: '',
    instagram: 'https://instagram.com/ved.takawane',
    twitter: '',
  },
  {
    membership_id: 'ACES2324AJ3615',
    name: 'Aniket Jaitkar',
    email: 'aniketjaitkar1432@gmail.com',
    2023: 'Jr. Event Manager',
    2022: '',
    2021: '',
    bio: 'Hello Myself Aniket and I am always passionate to do my work with dedication. ',
    category: 'junior',
    linkedin: 'https://www.linkedin.com/in/aniket-jaitkar-5b009124b',
    github: 'https://github.com/LEARNER1432',
    instagram: 'https://www.instagram.com/a__n_i_k_e_t__',
    twitter: '',
  },
  {
    membership_id: 'ACES2324MG3729',
    name: 'Manaswini Govadia',
    email: 'manaswini.govadia@gmail.com',
    2023: 'Jr. Event Manager',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324NT3830',
    name: 'Nysa Thukral',
    email: 'nysathukral6@gmail.com',
    2023: 'Jr. Event Manager',
    2022: '',
    2021: '',
    bio: 'I write poetries and love listening to music',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/nysa-thukral-7657b920a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: '',
    instagram: 'instagram.com/heyaitsnysa',
    twitter: '',
  },
  {
    membership_id: 'ACES2324AP3903',
    name: 'Aditya Pawar',
    email: 'adityabpawar393@gmail.com',
    2023: 'Jr. Event Manager',
    2022: '',
    2021: '',
    bio: "I'm Aditya Pawar, a Computer Science enthusiast pursuing my Bachelor of Engineering. Proudly currently hold the role of Junior Events Manager at the Association of Computer Engineering Club in college. Excited to contribute and make a difference in every opportunity.",
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/aditya-pawar-3348aa257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/AdityaPawar6174',
    instagram:
      'https://instagram.com/aditya_b_pawar?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SS4029',
    name: 'Saee Shinde',
    email: 'saeeshinde5492@gmail.com',
    2023: 'Jr. Designer',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324VJ4114',
    name: 'Vihaan Jain',
    email: 'vihaanj8@gmail.com',
    2023: 'Jr. Designer',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SA4209',
    name: 'Shrimun Agarwal',
    email: 'agarwalshrimun@gmail.com',
    2023: 'Jr. Data Manager',
    2022: '',
    2021: '',
    bio: 'to infinity and beyond☄️',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/shrimun-agarwal-75728924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/shri-915',
    instagram:
      'https://www.linkedin.com/in/shrimun-agarwal-75728924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    twitter: '',
  },
  {
    membership_id: 'ACES2324PB4318',
    name: 'Prasanna Badgujar',
    email: 'prasannabadgujar963@gmail.com',
    2023: 'Jr. Data Manager',
    2022: '',
    2021: '',
    bio: "Hello, I'm Prasanna! With a calm and observant nature, I explore the realms of science and technology. In my role as a data manager in the team, I bring expertise in handling and managing data effectively. Alongside, I have a keen eye for photography, capturing life's moments. ",
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/prasanna-badgujar-3b1992251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: '',
    instagram: 'https://instagram.com/p.rasanna',
    twitter: '',
  },
  {
    membership_id: 'ACES2324MB4424',
    name: 'Madhura Bhagat',
    email: 'bhagatmadhura5@gmail.com',
    2023: 'Jr. Cultural Head',
    2022: '',
    2021: '',
    bio: '.',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/madhura-bhagat-35b2a1257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/13798-mad',
    instagram:
      'https://instagram.com/madhuraaaa_._?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SK4522',
    name: 'Shubham Khansare',
    email: 'shubhamkhansare2001@gmail.com',
    2023: 'Jr. Cultural Head',
    2022: '',
    2021: '',
    bio: 'Hi myself shubham khansare I am an engineering student in the computer science stream currently pursuing my second year at dr. Dy  Patil institute of technology, pune I am a motivated and energetic engineering student capable of working under pressure and delivering the best in any situation. ',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/shubham-khansare-478748257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Shubh-1a09',
    instagram: 'https://instagram.com/capt_shubh_07?igshid=OGQ5ZDc2ODk2ZA==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324MD4606',
    name: 'Maira Dharwal',
    email: 'mairad2004@gmail.com',
    2023: 'Jr. Cultural Head',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324JV4709',
    name: 'Jayesh Sanap',
    email: 'jayeshsanap10@gmail.com',
    2023: 'Jr. Cultural Head',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SP4816',
    name: 'Suraj Patil',
    email: 'surajpatil5228@gmail.com',
    2023: 'Jr. Content Creator',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324VJ4920',
    name: 'Vivek Janbandhu',
    email: 'vivekjanbandhu20@gmail.com',
    2023: 'Jr. Content Creator',
    2022: '',
    2021: '',
    bio: "It's me, Vivek. I will be serving as a Jr. Content Creator for this tenure and I like photography because it a beautiful way to capture our precious moments",
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/vivek-janbandhu-60a663259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: '',
    instagram: 'https://instagram.com/vivek_j.11?igshid=YTQwZjQ0NmI0OA==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SL5023',
    name: 'Sudhanshu Lawhare',
    email: 'lawhares@gmail.com',
    2023: 'Jr. Content Creator',
    2022: '',
    2021: '',
    bio: 'I am an football athlete on field and off with a creative mind in the realm of digital arts and animation, bringing imagination to life. An avid manga reader, delving into diverse worlds and narratives.',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/sudhanshu-lawhare-6a1074260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Shu-50',
    instagram: 'https://instagram.com/su.dhansh.u',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SM5126',
    name: 'Shruti Mare',
    email: 'shrutimare@gmail.com',
    2023: 'Jr. A.C.E.S. Representative',
    2022: '',
    2021: '',
    bio: 'I am a team player and enjoy collaborating with my peers to achieve common goals. I am also passionate about expanding my knowledge and developing new skills across various subject areas.',
    category: 'junior',
    linkedin: 'https://www.linkedin.com/in/shruti-mare-b53297272',
    github: 'https://github.com/ShrutiMare',
    instagram: 'https://instagram.com/shruti.mare?igshid=YTQwZjQ0NmI0OA==',
    twitter: '',
  },
  {
    membership_id: 'ACES2324GR5216',
    name: 'Gauri Rohadkar',
    email: 'rohadkarg@gmail.com',
    2023: 'Jr. A.C.E.S. Representative',
    2022: '',
    2021: '',
    bio: 'Passionate and innovative individual with a global mindset, seamlessly blending analytical thinking with a collaborative spirit. Committed to constant growth and driven by purpose, I bring a dynamic approach to every endeavor, creating positive impact with a touch of creativity.',
    category: 'junior',
    linkedin: 'https://www.linkedin.com/in/gauri-rohadkar-785a3b28a',
    github: 'https://github.com/GauriRohadkar16',
    instagram: 'https://www.instagram.com/__glouryyyy__/',
    twitter: '',
  },
  {
    membership_id: 'ACES2324SS5315',
    name: 'Shone Sengupta',
    email: 'riju1584@gmail.com',
    2023: 'Jr. A.C.E.S. Representative',
    2022: '',
    2021: '',
    bio: '',
    category: 'junior',
    linkedin: '',
    github: '',
    instagram: '',
    twitter: '',
  },
  {
    membership_id: 'ACES2324TB5406',
    name: 'Tulsi Borse',
    email: 'tulsiborse21@gmail.com',
    2023: 'Jr. A.C.E.S. Representative',
    2022: '',
    2021: '',
    bio: 'I am very passionate about everything I do and not afraid to face any challenge!',
    category: 'junior',
    linkedin:
      'https://www.linkedin.com/in/tulsi-borse-77818b245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Triborse',
    instagram: 'https://instagram.com/tulsii.borse',
    twitter: '',
  },
]

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function Members() {
  // console.log(testMembers[0].email)
  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  let currentIndex = 0
  let MAX_INDEX = 53

  const clickHandler = () => {
    console.log('TRIGGERED')
    // createMember({
    //   _type: 'member',
    //   name: 'John doe',
    //   slug: { current: slugify('John doe') },
    //   email: 'john@doe.com',
    //   membershipId: 'ACESJFOD',
    //   clubPosts: [
    //     { position: 'Junior Head', category: 'junior', year: '2023-01-01' },
    //   ],
    // })

    // const finalList = [] // For debugging

    //---

    // finalMembers.forEach((member) => {
    //   let obj = {}
    //   obj['_type'] = 'member'
    //   obj['_id'] = 'drafts.'
    //   obj.name = member.name.trim()
    //   obj.slug = { current: slugify(obj.name) }
    //   obj.email = member.email.trim()
    //   obj.membershipId = member.membership_id.trim().toUpperCase()
    //   obj.clubPosts = []
    //   member['2023'] !== '' &&
    //     obj.clubPosts.push({
    //       position: member['2023'],
    //       category: member.category,
    //       tenure: '2023',
    //     })
    //   member['2022'] !== '' &&
    //     obj.clubPosts.push({
    //       position: member['2022'],
    //       category: member.category,
    //       tenure: '2022',
    //     })
    //   member['2021'] !== '' &&
    //     obj.clubPosts.push({
    //       position: member['2021'],
    //       category: member.category,
    //       tenure: '2021',
    //     })

    //   if (member['bio'] !== '') obj.bio = member.bio.trim()

    //   obj.socials = {}
    //   if (member['twitter'] !== '')
    //     obj.socials.x = member.twitter.trim().split('?')[0]
    //   if (member['instagram'] !== '')
    //     obj.socials.instagram = member.instagram.trim().split('?')[0]
    //   if (member['linkedin'] !== '')
    //     obj.socials.linkedIn = member.linkedin.trim().split('?')[0]
    //   if (member['github'] !== '')
    //     obj.socials.github = member.github.trim().split('?')[0]

    //   // finalList.push(obj) // For debugging

    //   console.log(obj)
    // })
    //---
    // console.log(finalList)

    // createMember(finalList[0]) // For debugging

    setInterval(() => {
      if (currentIndex <= MAX_INDEX) {
        // console.log(finalMembers[currentIndex])

        let member = finalMembers[currentIndex]

        let obj = {}
        obj['_type'] = 'member'
        obj['_id'] = 'drafts.'
        obj.name = member.name.trim()
        obj.slug = { current: slugify(obj.name) }
        obj.email = member.email.trim()
        obj.membershipId = member.membership_id.trim().toUpperCase()
        obj.clubPosts = []
        member['2023'] !== '' &&
          obj.clubPosts.push({
            position: member['2023'],
            category: member.category,
            tenure: '2023',
          })
        member['2022'] !== '' &&
          obj.clubPosts.push({
            position: member['2022'],
            category: member.category,
            tenure: '2022',
          })
        member['2021'] !== '' &&
          obj.clubPosts.push({
            position: member['2021'],
            category: member.category,
            tenure: '2021',
          })

        if (member['bio'] !== '') obj.bio = member.bio.trim()

        obj.socials = {}
        if (member['twitter'] !== '')
          obj.socials.x = member.twitter.trim().split('?')[0]
        if (member['instagram'] !== '')
          obj.socials.instagram = member.instagram.trim().split('?')[0]
        if (member['linkedin'] !== '')
          obj.socials.linkedIn = member.linkedin.trim().split('?')[0]
        if (member['github'] !== '')
          obj.socials.github = member.github.trim().split('?')[0]

        // console.log(obj)
        createMember(obj)

        currentIndex++
      }
      if (currentIndex > MAX_INDEX) {
        console.log('FINISHED at index ', currentIndex)
      }
    }, 3000)
  }

  return (
    <>
      <Header title="Testing button" />
      <div className="flex items-center justify-center p-48">
        <button className="btn-primary" onClick={clickHandler}>
          Send request
        </button>
      </div>
    </>
  )
}

export default Members
