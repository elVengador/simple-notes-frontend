import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fAuth } from '../../Api/fAuth';
import { POST } from '../../Components/Query/useQuery';

import Title from '../../Components/Title/Title';
import Input from '../../Components/Form/Input/Input';

export default function SignIn({ showMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSignIn = async (event) => {
    event.preventDefault();
    if (!email) return showMessage('email invalid !!', 'fail');
    if (!password) return showMessage('password invalid !!', 'fail');
    await fAuth
      .signIn({ email, password })
      .then((res) => {
        showMessage(res.message, 'success');
        const { accessToken, refreshToken } = res;
        localStorage.setItem('ACCESS_TOKEN', accessToken);
        localStorage.setItem('REFRESH_TOKEN', refreshToken);
        localStorage.setItem('USER_ID', res.user);
        history.push('/notes');
      })
      .catch((res) => {
        showMessage(res.message, 'fail');
      });
  };
  return (
    <div className="sign-in">
      <Title text={'Sign In'} />
      <form className="form">
        <Input
          name={'email'}
          value={email}
          setValue={setEmail}
          type={'email'}
        />
        <Input
          name={'password'}
          value={password}
          setValue={setPassword}
          type={'password'}
        />

        <button
          className="button-primary--center"
          onClick={(event) => handleSignIn(event)}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
