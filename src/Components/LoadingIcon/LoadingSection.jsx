import React from "react";
import { LoadingIcon } from "./LoadingIcon"
import './styles/styles.css';

const LoadingSection = function(props){

    const {message} = props;

    const [dotsLength, setDotsLength] = React.useState(1);

    React.useEffect(function(){
        const _interval = setInterval(function(){
            setDotsLength(function(_dl){
                var newDotsLength = (_dl+1)%4;
                if(!newDotsLength){
                    newDotsLength = 1;
                }
                return newDotsLength;
            })
            
        },500);

        return function(){
            clearInterval(_interval)
        }
    },[]);


    var dots = React.useMemo(function(){
        return new Array(dotsLength).fill('.').join('');
    },[dotsLength])

    return (<div className="loading-section">
                <div className="typo-accent loading-icon-container">
                    <div>Load<LoadingIcon/>ng</div>
                    <div>{message}{dots}</div>
                </div>
            </div>) 
}

export {LoadingSection}