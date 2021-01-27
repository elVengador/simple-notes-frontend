import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { BeatLoader } from 'react-spinners';
import './NoteForm.css';

import { fNote } from '../../Api/fNote';
import Input from '../Form/Input/Input';
import Select from '../Form/Select/Select';
import Button from '../Button/Button';

export default function NoteForm({ showMessage, tagData }) {
  const [name, setName] = useState('');
  const [tag, setTag] = useState(tagData[0] ? tagData[0]._id : '');
  const queryClient = useQueryClient();

  const mutation = useMutation(fNote.create, {
    onError: () => {
      showMessage("can't create Note", 'fail');
    },
    onSuccess: () => {
      queryClient.refetchQueries('notes');
      setName('');
      showMessage('note was created', 'success');
    },
  });

  const handleCreateNote = (event) => {
    event.preventDefault();
    if (!name) {
      showMessage('invalid name !!', 'fail');
    } else if (!tag) {
      showMessage('invalid tag !!', 'fail');
    } else {
      mutation.mutate({ name, tag, user: localStorage.getItem('USER_ID') });
    }
  };
  const stateButton =
    mutation.status === 'loading' ? <BeatLoader color={'#fff'} /> : 'Create';

  return (
    <form className="note-form">
      <Input name={'name'} value={name} setValue={setName} />
      <Select name={'tag'} optionList={tagData} value={tag} setValue={setTag} />
      <Button child={stateButton} type={'primary'} cb={handleCreateNote} />
    </form>
  );
}
