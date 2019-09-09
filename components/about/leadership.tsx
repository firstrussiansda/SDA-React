import React from 'react';
import LeadershipItem from './leadershipItem';

const Leadership = () => {
    const members = [
        {
            img: 'static/img/pastor.jpg',
            name: 'Andrew Dyman1',
            role: 'Pastor',
            bio: 'Eli drives Apptopia’s strategic vision and manages investor relations. Before Apptopia Eli was involved in several startups, including: GPush, Oasys Water, GreatPoint Energy, and DVTel.',
        },
        {
            img: 'static/img/pastor.jpg',
            name: 'Andrew Dyman2',
            role: 'Pastor',
            bio: 'Eli drives Apptopia’s strategic vision and manages investor relations. Before Apptopia Eli was involved in several startups, including: GPush, Oasys Water, GreatPoint Energy, and DVTel.',
        },
        {
            img: 'static/img/pastor.jpg',
            name: 'Andrew Dyman3',
            role: 'Pastor',
            bio: 'Eli drives Apptopia’s strategic vision and manages investor relations. Before Apptopia Eli was involved in several startups, including: GPush, Oasys Water, GreatPoint Energy, and DVTel.',
        },
        {
            img: 'static/img/pastor.jpg',
            name: 'Andrew Dyman4',
            role: 'Pastor',
            bio: 'Eli drives Apptopia’s strategic vision and manages investor relations. Before Apptopia Eli was involved in several startups, including: GPush, Oasys Water, GreatPoint Energy, and DVTel.',
        },
    ];

    return (
        <section className='card about card-lg p-b-0 text-xxs-center'>
            <h2 className='title m-b-xxl text-center'>Leadership</h2>
            <div className='row'>
                { members.map(member => <LeadershipItem {...member} key={member.name} />) }
            </div>
        </section>
    );
};

export default Leadership;
