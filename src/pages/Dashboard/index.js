import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
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

  const { logout } = useAuth();

  useEffect(() => {
    async function loadNavers() {
      const { data } = await api.get('/navers');

      setNavers(data);
    }

    loadNavers();
  }, []);

  async function handleDeleteNaver() {
    await api.delete(`/navers/${id}`);

    const naverList = navers.filter((naver) => naver.id !== id);

    setNavers(naverList);
  }

  function toggleShowModal(naver_id) {
    setId(naver_id);
    setModalOpen(!modalOpen);
  }

  function toggleDeleteModal(naver_id) {
    setId(naver_id);
    setDeleteModalOpen(!deleteModalOpen);
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

      <ModalShowNaver
        isOpen={modalOpen}
        setIsOpen={toggleShowModal}
        handleDeleteNaver={handleDeleteNaver}
        id={id}
      />
      <ModalDeleteNaver
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        setSuccessIsOpen={toggleSuccessModel}
        handleDeleteNaver={handleDeleteNaver}
      />

      <Content>
        <TitleContainer>
          <Title>Navers</Title>
          <Button style={{ width: 178 }} onClick={() => history.push('/add')}>
            Adicionar Naver
          </Button>
        </TitleContainer>
        <CardContainer>
          {navers
            && navers.map((naver) => (
              <Card key={naver.id}>
                <Image src={naver.url} alt={naver.name} onClick={() => toggleShowModal(naver.id)} />
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
                    onClick={() => history.push('/edit', { params: { id: naver.id } })}
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
