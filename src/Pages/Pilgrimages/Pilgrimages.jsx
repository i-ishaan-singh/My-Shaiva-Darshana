import React, { Suspense } from "react";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { useQueryParms } from "../../Utils/Query/useQueryParams";
import { Footer } from "../Footer/Footer";
import { LoadingSection } from "../../Components/LoadingIcon/LoadingSection";

const Amarnath = React.lazy(() => import("./assets/Amarnath")); 
const Machli = React.lazy(() => import("./assets/Machli")); 
const Bhairav = React.lazy(() => import("./assets/BhairavTemple")); 
const KheerBhawani = React.lazy(() => import("./assets/KheerBhawani")); 

const map ={
    amarnath: Amarnath,
    'machli-mata': Machli,
    'srinagar-bhairav': Bhairav,
    'kheer-bhawani': KheerBhawani,
 }

const Pilgrimages = function(){

    const {name} = useQueryParms();

    var Renderer = React.useMemo(() => {

       if(map[name]){
            return map[name];
       }

    }, [name]);

    if(!Renderer){
        return null;
    }

    return (<div>
                <SectionHeader name="Kashmir Shaivaism Pilgrimage"/>
                <Suspense fallback={<LoadingSection message="Pilgrimage" />}>
                    <Renderer />
                </Suspense>
                <Footer/>
            </div>)
}

export {Pilgrimages}