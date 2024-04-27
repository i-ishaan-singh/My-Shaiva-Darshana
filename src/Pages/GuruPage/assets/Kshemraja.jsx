import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { Quote } from "../../../Components/Quote/Quoter";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import kshemraja from '../../../assets/images/kshemraja.webp';


const Kshemaraja = function(){

    return (<div role="section">
                <ImageTextSection imgSrc={kshemraja} header={"Acharya Kshemaraja"} subHeader={"The Weaver of Kashmiri Shaivism"}>
                    Acharya Kshemaraja (10th-11th century CE) was a towering figure in the rich tapestry of Kashmir Shaivism, a non-dual Shaiva tradition known for its emphasis on self-realization and the recognition of the divine within. Renowned as a prolific scholar, commentator, and yogi, he played a pivotal role in preserving and transmitting the wisdom of this profound spiritual path.
                </ImageTextSection>
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent pad-b-3x">
                        Biography
                    </div>
                        <div className="padd-text sst-text header-gap-top">
                            {`While specific details about Kshemaraja's life remain scarce, his contributions to Kashmir Shaivism speak volumes. 
                            Historical accounts place him in Kashmir during the 10th-11th centuries CE. He is recognized as a prominent disciple of the illustrious Abhinavagupta, a towering figure who systematized and revitalized Kashmir Shaivism.`}
                        </div>

                    <SubSectionText header="A Lineage of Masters">
                        {`Kshemaraja's lineage traced back to renowned Shaiva thinkers like Utpaladeva, further solidifying his connection to the core philosophical and practical foundations of Kashmir Shaivism.`}
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Study and Spiritual Inclination
                    </div>
                      
                    <SubSectionText header="Under the Guidance of Abhinavagupta">
                        {`Kshemaraja flourished under the tutelage of his revered guru, Abhinavagupta.  He received a comprehensive education in various disciplines, including Tantra, yoga, poetics, and dramaturgy. Abhinavagupta's vast knowledge and profound understanding of Kashmir Shaivism undoubtedly shaped Kshemaraja's intellectual and spiritual development.`}
                    </SubSectionText>
                    
                    <SubSectionText header="Mastery of Diverse Fields">
                        {`Kshemaraja's mastery extended beyond the realm of Shaivism. His proficiency in poetics and dramaturgy suggests a well-rounded education and a deep appreciation for the arts.  This versatility likely enriched his approach to Kashmir Shaivism, allowing him to express its principles through various mediums.`}
                    </SubSectionText>


                </div>

                <div className="shiv-section section-gap">
                    <Quote
                        quote={'Man bound in all the phases of waking, dream, and dreamless sleep by the body, prana, pleasure, etc., does not recognize his own consciousness which is of the nature of the great power and full of perfect bliss.'}
                        author={'Acharya Kshemaraja'}
                    />
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                       Influence
                    </div>
                      
                    <SubSectionText header="Preserving and Propagating Kashmir Shaivism">
                        {`Kshemaraja's influence lies primarily in his invaluable contribution to preserving and disseminating the wisdom of Kashmir Shaivism. 
                        Through his commentaries on key texts and his original works, he ensured the ongoing transmission of this complex philosophical and practical tradition.`}
                    </SubSectionText>
                    
                    <SubSectionText header="A Bridge Between Abhinavagupta and Later Generations">
                        {`Kshemaraja served as a bridge between the groundbreaking work of Abhinavagupta and later generations of Shaiva practitioners. 
                        His clear and insightful commentaries made Abhinavagupta's vast knowledge more accessible, fostering a deeper understanding of Kashmir Shaivism.`}
                    </SubSectionText>

                    <SubSectionText header="Shaping the Landscape of Kashmiri Shaivism">
                        {`Kshemaraja's original works like Pratyabhijnahridayam and Spandanirnaya explored various aspects of the tradition, further enriching the intellectual and experiential landscape of Kashmir Shaivism.`}
                    </SubSectionText>


                </div>

                <div className="shiv-section section-gap">

                    <div className="shiv-h3 typo-accent color-accent">
                        Teachings and Philosophy
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Kshemaraja's vast body of work delves into various aspects of Kashmir Shaivism. 
                        However, some core themes consistently emerge:`}
                    </div>

                    <SubSectionText header="Non-duality">
                        {`Like other Trika (Kashmir Shaivism) thinkers, Kshemaraja emphasized the non-dual nature of reality. He recognized Shiva, the ultimate reality, as the source and essence of all existence.`}
                    </SubSectionText>

                    <SubSectionText header="Shakti and Consciousness">
                        {`Kshemaraja explored the concept of Shakti, the feminine divine principle, as the dynamic power of Shiva. He saw consciousness (Chit) as the essence of Shiva, expressed through the dynamism of Shakti.`}
                    </SubSectionText>

                    <SubSectionText header="The Role of Recognition (Pratyabhijna)">
                        {`Understanding one's own true nature as Shiva, or the embodiment of pure consciousness, was central to Kshemaraja's teachings. He emphasized the importance of recognizing this inherent divinity within oneself.`}
                    </SubSectionText>

                    <SubSectionText header="The Importance of Practices">
                        {`While acknowledging the intellectual framework of Kashmir Shaivism, Kshemaraja also recognized the importance of yogic practices and meditation techniques for experiencing the non-dual reality.`}
                    </SubSectionText>


                </div>

                <div className="shiv-section section-gap">

                    <div className="shiv-h3 typo-accent color-accent">
                        Gems of Literature
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Acharya Kshemaraja, left behind a treasure trove of literary gems that continue to illuminate the path of spiritual seekers. 
                        His profound insights, expressed through insightful commentaries and original works, have enriched the understanding of this non-dual Shaiva tradition for centuries. 
                        
                        A few of his notable works and the central ideas they convey are:`}
                    </div>

                    <SubSectionText header="Spandasandoha (The Essence of Spanda)">
                        {`Spandasandoha stands as a profound exploration of Spanda, the inherent vibration or pulsation that underlies all existence in Kashmir Shaivism. 
                        Kshemaraja masterfully unravels the concept of Spanda, revealing its role in the manifestation and dissolution of the universe, as well as its connection to the divine consciousness within each individual.`}
                    </SubSectionText>

                    <SubSectionText header="Spandanirnaya (The Determination of Spanda)">
                        {`Building upon the foundation laid in Spandasandoha, Spandanirnaya delves deeper into the multifaceted nature of Spanda. Kshemaraja meticulously analyzes the various aspects of Spanda, elucidating its relationship to consciousness, the phenomenal world, and the path to liberation. 
                        This work serves as a valuable guide for those seeking to grasp the intricacies of this central concept in Kashmir Shaivism.`}
                    </SubSectionText>

                    <SubSectionText header="Svacchandodyota (The Illumination of Svacchanda)">
                        {`Svacchanda, also known as Svātantrya, represents the absolute freedom of Shiva, the ultimate reality in Kashmir Shaivism. 
                        Kshemaraja's Svacchandodyota sheds light on this profound concept, exploring its implications for the nature of reality, the role of the divine, and the path of spiritual realization.`}
                    </SubSectionText>

                    <SubSectionText header="Netrodyota (The Illumination of the Eye)">
                        {`Netra, meaning "eye," symbolizes the inner vision or spiritual insight that is essential for recognizing one's true nature as Shiva. 
                        In Netrodyota, Kshemaraja illuminates the path to developing this inner vision, guiding seekers towards transcending the limitations of the mind and experiencing the non-dual reality.`}
                    </SubSectionText>

                    <SubSectionText header="Vijnanabhairavodyota (The Illumination of Vijnanabhairava)">
                        {`Vijnanabhairava Tantra, a key text in Kashmir Shaivism, explores various Tantric practices and techniques. 
                        Kshemaraja's Vijnanabhairavodyota serves as an insightful commentary on this text, providing a deeper understanding of the practices and their role in the spiritual journey.`}
                    </SubSectionText>

                    <SubSectionText header="Shivasutravimarsini (Commentary on the Shiva Sutras)">
                        {`Shiva Sutras, a collection of aphorisms attributed to Shiva himself, form a foundational text in Kashmir Shaivism. 
                        Kshemaraja's Shivasutravimarsini offers an invaluable commentary on these sutras, unraveling their cryptic meaning and revealing the profound wisdom they convey.`}
                    </SubSectionText>

                    <SubSectionText header="Stavacintamanitika (The Jewel of Thoughtful Hymns)">
                        {`Stavacintamanitika is a commentary on Stavacintamani, a collection of devotional hymns composed by Bhatta Narayana. 
                        Kshemaraja's insights in this work illuminate the deeper spiritual meaning embedded within these hymns, guiding seekers towards a deeper understanding of devotion and its role in the path of self-realization.`}
                    </SubSectionText>

                    <SubSectionText header="Parapraveshika (The Introduction)">
                        {`Parapraveshika serves as an introduction to the world of Kashmir Shaivism. Kshemaraja provides a concise overview of the tradition's core concepts, practices, and philosophical framework, offering a valuable starting point for those seeking to explore this rich spiritual path.`}
                    </SubSectionText>

                    <SubSectionText header="Tattvasandoha (The Collection of Tattvas)">
                        {`Tattvasandoha delves into the nature of tattvas, the fundamental principles of reality in Kashmir Shaivism. Kshemaraja analyzes the various tattvas, explaining their interconnectedness and their role in understanding the ultimate reality.
                        
                        `}
                        <div>
                            <NavigationLink to="/My-Shaiva-Darshana/literature/books?name=shattrimshattattva"><i className="fa fa-link" aria-hidden="true"></i>Explore Literature</NavigationLink>
                        </div>
                    </SubSectionText>


                </div>
                

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Legacy
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Kshemaraja's enduring legacy lies in his pivotal role as a bridge between Abhinavagupta and future generations of Shaiva practitioners. His commentaries made Abhinavagupta's vast knowledge more accessible, while his original works further illuminated the depths of Kashmir Shaivism.`}
                    </div>

                    
                    <SubSectionText header="Preserving a Lineage:">
                        {`Kshemaraja ensured the continuation of the Shaiva lineage by transmitting the wisdom he received to his disciples.  Yogaraja and others carried forward his teachings, promoting the continued practice and study of Kashmir Shaivism.`}
                    </SubSectionText>

                    <SubSectionText header="A Source of Inspiration:">
                        {`Even today, Kshemaraja's works remain a vital resource for scholars and practitioners of Kashmir Shaivism.  His clear and concise writing style, combined with his profound understanding of the tradition, continues to inspire seekers on their journey towards self-realization.`}
                    </SubSectionText>
                    
                </div>

            </div>)

}

export default Kshemaraja