import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import { TCF } from './TantralokaCommonFooter';
import PDF from './assets/Sri Tantraloka 2.pdf';

const Tantraloka2 = function(){

    useTitle('तन्त्रालोक - Tantraloka Vol 2');

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक (Vol.2)"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%202/mode/2up'}
                />
                <TantraLokaVolumes active={1} />
                <SectionSeparator/>
                <TCF/>
            </div>

}


export default Tantraloka2
