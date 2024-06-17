document.addEventListener("DOMContentLoaded", function () {
    const PandyaNaaduArea = document.getElementById('PandyaNaadu-area');
    const CholaNaaduArea = document.getElementById('CholaNaadu-area');
    const KonguNaaduArea = document.getElementById('KonguNaadu-area');
    const NaduNaaduArea = document.getElementById('NaduNaadu-area');
    const ThondaiNaaduArea = document.getElementById('ThondaiNaadu-area');

    const PandyaNaaduInfo = "1. Integrated Farming Systems: Combining crop cultivation, livestock, and aquaculture, Pandya Naadu's integrated farming systems enhance sustainability and income diversity.  2. Dryland Farming: Utilizing techniques suited for arid conditions, such as drought-resistant crops and water harvesting, is essential in this region.  3. Agri-Tourism: Farmers often engage in agri-tourism, offering visitors experiences in traditional farming practices and rural life.";
    const CholaNaaduInfo = "1. System of Rice Intensification (SRI): This innovative method increases rice yield by using fewer seeds and water, significantly popular in Chola Naadu.  2. Tank Irrigation: Chola Naadu relies heavily on traditional tank irrigation systems, which collect and store rainwater for agricultural use.  3. Agroforestry: Integrating trees and shrubs into farmland is a common practice, enhancing biodiversity and providing additional income sources.";
    const KonguNaaduInfo = "1. Zero Budget Natural Farming (ZBNF): This approach minimizes reliance on external inputs, promoting natural growth cycles and soil health.  2. Precision Agriculture: Konga Naadu farmers use technology for precision agriculture, optimizing planting, and fertilization based on real-time data.  3. Agro-Processing: Value addition through agro-processing units is common, turning raw agricultural products into finished goods, thereby increasing farmers' income.";
    const NaduNaaduInfo = "1. Intercropping: Farmers in Nadu Naadu commonly practice intercropping, growing groundnuts alongside sunflowers to maximize land use and crop yield.  2. Organic Farming: There is a significant focus on organic farming methods to produce healthier and more sustainable crops.  3. Soil Conservation: Various soil conservation techniques, including contour plowing and crop rotation, are employed to maintain soil health and productivity.";
    const ThondaiNaaduInfo = "1. Drip Irrigation: This region utilizes advanced drip irrigation techniques to conserve water and enhance the growth of horticultural crops.  2. Greenhouse Farming: Thondai Naadu has embraced greenhouse farming for cultivating high-value crops such as flowers and exotic vegetables.  3. Urban Agriculture: Proximity to urban centers has led to the development of urban agriculture practices, including rooftop gardens and vertical farming.";

    PandyaNaaduArea.addEventListener('mouseover', function (e) {
        showPandyaTooltip(PandyaNaaduInfo, e.clientX, e.clientY);
    });
    CholaNaaduArea.addEventListener('mouseover', function (e) {
        showCholaTooltip(CholaNaaduInfo, e.clientX, e.clientY);
    });
    KonguNaaduArea.addEventListener('mouseover', function (e) {
        showKonguTooltip(KonguNaaduInfo, e.clientX, e.clientY);
    });
    NaduNaaduArea.addEventListener('mouseover', function (e) {
        showNaduTooltip(NaduNaaduInfo, e.clientX, e.clientY);
    });
    ThondaiNaaduArea.addEventListener('mouseover', function (e) {
        showThondaiTooltip(ThondaiNaaduInfo, e.clientX, e.clientY);
    });

    PandyaNaaduArea.addEventListener('mouseout', function () {
        hidePandyaTooltip();
    });
    CholaNaaduArea.addEventListener('mouseout', function () {
        hideCholaTooltip();
    });
    KonguNaaduArea.addEventListener('mouseout', function () {
        hideKonguTooltip();
    });
    NaduNaaduArea.addEventListener('mouseout', function () {
        hideNaduTooltip();
    });
    ThondaiNaaduArea.addEventListener('mouseout', function () {
        hideThondaiTooltip();
    });

    function showPandyaTooltip(text, x, y) {
        let mapTooltip = document.getElementById('map-tooltip-Pandya');
        mapTooltip.innerHTML = text;
        mapTooltip.style.display = 'block';
        mapTooltip.style.left = x + 'px';
        mapTooltip.style.top = y + 'px';
    }
    function showCholaTooltip(text, x, y) {
        let mapTooltip = document.getElementById('map-tooltip-Chola');
        mapTooltip.innerHTML = text;
        mapTooltip.style.display = 'block';
        mapTooltip.style.left = x + 'px';
        mapTooltip.style.top = y + 'px';
    }
    function showKonguTooltip(text, x, y) {
        let mapTooltip = document.getElementById('map-tooltip-Kongu');
        mapTooltip.innerHTML = text;
        mapTooltip.style.display = 'block';
        mapTooltip.style.left = x + 'px';
        mapTooltip.style.top = y + 'px';
    }
    function showNaduTooltip(text, x, y) {
        let mapTooltip = document.getElementById('map-tooltip-Nadu');
        mapTooltip.innerHTML = text;
        mapTooltip.style.display = 'block';
        mapTooltip.style.left = x + 'px';
        mapTooltip.style.top = y + 'px';
    }
    function showThondaiTooltip(text, x, y) {
        let mapTooltip = document.getElementById('map-tooltip-Thondai');
        mapTooltip.innerHTML = text;
        mapTooltip.style.display = 'block';
        mapTooltip.style.left = x + 'px';
        mapTooltip.style.top = y + 'px';
    }

    function hidePandyaTooltip() {
        let mapTooltip = document.getElementById('map-tooltip-Pandya');
        mapTooltip.style.display = 'none';
    }
    function hideCholaTooltip() {
        let mapTooltip = document.getElementById('map-tooltip-Chola');
        mapTooltip.style.display = 'none';
    }
    function hideKonguTooltip() {
        let mapTooltip = document.getElementById('map-tooltip-Kongu');
        mapTooltip.style.display = 'none';
    }
    function hideNaduTooltip() {
        let mapTooltip = document.getElementById('map-tooltip-Nadu');
        mapTooltip.style.display = 'none';
    }
    function hideThondaiTooltip() {
        let mapTooltip = document.getElementById('map-tooltip-Thondai');
        mapTooltip.style.display = 'none';
    }
});

function toggleDropdown() {
    document.getElementById("regionDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function filterDistricts(region) {
    var rows = document.getElementById("districtTable").querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var district = row.querySelector("td:nth-child(2)").innerText.trim(); 
        var show = false;

        if (region === "Pandya" && ["Madurai", "Ramanathapuram", "Sivaganga", "Theni", "Thoothukudi", "Tirunelveli", "Virudhunagar", "Kanyakumari"].includes(district)) {
            show = true;
        } else if (region === "Chola" && ["Ariyalur", "Cuddalore", "Nagapattinam", "Thanjavur", "Tiruchirappalli", "Tiruvarur", "Pudukkottai", "Perambalur"].includes(district)) {
            show = true;
        } else if (region === "Kongu" && ["Coimbatore", "Dharmapuri", "Erode", "Krishnagiri", "Namakkal", "Nilgiris", "Salem", "Tiruppur", "Karur", "Dindigul"].includes(district)) {
            show = true;
        } else if (region === "Nadu" && ["Viluppuram", "Cuddalore"].includes(district)) {
            show = true;
        } else if (region === "Thondai" && ["Tiruvannamalai", "Vellore", "Tiruvallur", "Kanchipuram", "Chennai"].includes(district)) {
            show = true;
        }

        if (show) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}
