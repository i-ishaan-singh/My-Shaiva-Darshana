import React, { Suspense } from "react";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { useQueryParms } from "../../Utils/Query/useQueryParams";
import { Footer } from "../Footer/Footer";
import { LoadingSection } from "../../Components/LoadingIcon/LoadingSection";
import { ImageTextSection } from "../../Components/ImageTextSection/ImageTextSeection";
import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";
import img from './404.jpg';

const LakshmanJoo = React.lazy(() => import("./assets/LakshmanJoo")); 
const Utpaladeva = React.lazy(() => import("./assets/Utpaladeva")); 
const VasuGupta = React.lazy(() => import("./assets/VasuGupta")); 
const AbhinavGupta = React.lazy(() => import("./assets/AbhinavGupta")); 
const Kshemaraja = React.lazy(() => import("./assets/Kshemraja")); 
const SvacchandaBhairava = React.lazy(() => import("./assets/SvacchandaBhairava")); 



const map ={
    vasugupta: VasuGupta,
    abhinavgupta: AbhinavGupta,
    utpaladeva: Utpaladeva,
    lakshmanjoo: LakshmanJoo,
    svacchandabhairava: SvacchandaBhairava,
    ['acharya-kshemaraja']: Kshemaraja
 }

const GuruPage = function(){

    const {name} = useQueryParms();

    var Renderer = React.useMemo(() => {

       if(map[name]){
            return map[name];
       }

    }, [name]), renderer;

    if(!Renderer){
        renderer = <div>
                <div className="sub-section-gap">
                    <ImageTextSection imgSrc={img} header={"404 - OOPS!!"} subHeader={"Literature Not Found"}>
                        You might be lost in this Website, but we got your back in the search for self discovery.     
                    </ImageTextSection>
                </div>
                <div className="shiv-section header-gap-top flex-col gap-2x lost-buttons">
                    <NavigationLink to="/My-Shaiva-Darshana/" className="button main-button">Visit HomePage</NavigationLink>
                    <NavigationLink to="/My-Shaiva-Darshana/personalities-list" className="button main-button primary-button">Explore Personalities</NavigationLink>
                </div>
            </div>;
    }else{
        renderer = (<Suspense fallback={<LoadingSection message="Literature" />}>
                        <Renderer/>
                    </Suspense>)
    }

    return (<div>
                <SectionHeader name="Famous Personalities"/>
                {renderer}
                <Footer/>
            </div>)
}

export {GuruPage}