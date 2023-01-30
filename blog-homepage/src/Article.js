import './App.css';
import Author from './Author';

function Article(article, id) {
  const cssClassName = this;
  const keyUnique = cssClassName + id;
  const imageCSSClassName = cssClassName + "-img";

  return (
    <div key={keyUnique} className="{cssClassName} EachStory">
      <div>
        <img src={article.image} className={imageCSSClassName} alt="article description" />
      </div>
      <div>
        <p>{article.hasAudioAvailable ? 'Audio available' : ''}</p> 
        <h1 className="Article-all">{article.title}</h1>
        {article.description}
        <div>
          {Author(article)}
        </div>
      </div>
      
    </div>
  );
}

export default Article;