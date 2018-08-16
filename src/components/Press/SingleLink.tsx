import React from 'react';
import colors from '@styles/json/colors';

// types
export interface LinkInfo {
  boxColor: 'white' | 'darkgrey';
  imgSrc: string;
  paragraphs: string[];
  title: string;
  link: string;
}

export type DisplayDirection = 'column' | 'row';

export interface PropsType extends LinkInfo {
  displayDirection: DisplayDirection;
}

// single link component for press page
// export type BoxColor = ;

const SingleLink = ({
  imgSrc,
  boxColor,
  paragraphs,
  title,
  link,
  displayDirection
}: PropsType) => {
  // different view styles for different windowWidth
  const rowStyleView = (
    <div
      style={{
        display: 'flex',
        marginBottom: '60px'
      }}
    >
      <div
        style={{
          alignSelf: 'center',
          backgroundColor:
            boxColor === 'white' ? colors.white : colors.darkGrey,
          display: 'flex',
          marginRight: '20px'
        }}
      >
        <a style={{}} href={link} target="_blank">
          <img
            style={{
              padding: '10px',
              width: '200px'
            }}
            src={imgSrc}
          />
        </a>
      </div>

      <div>
        <h2>
          <a
            style={{
              color: 'black'
            }}
            href={link}
            target="_blank"
          >
            {title}
          </a>
        </h2>
        {paragraphs.map((paragraph, i) => <p key={'p' + i}>{paragraph}</p>)}
        <a href={link} target="_blank">
          Read more »
        </a>
      </div>
    </div>
  );

  const columnStyleView = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '60px'
      }}
    >
      <div
        style={{
          backgroundColor:
            boxColor === 'white' ? colors.white : colors.darkGrey,
          marginBottom: '20px'
        }}
      >
        <a href={link} target="_blank">
          <img
            style={{
              padding: '15px',
              width: '100%'
            }}
            src={imgSrc}
          />
        </a>
      </div>

      <h2 key="title">
        <a
          style={{
            color: 'black'
          }}
          href={link}
          target="_blank"
        >
          {title}
        </a>
      </h2>
      {paragraphs.map((paragraph, i) => <p key={'p' + i}>{paragraph}</p>)}
      <a key="readMore" href={link} target="_blank">
        Read more »
      </a>
    </div>
  );

  return displayDirection === 'row' ? rowStyleView : columnStyleView;
};

export default SingleLink;
