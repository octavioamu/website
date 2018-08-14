import React from 'react';
import { Col, Icon, Row } from 'antd';
import { HeroText } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import styled from 'styled-components';
import { HeroInfo } from '@components/Partners/Hero';

// Assets
import header from '@images/presale_header.svg';

export const HeroSection = styled.section`
  background: #181e26;
`;

export const TextWrapper = styled.div`
  margin: 70px 0px 150px 50px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    margin: 70px 30px 70px 30px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    margin: 50px 50px 100px 50px;
  }

  @media ${device.desktopS} {
    margin-bottom: 20%;
  }
`;

export const HeroArt = styled.div`
  text-align: center;
  margin-right: -25x;
  img {
    width: 60%;
    
    @media ${device.tablet} and (max-width: ${size.tabletL}) {
      width: 70%;
    }

    @media ${device.desktopS} {
      width: 55%;
    }
  }

  @media ${device.mobileS} and (max-width: 767px) {
    z-index: -1;
  }
  
  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    opacity: 0.4
    margin-top: -80px;
    
    img {
      width: 30%;
      margin-top: -30%;
    }
  }
`;

class TokenInterestHeader extends React.Component {
  render() {
    return (
      <HeroSection>
        <Row type="flex" className="hero" align="middle">
          <Col xs={24} md={14} lg={12} style={{ zIndex: 1 }}>
            <TextWrapper>
              <HeroText>Token Interest</HeroText>
              <HeroInfo>
                <Icon type="calendar" style={{ paddingRight: '10px' }} />
                <b>
                  The exact date and details of the MARKET Protocol presale have
                  not yet been announced.
                </b>
              </HeroInfo>
              <HeroInfo>
                Please fill out the below form if you are interested in
                participating in the MARKET Protocol presale and want to be
                updated as more details are announced.
              </HeroInfo>
            </TextWrapper>
          </Col>
          <Col xs={0} sm={0} md={10} lg={12}>
            <HeroArt>
              <img alt="MARKET Protocol Token Interest" src={header} />
            </HeroArt>
          </Col>
        </Row>
      </HeroSection>
    );
  }
}

export default TokenInterestHeader;
