import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { fAuth } from '../../Api/fAuth';
import { fTag } from '../../Api/fTag';
import useModal from '../../useModal';
import Title from '../../Components/Title/Title';
import TagForm from '../../Components/TagForm/TagForm';
import TagItem from '../../Components/TagItem/TagItem';
import Modal from '../../Components/Modal/Modal';
import Confirm from '../../Components/Confirm/Confirm';

export default function TagList({ showMessage }) {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [confirmTitle, setConfirmTitle] = useState('');
  const [confirmCb, setConfirmCb] = useState();
  const { isMenuActive, showMenu, hideMenu } = useModal();
  useEffect(() => fAuth.auth());

  const { status, data, error } = useQuery('tags', fTag.findAll, {
    onError: (res) => {
      if (res.message === 'no token provided') {
        fAuth.signOff();
        history.push('/sign-in');
      }
    },
  });

  if (status === 'error') return <p>{error.message}</p>;
  if (status === 'loading') return <p> Is Loading !!</p>;
  const tagItemList = data.map((cur, idx) => (
    <TagItem
      key={`tag-${idx}`}
      idTag={cur._id}
      name={cur.name}
      showMessage={showMessage}
      isMenuActive={isMenuActive}
      hideMenu={hideMenu}
      showMenu={showMenu}
      setConfirmTitle={setConfirmTitle}
      setConfirmCb={setConfirmCb}
    />
  ));
  const titleOptions = [
    {
      icon: showForm ? faTimes : faPlus,
      cb: () => {
        setShowForm(!showForm);
      },
    },
  ];

  return (
    <div className="tag-page">
      <Title text={'Tags'} options={titleOptions} />
      {showForm && <TagForm showMessage={showMessage} />}
      {tagItemList}
      <Modal isMenuActive={isMenuActive} hideMenu={hideMenu}>
        <Confirm hideMenu={hideMenu} text={confirmTitle} cb={confirmCb} />
      </Modal>
    </div>
  );
}
