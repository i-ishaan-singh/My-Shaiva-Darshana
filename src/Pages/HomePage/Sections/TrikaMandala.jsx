import { LeftNavigation } from "../../../Components/LeftNavigation/LeftNavigation"


const TrikaMandala = function(){


    return (<div className="shiv-section section-gap">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap">
                    Trika Mandala
                </div>
                <div className="shiv-paragraph">
                    {`Kashmir Shaivism offers powerful meditative practices that utilize visualization, one of which is Trika Mandala.

                    The Trika Mandala is a powerful visualization practice used in Kashmir Shaivism. This meditative technique utilizes a series of concentric circles, each representing different aspects of reality and the Self. By contemplating the Trika Mandala, practitioners embark on a journey of self-discovery, recognizing their true nature as Shiva, the ultimate reality.`}
                </div>
                <div className="header-gap-top">
                    <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/meditations/trika-mandala">Explore Now</LeftNavigation>
                </div>
            </div>)
}

export {TrikaMandala}