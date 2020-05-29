import Container from 'react-bootstrap/Container';
import { WithTranslation } from 'react-i18next';
import React from 'react';

import './ChildrenVideo.style.scss';

interface ChildrenVideoLocales {
    title: string;
    quote: string;
    quoteFooter: string;
}

export function ChildrenVideo({ t }: WithTranslation) {
    const localizedText = t<ChildrenVideoLocales>('childrenVideo', { returnObjects: true });

    return (
        <div className='component-children-video'>
            <Container>
                <div className='content'>
                    <div className='text'>
                        <h2 className='title text-center'>{localizedText.title}</h2>
                        <blockquote className='blockquote'>
                            <h5>&quot;{localizedText.quote}&quot;</h5>
                            <footer className='blockquote-footer'>{localizedText.quoteFooter}</footer>
                        </blockquote>
                    </div>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/w2Qslw9vqhQ'
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen={true}
                    />
                </div>
            </Container>
        </div>
    );
}
