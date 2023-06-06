export const CityDropdown = () => {
    return (
        <div className="dropdown-container first-row-elem">
            <ul>
                <input type="checkbox" id="btnControl" />
                <label htmlFor="btnControl">
                    <li>
                        <a className="title" role="button" aria-haspopup="true" aria-expanded="false">
                            Saint Petersburg &#x25BE;
                        </a>
                        <ul className="dropdown">
                            <li><a>Moscow</a></li>
                            <li><a>Sochi</a></li>
                            <li><a>Kazan</a></li>
                            <li><a>Irkutsk</a></li>
                        </ul>
                    </li>
                </label>
            </ul>
        </div>    
    )   
}