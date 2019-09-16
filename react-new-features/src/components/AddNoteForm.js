import React, {useState, useContext} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {

    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const position = useMousePosition();

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        });
        setTitle('');
        setBody(''); 
    } 

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeBody = (e) => {
        setBody(e.target.value);
    }
    return (
        <div>
            <p>Add note{position.x - position.y}</p>
            <form onSubmit={addNote}>
                <p><input value={title} onChange={changeTitle}/></p>
                <p><textarea value={body} onChange={changeBody}/></p>
                <p><button>add note</button></p>
            </form>
        </div>
    )
}

export default AddNoteForm;