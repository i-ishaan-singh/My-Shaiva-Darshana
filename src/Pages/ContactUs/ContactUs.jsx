import { ImageTextSection } from "../../Components/ImageTextSection/ImageTextSeection";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader"
import { useTitle } from "../../Utils/useTitle/useTitle"
import { Footer } from "../Footer/Footer"
import cu from './cu.jpg';

const ContactUs = function(){

    useTitle('Contact Us');

    return (<div>
                <SectionHeader name="Contact Us" />
                    <ImageTextSection
                        imgSrc={cu} 
                        header={"Here To Connect"} 
                        subHeader={"Fill the form below"}
                    >
                        {`Immersed in the depths of Kashmir Shaivism and eager to learn more? We welcome your questions and curiosities! Whether you have a specific doubt about a concept, yearn to discuss the philosophy in greater detail, or simply want to connect with fellow seekers, feel free to reach out.`}
                    </ImageTextSection>
                    <div className="shiv-section section-gap">
                        <form 
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScclrgUpi469JyjkFSV6rrXEyLYZQP2ZaNOwYbilZ_99WZGcQ/formResponse" 
                            target="_blank" 
                            method="POST" 
                            id="mG61Hd" 
                            jsmodel="TOfxwf Q91hve CEkLOc" 
                            data-shuffle-seed="1919539265914959136" 
                            data-clean-viewform-url="https://docs.google.com/forms/d/e/1FAIpQLScclrgUpi469JyjkFSV6rrXEyLYZQP2ZaNOwYbilZ_99WZGcQ/viewform?usp=sf_link" 
                            data-response="%.@.]" 
                            data-dlp-data="%.@.null,false]" 
                            data-first-entry="0" 
                            data-last-entry="4" 
                            data-is-first-page="true"
                        >
                            <div className="input-wrapper">
                                <div className="label-container">
                                    Full Name
                                </div>
                                <div className="input-container">
                                    <input type="text" name="entry.1038836997" className="whsOnd zHQkBf shiv-input" jsname="YPqjbf" autoComplete="off" tabIndex="0" aria-labelledby="i1" aria-describedby="i2 i3" aria-disabled="false" dir="auto" data-initial-dir="auto" data-initial-value=""/>
                                </div>
                            </div>

                            <div className="input-wrapper">
                                <div className="label-container">
                                    Phone Number
                                </div>
                                <div className="input-container">
                                    <input type="text" name="entry.593686691" className="whsOnd zHQkBf shiv-input" jsname="YPqjbf" autoComplete="off" tabIndex="0" aria-labelledby="i5" aria-describedby="i6 i7" aria-disabled="false" dir="auto" data-initial-dir="auto" data-initial-value=""/>
                                </div>
                            </div>

                            <div className="input-wrapper">
                                <div className="label-container">
                                    Email Id
                                </div>
                                <div className="input-container">
                                    <input type="text" name="entry.205611054" className="whsOnd zHQkBf shiv-input" jsname="YPqjbf" autoComplete="off" tabIndex="0" aria-labelledby="i9" aria-describedby="i10 i11" aria-disabled="false" dir="auto" data-initial-dir="auto" data-initial-value=""/>
                                </div>
                            </div>

                            <div className="input-wrapper">
                                <div className="label-container">
                                    Message
                                </div>
                                <div className="input-container">
                                    <textarea name="entry.1642634574"  className="KHxj8b tL9Q4c shiv-input" jsname="YPqjbf" data-rows="1" tabIndex="0" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" data-initial-value="" aria-labelledby="i13" aria-describedby="i14 i15" aria-disabled="false"></textarea>
                                </div>
                            </div>
                            
                            <input type="hidden" name="fvv" value="1"/>
                            <input type="hidden" name="partialResponse" value="[null,null,&quot;1919539265914959136&quot;]"></input>
                            <input type="hidden" name="fbzx" value="1919539265914959136"></input>
                            <input type="hidden" name="pageHistory" value="0"/>
                            <input type="hidden" name="submissionTimestamp" value={Date.now()}/>
                            
                            <div className="input-wrapper">
                                <button type="submit " className="button main-button primary-button">Submit</button>
                            </div>
                        </form>
                    </div>
                <Footer />
            </div>)
}


export {ContactUs}