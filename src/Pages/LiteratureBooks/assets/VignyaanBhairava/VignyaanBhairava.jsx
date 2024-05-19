import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import VBTPDF from './assets/VBT.pdf';

const VBT = function(){

    useTitle('विज्ञान भैरव तन्त्र');

    return <div>
                <PDFBookRenderer 
                    file={VBTPDF} 
                    titleSanskrit={"विज्ञान भैरव तन्त्र"}
                    referrence={'https://dn790005.ca.archive.org/0/items/Sanskrit_EBooks_Assorted_Titles/VijnanaBhairavaTantraSanskritTextEnglishTranslation.pdf'}
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

export default VBT