import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import PDF from './assets/Sri Tantraloka 6.pdf';

const TantraLoka6 = function(){

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक (Vol.6)"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%20%206%20'}
                />
                <TantraLokaVolumes active={5} />
                <SectionSeparator/>
            </div>

}

export default TantraLoka6;