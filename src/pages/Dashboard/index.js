import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg'
import Img from '../../assets/Img.svg'
import Delete from '../../assets/Delete-Icon.svg'
import Edit from '../../assets/Edit-Icon.svg'

import Button from '../../components/Button';

import ModalShowNaver from '../../components/ModalShowNaver';
import ModalDeleteNaver from '../../components/ModalDeleteNaver';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const history = useHistory();

  function toggleShowModal() {
    setModalOpen(!modalOpen);
  }

  function toggleDeleteModal() {
    setDeleteModalOpen(!deleteModalOpen);
  }

  function toggleSuccessModel() {
    setSuccessModalOpen(!successModalOpen);
  }

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Nave" />
        <Logout onClick={() => history.push('/')}>Sair</Logout>
      </Header>

      <ModalShowNaver
        isOpen={modalOpen}
        setIsOpen={toggleShowModal}
      />

      <ModalDeleteNaver
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        setSuccessIsOpen={toggleSuccessModel}
      />

      <Content>
        <TitleContainer>
          <Title>Navers</Title>
          <Button style={{width: 178}} onClick={() => history.push('/add')}>Adicionar Naver</Button>
        </TitleContainer>

        <CardContainer>
          <Card>
            <Image src={Img} alt="test" onClick={toggleShowModal}/>
            <CardTitle>Juliano Reis</CardTitle>
            <CardDescription>Front-end Developer</CardDescription>
            <CardItens>
              <Icon src={Delete} alt="delete-test" onClick={toggleDeleteModal}/>
              <Icon src={Edit} alt="edit-test" onClick={() => history.push('/edit')}/>
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
