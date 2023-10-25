'use client'

import React, {useState} from 'react';

// This is a component for an individual event card
const EventCard = ({ title, imageUrl, linkTo }) => {
    // State to track if the card is being hovered over
    const [hovered, setHovered] = useState(false);

    // Styles for the card
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0px 20px 20px 20px',
        color: 'white',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'scale(1.05) rotate(1deg)' : 'scale(1)',
        boxShadow: hovered ? '0 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
        cursor: 'pointer',
        minHeight: '40vh',
    };

    // Handlers for mouse enter and leave events
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    // Handler for click event on the card
    const handleClick = () => {
        if (linkTo) {
            window.location.href = linkTo;
        }
    };

    return (
        <div
            style={cardStyle}
            className='rounded-2xl w-[80vw] md:w-[100%]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <h2 className='font-bold text-4xl text-center'>{title}</h2>
        </div>
    );
};

// This is a wrapper component for the section containing all event cards
const EventSectionWrapper = ({ eventCards = [] }) => {
    return (
        <div className='pb-4 pt-0 px-4 w-full h-full'>

            <div className='flex relative md:justify-between md:mt-0 md:mb-4 md:items-center'>
                <div className='translate-y-[-2%] text-center w-[100%] md:w-fit'>
                    <p className='text-[#7D111C] text-4xl font-bold uppercase tracking-tighter leading-none'>Events</p>
                </div>
                <div className='h-fit w-fit absolute top-[50%] right-[0%] translate-y-[-47%] collapse md:visible'>
                    <button className='px-4 rounded-xl bg-amber-400 text-[1.1rem] py-2'>Explore All</button>
                </div>
            </div>

            <div
                className='gap-6 grid grid-cols-1 md:grid-cols-3 md:h-full h-fit'>
                {eventCards.map((event, index) => (
                    <EventCard
                        key={index}
                        imageUrl={event.imageUrl}
                        title={event.title}
                        linkTo={event.linkTo}
                    />
                ))}
            </div>

            <div className='h-fit w-[100%] visible mt-4 flex justify-center items-center md:collapse'>
                <button className='px-4 rounded-xl bg-amber-400 text-[1.1rem] py-2'>Explore All</button>
            </div>
        </div>
    );
};

// This is the main component for the event section
const Event_Section = () => {
    // Data for the event cards
    const eventData = [
        {
            imageUrl: 'https://picsum.photos/900/300.jpg',
            title: 'Acunetix 10.0',
            linkTo: 'about://blank',
        },
        {
            imageUrl: 'https://picsum.photos/900/300.jpg',
            title: 'Event 2',
            linkTo: 'about://event2',
        },
        {
            imageUrl: 'https://picsum.photos/900/300.jpg',
            title: 'Event 3',
            linkTo: 'about://event2',
        },
    ]

    return (
        <div className='px-20 mt-10'>
            <EventSectionWrapper eventCards={eventData}></EventSectionWrapper>
        </div>
    )
}

export default Event_Section;
