import React from 'react';
import { VideosProps } from './videoTab';
import CarouserIndicators from '../shared/carouserIndicators';

const MobileEmbedWrapper: React.FunctionComponent<VideosProps> = ({ videos }) => (
    <div id='carousel-videos' className='carousel slide carousel-fade' data-ride='carousel'>
        < CarouserIndicators size={videos.length} dataTarget='#carousel-videos' />
        <div className='carousel-inner'>
            {videos.map((src, i) => (
                <div key={`${src}${i}`} className={`carousel-item ${i === 0 && 'active'} `}>
                    <iframe
                        className='video-container'
                        src={src}
                        frameBorder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen={true}
                    />
                </div>
            ))}
            <a className='carousel-control-prev' href='#carousel-videos' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true' />
                <span className='sr-only'>Previous</span>
            </a>
            <a className='carousel-control-next' href='#carousel-videos' role='button' data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true' />
                <span className='sr-only'>Next</span>
            </a>
        </div>
    </div>
);

export default MobileEmbedWrapper;
