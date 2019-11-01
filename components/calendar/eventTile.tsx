import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/interfaces';
import { getDefaultImage, getDate } from '../../lib/helpers';

interface EventTileProps extends Event, WithTranslation {}

class EventTile extends React.Component<EventTileProps, { image_url: string }> {
    constructor(props: EventTileProps) {
        super(props);
        this.state = {
            image_url: '',
        };
    }

    componentDidMount() {
        this.setState({ image_url: this.props.image_url || getDefaultImage('event') });
    }

    render() {
        return (
            <div className='card mb-3 calendar-tile'>
                <div className='row no-gutters'>
                    <div className='col-md-2 d-flex flex-column align-items-center justify-content-center'>
                        <h5>{getDate(this.props.date, ['month', 'day'], this.props.i18n.language)}</h5>
                        <h6 className='card-text'>{this.props.location_name}</h6>
                    </div>
                    <div className='col-md-7 d-flex align-items-center'>
                        <div className='card-body'>
                            <h5 className='card-title'>{this.props.title}</h5>
                            <p className='card-text'>{this.props.description}</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img
                            className='card-img'
                            src={`${this.state.image_url}w=320&q=80`}
                            alt={this.props.image_description}
                            srcSet={`
                                ${this.state.image_url}w=320&q=80 1023w,
                                ${this.state.image_url}w=260&q=80 1365w,
                                ${this.state.image_url}w=320&q=80 5000w
                            `}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default EventTile;
