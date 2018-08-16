import React from 'react';
import { withSiteData } from 'react-static';

import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';

import Banner from '@components/WhitePaper/Banner';
import TableOfContents from '@components/WhitePaper/TableOfContents';
import Summary from '@components/WhitePaper/Summary';
import Problems from '@components/WhitePaper/Problems';
import MarketProtocol from '@components/WhitePaper/MarketProtocol';
import Technical from '@components/WhitePaper/Technical';
import DApps from '@components/WhitePaper/dApps';
import MKTToken from '@components/WhitePaper/MKTToken';
import MKTContract from '@components/WhitePaper/MKTContract';
import Team from '@components/WhitePaper/Team/index';

export const Wrapper = styled.div`
  max-width: 750px;
  margin: 50px 0px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    max-width: 400px;
    margin: 30px 0px;
  }

  @media ${device.mobileL} and (max-width: ${device.tablet}) {
    max-width: 600px;
  }
`;

const Container = styled.div`
  margin: 50px 0;
  background-color: #fff;

  @media (max-width: ${size.tabletL}) {
    margin: 0;
  }
`;

export const WhitePaperComponent = () => (
  <Row
    type="flex"
    justify="center"
    style={{ backgroundColor: 'rgb(240, 240, 240)' }}
  >
    <Col xs={24} lg={18} xl={12}>
      <Container>
        <Banner />
        <TableOfContents />
        <Summary />
        <Problems />
        <MarketProtocol />
        <Technical />
        <DApps />
        <MKTToken />
        <MKTContract />
        <Team />
      </Container>
    </Col>
  </Row>
);

export default withSiteData(WhitePaperComponent);
