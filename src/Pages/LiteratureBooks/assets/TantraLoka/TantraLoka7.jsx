import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import { TCF } from './TantralokaCommonFooter';
import PDF from './assets/Sri Tantraloka 7.pdf';

const TantraLoka7 = function(){

    useTitle('तन्त्रालोक - Tantraloka Vol 7');

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक (Vol.7)"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%207'}
                />
                <TantraLokaVolumes active={6} />
                <SectionSeparator/>
                <TCF/>
            </div>

}

export default TantraLoka7;