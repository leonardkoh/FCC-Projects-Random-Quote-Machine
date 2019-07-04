import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="quote-box">
                    <div id="text">The Quote</div>
                    <div id="author">The Author</div>
                    <button id="new-quote">Button</button>
                    <button><a id="tweet-quote">Tweet Quote</a></button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
