import logo from './logo.svg';
import './App.css';
import Article from './Article';
import missedArticles from './missed-articles.json'
import yourArticles from './your-articles.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit dog <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <div>
          {yourArticles.map(Article, "ForYou")}
       </div>
        <div>
          {missedArticles.map(Article, "MissedIt")}
        </div>
      </header>
    </div>
  );
}

export default App;
