import { Card } from "../../../Components/Card/Card"
import { CardGroup } from "../../../Components/Card/CardGroup"

import shivsutra from '../../../assets/images/Books/shivsutra.jpg';
import sth from '../../../assets/images/Books/sth.png';
import spandha from '../../../assets/images/Books/spandha.jpg';
import bhairav from '../../../assets/images/Books/bhairava-stva.jpg';
import { LeftNavigation } from "../../../Components/LeftNavigation/LeftNavigation";

const LiteratureCards = function(){


    return (<div className="shiv-section section-gap">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap">
                    Famous Literature
                </div>
                <CardGroup>
                    <Card 
                        redirectPath="/My-Shaiva-Darshana/literature/books?name=shivsutra"
                        imageSrc={shivsutra}
                        header="Shiv Sutra"
                        description="Written by VasuGupta, the Shiva Sutras consist of 77 sutras that succinctly encapsulate profound spiritual truths, which are meant to be experienced through direct realization."
                    />
                     <Card 
                        imageSrc={sth}
                        redirectPath="/My-Shaiva-Darshana/literature/books?name=shattrimshattattva"
                        header="Shattrimshat Tattva Sandoha"
                        description="A text describing the creation of the world through the 36 elements of creation."
                    />
                    <Card 
                        imageSrc={spandha}
                        redirectPath="/My-Shaiva-Darshana/literature/books?name=spandakarika"
                        header="SpandaKarika"
                        description="This term signifies both vibrationless vibration and divine pulsation. The verses explore the dynamic aspect of consciousness, emphasizing that the entire universe arises from this pulsating essence."
                    />
                    <Card 
                        imageSrc={bhairav}
                        header="Bhairav Stavah"
                        redirectPath="/My-Shaiva-Darshana/literature/books?name=bhairava-stavah"
                        description="Written by Abhinavagupta, it offers a unique perspective. The devotee rejoices in the realization that Shiva is everywhere and everything, dissolving fear of death and rebirth."
                    />

                </CardGroup>
                <div className="header-gap-top">
                    <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/literature-list">Explore More Literature</LeftNavigation>
                </div>
            </div>)
}

export {LiteratureCards}