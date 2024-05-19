import { BookRenderer } from "../../../Components/BookRenderer/BookRenderer";
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { useTitle } from "../../../Utils/useTitle/useTitle";


const Book = function(){

    useTitle('भैरवस्तवः - Bhairav Stavaha');

    return <div>
                <BookRenderer {...bookData} />
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
        text: 'Explore about Abhinavgupta'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]


const bookData = {
    titleSanskrit: 'भैरवस्तवः',
    author: 'Abhinavgupta',
    chapters: [
        {
            nameSanskrit: '',
            name: '',
            verses: [
                {
                    "sanskrit": "व्याप्तचराचरभावविशेषं चिन्मयमेकमनन्तमनादिम्|\nभैरवनाथमनाथशरण्यं त्वन्मयचित्ततया हृदि वन्दे || १ ||",
                    "english": "IEverywhere, in all that moves or seems still, the pure spirit, One, Eternal, boundless, You exist, refuge for the lost. With my mind filled with Your presence, in my loving heart I adore You."
                },
                {
                    "sanskrit": "त्वन्मयमेतदशेषमिदानीं भाति मम त्वदनुग्रहशक्त्या ।\nत्वं च महेश सदैव ममात्मा स्वात्ममयं मम तेन समस्तम् ॥ २॥",
                    "english": "By Your grace, the universe reveals Your form today. You are my soul, so all of this is truly me."
                },
                {
                    "sanskrit": "स्वात्मनि विश्वगते त्वयि नाथे तेन न संसृतिभीतिकथास्ति ।\nसत्स्वपि दुर्धरदुःखविमोहत्रासविधायिषु कर्मगणेषु ॥ ३॥",
                    "english": "The world is filled with You, You are my Self, so the cycle of births and deaths holds no fear. Past Karma may bring pain, but I won't tremble or despair."
                },
                {
                    "sanskrit": "अन्तक मां प्रति मा दृशमेनां क्रोधकरालतमां विनिधेहि ।\nशङ्करसेवनचिन्तनधीरो भीषणभैरवशक्तिमयोऽस्मि ॥ ४॥",
                    "english": "O Death, don't glare with rage at me, for Shiva's thought and  service empower me. I wield the fearsome might of Bhairava."
                },
                {
                    "sanskrit": "इत्थमुपोढभवन्मयसंविद्दीधितिदारितभूरितमिस्रः ।\nमृत्युयमान्तककर्मपिशाचैर्नाथ नमोऽस्तु न जातु बिभेमि ॥ ५॥",
                    "english": "The veil of ignorance is torn by the sunlight of God-realization. Petty fears - Karma, death, fate's controller, ender - have no hold."
                },
                {
                    "sanskrit": "प्रोदितसत्यविबोधमरीचिः प्रेक्षितविश्वपदार्थसतत्त्वः ।\nभावपरामृतनिर्भरपूर्णे त्वय्यहमात्मनि निर्वृतिमेमि ॥ ६॥",
                    "english": "The light of truth has dawned, the Being in all seen clearly. In You, my highest Self, overflowing with love's nectar, I find true peace."
                },
                {
                    "sanskrit": "मानसगोचरमेति यदैव क्लेशदशा तनुतापविधात्री ।\nनाथ तदैव मम त्वदभेदस्तोत्रपरामृतवृष्टिरुदेति ॥ ७॥",
                    "english": "When distress burns with scorching heat within my heart, hymns of oneness with You bring clouds of cooling nectar."
                },
                {
                    "sanskrit": "शङ्कर सत्यमिदं व्रतदानस्नानतपो भवतापविदारि ।\nतावकशास्त्रपरामृतचिन्ता स्यन्दति चेतसि निर्वृतिधाराम् ॥ ८॥",
                    "english": "Vows, gifts, rituals, and holy baths may ease rebirth's fevers, but just a thought of Your sweet Shastras pours a steady stream of bliss upon the mind."
                },
                {
                    "sanskrit": "नृत्यति गायति हृष्यति गाढं संविदियं मम भैरवनाथ ।\nत्वां प्रियमाप्य सुदर्शनमेकं दुर्लभमन्यजनैः समयज्ञम् ॥ ९॥",
                    "english": "My soul dances, sings with joy, O Shiva, finding You, the Love, the Good, hidden from those outside the path. You grant Your grace in Your own perfect time."
                },
                {
                    "sanskrit": "वसुरसपौषे कृष्णदशम्यामभिनवगुप्तः स्तवमिममकरोत् ।\nयेन विभुर्भवमरुसन्तापं शमयति (स्व)जनस्य झटिति दयालुः ॥ १०॥",
                    "english": "On the tenth dark day of Pushya, Abhinav wrote this hymn. Recited by a heart sincere, it moves merciful Shiva to swiftly quench the desert's heat of this world."
                },
                {
                    "sanskrit": "॥ इति श्रीअभिनवगुप्तपादाचार्यकृतः भैरवस्तवः सम्पूर्णः ॥\n॥ समाप्तं स्तवमिदमभिनवाख्यं पद्यनवकम् ॥",
                    "english": ""
                }             
                
            ]
        },
    ] 
}

export default Book;