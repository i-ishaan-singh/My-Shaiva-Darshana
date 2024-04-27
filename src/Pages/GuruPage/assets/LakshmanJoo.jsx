import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { Quote } from "../../../Components/Quote/Quoter";
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import laxmanImg from '../../../assets/images/laxman.jpg';


const LakshmanJoo = function(){

    return (<div role="section">
                <ImageTextSection imgSrc={laxmanImg} header={"Swami Lakshmanjoo"} subHeader={"The Friend of God"}>
                    {`Swami Lakshmanjoo (1907-1991) stands as a towering figure in the rich tapestry of Kashmir Shaivism. Often referred to as Lal Ded ("Friend of God") by his devotees, he was a revered scholar, practitioner, and the last living master in the unbroken lineage of this profound spiritual tradition.`}
                </ImageTextSection>
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Biography
                    </div>
                    <SubSectionText header="Early Life and Spiritual Inclination">
                        {`Swami Lakshmanjoo was a Kashmiri Shaiva saint and scholar born in Srinagar in 1907. Born as Lakshman Raina, his spiritual yearnings began at a tender age of three. He experienced deep states of absorption that he called "badhi bhod" (greater than the greatest). Recognizing his inclination, his family provided him with guidance from their family priest (Swami Ram), introducing him to the path of Kashmir Shaivism.
                        
                        He received initiation from Swami Mahatabakak, immersing himself in the study and practice of Kashmir Shaivism. His dedication led him to experience the full realization of the tradition.`}
                    </SubSectionText>

                    <SubSectionText header="Reviving a Dormant Tradition">
                        {`After receiving his initiation and spending years immersed in intensive practices, Lakshmanjoo embarked on a period of travel in his 30s.  He journeyed throughout India, seeking out and engaging with other prominent spiritual figures of his time.  These encounters, including interactions with M.K. Gandhi, Sri Aurobindo, and Ramana Maharshi, likely broadened his perspective and enriched his understanding of the spiritual path.

                        Eventually, Lakshmanjoo returned to his roots in Kashmir. He settled on the eastern shore of the picturesque Dal Lake and established an ashram that continues to serve as a center for learning and practice within the Kashmir Shaiva tradition.  While maintaining a period of solitude each winter, he dedicated himself to teaching and sharing the wisdom of Kashmir Shaivism with all who came seeking guidance.

                        Recognizing the growing interest in Kashmir Shaivism beyond Kashmir, Lakshmanjoo established the Universal Shaiva Fellowship in the United States. This initiative helped disseminate the teachings to a wider audience and ensured the continuation of the lineage's knowledge beyond his physical lifetime.`}
                    </SubSectionText>
                </div>

                <div className="shiv-section section-gap">
                    <Quote
                        quote={'Bhakti (devotion) is when you see that each and every object is the glamour of your own consciousness.'}
                        author={'Swami Lakshmanjoo'}
                    />
                </div>

                <div className="shiv-section section-gap">

                    <div className="shiv-h3 typo-accent color-accent">
                        Teachings and Philosophy
                    </div>

                    <SubSectionText header="Non-Dual Shaivism:">
                        {`Swami Lakshmanjoo emphasized the non-dual nature of reality in Kashmir Shaivism. He taught that all existence is an expression of the ultimate reality, Shiva, and that individual consciousness is ultimately one with the divine.`}
                    </SubSectionText>

                    <SubSectionText header="Devotion and Self-Realization:">
                        {`He advocated for both devotion (bhakti) and self-realization (jnana) as essential aspects of the spiritual path.  Devotion is seeing the divine in all things, while self-realization is recognizing one's true nature as Shiva.`}
                    </SubSectionText>

                    <SubSectionText header="The Importance of Meditation:">
                        {`Swami Lakshmanjoo emphasized the importance of meditation practices like focusing on the central point between inhalation and exhalation for quieting the mind and experiencing the Self.`}
                    </SubSectionText>

                    <SubSectionText header="Living the Divine: ">
                        {`He believed that the entire universe is an act of devotion, reminding us that self-realization and deep love for the divine are ultimately inseparable.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <Quote
                        quote={'The whole Universe is just the means to recognize Lord Shiva.'}
                        author={'Swami Lakshmanjoo'}
                    />
                </div>
                
                <div className="shiv-section section-gap">

                    <div className="shiv-h3 typo-accent color-accent">
                        Literature and Commentary
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Swami Lakshmanjoo's prolific teachings were transcribed and published into numerous books. While he didn't write them in the traditional sense, his spoken discourses offer profound insights into Kashmir Shaivism.

                        The central idea in most of his works revolves around the core principles of Kashmir Shaivism: self-realization, the non-dual nature of reality, and the recognition of the divine within.`}
                    </div>
                    <SubSectionText header="Śakti and Śaktipat">
                        {`Explores the concept of Shakti, the divine feminine principle, and its role in spiritual transformation.`}
                    </SubSectionText>

                  
                    <SubSectionText header="The Wondrous Churning of the Ocean of Milk">
                        {`Offers a commentary on the Śivasūtra (aphorisms of Shiva), a foundational text in Kashmir Shaivism.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Kaula Jnana Nirnaya">
                        {`Delves into the concept of Kaula Jnana, a form of non-dual knowledge emphasized in Kashmir Shaivism.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Legacy
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Swami Lakshmanjoo's passing in 1991 marked the end of an era. 
                        While he left behind a thriving ashram and a dedicated group of students carrying forward his teachings, he did not appoint a single successor in the traditional sense. However, his vast body of work and the enduring legacy of his revival efforts continue to inspire and guide seekers on the path of self-realization within Kashmir Shaivism.`}
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
        url: '/My-Shaiva-Darshana/personalities-list',
        text: 'Know more related Personalities'
    },
    {
        url: '/My-Shaiva-Darshana/guru-parampara',
        text: 'Explore Guru Parampara'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'Referrences'
    }
]

export default LakshmanJoo