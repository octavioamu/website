/*
 * this file imports the blog component and exports it with route data
 *
 * why do this? running the component through withRouteData() causes tons of
 * issues with enzyme test code. the vanilla component is imported for testing
 * directly from ./Blog.tsx and fed custom testing props, while this version is
 * imported for use in the app.
 */
// New Press UI
// import { withRouteData } from 'react-static';
// import Press from './Press';

// export default withRouteData(Press);

// Old Press UI
// TODO: Remove below code and un-comment the above code
import React, { Component } from 'react';
import linkInfos from './config';
import { MarketHeader } from '@styledComponents';
import throttle from 'lodash/throttle';
import SingleLink, { DisplayDirection } from '@components/Press/SingleLink';

class Press extends Component {
  state: { displayDirection?: DisplayDirection } = {};

  componentDidMount() {
    const displayDirection = window.innerWidth > 768 ? 'row' : 'column';
    this.setState({ displayDirection });

    window.addEventListener(
      'resize',
      throttle(e => {
        const { innerWidth } = e.target;
        const nextDisplayDirection = innerWidth > 768 ? 'row' : 'column';
        this.setState({ displayDirection: nextDisplayDirection });
      }, 500)
    );
  }

  render() {
    const { displayDirection = 'row' } = this.state;

    return (
      <div>
        <div
          style={{
            margin: 'auto',
            maxWidth: '800px',
            padding: '40px 35px'
          }}
        >
          <MarketHeader>{'MARKET Protocol in the press'}</MarketHeader>
          <br />
          {linkInfos.map((todo, i) => (
            <SingleLink key={i} displayDirection={displayDirection} {...todo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Press;
