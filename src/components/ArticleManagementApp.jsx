export default function ArticleManagement ({article, setArticle}) {

  function removeArticle(id) {
    const filteredArticles = article.filter((item) => item.id !== id)
    setArticle(filteredArticles)
  }

    return (
        <div className="article-box">
          {article.map((item) => (
            <div className='card glass-card' key={item.id}>
              <div className="geist">{item.text}</div>
              <button className="bin geist" onClick={() => removeArticle(item.id)}>REMOVE</button>
            </div>
          ))}
        </div>
    )
}