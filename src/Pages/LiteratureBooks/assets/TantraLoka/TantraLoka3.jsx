import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import PDF from './assets/Sri Tantraloka 3.pdf';

const TantraLoka3 = function(){

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक (Vol.3)"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%20%203/'}
                />
                <TantraLokaVolumes active={2} />
                <SectionSeparator/>
            </div>

}

export default TantraLoka3;