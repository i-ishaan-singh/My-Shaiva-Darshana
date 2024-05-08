import { ContentList } from "../../Components/ContentList/ContentList"
import { LeftNavigation } from "../../Components/LeftNavigation/LeftNavigation"
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { Footer } from "../Footer/Footer"


const ExploreMore = function(){

    return (<div>
                <SectionHeader name="Explore More"/>
                <div className="shiv-section">
                    <div className="shiv-h2 shiv-text-center color-accent">
                        Literature
                    </div>
                    <ContentList data={literature} linkMessage=" Read Now"/>
                    <div className="header-gap-top">
                        <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/literature-list">Explore More Literature</LeftNavigation>
                    </div>
                </div>
                <div className="shiv-section section-gap">
                    <div className="shiv-h2 shiv-text-center color-accent">
                        Personalities
                    </div>
                    <ContentList data={personalities} linkMessage=" Explore More"/>
                    <div className="header-gap-top">
                        <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/personalities-list">Explore All Personalities</LeftNavigation>
                    </div>
                </div>
                <div className="shiv-section section-gap">
                    <div className="shiv-h2 shiv-text-center color-accent">
                       Core Concepts
                    </div>
                    <ContentList data={concepts} linkMessage=" Learn Now"/>
                    <div className="header-gap-top">
                        <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/key-concepts-list">Explore More Concepts</LeftNavigation>
                    </div>
                </div>
                <div className="shiv-section section-gap">
                    <div className="shiv-h2 shiv-text-center color-accent">
                       More
                    </div>
                    <ContentList data={more} linkMessage=" Read Now"/>
                </div>
                <Footer/>
            </div>)

}

const literature = {
    "Shiv Sutra":{
        "description": "Written by VasuGupta, the Shiva Sutras consist of 77 sutras that succinctly encapsulate profound spiritual truths, which are meant to be experienced through direct realization.",
        "url": '/My-Shaiva-Darshana/literature/books?name=shivsutra'
    },
    "Shattrimshat Tattva Sandoha":{
        "description": "A text describing the creation of the world through the 36 elements of creation.",
        "url": '/My-Shaiva-Darshana/literature/books?name=shattrimshattattva'
    },
    "Tantrāloka": {
        "description": " A monumental work by the great scholar Abhinavagupta, the Tantrāloka expounds on Tantrik practice and philosophy in over 5,800 verses1. It serves as a comprehensive guide to Kashmir Shaivism.",
        "url": '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol1',
        "isPDF": true
    }
}

var personalities= {
    "Utpaladeva":{
        "description": "Utpaladeva (c. 900-950 CE) was a towering figure in Kashmiri Shaivism, particularly the Pratyabhijñā school of monistic idealism. He is revered as the architect of this philosophy, laying the groundwork for later luminaries like Abhinavagupta. Utpaladeva wasn't just a philosopher; he was also a mystic poet, expressing his deep devotion to Shiva in the \"Shivastotravali.\" His work bridges the gap between reason, experience, and aesthetics, offering a unique path to self-realization.",
        "url": '/My-Shaiva-Darshana/personalities?name=utpaladeva'
    },
    "Swami Lakshmanjoo":{
        "description": "Swami Lakshmanjoo (1907-1991) stands as a towering figure in the rich tapestry of Kashmir Shaivism. Often Refered to as Lal Ded (\"Friend of God\") by his devotees, he was a revered scholar, practitioner, and the last living master in the unbroken lineage of this profound spiritual tradition.",
        "url": '/My-Shaiva-Darshana/personalities?name=lakshmanjoo'
    },
    "Abhinavgupta":{
        "description": "Abhinavagupta (924-1020 CE) injected new meaning into Shaiva Philosophy, which later became more popularly known as Kashmir Shaivism. His original thinking shattered established beliefs related to caste, creed, color, and gender restrictions in spiritual practice. Abhinavagupta emphasized that spiritual revelation was not limited to monastic settings; anyone, regardless of background, could tread the path of enlightenment.",
        "url": '/My-Shaiva-Darshana/personalities?name=abhinavgupta'
    },
}


var more= {
    "History of Shaivaism":{
        "description": "Explore How the Kashmir Shaivaism came into existence",
        "url": '/My-Shaiva-Darshana/history'
    },
    "Guru Parampara":{
        "description": "Guruparampara refers to the unbroken chain of teachers and disciples that transmits spiritual knowledge and practices across generations. This lineage serves as a vital link between the source of wisdom and the current seeker.\nKashmir Shaivism's Guruparampara whispers secrets of the Self from ear to ear, a hidden lineage where realization itself becomes the initiation.",
        "url": '/My-Shaiva-Darshana/guru-parampara'
    }
}



const concepts = {

    "Trika Mandala":{
        "description": "The Trika Mandala is a powerful visualization practice used in Kashmir Shaivism. This meditative technique utilizes a series of concentric circles, each representing different aspects of reality and the Self. By contemplating the Trika Mandala, practitioners embark on a journey of self-discovery, recognizing their true nature as Shiva, the ultimate reality.",
        "url": '/My-Shaiva-Darshana/key-concepts?name=trika-mandala'
    },

    "Pratyabhijna Darshana":{
        "description": "Pratyabhijna Darshana, meaning \"recognition\" or \"direct knowledge of oneself,\" is a profound school of Shaiva philosophy within Kashmir Shaivism. It originated and flourished in the valleys of Kashmir, India. This philosophy aligns closely with the spiritual teachings found in the Upanishads and the Yoga Shastra, emphasizing self-realization and reflective wisdom.",
        "url": '/My-Shaiva-Darshana/key-concepts?name=pratyabhijna-darshana'
    }
    
    
}

export {ExploreMore}