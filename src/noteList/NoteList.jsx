import { Component } from 'react';
import styles from './NoteList.module.css';

class NoteList extends Component {
    #title = 'My notes';

    get title() {
        return `${this.#title}`;
    }

    set title(title) {
        if (typeof title === 'string') {
            this.#title = title.replace(/[0-9\s]/g, '');
        } else {
            this.#title = '';
        }
    }

    render() {
        this.title = this.props.title;

        return (
            <>
                <h2>{this.title}</h2>
                <ul>
                    {this.props.children}
                </ul>
            </>
        );
    }
}

export default NoteList;
