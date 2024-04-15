import front from './assets/front.svg';
import './styles/style.css';

const SectionHeader = function(props){
    const {name} = props;

    return (<div className="section-header">
                <div className="section-header-div typo-accent shiv-h1">
                    {name}
                </div>
                <img src={front} className="section-header-separator-image"/>
            </div>)
}

export {SectionHeader}