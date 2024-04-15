import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { Quote } from "../../../Components/Quote/Quoter";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import AbhinavguptaImg from '../../../assets/images/abhinavgupta.jpg';


const AbhinavGupta = function(){

    return (<div role="section">
                <ImageTextSection imgSrc={AbhinavguptaImg} header={"Abhinavgupta"} subHeader={"The Supreme Devotee of Shiva"}>
                    Abhinavagupta (924-1020 CE) injected new meaning into Shaiva Philosophy, which later became more popularly known as Kashmir Shaivism. His original thinking shattered established beliefs related to caste, creed, color, and gender restrictions in spiritual practice. Abhinavagupta emphasized that spiritual revelation was not limited to monastic settings; anyone, regardless of background, could tread the path of enlightenment.
                </ImageTextSection>
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Biography
                    </div>
                        <div className="padd-text sst-text header-gap-top">
                            {`Abhinavagupta, often hailed as “Mahamahesvara,” was revered by subsequent Kashmiri authors, disciples, and admirers. 
                            This title translates to the “great devotee of Shiva” or the “Supreme Self.” His profound impact on spiritual thought resonates even today.`}
                        </div>

                    <SubSectionText header="Early Life and Family">
                        {`Abhinavagupta lived during the same period as the renowned philosopher Sankaracharya (approximately 788 to 820 CE). 
                        His father, Narasinhagupta (also known as Chukhulaka), and his mother, Vimalakala, played significant roles in shaping his upbringing.
                        
                        Abhinavagupta’s five cousins—Ksema, Utpala, Abhinava, Chakraka, and Padamgupta—were also highly educated. 
                        It is unnecessary to emphasize that his father, Narasimhagupta, possessed exceptional intellectual abilities. 
                        Proficient in all the Shastras and a devoted follower of Shiva, Narasimhagupta created an environment of unwavering devotion and unparalleled learning. Within this nurturing atmosphere, Abhinavagupta was mentally prepared to embark on the monumental task that awaited him.`}
                    </SubSectionText>

                    <SubSectionText header="Quest for Knowledge">
                        {`Abhinavagupta’s thirst for knowledge was insatiable. He sought wisdom from a diverse array of Gurus, both within and outside Kashmir.
                        His eclectic education included the following subjects:
                        `}

                        <div className="point">
                            <span className="typo-accent ">
                            Narasimha Gupta (His father)
                            </span> : Grammar
                        </div>
                        <div className="point">
                            <span className="typo-accent ">
                            Vainanatha
                            </span> : Dvaitadvaita Tantras
                        </div>
                        <div className="point">
                            <span className="typo-accent ">
                            Bhuti Rajatanaya
                            </span> : Dualistic Saivism
                        </div>
                        <div className="point">
                            <span className="typo-accent ">
                            Bhuti Raja
                            </span> : Brahma-Vidya
                        </div>
                        <div className="point">
                            <span className="typo-accent ">
                            Laksmanagupta
                            </span> : Pratyabhijna
                        </div>
                        <div className="point">
                            <span className="typo-accent ">
                            Indu Raja
                            </span> : Dhvani (the essence of sound)
                        </div>
                        <div className="point">
                            <span className="typo-accent ">
                            Bhatta Tota
                            </span> : Dramaturgy
                        </div>

                    </SubSectionText>

                    <SubSectionText header="Influence">
                        {`Despite the passage of time, Abhinavagupta’s fame endured. Chronicler Kalhana, who chronicled Kashmir’s history, could not overlook the powerful tradition associated with Abhinavagupta. 
                        His literary period spanned from approximately 990 to 1015 CE (corresponding to the laukika or Saptarsi era).`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <Quote
                        quote={'O my devotees! On this path of supreme Bhairava, whoever has taken a step with pure desire, no matter if that desire is slow or intense; it does not matter if he is a Brahmin, if he is a sweeper, if he is an outcast, or if he is anybody; he becomes one with Para-bhairava.'}
                        author={'Abhinavagupta'}
                    />
                </div>

                <div className="shiv-section section-gap">

                    <div className="shiv-h3 typo-accent color-accent">
                        Teachings and Philosophy
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Abhinavagupta's genius extended beyond just explaining Pratyabhijna, the philosophy that established his reputation. 
                        He was a scholar who valued bringing together diverse perspectives. This tendency to synthesize ideas is a hallmark of his philosophical approach. 
                        Abhinavagupta wasn't afraid to find common ground between different schools of thought, and in doing so, he presented a philosophy of life that remained fresh and relevant.  
                        His focus on synthesis provided a meaningful and productive direction for his ideas.

                        Despite his prolific output of roughly 41 compositions, Abhinavagupta's most renowned works specific to Shaiva Darshan (Kashmiri Shaivism) include:`}
                    </div>

                    <SubSectionText header="Para - Trimshika Vivarna">
                        {`Para-Trimshika Vivarna is a commentary on the Para-Trimshika, a short text of 30 verses that expounds on the Pratyabhijna philosophy of Kashmiri Shaivism. 
                        The commentary provides a detailed and systematic explanation of the verses, elucidating the key concepts and principles of the philosophy.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                            Pratyabhijna:
                        </div>

                        {`The Para-Trimshika Vivarna delves into the core essences of Pratyabhijna, such as the nature of reality, the relationship between the individual self (jiva) and the universal self (Shiva), and the path to liberation (moksha).`}

                    </SubSectionText>

                    
                    <SubSectionText header="Prataybhijna Vimarshini">
                        {`Pratyabhijna Vimarshini is a commentary on the Ishwara Pratyabhijna-Karikas, a foundational text of the Pratyabhijna school of Kashmiri Shaivism. The commentary provides a detailed analysis of the Karikas, elucidating their meaning and significance
                        
                        The Ishwara Pratyabhijna-Karikas has 146 verses, while the Pratyabhijna Vimarshini may have thousands of verses, depending on the extent of the commentary.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                            Essence of Pratyabhijna:
                        </div>

                        {`The Pratyabhijna Vimarshini explores the essence of Pratyabhijna, the recognition of one's inherent Shiva nature. It also delves into topics such as the nature of consciousness, the role of the guru, and the path to liberation.`}

                    </SubSectionText>

                    <SubSectionText header="Pratyabhijna Vivriti Vimarshini ">
                        {`Pratyabhijna Vivriti Vimarshini is a commentary on the Pratyabhijna-Vivriti, a sub-commentary on the Ishwara Pratyabhijna-Karikas. It provides a detailed analysis of the Pratyabhijna-Vivriti, elucidating its interpretation of the Karikas.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                            Nuances of the Pratyabhijna
                        </div>

                        {`The Pratyabhijna Vivriti Vimarshini delves into the nuances of the Pratyabhijna philosophy, exploring its intricate details and subtle interpretations. It also examines the relationship between the Pratyabhijna-Vivriti and other commentaries on the Karikas.`}

                    </SubSectionText>

                    <SubSectionText header="Tantrasara">
                        {`Tantrasara is a compendium of Shaiva tantra, summarizing the essential teachings and practices of this esoteric tradition. It covers a wide range of topics, including cosmology, soteriology, ritual, and meditation.
                        The Tantrasara has approximately 500 verses, divided into 12 chapters.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                        Nature of Universe
                        </div>

                        {`The Tantrasara touches upon the core essences of Shaiva tantra, such as the divine power (Shakti), the microcosm-macrocosm correspondence, and the path to liberation through inner transformation.`}

                    </SubSectionText>

                    <SubSectionText header="Tantraloka">
                        {`Tantraloka is a comprehensive treatise on Shaiva tantra, covering a vast range of topics from theoretical foundations to practical applications. It is considered one of the most important and influential works of Shaiva tantric literature.
                        The Tantraloka has approximately 2,500 verses,`}

                    </SubSectionText>


                </div>
                <div className="shiv-section section-gap">
                    <Quote
                        quote={'Recognition of that supreme self is to be face to face with what was forgotten but now is coming into view not through rememberance but by clear cognition and effulgence'}
                        author={'Abhinavagupta'}
                    />
                </div>
                

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Legacy
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Abhinavagupta, the 10th-century polymath from Kashmir, stands as a towering figure in the intellectual landscape of India. His legacy extends far beyond the confines of a single school of thought or geographical location. Abhinavagupta was a philosopher, aesthete, mystic, and a tireless scholar who fearlessly engaged with diverse philosophical traditions. This essay explores the multifaceted nature of his genius and the enduring relevance of his work in the contemporary world.`}
                    </div>

                    
                    <SubSectionText header="A Master of Dialogue">
                        {`Abhinavagupta's philosophical project was not one of isolation but of synthesis. He recognized the value in each philosophical system, meticulously dissecting their arguments while highlighting their shortcomings. The passage beautifully illustrates this approach. 
                        We see him engage with Buddhist schools like the Sautantrikas and Vijnanvadins, deconstructing their theories of perception and the nature of reality. He dismantles the "jig-saw of intellectual acrobatics" of Buddhist thought, particularly their arguments for the impermanence of objects and the primacy of consciousness.

                        Similarly, Abhinavagupta critiques the Mimamsa school's theory of knowledge, exposing the limitations of their dualistic view of subject-object relations. He challenges the Naiyayikas' concept of knowledge as mere illumination, and even critiques fellow Shaivas like Khetapala for their dualistic interpretation of ignorance and self-realization. 
                        Abhinavagupta's dialogues with these schools were not driven by a desire to dominate, but by a genuine quest for a more comprehensive understanding of reality.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Beyond Negation">
                        {`Abhinavagupta's philosophical outlook stands in stark contrast to the prevalent trends in his time. Many philosophical systems, particularly some Buddhist schools, emphasized the illusory nature of the world and the ultimate goal of liberation from suffering. Abhinavagupta, however, championed a life-affirming philosophy. 
                        He rejected the tendency to negate the present moment in favor of some imagined future state. As the passage aptly states, Abhinavagupta "pleads for facing life and not fleeing from it."

                        His emphasis on "living in the present" and treating it as an "end itself" offers a powerful message for our times as well.  By advocating for the use of "perception and cognition" to navigate the complexities of life, Abhinavagupta provides a practical roadmap for individual flourishing. 
                        His philosophy encourages us to find meaning and reward in the present moment, rather than getting lost in abstract theorizing.`}
                    </SubSectionText>
                    
                    <SubSectionText header="A Philosopher for Our Times">
                        {`The passage concludes by highlighting the enduring legacy of Abhinavagupta.  His name, "Abhinava," meaning "new," aptly reflects the innovative and refreshing nature of his thought.  His treatises, even after a thousand years, continue to inspire with their "ravishing freshness." Abhinavagupta's emphasis on dialogue, critical thinking, and a life-affirming outlook are invaluable in the 21st century.

                        As we navigate a world grappling with diverse ideologies and existential anxieties, Abhinavagupta's model of intellectual engagement and his celebration of the present moment offer a beacon of hope.  His legacy reminds us that true wisdom lies not in clinging to rigid doctrines, but in engaging in open dialogue and embracing the richness of the present experience.
                        By studying and engaging with Abhinavagupta's work, we can cultivate a more inclusive, meaningful, and ultimately, a more joyful existence.`}
                    </SubSectionText>

                     
                    <SubSectionText header="Disciples">
                        {`Information about his direct disciples is not as readily available as details about his own teachers. 
                        
                        Some sources mention Rāmadeva as a faithful disciple devoted to scriptural study and serving Abhinavagupta.  
                        Another possibility is Kṣema, who might be the same person as Abhinavagupta's illustrious disciple Kṣemarāja.`}
                    </SubSectionText>
                    
                </div>

            </div>)

}

export {AbhinavGupta}