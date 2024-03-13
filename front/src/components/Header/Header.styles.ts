import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.main};
`;
