import { WithTranslation } from 'react-i18next';
import React from 'react';

import { HeaderLocale } from '../../components/shared/Header.component';
import { withTranslation } from '../../i18n';
import { fetchData } from '../../lib/helpers';

import GalleryColumn from './galleryColumn';

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
    images: InstImage[][];
    nextMaxId: string;
}

class Gallery extends React.Component<GalleryProps> {
    static async getInitialProps({ req }: any) {
        const images = await fetchData('images', req);

        if (images && 'data' in images) {
            return { images: images.data, namespacesRequired: ['common'] };
        }
        return { images: [], nextMaxId: images.nextMaxId,  namespacesRequired: ['common'] };
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center capitalize my-3'>
                    {this.props.t<HeaderLocale>('header', { returnObjects: true }).gallery}
                </h1>
                <section className='gallery row'>
                    {this.props.images.map((images, i) => <GalleryColumn images={images} key={i} />)}
                </section>
            </div>
        );
    }
}

export default withTranslation('common')(Gallery);
