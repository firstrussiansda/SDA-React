import React from 'react';
import KeyMissionComponent from './keyMissionComponent';

const KeyMissionComponents = () => {
    const items = [
        {
            img: 'https://images.unsplash.com/photo-1504257365157-1496a50d48f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Statue of a boy who is trying to reach the sky',
            title: 'reach',
            description: `
                Christ's method of discipling is our model for reaching people. "The Savior mingled with men as,
                one who desired their good. He showed His sympathy for them, ministered to their needs, and -
                won their confidence. Then He bade them, "Follow Me." Ministry of Healing p. 143
            `,
        },
        {
            img: 'https://images.unsplash.com/photo-1495435798646-a289417ece44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Tiny plant is growing in a desert',
            title: 'hope',
            description: `
                Our Church has been charged to reach the world with a distinctive message. It is a message
                illustrated by Sanctuary truths, modeled in the life of Christ, communicated by the prophets
                throughout the ages, and succinctly expressed in the Three Angel's Messages of Revelation 14:6-
                12. This special, Christ-centered message, points prophetically to His second coming-a concept
                that is etched in our very name, Seventh-day Adventists!
            `,
        },
        {
            img: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Sun light in the forest',
            title: 'wholeness',
            description: `
                Our distinctive, Christ-centered message not only points toward the future-it adds "more
                abundant life" to the present! Hundreds of scientific studies have confirmed the benefits of our
                Adventist message of health of body, mind, and spirit. Sabbath rest nourishes the soul. Our ideas
                of education and (Social Responsibilities) involve the harmonious development of the
                whole person-physical, mental, spiritual, social-extending from life on this earth to eternity.
            `,
        },
    ];

    return (
        <section id='mission-components'>
            <h2 className='title text-xxl m-b text-center'>Key Mission Components</h2>
            <div className='card-deck'>
                { items.map(item => <KeyMissionComponent {...item} key={item.title} />) }
            </div>
        </section>
    );
};

export default KeyMissionComponents;
