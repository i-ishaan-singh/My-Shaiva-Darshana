import './assets/style.css';

const ImageTextSection = function(props){

    const {children, imgSrc, header, subHeader} = props;
    return (<div role="image-text" className="shiv-section flex-col image-text-section gap-2x">
                {!!imgSrc && <img className="image-text-img" src={imgSrc} />}
                <div className="full-container">
                    <div className="shiv-h3 typo-accent color-accent">
                        {header}
                    </div>
                    <div className="shiv-h6 typo-accent pad-b-3x">
                        {subHeader}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>)

}

export {ImageTextSection}