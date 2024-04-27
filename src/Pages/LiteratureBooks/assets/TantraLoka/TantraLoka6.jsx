import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import { TCF } from './TantralokaCommonFooter';
import PDF from './assets/Sri Tantraloka 6.pdf';

const TantraLoka6 = function(){

    useTitle('तन्त्रालोक - Tantraloka Vol 6');

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक (Vol.6)"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%20%206%20'}
                />
                <TantraLokaVolumes active={5} />
                <SectionSeparator/>
                <TCF/>
            </div>

}

export default TantraLoka6;