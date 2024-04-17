import { SectionHeader } from '../../Components/SectionHeader/SectionHeader';
import { Footer } from '../Footer/Footer';
import React from 'react';
import ShivSutra from './assets/shivasutra';
import ShattrimshatTattva from './assets/Shattrimshattattva';
import SpandaKarika from './assets/spandakarika';
import { useQueryParms } from '../../Utils/Query/useQueryParams';


const map ={
    shivsutra: ShivSutra,
    shattrimshattattva: ShattrimshatTattva,
    spandakarika: SpandaKarika
 }

const BooksPage = function(){

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
                <SectionHeader name="Shaiva Literature" />
                <Renderer/>
                <Footer />
            </div>)
}

export {BooksPage}