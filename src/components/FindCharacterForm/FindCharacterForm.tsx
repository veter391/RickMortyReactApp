// components js,ts ...
import { useContext } from "react"
import { AppContext } from '../App/App'
// styles
import styles from '../../styles/styles.module.scss'
import './FindCharacterForm.scss'
// icons svg
import sprite from '../../assets/img/sprite.svg'


function FindCharacterForm() {
  // get variavles from context
  const { dataList, setCharacters, setCharacterPages }: any = useContext( AppContext );

  function findByName( list: object[] , substr: string ): object[] {
    // reset first pack of characters
    setCharacterPages(( characterPages: object ) => ({ ...characterPages, current: 1 }));
    // delete symbols and repeated spaces from substring
    const validSubstring = substr.toLowerCase().replace( /[^a-zA-Z0-9 ]/g, "" ).replace( /\s+/g, ' ' ).trim();
    // validate and return filtered by name list
    return list?.filter(( item: any ) => item.name.toLowerCase().includes( validSubstring ));
  }

  function findMostSimilar( e: any ) {
    e.preventDefault();

    console.log( 'Submited data' );
  }

  return (
      <form onSubmit={ findMostSimilar } className="form" id="form">
        <label className="form__label">
        <input onChange={ e => setCharacters(findByName( dataList, e.target.value )) }
               className={ `${ styles['input-reset'] } form__input` }
               type="search"
               name="search"
               placeholder="Search..."
               aria-label="Finde character" />
        </label>

        <button className={ `${ styles['btn-reset'] }  form__btn` }>
          <svg className="form__svg" aria-hidden="true">
              <use xlinkHref={ sprite + '#search' }></use>
          </svg>
        </button>
      </form>
    );
}

export default FindCharacterForm;
