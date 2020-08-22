import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import Img from '../../assets/Img.svg';
import Delete from '../../assets/Delete-Icon.svg';
import Edit from '../../assets/Edit-Icon.svg';

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
  const [navers, setNavers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [id, setId] = useState('');
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const history = useHistory();

  const { logout, user } = useAuth();

  useEffect(() => {
    async function loadNavers() {
      const { data } = await api.get('/navers');

      setNavers(data);
    }

    loadNavers();
  }, []);

  function toggleShowModal() {
    setModalOpen(!modalOpen);
  }

  function toggleDeleteModal(id) {
    setId(id);
    setDeleteModalOpen(!deleteModalOpen);

    const naversList = navers.filter((naver) => naver.id !== id);

    setNavers(naversList);
  }

  function toggleSuccessModel() {
    setSuccessModalOpen(!successModalOpen);
  }

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Nave" />
        <Logout onClick={logout}>Sair</Logout>
      </Header>

      <ModalShowNaver isOpen={modalOpen} setIsOpen={toggleShowModal} />

      <ModalDeleteNaver
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        setSuccessIsOpen={toggleSuccessModel}
        id={id}
      />

      <Content>
        <TitleContainer>
          <Title onClick={() => console.log(navers)}>Navers</Title>
          <Button style={{ width: 178 }} onClick={() => history.push('/add')}>
            Adicionar Naver
          </Button>
        </TitleContainer>

        <CardContainer>
          {navers
            && navers.map((naver) => (
              <Card key={naver.id}>
                <Image src={naver.url} alt="test" onClick={toggleShowModal} />
                <CardTitle>{naver.name}</CardTitle>
                <CardDescription>{naver.job}</CardDescription>
                <CardItens>
                  <Icon
                    src={Delete}
                    alt="delete-test"
                    onClick={() => toggleDeleteModal(naver.id)}
                  />
                  <Icon
                    src={Edit}
                    alt="edit-test"
                    onClick={() => history.push('/edit')}
                  />
                </CardItens>
              </Card>
            ))}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
