import React from 'react';
import KeyMissionComponentTile from './keyMissionComponentTile';

interface KeyMissionComponentsProps {
    title: string;
    components: { title: string; text: string }[];
}

const KeyMissionComponents: React.FunctionComponent<KeyMissionComponentsProps> = props => {
    const componentImages = [
        {
            img: 'https://images.unsplash.com/photo-1504257365157-1496a50d48f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Statue of a boy who is trying to reach the sky',
        },
        {
            img: 'https://images.unsplash.com/photo-1495435798646-a289417ece44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Tiny plant is growing in a desert',
        },
        {
            img: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
            alt: 'Sun light in the forest',
        },
    ] as { img: string; alt: string }[];

    if (!Array.isArray(props.components)) {
        return null;
    }

    return (
        <section id='mission-components'>
            <h2 className='title text-xxl m-b text-center'>{props.title}</h2>
            <div className='card-deck'>
                {
                    props.components.map((item, idx) => (
                        <KeyMissionComponentTile
                            {...item}
                            img={componentImages[idx].img}
                            alt={componentImages[idx].alt}
                            key={item.title}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default KeyMissionComponents;
