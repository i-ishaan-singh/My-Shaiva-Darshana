import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { useTitle } from "../../Utils/useTitle/useTitle";
import { Footer } from "../Footer/Footer"
import { List } from "./assets/List"


const Concepts = function(){

    useTitle('Core Concepts');

    return (<div>
                <SectionHeader name="Core Concepts" />
                <List />
                <Footer />
            </div>)
}


export {Concepts}