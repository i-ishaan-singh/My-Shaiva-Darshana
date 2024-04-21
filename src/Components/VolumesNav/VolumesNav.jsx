import classNames from "classnames";
import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";
import React from "react";
import './styles/style.css';

const VolumesNav = function(props){

    var {data=[], active, header} = props;

    var _data = React.useMemo(function(){
        return data.map(function(_d, idx){
            var _className = classNames("volume-nav-link", {
                "vol-nav-active": active===idx
            })
            return (<NavigationLink key={_d.url} to={_d.url} className={_className}>
                        {_d.text}
                    </NavigationLink>)
        })
    },[data, active])

    return (<div className="shiv-section section-gap">
                <div className="typo-accent color-accent shiv-h5">
                    {header}
                </div>
                <div className="volume-nav-item flex-col gap-2x header-gap-top">
                    {_data}
                </div>
            </div>)

}

export {VolumesNav}