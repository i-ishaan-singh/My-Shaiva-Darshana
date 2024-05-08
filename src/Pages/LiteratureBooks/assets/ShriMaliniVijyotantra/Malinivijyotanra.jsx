import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import MalinivijyotanraPDF from './assets/Malinivijyotanra.pdf';

const Malinivijyotanra = function(){

    useTitle('श्री मालिनी विजयोत्तर तन्त्रम् - Malinivijyotattra tantram');

    return <div>
                <PDFBookRenderer 
                    file={MalinivijyotanraPDF} 
                    titleSanskrit={"श्री मालिनी विजयोत्तर तन्त्रम्"}
                    author={"Paramhansa Mishra"}
                    referrence={'https://archive.org/details/ShriMaliniVijayottaraTantraParamhansaMishra_201701'}
                />
                <SectionSeparator/>
                <RelavantLinks
                    data={relavantData}
                />
            </div>

}


var relavantData = [
    {
        url: '/My-Shaiva-Darshana/literature-list',
        text: 'Know more Literature'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default Malinivijyotanra