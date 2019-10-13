import React from 'react';
import GalleryColumn from '../components/gallery/galleryColumn';

import { initialPropsFetch } from '../lib/helpers';

interface ImgMeta {
    width: number;
    height: number;
    url: string;
}
export interface InstImage {
    images: {
        thumbnail: ImgMeta;
        low_resolution: ImgMeta;
        standard_resolution: ImgMeta;
    };
    created_time: number;
    caption: {
        text: string;
    };
    link: string;
}

class Gallery extends React.Component<{ images: InstImage[][], nextMaxId: string }> {
    static async getInitialProps({ req }: any) {
        const images = await initialPropsFetch('images', req);

        if (images && 'data' in images) {
            return { images: images.data, namespacesRequired: ['common'] };
        }
        return { images: [], nextMaxId: images.nextMaxId,  namespacesRequired: ['common'] };
    }

    render() {
        return (
            <div className='container'>
                <section className='gallery row'>
                    {this.props.images.map((images, i) => <GalleryColumn images={images} key={i} />)}
                </section>
            </div>
        );
    }
}

export default Gallery;
