import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import MalinivijyotanraPDF from './assets/SVT.pdf';

const SvacchandaTantram = function(){

    useTitle('श्री स्वच्छन्दतन्त्र - Svacchanda Tantram');

    return <div>
                <PDFBookRenderer 
                    file={MalinivijyotanraPDF} 
                    titleSanskrit={"श्रीस्वच्छन्दतन्त्र"}
                    author={"Kshemraja"}
                    referrence={'https://archive.org/details/TheSvacchandaTantramIVrajVallabhaDwivedi/page/n251/mode/2up'}
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
        url: '/My-Shaiva-Darshana/personalities?name=svacchandabhairava',
        text: 'Know about Svacchanda Bhairava'
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

export default SvacchandaTantram