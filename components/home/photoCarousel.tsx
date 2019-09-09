import React from 'react';
import PhotoCarouselItem from './photoCarouselItem';
import CarouserIndicators from '../shared/carouserIndicators';

const PhotoCarousel = () => {
    const images = [
        {
            img: 'https://images.unsplash.com/photo-1480388198291-d071e45ee9ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa93e7653d0429bddbe45e2029dd042b&auto=format&fit=crop&w=2250&q=80',
            alt: 'First slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum placeat, possimus accusamus, odit debitis voluptates dolorem odio ab dolor pariatur autem necessitatibus tempora suscipit mollitia consequatur ratione ut, consectetur corporis.',
        },
        {
            img: 'https://images.unsplash.com/photo-1528222354212-a29573cdb844?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41de6aeb3c49d4b425fef4af02a09f30&auto=format&fit=crop&w=2100&q=80',
            alt: 'Second slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum placeat, possimus accusamus, odit debitis voluptates dolorem odio ab dolor pariatur autem necessitatibus tempora suscipit mollitia consequatur ratione ut, consectetur corporis.',
        },
        {
            img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d588b2edb01723fde4cd6a9fee02f9f9&auto=format&fit=crop&w=2250&q=80',
            alt: 'Third slide',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum placeat, possimus accusamus, odit debitis voluptates dolorem odio ab dolor pariatur autem necessitatibus tempora suscipit mollitia consequatur ratione ut, consectetur corporis.',
        },
    ];

    return (
        <section id='photo-block' className='mt-5'>
            <div id='carousel' className='carousel slide carousel-fade' data-ride='carousel'>
                { <CarouserIndicators size={images.length} dataTarget='#carousel' /> }

                <div className='carousel-inner'>
                    {
                        images.map((image, i) => (
                            <PhotoCarouselItem
                                img={image.img}
                                alt={image.alt}
                                description={image.description}
                                isActive={i === 0}
                                key={image.alt}
                            />
                        ))
                    }

                </div>
                <a className='carousel-control-prev' href='#carousel' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' />
                    <span className='sr-only'>Previous</span>
                </a>
                <a className='carousel-control-next' href='#carousel' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' />
                    <span className='sr-only'>Next</span>
                </a>
            </div>
        </section>
    );
};

export default PhotoCarousel;
