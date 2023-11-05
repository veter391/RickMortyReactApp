// import components
import { useRef, useEffect, useState, createContext } from 'react'
import { isWebp } from "../../assets/js/imports"
import Header from '../Header/Header'
import CharactersList from '../CharactersList/CharactersList'
import Aditionals from '../Aditionals/Aditionals'
import Footer from '../Footer/Footer'
// styles
import styles from '../../styles/styles.module.scss'
import './App.scss'

// export AppContext => create context
export const AppContext = createContext({});
const AppProvider = AppContext.Provider;


function App() {
  // dataList general list of characters
  const [dataList, setDataList] = useState([]);
  // characters list of characters for changing(map,filter,etc...) ~~ clone of dataList
  const [characters, setCharacters] = useState([]);

  // character pages pack of 20
  const [characterPages, setCharacterPages] = useState({
    current: 1,
    last: 42,
  });

  // find header
  const header = useRef();

  useEffect(() => {
    // check webp suport add class webp to body(.webp) => when you use images.webp
    isWebp();
    // log scripr connected
    console.log('Script connected...');
  },[])

  return (
    <AppProvider value={{ header , dataList, setCharacters, setCharacterPages }}>
      <Header />

      <main className="main">
        <section className="characters">
          <h1 className={`${ styles.title } ${ styles['visually-hidden'] }`}>Rick y motry</h1>
          <div className="container">
            <h2 className={ styles.subtitle }>Lista de personatges</h2>
            <CharactersList characterPages={ characterPages } characters={ characters } setDataList={ setDataList } />
          </div>
        </section>
      </main>

      <Aditionals />
      <Footer />
    </AppProvider>
  )
}

export default App;
