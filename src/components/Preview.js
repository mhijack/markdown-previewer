import React from 'react';

const Preview = props => {
    return (
        <div id="preview-container">
            <p className="header">PREVIEW</p>
            <div id="preview" dangerouslySetInnerHTML={{__html: props.markdown}}>
            </div>
        </div>
    )
}

export default Preview;
