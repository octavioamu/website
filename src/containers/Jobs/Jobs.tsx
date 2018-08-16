import React, { Component } from 'react';
import { Row } from 'antd';
import list from './config';
import Hero from '@components/Jobs/Hero';
import {
  MarketDescriptionText,
  MarketDescriptionWrapper,
  SectionWrapper
} from '@src/Styles';
import Perks from '@components/Jobs/Perks';
import JobList from '@components/Jobs/JobList';
import Cta from '@components/Cta';

import compensation from '@images/jobs/compensation.svg';
import location from '@images/jobs/location.svg';
import flexible from '@images/jobs/flexible.svg';
import token from '@images/jobs/token.svg';

class Jobs extends Component {
  render() {
    return (
      <div>
        <Hero />
        <MarketDescriptionWrapper>
          <MarketDescriptionText>
            We are looking for the next round of innovators to join our team.
            Thriving in a distributed workplace is a must. Come along with us,
            and help define the future of financial applications with blockchain
            technology.
          </MarketDescriptionText>
        </MarketDescriptionWrapper>
        <SectionWrapper style={{ paddingTop: 0 }}>
          <Row type="flex" align="middle">
            <Perks imgURL={compensation} alt="Competitive compensation">
              Competitive
              <br />
              compensation
            </Perks>
            <Perks imgURL={location} alt="Location agnostic">
              Location
              <br />
              agnostic
            </Perks>
            <Perks imgURL={flexible} alt="Flexible time off">
              Flexible time off
              <br />
              and work schedule
            </Perks>
            <Perks imgURL={token} alt="Token allocation">
              Token
              <br />
              allocations
            </Perks>
          </Row>
        </SectionWrapper>
        <JobList list={list} />
        <Cta bg="#fff" />
      </div>
    );
  }
}

export default Jobs;
