export default function ArticleManagement ({article, setArticle}) {

  function removeArticle(i) {
    const filteredArticles = article.filter((singleArticle, index) => index !== i)
    setArticle(filteredArticles)
  }

    return (
        <div className="article-box">
          {article.map((inList, i) => (
            <div className='card glass-card' key={i}>
              <div className="geist">{inList}</div>
              <button className="bin geist" onClick={() => removeArticle(i)}>REMOVE</button>
            </div>
          ))}
        </div>
    )
}