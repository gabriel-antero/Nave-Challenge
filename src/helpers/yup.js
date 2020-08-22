import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

export const addNaverSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  job_role: Yup.string().required('Cargo obrigatório'),
  birthdate: Yup.string().required('Idade obrigatória'),
  admission_date: Yup.string().required('Tempo de empresa obrigatório'),
  project: Yup.string().required('Projeto obrigatório'),
  url: Yup.string().required('Url obrigatório'),
});

export const editNaverSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  job_role: Yup.string().required('Cargo obrigatório'),
  birthdate: Yup.string().required('Idade obrigatória'),
  admission_date: Yup.string().required('Tempo de empresa obrigatório'),
  project: Yup.string().required('Projeto obrigatório'),
  url: Yup.string().required('Url obrigatório'),
});
