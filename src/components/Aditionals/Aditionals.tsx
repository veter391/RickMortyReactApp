import { useContext } from "react"
import { AppContext } from '../App/App'

import styles from '../../styles/styles.module.scss'
import './Aditionals.scss'

import sprite from '../../assets/img/sprite.svg'


function Aditionals() {
  const { header } : any = useContext(AppContext);

  // smooth scroll function
  function scrollTo() {
    // if element not exist throw error
    if ( !header ) throw new Error(`Parameter(element) is: ${ header }`);

    // if element exists add scroll
     header.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  function changeTheme(e : any) {
    // toggle active class to btn
    e.currentTarget.classList.toggle('light')

    // check current btn to active class and change theme
    if (e.currentTarget.classList.contains('light')) {
      document.documentElement.style.cssText = `
      --light-theme: #333;
      --dark-theme: wheat;
      --primary: rgb(199, 245, 179);
      --hover: #14ddc9;
      --pasive: #008d88`;
    } else {
      document.documentElement.style.cssText = `
      --light-theme: #EEEEEE;
      --dark-theme: #005956;
      --primary: #008d88;
      --hover: #14dd3f;
      --pasive: rgb(199, 245, 179)`;
    }
  }

  return (
    <div className="aditional">
      <button onClick={scrollTo} className={`${styles.btn} ${styles['btn-reset']} aditional__totop`} aria-label="go to top">
        <svg className="aditional__svg" aria-hidden="true">
          <use xlinkHref={sprite + '#totop'}></use>
        </svg>
      </button>

      <button onClick={changeTheme} className={`${styles.btn} ${styles['btn-reset']} aditional__theme`} aria-label="change hteme">
        <svg className="aditional__svg aditional__theme_light" aria-hidden="true">
          <use xlinkHref={sprite + '#light'}></use>
        </svg>

        <svg className="aditional__svg aditional__theme_dark" aria-hidden="true">
          <use xlinkHref={sprite + '#dark'}></use>
        </svg>
      </button>
    </div>
  );
}

export default Aditionals;
