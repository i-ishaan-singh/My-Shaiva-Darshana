import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import STV from './assets/STV.pdf';

const ShivaSutraVartika = function(){

    useTitle('Shiva Sutra Vartika');

    return <div>
                <PDFBookRenderer 
                    file={STV} 
                    titleSanskrit={"Shiva Sutra Vartika"}
                    author={"Varadaraj"}
                    referrence={'https://archive.org/details/jqCK_shiva-sutra-vartika-of-varadaraj-by-madhusudan-kaul-1925-series-no.-43-ksts-kashmir-sanskrit-se/page/n27/mode/2up'}
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
        url: '/My-Shaiva-Darshana/literature/books?name=shivsutra',
        text: 'Read Shiva Sutra'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default ShivaSutraVartika