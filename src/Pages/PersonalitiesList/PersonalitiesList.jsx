import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { useTitle } from "../../Utils/useTitle/useTitle";
import { Footer } from "../Footer/Footer"
import { List } from "./assets/List"


const PersonalitiesList = function(){

    useTitle('Personalities List');

    return (<div>
                <SectionHeader name="Personalities List" />
                <List />
                <Footer />
            </div>)
}


export {PersonalitiesList}