import React from 'react';
import { Person } from '../../lib/interfaces';

interface LeadershipProps {
    people: Person[];
}

const Leadership: React.FunctionComponent<LeadershipProps> = ({ people }) => (
    <section className='card about card-lg p-b-0 text-xxs-center'>
        <h2 className='title m-b-xxl text-center'>Leadership</h2>
        <div className='row'>
            {people.map(person => (
                <div className='col-xxs-12 col-sm-6 col-xxl-3 m-b-xxl' key={person.name}>
                    <img className='img-circle img-fluid m-x-auto m-b' src={person.profile_image_url} />
                    <h3 className='name text-md text-center'>{person.name}</h3>
                    <h4 className='text-center text-uppercase'>{person.position}</h4>
                    <p className='text-center m-b-sm m-x-auto short-bio'>{person.about}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Leadership;
