import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import amarnathImg from '../../../assets/images/pilgrimage/amarnath.jpg';


const Amarnath = function(){

    useTitle('Amarnath Cave');

    return (<div role="section">
                <ImageTextSection imgSrc={amarnathImg} header={"Amarnath Cave"} subHeader={"A Sacred Abode of Shiva in the Himalayas"}>
                    Deep within the majestic Himalayas, nestled amidst the breathtaking scenery of Kashmir, lies the holy Amarnath Cave. This revered shrine, a natural ice lingam formation, has captivated pilgrims and spiritual seekers for centuries. Its significance transcends religious boundaries, holding a special place in the hearts of Hindus, particularly those who follow Kashmir Shaivism.
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
                            <div className=" padd-text">The Amarnath Cave is situated in the Pahalgam Tehsil of the Anantnag district in Jammu and Kashmir, India.
                            </div>
                            <div className="padd-text pad-b-3x">
                                <NavigationLink to="https://www.google.com/maps/place/Shri+Amarnath+Cave+Temple/@34.212109,75.5054849,17z/data=!4m6!3m5!1s0x38e24fca96056755:0xdfd15d625912515e!8m2!3d34.2156918!4d75.5041201!16zL20vMDdnZHFr?entry=ttu" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                            </div>
                        </div>
                        
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Elevation:
                            </div> 
                            <div className=" padd-text">
                            The cave lies at an altitude of approximately 3,888 meters (12,756 feet).
                            </div>
                        </div>

                        <div  className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Duration of the Yatra:
                            </span>
                            <div className=" padd-text">
                            The pilgrimage typically lasts between 4 to 6 days.
                            </div>
                            
                        </div>

                        <div >
                            <span className="point typo-accent ">
                            Important Dates:
                            </span>
                            <div className=" padd-text">
                            The exact dates of the Yatra vary each year, coinciding with the Hindu calendar month of Shraavana (typically between June and August).</div>
                            
                        </div>

                    </div>
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Shiva, the Abode of Eternal Ice
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Amarnath Cave enshrines Lord Shiva, one of the principal deities in Kashmir Shaivaism. He is often depicted as the embodiment of cosmic consciousness, the destroyer and regenerator of all creation. 
                        Within the cave, a naturally formed ice lingam, a symbolic representation of Shiva, takes center stage. The lingam, formed by the freezing of water dripping from the cave roof, waxes and wanes with the lunar cycle, adding to the mystique of the cave.`}
                    </div>
                </div>


                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Unveiling the Story
                    </div>
                        <div className="padd-text sst-text header-gap-top">
                            {`The origins of the Amarnath Cave are shrouded in myth and legend. Here are some of the prominent narratives associated with the cave's history:`}
                        </div>

                    <SubSectionText header="The Story of Shiva and Parvati:">
                        {`According to a widely known legend, Shiva narrated the secrets of immortality and creation to his consort, Parvati, within the Amarnath Cave. He recounted the tale of the universe's cyclical nature of creation, preservation, and destruction. To ensure secrecy, Shiva made pigeons leave the valley, explaining why pigeons are not found near the cave`}
                    </SubSectionText>

                    <SubSectionText header="The Story of the Ice Lingam:">
                        {`Another legend narrates the story of Rishi (sage) Bhrigu, who embarked on a pilgrimage to find the holiest place on earth. Shiva, impressed by Bhrigu's devotion, manifested himself as a blazing column of light that stretched from heaven to earth. 
                        To cool the fiery lingam, Shiva created the Amarnath Cave and released an unending flow of icy water, forming the permanent ice lingam.`}
                    </SubSectionText>

                    <SubSectionText header="Historical References:">
                        {`While the exact origins of the cave remain unclear, some historical references point towards its significance in the past. 
                        The Mughal emperor Akbar (1556-1605 CE) himself is said to have sponsored pilgrimages to the cave.  Additionally, written accounts from the 17th century CE mention the existence of the cave and the ice lingam.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        The Amarnath Cave and Kashmir Shaivism
                    </div>
                    <SubSectionText header="The Abode of Shiva-Atman:">
                        {`Kashmir Shaivism emphasizes the concept of Shiva-Atman, the individual soul as an inseparable spark of the universal Shiva. The Amarnath Cave, with its naturally formed ice lingam, symbolizes this divine essence within each person. The pilgrimage to the cave represents a journey inwards, towards self-realization and recognition of one's inherent divinity.`}
                    </SubSectionText>
                    
                    <SubSectionText header="The Significance of Ice:">
                        {`In Kashmir Shaivism, ice represents consciousness in its purest form. The ever-changing nature of the ice lingam, waxing and waning with the moon, reflects the impermanence of the material world and the cyclical nature of existence. The constant flow of water that forms the lingam symbolizes the ever-flowing stream of consciousness.`}
                    </SubSectionText>
                    
                    <SubSectionText header="The Significance of Ice:">
                        {`In Kashmir Shaivism, ice represents consciousness in its purest form. The ever-changing nature of the ice lingam, waxing and waning with the moon, reflects the impermanence of the material world and the cyclical nature of existence. The constant flow of water that forms the lingam symbolizes the ever-flowing stream of consciousness.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    Beyond Mythology: The Scientific Marvel of the Ice Lingam
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The formation of the ice lingam within the Amarnath Cave continues to baffle scientists. The specific location and microclimatic conditions within the cave create a unique environment where water droplets freeze despite being below the freezing point.  
                        The lack of sunlight and the constant flow of cold air contribute to the phenomenon.  Additionally, the minerals present in the water might influence the ice formation process.  While the scientific explanation provides some insights, the natural wonder of the ice lingam adds to the mystical aura of the cave.`}
                    </div>
                </div>
                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        The Amarnath Yatra: A Grueling Yet Rewarding Pilgrimage
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Every year, during the summer months coinciding with the Hindu calendar month of Shraavana, a sacred pilgrimage known as the Amarnath Yatra takes place. Thousands of devotees embark on a challenging trek through the Himalayas to reach the cave and witness the holy ice lingam. The journey, though physically demanding, is considered a transformative experience for pilgrims.
                        
                        The trek to the Amarnath Cave is arduous, with high altitude trails, unpredictable weather conditions, and limited amenities.  Despite the physical challenges, the pilgrimage holds immense significance for devotees. It signifies:`}
                    </div>

                    <SubSectionText header="Devotion to Shiva:">
                        {`The Amarnath Yatra allows pilgrims to express their devotion to Lord Shiva.  The journey itself becomes an act of worship, testing their determination and faith.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Inner Transformation:">
                        {`The arduous trek serves as a metaphor for the inner journey towards self-realization.  Overcoming physical obstacles reflects the ability to overcome mental and emotional challenges on the path to spiritual liberation.`}
                    </SubSectionText>

                    <SubSectionText header="Social Harmony: ">
                        {`The pilgrimage brings together devotees from all walks of life, fostering a sense of community and shared purpose.  It transcends social barriers and promotes a spirit of unity.`}
                    </SubSectionText>


                </div>
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    Disclaimer
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`It is important to note that the Amarnath Yatra can be physically demanding and requires proper preparation, including physical fitness and medical clearance, especially for those with pre-existing health conditions.`}
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

export default Amarnath