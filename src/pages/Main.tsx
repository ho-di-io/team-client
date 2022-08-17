import Header from '@components/Header';
import styled, { keyframes } from 'styled-components';

export default function Main() {
  return (
    <Container>
      <Header />
      <Banner>
        <BannerText>
          <div className="orange">
            <p>HAND OFF-</p>
            <p>Done IT</p>
          </div>
          <div className="white">
            <p>COMMUNICATE,</p>
            <p>SHARE AND</p>
            <p>COMPLETE</p>
          </div>
        </BannerText>
      </Banner>
      <MovingText>
        <div className="track">
          &nbsp;DIFFERENT PART, WORK TOGETHER&nbsp;DIFFERENT PART, WORK
          TOGETHER&nbsp;DIFFERENT PART, WORK TOGETHER
        </div>
      </MovingText>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 10rem;
`;
const Banner = styled.div`
  width: 100%;
  position: relative;
`;
const BannerText = styled.div`
  width: 28.125%;
  margin-left: 3rem;
  .orange,
  .white {
    font-family: 'Shrikhand';
    font-style: italic;
    font-weight: 400;
    font-size: 5vmin;
    text-transform: uppercase;
    color: #fcbb21;
  }
  .white {
    margin-top: 3rem;
    font-size: 3vmin;
    color: #ffffff;
  }
`;
const BannerImgs = styled.div``;
const MovingAni = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;
const MovingText = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 10vh;
  max-width: 100%;
  padding: 5rem 0;
  overflow-x: hidden;
  overflow-y: hidden;
  font-size: 10vmin;
  color: #8c8b91;
  .track {
    align-items: center;
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: ${MovingAni} 30s linear infinite;
  }
`;
