import React, { Suspense } from "react";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { SectionSeparator } from "../../Components/SectionSeparator/SectionSeparator";
import { useQueryParms } from "../../Utils/Query/useQueryParams";
import { Footer } from "../Footer/Footer";
import { LoadingSection } from "../../Components/LoadingIcon/LoadingSection";

const LakshmanJoo = React.lazy(() => import("./assets/LakshmanJoo")); 
const Utpaladeva = React.lazy(() => import("./assets/Utpaladeva")); 
const VasuGupta = React.lazy(() => import("./assets/VasuGupta")); 
const AbhinavGupta = React.lazy(() => import("./assets/AbhinavGupta")); 

const map ={
    vasugupta: VasuGupta,
    abhinavgupta: AbhinavGupta,
    utpaladeva: Utpaladeva,
    lakshmanjoo: LakshmanJoo
 }

const GuruPage = function(){

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
                <SectionHeader name="Famous Personalities"/>
                <Suspense fallback={<LoadingSection message="Personality" />}>
                    <Renderer />
                </Suspense>
                <SectionSeparator/>
                <Footer/>
            </div>)
}

export {GuruPage}