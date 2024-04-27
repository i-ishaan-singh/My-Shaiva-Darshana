import { LeftNavigation } from "../../../Components/LeftNavigation/LeftNavigation"


const Pratyabhijna = function(){


    return (<div className="shiv-section section-gap">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap">
                Pratyabhijna Darshana
                </div>
                <div className="shiv-paragraph">
                    {`Pratyabhijna Darshana, meaning "recognition" or "direct knowledge of oneself," is a profound school of Shaiva philosophy within Kashmir Shaivism. It originated and flourished in the valleys of Kashmir, India. 
                    
                    This philosophy aligns closely with the spiritual teachings found in the Upanishads and the Yoga Shastra, emphasizing self-realization and reflective wisdom.
                    Utpaladeva (900-950 CE) is widely regarded as the foundational figure of the Pratyabhijna school.`}
                </div>
                <div className="header-gap-top">
                    <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/key-concepts?name=pratyabhijna-darshana">Explore Now</LeftNavigation>
                </div>
            </div>)
}

export {Pratyabhijna}