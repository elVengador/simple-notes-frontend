import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { POST } from '../../Components/Query/useQuery';

import Title from '../../Components/Title/Title';
import Input from '../../Components/Form/Input/Input';

export default function SingUp({ showMessage }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      showMessage('Confirm password is diferent', 'fail');
    } else {
      const response = await POST('/auth/sign-up', {
        email,
        username,
        password,
      });
      if (response.ok) {
        console.log(' RESPONSE:', response);
        const res = await response.json();
        console.log(' RES:', res);
        showMessage('This is a message', 'success');
        history.push('/sign-in');
      } else {
        const res = await response.json();
        console.log('error');
        showMessage(res, 'fail');
      }
    }
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
