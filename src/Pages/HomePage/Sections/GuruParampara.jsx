
import lineage from '../../../assets/images/lineage.jpeg';
import { LeftNavigation } from "../../../Components/LeftNavigation/LeftNavigation";

const GuruParampara = function(){


    return (<div className="shiv-section section-gap">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap">
                    Guru Parampara
                </div>
                <img src={lineage} className="guru-parampara full-width-image "/>
                <div className="padd-text sst-text header-gap-top">
                    {`Guruparampara (literally translating to "Lineage of the Guru") is a central concept in Hinduism, particularly in its spiritual traditions. It refers to the unbroken chain of teachers and disciples that transmits spiritual knowledge and practices across generations.  This lineage serves as a vital link between the source of wisdom and the current seeker.

                    "Kashmir Shaivism's Guruparampara whispers secrets of the Self from ear to ear, a hidden lineage where realization itself becomes the initiation."`}
                </div>
                <div className="header-gap-top">
                    <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/guru-parampara">Explore Guruparampara</LeftNavigation>
                </div>
            </div>)
}

export {GuruParampara}