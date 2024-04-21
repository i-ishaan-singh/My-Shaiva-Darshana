import React from 'react';
import { LeftNavigation } from '../LeftNavigation/LeftNavigation';

const ContentList = function(props){

    const {data} = props;

    var _list =  React.useMemo(function(){
        
        return Object.keys(data).map(function(_key, idx){
            var _item = data[_key],
                name = _item.name || _key;
            
            return (<div key={_key} className="shiv-content-list sub-section-gap">
                        <div className="shiv-content-header shiv-h5 typo-accent color-accent">
                            {idx+1}. <span className={""}>{name}</span>
                        </div>
                        <div className="shiv-content-description indent-base">
                            {_item.description}
                        </div>
                        <LeftNavigation url={_item.url} >
                            <i className="fa fa-link" aria-hidden="true"></i>
                            {' Explore Literature'}
                            {!!_item.isPDF && <span> [PDF]</span>} 
                        </LeftNavigation>
                    </div>)

        });

    },[data]);

    return (<div role="content-list" className="shiv-section">
                {_list}
            </div>)
}

export {ContentList}