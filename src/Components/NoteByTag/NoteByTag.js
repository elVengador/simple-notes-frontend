import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './NoteByTag.css';

import Icon from '../../Components/Icon/Icon';
import NoteItem from '../../Components/NoteItem/NoteItem';

export default function NoteByTag({ tag, notes, tagData, showMessage }) {
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
        <Icon icon={faAngleDown} />
        {tag}
      </h2>
      {noteItemList}
    </div>
  );
}
