import styled from 'styled-components';
import Img from '../../assets/Img.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url(${Img}) no-repeat center;
  background-size: cover;
  height: 100%;
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;

  padding: 32px;

  @media (max-width: 500px) {
    padding: 24px;
  }

  @media (max-height: 500px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    align-items: center;
  }
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const NaverName = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #000000;

  margin-bottom: 10px;
`;

export const NaverTitle = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 24px;
  color: #212121;

  margin-bottom: 10px;
`;

export const NaverDescription = styled.p`
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #212121;

  margin-bottom: 24px;

`;

export const IconsContainer = styled.div`
  position: absolute;
  bottom: 27px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  &:first-child {
    margin-right: 8px;
  }

   &:hover {
    cursor: pointer;
  }
`;