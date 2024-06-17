document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('language-toggle');
    const translatableElements = document.querySelectorAll('.translatable');

    const translations = {
        "Government Scheme": "அரசு திட்டம்",
        "Home": "முகப்பு",
        "History": "வரலாறு",
        "Region": "பிராந்தியம்",
        "Sign-Up": "பதிவு",
        "Schemes": "திட்டங்கள்",
        "In Tamil Nadu, agricultural schemes play a pivotal role in driving the state's agrarian economy forward, fostering growth, sustainability, and equitable development across its diverse agricultural landscape. From initiatives aimed at enhancing productivity and crop diversification to those focusing on irrigation infrastructure and farmer welfare, Tamil Nadu's agricultural schemes embody a commitment to harnessing innovation and empowering farmers for a prosperous future.": "தமிழ்நாட்டில், வேளாண் திட்டங்கள் மாநிலத்தின் வேளாண்மை பொருளாதாரத்தை முன்னோக்கி நகர்த்துவதில் முக்கிய பங்கு வகிக்கின்றன, வளர்ச்சி, நிலைத்தன்மை மற்றும் சமச்சீர் முன்னேற்றத்தை அதன் மாறுபட்ட வேளாண்மை நிலப்பரப்பில் ஊக்குவிக்கின்றன. உற்பத்தித்திறனை அதிகரிக்கும் மற்றும் பயிர் மாறுபாட்டைக் குறிக்கும் முயற்சிகளிலிருந்து நீர்ப்பாசன அடுக்குமோடு மற்றும் விவசாயிகள் நலனை மையமாகக் கொண்ட திட்டங்களுக்கும், தமிழ்நாட்டின் வேளாண் திட்டங்கள் புதுமையைப் பயன்படுத்துவதற்கும் விவசாயிகளை செழிப்பான எதிர்காலத்திற்கு சக்திவாய்ந்த ஆக்குவதற்கும் ஒரு அர்ப்பணிப்பை உணர்த்துகின்றன.",
        "Few of the major schemes include:": "சில முக்கியமான திட்டங்கள்:",
        "(i) Agriculture Micro Irrigation Scheme of Pradhan Mantri": "(i) பிரதான் மந்திரி வேளாண்மை மைக்ரோ நீர்ப்பாசன திட்டம்",
        "(ii) PM-Kisan Samman Nidhi": "(ii) பிரதான் மந்திரி கிசான் ஸம்மான் நிதி",
        "(iii) NABARD": "(iii) நபார்டு",
        "(iv) Gramin Bhandaran Yojana": "(iv) கிராமின் பந்தாரண் யோஜனா",
        "(v) PMKSY": "(v) பிரதான் மந்திரி கிருஷி சிச்சய் யோஜனா",
        "Agriculture Micro Irrigation Scheme of Pradhan Mantri": "பிரதான் மந்திரி வேளாண்மை மைக்ரோ நீர்ப்பாசன திட்டம்",
        "Under this scheme, farmers are given 100% subsidy to small and marginal farmers and 75% subsidy to large farmers to set up micro irrigation facility.": "இந்தத் திட்டத்தின் கீழ், சிறிய மற்றும் எல்லைப்புற விவசாயிகளுக்கு 100% மானியம் மற்றும் பெரிய விவசாயிகளுக்கு 75% மானியம் வழங்கப்படுகிறது மைக்ரோ நீர்ப்பாசன வசதியை அமைக்க.",
        "Eligibility: Total financial assistance available is 55% for small and marginal farmers and 45% for other farmers. Subsidy will be given for up to 5 hectares per beneficiary.": "தகுதி: சிறிய மற்றும் எல்லைப்புற விவசாயிகளுக்கு மொத்த நிதி உதவி 55% மற்றும் பிற விவசாயிகளுக்கு 45% கிடைக்கிறது. பயனாளி ஒருவர் 5 ஹெக்டேர்கள் வரை மானியம் வழங்கப்படும்.",
        "PM-Kisan Samman Nidhi": "பிரதான் மந்திரி கிசான் ஸம்மான் நிதி",
        "It offers Rs 6000 a year to all landholding farmer families. Tamil Nadu has received Rs 2459 crore benefit from the Union Government PM-Kisan Samman Nidhi.": "அனைத்து நிலப்பற்றுவோர் விவசாயக் குடும்பங்களுக்கும் ஆண்டு ரூ.6000 வழங்குகிறது. தமிழ்நாடு ரூ.2459 கோடி நன்மையை மத்திய அரசின் பிரதான் மந்திரி கிசான் ஸம்மான் நிதி மூலம் பெற்றுள்ளது.",
        "NABARD": "நபார்டு",
        "NABARD(National Bank for Agriculture and Rural Development) by virtue of its Financial, Developmental and Supervisory role is touching almost every aspect of rural economy, including providing refinance support, building rural infrastructure, preparing district level credit plans, guiding and motivating the banking industry in achieving credit targets. NABARD has projected the priority sector credit potential for Tamil Nadu at Rs 8.3 lakh crore. This is huge rise by 69% over the corresponding year of 2023-24 at Rs 4.9 lakh crore": "நபார்டு (தேசிய வேளாண்மை மற்றும் கிராமப்புற மேம்பாட்டு வங்கி) தனது நிதி, மேம்பாட்டு மற்றும் மேற்பார்வை வேலையினால் கிராமப்புற பொருளாதாரத்தின் கிட்டத்தட்ட அனைத்து அம்சங்களையும் தொடுகிறது, மீள்நிதியுதவி வழங்குதல், கிராமப்புற அடுக்குமோடு கட்டுதல், மாவட்ட அளவிலான கடன் திட்டங்களைத் தயாரித்தல், கடன் இலக்குகளை அடைய வங்கி துறையினரை வழிநடத்துதல் மற்றும் ஊக்குவித்தல் உள்ளிட்டவை. நபார்டு, தமிழ்நாட்டின் முக்கியத் துறை கடன் திறனை ரூ.8.3 லட்சம் கோடியாக மதிப்பீடு செய்துள்ளது. இது 2023-24 ஆம் ஆண்டில் உரியவருடம் ரூ.4.9 லட்சம் கோடியாக இருந்ததை விட 69% உயர்வு.",
        "Gramin Bhandaran Yojana": "கிராமின் பந்தாரண் யோஜனா",
        "Gramin Bhandaran Yojana, a Capital Investment Subsidy Scheme for Construction / Renovation / Expansion of Rural Godowns has been introduced by Govt. of IndiaThe main objectives of the scheme include creation of scientific storage capacity with allied facilities in rural areas to meet the requirements of farmers for storing farm produce, processed farm produce, consumer articles and agricultural inputs; promotion of grading, standardization and quality control of agricultural produce to improve their marketability": "கிராமின் பந்தாரண் யோஜனா, கையிருப்பு / புதுப்பித்தல் / கிராமின் பந்தாரண் அதிகாரி பட்டுச் செயல்திட்டம் ஒழிப்புத்திறன் / புதுப்பித்தல் / விரிவாக்கம் கிராமின் பந்தாரண் தொழில்நுட்பத்திற்கான பரப்பு மொழிபெயர்க்கப்பட்டுள்ளது. திறமையுடன் சிந்திக்கவேண்டிய பிரத்தியேகமான பொருட்களை பயிர் உற்பத்தியை சேமிக்க பெரும் நிலையில் உற்பத்தியின் கடன்கள் மற்றும் பொருளாதார வளர்ச்சிக்கு முன்னிடுகின்றன; தரத்துளியை, தரமுள்ளதுடன் பெரும்படுத்துகிறது மற்றும் அதன் விநியோக முறையை மேம்படுத்துகின்றன.",
        "PMKSY": "பிரதான் மந்திரி கிருஷி சிச்சய் யோஜனா",
        "PRADHAN MANTRI KRISHI SINCHAYEE YOJANA, Micro Irrigation technology plays a vital role in Agriculture in saving water and increasing productivity through effective utilization of every drop of water. Micro Irrigation has received considerable attention from farmers for its perceived ability to contribute significantly to groundwater resources development, agricultural productivity and economic growth. Drip Irrigation System is a life saver for many farmers in Tamil Nadu, by enhancing the yield and quality of the produce. Increasing water scarcity and limited availability of labour has paved the way for implementation of Micro Irrigation scheme. Micro Irrigation technology improves water use efficiency by 40% - 60% by precise water application. Through fertigation technology, fertilizers are directly applied to the root zone in drip irrigation, hence fertilizer use efficiency is also increased.": "பிரதான் மந்திரி கிருஷி சிச்சய் யோஜனா, மைக்ரோ நீர்ப்பாசன தொழில்நுட்பம் வேளாண்மையில் நீரைச் சேமிக்கவும் ஒவ்வொரு துளியும் நீரின் செயல் திறனை அதிகரிக்கவும் முக்கிய பங்காற்றுகிறது. மைக்ரோ நீர்ப்பாசனம், நிலத்தடி நீர்வள மேம்பாட்டில், வேளாண் உற்பத்தித்திறனில் மற்றும் பொருளாதார வளர்ச்சியில் குறிப்பிடத்தக்க அளவில் பங்காற்றுவதற்கான காட்சி காரணமாக விவசாயிகளிடையே பெரிதும் கவனம் பெற்றுள்ளது. துளி நீர்ப்பாசன அமைப்பு, விளைபொருள் உற்பத்தித் திறனை மற்றும் தரத்தை மேம்படுத்துவதன் மூலம் தமிழ்நாட்டில் பல விவசாயிகளுக்கு ஒரு உயிர்காக்கியாக உள்ளது. நீர் பற்றாக்குறை அதிகரிப்பதும் மற்றும் தொழிலாளர்களின் மிதமான கிடைப்புத் தன்மை மைக்ரோ நீர்ப்பாசன திட்டத்தை செயல்படுத்துவதற்கு வழிவகுத்துள்ளது. மைக்ரோ நீர்ப்பாசன தொழில்நுட்பம் துல்லிய நீர் பயன்பாட்டால் நீர் பயன்பாட்டுத் திறனை 40% - 60% மேம்படுத்துகிறது. உரப் பரிமாற்ற தொழில்நுட்பம் மூலம், துளி நீர்ப்பாசனத்தில் உரங்கள் நேரடியாக வேர் மண்டலத்திற்கு பொருத்தப்படுகின்றன, எனவே உர பயன்பாட்டுத் திறனும் அதிகரிக்கின்றது."
    };

    toggle.addEventListener('change', () => {
        const isChecked = toggle.checked;
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            console.log(`Translating "${key}"`);
            console.log("isChecked:", isChecked);
            console.log("translations[key]:", translations[key]);
            if (isChecked) {
                element.innerText = translations[key] || key;
            } else {
                element.innerText = key;
            }
            console.log(`Translated "${key}" to "${element.innerText}"`);
        });
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUpBtn").style.display = "block";
  } else {
    document.getElementById("scrollUpBtn").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const scrollUpBtn = document.getElementById("scrollUpBtn");
scrollUpBtn.addEventListener("click", scrollToTop);