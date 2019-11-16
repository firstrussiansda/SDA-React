import React from 'react';
import GroupTile, { Activity } from '../components/groups/groupTile';
import { withTranslation } from '../i18n';
import { WithTranslation } from 'react-i18next';

export interface GroupLocale {
    title: string;
    activities: Activity[];
    img: string;
    imgAlt: string;
}
interface GroupsLocale {
    [name: string]: GroupLocale;
}

class Groups extends React.Component<WithTranslation> {
    static async getInitialProps() {
        return {
            namespacesRequired: ['group'],
        };
    }

    render() {
        const { t, tReady } = this.props;

        // Make sure translations are loaded before render
        if (!tReady) {
            return null;
        }

        return (
            <main>
                <div className='container'>
                    <h1 className='text-center capitalize my-3'>{t('title')}</h1>
                    <div className='top-space'>
                        {Object.entries(t<GroupsLocale>('data', { returnObjects: true }))
                            .map(([name, group]) => (
                                <GroupTile
                                    key={name}
                                    {...group}
                                />
                            ))
                        }
                    </div>
                </div>
            </main>
        );
    }
}

export default withTranslation('groups')(Groups);
