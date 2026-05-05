export default function ArticleAdderForm({ newArticle, setNewArticle, article, setArticle }) {

  function handleSubmit(e) {
    e.preventDefault();

    if (newArticle.trim() === '') return;

    const id = crypto.randomUUID();
    console.log(id);


    const articleObject = {
      id,
      text: newArticle
    };

    setArticle([...article, articleObject]);
    setNewArticle('');
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