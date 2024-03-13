import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth}px;
  min-height: ${({ theme }) => theme.size.maxHeight}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
`;
