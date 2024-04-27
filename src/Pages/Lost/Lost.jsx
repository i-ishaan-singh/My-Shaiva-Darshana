import { ImageTextSection } from "../../Components/ImageTextSection/ImageTextSeection"
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { useTitle } from "../../Utils/useTitle/useTitle";
import { Footer } from "../Footer/Footer"

const Lost = function(){

    useTitle('404 Lost in Maya');
    
    return (<div>
            <SectionHeader name="Lost..??" />
            <ImageTextSection  header={"404"} subHeader={"Page Not Found"}>
                You might be lost in this Website, but we got your back in the search for self discovery.     
            </ImageTextSection>
            <Footer />
        </div>)
}

export {Lost}