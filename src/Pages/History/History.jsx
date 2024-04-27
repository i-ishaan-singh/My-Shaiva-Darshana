import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { SectionSeparator } from "../../Components/SectionSeparator/SectionSeparator"
import { Footer } from "../Footer/Footer"
import { HistoryData } from "./assets/HistoryData"


const HistoryKashmir = function(){


    return (<div>
            <SectionHeader name="Kashmir Shaivaism" />
            <HistoryData/>
            <SectionSeparator/>
            <Footer />
        </div>)
}

export {HistoryKashmir}