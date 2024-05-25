import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import chakreshwari2 from '../../../assets/images/pilgrimage/chakreshwari2.avif';


const Chakreshwari = function(){

    useTitle('Shri Chakreshwari Temple');

    return (<div role="section">
                <ImageTextSection imgSrc={chakreshwari2} header={"Shri Chakreshwari Temple"} subHeader={"The Abode of Shakti"}>
                    Standing sentinel over the vibrant city of Srinagar, Jammu and Kashmir, lies the Shri Chakreshwari Temple, a sacred site steeped in history and revered by devotees of Kashmir Shaivism. Dedicated to the powerful goddess Sharika Devi, also known as Mata Durga or Bhagawati, the temple beckons pilgrims and spiritual seekers with its captivating aura.
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
                            <div className=" padd-text">The Shri Chakreshwari Temple is situated on the foothills of Hari Parbat, a prominent hill overlooking Srinagar
                            </div>
                            <div className="padd-text pad-b-3x">
                                <NavigationLink to="https://www.google.com/maps/place/Shri+Chakreshwari+Temple+(Sharika+Mata+Mandir)/@34.1087248,74.8162656,17z/data=!3m1!4b1!4m6!3m5!1s0x38e18572b960b09b:0x2f17d2810d12a182!8m2!3d34.1087248!4d74.8162656!16s%2Fg%2F1tl4bdpc?entry=ttu" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                            </div>
                        </div>
                        
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Elevation:
                            </div> 
                            <div className=" padd-text">
                            The Shri Chakreshwari Temple, located on the foothills of Hari Parbat is situated at an elevation of approximately 1,584 meters (5,200 feet) above sea level.
                            </div>
                        </div>

                        <div  className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Duration of the Yatra:
                            </span>
                            <div className=" padd-text">
                            A visit to the Shri Chakreshwari Temple can be completed within a few hours.
                            </div>
                            
                        </div>

                        <div >
                            <span className="point typo-accent ">
                            Important Dates:
                            </span>
                            <div className=" padd-text">

                                <div className="point">
                                    <span className="typo-accent ">
                                    Navratri:
                                    </span>Navratri, typically occurring in September or October, is the most significant festival celebrated at the temple. During these nine days, the temple sees a surge in devotees, with special pujas and offerings held in honor of Sharika Devi.
                                </div>

                                <div className="point">
                                    <span className="typo-accent ">
                                    Shivratri:
                                    </span>{`This annual festival, usually celebrated in February or March, honors Lord Shiva. While the main focus is on Shiva, many devotees visit the Shri Chakreshwari Temple during this time as well, given the temple's connection to both Shiva and Shakti.`}
                                </div>

                                <div className="point">
                                    <span className="typo-accent ">
                                    Durga Puja:
                                    </span>{`This ten-day festival, typically occurring in September or October, celebrates the victory of Durga over the demon Mahishasura. Given Sharika Devi's association with Durga, the Shri Chakreshwari Temple might see an increase in visitors during this period.`}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        The Many Faces of Sharika Devi
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The central deity enshrined within the Shri Chakreshwari Temple is Sharika Devi.  Her name translates to "the auspicious one," and she embodies various aspects of the divine feminine.`}
                    </div>

                    <SubSectionText header="Shakti in Her Wrathful Form">
                        {`Often depicted as an eighteen-armed goddess, Sharika Devi represents the fierce and protective aspect of Shakti. She wields various weapons, symbolizing her power to vanquish evil and negativity.`}
                    </SubSectionText>
                 
                    <SubSectionText header="The Self-Illuminating One">
                        {`She is said to be self-created, emanating from a mystical Sri Chakra. This signifies her connection to the all-encompassing cosmic energy.`}
                    </SubSectionText>
                 
                    <SubSectionText header="The Sayambhu Sri Chakra">
                        {`A unique feature of the temple is the presence of a "Sayambhu Sri Chakra," a self-manifesting Sri Chakra carved onto the vertical rock face within the temple complex. This reinforces the association of Sharika Devi with the cosmic order and the divine feminine principle.`}
                    </SubSectionText>

                </div>


                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        {`Unveiling the Temple's History`}
                    </div>
                        <div className="padd-text sst-text header-gap-top">
                            {`The exact origins of the Shri Chakreshwari Temple remain shrouded in the mists of time. Legends and historical accounts offer various narratives, adding to the temple's mystique:`}
                        </div>

                    <SubSectionText header="The Legend of Kashyapa Rishi:">
                        {`One popular legend credits Kashyapa Rishi, a revered sage, with establishing the temple. The story recounts how he drained a vast lake, leaving behind a small remnant. 
                        A demon named Tsanda took refuge in this remaining water, terrorizing the inhabitants. Sharika Devi, assuming the form of a bird, captured the demon with a stone, which grew to become the Hari Parbat hill where the temple now stands.`}
                    </SubSectionText>

                    <SubSectionText header="Historical References:">
                        {`Historical records suggest the temple's existence as early as the 8th century AD. Literary works by Kashmiri scholars like Kalhana mention the temple, indicating its significance within Kashmiri culture.`}
                    </SubSectionText>


                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        The Link between the Temple and Kashmir Shaivism
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Shri Chakreshwari Temple holds a vital place within the unique philosophy of Kashmir Shaivism.  
                        This school of thought emphasizes the non-dual nature of reality, where Shiva and Shakti are seen as inseparable aspects of the ultimate divine principle. The temple serves as a powerful symbol of this core tenet:`}
                    </div>
                    <SubSectionText header="The Duality of Shiva and Shakti:">
                        {`The temple's location on the slopes of Hari Parbat, associated with Shiva, signifies the inseparable connection between the masculine and feminine aspects of the divine.`}
                    </SubSectionText>
                    
                    <SubSectionText header="The Power of the Divine Mother:">
                        {`Sharika Devi, as a manifestation of Shakti, embodies the creative and transformative power behind all existence. Kashmir Shaivism emphasizes the importance of Shakti, and the temple serves as a focal point for devotees seeking her blessings.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Beyond the Historical Veil
                    </div>
                    <SubSectionText header="Architectural Grandeur:">
                        {`Constructed in a traditional Kashmiri style, the temple showcases intricate woodwork and stone carvings. The central sanctum sanctorum houses the idol of Sharika Devi, adorned with precious stones and offerings.`}
                    </SubSectionText>

                    <SubSectionText header="Ritualistic Practices:">
                        {`Specific rituals and offerings are associated with the temple. During special occasions, animal sacrifices were historically practiced, though this has been discontinued in modern times. Today, offerings like flowers, fruits, and sweets are more common.`}
                    </SubSectionText>

                </div>

                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Beyond the Temple Walls
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`A visit to the Shri Chakreshwari Temple can be a part of a larger exploration of Srinagar's rich cultural and historical tapestry. Here are some nearby attractions one might consider including in the itinerary:`}
                    </div>

                    <SubSectionText header="Hari Parbat:">
                        {`Hike up the slopes of Hari Parbat for breathtaking panoramic views of Srinagar and a chance to explore historical landmarks like the Shankaracharya Temple.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Dal Lake:">
                        {`Immerse yourself in the serene beauty of Dal Lake, a popular tourist destination known for its houseboats and scenic shikara rides.`}
                    </SubSectionText>


                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    A Beacon of Faith
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Shri Chakreshwari Temple transcends the realm of a mere tourist attraction. It serves as a vital center for devotees of Kashmir Shaivism, a symbol of the transformative power of the divine feminine, and a testament to the rich cultural heritage of Srinagar. Whether you're a seasoned devotee or simply curious about Kashmiri traditions, the Shri Chakreshwari Temple welcomes you to embark on a journey of self-discovery. 
                        As you delve deeper into the temple's stories, rituals, and the philosophy of Kashmir Shaivism, you might just discover a deeper understanding of the divine feminine and your own connection to the universe.`}
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

export default Chakreshwari;