
import logo from './assets/logo2.svg';
import './style/style.css';
import classNames from 'classnames';
import { useNaviagatonCallback } from '../../Utils/NavigateTo/useNavigateCallback';

const Header = function(props){
    
    const {appScrollTop} = props;  

    const _className = classNames("shaiva-header",{
        "shaiva-header-filled": appScrollTop>104
    })

    const _backToHome = useNaviagatonCallback({
        url: '/'   
    }) 

    return (<div className={_className}>
                <img src={logo} className="main-header-logo" onClick={_backToHome}/>
            </div>)
}

export {Header}