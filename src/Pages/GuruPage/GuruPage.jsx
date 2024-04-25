import React from "react"
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { SectionSeparator } from "../../Components/SectionSeparator/SectionSeparator"
import { useQueryParms } from "../../Utils/Query/useQueryParams"
import { Footer } from "../Footer/Footer"
import { AbhinavGupta } from "./assets/AbhinavGupta"
import { VasuGupta } from "./assets/VasuGupta"
import { Utpaladeva } from "./assets/Utpaladeva"

const map ={
    vasugupta: VasuGupta,
    abhinavgupta: AbhinavGupta,
    utpaladeva: Utpaladeva,
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
                <Renderer />
                <SectionSeparator/>
                <Footer/>
            </div>)
}

export {GuruPage}