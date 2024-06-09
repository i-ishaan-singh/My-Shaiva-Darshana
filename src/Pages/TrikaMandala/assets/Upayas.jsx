import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks"
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator"
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText"
import { useTitle } from "../../../Utils/useTitle/useTitle"



const UpayasData = function(){

    useTitle('Upayas');

    return (<div role="section">
                <ImageTextSection header={"Upayas"} subHeader={"The Four Paths to Shiva"} >
                    {`Kashmir Shaivism, offers a unique perspective on achieving liberation or the state of Shiva. 
                    This state is not merely the absence of suffering, but a vibrant experience of pure consciousness, bliss, and action. Central to this philosophy are the upayas, which translate to "means" or "methods." These upayas are not rigid steps, but rather progressive pathways leading the seeker towards realizing their inherent oneness with Shiva.`}
                </ImageTextSection>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Anupaya
                    </div>

                    <SubSectionText header="The Path of No Means">
                        {`Anupaya stands apart from the other upayas. It signifies the negation of all methods. 
                        
                        Abhinavagupta, a revered scholar of Kashmir Shaivism, explains that the Self, our ultimate goal, already exists within us. It is not something to be attained, but rather recognized. There is no need for practices or techniques, for the Self is complete and ever-present. Anupaya transcends duality, existing in a realm beyond action or achievement.  
                        Here, Abhinavagupta emphasizes simply being, experiencing everything as it is, without judgment or attachment.  Anupaya represents the culmination of the other upayas, a state of effortless awareness.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                            {`Vedantic Contrast`}
                        </div>
                        {`Kashmir Shaivism differentiates itself from Advaita Vedanta in its understanding of Shiva.
                        While Vedanta emphasizes Sat-Chit-Ananda (truth, consciousness, bliss), Kashmir Shaivism adds Iccha (desire), Jnana (knowledge), and Kriya (action) to encompass the multifaceted nature of Shiva. 
                        
                        These aspects are explored further in the other three upayas.`}
                    </SubSectionText>                   

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Sambhavopaya
                    </div>

                    <SubSectionText header="The Supreme Path of Grace">
                        {`Sambhavopaya, also called Icchopaya (path of desire), signifies the path of effortless realization through the grace of the master (guru). 
                        In this state, thoughtlessness prevails, and the yogi experiences the universe as a manifestation of the real "I" which is Shiva himself. The yogi transcends the need for methods, residing in a state of pure awareness where everything is a reflection of Shiva within.
                        
                        Sambhavopaya operates within the Matrikachakra, Pratyahara (withdrawal of senses), and the theory of reflection (seeing Shiva's essence in all elements).  A practitioner in this state is said to radiate brilliance like the midday sun.`}

                    </SubSectionText>                   

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Saktopaya
                    </div>

                    <SubSectionText header="The Path of Power">
                        {`Saktopaya, or Gyanopaya (path of knowledge), utilizes the power of Gyan Shakti (energy of knowledge) for spiritual ascent. 
                        Here, the yogi practices centering, a technique of focusing awareness between any two actions or thoughts. This requires a sharp and continuous awareness, achieved by observing the supreme being present in all actions.  The key is to develop "beakless awareness," a state free of judgment or mental chatter.  If this awareness falters, the yogi risks falling back to the lower upaya of anavopaya. 
                        Master's grace is crucial in developing the capacity to receive the benefits of Saktopaya.`}
                    </SubSectionText>                   

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Anavopaya
                    </div>

                    <SubSectionText header="The Path of Action">
                        {`Anavopaya, also known as Kriyopaya (path of action), focuses on practices involving the individual soul (anu).  It utilizes techniques like breathwork (uccara), sensory focus (karana), contemplation (dhyana), and concentration on specific points in the body or cosmos (sthana pratisthan).  
                        Uccara involves focusing on the space between breaths, while karana involves maintaining one-pointed focus through a chosen sense organ. 
                        Dhyana encompasses various forms of contemplation, from focusing on the heart to meditating on mantras. 
                        Sthana pratisthan involves focusing awareness on specific points within the body or the vastness of the universe within a single breath.
                        
                        Anavopaya relies on external support to strengthen awareness, which becomes progressively less necessary in the higher upayas.`}
                    </SubSectionText>                   

                </div>

                
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Conclusion
                    </div>

                    <SubSectionText>
                        {`While each upaya offers a distinct path, they all lead to the same goal - the realization of one's transcendental Self. 
                        Anavopaya may be a longer journey, while Saktopaya offers a shorter route, and Sambhavopaya the most direct path. Ultimately, the choice of upaya depends on the individual's temperament and capacity.`}
                    </SubSectionText>                   

                </div>

                
                <SectionSeparator/>
                <RelavantLinks
                    data={relavantData}
                />
            </div>)

}


var relavantData = [
    {
        url: '/My-Shaiva-Darshana/key-concepts-list',
        text: 'Read More Key Concepts'
    },
    {
        url: '/My-Shaiva-Darshana/personalities?name=abhinavgupta',
        text: 'Explore Abhinavgupta'
    },
    {
        url: '/My-Shaiva-Darshana/key-concepts?name=matrikachakra',
        text: 'Explore Matrikachakra'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]
export default UpayasData