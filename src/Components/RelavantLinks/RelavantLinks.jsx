import React from "react";
import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";


const RelavantLinks = function(props){

    const {header='Related Links', linkClass="fa fa-link", data=[]} = props;

    const _links = React.useMemo(function(){
        return data.map(function(_d){
            return (<div key={_d.url}>
                        <NavigationLink to={_d.url}>
                        <i className={linkClass} aria-hidden="true" />
                        {' '}{ _d.text}
                        </NavigationLink>
                    </div>)    
        }) 
    },[data, linkClass])

    return (<div className="shiv-section section-gap">
                {!!header &&<div className="typo-accent shiv-h5 pad-b-3x">
                    {header}
                </div>}
                <div className="padd-text flex-row gap-1x">
                    {_links}
                </div>
            </div>)
}


export {RelavantLinks}