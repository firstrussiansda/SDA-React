import React from 'react';
// import { withTranslation } from '../i18n';
import { WithTranslation } from 'react-i18next';
import GalleryColumn from '../components/gallery/galleryColumn';

import { initialPropsFetch, chunkArray } from '../lib/helpers';

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

interface GalleryProps extends WithTranslation {
    images: InstImage[];
}

class Gallery extends React.Component<GalleryProps> {
    static async getInitialProps({ req }: any) {
        const images = await initialPropsFetch('images', req) || {};

        if (images && 'data' in images) {
            return { images: images.data, namespacesRequired: ['common'] };
        }
        return { images: [], namespacesRequired: ['common'] };
    }

    // TODO: modify the order to present ordered by the latest
    render() {
        const chunkedImages = chunkArray([...this.props.images], 4);
        return (
            <div className='container'>
                <h1 className='title text-xxxl m-b-sm m-t-sm text-center pt-3'>Gallery</h1>
                <section className='gallery row'>
                    {chunkedImages.map((images, i) => <GalleryColumn images={images} key={i} />)}
                </section>
            </div>
        );
    }
}

// export default withTranslation('gallery')(Gallery);
export default Gallery;
