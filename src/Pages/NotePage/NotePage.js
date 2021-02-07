import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NotePage.css';

import { fAuth } from '../../Api/fAuth';
import { fTag } from '../../Api/fTag';
import { fNote } from '../../Api/fNote';

import Title from '../../Components/Title/Title';
import NoteForm from '../../Components/NoteForm/NoteForm';
import NoteByTag from '../../Components/NoteByTag/NoteByTag';

export default function Notes({ showMessage }) {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
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

  // agrupo las notas por tag
  const notesByTagData = tagData.map((curTag) => {
    const { _id, name } = curTag;
    return {
      tag: name,
      notes: noteData.filter((curNote) => curNote.tag === _id),
    };
  });
  // listo las notas por tag
  const noteByTagList = notesByTagData.map((cur, idx) => (
    <NoteByTag
      key={`note-by-tag-${idx}`}
      tag={cur.tag}
      notes={cur.notes}
      tagData={tagData}
      showMessage={showMessage}
    />
  ));

  // optiones del titulo
  const titleOptions = [
    {
      icon: showForm ? faTimes : faPlus,
      cb: () => {
        setShowForm(!showForm);
      },
    },
  ];
  return (
    <div className="note-page">
      <Title text={'Notes'} options={titleOptions} />
      {showForm && <NoteForm showMessage={showMessage} tagData={tagData} />}

      {noteByTagList}
    </div>
  );
}
