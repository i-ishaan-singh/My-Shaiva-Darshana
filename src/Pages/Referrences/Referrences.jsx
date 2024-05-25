import React from "react";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { Footer } from "../Footer/Footer"
import referencesObj from './assets/ref.json';

const Referrences = function(){

    console.log(referencesObj);

    const _referrencesList = React.useMemo(function(){
        return Object.keys(referencesObj).sort().map(function(_l){
            return (<div key={_l} className="pad-b-3x">
                        <a 
                            href={_l}
                            className="referrence-links  shiv-h6"
                            target="_blank">
                                <i className="fa fa-external-link" aria-hidden="true"></i> 
                                <span>{' '+_l}</span>
                        </a>
                    </div>)                   
        });
    },[])

    return (<div>
                <SectionHeader name="References"/>
                <div className="shiv-section section-gap">
                    {_referrencesList}
                </div>
                <Footer/>
            </div>)

}

export {Referrences}