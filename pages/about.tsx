import { WithTranslation } from 'react-i18next';
import { NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';

import KeyMissionComponents from '../components/about/keyMissionComponents';
import GroupTile, { Activity } from '../components/about/groupTile';
import Leadership from '../components/about/leadership';

import { ListPeopleResponse, Person } from '../lib/types';
import { fetchData } from '../lib/helpers';
import { withTranslation } from '../i18n';

export interface GroupLocale {
    title: string;
    activities: Activity[];
    img: string;
    imgAlt: string;
}

interface GroupsLocale {
    title: string;
    data: { [name: string]: GroupLocale };
}

interface AboutProps extends WithTranslation {
    people: Person[];
    count: number;
}

interface AboutState {
    people: Person[];
    pastor?: Person;
}

class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);
        this.state = {
            people: [],
            pastor: undefined,
        };
    }

    static async getInitialProps({ req }: NextPageContext) {
        const data = await fetchData<ListPeopleResponse>('people', req, {
            position__isnull: false,
        });

        if (data && 'results' in data) {
            return {
                people: data.results,
                count: data.count,
                namespacesRequired: ['about', 'common'],
            };
        }

        return {
            people: [],
            count: 0,
            namespacesRequired: ['about', 'common'],
        };
    }

    componentDidMount() {
        let people = [...this.props.people];
        let pastorIdx = -1;

        people.forEach((person, idx) => {
            if (['pastor', 'пастор'].includes(person.position.toLowerCase())) {
                if (pastorIdx < 0) {
                    pastorIdx = idx;
                } else {
                    console.error('More than one pastor located');
                }
            }
        });

        if (pastorIdx >= 0) {
            const pastor = people[pastorIdx];
            people = people
                .slice(0, pastorIdx)
                .concat(people.slice(pastorIdx + 1));

            this.setState({ people, pastor });
        } else {
            this.setState({ people, pastor: undefined });
        }
    }

    render() {
        if (!this.props.tReady) {
            return null;
        }

        const groupsLocale: GroupsLocale = this.props.t('groups', {
            returnObjects: true,
        });
        const keyMissionComponentsLocale: {
            title: string;
            text: string;
        }[] = this.props.t('keyMissionComponents', {
            returnObjects: true,
        });
        const aboutLocale: string[] = this.props.t('about', {
            returnObjects: true,
        });

        return (
            <div className="container">
                <Head>
                    <title>
                        {this.props.t('pageTitle')}
                        &nbsp;-&nbsp;
                        {this.props.t('common:siteTitle')}
                    </title>
                </Head>
                <h1 className="title capitalize text-xxl m-b text-center">
                    {this.props.t('pageTitle')}
                </h1>

                {/* Mission statement */}
                <section className="card about card-lg" id="about-mission">
                    <h2 className="title capitalize text-xxxl m-b-sm m-t-sm text-center">
                        {this.props.t('missionHeader')}
                    </h2>
                    <div className="blockquote text-center">
                        <p id="mission-statement" className="m-b-xs">
                            {this.props.t('mission')}
                        </p>
                    </div>
                </section>

                <KeyMissionComponents
                    title={this.props.t('keyMissionComponentsTitle')}
                    components={keyMissionComponentsLocale}
                />

                {this.state.pastor && (
                    <section className="card about card-lg pb-5 text-xxs-center">
                        <h2 className="title capitalize m-b-xxl text-center">
                            {this.props.t('ourPastor')}
                        </h2>
                        <div className="row">
                            <div className="col m-b-xxl">
                                <img
                                    className="img-circle img-fluid m-x-auto m-b"
                                    src={this.state.pastor.profile_image_url}
                                />
                                <h3 className="name text-md text-center">
                                    {this.state.pastor.name}
                                </h3>
                                {this.state.pastor.about && (
                                    <p className="text-center m-b-sm m-x-auto short-bio">
                                        {this.state.pastor.about}
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {this.state.people.length > 0 && (
                    <Leadership people={this.state.people} />
                )}

                <section className="card about about-us card-lg">
                    <div className="text-center text-justify m-x-auto">
                        {aboutLocale.map(text => (
                            <p className="m-b-xs" key={text}>
                                {text}
                            </p>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="title capitalize text-xxl m-b text-center">
                        {groupsLocale.title}
                    </h2>
                    <div className="top-space">
                        {Object.entries(groupsLocale.data).map(
                            ([name, group]) => (
                                <GroupTile key={name} {...group} />
                            ),
                        )}
                    </div>
                </section>
            </div>
        );
    }
}

export default withTranslation(['about', 'common'])(About);
