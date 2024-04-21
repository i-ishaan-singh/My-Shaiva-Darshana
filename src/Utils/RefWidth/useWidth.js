import React from "react"

const useWidth = function(ref){

    const [lastRendered, setLastRendered] = React.useState(Date.now());

    React.useEffect(function(){
        const _handleWidth = function(){
            setLastRendered(Date.now());
        }

        window.addEventListener('resize', _handleWidth);
        
        return function(){
            window.removeEventListener('resize', _handleWidth);
        }
    })

    var current = ref.current;

    return React.useMemo(function(){
        if(current && lastRendered){
            return current.clientWidth
        }
    },[current, lastRendered])


}

export {useWidth}