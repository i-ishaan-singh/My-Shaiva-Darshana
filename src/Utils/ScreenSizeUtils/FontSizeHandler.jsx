import React from 'react';
import { ApplicationContext } from '../../Context/ApplicationContext';
import { createPortal } from 'react-dom';

const getFontSize = function(){

    var width = document.body.getBoundingClientRect().width;

    if(width < 320){
        return 8;
    }else if(width<850){
        return 13;
    }else if(width<1600){
        return 15;
    }else if(width<1920){
        return 18;
    }else if(width<2024){
        return 20;
    }else if(width<2699){
        return 25;
    }

    return 30;


}

const FontSizeHandler = function(){

    const {baseFontSize, setBaseFontSize} = React.useContext(ApplicationContext);


    React.useEffect(function(){

        const _handleResize = function(){
            setBaseFontSize(getFontSize());
        }

        window.addEventListener('resize', _handleResize);
        _handleResize();

        return function(){
            window.removeEventListener('resize', _handleResize);
        }
    },[setBaseFontSize])

    const _style = React.useMemo(function(){
        return (<style>
                    {`:root, body, head{
                        font-size: ${baseFontSize}px;
                    }`}
                </style>)
    },[baseFontSize]);

    return createPortal(_style, document.head); 
}

export {FontSizeHandler}