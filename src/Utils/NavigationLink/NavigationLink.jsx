import React from "react";
import { NavLink } from "react-router-dom"


const NavigationLink = function(props){

    const _handleNavigate = React.useCallback(function(){
        document.getElementById('main-app').scrollTop=0;
    },[])

    return <NavLink {...props} onClick={_handleNavigate}/>
}

export {NavigationLink}