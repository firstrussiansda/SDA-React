import React from 'react';
// import { withTranslation } from '../i18n';
import { WithTranslation } from 'react-i18next';
import GalleryColumn from '../components/gallery/galleryColumn';

import { baseUrl } from '../config/index';

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
        let images = [];

        // TODO: move into a separate shared function
        // server side
        try {
            if (req) {
                const fetch = require('node-fetch');
                const uri = `${baseUrl}/api/images`;
                const response = await fetch(uri);
                const json = await response.json();
                images = json.data || [];
            } else {
                // client side
                const uri = `/api/images`;
                const response = await fetch(uri);
                const json = await response.json();
                images = json.data || [];
            }

            return { images, namespacesRequired: ['common'] };
        } catch (e) {
            if (process.env.NODE_ENV !== 'production') {
                // tslint:disable-next-line:no-console
                console.log(e);
            } else {
                // tslint:disable-next-line:no-console
                console.log('Error occurred while fetching events =(');
            }
            return { images: [], namespacesRequired: ['common'] };
        }
    }

    // TODO: modify the order to present ordered by the latest
    // TODO: add img srcset
    chunkArray(array: InstImage[], chunk_size: number) {
        const results = [];

        while (array.length) {
            results.push(array.splice(0, chunk_size));
        }

        return results;
    }

    render() {
        const chunkedImages = this.chunkArray([...this.props.images], 4);
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
