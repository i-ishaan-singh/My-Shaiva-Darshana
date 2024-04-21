import { VolumesNav } from "../../../../Components/VolumesNav/VolumesNav";


const TantraLokaVolumes = function(props){
    const {active} = props;

    return (<VolumesNav header={"Explore Volumes"} data={_data} active={active} />)
}

var _data = [

    {
        text: 'Volume 1',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol1'
    },
    {
        text: 'Volume 2',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol2'
    },
    {
        text: 'Volume 3',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol3'
    },
    {
        text: 'Volume 4',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol4'
    },
    {
        text: 'Volume 5',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol5'
    },
    {
        text: 'Volume 6',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol6'
    },
    {
        text: 'Volume 7',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol7'
    },
    {
        text: 'Volume 8',
        url: '/My-Shaiva-Darshana/literature/books?name=tantraloka-vol8'
    },
]

export {TantraLokaVolumes}