

const VerseRendered = function(props){
    const {sanskrit, english} = props;

    return (<div role="verse" className="shiva-verse">
                <div className="shiv-text-center shiv-h5 color-accent shiva-verse-sanskrit">
                    {sanskrit}
                </div>
                <div className="shiv-text-center">
                    {english}
                </div>
            </div>)

}

export {VerseRendered}