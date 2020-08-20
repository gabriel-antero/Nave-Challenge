import React from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg'
import Img from '../../assets/Img.svg'
import Delete from '../../assets/Delete-Icon.svg'
import Edit from '../../assets/Edit-Icon.svg'

import Button from '../../components/Button';

import { 
  Container,
  Header,
  Logo,
  Logout,
  Content,
  TitleContainer,
  Title,
  CardContainer,
  Card,
  Image,
  CardTitle,
  CardDescription,
  CardItens,
  Icon,
} from './styles';

const Dashboard = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Nave" />
        <Logout onClick={() => history.goBack()}>Sair</Logout>
      </Header>
    
      <Content>
        <TitleContainer>
          <Title>Navers</Title>
          <Button style={{width: 178}} >Adicionar Naver</Button>
        </TitleContainer>

        <CardContainer>
          <Card>
            <Image src={Img} alt="test" />
            <CardTitle>Juliano Reis</CardTitle>
            <CardDescription>Front-end Developer</CardDescription>
            <CardItens>
              <Icon src={Delete} alt="delete-test" />
              <Icon src={Edit} alt="edit-test" />
            </CardItens>
          </Card>

          <Card>
            <Image src={Img} alt="test" />
            <CardTitle>Juliano Reis</CardTitle>
            <CardDescription>Front-end Developer</CardDescription>
            <CardItens>
              <Icon src={Delete} alt="delete-test" />
              <Icon src={Edit} alt="edit-test" />
            </CardItens>
          </Card>

          <Card>
            <Image src={Img} alt="test" />
            <CardTitle>Juliano Reis</CardTitle>
            <CardDescription>Front-end Developer</CardDescription>
            <CardItens>
              <Icon src={Delete} alt="delete-test" />
              <Icon src={Edit} alt="edit-test" />
            </CardItens>
          </Card>

          <Card>
            <Image src={Img} alt="test" />
            <CardTitle>Juliano Reis</CardTitle>
            <CardDescription>Front-end Developer</CardDescription>
            <CardItens>
              <Icon src={Delete} alt="delete-test" />
              <Icon src={Edit} alt="edit-test" />
            </CardItens>
          </Card>
        </CardContainer>
      </Content>
     </Container>
  );
};

export default Dashboard;
