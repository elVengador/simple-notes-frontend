import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import './NotePage.css';

import { fAuth } from '../../Api/fAuth';
import { fTag } from '../../Api/fTag';
import { fNote } from '../../Api/fNote';

import Title from '../../Components/Title/Title';
import NoteForm from '../../Components/NoteForm/NoteForm';
import NoteItem from '../../Components/NoteItem/NoteItem';

export default function Notes({ showMessage }) {
  const history = useHistory();
  useEffect(() => fAuth.auth());

  const errorOption = {
    onError: (res) => {
      if (res.message === 'no token provided') {
        fAuth.signOff();
        history.push('/sign-in');
      }
    },
  };
  // fetcher tag data
  const { status: tagStatus, data: tagData, error: tagError } = useQuery(
    'tags',
    fTag.findAll,
    errorOption
  );
  const { status: noteStatus, data: noteData, error: noteError } = useQuery(
    'notes',
    fNote.findAll,
    errorOption
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
