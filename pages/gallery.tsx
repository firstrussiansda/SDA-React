import React from 'react';
// import { withTranslation } from '../i18n';
import { WithTranslation } from 'react-i18next';
import GalleryColumn from '../components/gallery/galleryColumn';

class Gallery extends React.Component<WithTranslation> {
    randomImages = [
        [
            {
                src: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1515615424560-27cdb10de410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1536603522264-0f2269f1e374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
                alt: 'some alt text',
            },
        ],
        [
            {
                src: 'https://images.unsplash.com/photo-1480388198291-d071e45ee9ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1536603522264-0f2269f1e374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1536603522264-0f2269f1e374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1473122430480-d00e6dd25ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
        ],
        [
            {
                src: 'https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1536603522264-0f2269f1e374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1508691345478-73b1e0352e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
        ],
        [
            {
                src: 'https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1508985307703-52d13b2b06b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
                alt: 'some alt text',
            },
            {
                src: 'https://images.unsplash.com/photo-1473122430480-d00e6dd25ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                alt: 'some alt text',
            },
        ],
    ];

getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

render() {
    return (
        <div className='container'>
            <h1 className='title text-xxxl m-b-sm m-t-sm text-center pt-3'>Gallery</h1>
            <script async={true} src='https://snapwidget.com/js/snapwidget.js' />
            <iframe
                src='https://snapwidget.com/embed/637264'
                className='snapwidget-widget'
                allowTransparency={true}
                frameBorder='0'
                scrolling='no'
            />
            <div className='gallery row'>
                { this.randomImages.map((images, i) => <GalleryColumn images={images} key={i} />) }
            </div>
        </div>
    );
}
}

// export default withTranslation('gallery')(Gallery);
export default Gallery;
