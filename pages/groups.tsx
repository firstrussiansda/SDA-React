import React from 'react';
import Group, { Activity } from '../components/groups/group';
import { withTranslation } from '../i18n';
import { WithTranslation } from 'react-i18next';

export interface GroupLocale {
    title: string;
    activities: Activity[];
    imgAlt: string;
}

class Groups extends React.Component<WithTranslation> {
    static async getInitialProps() {
        return {
            namespacesRequired: ['group'],
        };
    }

    // TODO: srcset
    groups = [
        ['kids', 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-0.3.5&s=b603f124f479ef5a275d119dc12b3eda&auto=format&fit=crop&w=1050&q=80'],
        ['youth', 'https://images.unsplash.com/photo-1522008250122-19c4add9df75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a11e57d4eb2477ec63a311d5a451ef1e&auto=format&fit=crop&w=1050&q=80'],
        ['prayingGroups', 'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac3b568666389c970a9d24e6367104b2&auto=format&fit=crop&w=1050&q=80'],
    ];

    render() {
        const { t, tReady } = this.props;

        // TODO: this leads to server and client side HTML not matching sometimes.
        // Hope to fix before PROD release
        if (!tReady) {
            return null;
        }

        return (
            <main>
                <div className='container'>
                    <h1 className='text-center capitalize my-3'>{t('title')}</h1>
                    <div>
                        {this.groups.map(([name, img]) => (
                            <Group
                                key={name}
                                {...t<GroupLocale>(name, { returnObjects: true })}
                                img={img}
                            />
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}

export default withTranslation('groups')(Groups);
