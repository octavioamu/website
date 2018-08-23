import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import header from '@images/team/team-hero.svg';
import { device, size } from '@src/breakpoints';
import { HeroText } from '@src/Styles';

export const HeroArt = styled.div`
  text-align: center;
  img {
    width: 80%;
    height: 100%;
        
    @media ${device.desktopS} {
      width: 60%;
    }
  }
  
  @media ${device.mobileS} and (max-width: 767px) {
    z-index: -1;
    text-align: right;
  }
  
  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    opacity: 0.4
    margin-top: -80px;
    
    img {
      width: 50%;
      margin-top: -30%;
    }
  }
`;

export const TextWrapper = styled.div`
  margin: 50px 0px 120px 50px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    margin: 30px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    margin: 50px 50px 100px 50px;
  }

  @media ${device.desktopS} {
    margin-bottom: 20%;
  }
`;

export const HeroInfo = styled.p`
  color: #fff;
  font-weight: 300;
  margin-top: 20px;

  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 22px;
  }
`;

class Hero extends React.Component {
  render() {
    return (
      <section
        style={{
          background: '#181E26',
          minHeight: '300px'
        }}
      >
        <Row type="flex" className="hero" align="bottom">
          <Col xs={24} sm={24} md={14} lg={12} xl={12} style={{ zIndex: '1' }}>
            <TextWrapper>
              <HeroText>The Team</HeroText>
              <HeroInfo>
                Founding members of our team have been managing a 24-hour
                algorithmic trading group since 2014 and cumulatively have over
                30 years of electronic trading experience. We have expertise in
                market microstructure, order routing, order management and have
                written directly to exchanges across the globe.
              </HeroInfo>
              <HeroInfo>
                The rest of the MARKET Protocol team comes from a diverse set of
                technical backgrounds.
              </HeroInfo>
              <HeroInfo>
                Together, we quickly realized how immature the crypto exchanges
                were. This created an opportunity for conceptualization and
                development of MARKET Protocol which provided us a blank slate
                to address issues with both the crypto and traditional exchange
                models.
              </HeroInfo>
            </TextWrapper>
          </Col>
          <Col xs={0} sm={0} md={10} lg={12} xl={12}>
            <HeroArt>
              <img alt="team" src={header} width="520" height="669" />
            </HeroArt>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Hero;
