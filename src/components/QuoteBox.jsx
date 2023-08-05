import './styles/QuoteBox.css'

const QuoteBox = ({ handleChangePhrase, phrase }) => {

  return (
    <section className='fondo'>
      <div className='title'>
        <h1>Fortune cookies</h1>
      </div>
      <section>
        <article className='bandera' >
          <p>
            {phrase.phrase}
          </p>
        </article>
        <div className='button-container'>
        <button onClick={handleChangePhrase} type="button" className='button'>Try luck</button>
        </div>
      </section>

      <footer>
        <h4>Author: {phrase.author}</h4>
      </footer>
    </section>
  )
}

export default QuoteBox