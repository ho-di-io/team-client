import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  & > img {
    width: 100%;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  margin-top: 5px;
`;
