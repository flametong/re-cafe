import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav 
            className="navbar" 
        >
            <ul className="navbar__list">
                <li className="navbar__element">
                    <Link to={`categories/trending`}>TRENDING</Link>
                </li>
                <li className="navbar__element">
                    <Link to={`categories/pizza`}>PIZZA</Link>
                </li>
                <li className="navbar__element">
                    <Link to={`categories/sushi`}>SUSHI</Link>
                </li>
                <li className="navbar__element">
                    <Link to={`categories/wok`}>WOK</Link>
                </li>
                <li className="navbar__element">
                    <Link to={`categories/salads`}>SALADS</Link>
                </li>
                <li className="navbar__element">
                    <Link to={`categories/soups`}>SOUPS</Link>
                </li>
                <li className="navbar__element">
                    <Link to={`categories/dessert`}>DESSERT</Link>
                </li>
            </ul>
        </nav>
    )
}