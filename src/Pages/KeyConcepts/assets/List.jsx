import { ContentList } from "../../../Components/ContentList/ContentList"

const List = function(){
    return <ContentList data={text} linkMessage=" Deep Dive"/>
}

const text = {

    "Trika Mandala":{
        "description": "The Trika Mandala is a powerful visualization practice used in Kashmir Shaivism. This meditative technique utilizes a series of concentric circles, each representing different aspects of reality and the Self. By contemplating the Trika Mandala, practitioners embark on a journey of self-discovery, recognizing their true nature as Shiva, the ultimate reality.",
        "url": '/My-Shaiva-Darshana/key-concepts?name=trika-mandala'
    },

    "Pratyabhijna Darshana":{
        "description": "Pratyabhijna Darshana, meaning \"recognition\" or \"direct knowledge of oneself,\" is a profound school of Shaiva philosophy within Kashmir Shaivism. It originated and flourished in the valleys of Kashmir, India. This philosophy aligns closely with the spiritual teachings found in the Upanishads and the Yoga Shastra, emphasizing self-realization and reflective wisdom.",
        "url": '/My-Shaiva-Darshana/key-concepts?name=pratyabhijna-darshana'
    }
    
    
}


export {List}