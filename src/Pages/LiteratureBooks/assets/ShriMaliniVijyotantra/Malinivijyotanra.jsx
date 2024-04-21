import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import MalinivijyotanraPDF from './assets/Malinivijyotanra.pdf';

const Malinivijyotanra = function(){

    return <div>
                <PDFBookRenderer 
                    file={MalinivijyotanraPDF} 
                    titleSanskrit={"श्री मालिनी विजयोत्तर तन्त्रम्"}
                    author={"Paramhansa Mishra"}
                    referrence={'https://archive.org/details/ShriMaliniVijayottaraTantraParamhansaMishra_201701'}
                />
                <SectionSeparator/>
            </div>

}

export default Malinivijyotanra