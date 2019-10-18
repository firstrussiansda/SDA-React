import React from 'react';

const AudioEmbed: React.FunctionComponent<{ trackId: string }> = ({ trackId }) => (
    <iframe
        width='100%'
        height='166'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=true&hide_related=true`}
    />
);

export default AudioEmbed;
