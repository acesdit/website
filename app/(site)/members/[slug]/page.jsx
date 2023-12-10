import Image from 'next/image'
import Link from 'next/link'
import BreadCrumb from '../../components/BreadCrumb'
import {FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import {getMember} from "@/sanity/lib/client";
import {urlForImage} from "@/sanity/lib/image";

async function Member({params}) {
    const member = await getMember(params.slug)
    console.log(member.clubPosts)

    if (!member) {
        return <h1>Member not found</h1>
    }

    return (
        <>
            <BreadCrumb
                parent="Members"
                parentLink="/members"
                child={member.name}
            />
            <div className="container mx-auto p-4 md:px-6 flex flex-col md:flex-row gap-8 py-16 lg:py-24">
                <div className='md:w-1/3 flex flex-col items-center'>
                    <Image
                        className="rounded-full border-2 p-1 border-primary transition-all w-[80%]"
                        src={member.image ? urlForImage(member.image).width(360).height(360).url() : 'https://picsum.photos/360/360'}
                        width={600}
                        height={600}
                        alt={member.name}
                    />
                </div>
                <div className='md:w-2/3 flex flex-col justify-center gap-6'>
                    <h2 className="font-title uppercase font-semibold text-primary text-3xl leading-none">{member.name}</h2>

                    {member.bio && <p>
                        {member.bio}
                    </p>
                    }

                    <div className='flex flex-col gap-3'>
                        {member.clubPosts.map(post => (<div
                            key={post.tenure}
                            className='flex items-center gap-3 bg-beige w-fit px-5 py-3 rounded-xl text-base'><span
                            className='font-title font-medium pr-3 border-r-2 border-primary text-primary text-xl'>{post.tenure}</span>
                            {post.position}
                        </div>))}
                    </div>
                    <div
                        className='text-2xl flex gap-5 [&>*]:text-primary [&>*]:p-2 [&>*]:border-2 [&>*]:border-primary [&>*]:rounded-full [&>*:hover]:text-white [&>*:hover]:bg-primary [&>*]:transition-colors'>
                        {member.socials.linkedIn && <Link target='_blank' href={member.socials.linkedIn}>
                            <FaLinkedinIn/>
                        </Link>}
                        {member.socials.github && <Link target='_blank' href={member.socials.github}>
                            <FaGithub/>
                        </Link>}
                        {member.socials.x && <Link target='_blank' href={member.socials.x}>
                            <FaXTwitter/>
                        </Link>}
                        {member.socials.instagram && <Link target='_blank' href={member.socials.instagram}>
                            <FaInstagram/>
                        </Link>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Member
