import React from 'react';
import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet';

import config, { Advisor, TeamMember } from './config';
import { MarketHeader, TeamDivWithResponsiveWidth } from '@styledComponents';
import colors from '@styles/json/colors';
import Cta from '@components/Cta';
import Bio from '@components/Team/Bio';
import Hero from '@components/Team/Hero';
import Person from '@components/Team/Person';

interface State {
  bioIsVisible: boolean;
  focusedPerson?: TeamMember;
}

export class TeamComponent extends React.Component<{}, State> {
  state: State = {
    bioIsVisible: false,
    focusedPerson: null
  };

  focusPerson = (info: TeamMember) => {
    this.setState(
      {
        focusedPerson: info
      },
      () =>
        this.setState({
          bioIsVisible: true
        })
    );
  }

  unfocusPerson = () => {
    this.setState({
      bioIsVisible: false
    });

    setTimeout(
      () =>
        this.setState({
          focusedPerson: null
        }),
      300
    );
  }

  renderPeople(people: TeamMember[] | Advisor[], type: string): JSX.Element[] {
    return people.map((o, i) => {
      return (
        <Col key={i} xs={24} sm={24} md={8}>
          <Person data={o} focus={this.focusPerson.bind(this, o)} type={type} />
        </Col>
      );
    });
  }

  render() {
    const { bioIsVisible, focusedPerson } = this.state;
    const { teamMembers, advisors } = config;

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Helmet>
          <title>MARKET Protocol - Team, Founders and Advisors</title>
          <meta
            name="keywords"
            content="MARKET Protocol People, MARKET Protocol Team, MARKET Protocol Advisors, MARKET Protocol Founders"
          />
          <meta
            name="description"
            content="MARKET Protocol People - Team, Founders and Advisors"
          />
        </Helmet>
        <Hero />
        {/* 'the team' title and info */}
        <TeamDivWithResponsiveWidth style={{ padding: '40px 0px 20px 0px' }}>
          <MarketHeader align="center">Core Team</MarketHeader>
        </TeamDivWithResponsiveWidth>

        {/* team members */}
        <TeamDivWithResponsiveWidth style={{ paddingBottom: '40px' }}>
          <Row justify={'center'} align={'middle'}>
            {this.renderPeople(teamMembers, 'core')}
          </Row>
        </TeamDivWithResponsiveWidth>

        {/* 'advisors' title */}
        <div
          style={{
            alignItems: 'center',
            backgroundColor: colors.lightGrey,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 25,
            padding: '45px 0px 80px 0px',
            width: '100%'
          }}
        >
          <TeamDivWithResponsiveWidth>
            <MarketHeader align="center">{'Advisors'}</MarketHeader>
          </TeamDivWithResponsiveWidth>

          {/* advisors */}
          <TeamDivWithResponsiveWidth
            style={{
              backgroundColor: colors.lightGrey,
              display: 'flex',
              flexWrap: 'wrap',
              padding: '15px 0px 0px 0px'
            }}
          >
            <Row justify={'center'} align={'middle'}>
              {this.renderPeople(advisors, 'advisors')}
            </Row>
          </TeamDivWithResponsiveWidth>
        </div>

        {/* contact */}
        <div style={{ width: '100%' }}>
          <Cta bg="#fff" />
        </div>

        {/* bio overlay */}
        <div className={['bio-wrap', bioIsVisible && 'visible'].join(' ')}>
          <Bio data={focusedPerson || {}} unfocus={this.unfocusPerson} />
        </div>
      </div>
    );
  }
}

export default TeamComponent;
