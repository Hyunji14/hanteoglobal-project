import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.size.lg}px;
  font-weight: 800;
  text-align: center;
`;
