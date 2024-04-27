import React from "react"

var timeoutId;

const useTitle = function(title){

    React.useEffect(function(){
        clearTimeout(timeoutId);
        document.title = title + ' | My Shaiva Darshana';
        return function(){
            timeoutId = setTimeout(function(){
                document.title = 'My Shaiva Darshana'
            },10);
        }
    },[title]);

}

export {useTitle}