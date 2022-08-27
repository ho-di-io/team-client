import * as S from './style';
import images from '@images/index';

export default function Header() {
  return (
    <S.Container>
      <S.Logo>
        <img alt="https://via.placeholder.com/168x60" src={images.Logo} />
        <img src={images.LogoText} />
      </S.Logo>
      <div>
        <S.Button>Team</S.Button>
        <S.Button>Projects</S.Button>
      </div>
    </S.Container>
  );
}
