import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink";

const AboutShaivaism = function(){


    return (<div className="shiv-section">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap">
                    About Shaivaism
                </div>
                <div className="shiv-paragraph">
                    {`Kashmir Shaivism, is a spiritual discipline that asserts the view that everything manifests as an expression of pure consciousness . Rooted in ancient Tantric traditions, this practice places Lord Shiva at its core, embodying the divine consciousness in every aspect of our existence. 
                    
                    The doctrines of Kashmir Shaivism stem from the ninety-two `}<NavigationLink to='/My-Shaiva-Darshana/literature-list'>Tantras</NavigationLink>{`, also known as Agamas, which were disclosed by Lord Shiva through a dialogue with the Divine Mother. Among these Tantras, sixty-four are exclusively monistic, eighteen combine monism with dualism, and ten are purely dualistic. 
                    The Kashmiri Shaivism is combination of Shaivism, Agama and Tantra.
                    
                    The teachings of Kashmir Advait Shaivism are rooted in the sixty-four monistic Tantras, referred to as the Bhairava Tantras, with their essence encapsulated in 'Trika Shaivism.'
                    The term "Trika" denotes "the threefold science of man and the world." Within the concept of Trika, three energies, parā (supreme), parāparā (medium), and aparā (lowest), are recognized. In Trika philosophy, it is acknowledged that the entire universe and every activity within it, be it spiritual, physical, or worldly, exist within these three energies. 
                    
                    The discovery of Śiva sutras by Vasugupta marked the beginning of this Trika system, in formal aspect.`}
                </div>
            </div>)
}

export {AboutShaivaism}