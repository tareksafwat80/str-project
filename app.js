// 1. قاعدة البيانات والمحتوى الثابت
const aboutData = {
    title: "STR - Summit Team Real Estate",
    vision: "تقديم أفضل قيمة مقابل سعر بالدمج بين الجودة والتميز في السوق المصري.",
    whoUs: "نحن شركة رائدة متخصصة في الاستثمار العقاري، نوفر حلولاً سكنية واستثمارية في أرقى المناطق.",
    team: "نخبة من الخبراء في مصر والوطن العربي يعملون لراحتكم."
};

const partners = [
    "طلعت مصطفى", "إعمار", "سوديك", "نيو جيزة", "ماونتن فيو", "بالم هيلز", 
    "أورا", "سيتي إيدج", "هايد بارك", "صبور", "مصر إيطاليا", "أوراسكوم"
];

const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "راس الحكمة", "القاهرة الجديدة", "السخنة", "زايد"];

// 2. توليد داتا تجريبية (الـ 30 كارت) مع الصور والبيانات الكاملة
let units = [];
for(let i=1; i<=30; i++) {
    units.push({
        id: i,
        code: 7000 + i,
        type: i <= 10 ? 'resale' : (i <= 20 ? 'primary' : 'rentals'),
        price: i * 500000, 
        zone: areas[i % areas.length],
        space: 90 + (i * 5),
        rooms: (i % 4) + 1,
        view: "حديقة واسعة",
        model: "نموذج " + (i + 10),
        status: "active",
        featured: i % 5 === 0,
        waClicks: Math.floor(Math.random() * 20),
        images: [
            "https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=500",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500"
        ]
    });
}

// 3. وظائف العرض والتبويبات
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active', 'gold-text'));
    
    if(['resale', 'primary', 'rentals'].includes(tabName)) {
        document.getElementById('units-section').style.display = 'block';
        currentUnitTab = tabName;
        renderUnits();
    } else {
        document.getElementById(tabName).style.display = 'block';
    }
    
    if(tabName === 'about') renderAbout();
    if(tabName === 'partners') renderPartners();
    if(tabName === 'areas') renderAreas();
}

let currentUnitTab = 'resale';

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const searchTerm = document.getElementById('globalSearch').value.toLowerCase();
    const maxPrice = document.getElementById('filterPrice').value;
    const rooms = document.getElementById('filterRooms').value;
    const zone = document.getElementById('filterZone').value;

    let filtered = units.filter(u => {
        const matchesTab = u.type === currentUnitTab;
        const matchesSearch = u.code.toString().includes(searchTerm) || u.zone.includes(searchTerm);
        const matchesPrice = maxPrice ? u.price <= maxPrice : true;
        const matchesRooms = rooms ? u.rooms == rooms : true;
        const matchesZone = zone ? u.zone == zone : true;
        return matchesTab && matchesSearch && matchesPrice && matchesRooms && matchesZone;
    });

    grid.innerHTML = filtered.map(u => `
        <div class="bg-zinc-900 border border-gray-800 rounded-lg overflow-hidden cursor-pointer" onclick="openUnit(${u.id})">
            <img src="${u.images[0]}" class="h-40 w-full object-cover">
            <div class="p-3">
                <div class="flex justify-between text-[10px] gold-text">
                    <span>${u.code}</span>
                    <span>${u.zone}</span>
                </div>
                <p class="font-bold text-lg">${u.price.toLocaleString()} EGP</p>
                <p class="text-[10px] silver-text">${u.rooms} غرف | ${u.space}م</p>
            </div>
        </div>
    `).join('');
}

// 4. نافذة كارت المواصفات (Modal) مع الـ Slide Show
let currentImgIndex = 0;
function openUnit(id) {
    const u = units.find(u => u.id === id);
    currentImgIndex = 0;
    const slider = document.getElementById('modalSlider');
    slider.innerHTML = `
        <img src="${u.images[currentImgIndex]}" id="mainImg" class="w-full h-full object-cover">
        <button onclick="changeImg(-1, ${id})" class="absolute left-2 top-1/2 bg-black/50 p-2"> < </button>
        <button onclick="changeImg(1, ${id})" class="absolute right-2 top-1/2 bg-black/50 p-2"> > </button>
    `;
    
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = u.zone + " - " + u.model;
    document.getElementById('m-specs').innerText = `${u.rooms} غرف - ${u.space} متر - ${u.view}`;
    document.getElementById('m-finance').innerText = `السعر الإجمالي: ${u.price.toLocaleString()} جنيه`;
    document.getElementById('m-notes').innerText = "هذه الوحدة مطابقة للمواصفات الفندقية.";
    
    document.getElementById('unitModal').style.display = 'block';
}

function changeImg(step, id) {
    const u = units.find(u => u.id === id);
    currentImgIndex = (currentImgIndex + step + u.images.length) % u.images.length;
    document.getElementById('mainImg').src = u.images[currentImgIndex];
}

// 5. لوحة التحكم (Admin)
function openAdmin() {
    const pass = prompt("كلمة السر:");
    if(pass === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        const statsDiv = document.getElementById('adminStats');
        statsDiv.innerHTML = `
            <div class="p-4 bg-black border border-gold rounded">ريسيل: ${units.filter(u=>u.type==='resale').length}</div>
            <div class="p-4 bg-black border border-silver rounded">برايمري: ${units.filter(u=>u.type==='primary').length}</div>
            <div class="p-4 bg-black border border-white rounded">إيجار: ${units.filter(u=>u.type==='rentals').length}</div>
        `;
    }
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }

// 6. تهيئة الصفحات الفارغة
function renderAbout() {
    document.getElementById('about').innerHTML = `
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl gold-text mb-6">رؤيتنا</h2>
            <p class="mb-10 text-lg">${aboutData.vision}</p>
            <h2 class="text-3xl gold-text mb-6">من نحن</h2>
            <p class="mb-10 text-lg">${aboutData.whoUs}</p>
            <h2 class="text-3xl gold-text mb-6">الفريق</h2>
            <p class="text-lg">${aboutData.team}</p>
        </div>`;
}

function renderPartners() {
    document.getElementById('partners-grid').innerHTML = partners.map(p => `
        <div class="p-4 border border-gray-800 text-center rounded bg-zinc-900">
            <div class="h-12 w-12 bg-gold/20 mx-auto rounded-full mb-2"></div>
            <p class="text-sm font-bold">${p}</p>
            <p class="text-[10px] silver-text">شريك معتمد لدى STR</p>
        </div>
    `).join('');
}

// تشغيل البحث التلقائي
document.getElementById('globalSearch').addEventListener('input', renderUnits);
