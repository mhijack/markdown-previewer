import React from 'react';

const Editor = props => {
    return (
        <div id="editor-container">
            <p className="header">MARKDOWN</p>
            <textarea id="input" value={props.input} placeholder="type your markdown here"></textarea>
        </div>
    );
};

export default Editor;
