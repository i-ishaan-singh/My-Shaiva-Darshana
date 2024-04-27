
import logo from './assets/logo2.svg';
import './style/style.css';
import classNames from 'classnames';
import { useNaviagatonCallback } from '../../Utils/NavigateTo/useNavigateCallback';
import { NavigationLink } from '../../Utils/NavigationLink/NavigationLink';

const Header = function(props){
    
    const {appScrollTop} = props;  

    const _className = classNames("shaiva-header flex-col",{
        "shaiva-header-filled": appScrollTop>104
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
                </div>
                            
            </div>)
}

export {Header}