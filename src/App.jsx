import { useState } from 'react'
import ArticleAdderForm from './components/FormApp'


function App() {


  const [article, setArticle] = useState([]);
  const [newArticle, setNewArticle] = useState('')



  function removeArticle(i) {
    const filteredArticles = article.filter((singleArticle, index) => index !== i)
    setArticle(filteredArticles)
  }

  return (
    <>
      <div className="container">
        <div className="title-bar">
          <h1 className="listTitle">A simple list of articles</h1>
        </div>


        <div className="article-box">
          {article.map((inList, i) => (
            <div className='card glass-card' key={i}>
              <div >{inList}</div>
              <button className="bin" onClick={() => removeArticle(i)}>REMOVE</button>
            </div>
          ))}
        </div>


        <ArticleAdderForm newArticle={newArticle}
          setNewArticle={setNewArticle}
          article={article}
          setArticle={setArticle} />


      </div>


    </>
  )
}

export default App
