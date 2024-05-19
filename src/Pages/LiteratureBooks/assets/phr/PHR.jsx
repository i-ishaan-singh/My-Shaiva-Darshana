import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import phrPDF from './assets/phr.pdf';

const PHR = function(){

    useTitle('प्रत्यभिज्ञाहृदयम्');

    return <div>
                <PDFBookRenderer 
                    file={phrPDF} 
                    titleSanskrit={"प्रत्यभिज्ञाहृदयम्"}
                    author={'Kshemaraja'}
                    referrence={'https://ia601600.us.archive.org/30/items/the-essence-of-self-recognition-interpre/The_Essence_of_Self_Recognition_Interpre.pdf'}
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
        text: 'Know Kshemaraja'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default PHR