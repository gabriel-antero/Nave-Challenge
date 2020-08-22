import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import { useAuth } from '../../hooks/auth';

import { loginSchema } from '../../helpers/yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Logo, Form } from './styles';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(loginSchema) });

  const history = useHistory();
  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });

      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content>
        <Logo src={logoImg} alt="Nave Logo" />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            register={register}
            label="E-mail"
            placeholder="E-mail"
            error={errors.email?.message}
          />

          <Input
            name="password"
            register={register}
            label="Senha"
            placeholder="Senha"
            type="password"
            error={errors.password?.message}
          />

          <Button type="submit">Entrar</Button>
        </Form>

      </Content>
    </Container>
  );
};

export default SignIn;
