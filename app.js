// بيانات الشركة الكاملة
const aboutData = {
    vision: "تقديم أفضل قيمة مقابل أفضل سعر بالدمج بين عنصري الجودة والتميز، وتوفير كافة متطلبات عملائنا وصولاً لراحتهم ورضاهم.",
    whoUs: "نحن شركة رائدة وناشئة بقوة، متخصصون في التسويق والاستثمار العقاري بالسوق المصري، ونمتلك خبرة واسعة في تلبية احتياجات العملاء بأرقى المناطق السكنية.",
    team: "يتولى إدارة الشركة نخبة مميزة من أصحاب الكفاءات والخبرات المتنوعة في مصر والوطن العربي، مما يضمن احترافية التعامل ودقة التنفيذ.",
    message: "نلتزم بتوفير حلول عقارية مبتكرة تضمن أعلى عائد استثماري لعملائنا وأفضل تجربة سكنية فندقية."
};

const partners = ["طلعت مصطفى", "إعمار", "سوديك", "نيو جيزة", "ماونتن فيو", "بالم هيلز", "أورا", "سيتي إيدج", "هايد بارك", "صبور", "مصر إيطاليا", "أوراسكوم", "مراسي", "لافيستا", "فاي", "مدينتي"];
const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "العين السخنة", "الشيخ زايد"];

// توليد داتا ديمو (30 وحدة)
let units = [];
const categories = ['resale', 'primary', 'rentals'];
for(let i=0; i<30; i++) {
    const cat = categories[Math.floor(i/10)];
    units.push({
        id: i,
        code: (cat === 'resale' ? 7000 : (cat === 'primary' ? 8000 : 9000)) + i,
        type: cat,
        price: (i + 1) * 800000,
        zone: areas[i % areas.length],
        space: 90 + (i * 10),
        rooms: (i % 3) + 1,
        view: "إطلالة مميزة",
        model: "نموذج " + (i + 1),
        waClicks: Math.floor(Math.random() * 20),
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"]
    });
}

let currentTab = 'home';
let currentUnitTab = 'resale';

function showTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // تحديد الزر النشط
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.innerText === event.currentTarget.innerText);
    if(activeBtn) activeBtn.classList.add('active');

    if(['resale', 'primary', 'rentals'].includes(tabName)) {
        currentUnitTab = tabName;
        document.getElementById('units-section').style.display = 'block';
        renderUnits();
    } else {
        document.getElementById(tabName).style.display = 'block';
        if(tabName === 'about') renderAbout();
        if(tabName === 'partners') renderPartners();
        if(tabName === 'areas') renderAreas();
    }
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const maxPrice = document.getElementById('filterPrice').value;
    const rooms = document.getElementById('filterRooms').value;
    const zone = document.getElementById('filterZone').value;

    let filtered = units.filter(u => {
        return u.type === currentUnitTab &&
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
                <p class="text-lg font-bold">${u.price.toLocaleString()} EGP</p>
                <p class="text-[10px] silver-text">${u.rooms} غرف | ${u.space} م²</p>
            </div>
        </div>
    `).join('');
}

function openUnit(id) {
    const u = units.find(u => u.id === id);
    document.getElementById('sliderWrapper').innerHTML = `<img src="${u.images[0]}" class="w-full h-full object-cover">`;
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = u.zone + " - " + u.model;
    document.getElementById('m-specs').innerText = `${u.rooms} غرف - ${u.space} متر - ${u.view}`;
    document.getElementById('m-finance').innerText = `السعر الإجمالي: ${u.price.toLocaleString()} جنيه`;
    document.getElementById('m-dates').innerText = "تاريخ العرض: 2026";
    document.getElementById('m-notes').innerText = "هذه الوحدة متاحة للاستلام الفوري، تشطيب الترا سوبر لوكس، قريبة من الخدمات.";
    
    document.getElementById('unitModal').style.display = 'block';
    document.getElementById('wa-btn').onclick = () => window.open(`https://wa.me/201159333060?text=استفسار عن كود ${u.code}`);
}

function closeModal() { document.getElementById('unitModal').style.display = 'none'; }

function openAdmin() {
    const p = prompt("كلمة السر:");
    if(p === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        const stats = document.getElementById('adminStats');
        stats.innerHTML = `
            <div class="p-6 bg-black border border-gold rounded-xl text-center"><p class="silver-text text-xs">ريسيل</p><p class="text-2xl font-bold">${units.filter(u=>u.type==='resale').length}</p></div>
            <div class="p-6 bg-black border border-silver rounded-xl text-center"><p class="silver-text text-xs">برايمري</p><p class="text-2xl font-bold">${units.filter(u=>u.type==='primary').length}</p></div>
            <div class="p-6 bg-black border border-white rounded-xl text-center"><p class="silver-text text-xs">إيجار</p><p class="text-2xl font-bold">${units.filter(u=>u.type==='rentals').length}</p></div>
            <div class="p-6 bg-black border border-green-600 rounded-xl text-center"><p class="silver-text text-xs">واتساب</p><p class="text-2xl font-bold">${units.reduce((a,b)=>a+b.waClicks,0)}</p></div>
        `;
    }
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }

function renderAbout() {
    document.getElementById('about').innerHTML = `
        <div class="max-w-4xl mx-auto space-y-12">
            <div class="bg-zinc-900 p-8 rounded-2xl border border-gray-800 text-center"><h2 class="text-3xl gold-text mb-4">من نحن</h2><p>${aboutData.whoUs}</p></div>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-zinc-900 p-8 rounded-2xl border border-gray-800 text-center"><h2 class="text-2xl gold-text mb-4">رؤيتنا</h2><p>${aboutData.vision}</p></div>
                <div class="bg-zinc-900 p-8 rounded-2xl border border-gray-800 text-center"><h2 class="text-2xl gold-text mb-4">الفريق</h2><p>${aboutData.team}</p></div>
            </div>
        </div>`;
}

function renderPartners() {
    document.getElementById('partners').innerHTML = `
        <h2 class="text-3xl gold-text text-center mb-10">شركاء النجاح</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${partners.map(p => `<div class="p-4 bg-zinc-900 border border-gray-800 text-center rounded-lg hover:border-gold transition"><div class="h-10 w-10 bg-gold/10 rounded-full mx-auto mb-2"></div><p class="text-sm">${p}</p></div>`).join('')}
        </div>`;
}

function renderAreas() {
    document.getElementById('areas').innerHTML = `
        <h2 class="text-3xl gold-text text-center mb-10">مناطق عملنا</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${areas.map(a => `<div class="p-10 bg-zinc-900 border border-gray-800 text-center rounded-xl hover:border-gold transition"><i class="fa fa-map-marker-alt gold-text mb-4 text-2xl"></i><p class="text-xl font-bold">${a}</p></div>`).join('')}
        </div>`;
}

// تهيئة
document.getElementById('globalSearch').addEventListener('input', renderUnits);
window.clearFilters = () => {
    document.getElementById('filterPrice').value = ''; document.getElementById('filterRooms').value = ''; document.getElementById('filterZone').value = '';
    renderUnits();
};
window.onload = () => {
    const zs = document.getElementById('filterZone');
    zs.innerHTML = '<option value="">كل المناطق</option>' + areas.map(a => `<option value="${a}">${a}</option>`).join('');
};
