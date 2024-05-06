import backImage from './assets/backest.svg';
import back from './assets/back.svg';
import front from './assets/front.svg';
import './styles/styles.css';
import { LandingPageMesage } from './Sections/LandingPageMessage';
import { AboutShaivaism } from './Sections/AboutSection';
import { AcharyasCards } from './Sections/AcharyasCards';
import { Footer } from '../Footer/Footer';
import { LiteratureCards } from './Sections/LiteratureCards';
import { Quote } from '../../Components/Quote/Quoter';
import { TrikaMandala } from './Sections/TrikaMandala';
import { GuruParampara } from './Sections/GuruParampara';
import { Pratyabhijna } from './Sections/Pratyabhijna';
import { PilgrimagesCards } from './Sections/PilgrimageCards';

const HomePage = function(){


    return <div className="home-page full-container">
                <LandingPageMesage />
                <div className="main-landing full-container">
                    <img src={backImage} className="landing-page-image back-hidden-image" />
                    <img src={back} className="landing-page-image back-natraj-image" />
                    <img src={front} className="landing-page-image front-image" />
                </div>
                <AboutShaivaism />
                <div className="shiv-section section-gap">
                    <Quote 
                        quote={"God and the individual are one. To realize this is the essence of Kashmir Shaivism."}
                        author={'Swami Lakshmanjoo'}
                    />
                </div>
                <LiteratureCards />
                <Pratyabhijna/>
                <GuruParampara/>
                <AcharyasCards />
                <TrikaMandala/>
                <PilgrimagesCards/>
                <Footer/>
            </div>
}

export {HomePage}