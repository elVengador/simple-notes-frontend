import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './NotePage.css';

import { fTag } from '../../Api/fTag';
import { fNote } from '../../Api/fNote';

import Title from '../../Components/Title/Title';
import NoteForm from '../../Components/NoteForm/NoteForm';
import NoteItem from '../../Components/NoteItem/NoteItem';

export default function Notes({ showMessage }) {
  const history = useHistory();
  const iconCreate = <FontAwesomeIcon className="icon" icon={faPlus} />;

  useEffect(() => {
    if (
      !localStorage.getItem('USER_ID') ||
      !localStorage.getItem('ACCESS_TOKEN') ||
      !localStorage.getItem('REFRESH_TOKEN')
    ) {
      history.push('/sign-in');
    }
  }, []);

  // fetcher tag data
  const { status: tagStatus, data: tagData, error: tagError } = useQuery(
    'tags',
    fTag.findAll
  );
  const { status: noteStatus, data: noteData, error: noteError } = useQuery(
    'notes',
    fNote.findAll
  );

  if (tagStatus === 'error') return <p>{tagError.message}</p>;
  if (tagStatus === 'loading') return <p> Is Loading !!</p>;
  if (noteStatus === 'error') return <p>{noteError.message}</p>;
  if (noteStatus === 'loading') return <p> Is Loading !!</p>;

  const noteItemList = noteData.map((cur, idx) => (
    <NoteItem
      key={`note-item-${idx}`}
      showMessage={showMessage}
      idNote={cur._id}
      name={cur.name}
      tag={cur.tag}
      tagData={tagData}
    />
  ));
  return (
    <div className="note-page">
      <Title text={'Notes'} />
      <NoteForm showMessage={showMessage} tagData={tagData} />
      {noteItemList}
    </div>
  );
}
