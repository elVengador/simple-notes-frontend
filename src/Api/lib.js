import {VITE_URI} from '../constants'

const API =
  process.env.NODE_ENV === 'production'
    ? VITE_URI
    : 'http://localhost:4000/api/v1';

const getUser = () => localStorage.getItem('USER_ID') ?? '';

const getAccessToken = () =>
  localStorage.getItem('ACCESS_TOKEN')
    ? `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    : '';

const getRefreshToken = () =>
  localStorage.getItem('REFRESH_TOKEN')
    ? `Bearer ${localStorage.getItem('REFRESH_TOKEN')}`
    : '';

const removeUser = () => {
  localStorage.removeItem('USER_ID');
  localStorage.removeItem('ACCESS_TOKEN');
  localStorage.removeItem('REFRESH_TOKEN');
};

const getOptions = (method, body = {}) => {
  const opt = {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken(),
      Refresh: getRefreshToken(),
    },
  };
  if (['POST', 'PUT'].includes(method)) opt.body = JSON.stringify(body);
  return opt;
};

const isUserLogged = () => getAccessToken() && getRefreshToken() && getUser();

export { API, getUser, removeUser, getOptions, isUserLogged };
