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
        };

        this.getQuote = this.getQuote.bind(this);
    }
    
    // generate and set random quote
    getQuote = () => {
        let randomNumber = this.getRandomNumber();
        this.setState({
            quote: QUOTES[randomNumber],
            author: AUTHORS[randomNumber],
        });
    }

    // random number between 0 and 103
    getRandomNumber = () => { return  Math.floor((Math.random() * 103) + 1); }
    // random color
    // getRandomColor = () => { return '#'+Math.random().toString(16).substr(-6); }
    
    render() {
        let randomColor = '#'+Math.random().toString(16).substr(-6);
        // let randomBgColor = {background: randomColor}; 
        let randomTextColor = {color: randomColor}; 
        
        return (
            <div id="container" class="container-fluid" style={{background: 'black'}}>
                <div id="quote-box">
                    <div id="text" style={randomTextColor}><h4>{this.state.quote}</h4></div>
                    <div id="author" style={randomTextColor}>{this.state.author}</div>
                    <br />
                    <button type="button" class="btn btn-outline-primary" id="new-quote" onClick={this.getQuote}>New Quote</button>
                    <a id="tweet-quote" class="btn btn-outline-secondary" href="http://www.twitter.com/intent/tweet">Tweet Quote</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
