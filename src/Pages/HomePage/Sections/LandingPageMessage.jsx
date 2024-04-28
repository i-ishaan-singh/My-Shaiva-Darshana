import { NavigationLink } from "../../../Utils/NavigationLink/NavigationLink"

const LandingPageMesage = function(){


    return (<div className="landing-message-container">
                <div className="landing-message pad-b-3x">
                    <div className="landing-message-line pad-b-3x">
                        The very fabric of Existence, <span className="typo-accent">Shiva,</span> is not only a deity.
                        <br/> 
                        He is the essence flowing through every possible manifest object in the universe.
                    </div>
                    <div className="landing-message-line">
                        <span className="typo-accent">Welcome,</span> to the Knowledge where the ordinary becomes sacred, and seekers dance with the cosmos.
                        Here, every atomic vibration, every cosmic swirl, whispers the same truth
                    </div>
                    <div className="landing-message-line typo-accent pad-b-3x">
                        {'"You Are Divine"'}
                    </div>
                    <div className="landing-sub-message pad-b-3x">
                        Embark on a mystical journey where the Himalayan peaks echo ancient secrets.
                    </div>
                </div>
                <div className="landing-page-button-wrapper">
                    <NavigationLink to="/My-Shaiva-Darshana/explore" className="button main-button">Explore More</NavigationLink>
                    
                </div>
            </div>)
}

export {LandingPageMesage}