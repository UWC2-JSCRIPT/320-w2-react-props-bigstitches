import './App.css';
import Article from './Article';
import missedArticles from './missed-articles.json'
import yourArticles from './your-articles.json'

function App() {
  return (
    <main className="App">
      <h1>For you</h1>
      <span className="spanLine"></span>
      <div className="ForYou">
          {yourArticles.map(Article, "ForYou")}
      </div>
      <h1>In case you missed it</h1>
      <span className="spanLine"></span>
      <div className="MissedIt">
          {missedArticles.map(Article, "MissedIt")}
      </div>
    </main>
  );
}

export default App;
