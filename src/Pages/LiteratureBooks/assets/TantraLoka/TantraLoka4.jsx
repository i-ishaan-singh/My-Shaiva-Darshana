import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { TantraLokaVolumes } from './TantraLokaVolumes';
import PDF from './assets/Sri Tantraloka 4.pdf';

const TantraLoka4 = function(){

    return <div>
                <PDFBookRenderer 
                    file={PDF} 
                    titleSanskrit={"श्री तन्त्रालोक (Vol.4)"}
                    author={"Abhinavgupta"}
                    referrence={'https://archive.org/details/sri-tantraloka-4/Sri%20Tantraloka%20%204%20'}
                />
                <TantraLokaVolumes active={3} />
                <SectionSeparator/>
            </div>

}

export default TantraLoka4