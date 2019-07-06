import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { AUTHORS, QUOTES } from './data.js';

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            quote: '"'+QUOTES[1]+'"',
            author: '-'+AUTHORS[1],
        };

        this.getQuote = this.getQuote.bind(this);
    }
    
    // generate and set random quote
    getQuote = () => {
        let randomNumber = this.getRandomNumber();
        this.setState({
            quote: '"'+QUOTES[randomNumber]+'"',
            author: '-'+AUTHORS[randomNumber],
        });
    }

    // random number between 0 and 103
    getRandomNumber = () => { return  Math.floor((Math.random() * 103) + 1); }
    
    render() {
        const randomColor = '#'+Math.random().toString(16).substr(-6);
        const randomBgColor = {background: randomColor}; 
        const randomTextColor = {color: randomColor};
        const btnBorder = {color: randomColor, border: '2px solid', borderColor: randomColor};
        // const myButtonClass = {myButtonClass: {'&:hover': {textDecoration: 'underline'}}};
        
        return (
            <div id="container" className="container-fluid" style={randomBgColor}>
                <div id="spacer"></div>
                <div id="quote-box" style={{background: 'white'}}>
                    <div id="text" style={randomTextColor}><h4>{this.state.quote}</h4></div>
                    <br />
                    <div id="author" style={randomTextColor}>{this.state.author}</div>
                    <br />
                    <button type="button" style={btnBorder} className="btn" id="new-quote" onClick={this.getQuote}>New Quote</button>
                    <a id="tweet-quote" style={btnBorder} className="btn" href="http://www.twitter.com/intent/tweet">Tweet</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
