import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';

import { addNaverSchema } from '../../helpers/yup';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import ArrowBack from '../../assets/Arrow-Icon.svg';

import ModalSuccess from '../../components/ModalSuccess';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { date } from '../../helpers/mask';

import {
  Container,
  Header,
  Logo,
  Logout,
  Content,
  TitleContainer,
  Title,
  BackIcon,
  Form,
} from './styles';

const AddNaver = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(addNaverSchema) });
  const history = useHistory();

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  const onSubmit = async ({
    job_role,
    admission_date,
    birthdate,
    project,
    name,
    url }) => {
    try {
      await api.post('navers', {
        job_role,
        admission_date,
        birthdate,
        project,
        name,
        url,
      });

      history.push('/dashboard');
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Nave" />
        <Logout onClick={() => history.push('/')}>Sair</Logout>
      </Header>

      <ModalSuccess
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        title="Naver criado"
        description="Naver criado com sucesso!"
      />

      <Content>
        <TitleContainer>
          <BackIcon src={ArrowBack} alt="Back-Test" onClick={() => history.goBack()} />
          <Title>Adicionar Naver</Title>
        </TitleContainer>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            register={register}
            label="Nome"
            placeholder="Nome"
            error={errors.name?.message}
          />
          <Input
            name="job_role"
            register={register}
            label="Cargo"
            placeholder="Cargo"
            error={errors.job_role?.message}
          />
          <Input
            name="birthdate"
            register={register}
            label="Nascimento"
            placeholder="dd/mm/aaaa"
            error={errors.birthdate?.message}
            onChange={(event) => {
              event.currentTarget.maxLength = 10;
              const { value } = event.target;
              event.target.value = date(value);
            }}
          />
          <Input
            name="admission_date"
            register={register}
            label="Tempo de empresa"
            placeholder="dd/mm/aaaa"
            error={errors.admission_date?.message}
            onChange={(event) => {
              event.currentTarget.maxLength = 10;
              const { value } = event.target;
              event.target.value = date(value);
            }}
          />
          <Input
            name="project"
            register={register}
            label="Projetos que participou"
            placeholder="Projetos que participou"
            error={errors.project?.message}
          />
          <Input
            name="url"
            register={register}
            label="URL da foto do Naver"
            placeholder="URL da foto do Naver"
            error={errors.url?.message}
          />
          <div />
          <Button type="submit" style={{ width: 176 }}>Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddNaver;
