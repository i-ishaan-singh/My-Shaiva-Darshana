import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { useTitle } from "../../Utils/useTitle/useTitle"
import { Footer } from "../Footer/Footer"
import { TantraList } from "./assets/TantraList"


const SFTantraList = function(){

    useTitle('Literature List');

    return (<div>
                <SectionHeader name="Literature List" />
                <TantraList />
                <Footer />
            </div>)
}


export {SFTantraList}