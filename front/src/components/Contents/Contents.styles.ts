import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 700px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.1);
  margin: 10px 15px;
`;

export const ContentImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

export const ContentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px;
  p {
    margin: 5px;
  }
`;

export const ContentTitle = styled.p`
  font-family: PretendardBold;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkbrown};
`;

export const Content = styled.p`
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.size.md}px;
`;

export const DigitalIndex = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.colors.pink};
`;
