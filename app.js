// 1. قاعدة البيانات الشاملة (عن الشركة)
const aboutData = {
    vision: "تقديم أفضل قيمة مقابل أفضل سعر بالدمج بين عنصري الجودة والتميز، وتوفير كافة متطلبات عملائنا وصولاً لراحتهم ورضاهم.",
    whoUs: "نحن شركة رائدة وناشئة بقوة، متخصصون في التسويق والاستثمار العقاري بالسوق المصري، ونمتلك خبرة واسعة في تلبية احتياجات العملاء بأرقى المناطق السكنية.",
    team: "يتولى إدارة الشركة نخبة مميزة من أصحاب الكفاءات والخبرات المتنوعة في مصر والوطن العربي، مما يضمن احترافية التعامل ودقة التنفيذ.",
    message: "نلتزم بتوفير حلول عقارية مبتكرة تضمن أعلى عائد استثماري لعملائنا وأفضل تجربة سكنية فندقية."
};

const partners = ["طلعت مصطفى", "إعمار", "سوديك", "نيو جيزة", "ماونتن فيو", "بالم هيلز", "أورا", "سيتي إيدج", "هايد بارك", "صبور", "مصر إيطاليا", "أوراسكوم", "مراسي", "لافيستا", "فاي", "مدينتي"];
const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "العين السخنة", "الشيخ زايد"];

// 2. توليد 30 كارت وحدة (10 لكل قسم)
let units = [];
const categories = ['resale', 'primary', 'rentals'];
for(let i=0; i<30; i++) {
    const cat = categories[Math.floor(i/10)];
    units.push({
        id: Date.now() + i,
        code: (cat === 'resale' ? 7000 : (cat === 'primary' ? 8000 : 9000)) + i,
        type: cat,
        price: (i + 1) * 750000,
        zone: areas[i % areas.length],
        space: 90 + (i * 10),
        rooms: (i % 3) + 1,
        view: "إطلالة مباشرة على الحديقة",
        model: "نموذج " + (i + 10),
        status: "active",
        featured: i % 8 === 0,
        waClicks: Math.floor(Math.random() * 30),
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"]
    });
}

// 3. وظائف التنقل (Tabs)
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active', 'gold-text'));
    
    const target = document.getElementById(tabName === 'resale' || tabName === 'primary' || tabName === 'rentals' ? 'units-section' : tabName);
    if(target) target.style.display = 'block';

    if(['resale', 'primary', 'rentals'].includes(tabName)) {
        window.currentTab = tabName;
        renderUnits();
    }
    if(tabName === 'about') renderAbout();
    if(tabName === 'partners') renderPartners();
    if(tabName === 'areas') renderAreas();
}

// 4. عرض الوحدات والفلاتر
function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const maxPrice = document.getElementById('filterPrice').value;
    const rooms = document.getElementById('filterRooms').value;
    const zone = document.getElementById('filterZone').value;

    let filtered = units.filter(u => {
        return u.type === window.currentTab &&
               (u.code.toString().includes(search) || u.zone.includes(search)) &&
               (!maxPrice || u.price <= maxPrice) &&
               (!rooms || u.rooms == rooms) &&
               (!zone || u.zone == zone);
    });

    grid.innerHTML = filtered.map(u => `
        <div class="bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden cursor-pointer hover:border-gold transition" onclick="openUnit(${u.id})">
            <img src="${u.images[0]}" class="h-40 w-full object-cover">
            <div class="p-4">
                <div class="flex justify-between text-[10px] gold-text mb-1"><span>${u.code}</span><span>${u.zone}</span></div>
                <p class="text-xl font-bold">${u.price.toLocaleString()} EGP</p>
                <p class="text-xs silver-text">${u.rooms} غرف | ${u.space} م²</p>
            </div>
        </div>
    `).join('');
}

// 5. نافذة التفاصيل (Slider)
let activeImgs = [];
let imgIdx = 0;
function openUnit(id) {
    const u = units.find(u => u.id === id);
    activeImgs = u.images;
    imgIdx = 0;
    updateSlider();
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = u.zone + " - " + u.model;
    document.getElementById('m-specs').innerText = `${u.rooms} غرف - ${u.space} متر - ${u.view}`;
    document.getElementById('m-finance').innerText = `السعر: ${u.price.toLocaleString()} جنيه`;
    document.getElementById('m-notes').innerText = u.view + "، تشطيب سوبر لوكس، استلام فوري.";
    document.getElementById('unitModal').style.display = 'block';
}

function changeImg(n) {
    imgIdx = (imgIdx + n + activeImgs.length) % activeImgs.length;
    updateSlider();
}

function updateSlider() {
    document.getElementById('sliderWrapper').innerHTML = `<img src="${activeImgs[imgIdx]}" class="w-full h-full object-cover">`;
}

// 6. لوحة التحكم (Admin)
function openAdmin() {
    const p = prompt("كلمة السر:");
    if(p === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        const stats = document.getElementById('adminStats');
        stats.innerHTML = `
            <div class="p-4 bg-black border border-gold rounded text-center"><p class="text-xs silver-text">ريسيل</p><p class="text-xl font-bold">${units.filter(u=>u.type==='resale').length}</p></div>
            <div class="p-4 bg-black border border-silver rounded text-center"><p class="text-xs silver-text">برايمري</p><p class="text-xl font-bold">${units.filter(u=>u.type==='primary').length}</p></div>
            <div class="p-4 bg-black border border-white rounded text-center"><p class="text-xs silver-text">إيجار</p><p class="text-xl font-bold">${units.filter(u=>u.type==='rentals').length}</p></div>
            <div class="p-4 bg-black border border-green-600 rounded text-center"><p class="text-xs silver-text">نقرات واتساب</p><p class="text-xl font-bold">${units.reduce((a,b)=>a+b.waClicks,0)}</p></div>
        `;
    }
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function closeModal() { document.getElementById('unitModal').style.display = 'none'; }

// 7. ملء الصفحات الأخرى
function renderAbout() {
    document.getElementById('about').innerHTML = `
        <div class="max-w-3xl mx-auto space-y-10">
            <div class="text-center"><h2 class="text-3xl gold-text mb-4">من نحن</h2><p class="text-lg leading-relaxed">${aboutData.whoUs}</p></div>
            <div class="text-center"><h2 class="text-3xl gold-text mb-4">رؤيتنا</h2><p class="text-lg leading-relaxed">${aboutData.vision}</p></div>
            <div class="text-center"><h2 class="text-3xl gold-text mb-4">فريق العمل</h2><p class="text-lg leading-relaxed">${aboutData.team}</p></div>
        </div>`;
}

function renderPartners() {
    document.getElementById('partners-grid').innerHTML = partners.map(p => `
        <div class="p-4 border border-gray-800 text-center rounded bg-zinc-900 hover:border-gold transition">
            <div class="h-12 w-12 bg-gold/10 rounded-full mx-auto mb-2 flex items-center justify-center"><i class="fa fa-handshake gold-text"></i></div>
            <p class="font-bold text-sm">${p}</p>
        </div>`).join('');
}

function renderAreas() {
    document.getElementById('areas-grid').innerHTML = areas.map(a => `
        <div class="p-8 border border-gray-800 text-center rounded bg-zinc-900 hover:border-silver transition">
            <i class="fa fa-map-marker-alt gold-text text-2xl mb-4"></i>
            <h3 class="text-xl font-bold">${a}</h3>
        </div>`).join('');
}

// تشغيل الفلاتر والسيرش
document.getElementById('globalSearch').addEventListener('input', renderUnits);
window.clearFilters = () => {
    document.getElementById('filterPrice').value = '';
    document.getElementById('filterRooms').value = '';
    document.getElementById('filterZone').value = '';
    renderUnits();
};

window.onload = () => {
    // ملء قائمة المناطق في الفلتر تلقائياً
    const zoneSelect = document.getElementById('filterZone');
    areas.forEach(a => zoneSelect.innerHTML += `<option value="${a}">${a}</option>`);
    showTab('home');
};
