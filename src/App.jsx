import { useState } from 'react'


const articlesList = [
  'articolo 1',
  'articolo 2',
  'articolo 3',
]

function App() {


  const [article, setArticle] = useState(['articolo 1', 'articolo 2', 'articolo 3']);


  return (
    <>
      <div className="container">
        <div className="title-bar">
          <h1 className="listTitle">List of articles</h1>
        </div>


        <div className="article-box">
          {articlesList.map((inList, i) => (
            <div className='card glass-card' key={i}>
              <div >{inList}</div>
            </div>
          ))}
        </div>



      </div>

    </>
  )
}

export default App
