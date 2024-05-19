import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks"
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator"
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText"
import { useTitle } from "../../../Utils/useTitle/useTitle"



const Svatantrya = function(){

    useTitle('Svatantrya');

    return (<div role="section">
                <ImageTextSection header={"Svatantrya"} subHeader={"The Freedom Within"} >
                    {`Svatantrya transcends the mere absence of external constraints and delves into the core of our being, revealing the inherent freedom and limitless potential residing within each individual.`}
                </ImageTextSection>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Shiva-Atman : 
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Kashmir Shaivism proposes a non-dual (advaita) reality. 
                        
                        The ultimate reality is Shiva, pure consciousness, and the ground of being.  Within this ground lies the individual self (Atman), inseparable from Shiva.
                        
                        This inherent oneness is obscured by Maya (illusion), creating the experience of a separate self and a limited world.`}
                    </div>           

                </div>
               
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    The Shackles of Maya: 
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Maya, often misunderstood as mere illusion, plays a complex role in Svatantrya.  
                        While Maya obscures our true nature, it also serves as the ground for the play of consciousness (lila) and the manifestation of the universe.
                        
                        Svatantrya is often understood in the context of liberation (Moksha). Svatantrya doesn't negate Maya entirely. It's about recognizing the limitations imposed by Maya while simultaneously utilizing our freedom to transcend them.  
                        Physical limitations, social constraints, dependence on external circumstances, Psychological conditioning, limiting beliefs, and the grip of the ego are some of the limitations which are the work of maya.

                        Svatantrya, in its essence, is liberation from these bondages. It's the recognition that the limitations we experience are not inherent to our true nature as Shiva-Atman. 
                        We can use our inherent creative power, empowered by Shakti, to navigate the world shaped by Maya without getting caught in its illusions.`}
                    </div>   

                </div>
               
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    The Liberation of Consciousness
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Svatantrya ultimately leads to a state of liberation (Moksha) beyond the limitations of the phenomenal world.  
                        This state is not merely the absence of suffering. This state is a state of pure consciousness, where one transcends the limitations of the ego and experiences oneness with Shiva. 
                        Here, Svatantrya reaches its full potential.`}
                    </div>   

                    <SubSectionText header="Freedom from Duality">
                        {`Duality, the experience of subject-object separation, is a product of Maya. In the liberated state, the perceiver and the perceived merge into a unified experience of pure consciousness.`}

                    </SubSectionText>   

                    <SubSectionText header="Freedom from Suffering">
                        {`Suffering arises from attachment, desires, and the limitations of the ego. When we realize our inherent freedom as Shiva-Atman, attachment loses its grip, and suffering dissolves.`}

                    </SubSectionText>   
                    <SubSectionText header="Freedom of Action">
                        {`Liberation doesn't lead to a passive state. We retain the freedom to act (kriya) in the world, but our actions are motivated by pure awareness and divine will, not by egoic desires.`}

                    </SubSectionText>   

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                    Conclusion
                    </div>

                    <div className="padd-text sst-text header-gap-top">
                        {`The concept of Svatantrya in Kashmir Shaivism is a transformative and multifaceted one. It's a journey that begins with the recognition of our inherent freedom as Shiva-Atman, progresses through self-inquiry and spiritual practices, and culminates in a state of liberation beyond the limitations of the ego. Svatantrya is not just a personal liberation, but a call to contribute to the well-being of all beings, fostering a world where everyone can awaken to their own limitless potential.

                        This exploration of Svatantrya highlights just one of the many profound concepts within Kashmir Shaivism. Its philosophy offers a rich tapestry of wisdom, practices, and a unique perspective on the path to liberation. By delving deeper into its teachings, we can embark on a journey of self-discovery, cultivate a sense of freedom that permeates all aspects of our lives, and ultimately contribute to a more awakened and compassionate world.`}
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
        url: '/My-Shaiva-Darshana/key-concepts-list',
        text: 'Read More Key Concepts'
    },
    {
        url: '/My-Shaiva-Darshana/key-concepts?name=upayas',
        text: 'Explore Upayas'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]
export default Svatantrya