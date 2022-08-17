import styled from 'styled-components';
import images from '../images';

export default function Header() {
  return (
    <Container>
      <Logo>
        <img alt="https://via.placeholder.com/168x60" src={images.Logo} />
        <img src={images.LogoText} />
      </Logo>
      <div>
        <Button>Team</Button>
        <Button>Projects</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  & > img {
    width: 100%;
  }
`;
const Button = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  margin-top: 5px;
`;
