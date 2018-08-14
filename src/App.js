import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import placeholder from './components/placeholder';
import marked from 'marked';
import './App.css';

marked.setOptions({
	breaks: true,
	// headerPrefix: "header",
	// sanitize: true,
	// gfm: true
})

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: placeholder,
		}
	}
	handleChange = event => {
		this.setState({
			input: event.target.value
		})
	}
    render() {
        return (
            <div className="App">
                <Editor id="editor-container" input={this.state.input} handleChange={this.handleChange}/>
				<Preview id="preview-container" markdown={marked(this.state.input)}/>
            </div>
        );
    }
}

export default App;
