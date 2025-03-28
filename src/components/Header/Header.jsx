import { FiBookmark, FiSearch } from "react-icons/fi";
import { NavLink, useLocation } from "react-router";
import "./Header.scss";

const Header = () => {
const location=useLocation();

    return (
        <nav className="header">
            <div className='header__left'>
            <NavLink to="/">
             <h2>Max</h2>
            </NavLink>
             <div className='header__links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/series" className="header__link">
            Series
          </NavLink>
          <NavLink to="/movies" className="header__link">
            Movies
          </NavLink>
          <NavLink to="/hbo" className="header__link">
            HBO
          </NavLink>
          <NavLink to="/sports" className="header__link">
            Sports
          </NavLink>
          <NavLink to="/news" className="header__link">
            News <span className="header__beta">BETA</span>
          </NavLink>
        </div>
                </div>
                <div className="header__right">
        <FiSearch className="header__icon" />
        <FiBookmark className="header__icon" />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/53/Scooby-Doo.png"
          alt="Avatar"
          className="header__avatar"
        />
      </div>
        </nav>
    )
}
export default Header;


