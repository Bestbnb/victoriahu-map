const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    render() {
        return (
            <div>I am a bojack horseman</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));