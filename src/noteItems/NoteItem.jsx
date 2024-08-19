import styles from './NoteItem.module.css';

function NoteItem({ note }) {
    return(
        <li>{ note }</li>
    );
}

export default NoteItem;