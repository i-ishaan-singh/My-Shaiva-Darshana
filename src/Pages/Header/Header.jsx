
import logo from './assets/logo2.svg';
import './style/style.css';
import classNames from 'classnames';
import { useNaviagatonCallback } from '../../Utils/NavigateTo/useNavigateCallback';
import { NavigationLink } from '../../Utils/NavigationLink/NavigationLink';
import React from 'react';
import { useLocation} from 'react-router-dom';

const Header = function(props){
    
    const {appScrollTop} = props;  

    const location = useLocation();

    const [menuActive, setMenuActive] = React.useState(false);

    React.useEffect(function(){
        if(location){
            setMenuActive(false);
            document.getElementById('main-app').scrollTop=0;
        }
    },[location])

    const _className = classNames("shaiva-header flex-col",{
        "shaiva-header-filled": appScrollTop>104,
        "shiva-header-menu-active": menuActive
    })

    const _hamburgerClassName = classNames({
        "fa fa-times": menuActive,
        "fa fa-bars": !menuActive
    })

    const _backToHome = useNaviagatonCallback({
        url: '/My-Shaiva-Darshana/'   
    }) 

    return (<div className={_className}>
                <img src={logo} className="main-header-logo" onClick={_backToHome}/>
                <div className="header-links-wrapper full-container">
                    <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/literature-list">Literature</NavigationLink>
                    <NavigationLink className="header-link typo-accent"  to="/My-Shaiva-Darshana/personalities-list">Personalities</NavigationLink>
                    <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/key-concepts-list">Core Concepts</NavigationLink>
                    <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/contact-us">Contact</NavigationLink>
                    <div className="hamberger-menu" onClick={()=>setMenuActive(e=>!e)}>
                        <i className={_hamburgerClassName} aria-hidden="true"></i>
                    </div>
                </div>
                <div className="header-menu-wrapper">
                    <div className="header-menu full-container">
                        <div className="header-menu-nav-links">
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/literature-list">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Literature
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/personalities-list">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Personalities
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/key-concepts-list">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Core Concepts
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/history">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            History
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/guru-parampara">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Guru Parampara
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/pilgrimages-list">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Pilgrimages
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/contact-us">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Contact Us
                        </NavigationLink>
                        <NavigationLink className="header-link typo-accent" to="/My-Shaiva-Darshana/referrences">
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                            Referrences
                        </NavigationLink>
                        </div>
                    </div>
                </div>     
            </div>)
}

export {Header}