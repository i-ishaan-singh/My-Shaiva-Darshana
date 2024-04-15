

const FooterWaves = function(){

    return (<svg className="editorial"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28 "
                preserveAspectRatio="none"
            >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax1">
                    <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" x="50" y="3"  fill="#e1bf0b"/>
                </g>
                <g className="parallax2">
                    <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" x="50" y="0" fill="#c45706"/>
                </g>
                <g className="parallax3">
                    <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" x="50" y="9" fill="#ce7b08"/>
                </g>
                <g className="parallax4">
                    <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" x="50" y="6" fill="#121212"/>  
                </g>
            </svg>)
}

export {FooterWaves}