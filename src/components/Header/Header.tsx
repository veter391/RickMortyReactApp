import { useContext } from "react"
import { AppContext } from '../App/App'
import FindCharacterForm from "../FindCharacterForm/FindCharacterForm";

import './Header.scss'

import logo from '../../assets/img/logo.png'
import logoWebp from '../../assets/img/logo.webp'

function Header() {

  const { header }: any = useContext(AppContext);

  return (
    <header className="header" id="header" ref={header}>
      <div className="container">

        <picture className="logo">
          <source srcSet={logoWebp} type="image/webp" />
          <img className="logo__img" src={logo} alt="logo" />
        </picture>

        <FindCharacterForm />

      </div>
    </header>
  );
}

export default Header;

