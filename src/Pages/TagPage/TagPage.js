import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { fAuth } from '../../Api/fAuth';
import { fTag } from '../../Api/fTag';
import Title from '../../Components/Title/Title';
import TagForm from '../../Components/TagForm/TagForm';
import TagItem from '../../Components/TagItem/TagItem';

export default function TagList({ showMessage }) {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
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
    </div>
  );
}
