import { useState } from 'react'


function App() {


  const [article, setArticle] = useState([
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis sit doloribus commodi cumque. Dolores illum harum saepe porro reprehenderit consectetur, excepturi ipsam, itaque, quo non quasi delectus placeat tempora.', 
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis sit doloribus commodi cumque. Dolores illum harum saepe porro reprehenderit consectetur, excepturi ipsam, itaque, quo non quasi delectus placeat tempora.', 
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis sit doloribus commodi cumque. Dolores illum harum saepe porro reprehenderit consectetur, excepturi ipsam, itaque, quo non quasi delectus placeat tempora.'
  ]);
  const [newArticle, setNewArticle] = useState('')

 function handleSubmit(e) {
  e.preventDefault()
  setArticle([...article, newArticle])
  setNewArticle('')
 }

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

        <form action="" onSubmit={handleSubmit}>

          <div className="addArticleForm">
            <input type="text" className='form-control' value={newArticle} onChange={e => setNewArticle(e.target.value)} placeholder='add your next article' />
            <button className='btn glass-card'>ADD</button>

          </div>
        </form>

      </div>


   </>
  )
}

export default App
