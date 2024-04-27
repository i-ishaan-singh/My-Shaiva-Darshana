import { BookRenderer } from "../../../Components/BookRenderer/BookRenderer";
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { useTitle } from "../../../Utils/useTitle/useTitle";


const Book = function(){

    useTitle('षट्त्रिंशत्तत्त्वसंदोहः - ShatTrimshat Tattva Sandoha');

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
        url: '/My-Shaiva-Darshana/personalities?name=acharya-kshemaraja',
        text: 'Explore about Acharaya Kashemaraja'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'Referrences'
    }
]


const bookData = {
    titleSanskrit: 'षट्त्रिंशत्तत्त्वसंदोहः',
    author: 'Acharaya Kashemaraja',
    chapters: [
        {
            nameSanskrit: '',
            name: '',
            verses: [
                {
                    "sanskrit": "यदयमनुत्तरमूर्तिर्नजेच्छयाखिलमिदं जगत्स्रष्टुम्।\nपस्पन्दे स स्पन्दः प्रथमः शिवतत्त्वमुच्यते तज्ज्ञैः॥१॥",
                    "english": "This Anuttaramūrti, whose form represents the Highest Reality, vibrated into existence according to its own will to manifest the entire world. The initial vibration is recognized as the Śiva-tattva by those who understand Anuttaramūrti. ||1||"
                },
                {
                    "sanskrit": "इच्छा सैव स्वच्छा सन्ततसमवायिनी सती शक्तिः।\nसचराचरस्य जगतो बीजं निखिलस्य निजनिलीनस्य॥२॥",
                    "english": "Śakti, the second tattva, is the transparent Will that perpetually manifests in myriad forms. She is the Seed of the entire cosmos, encompassing all that is in motion and stillness, concealed within her own essence. ||2||"
                },
                {
                    "sanskrit": "स्वेच्छाशक्त्युद्गीर्णं जगदात्मतया समाच्छाद्य।\nनिवसन् स एव निखिलानुग्रहनिरतः सदाशिवोऽभिहितः॥३॥",
                    "english": "Completely enveloping the world, which emanated from His own Icchāśakti (the Power of Will), with the Self (specifically the 'Aham' or 'I' aspect), He is recognized as Sadāśiva—the third tattva or category—whose unwavering devotion bestows divine Grace. ||3||"
                },
                {
                    "sanskrit": "विश्वं पश्चात्पश्यनिदन्तया निखिलमीश्वरो जातः।\nसा भवति शुद्धविद्या येदन्ताहन्तयोरभेदमतिः॥४॥",
                    "english": "Subsequently, when the Supreme Lord perceives the entire universe as 'Idam' or 'This'—that is, when the awareness of 'Idam' surpasses that of 'Aham' or 'I'—the Īśvara-tattva, the fourth category, comes into existence. Following this, the Śuddhavidyā-tattva, the fifth category, represents the perception of unity between the states of 'Aham' (self-identity) and 'Idam' (the universe). ||4||"
                },
                {
                    "sanskrit": "माया विभेदबुद्धिर्निजांशजातेषु निखिलजीवेषु।\nनित्यं तस्य निरङ्कुशविभवं वेलेव वारिधे रुन्धे॥५॥",
                    "english": "Māyā, represented by the Māyā-tattva (the sixth category), perpetually creates division among all living beings who emerge as fragments of her own essence. She acts as the shore of an ocean, limiting the independent power (Svātantrya) of the Supreme Lord. ||5||"
                },
                {
                    "sanskrit": "स तया परिमितमूर्तिः सङ्कुचितसमस्तशक्तिरेष पुमान्।\nरविरिव सन्ध्यारक्तः संहृतशक्तिः स्वभासनेऽप्यपटुः॥६॥",
                    "english": "The human being, whose form is measurable and limited, experiences a contraction of power due to Māyā. Similar to the sun appearing reddish during twilight, its luminosity restrained, it cannot emit the same brilliance as before, even though it remains inherently self-effulgent. ||6||"
                },
                {
                    "sanskrit": "सम्पूर्णकर्तृताद्या बह्व्यः सन्त्यस्य शक्तयस्तस्य।\nसङ्कोचात्सङ्कुचिताः कलादिरूपेण रूढयन्त्येवम्॥७॥",
                    "english": "The manifold powers of the Benevolent One, including omnipotence, contract due to saṅkoca (restraint), and subsequently manifest as the form of Kalā—the seventh tattva or category. ||7||"
                },
                {
                    "sanskrit": "तत्सर्वकर्तृता सा सङ्कुचिता कतिपयार्थमात्रपरा।\nकिञ्चित्कर्तारममुं कलयन्ती कीर्त्यते कला नाम॥८॥",
                    "english": "The contracted Omnipotence of the Supreme Being is directed toward specific objects, lacking the appearance of opulence. This limited expression of power is referred to as Kalā, as it propels the actions of the finite doer. ||8||"
                },
                {
                    "sanskrit": "सर्वज्ञतास्य शक्तिः परिमिततनुरल्पवेद्यमात्रपरा।\nज्ञानमुत्पादयन्ती विद्येति निगद्यते बुधैराद्यैः॥९॥",
                    "english": "His Omniscience, though taking on a limited form, is focused on a select few knowables—objects within its scope. This contracted Omniscience is referred to as 'Vidyā' by the ancient sages, as it facilitates the acquisition of knowledge. ||9||"
                },
                {
                    "sanskrit": "नित्यपरिपूर्णतृप्तिः शक्तिस्तस्यैव परिमिता तु सती।\nभोगेषु रञ्जयन्ती सततममुं रागतत्त्वतां याता॥१०॥",
                    "english": "His eternal and perfect Power, known as Icchāśakti (the Power of Will), is indeed limited. This contracted Power of Will manifests as the tattva or category called Rāga, perpetually drawing the limited being toward various enjoyments. ||10||"
                },
                {
                    "sanskrit": "सा नित्यतास्य शक्तिर्निकृष्य निधनोदयप्रदानेन।\nनियतपरिच्छेदकरी कॢप्ता स्यात्कालतत्त्वरूपेण॥११॥",
                    "english": "His eternal nature, affected by the process of dissolution, undergoes finite divisions. This modified eternity takes shape as the tattva or category known as Kāla. ||11||"
                },
                {
                    "sanskrit": "यास्य स्वतन्त्रताख्या शक्तिः सङ्कोचशालिनी सैव।\nकृत्याकृत्येष्ववशं नियतममुं नियमयन्त्यभून्नियतिः॥१२॥",
                    "english": "When the Power of Absolute Freedom, or the Power of Consciousness, contracts, it restrains the limited individual who lacks free will and operates within the boundaries of right and wrong actions. This contracted Power manifests as the tattva or category called Niyati. ||12||"
                },
                {
                    "sanskrit": "इच्छादित्रिसमष्टिः शक्तिः शान्तास्य सङ्कुचद्रूपा।\nसङ्कलितेच्छाद्यात्मकसत्त्वादिकसाम्यरूपिणी तु सती॥१३॥",
                    "english": "His tranquil Power, inherently inclined toward contraction, manifests as a triad composed of Icchā (Will), Gnyaana (Knowledge), and Kriya (Action). This Power, having transformed into Prakṛti (the thirteenth tattva or category), represents an equilibrium of Sattva, Rajas, and Tamas—comprising the combined essence of Will and other attributes. ||13||"
                },
                {
                    "sanskrit": "बुद्ध्यादिसामरस्यस्वरूपचित्तात्मिका मता प्रकृतिः।\nइच्छास्य रजोरूपाहङ्कृतिरासीदहम्प्रतीतिकरी॥१४॥",
                    "english": "Prakṛti is regarded as having the nature of Citta (the limited mind), whose essence combines Buddhi (intellect), Ahaṅkāra (ego), and Manas (the faculty of thought). The Will of the Supreme Lord, expressed through Rajas, gives rise to the concept of individuality, leading to the emergence of the I-sense (ego). ||14||"
                },
                {
                    "sanskrit": "ज्ञानापि सत्त्वरूपा निर्णयबोधस्य कारणं बुद्धिः।\nतस्य क्रिया तमोमयमूर्तिर्मन उच्यते विकल्पकरी॥१५॥",
                    "english": "Gnyaan (Knowledge), even though it is of the nature of Sattva, serves as the instrument for discernment. Its activity, in the form of Buddhi (intellect), is considered the dark and veiling aspect (Tamas) of the mind. This aspect engages in various mental processes and choices ||15||"
                },
                {
                    "sanskrit": "वामादिपञ्चभेदः स एव सङ्कुचितविग्रहो देवः।\nज्ञानक्रियोपरागप्राधान्याद्विविधविषयरूपोऽभूत्॥१६॥",
                    "english": "The deity with a form that encompasses the five aspects—Vāma, Aghora, Sadyojāta, Tatpuruṣa, and Īśāna—remains in a condensed form. Due to the predominance of knowledge and action, the deity assumes various forms corresponding to different objects. ||16||"
                },
                {
                    "sanskrit": "श्रोत्रं चक्षुः स्पर्शनजिह्वाघ्राणानि बोधकरणानि।\nशब्दस्पर्शौ रूपं रसगन्धौ चेति भूतसूक्ष्माणि॥१७॥",
                    "english": "Ears, Eyes, Sense of touch, Tongue, and Nose — these are the subtle faculties through which the individual soul perceives the world. Additionally, the mind is also grouped around these senses. The soul, residing within the body, engages with the objects of the senses through these channels. ||17||"
                },
                {
                    "sanskrit": "अयमेवातिनिकृष्टो जातो भूतात्मनापि भूतेशः।\nगगनमनिलश्च तेजः सलिलं भूमिश्च पञ्चभूतानि॥१८॥",
                    "english": "This very Supreme Lord, even though distinct from the individual souls, is also present within them. He exists as the Lord of all beings. His form encompasses the sky, wind, fire, water, and earth—the five fundamental elements. ||18||"
                },
                {
                    "sanskrit": "श्रोत्रादिकरणवेद्याः शब्दाद्यास्तानि वेदकान्येषाम्।\nवचनकरी वागासीत् पाणिः स्यात्करणभूत आदाने॥१९॥",
                    "english": "The faculties such as ears, sound, and other such objects are known by the Vedas. The speech, which is the instrument for expressing these faculties, is associated with the hands and is the cause of their functionality. ||19||"
                },
                {
                    "sanskrit": "गमनविसर्गानन्दत्रितये पादादिकं करणम्।\nगन्धवती भूमिः स्यादापः सांसिद्धिकद्रवास्तेजः॥२०॥",
                    "english": "The three states of waking, dreaming, and deep sleep, the organs of action such as legs, the earth with its fragrance, and even the water, which is the essence of success and brilliance. ||20||"
                },
                {
                    "sanskrit": "उष्णस्पर्शमरूपस्पर्शो वायुरम्बरं सशब्दम्।\nषट्त्रिंशत्तत्त्वमयं वन्दे कौलं कुलातिगं शम्भुम्॥२१॥",
                    "english": "The touch that feels neither hot nor cold, the air that is sound, and the thirty-six elements —I bow to Lord Shiva who transcends the limitations of lineage and family. ||20||"
                },
                
            ]
        },
    ] 
}

export default Book;