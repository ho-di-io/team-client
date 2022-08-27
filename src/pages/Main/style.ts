import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10rem;
`;
export const Banner = styled.div`
  width: 100%;
  position: relative;
`;
export const BannerText = styled.div`
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
export const BannerImgs = styled.div``;
export const MovingAni = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;
export const MovingText = styled.div`
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
