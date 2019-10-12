import React from 'react';

import { Event } from '../../lib/interfaces';
import { getDefaultImage } from '../../lib/helpers';

class EventTile extends React.Component<Event, { image_url: string }> {
    constructor(props: Event) {
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
            <div className='card'>
                <div className='card-body'>
                    {
                        this.state.image_url &&
                        <img
                            className='card card-img-top'
                            src={`${this.state.image_url}w=320&q=80`}
                            alt={this.props.image_description}
                            srcSet={`
                            ${this.state.image_url}w=320&q=80 1023w,
                            ${this.state.image_url}w=260&q=80 1365w,
                            ${this.state.image_url}w=320&q=80 5000w
                        `}
                        />
                    }
                    <h5 className='card-title'>{this.props.title}</h5>
                    <h6 className='card-date'>{this.props.date}</h6>
                    <h6 className='card-date'>{this.props.location_name}</h6>
                    <p className='card-text'>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default EventTile;
