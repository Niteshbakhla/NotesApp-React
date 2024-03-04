import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

function Notes({ id, text, date, handleDeleteNote, time, weekend, backgroundColor, handleUpdateNote }) {
    const [noteText, setNoteText] = useState("");
    const [isEditable, setIsEditable] = useState(false);

    const handleTextChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleDoubleClick = () => {
        setIsEditable(true);
        setNoteText(text)
    };

    const handleBlur = () => {
        setIsEditable(false);
        handleUpdateNote(id, noteText);
    };

    return (
        <div className='note' style={{ backgroundColor: backgroundColor }} onDoubleClick={handleDoubleClick}>
            {isEditable ? (
                <textarea rows={9} value={noteText} onChange={handleTextChange} onBlur={handleBlur} autoFocus style={{ backgroundColor: backgroundColor }} />
            ) : (
                <span>{text}</span>
            )}
            <div className='note-footer'>
                <div className='dateKey'>
                    <small>{date}</small>
                    <small>{time} {weekend}</small>
                </div>
                <BiTrash onClick={() => handleDeleteNote(id)} />
            </div>
        </div>
    )
}

export default Notes;
