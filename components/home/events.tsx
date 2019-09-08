import React from 'react';
import Event from './event';

const Events = () => {
    // TODO: to get from API
    const eventsData = [
        {
            img: 'https://images.unsplash.com/photo-1483043012503-8a8849b4c949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Card image cap',
            title: 'Week of Prayer',
            date: 'December 15-21',
            description: 'This is the confidence we have in approaching God: that if we ask anything according to his will,he hears us. (1 John 5:14)',
        },
        {
            img: 'https://images.unsplash.com/photo-1521711351625-637d5a0da146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Card image cap',
            title: 'Christian Home and Marriage Week',
            date: 'February 9–16',
            description: 'Husbands, love your wives, just as Christ loved the church and gave himself up for her. (Ephesians 5:25)',
        },
        {
            img: 'https://images.unsplash.com/photo-1489450278009-822e9be04dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Card image cap',
            title: 'Health Emphasis',
            date: 'December 8th',
            description: 'Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well. (3 John 1:2)',
        },
    ];

    return (
        <section>
            <h2 id='events' className='text-center title'>Events</h2>
            <div id='event-cards' className='card-deck'>
                { 
                    eventsData.map(e => (
                        <Event 
                            img={e.img}
                            alt={e.alt}
                            title={e.title}
                            description={e.description}
                            date={e.date}
                            key={e.title}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Events;
