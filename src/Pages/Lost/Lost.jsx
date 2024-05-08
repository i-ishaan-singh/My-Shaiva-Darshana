import { ImageTextSection } from "../../Components/ImageTextSection/ImageTextSeection"
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { NavigationLink } from "../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../Utils/useTitle/useTitle";
import { Footer } from "../Footer/Footer"
import img from './assets/404.jpg';
import './style/style.css';

const Lost = function(){

    useTitle('404 Lost in Maya');
    
    return (<div>
                <SectionHeader name="Lost..??" />
                <div className="sub-section-gap">
                    <ImageTextSection imgSrc={img} header={"404 - OOPS!!"} subHeader={"Page Not Found"}>
                        You might be lost in this Website, but we got your back in the search for self discovery.     
                    </ImageTextSection>
                </div>
                <div className="shiv-section header-gap-top flex-col gap-2x lost-buttons">
                    <NavigationLink to="/My-Shaiva-Darshana/" className="button main-button">Visit HomePage</NavigationLink>
                    <NavigationLink to="/My-Shaiva-Darshana/explore" className="button main-button primary-button">Explore More</NavigationLink>
                </div>
                <Footer />
            </div>)
}

export {Lost}