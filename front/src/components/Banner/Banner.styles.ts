import styled from 'styled-components';

export const Container = styled.div`
  height: 270px;
  width: 100%;
  margin: 15px 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  button {
    display: none !important;
  }
`;

export const SlideCard = styled.div`
  height: 270px;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

export const CardTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const CardTitle = styled.p`
  font-family: PretendardMedium;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    display: block;
    width: 60px;
    height: 20px;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    line-height: 20px;
    border: 1px solid red;
    border-radius: 10px;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.point};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.point};
      color: white;
      border: none;
    }
  }
`;

export const CardContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
  font-size: ${({ theme }) => theme.size.rg}px;
  color: ${({ theme }) => theme.colors.darkgray};
`;
