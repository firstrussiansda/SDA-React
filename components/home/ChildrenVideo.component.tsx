import Container from 'react-bootstrap/Container';
import { WithTranslation } from 'react-i18next';
import React from 'react';

import './ChildrenVideo.style.scss';

export function ChildrenVideo({ t }: WithTranslation) {
    return (
        <div className="component-children-video">
            <Container>
                <div className="content">
                    <div className="text">
                        <h2 className="title text-center">
                            {t('childrenVideo.title')}
                        </h2>
                        <blockquote className="blockquote">
                            <h5>&quot;{t('childrenVideo.quote')}&quot;</h5>
                            <footer className="blockquote-footer">
                                {t('childrenVideo.quoteFooter')}
                            </footer>
                        </blockquote>
                    </div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/w2Qslw9vqhQ"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                    />
                </div>
            </Container>
        </div>
    );
}
