import React from 'react';
import { WithTranslation } from 'react-i18next';
import { Sermon } from '../lib/interfaces';
import { fetchInitialProps } from '../lib/helpers';
import SermonTile from '../components/sermons/sermonTile';
import VideoEmbed from '../components/sermons/videoEmbed';

interface SermonsProps extends WithTranslation {
    data: {
        results: Sermon[];
        previous: null | string;
        next: null | string;
    };
}

interface SermonsState {
    sermons: Sermon[];
    page: number;
    next: null | string;
    previous: null | string;
    activeVideo: null | number;
}

class Sermons extends React.Component<SermonsProps, SermonsState> {
    private videoPlayerRef: React.RefObject<HTMLSpanElement>;

    constructor(props: SermonsProps) {
        super(props);

        this.videoPlayerRef = React.createRef();

        this.state = {
            sermons: [],
            page: 1,
            next: null,
            previous: null,
            activeVideo: null,
        };

    }
    static async getInitialProps({ req }: any) {
        const data = await fetchInitialProps('sermons', req);
        return { data, namespacesRequired: ['home'] };
    }

    componentDidMount() {
        const { results, previous, next } = this.props.data;
        this.setState({ sermons: results, previous, next });
    }

    setActiveVideo = (activeVideo: number) => {
        this.setState({ activeVideo });
    }

    scrollToVideoPlayer = () => {
        if (this.videoPlayerRef.current) {
            window.scrollTo(0, this.videoPlayerRef.current.offsetTop);
        }
    }

    render() {
        const { sermons, activeVideo } = this.state;
        return (
            <div className='container sermons-page'>
                <span ref={this.videoPlayerRef} />
                <h1 className='text-center'>Sermons</h1>
                {
                    activeVideo !== null &&
                    <VideoEmbed objectId={sermons[activeVideo].youtube_assets[0].object_id} />
                }
                {
                    sermons.map((sermon, i) => (
                        <SermonTile
                            sermon={sermon}
                            key={sermon.id}
                            videoIsActive={i === activeVideo}
                            setActiveVideo={this.setActiveVideo}
                            scrollToVideo={this.scrollToVideoPlayer}
                            index={i}
                        />
                    ))
                }
            </div>
        );
    }
}

// export default withTranslation('sermons')(Sermons);
export default Sermons;
