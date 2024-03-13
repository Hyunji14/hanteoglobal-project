import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.main};
  overflow-x: auto;
`;

export const Category = styled.div<{ $isActive: boolean }>`
  font-family: PretendardExtraBold;
  font-weight: 800;
  font-size: ${({ theme }) => theme.size.lg}px;
  color: ${(props) => (props.$isActive ? '#FF579A' : '#332126')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15px;
  white-space: nowrap;
`;
