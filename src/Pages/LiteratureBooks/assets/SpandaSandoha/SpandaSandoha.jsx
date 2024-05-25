import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import SS from './assets/SS.pdf';

const SpandaSandoha = function(){

    useTitle('श्री स्वच्छन्दतन्त्र - Spanda Sandoha');

    return <div>
                <PDFBookRenderer 
                    file={SS} 
                    titleSanskrit={"श्रीस्पन्द संदोह"}
                    author={"Kshemraja"}
                    referrence={'https://archive.org/details/TheSpandaSandohaOfKshemaraja1917KSTS/page/n15/mode/2up'}
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
        url: '/My-Shaiva-Darshana/personalities?name=acharya-kshemaraja',
        text: 'Know about Acharya Kshemraja'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default SpandaSandoha