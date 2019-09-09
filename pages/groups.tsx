import React from 'react';
import Group from '../components/groups/group';
import { WithTranslation } from 'react-i18next';

class Groups extends React.Component <WithTranslation> {
    static async getInitialProps() {
        return {
            namespacesRequired: ['common'],
        };
    }

    groupsData = [
        {
            title: 'Kids',
            activities: [
                {
                    subTitle: 'Sabbath School',
                    time: 'Saturdays at 10:00 AM',
                    description: `
                        Held weekly on the first floor of First Russian SDA church and
                        designed to teach children about Jesus. \n
                        Kids study in two groups: Kindergarten group (age of 2 to 5) and
                        Junior group (age of 6 to 10)
                    `,
                },
            ],
            img: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-0.3.5&s=b603f124f479ef5a275d119dc12b3eda&auto=format&fit=crop&w=1050&q=80',
            imgAlt: 'kids drawing',
        },
        {
            title: 'Youth',
            activities: [
                {
                    subTitle: 'Bible Study Groups',
                    time: 'Fridays at 7:30 PM',
                    description: `
                        Held weekly and consists of thoughtful dialogue and discussion on various Biblical topics.
                `,
                },
                {
                    subTitle: 'Sabbath School',
                    time: 'Saturdays at 10:00 AM',
                    description: 'Held weekly on the third floor of the First Russian SDA church.',
                },
            ],
            img: 'https://images.unsplash.com/photo-1522008250122-19c4add9df75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a11e57d4eb2477ec63a311d5a451ef1e&auto=format&fit=crop&w=1050&q=80',
            imgAlt: 'woman reading the Bible',
        },
        {
            title: 'Praying Group',
            activities: [
                {
                    subTitle: 'Common Prayer',
                    time: 'Tuesdays at 8:30 PM',
                    description: 'Held weekly via the phone to pray for each other and the community.',
                },
                {
                    subTitle: 'Prayer Meeting',
                    time: 'Saturdays at 9:15 AM',
                    description: `
                        Held weekly in the First Russian SDA church to pray for each other and the community.
                    `,
                },
            ],
            img: 'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac3b568666389c970a9d24e6367104b2&auto=format&fit=crop&w=1050&q=80',
            imgAlt: 'people praying in a circle',
        },
    ];
    render() {
        return (
            <main>
                <div className='container'>
                    <div className='row mb-1'>
                        <div className='col-md-12'>
                            {this.groupsData.map(group => <Group {...group} key={group.title} />)}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Groups;
