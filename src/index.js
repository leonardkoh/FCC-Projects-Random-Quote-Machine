import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { AUTHORS, QUOTES } from './data.js';

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            quote: QUOTES[1],
            author: AUTHORS[1],
            color: ''
        };

        this.getQuote = this.getQuote.bind(this);
    }
    
    // generate and set random quote
    getQuote = () => {
        let randomNumber = this.getRandomNumber();
        let randomColor = '#'+Math.random().toString(16).substr(-6); 
        console.log(randomColor);
        this.setState({
            quote: QUOTES[randomNumber],
            author: AUTHORS[randomNumber],
            color: randomColor
        });
    }

    // random number between 0 and 103
    getRandomNumber = () => { return  Math.floor((Math.random() * 103) + 1); } 
    
    render() {
        return (
            <div id="container" class="container" style={{background: 'grey'}}>
                <div id="quote-box">
                    <div id="text"><h4>{this.state.quote}</h4></div>
                    <div id="author">{this.state.author}</div>
                    <br />                    
                    <button type="button" class="btn btn-outline-primary" id="new-quote" onClick={this.getQuote}>New Quote</button>
                    <a id="tweet-quote" class="btn btn-outline-secondary" href="http://www.twitter.com/intent/tweet">Tweet Quote</a>
                    <br />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
