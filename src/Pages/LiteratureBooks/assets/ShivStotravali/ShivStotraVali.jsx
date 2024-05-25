import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import STV from './assets/STV.pdf';

const ShivStotraVali = function(){

    useTitle('Shivastotravali ');

    return <div>
                <PDFBookRenderer 
                    file={STV} 
                    titleSanskrit={"Shivastotravali "}
                    author={"Utpaladeva"}
                    referrence={'https://archive.org/details/KRI237ShivaStotravaliOfUtpalSeries511902ChowkhambaSanskritSeries/page/n1/mode/2up'}
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
        url: '/My-Shaiva-Darshana/personalities?name=utpaladeva',
        text: 'Know about Utpaladeva'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default ShivStotraVali