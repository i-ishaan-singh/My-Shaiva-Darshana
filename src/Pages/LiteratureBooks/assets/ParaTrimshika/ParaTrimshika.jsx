import { PDFBookRenderer } from '../../../../Components/PDFBookRenderer/PDFBookRenderer';
import { RelavantLinks } from '../../../../Components/RelavantLinks/RelavantLinks';
import { SectionSeparator } from '../../../../Components/SectionSeparator/SectionSeparator';
import { useTitle } from '../../../../Utils/useTitle/useTitle';
import PT from './assets/PT.pdf';

const ParaTrimshika = function(){

    useTitle('Parātriṁśikā');

    return <div>
                <PDFBookRenderer 
                    file={PT} 
                    titleSanskrit={"Parātriṁśikā"}
                    author={"Abhinavagupta "}
                    referrence={'https://archive.org/details/in.ernet.dli.2015.477523/page/n1/mode/2up'}
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
        url: '/My-Shaiva-Darshana/personalities?name=abhinavgupta',
        text: 'Know about Abhinavgupta'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

export default ParaTrimshika