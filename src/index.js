import React from 'react';
import ReactDOM from 'react-dom';
import './myStyles.scss'

const App = () => {
  return (
    <div className="app">
    {console.log('process.env.VERSION', process.env.VERSION)}
{console.log('process.env.PLATFORM', process.env.PLATFORM)}
{console.log('process.env.NODE_ENV', process.env.NODE_ENV)}
      <p>
        We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
        have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
        to prove it.
      </p>
      <p>- Captain Kirk Joe</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));