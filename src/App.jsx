import { useState } from 'react'
import ArticleAdderForm from './components/FormApp'
import ArticleManagement from './components/ArticleManagementApp'

function App() {
  const [article, setArticle] = useState([]);
  const [newArticle, setNewArticle] = useState('')

  return (
    <>
      <div className="container">
        <div className="title-bar">
          <h1 className="listTitle jetbrains">A simple list of articles</h1>
        </div>
        <ArticleManagement
          article={article}
          setArticle={setArticle}
        />
        <ArticleAdderForm
          newArticle={newArticle}
          setNewArticle={setNewArticle}
          article={article}
          setArticle={setArticle}
        />
      </div>
    </>
  )
}

export default App
