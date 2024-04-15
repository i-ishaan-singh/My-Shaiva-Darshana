import { useNaviagatonCallback } from '../../Utils/NavigateTo/useNavigateCallback';


const Card = function(props){

    const {imageSrc, header, description, redirectPath} = props;

    const _handleClick = useNaviagatonCallback({
        url:   redirectPath 
    });

    return (<div className="shiv-card" onClick={_handleClick}>
                <div className="shiv-card-image-wrapper">
                    <img src={imageSrc} className="shiv-card-image"/>
                </div>
                <div className="shiv-card-header typo-accent ">
                    {header}
                </div>
                <div className="shiv-card-para shiv-paragraph">
                    {description}
                </div>
            </div>)

}

export {Card}