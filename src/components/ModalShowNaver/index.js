import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../Modal';
import ModalDeleteNaver from '../ModalDeleteNaver';

import api from '../../services/api';

import Close from '../../assets/Close-Icon.svg';
import Delete from '../../assets/Delete-Icon.svg';
import Edit from '../../assets/Edit-Icon.svg';

import { calculate_age } from '../../helpers/date';

import {
  Container,
  BackgroundImage,
  CloseIcon,
  Content,
  NaverName,
  NaverDescription,
  NaverTitle,
  IconsContainer,
  Icon,
} from './styles';

const ModalShowNaver = ({ isOpen, setIsOpen, id, handleDeleteNaver }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [naver, setNaver] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function loadNaver() {
      const { data } = await api.get(`/navers/${id}`);

      setNaver(data);
    }

    loadNaver();
  }, [id]);

  function toggleDeleteModal() {
    setDeleteModalOpen(!deleteModalOpen);
  }

  function toggleSuccessModel() {
    handleDeleteNaver();
    setIsOpen();
    setSuccessModalOpen(!successModalOpen);
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="1006px" height="506px">
        <Container>
          <BackgroundImage image={naver.url} />
          <Content>

            <CloseIcon src={Close} alt="Close" onClick={setIsOpen} />

            <div>
              <NaverName>{naver.name}</NaverName>
              <NaverDescription>{naver.job_role}</NaverDescription>
            </div>

            <div>
              <NaverTitle>Idade</NaverTitle>
              <NaverDescription>
                {calculate_age(naver.birthdate)}
                {' '}
                anos
              </NaverDescription>
            </div>

            <div>
              <NaverTitle>Tempo de empresa</NaverTitle>
              <NaverDescription>
                {calculate_age(naver.admission_date)}
                {' '}
                anos
              </NaverDescription>
            </div>

            <div>
              <NaverTitle>Projetos que participou</NaverTitle>
              <NaverDescription>{naver.project}</NaverDescription>
            </div>

            <IconsContainer>
              <Icon src={Delete} alt="delete" onClick={toggleDeleteModal} />
              <Icon src={Edit} alt="edit" onClick={() => history.push('/edit', { params: { id } })} />
            </IconsContainer>
          </Content>
        </Container>
      </Modal>

      <ModalDeleteNaver
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        setSuccessIsOpen={toggleSuccessModel}
        handleDeleteNaver={handleDeleteNaver}
      />
    </>
  );
};

export default ModalShowNaver;
