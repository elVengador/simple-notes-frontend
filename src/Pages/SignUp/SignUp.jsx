import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fAuth } from '../../Api/fAuth';
import Title from '../../Components/Title/Title';
import Input from '../../Components/Form/Input/Input';
import {getErrorMessage} from '../../utils/error'

export default function SingUp({ showMessage }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!email) return showMessage('Invalid email', 'fail');
    if (!username) return showMessage('Invalid Username', 'fail');
    if (!password) return showMessage('Invalid password', 'fail');
    if (password !== confirmPassword)
      return showMessage('Confirm password is diferent', 'fail');
    await fAuth
      .signUp({
        email,
        username,
        password,
      })
      .then(() => {
        showMessage('Sign up successfull', 'success');
        history.push('/sign-in');
      })
      .catch((res) => {
        const message = getErrorMessage(res)
        showMessage(message, 'fail');
      });
  };
  return (
    <div className="sign-up">
      <Title text={'Sign Up'} />
      <form className="form">
        <Input
          name={'email'}
          value={email}
          setValue={setEmail}
          type={'email'}
        />
        <Input name={'username'} value={username} setValue={setUsername} />
        <Input
          name={'password'}
          value={password}
          setValue={setPassword}
          type={'password'}
        />
        <Input
          name={'confirm-pasword'}
          value={confirmPassword}
          setValue={setConfirmPassword}
          type={'password'}
        />
        <button
          className="button-primary--center"
          onClick={(event) => handleSignUp(event)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
