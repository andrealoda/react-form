export default function ArticleAdderForm ({ newArticle, setNewArticle, article, setArticle }) {

 function handleSubmit(e) {
  e.preventDefault()
  setArticle([...article, newArticle])
  setNewArticle('')
 }

    return (

        <form action="" onSubmit={handleSubmit}>

          <div className="addArticleForm">
            <input type="text" className='form-control' value={newArticle} onChange={e => setNewArticle(e.target.value)} placeholder='add your next article' />
            <button className='btn glass-card'>ADD</button>

          </div>
        </form>




    )
}