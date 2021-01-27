const API = process.env.REACT_APP_API ?? '';

const getUser = () => localStorage.getItem('USER_ID') ?? '';

const getAccessToken = () =>
  localStorage.getItem('ACCESS_TOKEN')
    ? `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    : '';

const getRefreshToken = () =>
  localStorage.getItem('REFRESH_TOKEN')
    ? `Bearer ${localStorage.getItem('REFRESH_TOKEN')}`
    : '';

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

const isUserLogged = () => getAccessToken && getRefreshToken && getOptions;

export { API, getUser, getOptions, isUserLogged };
