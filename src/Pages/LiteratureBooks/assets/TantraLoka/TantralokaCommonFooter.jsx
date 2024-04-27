import { RelavantLinks } from "../../../../Components/RelavantLinks/RelavantLinks"


const TCF = function(){
    return <RelavantLinks
                data={relavantData}
            />
}


var relavantData = [
    {
        url: '/My-Shaiva-Darshana/literature-list',
        text: 'Know more Literature'
    },
    {
        url: '/My-Shaiva-Darshana/personalities?name=abhinavgupta',
        text: 'Explore about Abhinavgupta'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'Referrences'
    }
]


export {TCF}