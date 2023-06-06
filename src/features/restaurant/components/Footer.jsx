import FooterLogo from '../../../img/logo-recafe.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <div className="footer__col">
                    <img 
                        className="footer__logo"
                        src={FooterLogo} 
                        alt="brand logo" 
                    />
                </div>
                <div className="footer__col">
                    <ul>
                        <li>
                            <a href="#" className="link">How it works</a>
                        </li>
                        <li>
                            <a href="#" className="link">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="link">For office</a>
                        </li>
                        <li>
                            <a href="#" className="link">Shipping and payment</a>
                        </li>
                        <li>
                            <a href="#" className="link">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="link">Invite a friend</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <ul>
                        <li>
                            <a href="#" className="link">Store addresses</a>
                        </li>
                        <li>
                            <a href="#" className="link">Career</a>
                        </li>
                        <li>
                            <a href="#" className="link">Public offer</a>
                        </li>
                        <li>
                            <a href="#" className="link">Shipping and payment</a>
                        </li>
                        <li>
                            <a href="#" className="link">Processing of personal data</a>
                        </li>
                        <li>
                            <a href="#" className="link">Terms of use</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col last-col">
                    <div>Support:</div>
                    <a 
                        className="footer__telephone-number"
                        href="tel:86665554433"
                    >
                        8 666 <span className="regional-number">555 44 33</span>
                    </a>
                    <div>
                        <div>Mo. — Fr. from 9:00 to 20:00</div>
                        <div>Sa. — Su. from 9:00 to 18:00</div>
                    </div>
                    <div>
                        info@example.ru
                    </div>
                </div>
            </div>
        </footer>
    )
}