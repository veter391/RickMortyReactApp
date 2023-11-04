import styles from '../../styles/styles.module.scss'
import './Character.scss'

type CharType = {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string
  };
  image: string;
}


function Character({char} : {char: CharType}) {

    const {name, status, species, location, image} = char;

    return (
        // characters__item_active
        <li className="characters__item">
            <div className="characters__title">
                <img className="characters__img" src={image} alt="Rick Sanches" />
                <h3 className="characters__name">{name}</h3>
            </div>
            <p className="characters__info">
                <span className="characters__status status">
                  <span className={styles.colored}>Status:</span> {status}
                </span>

                <span className="characters__specie">
                  <span className={styles.colored}>Specie:</span> {species}
                </span>

                <span className="characters__origin">
                  <span className={styles.colored}>Last location:</span> {location.name}
                </span>
            </p>
        </li>
     );
}

export default Character;
