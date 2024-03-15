import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.brown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.size.rg}px;
    font-weight: 700;
  }
`;

export const TopButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: inherit;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.pink};

  &:hover {
    background-color: ${({ theme }) => theme.colors.point};
    color: white;
  }
`;
