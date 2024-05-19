import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import kheerbhawani from '../../../assets/images/pilgrimage/kheerbhawani.jpg';


const KheerBhawani = function(){

    useTitle('Mata Kheer Bhawani');

    return (<div role="section">
                <ImageTextSection imgSrc={kheerbhawani} header={"Mata Kheer Bhawani"} subHeader={"A Beacon of Faith in Kashmir"}>
                Mata Kheer Bhawani, also revered as Ragnya Devi or Durga, is a revered Hindu goddess enshrined in the Mata Kheer Bhawani Temple, located in the Ganderbal district of Jammu and Kashmir, India.
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
                            {`The Mata Kheer Bhawani Temple is situated in Tulmulla village, Ganderbal district, Jammu and Kashmir, approximately 28 kilometers northeast of Srinagar.
                            The temple is nestled amidst picturesque mountains, offering a serene atmosphere for prayer and reflection.`}
                            </div>
                            <div className="padd-text pad-b-3x">
                                <NavigationLink to="https://maps.app.goo.gl/HXtxp3D3xG2s1ypq8" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                            </div>
                        </div>
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Elevation:
                            </div> 
                            <div className=" padd-text">
                            The Mata Kheer Bhawani Temple is situated at an elevation of approximately 1,585 meters (5,184 feet) above sea level.
                            </div>
                        </div>

                        <div  className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Duration of the Yatra:
                            </span>
                            <div className=" padd-text">
                            The Mata Kheer Bhawani Yatra typically takes place in June/July.  The duration of your visit during the Yatra can vary depending on your interests.  You might choose to participate in the entire pilgrimage, lasting several days, or visit for a shorter period during the festivities.</div>
                            
                        </div>

                        <div >
                            <span className="point typo-accent ">
                            Important Dates:
                            </span>
                            <div className=" padd-text">
                            {`Besides the annual Yatra, there aren't specific festivals solely dedicated to Mata Kheer Bhawani within the temple.  However, some general Hindu festivals like Durga Puja (typically in September/October), celebrating Durga's victory over the demon Mahishasura, might hold a special significance for devotees seeking blessings from Mata Kheer Bhawani as a form of Durga.`}</div>
                            
                        </div>

                    </div>
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    Mata Kheer Bhawani - Manifestation of Durga
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Mata Kheer Bhawani embodies a benevolent manifestation of Durga, the powerful goddess associated with protection, victory, and the destruction of evil.
                        
                        Mata Kheer Bhawani is often depicted riding a tiger, wielding weapons, and radiating a sense of power and grace.

                        Here's a deeper look at her significance:`}
                    </div>

                    <SubSectionText header="Durga as Shakti:">
                        {`Within Hinduism, Durga represents the divine feminine energy (Shakti) of Lord Shiva.  Mata Kheer Bhawani, as a form of Durga, embodies the protective and nurturing aspects of Shakti.`}
                    </SubSectionText>
                    
                    <SubSectionText header="The Legend of the Offering:">
                        {`A popular legend associated with the temple narrates the story of Bhairava, a fierce form of Shiva, demanding a kheer (rice pudding) offering.  Mata Kheer Bhawani emerged, appeased him with the offering, and established peace.  This story emphasizes her role in restoring harmony and overcoming challenges.`}
                    </SubSectionText>


                </div>


                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    A Legacy of Resilience
                    </div>
                       
                    <SubSectionText header="Ancient Origins:">
                        {`While the exact date of construction remains unclear, historical evidence suggests the temple has existed since at least the 8th century CE. Literary references and archaeological finds allude to its significance in the region.`}
                    </SubSectionText>

                    <SubSectionText header="Periods of Destruction and Reconstruction: ">
                        {`The temple has faced periods of destruction, particularly during Muslim rule in Kashmir.  However, the unwavering faith of Kashmiri Hindus led to its reconstruction, most recently after the 1990s. This resilience underscores the temple's deep cultural and religious significance.`}
                    </SubSectionText>

                    <SubSectionText header="Annual Festival:">
                        {`The annual Mata Kheer Bhawani Yatra (pilgrimage) is a major event, attracting thousands of devotees, particularly Kashmiri Pandits, who might have been displaced due to historical events.  The festival fosters a sense of community and cultural revival.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Kashmir Shaivism: Aligning with the Divine Feminine
                    </div>
                    <SubSectionText header="Shakti and Shiva:">
                        {`Kashmir Shaivism emphasizes the inseparable nature of Shiva and Shakti.  Mata Kheer Bhawani, as a manifestation of Durga (Shakti), embodies the dynamic and transformative power within the ultimate reality (Shiva).`}
                    </SubSectionText>
                    
                    <SubSectionText header="Trika (Triple Reality):">
                        {`Kashmir Shaivism identifies three aspects of reality: Shiva (consciousness), Shakti (power), and the world (their union).  Mata Kheer Bhawani, as a powerful form of Shakti, serves as a bridge between the devotee and the ultimate reality.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Tantric Practices:">
                        {`Some Tantric practices within Kashmir Shaivism acknowledge various aspects of the divine feminine, including Durga.  These practices, however, are often complex and require guidance from a qualified teacher.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    Beyond the Pilgrimage: Experiencing the Divine Presence
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`While the Mata Kheer Bhawani Temple holds immense significance, experiencing the divine presence of Mata Kheer Bhawani can extend beyond a physical pilgrimage:`}
                    </div>

                    <SubSectionText header="Inner Strength and Peace:">
                        {` Mata Kheer Bhawani embodies inner strength and the ability to overcome challenges.  Connecting with her essence involves cultivating these qualities within oneself to achieve inner peace.`}
                    </SubSectionText>

                    <SubSectionText header="Respecting Traditions:">
                        {`If visiting the temple, dress modestly and adhere to local customs.  Maintaining silence and observing ongoing rituals with respect is crucial.  If unsure about any procedures, politely ask a priest or a devotee for guidance.`}
                    </SubSectionText>


                </div>
                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    A Journey of Faith and Cultural Connection
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Mata Kheer Bhawani Temple transcends the boundaries of a religious structure. It stands as a testament to the enduring faith of Kashmiri Hindus, a symbol of cultural resilience, and a site for spiritual awakening. 
                        
                        Whether embarking on the annual Yatra or seeking a deeper understanding of Kashmiri Shaivism, Mata Kheer Bhawani offers a unique opportunity for cultural immersion and a connection with the divine feminine energy.`}
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

export default KheerBhawani