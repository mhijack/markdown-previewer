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
