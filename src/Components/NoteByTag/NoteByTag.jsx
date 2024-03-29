import React, { useState } from 'react';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './NoteByTag.css';

import Icon from '../Icon/Icon';
import NoteItem from '../NoteItem/NoteItem';

export default function NoteByTag({ tag, notes, tagData, showMessage }) {
  const [showNotes, setShowNotes] = useState(false);
  const toogleNoteList = () => setShowNotes(!showNotes);
  const noteItemList = notes.map((cur, idx) => (
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
    <div className="note-by-tag">
      <h2 className="note-by-tag__title" onClick={toogleNoteList}>
        <Icon icon={showNotes ? faAngleDown : faAngleRight} />
        {`${tag} (${notes.length})`}
      </h2>
      {showNotes && noteItemList}
    </div>
  );
}
