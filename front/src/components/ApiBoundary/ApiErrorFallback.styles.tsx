import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.pink};

  button {
    margin: 10px;
    background-color: inherit;
    font-size: ${({ theme }) => theme.size.rg}px;
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.colors.darkbrown};
    color: ${({ theme }) => theme.colors.darkbrown};
    border-radius: 10px;
    width: 65px;
    height: 30px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkbrown};
      color: white;
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
