import { LoadingIcon } from '../../Components/LoadingIcon/LoadingIcon';
import { NavigationLink } from '../../Utils/NavigationLink/NavigationLink';
import { FooterWaves } from './FooterWaves';
import './style/style.css';

const Footer = function(){

    return (<div className="section-gap">
                <div className="shiv-section shiv-flex-col">
                <div className="footer-separator align-center color-accent flex-col gap-2x shiv-h5 shiv-text-center"><div className="chapter-line"></div>हर ॐ तत्सत् <div className="chapter-line"></div></div>
                </div>
            <div className="footer-wrapper sub-section-gap">
                
                <FooterWaves />
                <div className="shiv-footer">
                    <div className="flex-col  full-flex">
                        <div className="footer-icon-container">
                            <div className="footer-icon">
                                <LoadingIcon/>
                            </div>
                            <span className="typo-accent">My Shaiva Darshana</span>
                        </div>
                        <div className="flex-row full-flex">
                            <div className="footer-links-container">
                                <NavigationLink to="/My-Shaiva-Darshana/literature-list" className="footer-link">Literature</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/personalities-list" className="footer-link">Personalities</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/key-concepts-list" className="footer-link">Core Concepts</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/history" className="footer-link">History</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/guru-parampara" className="footer-link">Guru Parampara</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/pilgrimages-list" className="footer-link">Pilgrimages</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/contact-us" className="footer-link">Contact Us</NavigationLink>
                                <NavigationLink to="/My-Shaiva-Darshana/referrences" className="footer-link">References</NavigationLink>
                            </div>
                            <div className="footer-copyright">
                                Created and Maintained by <span className="typo-accent">Ishaan Singh</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>)
}

export {Footer}