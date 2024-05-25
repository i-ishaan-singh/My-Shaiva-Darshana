import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import NT from './assets/NT.pdf';

const NetraTantram = function(){

    useTitle('श्री नेत्रतन्त्र - Svacchanda Tantram');

    return <div>
                <PDFBookRenderer 
                    file={NT} 
                    titleSanskrit={"श्रीनेत्रतन्त्र"}
                    author={"Kshemraja"}
                    referrence={'https://archive.org/details/in.ernet.dli.2015.485111/page/n11/mode/2up'}
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

export default NetraTantram