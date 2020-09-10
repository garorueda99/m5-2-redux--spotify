import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { imageSize } from '../../theme';
const current = 'small';

export default function RelatedArtists() {
  const relatedArtist = useSelector((state) => state.artists.related);
  console.log(relatedArtist);
  return (
    <Wrapper>
      related artists
      <Nav>
        {relatedArtist.map((element) => {
          return (
            <Card>
              <Img
                style={{
                  backgroundImage: `url(${element.images[0].url})`,
                }}
              />
              <Artist>{element.name}</Artist>
            </Card>
          );
        })}
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
`;

const Card = styled.div`
  position: relative;
  min-width: 125px;
  height: 150px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

const Artist = styled.div`
  position: absolute;
  top: 80px;
  height: 90px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
`;

const Img = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: ${imageSize[current]}px;
  width: ${imageSize[current]}px;
  border-radius: 50%;
`;
