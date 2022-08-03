import styled from 'styled-components';
import images from '@images/index';

export default function Main() {
  return (
    <Container>
      <Logo>
        <img src={images.Logo} alt="" />
        <img src={images.LogoText} alt="" />
      </Logo>
      <Tap>
        <span>Team</span>
        <span>Projects</span>
      </Tap>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 10rem;
`;
export const Logo = styled.div``;
export const Tap = styled.div``;
