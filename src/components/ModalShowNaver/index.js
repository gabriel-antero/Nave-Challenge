import React, {useState} from 'react';

import Modal from '../Modal';

import Close from '../../assets/Close-Icon.svg'
import Delete from '../../assets/Delete-Icon.svg'
import Edit from '../../assets/Edit-Icon.svg'

import ModalDeleteNaver from '../../components/ModalDeleteNaver';

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
import { useHistory } from 'react-router-dom';

const ModalShowNaver = ({ isOpen, setIsOpen }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const history = useHistory();

  function toggleDeleteModal() {
    setDeleteModalOpen(!deleteModalOpen);
  }

  function toggleSuccessModel() {
    setIsOpen();
    setSuccessModalOpen(!successModalOpen);
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="1006px" height="506px">
        <Container>
          <BackgroundImage />
          <Content>
          
              <CloseIcon src={Close} alt="Close-test" onClick={setIsOpen}/>
  
              <div>
                <NaverName>Juliano Reis</NaverName>
                <NaverDescription>Front-end Developer</NaverDescription>
              </div>

              <div>
                <NaverTitle>Idade</NaverTitle>
                <NaverDescription>Lorem Ipsum</NaverDescription>
              </div>

              <div>
                <NaverTitle>Tempo de empresa</NaverTitle>
                <NaverDescription>Lorem Ipsum</NaverDescription>
              </div>

              <div>
                <NaverTitle>Projetos que participou</NaverTitle>
                <NaverDescription>Lorem Ipsum</NaverDescription>
              </div>

            <IconsContainer>
                <Icon src={Delete} alt="delete-test" onClick={toggleDeleteModal}/>
                <Icon src={Edit} alt="edit-test" onClick={() => history.push('/edit')}/>
            </IconsContainer>
          </Content>
        </Container>
      </Modal>

      <ModalDeleteNaver
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        setSuccessIsOpen={toggleSuccessModel}
      />
    </>
  );
};

export default ModalShowNaver;