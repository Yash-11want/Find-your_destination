// script.js
const touristSpotsData = {
    "Rajasthan": [
        {
            name: "Jaipur - Pink City",
            image: "/images/jaipur.jpg", 
            description: "Known as the Pink City, Jaipur is Rajasthan's capital and largest city. The city was founded in 1727 by Maharaja Sawai Jai Singh II.",
            bestTime: "October to March",
            attractions: [
                "Hawa Mahal - Palace of Winds",
                "City Palace - Royal Residence",
                "Amber Fort - Hill Fort",
                "Jantar Mantar - Observatory"
            ],
            timings: "Most monuments open from 9:00 AM to 5:00 PM",
            entryFee: "Composite ticket: ₹1000 for foreigners, ₹300 for Indians"
        },
        { name: "Udaipur - City of Lakes", image: "/images/udaipur.jpg" },
        { name: "Jaisalmer - Golden City", image: "/images/jaisalmer.jpg" },
        { name: "Jodhpur - Blue City", image: "/images/jodhpur.jpg" },
        { name: "Bikaner - Junagarh Fort", image: "/images/biskar.jpeg" },
        { name: "Mount Abu - Hill Station", image: "/images/mount abu.jpg" },
        { name: "Chittorgarh - Chittorgarh Fort", image: "/images/chittorgarh fort.jpg" },
        { name: "Ajmer - Dargah Sharif", image: "/images/ajmer.jpg" },
        { name: "Ranthambore - National Park", image: "/images/ranthambore.jpg" }
    ],
    "Himachal Pradesh": [
        { name: "Shimla - Summer Capital", image: "/images/shimla.jpg" },
        { name: "Manali - Adventure Sports", image: "/images/manali.jpg" },
        { name: "Dharamshala - Dalai Lama Temple", image: "/images/Dharamshala.jpg" },
        { name: "Kasol - Mini Israel", image: "/images/kasol.jpg" },
        { name: "Kullu - Valley of Gods", image: "/images/kullu.jpg" },
        { name: "Spiti Valley - Cold Desert", image: "/images/spiti valley.jpg" },
        { name: "Dalhousie - Hill Station", image: "/images/dalhousie.jpg" },
        { name: "Khajjiar - Mini Switzerland", image: "/images/khajjiar.jpg" },
        { name: "Bir Billing - Paragliding", image: "/images/bir billing.jpg" },
        { name: "Chamba - Ancient Temples", image: "/images/chamba.jpg" }
    ],
    "Uttarakhand": [
        { name: "Rishikesh - Yoga Capital", image: "/images/rishikesh.jpg" },
        { name: "Haridwar - Holy City", image: "/images/haridwar.jpg" },
        { name: "Mussoorie - Queen of Hills", image: "/images/mussoorie.jpg" },
        { name: "Nainital - Lake City", image: "/images/nainital.jpg" },
        { name: "Auli - Skiing Destination", image: "/images/auli.jpg" },
        { name: "Kedarnath - Sacred Temple", image: "/images/kedarnath.jpg" },
        { name: "Jim Corbett - National Park", image: "/images/jim_corbett.jpg" },
        { name: "Valley of Flowers - UNESCO Site", image: "/images/valley of flowers.jpg" },
        { name: "Badrinath - Pilgrimage Site", image: "/images/Badrinath.jpg" },
        { name: "Ranikhet - Army Cantonment", image: "/images/Ranikhet.jpg" }
    ],
    "Goa": [
        { name: "Calangute - Beach Paradise", image: "/images/calangute.jpg" },
        { name: "Panjim - Capital City", image: "/images/panjim.jpg" },
        { name: "Baga Beach - Nightlife", image: "/images/Baga-Beach.jpg" },
        { name: "Basilica of Bom Jesus - Church", image: "/images/basilica.jpg" },
        { name: "Dudhsagar Falls - Waterfall", image: "/images/dudhsagar_falls.jpg" },
        { name: "Fort Aguada - Portuguese Fort", image: "/images/fort aguada.jpg" },
        { name: "Anjuna Flea Market - Shopping", image: "/images/anjuna_market.jpg" },
        { name: "Chapora Fort - Heritage Site", image: "/images/chapora.jpeg" },
        { name: "Palolem Beach - Scenic Beauty", image: "/images/palolem-sea-beach.jpg" },
        { name: "Spice Plantations - Agriculture", image: "/images/spice plantation.jpg" }
    ],
    "Odisha": [
        { name: "Puri - Jagannath Temple", image: "/images/puri.jpeg" },
        { name: "Konark - Sun Temple", image: "/images/konark.jpg" },
        { name: "Bhubaneswar - Temple City", image: "/images/bhubaneswar.jpg" },
        { name: "Chilika Lake - Bird Sanctuary", image: "/images/chilika_lake.jpg" },
        { name: "Chandipur Beach - Hide & Seek Beach", image: "/images/chandipur.jpeg" },
        { name: "Simlipal National Park - Wildlife", image: "/images/simlipal national park.jpg" },
        { name: "Udayagiri Caves - Ancient Caves", image: "/images/udayagiri caves.jpg" },
        { name: "Bhitarkanika - Mangrove Forest", image: "/images/bhitarkanika.jpeg" },
        { name: "Gopalpur - Beach Town", image: "/images/gopalpur.jpeg" },
        { name: "Raghurajpur - Heritage Village", image: "/images/raghurajpur.jpeg" }
    ],
    "Maharashtra": [
        { name: "Mumbai - Gateway of India", image: "/images/mumbai.jpeg" },
        { name: "Pune - Shaniwar Wada", image: "/images/pune.jpeg" },
        { name: "Aurangabad - Ajanta & Ellora Caves", image: "/images/aurangabad.jpeg" },
        { name: "Nashik - Vineyards", image: "/images/nashik.jpg" },
        { name: "Shirdi - Sai Baba Temple", image: "/images/Shiridi.jpg" },
        { name: "Lonavala - Hill Station", image: "/images/lonawala.jpg" },
        { name: "Mahabaleshwar - Hill Station", image: "/images/mahabaleshwar.jpg" },
        { name: "Kolhapur - Mahalaxmi Temple", image: "/images/kolhapur.jpeg" },
        { name: "Alibaug - Beach Town", image: "/images/alibaug.jpg" },
        { name: "Nagpur - Orange City", image: "/images/nagpur.jpg" }
    ],

    "Telangana": [
        { name: "Hyderabad - City of Pearls", image: "/images/charminar.jpg" },
        { name: "Warangal - Thousand Pillar Temple", image: "/images/warangal.jpg" },
        { name: "Khammam - Kinnerasani Wildlife Sanctuary", image: "/images/khammam.jpeg" },
        { name: "Nizamabad - Pochampally", image: "/images/nizamabad.jpg" },
        { name: "Srisailam - Jyotirlinga Temple", image: "/images/srisailam.jpg" },
        { name: "Ramagundam - Singareni Collieries", image: "/images/ramagundam.jpg" },
        { name: "Medak - Medak Church", image: "/images/medak.jpg" },
        { name: "Bhadrachalam - Temple Town", image: "/images/bhadrachalam.jpeg" },
        { name: "Pochampally - Handloom Village", image: "/images/pochampally.jpg" },
        { name: "Adilabad - Kuntala Waterfall", image: "/images/adilabad.jpg" }
    ],
    "Andhra Pradesh": [
        { name: "Visakhapatnam - Beach City", image: "/images/visakhapatnam-.jpg" },
        { name: "Tirupati - Sri Venkateswara Temple", image: "/images/tirupati.jpg" },
        { name: "Vijayawada - Kanaka Durga Temple", image: "/images/vijayawada.jpg" },
        { name: "Amaravati - Buddhist Site", image: "/images/Amaravati.jpg" },
        { name: "Kurnool - Belum Caves", image: "/images/kurnool.jpg" },
        { name: "Rajahmundry - Godavari River", image: "/images/rajahmundry.jpg" },
        { name: "Chittoor - Horsley Hills", image: "/images/Chitoor.png" },
        { name: "Nellore - Pulicat Lake", image: "/images/Nellore.jpg" },
        { name: "Guntur - Buddhist Sites", image: "/images/guntur.jpg" },
        { name: "Srikakulam - Baruva Beach", image: "/images/srikakulam.jpg" }
    ],
    "Kerala": [
        { name: "Kochi - Queen of the Arabian Sea", image: "/images/kochi fort.png" },
        { name: "Thiruvananthapuram - Sree Padmanabhaswamy Temple", image: "/images/trivandrum padmanabhaswamy temple.png" },
        { name: "Alappuzha - Backwaters", image: "/images/Alappuzha.jpeg" },
        { name: "Munnar - Tea Gardens", image: "/images/munnar.jpg" },
        { name: "Kumarakom - Vembanad Lake", image: "/images/kumarakom.jpg" },
        { name: "Wayanad - Edakkal Caves", image: "/images/wayanad.jpg" },
        { name: "Thekkady - Periyar Wildlife Sanctuary", image: "/images/thekkady.jpg" },
        { name: "Kozhikode - Malabar Coast", image: "/images/kozhikode.jpg" },
        { name: "Varkala - Papanasam Beach", image: "/images/varakala.jpg" },
        { name: "Idukki - Idukki Dam", image: "/images/idukki.jpeg" }
    ],
    "Tamil Nadu": [
        { name: "Chennai - Marina Beach", image: "/images/Marina-Beach.jpg" },
        { name: "Madurai - Meenakshi Temple", image: "/images/warangal.jpg" },
        { name: "Kanyakumari - Vivekananda Rock", image: "/images/kodaikanal.jpg" },
        { name: "Ooty - Hill Station", image: "/images/ooty.jpg" },
        { name: "Coimbatore - Isha Yoga Center", image: "/images/Coimbatore.jpg" },
        { name: "Thanjavur - Brihadeeswarar Temple", image: "/images/thanjavur.jpg" },
        { name: "Rameswaram - Ramanathaswamy Temple", image: "/images/warangal.jpg" },
        { name: "Mahabalipuram - Shore Temple", image: "/images/mahabalipum.jpg" },
        { name: "Kodaikanal - Hill Station", image: "/images/kumarakom.jpg" },
        { name: "Tiruchirapalli - Rock Fort Temple", image: "/images/thekkady.jpg" }
    ]


};
function generateAttractionsList(attractions) {
    return attractions.map(attraction => `<li>${attraction}</li>`).join('');
}

function generateSpotCard(spot) {
    return `
        <div class="spot-card">
            <img src="${spot.image}" alt="${spot.name}" class="spot-image">
            <div class="spot-content">
                <h3 class="spot-name">${spot.name}</h3>
                <p class="spot-description">${spot.description}</p>
                <div class="spot-details">
                    <div class="detail-item">
                        <strong>Best Time to Visit:</strong>
                        <p>${spot.bestTime}</p>
                    </div>
                    <div class="detail-item">
                        <strong>Key Attractions:</strong>
                        <ul>${generateAttractionsList(spot.attractions)}</ul>
                    </div>
                    <div class="detail-item">
                        <strong>Timings:</strong>
                        <p>${spot.timings}</p>
                    </div>
                    <div class="detail-item">
                        <strong>Entry Fee:</strong>
                        <p>${spot.entryFee}</p>
                    </div>
                </div>
            </div>
        </div>`;
}

// Add search functionality
function searchTouristSpots() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const spotsSection = document.getElementById("touristSpots");
    spotsSection.innerHTML = "";
    
    let foundSpots = [];
    
    // Search through all states and spots
    for (let state in touristSpotsData) {
        touristSpotsData[state].forEach(spot => {
            if (spot.name.toLowerCase().includes(searchInput)) {
                foundSpots.push({ ...spot, state: state });
            }
        });
    }
    
    if (foundSpots.length > 0) {
        spotsSection.innerHTML = `<h2>Search Results</h2>
        <div class="tourist-spots-grid">`;
        foundSpots.forEach(spot => {
            spotsSection.innerHTML += `
                <div class="spot-card">
                    <div class="state-tag">${spot.state}</div>
                    <img src="${spot.image}" alt="${spot.name}" class="spot-image">
                    <p class="spot-name">${spot.name}</p>
                </div>`;
        });
        spotsSection.innerHTML += `</div>`;
    } else {
        spotsSection.innerHTML = "<p>No tourist spots found matching your search.</p>";
    }
}

function displayTouristSpots() {
    const state = document.getElementById("stateSelect").value;
    const spotsSection = document.getElementById("touristSpots");
    spotsSection.innerHTML = "";

    if (state && touristSpotsData[state]) {
        spotsSection.innerHTML = `
            <h2>Tourist Spots in ${state}</h2>
            <div class="tourist-spots-grid">`;
        touristSpotsData[state].forEach(spot => {
            spotsSection.innerHTML += `
                <div class="spot-card">
                    <img src="${spot.image}" alt="${spot.name}" class="spot-image">
                    <p class="spot-name">${spot.name}</p>
                </div>`;
        });
        spotsSection.innerHTML += `</div>`;
    } else {
        spotsSection.innerHTML = "<p>Please select a state to view tourist spots.</p>";
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for search input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchTouristSpots, 300));
    }
});

// Debounce function to limit search frequency
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
