import './style/style.css';

const Quote = function(props){

    const {quote, author} = props;

    return <div className="quote-wrapper">
                <div className="quote-text typo-accent">{quote}</div>
                <div className="quote-author">~ {author}</div>
           </div>
}

export {Quote}