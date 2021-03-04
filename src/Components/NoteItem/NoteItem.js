import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import {
  faPen,
  faTrashAlt,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import './NoteItem.css';

import { fNote } from '../../Api/fNote';
import Input from '../Form/Input/Input';
import Select from '../Form/Select/Select';
import ButtonIcon from '../Button/ButtonIcon';
import useModal from '../../useModal';
import Modal from '../Modal/Modal';
import Confirm from '../Confirm/Confirm';

export default function NoteItem({ showMessage, idNote, name, tag, tagData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [tmpName, setTmpName] = useState(name);
  const [tmpTag, setTmpTag] = useState(tag);
  const queryClient = useQueryClient();

  const { isActive, show, hide } = useModal();

  const mutationCreate = useMutation(fNote.update, {
    onError: () => {
      showMessage("can't update note", 'fail');
    },
    onSuccess: () => {
      queryClient.refetchQueries('notes');
      setIsEdit(false);
      showMessage('note was updated', 'success');
    },
  });
  const mutationRemove = useMutation(fNote.remove, {
    onError: () => showMessage("can't remove note", 'fail'),
    onSuccess: () => {
      queryClient.refetchQueries('notes');
      showMessage('note was removed', 'success');
    },
  });
  const handleCancel = () => {
    setIsEdit(false);
    setTmpName(name);
  };
  const handelUpdate = () => {
    if (!tmpName) {
      showMessage('invalid name !!', 'fail');
    } else if (!tmpTag) {
      showMessage('invalid tag !!', 'fail');
    } else {
      const user = localStorage.getItem('USER_ID');
      const body = { name: tmpName, tag: tmpTag, user };
      mutationCreate.mutate({ id: idNote, body });
    }
  };
  const handleRemove = () => {
    mutationRemove.mutate(idNote);
  };

  if (isEdit)
    return (
      <div className="note-item-form">
        <ButtonIcon icon={faTimes} type={'light'} cb={() => handleCancel()} />
        <Input name={'tag'} value={tmpName} setValue={setTmpName} />
        <Select
          name={'tag'}
          optionList={tagData}
          value={tmpTag}
          setValue={setTmpTag}
        />
        <ButtonIcon icon={faCheck} type={'light'} cb={() => handelUpdate()} />
      </div>
    );
  return (
    <div className="note-item">
      <p className="note-item__name">{name}</p>
      <div className="note-item__controls">
        <ButtonIcon icon={faPen} cb={() => setIsEdit(true)} />
        <ButtonIcon icon={faTrashAlt} cb={() => show()} />
      </div>
      <Modal isActive={isActive} hide={hide}>
        <Confirm
          hide={hide}
          text={'Deseas eliminar la nota'}
          cb={() => handleRemove()}
        />
      </Modal>
    </div>
  );
}
