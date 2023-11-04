import styles from '../../styles/styles.module.scss'
import './FindCharacterForm.scss'

import sprite from '../../assets/img/sprite.svg'


function FindCharacterForm() {
  return (
      <form className="form" id="form">
        <label className="form__label">
          <input className={`${styles['input-reset']} form__input`} type="search" name="search" placeholder="Search..." aria-label="Finde character" />
        </label>

      <button className={`${styles['btn-reset']}  form__btn`}>
          <svg className="form__svg" aria-hidden="true">
              <use xlinkHref={sprite + '#search'}></use>
          </svg>
        </button>
      </form>
    );
}

export default FindCharacterForm;
