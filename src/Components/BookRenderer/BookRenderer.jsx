import React from 'react';
import { ChapterRenderer } from './ChapterRenderer';
import './styles/style.css';

const BookRenderer = function(props){

    const {titleSanskrit, author, chapters} = props;


    const chaptersRendered = React.useMemo(function(){
        if(chapters){
            return chapters.map(function(_ch, idx){
                return (<ChapterRenderer key={idx} {..._ch} number={idx+1}/>);
            })
        }
    },[chapters])

    return (<div role="literature" className="shiv-section">
                <div className="shiv-book-name shiv-h2 shiv-text-center shiv-800 color-accent " role="book-name">
                    {titleSanskrit}
                </div>
                <div className="shiv-book-sub-name shiv-h5 shiv-text-center" role="book-name">
                    ~{author}
                </div>
                {chaptersRendered}
            </div>)
}

export {BookRenderer}