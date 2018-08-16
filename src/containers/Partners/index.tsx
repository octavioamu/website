import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';

import config, { PartnerProject } from './config';
import Hero from '@components/Partners/Hero';
import { MarketHeader } from '@src/Styles';
import NewsletterSubscribeBanner from '@components/NewsletterSubscribeBanner';
import { device, size } from '@src/breakpoints';
import { emailLink } from '@components/Cta';

const ContentWrapper = styled.section`
  padding: 50px;
  background-color: #f0f0f0;

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 60px;
  }
  @media ${device.tablet} {
    padding: 80px;
  }
  @media ${device.laptopL} {
    padding: 80px 250px 80px 250px;
  }
`;

const PartnerBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 33%;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center
    justify-content: center;
    background-color: #fff;
    text-align: center;
    height: 100%;
    transition: all 150ms ease;
    
    :hover {
      box-shadow: 0 20px 25px 0 rgba(0,0,0,0.12);
    }
  }

  img {
    max-width: 100%;
  }

  @media (max-width: ${size.laptop}) {
    width: 50%;

  }

  @media (max-width: ${size.tablet}) {
    padding: 20px;
    > a {
      padding: 30px;
    }
  }


  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }

`;

const PartnerBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 80px;
`;

const JoinCTAWrapper = styled.div`
  margin-left: -80px;
  margin-right: -80px;
  display: flex;
  justify-content: space-between;
  background-color: #00e2c1;
  padding: 40px;

  > div:first-child {
    flex: 60%;
    padding-right: 40px;
  }
  > div:last-child {
    padding: 40px;
    flex: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      color: #fff;
      border: 2px solid #fff;
    }
  }

  @media (max-width: ${size.tablet}) {
    margin-left: -60px;
    margin-right: -60px;
    flex-wrap: wrap;
    > div {
      flex: 1;
    }

    > div:last-child {
      padding: 20px;
    }
  }

  @media (max-width: ${size.mobileL}) {
    margin-left: -50px;
    margin-right: -50px;
    > div:first-child {
      padding-right: 0;
    }
  }
`;

class PartnersComponent extends Component {
  renderPartnerBlocks(partners: PartnerProject[]): null | JSX.Element[] {
    if (partners && partners.length) {
      return partners.map(p => {
        return (
          <PartnerBlock key={p.name}>
            <a href={p.url} target="_blank" className="partner-link">
              <img src={p.image} />
            </a>
          </PartnerBlock>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    const { partnerProjects } = config;

    return (
      <div>
        <Helmet>
          <title>MARKET Protocol - Partner Projects</title>
          <meta name="keywords" content="MARKET Protocol Partners" />
          <meta
            name="description"
            content="MARKET Protocol - Partner Projects"
          />
        </Helmet>
        <Hero />
        <ContentWrapper>
          <MarketHeader align="center">Partner Projects</MarketHeader>
          <PartnerBlockWrapper>
            {this.renderPartnerBlocks(partnerProjects)}
          </PartnerBlockWrapper>
          <JoinCTAWrapper>
            <div className="join-cta-banner">
              <MarketHeader>Join our mission</MarketHeader>
              <p>
                Whether you’re an existing decentralized exchange or a
                traditional financial services group thinking about blockchain
                technology, we’d love to hear from you. Drop us an email and we
                will get back to you shortly.
              </p>
            </div>
            <div>
              <Button href={emailLink}>Become a Partner</Button>
            </div>
          </JoinCTAWrapper>
        </ContentWrapper>
        <NewsletterSubscribeBanner />
      </div>
    );
  }
}

export default PartnersComponent;
