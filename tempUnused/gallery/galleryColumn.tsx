import React from 'react';
import { InstImage } from './gallery';
interface GalleryColumnProps {
    images: InstImage[];
}

const GalleryColumn: React.FunctionComponent<GalleryColumnProps> = ({
    images,
}) => (
    <span className="img column">
        {images.map((img, i) => (
            <a href={img.link} key={img.link}>
                <img
                    src={img.images.standard_resolution.url}
                    alt="Image form instagram"
                    className="gallery-img"
                />
            </a>
        ))}
    </span>
);

export default GalleryColumn;
