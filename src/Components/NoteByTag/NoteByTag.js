import React, { useState } from 'react';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './NoteByTag.css';

import Icon from '../../Components/Icon/Icon';
import NoteItem from '../../Components/NoteItem/NoteItem';

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
      <h2 className="note-by-tag-title">
        <Icon
          icon={showNotes ? faAngleDown : faAngleRight}
          cb={toogleNoteList}
        />
        {tag}
      </h2>
      {showNotes && noteItemList}
    </div>
  );
}
