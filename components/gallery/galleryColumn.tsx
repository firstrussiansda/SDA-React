import React from 'react';

interface GalleryColumnProps {
    images: {
        src: string;
        alt: string;
    }[];
}

const GalleryColumn: React.FunctionComponent <GalleryColumnProps> = ({ images }) => (
    <div className=' img column'>
        { images.map((img, i) => <img src={img.src} alt={img.alt} key={i} className='gallery-img' />) }
    </div>
);

export default GalleryColumn;
