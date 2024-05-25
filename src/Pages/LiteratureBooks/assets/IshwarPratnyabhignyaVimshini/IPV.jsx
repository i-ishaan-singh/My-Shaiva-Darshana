import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import IPVPDF from './assets/IPV.pdf';

const IPV = function(){

    useTitle('Ishvara-pratyabhijna Vimarshini');

    return <div>
                <PDFBookRenderer 
                    file={IPVPDF} 
                    titleSanskrit={"Ishvara-pratyabhijna Vimarshini"}
                    author={"Utpaladeva"}
                    referrence={'https://archive.org/details/in.ernet.dli.2015.292685/page/n5/mode/2up'}
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
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default IPV