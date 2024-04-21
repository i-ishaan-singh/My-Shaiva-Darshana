import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import PDF from './assets/Sri Tantraloka 1.pdf';

const Tantraloka1 = function(){

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%201/'}
                />
                <TantraLokaVolumes active={0} />
                <SectionSeparator/>
            </div>

}

export default Tantraloka1