import './App.css';
import numberToMonth from './numberToMonth';

function Author(article) {
  const {name, image, isMediumMember} = article.author;
  const authorImage = (isMediumMember ? 'author-image-medium' : 'author-image');
  const articleDate = (article.postedDate).split('-');
  const dayOfMonth = articleDate[2].slice(0, 2);
  const month = numberToMonth(articleDate[1]);
  return (
    <div className="author-css">
      <div>
        <img src={image} className={authorImage} alt="author headshot" />
      </div>
      <div>
        {name}
      </div>
      <div>
        {month} {dayOfMonth} - {/*dot from fontawesome*/}
        {article.minutesToRead} min read   
      </div>
      <div>
        {/*BookMark Image? React w/ FontAwesome?*/} 
      </div>
    </div>
  );
}

export default Author;