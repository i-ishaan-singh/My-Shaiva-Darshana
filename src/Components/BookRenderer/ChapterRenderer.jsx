import React from 'react';
import { VerseRendered } from './VerseRenderer';
import { SectionSeparator } from '../SectionSeparator/SectionSeparator';

const ChapterRenderer = function(props){

    const {nameSanskrit, name, verses, number} = props;


    const verseRendered = React.useMemo(function(){
        if(verses){
            return verses.map(function(_v, idx){
                return (<VerseRendered key={idx} {..._v}/>)   
            })
        }
    },[])

    return (<div className="shiv-chapter sub-section-gap" role="chapter">
                {nameSanskrit && <div className="chapter-name-wrapper flex-col align-center gap-1x">
                    <div className="shiv-h6 typo-accent">
                        Chapter {number} : 
                    </div>
                    <div className="shiv-chapter-name shiv-h4 shiv-600 color-accent " role="book-name">
                        {nameSanskrit}
                    </div>
                </div>}
                {name && <div className="typo-accent chapter-english-name header-gap">
                        ~ {name}
                </div>}
                {verseRendered}
                <SectionSeparator />
            </div>)

}

export {ChapterRenderer}