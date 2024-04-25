import { Card } from "../../../Components/Card/Card"
import { CardGroup } from "../../../Components/Card/CardGroup"

import vasuGupta from '../../../assets/images/vasugupta.png';
import abhinavgupta from '../../../assets/images/abhinavgupta.jpg';
import somananda from '../../../assets/images/somananda.jpg';
//import laxman from '../../../assets/images/laxman.jpg';
import utpal from '../../../assets/images/utpaldeva.jpg';

const AcharyasCards = function(){


    return (<div className="shiv-section section-gap">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap">
                    Famous Acharyas
                </div>
                <CardGroup>
                    <Card 
                        imageSrc={vasuGupta}
                        redirectPath="/My-Shaiva-Darshana/personalities?name=vasugupta"
                        header="Vasugupta"
                        description="The author of the foundational text “Shiva Sutras”, which succinctly encapsulates the essence of Kashmir Shaivism. His work lays the groundwork for understanding the path to self-realization."
                    />
                     <Card 
                        redirectPath="/My-Shaiva-Darshana/personalities?name=abhinavgupta"
                        imageSrc={abhinavgupta}
                        header="Abhinavgupta"
                        description="A polymath, philosopher, and mystic, Abhinavagupta made significant contributions to Kashmir Shaivism. His works include commentaries on various texts, such as the “Tantraloka” and the “Tantrasara”."
                    />
                    <Card 
                        imageSrc={somananda}
                        header="Somananda"
                        description="A revered teacher in the lineage, Somananda's work “Shivadrishti” delves into the nature of reality, emphasizing direct perception (drishti) of Shiva."
                    />
                    <Card 
                        imageSrc={utpal}
                        redirectPath="/My-Shaiva-Darshana/personalities?name=utpaldeva"
                        header="Utpaldeva"
                        description="Utpaladeva (c. 900-950 CE) was a towering figure in Kashmiri Shaivism, particularly the Pratyabhijñā school of monistic idealism."
                    />

                </CardGroup>
            </div>)
}

export {AcharyasCards}