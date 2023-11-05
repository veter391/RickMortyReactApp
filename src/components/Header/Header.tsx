// components , js ,ts, etc..
import { useContext } from "react"
import { AppContext } from '../App/App'
import FindCharacterForm from "../FindCharacterForm/FindCharacterForm"
// styles
import './Header.scss'
// logo images webp and png
import logo from '../../assets/img/logo.png'
import logoWebp from '../../assets/img/logo.webp'


function Header() {
  // get header from context
  const { header }: any = useContext( AppContext );

  return (
    // add header reference
    <header className="header" id="header" ref={ header }>
      <div className="container">

        <picture className="logo">
          <source srcSet={ logoWebp } type="image/webp" />
          <img className="logo__img" src={ logo } alt="logo" />
        </picture>

        {/* Form for seek characters */}
        <FindCharacterForm />

      </div>
    </header>
  );
}

export default Header;

