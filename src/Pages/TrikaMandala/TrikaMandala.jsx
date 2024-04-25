import React, { Suspense } from "react";
import { LoadingSection } from "../../Components/LoadingIcon/LoadingSection";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { Footer } from "../Footer/Footer";
import { SectionSeparator } from "../../Components/SectionSeparator/SectionSeparator";
const TrikaMandalaData = React.lazy(() => import('./assets/data')); 


const TrikaMandala = function(){

    return (<div>
                <SectionHeader name="Trika Mandala" />
                    <Suspense fallback={<LoadingSection message="Trika Mandala" />}>
                        <TrikaMandalaData/>
                    </Suspense>
                    <SectionSeparator/>
                <Footer />
            </div>)
}

export {TrikaMandala}