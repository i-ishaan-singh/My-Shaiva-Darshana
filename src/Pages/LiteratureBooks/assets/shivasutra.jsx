import { BookRenderer } from "../../../Components/BookRenderer/BookRenderer";
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { useTitle } from "../../../Utils/useTitle/useTitle";


const Book = function(){


    useTitle('श्री शिवसूत्र - Shiva Sutra');

    return  <div>
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
        url: '/My-Shaiva-Darshana/personalities?name=vasugupta',
        text: 'Explore about Vasugupta'
    },
    {
        url: '/My-Shaiva-Darshana/literature/books?name=shiv-sutra-vartika',
        text: 'Read Shiva Sutra Vartika'
    },
    {
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]

const bookData = {
    titleSanskrit: 'श्री शिवसूत्र',
    author: 'Vasugupta',
    chapters: [
        {
            nameSanskrit: 'शाम्भवोपाय',
            name: 'Universal consciousness',
            verses: [
                {
                    "sanskrit": "चैतन्यमात्मा॥१॥",
                    "english": "Consciousness which is omniscient and omnipotent  (is) the Self or true nature of Reality ||1||"
                },
                {
                    "sanskrit": "ज्ञानं बन्धः॥२॥",
                    "english": "The (limited or contracted) knowledge  (is) bondage ||2||"
                },
                {
                    "sanskrit": "योनिवर्गः कलाशरीरम्॥३॥",
                    "english": "The source  (and her) progeny , (along with) that whose form  is activity  (are also bondage)||3||"
                },
                {
                    "sanskrit": "ज्ञानाधिष्ठानं मातृका॥४॥",
                    "english": "The basis  of the (limited and contracted) knowledge  (is) the un-understood Mother ||4||"
                },
                {
                    "sanskrit": "उद्यमो भैरवः॥५॥",
                    "english": "Bhairava --Supreme Being--  (is) a sudden flash or elevation of divine Consciousness ||5||"
                },
                {
                    "sanskrit": "शक्तिचक्रसन्धाने विश्वसंहारः॥६॥",
                    "english": "Through union  with the collective group  of powers , (there is) the disappearance  of the universe ||6||"
                },
                {
                    "sanskrit": "जाग्रत्स्वप्नसुषुप्तभेदे तुर्याभोगसम्भवः॥७॥",
                    "english": "(Even) during such different (states of consciousness)  as waking , dreaming  and profound sleep , there is  the delight and enjoyment  of the Fourth State ||7||"
                },
                {
                    "sanskrit": "ज्ञानं जाग्रत्॥८॥",
                    "english": "Knowledge  (is) the waking state of consciousness ||8||"
                },
                {
                    "sanskrit": "स्वप्नो विकल्पाः॥९॥",
                    "english": "The dream state of consciousness  (is) thoughts and ideations ||9||"
                },
                {
                    "sanskrit": "अविवेको मायासौषुप्तम्॥१०॥",
                    "english": "Non-discernment or lack of awareness  (is) the profound sleep  of Māyā --delusion-- ||10||"
                },
                {
                    "sanskrit": "त्रितयभोक्ता वीरेशः॥११॥",
                    "english": "He is a master  of (his) senses  who is an enjoyer (of the aforesaid \"ābhoga\"2 or divine delight)  in the triad (of waking, dreaming and deep sleep) ||11||"
                },
                {
                    "sanskrit": "विस्मयो योगभूमिकाः॥१२॥",
                    "english": "The stages  of Yoga  (are) a fascinating wonder ||12||"
                },
                {
                    "sanskrit": "इच्छाशक्तिरुमा कुमारी॥१३॥",
                    "english": "The Will  power  (of the enlightened Yogī is) the \"Splendor of Śiva\"  (that is) Kumārī ||13||"
                },
                {
                    "sanskrit": "दृश्यं शरीरम्॥१४॥",
                    "english": "All phenomena (outer or inner)  (are) the body  (of the enlightened Yogī)||14||"
                },
                {
                    "sanskrit": "हृदये चित्तसङ्घट्टाद्दृश्यस्वापदर्शनम्॥१५॥",
                    "english": "Through the union  of the mind  on the core of Consciousness , there is appearance  of (all) phenomena (outer or inner)  (and even) the void  (as they are in their essential reality)||15||"
                },
                {
                    "sanskrit": "शुद्धतत्त्वसन्धानाद्वापशुशक्तिः॥१६॥",
                    "english": "Or  by union  with the Pure  Principle , (the Yogī becomes like one in whom) the (binding) power  (existing in) a limited and conditioned being  is absent ||16||"
                },
                {
                    "sanskrit": "वितर्क आत्मज्ञानम्॥१७॥",
                    "english": "Firm and unwavering awareness  (that I am Śiva is) knowledge  of the Self ||17||"
                },
                {
                    "sanskrit": "लोकानन्दः समाधिसुखम्॥१८॥",
                    "english": "The Bliss (that the Yogī feels in abiding as the Knower or Perceiver)  of the world (—consisting of subjects and objects—)  (is his) delight  of Samādhi ||18||"
                },
                {
                    "sanskrit": "शक्तिसन्धाने शरीरोत्पत्तिः॥१९॥",
                    "english": "On being united  with the Power (of Will)  (there is) production or creation  of bodies  (according to the Yogī's desire)||19||"
                },
                {
                    "sanskrit": "भूतसन्धानभूतपृथक्त्वविश्वसङ्घट्टाः॥२०॥",
                    "english": "(The other supernormal powers of the enlightened Yogī are: the power of) putting together  existent entities ; (the power of) separating  them all --i.e. the existent entities--  (and the power of) assembling --saṅghaṭṭa--  everything  (what has been separated by space and time)||20||"
                },
                {
                    "sanskrit": "शुद्धविद्योदयाच्चक्रेशत्वसिद्धिः॥२१॥",
                    "english": "Full acquisition  of mastery  over the collective group of powers  (is achieved by the Yogī) through the emergence  of Śuddhavidyā ||21||"
                },
                {
                    "sanskrit": "महाह्रदानुसन्धानान्मन्त्रवीर्यानुभवः॥२२॥",
                    "english": "By uniting  with the Great  Lake , (the Yogī has) the experience  of the generative source --virility or potency--  of (all) mantra-s ||22||"
                }
            ]
        },
        {
            nameSanskrit: 'शाक्तोपाय',
            name: 'The emergence of innate knowledge',
            verses: [
                {
                    "sanskrit": "चित्तं मन्त्रः॥१॥",
                    "english": "The mind (of someone who constantly ponders over the Highest Reality)  (is) the Mantra ||1||"
                },
                {
                    "sanskrit": "प्रयत्नः साधकः॥२॥",
                    "english": "(Zealous and spontaneous) effort  (is) effective in fulfillment ||2||"
                },
                {
                    "sanskrit": "विद्याशरीरसत्ता मन्त्ररहस्यम्॥३॥",
                    "english": "The (luminous) Existence or Being (of the Perfect I-consciousness) , (which consists of multitude of words) whose essence  (is) knowledge (of the highest non-dualism) , (is) the secret  of the Mantra ||3||"
                },
                {
                    "sanskrit": "गर्भे चित्तविकासोऽविशिष्टविद्यास्वप्नः॥४॥",
                    "english": "Mental  satisfaction  in (limited) mayic powers  (is) a (mere) dream  (based upon) inferior  knowledge ||4||"
                },
                {
                    "sanskrit": "विद्यासमुत्थाने स्वाभाविके खेचरी शिवावस्था॥५॥",
                    "english": "On the spontaneous  emergence  of the (Highest) Knowledge , (occurs) a movement in the unlimited space of Consciousness , (which is known as) the state  of Śiva ||5||"
                },
                {
                    "sanskrit": "गुरुरुपायः॥६॥",
                    "english": "The Guru  (is) the means ||6||"
                },
                {
                    "sanskrit": "मातृकाचक्रसम्बोधः॥७॥",
                    "english": "(From a pleased Guru accrues) enlightenment  regarding the group  of letters ||7||"
                },
                {
                    "sanskrit": "शरीरं हविः॥८॥",
                    "english": "The body (of a person into whom the aforesaid enlightenment was poured)  (becomes) an oblation ||8||"
                },
                {
                    "sanskrit": "ज्ञानमन्नम्॥९॥",
                    "english": "The (limited) knowledge  (is) the food ||9||"
                },
                {
                    "sanskrit": "विद्यासंहारे तदुत्थस्वप्नदर्शनम्॥१०॥",
                    "english": "On the submergence  of the (Pure) Knowledge , there is appearance  of mental modifications (like in a dream)  arising  because of it , (that is, \"arising because of the previous submergence of the Pure Knowledge\")||10||"
                },
            ]
        },
        {
            nameSanskrit: 'आणवोपाय',
            name: 'The transformations of the individual',
            verses: [
                {
                    "sanskrit": "आत्मा चित्तम्॥१॥",
                    "english": "The individual Self  (is) mind ||1||"
                },
                {
                    "sanskrit": "ज्ञानं बन्धः॥२॥",
                    "english": "(Mind-born) knowledge  (is) bondage ||2||"
                },
                {
                    "sanskrit": "कलादीनां तत्त्वानामविवेको माया॥३॥",
                    "english": "Non-discrimination  of (such) principles  as Kalā , etc. , (is) Māyā||3||"
                },
                {
                    "sanskrit": "शरीरे संहारः कलानाम्॥४॥",
                    "english": "The dissolution  of the parts  --of the tattva-s or principles of manifestation-- in the body --physical, subtle and causal--  (should be accomplished by Bhāvanā or creative contemplation)||4||"
                },
                {
                    "sanskrit": "नाडीसंहारभूतजयभूतकैवल्यभूतपृथक्त्वानि॥५॥",
                    "english": "(The Yogī should bring about) dissolution (of the vital energy)  in the subtle channels , conquest  of the gross elements , withdrawal (of his mind)  from the gross elements  (and) separation --pṛthaktva--  from the gross elements  (by means of Bhāvanā or creative contemplation too)||5||"
                },
                {
                    "sanskrit": "मोहावरणात्सिद्धिः॥६॥",
                    "english": "Supernatural power  (occurs) because of a veil  (drawn by) Māyā or Ignorance ||6||"
                },
                {
                    "sanskrit": "मोहजयादनन्ताभोगात्सहजविद्याजयः॥७॥",
                    "english": "(The Yogī acquires) mastery  of the Natural  Knowledge  through an all-pervasive conquest  of Māyā or Ignorance ||7||"
                },
                {
                    "sanskrit": "जाग्रद्द्वितीयकरः॥८॥",
                    "english": "(The Yogī who has attained to Sahajavidyā or Natural Knowledge is) awake and watchful ,  (while) the second one, (i.e. \"the world\") , (appears) as (his) effulgence of light ||8||"
                },
                {
                    "sanskrit": "नर्तक आत्मा॥९॥",
                    "english": "(This very Yogī is) a Self  (that is merely) a dancing actor ||9||"
                },
                {
                    "sanskrit": "रङ्गोऽन्तरात्मा॥१०॥",
                    "english": "The stage (for that Nartaka or dancing actor to play --see 9th aphorism--)  (is his) inner  soul  (which consists of the causal and subtle bodies)||10||"
                },
                {
                    "sanskrit": "प्रेक्षकाणीन्द्रियाणि॥११॥",
                    "english": "The senses (of that Nartaka or dancing actor)  (are) the spectators (of his playing) ||11||"
                },
                {
                    "sanskrit": "धीवशात्सत्त्वसिद्धिः॥१२॥",
                    "english": "By means of  the superior spiritual intelligence , (there is) the realization  of the flashing, subtle and inner vibration of the perfect I-consciousness ||12||"
                },
                {
                    "sanskrit": "सिद्धः स्वतन्त्रभावः॥१३॥",
                    "english": "The state  of being Independent and Free  (is) achieved ||13||"
                },
                {
                    "sanskrit": "यथा तत्र तथान्यत्र॥१४॥",
                    "english": "As  there , so  elsewhere , (that is, \"just as that independent Yogī can exhibit Freedom in his own body, he is able to do so in any other place too\"; this is the sense)||14||"
                },
                {
                    "sanskrit": "बीजावधानम्॥१५॥",
                    "english": "(That Yogī should give full) attention  to the Seed, (in other words, \"to the Highest Śakti or the perfect I-consciousness that is the source of the entire manifestation\") ||15||"
                },
                {
                    "sanskrit": "आसनस्थः सुखं ह्रदे निमज्जति॥१६॥",
                    "english": "Established  in the power of the Supreme Śakti (or the perfect I-consciousness, which is as a \"seat\" for him) , (the enlightened Yogī) easily  plunges  into the Lake (of the divine and immortal Consciousness) ||16||"
                },
                {
                    "sanskrit": "स्वमात्रानिर्माणमापादयति॥१७॥",
                    "english": "(That very liberated Yogī can) produce  (any forms according to) the measure or aspect of the creative Consciousness (which is his \"āsana\" or \"seat\" --see 16th aphorism--) ||17||"
                },
                {
                    "sanskrit": "विद्याविनाशे जन्मविनाशः॥१८॥",
                    "english": "As long as Sahajavidyā or Śuddhavidyā, (the Natural or Pure Knowledge) , does not disappear , (the possibility of another) birth  (does) disappear (for that sublime Yogī) ||18||"
                },
                {
                    "sanskrit": "कवर्गादिषु माहेश्वर्याद्याः पशुमातरः॥१९॥",
                    "english": "Māheśvarī  and other goddesses  (who have their sphere of influence) in \"ka\"  group , etc. , (and are) the mothers  of the limited beings , (become his presiding deities)||19||"
                },
                {
                    "sanskrit": "त्रिषु चतुर्थं तैलवदासेच्यम्॥२०॥",
                    "english": "The fourth state of consciousness, (which is a Witness) , should be poured  like  (a continuous flow of) oil  into (the other) three , (that is, in waking, dreaming and deep sleep)||20||"
                },
                {
                    "sanskrit": "मग्नः स्वचित्तेन प्रविशेत्॥२१॥",
                    "english": "One should enter (that fourth state of consciousness --see aphorism 20--)  by being immersed (into it)  with one's own  mind  (which must be devoid of any thought, obviously)||21||"
                },
                {
                    "sanskrit": "प्राणसमाचारे समदर्शनम्॥२२॥",
                    "english": "When a slow but firm spreading out  of the (Yogī's) vital energy  (occurs), there is equable  vision , (that is, the Yogī realizes unity underlying all)||22||"
                },
                {
                    "sanskrit": "मध्येऽवरप्रसवः॥२३॥",
                    "english": "In the intervening stage, (that is, neither at the initial nor at the final stage of waking, dreaming and dream sleep) , there is generation  of inferior (mental states) ||23||"
                },
                {
                    "sanskrit": "मात्रास्वप्रत्ययसन्धाने नष्टस्य पुनरुत्थानम्॥२४॥",
                    "english": "When there is union  between the real I-consciousness  and the objects , (there is also) reappearance  (of the Bliss of that fourth state of consciousness which had) disappeared  (due to the arising of the aforesaid inferior states of mind --see aphorism 23--)||24||"
                },
                {
                    "sanskrit": "शिवतुल्यो जायते॥२५॥",
                    "english": "(That superb Yogī who has attained to the fourth state) becomes  equal  to Śiva ||25||"
                },
                {
                    "sanskrit": "शरीरवृत्तिर्व्रतम्॥२६॥",
                    "english": "Remaining  in the body  (is his) vow , (that is to say, he retains a physical form on account of his enormous compassion to humankind; it is really a pious act on his part)||26||"
                },
                {
                    "sanskrit": "कथा जपः॥२७॥",
                    "english": "(His) conversation  (is) the muttering (of a Mantra or prayer) ||27||"
                },
                {
                    "sanskrit": "दानमात्मज्ञानम्॥२८॥",
                    "english": "Knowledge  of the Self  (is his) gift  (for us all)||28||"
                },
                {
                    "sanskrit": "योऽविपस्थो ज्ञाहेतुश्च॥२९॥",
                    "english": "He who  (is) established (in the group of powers or Śakticakra)  (is) indeed  a means  of wisdom ||29||"
                },
                {
                    "sanskrit": "स्वशक्तिप्रचयोऽस्य विश्वम्॥३०॥",
                    "english": "The universe  (is) the expansion or unfoldment  of his own  Power ||30||"
                },
                {
                    "sanskrit": "स्थितिलयौ॥३१॥",
                    "english": "Both the maintenance (of the universe)  (and its) reabsorption  (are also the unfoldment of his Power)||31||"
                },
                {
                    "sanskrit": "तत्प्रवृत्तावप्यनिरासः संवेत्तृभावात्॥३२॥",
                    "english": "Even though  there may be occurrence  of those (three previous processes, viz. manifestation, maintenance and reabsorption of the universe) , there is no break  (in the inner state of the great Yogī) because of (his) condition  as the (Supreme) Knower ||32||"
                },
                {
                    "sanskrit": "सुखदुःखयोर्बहिर्मननम्॥३३॥",
                    "english": "(This sublime Yogī) considers  pleasure and pain  as something external ||33||"
                },
                {
                    "sanskrit": "तद्विमुक्तस्तु केवली॥३४॥",
                    "english": "(As the noble Yogī) is completely free  from that --pleasure and pain-- , (he is) alone  then , (in short, he has attained to his own Self who is both an \"only\" Knower and an \"only\" Mass of pure Consciousness)||34||"
                },
                {
                    "sanskrit": "मोहप्रतिसंहतस्तु कर्मात्मा॥३५॥",
                    "english": "However , one who is a compact mass  of delusion  (is merely) involved  in actions ||35||"
                },
                {
                    "sanskrit": "भेदतिरस्कारे सर्गान्तरकर्मत्वम्॥३६॥",
                    "english": "When the difference  disappears , the capacity to perform  another  Creation  (appears in the enlightened Yogī)||36||"
                },
                {
                    "sanskrit": "करणशक्तिः स्वतोऽनुभवात्॥३७॥",
                    "english": "(Anyone can realize his) creative  power  from his own  experience ||37||"
                },
                {
                    "sanskrit": "त्रिपदाद्यनुप्राणनम्॥३८॥",
                    "english": "(There should be) enlivening  of the three states --manifestation, maintenance and reabsorption--  by the main one  (in sum, \"by the fourth state of consciousness which is a Witness to the other three ones and is full of transcendental Bliss\")||38||"
                },
                {
                    "sanskrit": "चित्तस्थितिवच्छरीरकरणबाह्येषु॥३९॥",
                    "english": "As (in the case)  of the mental  states , (so also regarding) the body , organs of sense  and external objects --bāhya-- , (there should be an \"enlivening or vivification\" by infusing them with the Bliss of the fourth state of consciousness)||39||"
                },
                {
                    "sanskrit": "अभिलाषाद्बहिर्गतिः संवाह्यस्य॥४०॥",
                    "english": "Because of the desire based on a feeling of want , there is extroversion  of the limited being  (who is thus subject to the wheel of Saṁsāra or Transmigration from a form of existence to another)||40||"
                },
                {
                    "sanskrit": "तदारूढप्रमितेस्तत्क्षयाज्जीवसङ्क्षयः॥४१॥",
                    "english": "(Nevertheless,) in the case of (the great Yogī) whose awareness  (is) established  in That --in the fourth state or Turya-- , with the removal  of that (desire) --see aphorism 40--  (there is also) complete removal  of (the condition of) limited being ||41||"
                },
                {
                    "sanskrit": "भूतकञ्चुकी तदा विमुक्तो भूयः पतिसमः परः॥४२॥",
                    "english": "Then, (when the desire finally disappears) , (that Yogī uses the body which is composed of) gross elements  as covering ; (and being) completely liberated , (since he is) pre-eminently  equal  to Lord (Śiva) , (he is) perfect and full ||42||"
                },
                {
                    "sanskrit": "नैसर्गिकः प्राणसम्बन्धः॥४३॥",
                    "english": "The link or association  of the vital energy  (with the body is) natural ||43||"
                },
                {
                    "sanskrit": "नासिकान्तर्मध्यसंयमात् किमत्र सव्यापसव्यसौषुम्नेषु॥४४॥",
                    "english": "(There is vital energy --prāṇaśakti or prāṇa--) in the left subtle channel --Iḍā-- , in the right subtle channel --Piṅgalā--  (and) in Suṣumnā --the middle one-- . What else (could one say)  in this respect ?||44||"
                },
                {
                    "sanskrit": "भूयः स्यात्प्रतिमीलनम्॥४५॥",
                    "english": "(Regarding the enlightened Yogī), there is  over and over again  the awareness of the Supreme Self both internally and externally ||45||"
                }
            ]
        }
    ] 
}

export default Book;