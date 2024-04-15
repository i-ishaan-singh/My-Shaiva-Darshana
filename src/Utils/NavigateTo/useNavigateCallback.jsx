import React from 'react';
import { useNavigate } from 'react-router-dom'

const useNaviagatonCallback = function(options){
    
    const {url} = options;
    const navigate = useNavigate();

    return React.useCallback(function(){
        if(url){
            navigate(url);
            document.getElementById('main-app').scrollTop=0
        }
    },[url, navigate]);
}

export {useNaviagatonCallback}