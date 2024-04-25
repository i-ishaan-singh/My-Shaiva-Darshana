import './style/style.css';

const SubSectionText = function(props){
    
    const {header, children} = props;

    return (<div className="sub-section-text padd-text sub-section-gap">
                {!!header && <div className="typo-accent shiv-h5 ">
                    {header}
                </div>}
                <div className="padd-text sst-text">
                    {children}
                </div>
            </div>)
}

export {SubSectionText}