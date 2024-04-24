import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";

const LeftNavigation = function(props){
    
    const {url, children, className} = props;

    if(!url){
        return null;
    }
    return (<div className={"shiv-content-link typo-accent "+className}>
                <NavigationLink to={url}>{children}</NavigationLink>
            </div>)

}

export{LeftNavigation}