import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";

const LeftNavigation = function(props){
    
    const {url, children} = props;

    if(!url){
        return null;
    }
    return (<div className="shiv-content-link typo-accent">
                <NavigationLink to={url}>{children}</NavigationLink>
            </div>)

}

export{LeftNavigation}