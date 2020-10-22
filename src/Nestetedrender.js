

import React from 'react'

const renderElement = element => {
    const { text, author, comments = [], id} = element;
    return (
        <div style={{ padding: 10 }} key={id}>
            <div style={{ fontSize: 10 }}>{author}</div>
            <div style={{ border: '1px solid black', padding: 10 }}>{text}</div>
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <div style={{ marginRight: 10, color: 'blue' }}>Edit</div>
                <div style={{ marginRight: 10, color: 'blue' }}>Reply</div>
            </div>
            <div style={{ marginLeft: 20 }}>
                {comments.map(comment => renderElement(comment))}
            </div>
        </div>
    )
}

export default function Nestetedrender (props) {
  
    const {data = []} = props;
    return (
        <div>
            {data.map(firstChild =>  renderElement(firstChild))}
        </div>
    );
}
