import { SectionHeader } from '../../Components/SectionHeader/SectionHeader';
import { Footer } from '../Footer/Footer';
import React, { Suspense } from 'react';
import { useQueryParms } from '../../Utils/Query/useQueryParams';
import { LoadingSection } from '../../Components/LoadingIcon/LoadingSection';
import { ImageTextSection } from '../../Components/ImageTextSection/ImageTextSeection';
import { NavigationLink } from '../../Utils/NavigationLink/NavigationLink';
import img from './404.jpg';

const ShivSutra = React.lazy(() => import('./assets/shivasutra')); 
const ShattrimshatTattva = React.lazy(() => import('./assets/Shattrimshattattva')); 
const SpandaKarika = React.lazy(() => import('./assets/spandakarika')); 
const Malinivijyotanra = React.lazy(() => import('./assets/ShriMaliniVijyotantra/Malinivijyotanra')); 
const Tantraloka1 = React.lazy(() => import('./assets/TantraLoka/TantraLoka1')); 
const Tantraloka2 = React.lazy(() => import('./assets/TantraLoka/TantraLoka2')); 
const TantraLoka3 = React.lazy(() => import('./assets/TantraLoka/TantraLoka3')); 
const TantraLoka4 = React.lazy(() => import('./assets/TantraLoka/TantraLoka4')); 
const TantraLoka5 = React.lazy(() => import('./assets/TantraLoka/TantraLoka5')); 
const TantraLoka6 = React.lazy(() => import('./assets/TantraLoka/TantraLoka6')); 
const TantraLoka7 = React.lazy(() => import('./assets/TantraLoka/TantraLoka7')); 
const TantraLoka8 = React.lazy(() => import('./assets/TantraLoka/TantraLoka8')); 
const VBT = React.lazy(() => import('./assets/VignyaanBhairava/VignyaanBhairava')); 
const PHR = React.lazy(() => import('./assets/phr/PHR')); 
const BhairavaStavah = React.lazy(() => import('./assets/BhairavaStavah')); 

const map ={
    shivsutra: ShivSutra,
    shattrimshattattva: ShattrimshatTattva,
    spandakarika: SpandaKarika,
    malinivijayottaratanra: Malinivijyotanra,
    'tantraloka-vol1': Tantraloka1,
    'tantraloka-vol2': Tantraloka2,
    'tantraloka-vol3': TantraLoka3,
    'tantraloka-vol4': TantraLoka4,
    'tantraloka-vol5': TantraLoka5,
    'tantraloka-vol6': TantraLoka6,
    'tantraloka-vol7': TantraLoka7,
    'tantraloka-vol8': TantraLoka8,
    'bhairava-stavah': BhairavaStavah,
    'vijnyanabhairava': VBT,
    'pratyabhijna-hridayam': PHR,
 }

const BooksPage = function(){

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
                    <NavigationLink to="/My-Shaiva-Darshana/literature-list" className="button main-button primary-button">Explore Literature</NavigationLink>
                </div>
            </div>;
    }else{
        renderer = (<Suspense fallback={<LoadingSection message="Literature" />}>
                        <Renderer/>
                    </Suspense>)
    }

    return (<div>
                <SectionHeader name="Shaiva Literature" />
                {renderer}
                <Footer />
            </div>)
}

export {BooksPage}

