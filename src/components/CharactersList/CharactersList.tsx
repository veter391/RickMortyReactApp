import { useEffect, useState } from 'react';
import styles from '../../styles/styles.module.scss'
import Character from "../Character/Character";
import './CharactersList.scss'
import errorPng from '../../assets/img/error.png'
import errorWebp from '../../assets/img/error.png'
import getData from '../../helpers/getData';

type StateProperties = {
  info: object;
  results: object[];
}

function CharactersList() {

  const [characters, setCharacters] = useState<StateProperties[]>([]);
  const [error, setError] = useState(false);
  const [charactersPages, setCharactersPages] = useState({
    current: 1,
    last: 42,
  });
  const [btnSettings, setBtnSettings] = useState({
    disabled: false,
    styles: { display: 'none', visibility: 'hidden' },
    class: ''
  })

  function findByName(list, substr) {
    return list?.filter(item => item.name.toLowerCase().includes(substr));
  }

  function pack(list, showedItems, page) {
    const packEnd = page * showedItems;
    const packStart = packEnd - showedItems;

    console.log(packEnd, packStart, list.length)

    if(packStart > list.length){
      return console.error('Not found more items');
    }

    return list?.filter((item:any, i:number) => i >= packStart && i < packEnd);
  }

  function getCharacters() {
    // await to response

      getData().then(data => {
        setError(false)

        // add total pages to variable
        // setCharactersPages({...charactersPages, last: data.info.pages});


        // check characters page and disable btn if it's last
        if (charactersPages.current >= charactersPages.last) {
          setBtnSettings({ ...btnSettings, disabled: true, class: 'disabled' })
        } else {
          setBtnSettings({ ...btnSettings, disabled: false, class: '' })
        }

        // hide btn more when exist only one page or no pages
        if (charactersPages.last > 1) {
          setBtnSettings({ ...btnSettings, styles: { display: 'block', visibility: 'visible' } })
        } else {
          setBtnSettings({ ...btnSettings, styles: { display: 'none', visibility: 'hidden' } })
        }

        // return findByName(data, 'morty');
        return pack(data, 1, 826);
      })
      .then(data => {
        console.log(data)
        setCharacters([...data])
      })
      .catch(err => {
        // block btn
        setBtnSettings({ ...btnSettings, styles: { display: 'none', visibility: 'hidden' } })
        setError(err)
      });
  }


  // add 20 characters in the begining
  useEffect(() => {
    getCharacters();
  }, [])
  // const pack = characters.filter((el, i) => el.id < 20);


  return (
    <>
      <ul className={`${styles['list-reset']} characters__list`}>
        {error ? <ErrorData error={error} /> : characters.map((item : any) => <Character key={item.id} char={item} />)}
      </ul>
      <div className={styles.loading}></div>
      <button className={`${styles['btn-reset']} characters__btn ${ btnSettings.class }`} disabled={ btnSettings.disabled } style={ btnSettings.styles }>Add more +</button>
    </>
  );
}

function ErrorData({error} : { error : any } ) {
    return(
      <li className={styles['server-error']}>
        <picture className={styles['server-error-picture']}>
          <source srcSet={errorWebp} type="image/webp" />
          <img className={styles['server-error-img']} src={errorPng} alt="error" />
        </picture>
        <p>{error.message}</p>
      </li>
    );
}

export default CharactersList;
