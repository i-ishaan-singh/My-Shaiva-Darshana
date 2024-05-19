import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import machliImg from '../../../assets/images/pilgrimage/machli.jpg';


const Machli = function(){

    useTitle('Machail Mata Temple');

    return (<div role="section">
                <ImageTextSection imgSrc={machliImg} header={"Machail Mata Temple"} subHeader={"The Abode of the Goddess in the Himalayas"}>
                Nestled amidst the breathtaking mountains of the Paddar Valley in Kishtwar district, Jammu and Kashmir, lies the revered Machail Mata Temple. Dedicated to Goddess Durga, also known as Chandi Mata or Machail Wali Mata, this temple attracts thousands of devotees every year.
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
                                The Machail Mata Temple is situated in the village of Machail, Paddar Valley, Kishtwar district, Jammu and Kashmir, India.
                            </div>
                            <div className="padd-text pad-b-3x">
                                <NavigationLink to="https://www.google.com/maps/place/Machail+Mata+Padder+J%26K+India/@33.4176875,76.3439649,18z/data=!3m1!4b1!4m6!3m5!1s0x391d4994ebc7a1f7:0xb5782b04f29e22ca!8m2!3d33.4176875!4d76.3446875!16s%2Fg%2F1tctk565?entry=ttu" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>See on Maps</NavigationLink>
                            </div>
                        </div>
                        
                        <div className="pad-b-3x">
                            <div className="point typo-accent ">
                            Elevation:
                            </div> 
                            <div className=" padd-text">
                            The temple is located at an approximate elevation of 2,800 meters (9,186 feet).
                            </div>
                        </div>

                        <div  className="pad-b-3x">
                            <span className=" point typo-accent ">
                            Duration of the Yatra:
                            </span>
                            <div className=" padd-text">
                            The pilgrimage typically takes 2-3 days, depending on the pace and stopovers.
                            </div>
                            
                        </div>

                        <div >
                            <span className="point typo-accent ">
                            Important Dates:
                            </span>
                            <div className=" padd-text">
                            The Yatra coincides with the month of August, with the exact dates varying slightly each year based on the Hindu lunar calendar.</div>
                            
                        </div>

                    </div>
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Machail Mata - A Form of Durga
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Machail Mata is a manifestation of the powerful Goddess Durga, the embodiment of divine feminine energy and the protector against evil.  
                        Depicted riding a tiger and wielding weapons, Durga represents the triumph of good over evil and the restoration of dharma (righteousness). In the context of Machail Mata, devotees revere her as a compassionate protector and a source of blessings for a prosperous life.`}
                    </div>
                </div>


                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    Story and History of Machail Mata Temple
                    </div>
                        <div className="padd-text sst-text header-gap-top">
                            {`The origins of the Machail Mata Temple remain shrouded in a veil of time, with various legends and historical accounts contributing to its rich narrative.
                            Some prominent stories associated with the temple's history:`}
                        </div>

                    <SubSectionText header="The Legend of Thakur Kulveer Singh:">
                        {`A popular legend credits Thakur Kulveer Singh of Bhaderwah with establishing the annual pilgrimage to the temple in 1981.
                        Deeply devoted to Machail Mata, he is said to have initiated the "Chhadi Yatra" (holy mace pilgrimage), which has now become the second-largest pilgrimage in the Jammu region.`}
                    </SubSectionText>

                    <SubSectionText header="The Story of Zorawar Singh Kahluria: ">
                        {`Another historical account mentions Zorawar Singh Kahluria, a military leader of the Dogra dynasty in the 19th century.  Before embarking on a conquest across the challenging terrain of the Himalayas, he is believed to have sought blessings at the Machail Mata Temple.
                        His successful campaign solidified his faith in the divine power of the Goddess.`}
                    </SubSectionText>

                    <SubSectionText header="Historical References:">
                        {`While specific details about the temple's construction remain unclear, historical references suggest its existence for centuries.  
                        The integration of the Paddar Valley with the Kishtwar tehsil under the rule of Maharaja Ranbir Singh might have further contributed to the temple's prominence.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        The Machail Mata Temple and Kashmir Shaivism
                    </div>
                    <SubSectionText header="The Abode of Shiva-Atman:">
                        {`Though not directly affiliated with Kashmir Shaivism, the Machail Mata Temple does hold some connections to this unique school of Hindu philosophy.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Shared Emphasis on Devi (Goddess):">
                        {`Kashmir Shaivism acknowledges the importance of the Divine Feminine, often represented by Shakti, the divine energy of Shiva.  Machail Mata, as a form of Durga, resonates with this concept of a powerful and benevolent Devi.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Convergence of Traditions:">
                        {`The Paddar Valley, where the temple resides, has witnessed the interaction of various religious traditions.  Elements of Shaivism might have subtly influenced the local beliefs and practices associated with Machail Mata worship.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                    The Allure of the Paddar Valley
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Machail Mata Temple is not just a religious site; it's nestled in a region known for its captivating natural beauty.  The Paddar Valley, adorned with lush meadows, cascading waterfalls, and snow-capped peaks, offers a serene and picturesque backdrop for the temple.`}
                    </div>

                    <SubSectionText header="Untamed Beauty:">
                        {`The Paddar Valley boasts pristine landscapes, with meadows carpeted with wildflowers blooming in the summer months. Gushing rivers like the Chenab add to the charm, creating a sense of tranquility amidst the majestic mountains.`}
                    </SubSectionText>

                    <SubSectionText header="A Haven for Wildlife:">
                        {`The valley provides a habitat for diverse wildlife species, including Himalayan brown bears, snow leopards, red foxes, and various bird species.`}
                    </SubSectionText>

                    <SubSectionText header="A Cultural Tapestry:">
                        {`The Paddar Valley is home to communities with unique traditions and customs.  Interacting with local people and experiencing their way of life can offer a deeper understanding of the region's cultural heritage.`}
                    </SubSectionText>


                </div>
                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Experiencing the Spiritual Journey: The Machail Mata Yatra
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Machail Mata Yatra is more than just a religious procession; it's a time for spiritual rejuvenation, community bonding, and cultural immersion.
                        
                        The air during the pilgrimage resonates with devotional chants and hymns as devotees sing praises of Machail Mata. This collective expression of faith creates a powerful and uplifting atmosphere.
                        The journey fosters a sense of community and shared purpose among pilgrims.  They assist one another, share stories, and forge lasting bonds over the shared experience.
                        `}
                    </div>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent ">
                    Challenges and Considerations:
                    </div>

                    <SubSectionText header="Moderate to Challenging Trek:">
                        {`Reaching the temple requires a trek of approximately 27-30 kilometers through mountainous terrain. A moderate level of physical fitness is recommended.`}
                    </SubSectionText>

                    <SubSectionText header="Limited Amenities:">
                        {`Accommodation options along the route are limited, with basic facilities available in villages en route.  Pilgrims should be prepared for a rustic experience.`}
                    </SubSectionText>

                    <SubSectionText header="Unpredictable Weather:">
                        {`The weather in the Himalayas can be unpredictable, with possibilities of rain or snowfall.  Proper clothing and gear are essential for a safe journey.`}
                    </SubSectionText>

                    
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        A Beacon of Faith and Tranquility
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`The Machail Mata Temple, nestled amidst the captivating landscapes of the Paddar Valley, transcends the realm of a religious site. It serves as a beacon of faith for devotees, a testament to the enduring power of traditions, and a gateway to experiencing the beauty and serenity of the Himalayas. Whether undertaken physically or virtually, a connection with the Machail Mata Temple can be a deeply enriching experience.`}
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

export default Machli