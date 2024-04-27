import React, { Suspense } from "react";
import { LoadingSection } from "../../Components/LoadingIcon/LoadingSection";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { Footer } from "../Footer/Footer";
import { useQueryParms } from "../../Utils/Query/useQueryParams";
const TrikaMandalaData = React.lazy(() => import('./assets/TrikaMandalaData')); 
const PrataybhijnaData = React.lazy(() => import('./assets/PratyabhijnaDarshana')); 

const map ={
    ['trika-mandala']: TrikaMandalaData,
    ['pratyabhijna-darshana']: PrataybhijnaData,
 }

const KeyConcepts = function(){
    
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
                <SectionHeader name="Key Concepts" />
                    <Suspense fallback={<LoadingSection message="Concept" />}>
                        <Renderer/>
                    </Suspense>
                   
                <Footer />
            </div>)
}

export {KeyConcepts}