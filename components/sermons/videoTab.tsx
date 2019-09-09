import React from 'react';

import DesktopEmbedWrapper from './desktopEmbedWrapper';
import MobileEmbedWrapper from './mobileEmbedWrapper';

export interface VideosProps {
    videos: string[];
}

interface VideoTabState {
    isMobile: boolean;
}

class VideoTab extends React.Component<any, VideoTabState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isMobile: true,
        };
    }

    // TODO: Put proper videos
    featuredVideos = [
        'https://www.youtube.com/embed/RceKoQQlf_o',
        'https://www.youtube.com/embed/RceKoQQlf_o',
        'https://www.youtube.com/embed/RceKoQQlf_o',
        'https://www.youtube.com/embed/RceKoQQlf_o',
    ];
    mainVideo = 'https://www.youtube.com/embed?listType=playliBt&list=PL590L5WQmH8cFju_gCina9SlXwOjYgZns&showinfo=1';

    updatePredicate = () => {
        this.setState({ isMobile: window.innerWidth < 768 });
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    }

    render() {
        return (
            <div className='container'>
                <section className='row justify-content-center'>
                    <h3 className='title text-center pb-3'>Watch All Sermons</h3>

                    {
                        this.state.isMobile
                            ? <MobileEmbedWrapper videos={this.featuredVideos} />
                            : <DesktopEmbedWrapper videos={this.featuredVideos} mainVideo={this.mainVideo} />
                    }

                </section>
            </div>
        );
    }
}

export default VideoTab;
