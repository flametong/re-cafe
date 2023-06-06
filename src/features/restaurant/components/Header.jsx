import { faLocationDot, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import HeaderLogo from '../../../img/logo-recafe.png'
import { CityDropdown } from "./CityDropdown"

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__row-1">
                    <div className="row-1-elem-1">
                        <Link to="/">
                            <img 
                                className="header__logo"
                                src={HeaderLogo} 
                                alt="brand logo" 
                            />
                        </Link>
                        <CityDropdown />
                        <div className="header__telephone">
                            <div className="header__telephone-title">Telephone:</div>
                            <a 
                                className="header__telephone-number"
                                href="tel:86665554433"
                            >
                                8 666 <span className="regional-number">555 44 33</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <button className="header__sign-in-btn btn">Sign In</button>
                        <a href="#" className="header__sign-up-btn">Sign Up</a>
                    </div>
                </div>
                <div className="header__row-2">
                    <span className="header__location-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <input 
                        className="header__address"
                        type="text" 
                        placeholder="Enter shipping address..."
                        autoComplete="off"
                        name="ADDRESS"
                    />
                </div>
            </div>
        </header>
    )
}