import './App.css';

function Author(article) {
  const {name, image, isMediumMember} = article.author;
  const authorImage = (() => { return (isMediumMember ? 'author-image' : 'author-image-medium');})

  return (
    <div>
      <img src={image} className={authorImage} alt="author headshot" />
      {name}
      {article.postedDate}
      {article.minutesToRead} min read      
    </div>
  );
}

export default Author;