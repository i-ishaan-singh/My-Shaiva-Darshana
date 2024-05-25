import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import avanti from '../../../assets/images/pilgrimage/avanti.jpg';


const Avantipura = function(){

    useTitle('Avantipora Ruins');

    return (<div role="section">
                <ImageTextSection imgSrc={avanti} header={"Avantipora Ruins"} subHeader={"The Whispers of the Past"}>
                Nestled amidst the lush valleys of Kashmir, Jammu and Kashmir, lie the Avantipora Ruins, remnants of a once-grand temple complex. Shrouded in history and intrigue, these ruins stand as a testament to the architectural brilliance and rich cultural heritage of Kashmir.  While the serenity of the surrounding landscape offers a sense of peace, the ruins themselves evoke a sense of wonder, prompting us to delve into the stories they hold.
                </ImageTextSection>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Basic Information
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        
                        <div className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Location: 
                            </span> 
                            <div className=" padd-text">
                            {`The Avantipora Ruins are situated in the town of Awantipora, Pulwama district, Jammu and Kashmir, India.`}
                            </div>
                            <div className="padd-text pad-b-3x">
                                <NavigationLink to="https://www.google.com/maps/place/Avanti+Swami+Temple+Ruins/@33.9232045,75.012801,17z/data=!3m1!4b1!4m6!3m5!1s0x38e21f9d95434ee5:0x71db857bc8a4bedc!8m2!3d33.9232045!4d75.012801!16s%2Fg%2F11_r9_dsx?entry=ttu" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                            </div>
                        </div>
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Elevation:
                            </div> 
                            <div className=" padd-text">
                            Awantipora, where the ruins are located, has an elevation of approximately 1,590 meters (5,216 feet) above sea level.
                            </div>
                        </div>

                        <div  className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Duration of the Visit:
                            </span>
                            <div className=" padd-text">
                                {`If you want to thoroughly explore the ruins, examine the remaining structures, and delve into the information provided at the museum, you might spend 2-3 hours at the site.
                                
                                The serenity of the location can be an invitation for quiet contemplation. You might choose to spend some time simply basking in the atmosphere and reflecting on the past.`}
                            </div>
                            
                        </div>

                    </div>
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        A Duality Revered
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Avantipora Ruins were originally comprised of two separate temples dedicated to two separate deities within Hinduism:`}
                    </div>

                    <SubSectionText header="Avantisvamin Temple">
                        {`The smaller of the two temples was dedicated to Lord Vishnu, the preserver god in the Hindu trinity. Vishnu is often depicted as a four-armed figure reclining on the cosmic serpent Ananta Shesha. He represents the sustaining and balancing force within the universe.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Avantisvara Temple">
                        {`The larger temple was dedicated to Lord Shiva, the destroyer and regenerator god. Shiva is often depicted in a meditative posture, symbolizing his role in the cosmic cycle of creation, destruction, and renewal. He is also associated with yoga and the pursuit of self-knowledge.`}
                    </SubSectionText>

                    <SubSectionText header="Beyond Duality">
                        {`The presence of these two temples dedicated to Vishnu and Shiva within the same complex is significant.  It reflects a core principle within Kashmir Shaivism.
                        
                        Kashmir Shaivism emphasizes the non-dual nature of reality, where Shiva and Shakti (the divine feminine) are seen as inseparable aspects of the ultimate divine principle. The Avantipora Ruins, depict that the Shiva and Vishnu also exist as one har-hara and embody this non-dual philosophy.`}
                    </SubSectionText>


                </div>


                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        A Tapestry Woven Through Time
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The exact origins of the Avantipora Ruins remain a topic of discussion among historians and archaeologists.  However, based on various sources, a captivating narrative emerges:`}
                    </div>

                    <SubSectionText header="The Reign of King Avantivarman:">
                        {`Evidence suggests the temple complex was built during the reign of King Avantivarman (855-883 AD), the founder of the Utpala dynasty in Kashmir.
                        King Avantivarman is believed to have constructed the Avantisvamin Temple before ascending the throne and later built the grander Avantisvara Temple during his reign.`}
                    </SubSectionText>

                    <SubSectionText header="Architectural Marvels:">
                        {`The temples showcased a unique blend of architectural styles, incorporating elements of both Kashmiri and North Indian temple architecture. The use of red sandstone, intricate carvings, and a well-defined layout reflected the architectural prowess of the era.`}
                    </SubSectionText>

                    <SubSectionText header="Rediscovery and Preservation:">
                        {`The Avantipora Ruins, unfortunately, bear the scars of time and conflict. Natural disasters and invasions over the centuries led to their decline. Historical records suggest the temples were damaged in the 14th century and eventually abandoned.
                        
                        The Avantipora Ruins remained largely forgotten until the early 20th century when archaeologist Daya Ram Sahni led their excavation.  Since then, restoration efforts have been undertaken to preserve these historical treasures.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        The Link to Kashmir Shaivism
                    </div>
                    <SubSectionText header="The Non-Duality Within the Divine:">
                        {`The presence of separate temples dedicated to Shiva and Vishnu reflects the non-dualistic philosophy of Kashmir Shaivism. Both deities are seen as aspects of the same ultimate reality.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Exploring the Ruins
                    </div>
                    
                    <SubSectionText header="Architectural Splendor:">
                        {`Despite the damage, the remaining structures showcase intricate carvings, pillared halls, and remnants of the sanctum sanctorum (inner sanctum) where the idols were once housed. These remnants offer clues about the architectural brilliance of the era.`}
                    </SubSectionText>

                    <SubSectionText header="Serene Setting:">
                        {`Nestled amidst lush green fields and the foothills of the Himalayas, the Avantipora Ruins offer a tranquil escape from the bustle of city life. The peaceful surroundings provide an opportunity for quiet reflection amidst the remnants of the past.`}
                    </SubSectionText>

                    <SubSectionText header="Museum and Interpretation Center:">
                        {`A small museum located near the ruins houses artifacts discovered during the excavation process. These artifacts, including sculptures and fragments, offer a deeper understanding of the temple complex and the lives of those who built and worshipped there. 
                        An interpretation center is also present, providing additional information about the history and significance of the ruins.`}
                    </SubSectionText>


                </div>
                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        The Enduring Legacy of the Avantipora Ruins
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Avantipora Ruins stand as a testament to the architectural brilliance and rich cultural heritage of Kashmir.  They offer a glimpse into a bygone era, whispering tales of faith, philosophy, and artistic expression.  Whether you're a history buff, a spiritual seeker, or simply curious about Kashmiri culture, the Avantipora Ruins beckon one to embark on a journey through time.`}
                    </div>

                </div>



                <SectionSeparator/>
                <RelavantLinks
                    data={relavantData}
                />
            </div>)

}


var relavantData = [
    {
        url: '/My-Shaiva-Darshana/pilgrimages-list',
        text: 'Explore more Pilgrimages'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default Avantipura