import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import vignyaanTempleImg from '../../../assets/images/pilgrimage/vignyaanTemple.jpg';


const Bhairav = function(){

    useTitle('The Bhairav Mandirs');

    return (<div role="section">
                <ImageTextSection imgSrc={vignyaanTempleImg} header={"The Bhairav Mandirs"} subHeader={"A Tapestry of Faith and Tradition"}>
                Srinagar, the vibrant capital city of Jammu and Kashmir, is home to several Bhairav temples.  Bhairava, a fierce manifestation of Lord Shiva, holds a significant place in Hinduism, particularly within Kashmir Shaivism, a unique school of thought centered around Shiva worship.
                </ImageTextSection>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Basic Information
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Location:
                            </div> 
                            <div className=" padd-text">
                            The Bhairav Mandirs are scattered throughout Srinagar.  Some prominent ones include Mangleshwar Bhairav Temple (located near Zero Bridge), Anandeshwar Bhairav Mandir (Maisuma area), and Bhairav Mandir (Chattabal).
                            </div>
                        </div>
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Elevation:
                            </div> 
                            <div className=" padd-text">
                            As Srinagar lies in the Kashmir Valley, the elevation of the Bhairav Mandirs would generally range between 1,580 meters (5,184 feet) and 1,600 meters (5,249 feet) above sea level.
                            </div>
                        </div>

                        <div  className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Important Dates:
                            </span>
                            <div className=" padd-text">
                            {`There aren't specific festivals dedicated solely to Bhairava in Kashmir Shaivism.  However, some general Hindu festivals like Maha Shivaratri (typically in February/March) and Shraavana (typically in July/August) might see an increase in devotees visiting Bhairav Mandirs.  During these times, special pujas (worship ceremonies) might be conducted.`}
                            </div>
                            
                        </div>

                        <div >
                            <span className="point typo-accent ">
                            Duration of a Visit:
                            </span>
                            <div className=" padd-text">
                            The duration of a visit to a Bhairav Mandir in Srinagar can vary depending on your interests.  A typical visit might take 30 minutes to an hour, allowing you time to witness the rituals, observe the architecture, and offer prayers.</div>
                            
                        </div>

                    </div>
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Bhairava - The Formidable Form of Shiva
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Bhairava represents the awe-inspiring and powerful aspect of Lord Shiva.  Often depicted with a ferocious form and canine features, he embodies Shiva's role as the destroyer of ignorance and negativity.   
                        Bhairava also symbolizes protection, warding off evil and ensuring cosmic balance.`}
                    </div>
                </div>

                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    The Many Faces of Bhairava in Srinagar:
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Several Bhairav temples exist in Srinagar, each with its own story and significance. Here are a few prominent ones:`}
                    </div>

                    <SubSectionText header="Mangleshwar Bhairav Temple:">
                        {`This 700-year-old temple, located in the heart of Srinagar, is dedicated to Mangleshwar Bhairav.  Devastated by floods in 2014, it has undergone recent restoration and is revered for its historical significance.`}
                    
                        <div className="padd-text pad-b-3x">
                            <NavigationLink to="https://maps.app.goo.gl/kZedFSKfXa23eQap8" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                        </div>

                    </SubSectionText>
                    
                    <SubSectionText header="Anandeshwar Bhairav Mandir:">
                        {`Situated in the Maisuma area, this temple is known for hosting a Havan (fire ceremony) after a long hiatus due to militancy in the region.  This revival signifies the enduring faith associated with Bhairav worship.`}
                        
                        <div className="padd-text pad-b-3x">
                            <NavigationLink to="https://maps.app.goo.gl/dfYRfxX5b4qDjquLA" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                        </div>

                    </SubSectionText>
                 
                    <SubSectionText header="Bhairav Mandir, Chattabal:">
                        {`Located near the historic Chattabal Bridge, this temple is a popular pilgrimage site for devotees seeking blessings from Bhairava.`}

                        <div className="padd-text pad-b-3x">
                            <NavigationLink to="https://maps.app.goo.gl/DfgTkEGmC5R93q3r5" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                        </div>
                    </SubSectionText>


                </div>


                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    A Legacy of Faith
                    </div>
                        

                    <SubSectionText header="Ancient Roots:">
                        {`While pinpointing the exact origins of each Bhairav temple is challenging, the presence of Bhairava worship in Kashmir can be traced back to ancient times.  
                        Literary references and archaeological finds suggest the prevalence of Bhairava iconography in the region.`}
                    </SubSectionText>

                    <SubSectionText header="Resilience and Restoration:">
                        {`The Bhairav Mandirs of Srinagar have faced challenges, including natural disasters and periods of social unrest.  
                        However, the ongoing restoration efforts and continued devotion of the Kashmiri people highlight the enduring legacy of these sacred spaces.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Finding the Divine Within
                    </div>
                    <SubSectionText header="Beyond the Form:">
                        {`While the Bhairav Mandirs offer a place for worshipping the external form of Bhairava, Kashmir Shaivism delves deeper.  It views Bhairava as the embodiment of pure consciousness, residing within each individual.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Tantric Practices:">
                        {`Some Tantric practices associated with Kashmir Shaivism involve the awakening of inner Bhairava through meditation, yoga, and the exploration of subtle energies within the body.`}
                    </SubSectionText>
                    
                    <SubSectionText header="The Role of the Guru:">
                        {`Kashmir Shaivism is a complex tradition.  Seeking guidance from a qualified teacher or guru is crucial for understanding the nuanced interpretations of Bhairava and the practices associated with him.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Experiencing the Bhairava Tradition
                    </div>

                    <SubSectionText header="Understanding the Symbolism:">
                        {`Exploring the symbolism associated with Bhairava's form, such as the ferocious features and canine companion, can offer insights into his role as a destroyer of negativity and a guardian.`}
                    </SubSectionText>

                    <SubSectionText header="Personal Transformation:">
                        {`The concept of Bhairava as the transformative power within can be a catalyst for personal growth.  
                        Engaging in self-reflection and practices aimed at overcoming negativity aligns with the Bhairava spirit.`}
                    </SubSectionText>

                    <SubSectionText header="Artistic Expressions:">
                        {`Bhairava is often depicted in sculptures, paintings, and traditional Kashmiri handicrafts.  Appreciating these artistic expressions can deepen the understanding of his symbolism.`}
                    </SubSectionText>


                </div>
                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    Respectful Conduct
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`When visiting a Bhairav Mandir, remember to dress modestly and adhere to local customs.  Maintaining silence and observing ongoing rituals with respect is crucial.  If unsure about any procedures, politely ask a priest or a devotee for guidance.`}
                    </div>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    A Living Tradition
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Bhairav Mandirs of Srinagar are more than just historical structures; they are vibrant testaments to a living tradition.  They offer a space for devotees to connect with the powerful and transformative aspects of Bhairava.  Understanding the history, symbolism, and connection to Kashmir Shaivism allows visitors to appreciate these Bhairav Mandirs not just as places of worship, but as cultural and spiritual landmarks.`}
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

export default Bhairav