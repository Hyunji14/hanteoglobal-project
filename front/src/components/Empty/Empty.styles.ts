import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkgray};
  font-size: ${({ theme }) => theme.size.lg}px;
  font-weight: 700;
`;
