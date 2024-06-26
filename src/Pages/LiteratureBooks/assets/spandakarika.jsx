import { BookRenderer } from "../../../Components/BookRenderer/BookRenderer";
import { RelavantLinks } from "../../../Components/RelavantLinks/RelavantLinks";
import { useTitle } from "../../../Utils/useTitle/useTitle";


const Book = function(){

    
    useTitle('स्पन्दकारिका - Spanda Karika');

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
        url: '/My-Shaiva-Darshana/referrences',
        text: 'References'
    }
]


const bookData = {
    titleSanskrit: 'स्पन्दकारिका',
    author: 'Vasugupta',
    chapters: [
        {
            nameSanskrit: 'स्वरूपस्पन्द',
            name: 'Spanda as one\'s own nature',
            verses: [
                {
                    "sanskrit": "यस्योन्मेषनिमेषाभ्यां जगतः प्रलयोदयौ।\nतं शक्तिचक्रविभवप्रभवं शङ्करं स्तुमः॥१॥",
                    "english": "Whose opening and closing the eyes, cause the world to unmanifest and manifest, we praise that Lord Shankara, who is the glorious origin of the wheel of energy. ||1||"
                },
                {
                    "sanskrit": "यत्र स्थितमिदं सर्वं कार्यं यस्माच्च निर्गतम्।\nतस्यानावृतरूपत्वान्न निरोधोऽस्ति कुत्रचित्॥२॥",
                    "english": "From him the whole world has arisen and there only the world stays stable. He stays free from all the veils because his own natural existence is not obstructed anywhere. ||2||"
                },
                {
                    "sanskrit": "जाग्रदादिविभेदेऽपि तदभिन्ने प्रसर्पति।\nनिवर्तते निजान्नैव स्वभावादुपलब्धृतः॥३॥",
                    "english": "That principle continuous to flow in wakefulness and other states of consciousness. Even though it is not different from them, it is always in its own nature abstaining to relate from the perceptions of consciousness. ||3||"
                },
                {
                    "sanskrit": "अहं सुखी च दुःखी च रक्तश्चेत्यादिसंविदः।\nसुखाद्यवस्थानुस्यूते वर्तन्तेऽन्यत्र ताः स्फुटम्॥४॥",
                    "english": "The states of I am Happy, I am Sad, I am attached, etc. are just the perceptions of the person. But the interwoven states for the aim of happiness remains manifest elsewhere. ||4||"
                },
                {
                    "sanskrit": "न दुःखं न सुखं यत्र न ग्राह्यं ग्राहकं न च।\nन चास्ति मूढभावोऽपि तदस्ति परमार्थतः॥५॥",
                    "english": "It is not the Happiness, nor it is Sadness. It is not the Objects of Senses, not it is the senses in itself. And even it is not the ignorant emotions, but still, it is the supreme purpose. ||5||"
                },
                {
                    "sanskrit": "यतः करणवर्गोऽयं विमूढोऽमूढवत्स्वयम्।\nसहान्तरेण चक्रेण प्रवृत्तिस्थितिसंहृतीः॥६॥",
                    "english": "The Foolish Senses (External) act like they are having a subtle nature of their own. Along with the external, the internal group exists in the three States: Flowing, Stationary or Seized. ||6||"
                },
                {
                    "sanskrit": "लभते तत्प्रयत्नेन परीक्ष्यं तत्त्वमादरात्।\nयतः स्वतन्त्रता तस्य सर्वत्रेयमकृत्रिमा॥७॥",
                    "english": "The principle when found, should be examined again and again, with effort, respectfully. After examining this, the person sees the freedom of this tattva is naturally existing everywhere. ||7||"
                },
                {
                    "sanskrit": "न हीच्छानोदनस्यायं प्रेरकत्वेन वर्तते।अपि त्वात्मबलस्पर्शात्पुरुषस्तत्समो भवेत्॥८॥",
                    "english": "The person himself does not behave like he has the desire to remove the quality of Urges in him. Whereas, even a simple contact with the Consciousness has the strength to make him equal to the Consciousness itself. ||8||"
                },
                {
                    "sanskrit": "निजाशुद्ध्यासमर्थस्य कर्तव्येष्वभिलाषिणः।\nयदा क्षोभः प्रलीयेत तदा स्यात्परमं पदम्॥९॥",
                    "english": "By his own impurities, he is desirous and unable to perform his duties. When these impure agitations are dissolved, one finds himself in the supreme state. ||9||"
                },
                {
                    "sanskrit": "तदास्याकृत्रिमो धर्मो ज्ञत्वकर्तृत्वलक्षणः।\nयतस्तदेप्सितं सर्वं जानाति च करोति च॥१०॥",
                    "english": "Because the supreme state is his natural nature, the symptoms of intelligence, and the state of performer start to show in him. These symptoms arise because they are derived from the nature of the supreme state, which is all knowing and all doing. ||10||"
                },              
                {
                    "sanskrit": "तमधिष्ठातृभावेन स्वभावमवलोकयन्।\nस्मयमान इवास्ते यस्तस्येयं कुसृतिः कुतः॥११॥",
                    "english": "The witness behaviour is the Governing nature of that principal. One who gets a glimpse of it gets Astonished. Then how can he go in evil ways? ||11||"
                },
                {
                    "sanskrit": "नाभावो भाव्यतामेति न च तत्रास्त्यमूढता।\nयतोऽभियोगसंस्पर्शात्तदासीदिति निश्चयः॥१२॥",
                    "english": "One who has contemplated concludes that there is no non-existence of that principle and neither there exists any subtleness. Because having perception of the connection can definitely be concluded. ||12||"
                },
                {
                    "sanskrit": "अतस्तत्कृत्रिमं ज्ञेयं सौषुप्तपदवत्सदा।\nन त्वेवं स्मर्यमाणत्वं तत्तत्त्वं प्रतिपद्यते॥१३॥",
                    "english": "Therefore, this fictious knowable world is the offspring of this dormant ignorant state. By simply remembering the principal you cannot come back to this fictious world again. ||13||"
                },
                {
                    "sanskrit": "अवस्थायुगलं चात्र कार्यकर्तृत्वशब्दितम्।\nकार्यता क्षयिणी तत्र कर्तृत्वं पुनरक्षयम्॥१४॥",
                    "english": "Here the state exists in pair, the work which is being done and the state of being the performer of the work. The work which is done is considered to be in a state of continuous perishing. But on the contrary the state of the performer is eternal. ||14||"
                },
                {
                    "sanskrit": "कार्योन्मुखः प्रयत्नो यः केवलं सोऽत्र लुप्यते।\nतस्मिँल्लुप्ते विलुप्तोऽस्मीत्यबुधः प्रतिपद्यते॥१५॥",
                    "english": "Here only the action-oriented efforts are those which are lost. When those efforts are lost, only a fool thinks, “he is lost.” ||15||"
                },
                {
                    "sanskrit": "न तु योऽन्तर्मुखो भावः सर्वज्ञत्वगुणास्पदम्।\nतस्य लोपः कदाचित्स्यादन्यस्यानुपलम्भनात्॥१६॥",
                    "english": "Someone who has turned inwards and is introspective still need not be in the abode of all knowingness. That not knowingness is sometimes also lost maybe someday by non-perception of something else. ||16||"
                },
                {
                    "sanskrit": "तस्योपलब्धिः सततं त्रिपदाव्यभिचारिणी।\nनित्यं स्यात्सुप्रबुद्धस्य तदाद्यन्ते परस्य तु॥१७॥",
                    "english": "His understanding (of the tattva) remains constant throughout the three States. And hence the Well enlightened maybe will remain eternal and the non-enlightened has the beginning and an end. ||17||"
                },
                {
                    "sanskrit": "ज्ञानज्ञेयस्वरूपिण्या शक्त्या परमया युतः।पदद्वये विभुर्भाति तदन्यत्र तु चिन्मयः॥१८॥",
                    "english": "The Highest power is also accompanied with the true nature of the Knowledge and the Knowable. These two states seem all pervading, but that pure consciousness of spiritual intelligence is something else. ||18||"
                },
                {
                    "sanskrit": "गुणादिस्पन्दनिष्यन्दाः सामान्यस्पन्दसंश्रयात्।\nलब्धात्मलाभाः सततं स्युर्ज्ञस्यापरिपन्थिनः॥१९॥",
                    "english": "The Spanda as Qualities are the source of the other usual Spanda. They always stay connected with the each other. Still the one who as obtained the self is at continuous advantage. Because for him there will be no Obstruction of the Knower. ||19||"
                },
                {
                    "sanskrit": "अप्रबुद्धधियस्त्वेते स्वस्थितिस्थगनोद्यताः।\nपातयन्ति दुरुत्तारे घोरे संसारवर्त्मनि॥२०॥",
                    "english": "The Ignorant person are themselves carefully hiding the Spanda Principle. They are having difficulty in letting go of the Scary current of the world. ||20||"
                },
                {
                    "sanskrit": "अतः सततमुद्युक्तः स्पन्दतत्त्वविविक्तये।\nजाग्रदेव निजं भावमचिरेणाधिगच्छति॥२१॥",
                    "english": "When someone is continuously prepared for the Spanda Principle with true discriminatory knowledge, then the innate nature is soon attained even in the waking state.. ||21||"
                },
                {
                    "sanskrit": "अतिक्रुद्धः प्रहृष्टो वा किं करोमीति वा मृशन्।\nधावन्वा यत्पदं गच्छेत्तत्र स्पन्दः प्रतिष्ठितः॥२२॥",
                    "english": "When a person is Excessively Angry, or Excessively Delighted, when he is reflecting on ‘What did he do?’ or running, he goes to the state where the Spanda Tattva is established. ||22||"
                },
                {
                    "sanskrit": "यामवस्थां समालम्ब्य यदयं मम वक्ष्यति।\nतदवश्यं करिष्येऽहमिति सङ्कल्प्य तिष्ठति॥२३॥",
                    "english": "When someone is established in the state, His intention is established that that principle asks to do, he will certainly do it. ||23||"
                },
                {
                    "sanskrit": "तामाश्रित्योर्ध्वमार्गेण चन्द्रसूर्यावुभावपि।\nसौषुम्नेऽध्वन्यस्तमितो हित्वा ब्रह्माण्डगोचरम्॥२४॥",
                    "english": "The desires which exist, arise, and belong to Ida and Pingala Nadi. These desires and whatever else arise can be seized in Sushumna and thus can abandon the world of senses. ||24||"
                },
                {
                    "sanskrit": "तदा तस्मिन्महाव्योम्नि प्रलीनशशिभास्करे।\nसौषुप्तपदवन्मूढः प्रबुद्धः स्यादनावृतः॥२५॥",
                    "english": "Then in that state, the Great Eather gets Dissolved into the Ida and Pingala Nadi. The one who is ignorant experiences a sleep like dormant state but the one who is awakened might get free from Veils. ||25||"
                },
               
            ]
        },
        {
            nameSanskrit: 'सहजविद्योदय',
            name: 'The emergence of natural knowledge',
            verses: [
                {
                    "sanskrit": "तदाक्रम्य बलं मन्त्राः सर्वज्ञबलशालिनः।\nप्रवर्तन्तेऽधिकाराय करणानीव देहिनाम्॥१॥",
                    "english": "Having sequentially gained strength, the mantras, endowed with the power of omniscience, function for the benefit of the embodied beings, just as the organs function for their respective purposes. ||1||"
                },
                {
                    "sanskrit": "तत्रैव सम्प्रलीयन्ते शान्तरूपा निरञ्जनाः।\nसहाराधकचित्तेन तेनैते शिवधर्मिणः॥२॥",
                    "english": "In that very place, the peaceful and pure beings merge. They are absorbed by the yogi's focused mind. These beings embody the essence of Śiva. ||2||"
                },
                {
                    "sanskrit": "यस्मात्सर्वमयो जीवः सर्वभावसमुद्भवात्।\nतत्संवेदनरूपेण तादात्म्यप्रतिपत्तितः॥३॥",
                    "english": "Because the entire universe arises from the essence of the individual soul (jīva), which is the source of all states of existence, it is realized through the form of self-identity (tādātmya). ||3||"
                },
                {
                    "sanskrit": "तस्माच्छब्दार्थचिन्तासु न सावस्था न या शिवः।\nभोक्तैव भोग्यभावेन सदा सर्वत्र संस्थितः॥४॥",
                    "english": "Therefore, in the contemplation of word and meaning, there is neither a stable state nor the Supreme Śiva. Instead, Śiva always exists as the experiencer (bhoktā) through the state of being the object of experience (bhogyabhāva). ||4||"
                },
                {
                    "sanskrit": "अयमेवोदयस्तस्य ध्येयस्य ध्यायिचेतसि।\nतदात्मतासमापत्तिरिच्छतः साधकस्य या॥६॥",
                    "english": "This very emergence is for the meditator who contemplates the object of meditation. The the self-identity is attained by the practitioner. ||6||"
                },
                {
                    "sanskrit": "इयमेवामृतप्राप्तिरयमेवात्मनो ग्रहः।\nइयं निर्वाणदीक्षा च शिवसद्भावदायिनी॥७॥",
                    "english": "Obtaining this Nectar that leads to immortality and perceiving the Self—this initiation, which paves the way for Nirvāṇa or final emancipation, bestows the true state of Śiva. ||7||"
                },
                
            ]
        },
        {
            nameSanskrit: 'विभूतिस्पन्द',
            name: 'Supernatural powers originating from Spanda',
            verses: [
                {
                    "sanskrit": "यथेच्छाभ्यर्थितो धाता जाग्रतोऽर्थान् हृदि स्थितान्।\nसोमसूर्योदयं कृत्वा सम्पादयति देहिनः॥१॥",
                    "english": "The One who responds according to desire, when invoked by the seeker, brings forth the goals residing in the heart of the awakened embodied being, when the Ida and Pingala Nadi is active. ||1||"
                },
                {
                    "sanskrit": "यथेच्छाभ्यर्थितो धाता जाग्रतोऽर्थान् हृदि स्थितान्।\nसोमसूर्योदयं कृत्वा सम्पादयति देहिनः॥१॥",
                    "english": "In a similar manner, even during dreams, the One who governs the Sushumna channel unfailingly manifests all desired aspirations and objectives, as that One never ignores any heartfelt supplication. ||2||"
                },
                {
                    "sanskrit": "अन्यथा तु स्वतन्त्रा स्यात्सृष्टिस्तद्धर्मकत्वतः।\nसततं लौकिकस्येव जाग्रत्स्वप्नपदद्वये॥३॥",
                    "english": "Otherwise, creation would be independent and would possess its own nature. However, just like in the waking and dream states, it is constantly dependent on the Supreme Consciousness. ||3||"
                },
                {
                    "sanskrit": "यथा ह्यर्थोऽस्फुटो दृष्टः सावधानेऽपि चेतसि।\nभूयः स्फुटतरो भाति स्वबलोद्योगभावितः॥४॥",
                    "english": "Just as an unclear object, when observed attentively, becomes clearer, similarly, through the practice of inner focus, one’s perception becomes even more distinct, like the rising sun illuminating the world. ||4||"
                },
                {
                    "sanskrit": "तथा यत्परमार्थेन येन यत्र यथा स्थितम्।\nतत्तथा बलमाक्रम्य न चिरात्सम्प्रवर्तते॥५॥",
                    "english": "In the same way, even while dreaming, that One who is in control of the Sushumna always clearly reveals all desired things and goals, because that One never disregards any loving entreaty. ||5||"
                },
                {
                    "sanskrit": "दुर्बलोऽपि तदाक्रम्य यतः कार्ये प्रवर्तते।\nआच्छादयेद्बुभुक्षां च तथा योऽतिबुभुक्षितः॥६॥",
                    "english": "Even though weak, by gradually approaching that which needs to be done, one becomes capable. Similarly, just as a hungry person covers themselves and eats, so too does the one who is excessively hungry. ||6||"
                },
                {
                    "sanskrit": "अनेनाधिष्ठिते देहे यथा सर्वज्ञतादयः।\nतथा स्वात्मन्यधिष्ठानात्सर्वत्रैवं भविष्यति॥७॥",
                    "english": "In the same way, even though situated within this body, just as all-knowing entities are established, similarly, by being firmly established in one’s own self, one will exist everywhere in this manner. ||7||"
                },
                {
                    "sanskrit": "ग्लानिर्विलुण्ठिका देहे तस्याश्चाज्ञानतः सृतिः।\nतदुन्मेषविलुप्तं चेत्कुतः सा स्यादहेतुका॥८॥",
                    "english": "In the same way, till the body is weak, due to ignorance, the cycle of existence (sṛtiḥ) occurs. If that ignorance is suddenly dispelled, how can this cycle continue without a cause? ||8||"
                },
                {
                    "sanskrit": "एकचिन्ताप्रसक्तस्य यतः स्यादपरोदयः।\nउन्मेषः स तु विज्ञेयः स्वयं तमुपलक्षयेत्॥९॥",
                    "english": "In the same way, even though absorbed in single-pointed contemplation, that which is beyond ordinary perception arises. Recognize that extraordinary, you emerge in your own true nature. ||9||"
                },
                {
                    "sanskrit": "अतो विन्दुरतो नादो रूपमस्मादतो रसः।\nप्रवर्तन्तेऽचिरेणैव क्षोभकत्वेन देहिनः॥१०॥",
                    "english": "From this emergence (Unmeṣa), divine light (Vindu), divine sound (Nāda), divine form (Rūpa), and divine taste (Rasa) soon manifest to an embodied soul, causing a sense of disturbance. ||10||"
                },
                {
                    "sanskrit": "अतो विन्दुरतो नादो रूपमस्मादतो रसः।\nप्रवर्तन्तेऽचिरेणैव क्षोभकत्वेन देहिनः॥१०॥",
                    "english": "From this emergence (Unmeṣa), divine light (Vindu), divine sound (Nāda), divine form (Rūpa), and divine taste (Rasa) soon manifest to an embodied soul, causing a sense of disturbance. ||10||"
                },
                {
                    "sanskrit": "दिदृक्षयेव सर्वार्थान्यदा व्याप्यावतिष्ठते।\nतदा किं बहुनोक्तेन स्वयमेवावभोत्स्यते॥११॥",
                    "english": "If a yogi wishes to perceive all objects as if pervading them, why speak much about it? The yogi will directly experience it for themselves! ||11||"
                },
                {
                    "sanskrit": "प्रबुद्धः सर्वदा तिष्ठेज्ज्ञानेनालोक्य गोचरम्।\nएकत्रारोपयेत्सर्वं ततोऽन्येन न पीड्यते॥१२॥",
                    "english": "By understanding everything within the scope of one’s perception, one should remain constantly aware and gather all aspects together—like gathering them in the essence of Spanda. As a result, the individual remains unaffected or untroubled by external factors. ||12||"
                },
                {
                    "sanskrit": "शब्दराशिसमुत्थस्य शक्तिवर्गस्य भोग्यताम्।\nकलाविलुप्तविभवो गतः सन्स पशुः स्मृतः॥१३॥",
                    "english": "A person whose glory is diminished by Kalā (the power of limitation) becomes vulnerable to the influence of various forces arising from language. Consequently, such an individual is referred to as a ‘paśu’ or a limited being. ||13||"
                },
                {
                    "sanskrit": "परामृतरसापायस्तस्य यः प्रत्ययोद्भवः।\nतेनास्वतन्त्रतामेति स च तन्मात्रगोचरः॥१४॥",
                    "english": "The emergence of thoughts within the limited being signifies a depletion of the essence of the Supreme Nectar of Immortality. As a result, the conditioned individual becomes reliant. This process of thought has its impact on the subtle features of all things, known as Tanmātras. ||14||"
                },
                {
                    "sanskrit": "स्वरूपावरणे चास्य शक्तयः सततोत्थिताः।\nयतः शब्दानुवेधेन न विना प्रत्ययोद्भवः॥१५॥",
                    "english": "The inherent powers are always prepared to obscure the true nature of the limited being, as ideas cannot arise without the interplay of words. ||15||"
                },
                {
                    "sanskrit": "सेयं क्रियात्मिका शक्तिः शिवस्य पशुवर्तिनी।\nबन्धयित्री स्वमार्गस्था ज्ञाता सिद्ध्युपपादिका॥१६॥",
                    "english": "This very Power or Śakti of Śiva , whose nature is activity , abides in the paśu or conditioned being (and) binds (him) . (However, when Śakti) is known or realized as staying (in the aforesaid paśu) like the way toward one's own Self , produces success. ||16||"
                },
                {
                    "sanskrit": "तन्मात्रोदयरूपेण मनोऽहम्बुद्धिवर्तिना।\nपुर्यष्टकेन संरुद्धस्तदुत्थं प्रत्ययोद्भवम्॥१७॥",
                    "english": "The limited individual, completely enveloped by the influence of Puryaṣṭaka (which arises from the subtle elements or Tanmātras), experiences the emergence of thoughts within the mind, ego, and intellect. These thoughts lead to pleasure and pain, and the individual becomes engrossed in their enjoyment. As a result of this continuous cycle, the individual transmigrates through various states of existence. ||17||"
                },
                {
                    "sanskrit": "भुङ्क्ते परवशो भोगं तद्भावात्संसरेदतः।\nसंसृतिप्रलयस्यास्य कारणं सम्प्रचक्ष्महे॥१८॥",
                    "english": "The subservient being (paśu) partakes in the enjoyment of experiences influenced by Puryaṣṭaka. This enjoyment binds them to the cycle of transmigration. The dissolution and creation of the universe are intricately connected to this process. ||18||"
                },
                {
                    "sanskrit": "यदा त्वेकत्र संरूढस्तदा तस्य लयोदयौ।\nनियच्छन्भोक्तृतामेति ततश्चक्रेश्वरो भवेत्॥१९॥",
                    "english": "But when firmly rooted in the principle of Spanda, the ex-limited being gains control over the disappearance and emergence of Puryaṣṭaka. As a result, they become the true enjoyer and, consequently, the Lord of the group of śaktis or powers. ||19||"
                },
                
            ]
        },
        {
            nameSanskrit: 'निष्कर्ष',
            name: 'Conclusion',
            verses: [
                {
                    "sanskrit": "अगाधसंशयाम्भोधिसमुत्तरणतारिणीम्।\nवन्दे विचित्रार्थपदां चित्रां तां गुरुभारतीम्॥१॥",
                    "english": "I bow to the magnificent teachings of the Guru, filled with diverse words and their profound meanings, guiding one safely across the boundless ocean of uncertainty. ||1||"
                },
                {
                    "sanskrit": "लब्ध्वाप्यलभ्यमेतज्ज्ञानधनं हृद्गुहान्तकृतनिहितेः।\nवसुगुप्तवच्छिवाय हि भवति सदा सर्वलोकस्य॥२॥",
                    "english": "Moreover, acquiring this precious knowledge, which is hard to attain, and safeguarding it within the inner sanctum of the heart, undoubtedly benefitting the entire world, just as done by Vasugupta. ||2||"
                },
                
            ]
        }
    ] 
}

export default Book;