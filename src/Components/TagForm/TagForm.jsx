import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { BeatLoader } from 'react-spinners';
import './TagForm.css';

import { fTag } from '../../Api/fTag';
import Input from '../Form/Input/Input';
import Button from '../Button/Button';

export default function TagForm({ showMessage }) {
  const [name, setName] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation(fTag.create, {
    onError: () => {
      showMessage("can't create tag", 'fail');
    },
    onSuccess: () => {
      queryClient.refetchQueries('tags');
      setName('');
      showMessage('tag was created', 'success');
    },
  });

  const handleCreateTag = (event) => {
    event.preventDefault();
    if (!name) {
      showMessage('invalid name !!', 'fail');
    } else {
      mutation.mutate({ name, user: localStorage.getItem('USER_ID') });
    }
  };

  return (
    <form className="tag-form">
      <Input name={'name'} value={name} setValue={setName} />
      <Button
        child={
          mutation.status === 'loading' ? (
            <BeatLoader color={'#fff'} />
          ) : (
            'Create'
          )
        }
        type={'primary'}
        cb={handleCreateTag}
      />
    </form>
  );
}
