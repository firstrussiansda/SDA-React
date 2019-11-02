import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/interfaces';
import { getDefaultImage, getDate } from '../../lib/helpers';

interface EventTileProps extends Event, WithTranslation { }

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
            <React.Fragment>
                <div className='card mb-3 calendar-tile d-none d-sm-flex'>
                    <div className='row no-gutters'>
                        <div className='col-md-2 d-flex flex-column align-items-center justify-content-center text-center pl-4'>
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
                                className=''
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
                <div className='card d-block d-sm-none'>
                    {
                        this.state.image_url &&
                        (
                            <img
                                className='card-img-top'
                                src={`${this.state.image_url}w=400&q=80`}
                                alt={this.props.image_description}
                                srcSet={`
                                    ${this.state.image_url}w=400&q=80 767w,
                                    ${this.state.image_url}w=250&q=80 1023w,
                                    ${this.state.image_url}w=330&q=80 1365w,
                                    ${this.state.image_url}w=450&q=80 5000w
                                `}
                            />
                        )
                    }
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.title}</h5>
                        <p className='card-text'>{this.props.description}</p>
                    </div>
                    <div className='card-footer'>
                        <h5 className='card-date'>
                            {getDate(this.props.date, ['month', 'day'], this.props.i18n.language)}
                        </h5>
                        <h6 className='card-date'>{this.props.location_name}</h6>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EventTile;
