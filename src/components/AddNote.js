import { useState } from "react";

const AddNote = ({handleAddNote}) => {

    const [noteText, setnoteText] = useState('');

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setnoteText(event.target.value)
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setnoteText('')
        }
    }

    const characterLimit = 200;

    return (
        <div className="note new">
            <textarea 
            rows="8" 
            cols="10" 
            placeholder="type to add a note..." 
            value={noteText} 
            onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;