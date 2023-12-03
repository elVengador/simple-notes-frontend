import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './TagNote.css';
//import Note from "../Note/Note";

export default function TagNote({ testId, tag, notes }) {
  const iconDown = <FontAwesomeIcon className="icon" icon={faCaretDown} />;
  /*const componentNotes = notes.map((cur, idx) => (
    <Note key={`note-${idx}`} title={cur} />
  ));*/
  return (
    <div data-testid={testId} className="tag-note">
      <h3 className="tag-note__title">
        {iconDown}
        {tag}:
      </h3>
      {/*componentNotes*/}
    </div>
  );
}
