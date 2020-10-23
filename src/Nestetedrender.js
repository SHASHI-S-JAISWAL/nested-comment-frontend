
import React, { useState } from 'react'

export default function Nestetedrender (props) {
    const {data = [], updateList, addChild,user } = props;
    const [editable,setEditable] = useState('')

    const editMode = (a) => {
        const enteredName = prompt(a.text);
        updateList({
            _id : a._id,
            text : enteredName
        });
    };

    const addreply = (a) => {
        const enteredName = prompt('write reply text');
        addChild({
            text : enteredName,
            author: user,
            parent: a
        });
    }
    const renderElement = element => {
        const { text, author, comments = [], id} = element;
        return (
            <div style={{ padding: 10 }} key={id}>
                <div style={{ fontSize: 10 }}>{author}</div>
                <div style={{ border: '1px solid black', padding: 10 }}>{text}</div>
                <div style={{ display: 'flex', marginBottom: 10 }}>
                    {user === element.author?<button onClick = {() => editMode(element)}
                    style={{ marginRight: 10, color: 'blue' }}>Edit</button>:
                    <div></div>}
                    <button style={{ marginRight: 10, color: 'blue' }} onClick = {() => addreply(element._id)} >Reply</button>
                </div>
                <div style={{ marginLeft: 20 }}>
                    {comments.map(comment => renderElement(comment))}
                </div>
            </div>
        )
    }


    return (
        <div>
            {data.map(firstChild =>  renderElement(firstChild))}
        </div>
    );
}
