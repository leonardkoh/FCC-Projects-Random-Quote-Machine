import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { AUTHORS, QUOTES } from './data.js';

class App extends React.Component {    
    getRandomNumber = Math.floor((Math.random() * 103) + 1); 

    render() {
        console.log(getRandomNumber);
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
