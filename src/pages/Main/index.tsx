import { Header } from '@components/index';
import * as S from './style';

export default function Main() {
  return (
    <S.Container>
      <Header />
      <S.Banner>
        <S.BannerText>
          <div className="orange">
            <p>HAND OFF-</p>
            <p>Done IT</p>
          </div>
          <div className="white">
            <p>COMMUNICATE,</p>
            <p>SHARE AND</p>
            <p>COMPLETE</p>
          </div>
        </S.BannerText>
      </S.Banner>
      <S.MovingText>
        <div className="track">
          &nbsp;DIFFERENT PART, WORK TOGETHER&nbsp;DIFFERENT PART, WORK
          TOGETHER&nbsp;DIFFERENT PART, WORK TOGETHER
        </div>
      </S.MovingText>
    </S.Container>
  );
}
