import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));