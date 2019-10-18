import React from 'react';

const VideoEmbed: React.FunctionComponent<{ objectId: string }> = ({ objectId }) => (
    <div className='embed-responsive embed-responsive-16by9'>
        <iframe
            className='playlist-container'
            src={`https://www.youtube.com/embed/${objectId}?autoplay=1`}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true}
        />
    </div>
);

export default VideoEmbed;
