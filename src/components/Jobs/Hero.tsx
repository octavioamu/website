import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import header from '@images/jobs/jobs-hero.svg';
import { device, size } from '@src/breakpoints';
import { HeroText } from '@src/Styles';
import { Link } from 'react-static';

export const HeroArt = styled.div`
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
  }
  
  @media ${device.mobileS} and (max-width: 767px) {
    opacity: 0.4
    margin-top: -20%
    text-align: right;
    
    img {
      width: 60%;
    }
  }
`;

export const TextWrapper = styled.div`
  margin: 0 50px
  margin-top: 5%;
  margin-bottom: 20%;
  
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    margin: 30px 30px 70px 30px;
  }

  @media ${device.mobileL} and (max-width: 767px) {
    margin: 50px;
    margin-bottom: 10%;
  }

  @media ${device.desktopS} {
     margin-bottom: 20%;
  }
`;

export const HeroInfo = styled.p`
  color: #fff;
  font-weight: 300;

  @media ${device.mobileS} {
    font-size: 18px;
    margin: 30px 0px;
  }

  @media ${device.laptop} {
    font-size: 22px;
    margin: 30px 0px 50px 0px;
  }
`;

class Jobs extends React.Component {
  render() {
    return (
      <section
        style={{
          background: '#181E26',
          minHeight: '300px'
        }}
      >
        <Row type="flex" className="hero">
          <Col xs={24} sm={24} md={14} lg={12} xl={12} style={{ zIndex: 1 }}>
            <Row type="flex" align="middle" style={{ height: '100%' }}>
              <TextWrapper>
                <HeroText>Jobs</HeroText>
                <HeroInfo>
                  Headquartered in beautiful Boulder, Colorado <br /> with a
                  world-wide distributed team
                </HeroInfo>
                <Link
                  to="#jobList"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <Button
                    type="primary"
                    size={'large'}
                    href={''}
                    style={{
                      color: '#000',
                      minWidth: 200
                    }}
                  >
                    Browse Jobs
                  </Button>
                </Link>
              </TextWrapper>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={10} lg={12} xl={12}>
            <Row
              type="flex"
              align="bottom"
              style={{ height: '100%', textAlign: 'right' }}
            >
              <HeroArt>
                <img
                  alt="MARKET Protocol jobs"
                  src={header}
                  width="824"
                  height="665"
                />
              </HeroArt>
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Jobs;
