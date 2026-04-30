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
<div className="container glass-card">
<h1 className="listTitle">List of articles</h1>
<ul>
  {articlesList.map((inList, i) => (
    <li>{inList}</li>
  ))}
</ul>

</div>

    </>
  )
}

export default App
