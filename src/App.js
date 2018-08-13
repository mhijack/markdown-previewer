import React, { Component } from 'react';
import logo from './logo.svg';
import Editor from './components/Editor';
import Preview from './components/Preview';
import placeholder from './components/placeholder';
import marked from 'marked';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: placeholder,
			markdown: marked(placeholder)
		}
	}
    render() {
        return (
            <div className="App">
                <Editor id="editor-container" input={this.state.input}/>
				<Preview id="preview-container" markdown={this.state.markdown}/>
            </div>
        );
    }
}


export default App;
