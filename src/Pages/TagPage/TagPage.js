import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { fTag } from '../../Api/fTag';
import Title from '../../Components/Title/Title';
import TagForm from '../../Components/TagForm/TagForm';
import TagItem from '../../Components/TagItem/TagItem';

export default function TagList({ showMessage }) {
  const iconCreate = <FontAwesomeIcon className="icon" icon={faPlusCircle} />;
  const history = useHistory();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (
      !localStorage.getItem('USER_ID') ||
      !localStorage.getItem('ACCESS_TOKEN') ||
      !localStorage.getItem('REFRESH_TOKEN')
    ) {
      history.push('/sign-in');
    }
  }, []);

  const { status, data, error } = useQuery('tags', fTag.findAll);

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

  return (
    <div className="tag-page">
      <Title text={'Tags'} />
      <TagForm showMessage={showMessage} />
      {tagItemList}
    </div>
  );
}
