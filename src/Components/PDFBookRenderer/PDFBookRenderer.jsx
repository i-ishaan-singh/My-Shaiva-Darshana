import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js";
import React from "react";
import { useWidth } from "../../Utils/RefWidth/useWidth";
import './styles/styles.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import classNames from "classnames";
import { LoadingSection } from "../LoadingIcon/LoadingSection";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFBookRenderer = function(props){

    const {file, titleSanskrit, author, referrence} = props;

    const [totalPages, setTotalPages] = React.useState();
    const [compressed, setCompressed] = React.useState(false);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [internalPageNumber, setIntPageNumber] = React.useState(1);

    const ref = React.useRef({});

    const onDocumentLoadSuccess = React.useCallback(function(e){
        setPageNumber(1);
        setTotalPages(e.numPages)
    },[]);

    var width = useWidth(ref);

    const handlePageNumberChange =  React.useCallback(function(e){
        setIntPageNumber(e.target.value);
    },[]);

    React.useEffect(function(){
        var timeoutID = setTimeout(function(){
            var _pageNumber;

            if(!internalPageNumber){
                _pageNumber = (1);
            }

            _pageNumber = Number(internalPageNumber)
    
            if(_pageNumber<1){
                _pageNumber =(1);
            }else if(_pageNumber>totalPages){
                _pageNumber = (totalPages);
            }

            setPageNumber(_pageNumber || 1);
            setIntPageNumber(_pageNumber || 1);

        },1500);

        return function(){
            clearTimeout(timeoutID);
        }
    },[internalPageNumber, totalPages])

    var current = ref.current;

    const moveIntoView = React.useCallback(function(){
        if(current){
            var mainContainer = document.getElementById('main-app');
            mainContainer.scrollTop = current.offsetTop - (mainContainer.offsetTop *18);
            current.scrollTop = 0;
        }
    },[current])

    const _moveNext = React.useCallback(function(){
        
        var _pageNumber;
        setPageNumber(function(currentPage){
            if(currentPage<totalPages){
                moveIntoView();
                _pageNumber = currentPage+1;
                
            }else{
                _pageNumber = currentPage;
            }
            return _pageNumber || 1;
        });
        setIntPageNumber(_pageNumber || 1)
    },[totalPages,moveIntoView]);

    const _movePrev = React.useCallback(function(){
        
        var _pageNumber;
        setPageNumber(function(currentPage){
            if(currentPage>1){
                moveIntoView();
                _pageNumber = currentPage-1;
            }else{
                _pageNumber = currentPage;
            }
            return _pageNumber || 1;
        });
        setIntPageNumber(_pageNumber || 1)

    },[moveIntoView]);

    const _toggleCompress = React.useCallback(function(){
        moveIntoView();
        setCompressed(x=>!x);
    },[moveIntoView])

    var _pageClassName = classNames("su-pdf-opened-page",{
        'pdf-page-compressed': compressed
    });

    var _compressedIconClassName = classNames("fa book-icons",{
        "fa-compress": !compressed,
        "fa-expand": compressed,
    });

    const scrollHeight = React.useMemo(function(){
        if(compressed && width){
            return current.scrollHeight;
        }
    },[current, compressed, width]);

    const _title = compressed?"Make Full Size":"Compress To Page Size"


    var toolbar = <div className="flex-col gap-1x header-gap-top justify-end pdf-buttons-section align-center header-gap">
                        <i className={_compressedIconClassName} aria-hidden="true" title={_title} onClick={_toggleCompress}></i>
                        <i className="fa fa-arrow-left book-icons" aria-hidden="true" title="Previous Page" disabled={pageNumber===1} onClick={_movePrev}></i>
                        <span>Page:</span> 
                        <input 
                            className="page-input shiv-input" 
                            value={internalPageNumber} 
                            type="number"
                            onChange={handlePageNumberChange}
                            min={1}
                            max={totalPages}
                        />
                        <span>/</span>  
                        <span>{totalPages}</span>
                        <i className="fa fa-arrow-right book-icons" aria-hidden="true" title="Next Page" disabled={pageNumber===totalPages} onClick={_moveNext}></i>
                    </div>

    return <div className="su-pdf-document-book shiv-section" role="pdf-book">
                <div className="shiv-book-name shiv-h2 shiv-text-center shiv-800 color-accent " role="book-name">
                    {titleSanskrit}
                </div>
                {!!author && <div className="shiv-book-sub-name shiv-h5 shiv-text-center" role="book-name">
                    ~{author}
                </div>}
                
                <div className="section-gap" role="document">
                    {toolbar}
                    <Document 
                        file={file} 
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<LoadingSection message="Literature PDF"/>}
                    >
                        <div className={_pageClassName} ref={ref}>
                            <div className="su-pdf-move-next-div" onClick={_moveNext} style={{height: scrollHeight}}/>
                            <div className="su-pdf-move-prev-div" onClick={_movePrev} style={{height: scrollHeight}}/>
                            <Page 
                                className="shiva-pdf-page"
                                pageNumber={pageNumber || 1} 
                                canvasBackground="#fafafa"
                                width={width}
                                loading={<LoadingSection message="Page"/>}
                            />
                        </div>
                    </Document>
                    {!!referrence && <a href={referrence} target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i> Refer Text Link </a>}
                    {toolbar}
                </div>
                
            </div>
}

export {PDFBookRenderer}