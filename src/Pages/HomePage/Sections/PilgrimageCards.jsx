import { Card } from "../../../Components/Card/Card"
import { CardGroup } from "../../../Components/Card/CardGroup"

import amarnathImg from '../../../assets/images/pilgrimage/amarnath.jpg';
import machliImg from '../../../assets/images/pilgrimage/machli.jpg';
import vignyaanTemple from '../../../assets/images/pilgrimage/vignyaanTemple.jpg';
import kheerbhawani from '../../../assets/images/pilgrimage/kheerbhawani.jpg';
import { LeftNavigation } from "../../../Components/LeftNavigation/LeftNavigation";

const PilgrimagesCards = function(){


    return (<div className="shiv-section section-gap ">
                <div className="shiv-section-header typo-accent color-accent shiv-h4 header-gap" >
                    Related Pilgrimages
                </div>
                <CardGroup>
                    <Card 
                        redirectPath="/My-Shaiva-Darshana/pilgrimage?name=amarnath"
                        imageSrc={amarnathImg}
                        header="Amarnath Cave"
                        description="Located in Jammu and Kashmir, this revered cave shrine houses a naturally formed ice lingam, a symbolic representation of Shiva."
                    />
                     <Card 
                        imageSrc={machliImg}
                        redirectPath="/My-Shaiva-Darshana/pilgrimage?name=machli-mata"
                        header="Machail Mata Temple"
                        description="Dedicated to Goddess Durga, also known as Chandi Mata or Machail Wali Mata, this temple attracts thousands of devotees every year."
                    />
                    <Card 
                        imageSrc={vignyaanTemple}
                        redirectPath="/My-Shaiva-Darshana/pilgrimage?name=srinagar-bhairav"
                        header="The Bhairav Mandirs"
                        description="TBhairava, a fierce manifestation of Lord Shiva, holds a significant place in Hinduism, particularly within Kashmir Shaivism."
                    />
                    <Card 
                        imageSrc={kheerbhawani}
                        header="Mata Kheer Bhawani"
                        redirectPath="/My-Shaiva-Darshana/pilgrimage?name=kheer-bhawani"
                        description="Mata Kheer Bhawani, also revered as Ragnya Devi or Durga, is a revered Hindu goddess enshrined in the Mata Kheer Bhawani Temple, located in the Ganderbal district of Jammu and Kashmir, India."
                    />

                </CardGroup>
                <div className="padd-text sst-text header-gap-top ">
                        {`It's important to remember that these pilgrimage sites are just a starting point. 
                        Kashmir Shaivism emphasizes an internal pilgrimage, the journey of self-discovery and the realization of one's inherent Shiva nature. The external pilgrimages can be powerful tools for deepening one's connection with the tradition's symbolism and mythology, but the ultimate focus is on the inner transformation.`}
                </div>
                <div className="header-gap-top">
                    <LeftNavigation className="link-button" url="/My-Shaiva-Darshana/pilgrimages-list">Explore More Pilgrimages</LeftNavigation>
                </div>
            </div>)
}

export {PilgrimagesCards}