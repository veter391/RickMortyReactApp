import { useRef, useEffect, useState, createContext } from 'react'
// import { isWebp } from "../../assets/js/imports.js"
// import RickYMortyService from '../../services/RickYMortyService'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from '../Header/Header'
import CharactersList from '../CharactersList/CharactersList'
import Aditionals from '../Aditionals/Aditionals'
import Footer from '../Footer/Footer'

import styles from '../../styles/styles.module.scss'
import './App.scss'

export const AppContext = createContext({});
 const AppProvider = AppContext.Provider;


function App() {

  const header = useRef();

  return (
    <AppProvider value={{header}}>
      <Header />

      <main className="main">
        <section className="characters">
          <h1 className={`${styles.title} ${styles['visually-hidden']}`}>Rick y motry</h1>
          <div className="container">
            <h2 className={styles.subtitle}>Lista de personatges</h2>
            <CharactersList />
          </div>
        </section>
      </main>

      <Aditionals />
      <Footer />
    </AppProvider>
  )
}

export default App;
