import { FiBookmark, FiSearch, FiUser } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const location = useLocation();

    return (
        <nav className="header">

            <NavLink to="/" className="header__logo">
                <img src="src/assets/logo/image.png" alt="Max Logo" className="header__logo-img" />
            </NavLink>

            <div className="header__left">
                <div className="header__nav-group">
                    <div className="header__links">
                        <NavLink to="/" className="header__link" end>Home</NavLink>
                        <NavLink to="/series" className="header__link">Series</NavLink>
                        <NavLink to="/movies" className="header__link">Movies</NavLink>
                        <NavLink to="/hbo" className="header__link">HBO</NavLink>
                        <NavLink to="/sports" className="header__link">Sports</NavLink>
                        <NavLink to="/pagetwo" className="Team">
                            Team <span className="header__beta">404</span>
                        </NavLink>
                    </div>

                    <div className="header__pagination">
                        <span className="header__pagination-dot active" />
                        <span className="header__pagination-dot" />
                        <span className="header__pagination-dot" />
                        <span className="header__pagination-dot" />
                        <span className="header__pagination-dot" />
                    </div>
                </div>
            </div>

            <div className="header__right">
                <FiSearch className="header__icon" />
                <FiBookmark className="header__icon" />
                <NavLink to="/pagetwo" className="header__icon-link">
                    <FiUser className="header__icon" />
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
