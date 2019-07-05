import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { AUTHORS, QUOTES } from './data.js';

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        };

        this.getQuote = this.getQuote.bind(this);
    }
    // random number between 0 and 103
    getRandomNumber = () => { return  Math.floor((Math.random() * 103) + 1); } 

    getQuote = () => {
        let randomNumber = this.getRandomNumber();
        // this.setState({
        //     quote: QUOTES[randomNumber],
        //     author: AUTHORS[randomNumber]
        // });
        this.setState({
            quote: QUOTES[7],
        });
    }

    render() {
        console.log(QUOTES[this.getRandomNumber()]);
        return (
            <div id="container">
                <div id="quote-box">
                    <div id="text">{QUOTES[this.getRandomNumber()]}</div>
                    <div id="author">The Author</div>
                    <button id="new-quote">Button</button>
                    <button><a id="tweet-quote">Tweet Quote</a></button>
                    <input value={this.state.quote}></input>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
