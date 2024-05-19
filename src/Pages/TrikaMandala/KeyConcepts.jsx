import React, { Suspense } from "react";
import { LoadingSection } from "../../Components/LoadingIcon/LoadingSection";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { Footer } from "../Footer/Footer";
import { useQueryParms } from "../../Utils/Query/useQueryParams";
import { ImageTextSection } from "../../Components/ImageTextSection/ImageTextSeection";
import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";
const TrikaMandalaData = React.lazy(() => import('./assets/TrikaMandalaData')); 
const PrataybhijnaData = React.lazy(() => import('./assets/PratyabhijnaDarshana')); 
const UpayasData = React.lazy(() => import('./assets/Upayas')); 
const Matrikachakra = React.lazy(() => import('./assets/MatrikaChakra')); 
const Svatantrya = React.lazy(() => import('./assets/Svatantrya')); 
import img from './404.jpg';

const map ={
    ['trika-mandala']: TrikaMandalaData,
    ['pratyabhijna-darshana']: PrataybhijnaData,
    ['upayas']: UpayasData,
    ['matrikachakra']: Matrikachakra,
    ['svatantrya']: Svatantrya,
 }

const KeyConcepts = function(){
    
    const {name} = useQueryParms();

    var Renderer = React.useMemo(() => {

       if(map[name]){
            return map[name];
       }

    }, [name]), renderer;

    if(!Renderer){
        renderer = <div>
                <div className="sub-section-gap">
                    <ImageTextSection imgSrc={img} header={"404 - OOPS!!"} subHeader={"Concept Not Found"}>
                        You might be lost in this Website, but we got your back in the search for self discovery.     
                    </ImageTextSection>
                </div>
                <div className="shiv-section header-gap-top flex-col gap-2x lost-buttons">
                    <NavigationLink to="/My-Shaiva-Darshana/" className="button main-button">Visit HomePage</NavigationLink>
                    <NavigationLink to="/My-Shaiva-Darshana/literature-list" className="button main-button primary-button">Explore Concepts</NavigationLink>
                </div>
            </div>;
    }else{
        renderer = (<Suspense fallback={<LoadingSection message="Concept" />}>
                        <Renderer/>
                    </Suspense>)
    }

    return (<div>
                <SectionHeader name="Key Concepts" />
                    {renderer}
                <Footer />
            </div>)
}

export {KeyConcepts}