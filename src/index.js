import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { AUTHORS, QUOTES } from './data.js';

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            quote: QUOTES[1],
            author: '-'+AUTHORS[1],
        };

        this.getQuote = this.getQuote.bind(this);
    }
    
    // generate and set random quote
    getQuote = () => {
        let randomNumber = this.getRandomNumber();
        this.setState({
            quote: QUOTES[randomNumber],
            author: '-'+AUTHORS[randomNumber],
        });
    }

    // random number between 0 and 103
    getRandomNumber = () => { return  Math.floor((Math.random() * 103) + 1); }
    
    render() {
        const randomColor = '#'+Math.random().toString(16).substr(-6);
        const randomBgColor = {background: randomColor}; 
        const randomTextColor = {color: randomColor};
        const btnBorder = {color: randomColor, border: '2px solid', borderColor: randomColor, '&:hover': {display: 'none'}} 
        
        return (
            <div id="container" class="container-fluid" style={randomBgColor}>
                <div id="spacer"></div>
                <div id="quote-box" style={{background: 'white'}}>
                    <div id="text" style={randomTextColor}><h4>{this.state.quote}</h4></div>
                    <br />
                    <div id="author" style={randomTextColor}>{this.state.author}</div>
                    <br />
                    <button type="button" style={btnBorder} class="btn" id="new-quote" onClick={this.getQuote}>New Quote</button>
                    <a id="tweet-quote" style={btnBorder} class="btn" href="http://www.twitter.com/intent/tweet">Tweet</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
