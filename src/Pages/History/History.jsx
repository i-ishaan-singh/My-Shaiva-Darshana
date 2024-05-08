import { RelavantLinks } from "../../Components/RelavantLinks/RelavantLinks"
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { SectionSeparator } from "../../Components/SectionSeparator/SectionSeparator"
import { useTitle } from "../../Utils/useTitle/useTitle"
import { Footer } from "../Footer/Footer"
import { HistoryData } from "./assets/HistoryData"


const HistoryKashmir = function(){

    
    useTitle('History of Kashmir Shaivaism');

    return (<div>
            <SectionHeader name="Kashmir Shaivaism" />
            <HistoryData/>
            <SectionSeparator/>
            <RelavantLinks
                data={relavantData}
            />
            <Footer />
        </div>)
}


var relavantData = [
    {
        url: '/My-Shaiva-Darshana/guru-parampara',
        text: 'Explore Guru Parampara'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export {HistoryKashmir}