import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import {
  faPen,
  faTrashAlt,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import './TagItem.css';

import { fTag } from '../../Api/fTag';
import Input from '../Form/Input/Input';
import ButtonIcon from '../Button/ButtonIcon';

export default function Tag({ showMessage, idTag, name }) {
  const [isEdit, setIsEdit] = useState(false);
  const [tmpName, setTmpName] = useState(name);
  const queryClient = useQueryClient();

  const mutationCreate = useMutation(fTag.update, {
    onError: () => {
      showMessage("can't update tag", 'fail');
    },
    onSuccess: () => {
      queryClient.refetchQueries('tags');
      setIsEdit(false);
      showMessage('tag was updated', 'success');
    },
  });
  const mutationRemove = useMutation(fTag.remove, {
    onError: () => showMessage("can't remove tag", 'fail'),
    onSuccess: () => {
      queryClient.refetchQueries('tags');
      showMessage('tag was removed', 'success');
    },
  });
  const handleCancel = () => {
    setIsEdit(false);
    setTmpName(name);
  };
  const handelUpdate = () => {
    if (!tmpName) {
      showMessage('invalid name !!', 'fail');
    } else {
      const user = localStorage.getItem('USER_ID');
      const body = { name: tmpName, user };
      mutationCreate.mutate({ id: idTag, body });
    }
  };
  const handleRemove = () => mutationRemove.mutate(idTag);

  if (isEdit)
    return (
      <div className="tag-item-form">
        <ButtonIcon icon={faTimes} type={'light'} cb={() => handleCancel()} />
        <Input name={'tag'} value={tmpName} setValue={setTmpName} />
        <ButtonIcon icon={faCheck} type={'light'} cb={() => handelUpdate()} />
      </div>
    );
  return (
    <div className="tag-item">
      <p className="tag-item__name">{name}</p>
      <div className="tag-item__controls">
        <ButtonIcon icon={faPen} cb={() => setIsEdit(true)} />
        <ButtonIcon icon={faTrashAlt} cb={() => handleRemove()} />
      </div>
    </div>
  );
}
