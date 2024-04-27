import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import { TCF } from './TantralokaCommonFooter';
import PDF from './assets/Sri Tantraloka 1.pdf';

const Tantraloka1 = function(){

    useTitle('तन्त्रालोक - Tantraloka Vol 1');

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%201/'}
                />
                <TantraLokaVolumes active={0} />
                <SectionSeparator/>
                <TCF/>
            </div>

}


export default Tantraloka1