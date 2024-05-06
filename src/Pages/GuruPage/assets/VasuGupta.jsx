import { ImageTextSection } from "../../../Components/ImageTextSection/ImageTextSeection"
import { Quote } from "../../../Components/Quote/Quoter";
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { SectionSeparator } from "../../../Components/SectionSeparator/SectionSeparator";
import { SubSectionText } from "../../../Components/SubSectionText/SubSectionText";
import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";
import { useTitle } from "../../../Utils/useTitle/useTitle";
import VasuGuptaImg from '../../../assets/images/vasugupta.png';


const VasuGupta = function(){

    useTitle('Vasugupta');

    return (<div role="section">
                <ImageTextSection imgSrc={VasuGuptaImg} header={"Vasugupta"} subHeader={"The Illuminator of Kashmir Shaivism"}>
                    Vasugupta (~800 - 850 CE) was a revered sage and philosopher who played a pivotal role in shaping the Advaita Shaivism tradition of Kashmir, also known as Trika. His profound insights and teachings continue to inspire seekers on the path of spiritual realization. Let us delve into the life, philosophy, and legacy of this remarkable sage.
                </ImageTextSection>
                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Biography
                    </div>
                    <SubSectionText header="Early Life and Spiritual Awakening">
                        {`Vasugupta's early years remain shrouded in mystery, but his impact on the spiritual landscape of Kashmir is undeniable. 
                        Born in the late 8th century in the valley of Kashmir, he embarked on a journey that lead him to profound realizations. 
                        
                        In one version of the story, Vasugupta, guided by Lord Shiva in a dream or vision, journeyed to a specific rock on Mahadev Mountain. Upon touching the rock, it miraculously rolled over, unveiling seventy-seven sutras—short aphorisms—known as the Shiva Sutra. Alternatively, some accounts suggest that Vasugupta received these profound sutras during deep meditation.`}
                    </SubSectionText>
                </div>

                <div className="shiv-section section-gap">
                    <Quote
                        quote={'Within your own true nature lies the cause of creation and dissolution. Awaken to your inherent divinity, and you become the sovereign over the Wheel of Powers.'}
                        author={'Vasugupta'}
                    />
                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Teachings and Philosophy
                    </div>
                    <SubSectionText header="The Shiva Sutras">
                        {`Vasugupta's remarkable work, the Shiva Sutras, serves as a guiding light in the realm of spiritual wisdom. 
                        The Shiva Sutras consist of 77 aphorisms divided into three sections: Shambhavopaya, Shaktopaya, and Anavopaya. 
                        These sutras encapsulate the very essence of Kashmir Shaivism. 
                        
                        Shiv Sutra Discussed on the Following philosophies:`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                            Non-Dualism (Advaita):
                        </div>

                        {`The Shiva Sutras reveal the path to nondual realization. Vasugupta eloquently describes the unity between the individual soul (atman) and the cosmic consciousness (Shiva). 
                        The seeker transcends duality, recognizing the divine essence within.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                        Bondage and Liberation:
                        </div>

                        {`Vasugupta explores the nature of bondage and the means to liberation. He illuminates how ignorance binds the soul, while self-awareness liberates it. 
                        The seeker awakens to their inherent divinity, breaking free from the illusions that shackle them.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                        Spanda:
                        </div>

                        {`The pulsation of divine energy (spanda) permeates the entire universe. Vasugupta unveils this dynamic dance of creation and dissolution. 
                        Every heartbeat echoes the cosmic rhythm, inviting the seeker to merge with the primal vibration.`}
                        
                        <div className="typo-accent shiv-h6 header-gap-top">
                        Param Shiva
                        </div>
                      
                         {`Beyond mere words and concepts lies Param Shiva, the ultimate reality.
                         
                         `}
                        <div>
                            <NavigationLink to="/My-Shaiva-Darshana/literature/books?name=shivsutra"><i className="fa fa-link" aria-hidden="true"></i>Explore Literature</NavigationLink>
                        </div>
                        
                    </SubSectionText>

                    <SubSectionText header="Spanda Karikas">
                        {`Vasugupta, in addition to his profound contributions to the Shiva Sutras, also gifted the world with the Spanda Karikas. These verses serve as a commentary on the Shiva Sutras, but they are much more than mere explanations. 
                        
                        The Spanda Karikas have the following significance:`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                        The Divine Creative Pulsation:
                        </div>

                        {`The Spanda Karikas delve into the very heartbeat of existence. Imagine a cosmic rhythm—an eternal throb—that reverberates through all creation.
                        This divine consciousness is not static or inert; it is spanda—active, dynamic, and pulsating with life. It is the very essence of existence itself.
                        Spanda is synonymous with Śakti (the primal energy) and is the very fabric of reality. It allows the universe to manifest, sustain, and dissolve.
                        Picture it as a movement within the vast space of consciousness—a dance of creation and dissolution. Every heartbeat echoes this cosmic rhythm, inviting us to merge with the primal vibration.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                        The True Nature and Sovereignty:
                        </div>

                        {`Spanda Karikas, emphasizes that the cause of creation and dissolution lies within your own true nature.
                            The essential nature of the creation, unobscured even amidst the cycles of aging, death, and rebirth, is divine. It is the hub of the wheel—the uncreated essence of all beings.
                            As one awaken, he realize that everything he experience flows forth from this center. The universe arises in dependence on what he is, and it dissolves back into endless pulsation.`}

                        <div className="typo-accent shiv-h6 header-gap-top">
                        Beyond Words and Concepts:
                        </div>

                        {`Spanda defies easy explanation. It lies beyond all words and concepts. It is a divine reality that transcends limitations.
                        In the Spanda Karikas, Vasugupta guide us to that ineffable state where subject and object dissolve. Here, existence merges seamlessly into pure consciousness.
                        So, contemplation on this pulsation, listening to its rhythm, pushes one to transformation. 

                        `}
                       <div>
                           <NavigationLink to="/My-Shaiva-Darshana/literature/books?name=spandakarika"><i className="fa fa-link" aria-hidden="true"></i>Explore Literature</NavigationLink>
                       </div>
                    </SubSectionText>

                </div>

                <div className="shiv-section section-gap">
                    <div className="shiv-h3 typo-accent color-accent">
                        Legacy
                    </div>
                    <div className="padd-text sst-text header-gap-top">
                        {`Vasugupta, through his teachings, sparked a cultural and spiritual revival in Kashmir. His impact extended far beyond philosophy, leaving an indelible mark on art, literature, and music. The echoes of his profound wisdom continue to resonate across the ages.

                        Kallata and Somananda, both active philosophers between 825 and 900 CE, offer glimpses into their revered teacher's life. Vasugupta's direct realization and profound Shaiva wisdom propelled him beyond mere scholarly pursuits. Legends weave tales of how he encountered the Shiva Sutras, the foundational text of Kashmir Shaivism. His legacy remains an eternal flame, illuminating the path for seekers of truth in the tradition of Kashmir Shaivism`}
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
        url: '/My-Shaiva-Darshana/literature/books?name=spandakarika',
        text: 'Read SpandaKarika'
    },
    {
        url: '/My-Shaiva-Darshana/literature/books?name=shivsutra',
        text: 'Read Shiv Sutra'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'Referrences'
    }
]

export default VasuGupta