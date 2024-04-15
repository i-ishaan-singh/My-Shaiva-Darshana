import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { Footer } from "../Footer/Footer"
import { TantraList } from "./assets/TantraList"


const SFTantraList = function(){


    return (<div>
                <SectionHeader name="Literature List" />
                <TantraList />
                <Footer />
            </div>)
}


export {SFTantraList}