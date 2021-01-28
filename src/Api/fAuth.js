import { API, getUser, removeUser, getOptions, isUserLogged } from './lib';

const fAuth = {};

fAuth.auth = (history) => {
  if (!isUserLogged) {
    history.push('/sign-in');
  }
};

fAuth.signUp = async (body) => {
  const response = await fetch(`${API}/auth/sign-up`, getOptions('POST', body));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fAuth.signIn = async (body) => {
  const response = await fetch(`${API}/auth/sign-up`, getOptions('POST', body));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};
fAuth.signOff = () => {
  //solicitar eliminacion del token refresh
  removeUser();
};

export { fAuth };
