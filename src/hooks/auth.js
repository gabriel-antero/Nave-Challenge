import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado com um AuthProvider');
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Nave:token');
    const id = localStorage.getItem('@Nave:id');

    if (token && id) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, id };
    }

    return {};
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('/users/login', {
      email,
      password,
    });

    const { token, id } = response.data;

    localStorage.setItem('@Nave:token', token);
    localStorage.setItem('@Nave:id', JSON.stringify(id));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, id });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@Nave:token');
    localStorage.removeItem('@Nave:id');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
