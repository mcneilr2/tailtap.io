import { Link } from "react-router-dom";
import logo from "../../src/assets/images/logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link-logo">
        <img className="header__logo" src={logo} alt="tailtap logo" />
      </Link>
      <div className="header__vertical-container">
        <h1 className="header__title">TAILTAP</h1>
        <h3 className="header__caption">SKATE + LEARN + SHARE</h3>
      </div>
      <button className="header__button">Find Skate Spot!</button>
    </header>
  );
}
