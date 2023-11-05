// components js,react etc...
import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../App/App'
import Character from "../Character/Character"
import RickYMortyService from '../../services/RickYMortyService'
import Spinner from '../Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

// styles
import styles from '../../styles/styles.module.scss'
import './CharactersList.scss'

// define props type
type CharacterListPropsType = {
  characterPages: {
    current: number;
    last: number;
  };
  setDataList: any;
  characters: object[];
}

function CharactersList({ characterPages, setDataList, characters }: CharacterListPropsType) {

  // get variavles from context
  const { setCharacters, setCharacterPages }: any = useContext( AppContext );

  // error state
  const [error, setError] = useState(false);
  // loading state
  const [loading, setLoading] = useState(true);

  // get all the characters once so as not to call the function every time when rendering
  useEffect(() => {
    // get data(characters)
    const service = new RickYMortyService();
    // await to all characters
    service.getAllCharacters()
      .then(( data: any | undefined ) => {

        // set data list and characters(clone of global list)
        setDataList([...data]);
        setCharacters([...data]);

        // disable spinner when data is loaded
        setLoading(false);
      })
      .catch(err => {
        // throw error
        setError(err);
        // disable spinner when data is loaded
        setLoading(false);
      });
  }, [])

  // watch error every render
  useEffect(() => {
    // add error mesage when character doesn't exist
    const newMessage: any = { message: "The character doesn't exist please try again" };
    // check characters and no-loading if both true return message
    setError( !loading && characters.length === 0 ? newMessage : false );

  }, [characters] )

  function addCharacters() {
    // increment current characterPage and define last
    setCharacterPages({ ...characterPages, last: Math.ceil(characters.length / 20), current: ++characterPages.current });
  }

  // if exist error return error
  const errorMessage = error ? <ErrorMessage error={ error } /> : null,
        // if wait info from server return spinner
        spinner = loading ? <Spinner /> : null,
        // get pack of 20 characters
        items = characters.map(( item: any ) => <Character key={ item.id } char={ item } />).slice(0, characterPages.current * 20),
        // if doesn't exist error and spinner is null return content
        content = !( loading || error ) ? items : null,
        /*hide btn when error, spinner or characters(pack) <= 20*/
        button = characters.length / 20 >= 1 && !(loading || error) && characterPages.current < characterPages.last && <MoreButton clickFunction={ addCharacters } />

  return (
    <>

      { errorMessage }
      { spinner }

      <ul className={ `${ styles['list-reset'] } characters__list` }>
        { content }
      </ul>

      { button }

    </>
  );
}

// new mini component MoreBtn
function MoreButton({ clickFunction } : { clickFunction: () => void }) {
  return(
    <button onClick={ clickFunction }
      className={ `${ styles['btn-reset'] } characters__btn` }
    >Add more +</button>
  );
}

export default CharactersList;
