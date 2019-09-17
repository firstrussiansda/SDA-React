import React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../../i18n';

interface ServicesTypes {
    name: string;
    when: string;
}
interface VisitUsLocales {
    title: string;
    location: {
        name: string;
        area: string;
        address: string;
        header: string;
    };
    services: {
        header: string;
        'praying-group': ServicesTypes;
        'sabbath-school': ServicesTypes;
        sermons: ServicesTypes;
    };
}

const VisitUs: React.FunctionComponent<WithTranslation> = ({ t, tReady }) => {
    // TODO: this leads to server and client side HTML not matching sometimes. Hope to fix before PROD release
    if (!tReady) {
        return null;
    }

    const localizedText = t<VisitUsLocales>('visit-us', { returnObjects: true });

    return (
        <section id='visit-block' className='card card-lg pb-5'>
            <h2 id='directions-title' className='title text-center'>{localizedText.title}</h2>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-xxs-12 col-sm-12 m-b-lg'>
                    <div className='visit text-xs m-b-lg text-sm-left'>
                        <strong>{localizedText.location.name}</strong>
                        &nbsp;
                        {localizedText.location.area}
                    </div>
                    <address className='visit m-b-lg'>
                        <a> <strong>{localizedText.location.header}</strong></a>
                        &nbsp;
                        {localizedText.location.address}
                    </address>
                    <div className='visit'>
                        <strong>{localizedText.services.header}</strong>
                        <ul>
                            {localizedText.services['praying-group'].name}
                            <span className=' time float-right'>{localizedText.services['praying-group'].when}</span>
                        </ul>
                        <ul>
                            {localizedText.services['sabbath-school'].name}
                            <span className='time float-right'>{localizedText.services['sabbath-school'].when}</span>
                        </ul>
                        <ul>
                            {localizedText.services.sermons.name}
                            <span className='time float-right'>{localizedText.services.sermons.when}</span>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-xxs-12 col-sm-12'>
                    <iframe
                        width='100%'
                        max-height='80vh'
                        height='350'
                        frameBorder='0'
                        src='https://www.google.com/maps/embed/v1/place?q=1913%20W%207th%20St%2C%20New%20York%2C%20New%20York%2011223&key=AIzaSyCEp8zGhVStHmupL_fwpqiRZiSqxCSCD3U'
                        allowFullScreen={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
