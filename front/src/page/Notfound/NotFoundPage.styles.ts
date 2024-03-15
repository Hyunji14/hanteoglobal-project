import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth}px;
  min-height: calc(${({ theme }) => theme.size.maxHeight}px - 70px);
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  font-size: 30px;
  font-weight: 600;

  button {
    margin: 30px;
    background-color: inherit;
    font-size: ${({ theme }) => theme.size.rg}px;
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.colors.point};
    color: ${({ theme }) => theme.colors.point};
    border-radius: 10px;
    width: 150px;
    height: 30px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.point};
      color: white;
    }
  }
`;
