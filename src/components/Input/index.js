import React from 'react';
import { Container, Text, Input } from './styles';

const InputComponent = ({ label, name, register, placeholder, error, type }) => (
  <Container>
    {label && <Text>{label}</Text>}
    <Container>
      <Input name={name} ref={register} placeholder={placeholder} error={error} type={type} />
      <Text position="absolute" bottom={0} style={{ color: 'red', fontSize: 10 }}>
        {error}
      </Text>
    </Container>
  </Container>
);

export default InputComponent;
