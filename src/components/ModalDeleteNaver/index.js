import React, { useState } from 'react';

import Modal from '../Modal';

import ModalSuccess from '../ModalSuccess';

import { Container, Title, Description, ButtonContainer, Button } from './styles';

const ModelDeleteNaver = ({
  isOpen,
  setIsOpen,
  setSuccessIsOpen,
  handleDeleteNaver,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteModel = () => {
    handleDeleteNaver();
    setIsOpen();
    setModalOpen(!modalOpen);
  };

  function handleSuccessModel() {
    setSuccessIsOpen();
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="592px" height="233px">
        <Container>
          <Title>Excluir Naver</Title>
          <Description>Tem certeza que deseja excluir este Naver?</Description>

          <ButtonContainer>
            <Button
              style={{ background: '#fff', color: '#000', border: '1px solid #121212' }}
              onClick={setIsOpen}
            >
              Cancelar
            </Button>
            <Button onClick={handleDeleteModel}>Excluir</Button>
          </ButtonContainer>
        </Container>
      </Modal>

      <ModalSuccess
        isOpen={modalOpen}
        setIsOpen={handleSuccessModel}
        title="Naver excluído"
        description="Naver excluído com sucesso!"
      />
    </>
  );
};

export default ModelDeleteNaver;
