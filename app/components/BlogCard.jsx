'use client'
import React from "react";

const BlogCard = ({title, imageURL, description, creationDate, linkTo}) => {
    return (
        <div className='w-1/4 h-fit rounded-2xl bg-cyan-50 flex flex-col overflow-hidden border-2 border-gray-950 justify-between'>
            <div className='h-[50%] w-[100%] overflow-hidden'>
                <a href={linkTo}>
                <img src={imageURL} className='h-[100%] w-[100%]' alt='just some image for a blog'/>
                </a>
            </div>
            <div className='pt-2 pb-1 px-2'>
                <a href={linkTo}>
                <h2 className='text-3xl font-bold uppercase tracking-tight'>{title}</h2>
                </a>
            </div>
            <div className='pt-0 pb-2 px-2'>
                <p className='font-medium tracking-tight text-base'>{description}</p>
            </div>
            <div className='pt-0 px-2 pb-2'>
                <p className='font-medium text-base'>{creationDate}</p>
            </div>
        </div>
    )
}
const BlogPage = () => {
    return (
        <div className='w-[95vw] mt-4 mx-auto flex align-middle justify-center'>
            <BlogCard title='Why You Should Stare At Rocks'
                      description='Whereas disregard and contempt for human rights have resulted'
                      creationDate='29th February 2023'
                      imageURL='https://picsum.photos/400/300.jpg'
                      linkTo='about:blank'/>
        </div>
    )
}

export default BlogPage;