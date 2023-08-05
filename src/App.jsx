import { useState } from 'react';
import './App.css'
import phrases from "./db/phrases.json";
import { getRamdom } from './utils/random';
import QuoteBox from './components/QuoteBox';

const listBg = ["bg1", "bg2", "bg3", "bg4"]

function App() {

  const [phrase, setPhrase] = useState(getRamdom(phrases))
  const [currentBg, setCurrentBg] = useState(getRamdom(listBg))
  const handleChangePhrase = () => {
    setPhrase(getRamdom(phrases))
  setCurrentBg(getRamdom(listBg))  }
  return (
    <main className={`App ${currentBg}`}>
      <QuoteBox handleChangePhrase={handleChangePhrase} phrase={phrase}/>
      
    </main>
  )
}

export default App
