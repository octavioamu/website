import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import header from '@images/about/header.svg';
import { device, size } from '@src/breakpoints';
import { HeroText } from '@src/Styles';

export const HeroArt = styled.div`
  text-align: right;
  margin-top: 90px;
  img {
    width: 80%;
    height: 100%;
  }
  
  @media ${device.mobileS} and (max-width: 767px) {
    opacity: 0.4
    margin-top: -80px;
    z-index: -1;
    text-align: right;
  }
  
  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    opacity: 0.4
    margin-top: -80px;
    
    img {
      width: 50%;
      margin-top: -10%;
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

  @media ${device.laptopL} {
    font-size: 24px;
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
        <Row type="flex" className="hero" align="middle">
          <Col xs={24} sm={24} md={14} lg={12} xl={12}>
            <TextWrapper>
              <HeroText>About</HeroText>
              <HeroInfo>
                Crypto as an asset class is growing quickly with many promising
                projects in a variety of applications, but with rapid progress
                comes challenges.
              </HeroInfo>
              <HeroInfo>
                Due to price volatility, crypto assets can’t effectively
                function as a medium of exchange or in token applications. This
                volatility further limits crypto as a store of value relative to
                other digital or traditional assets. Until these challenges are
                addressed, the blockchain space cannot achieve scale.
              </HeroInfo>
            </TextWrapper>
          </Col>
          <Col xs={0} sm={0} md={10} lg={12} xl={12}>
            <HeroArt>
              <img alt="about MARKET" src={header} width="435" height="374" />
            </HeroArt>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Hero;
