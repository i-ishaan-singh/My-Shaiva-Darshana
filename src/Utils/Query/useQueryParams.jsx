
import { useLocation } from 'react-router-dom';
import React from 'react';

const useQueryParms = function(){


    var location = useLocation();

    return React.useMemo(() => {
    
       var obj ={};

        location.search.slice(1).split('&').forEach(function(_qp){
            _qp = _qp.split('=');
            obj[_qp[0]]= _qp[1];
        });

        return obj;

    }, [location]);

}

export {useQueryParms}