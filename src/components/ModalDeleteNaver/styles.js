import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 32px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 500px) {
    >:nth-child(1) {
      margin-bottom: 14px;
    }

    >:nth-child(2) {
      margin-bottom: 14px;
    }
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 36px;
  color: #212121;

  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-size: 1.6rem;
  line-height: 36px;
  color: #212121;

  margin-bottom: 33px;

`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  >:first-child {
    margin-right: 24px;
  }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 176px;
    height: 40px;
    
    border: 0;
    background: #212121;

    color: #FFFFFF;
    line-height: 24px;
    font-weight: 600;
    font-size: 1.4rem;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#212121')};
    }
`;
