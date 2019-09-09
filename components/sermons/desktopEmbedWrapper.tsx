import React from 'react';

import { VideosProps } from './videoTab';

interface DesktopEmbedWrapperProps extends VideosProps {
    mainVideo: string;
}

const DesktopEmbedWrapper: React.FunctionComponent<DesktopEmbedWrapperProps> = ({ videos, mainVideo }) => (
    <div id='video-wrapper'>
        <iframe
            className='playlist-container'
            src={mainVideo}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen={true}
        />
        <h3 className='title text-center pb-3'>Featured Sermons</h3>
        <div className='row justify-content-md-center'>
            {
                videos.map((src, i) => (
                    <div key={`${src}${i}`} className='col-md-3 pl-1 pr-1'>
                        <iframe
                            className='video-container'
                            src={src}
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen={true}
                        />
                    </div>
                ))
            }
        </div>
    </div>
);

export default DesktopEmbedWrapper;
