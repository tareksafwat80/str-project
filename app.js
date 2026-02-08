// مصفوفة الوحدات (تقدر تزود فيها براحتك)
const inventory = [
    { code: "4001", zone: "B12", area: "78", status: "Instant", view: "North-facing Street View", price: "2,570,000", notes: "Paid + Over. Original contract 1.7M" },
    { code: "4002", zone: "B14", area: "67", status: "2028", view: "Garden View", price: "866,000", notes: "Studio with private garden" },
    { code: "70011", zone: "B2", area: "98", status: "Instant", view: "Garden view near mosque", price: "2,290,000", notes: "Special finishing including kitchen" }
];

// الترجمات
let currentLang = 'ar';
const translations = {
    ar: {
        home: "الرئيسية", about: "عن الشركة", units: "الوحدات",
        hero: "نخبة العقارات في مدينتي - ري سيل بأفضل الأسعار",
        aboutTitle: "عن شركة STR",
        aboutText: "تأسست شركة Summit Team Real Estate (STR) لتكون القمة في تقديم الخدمات العقارية المتكاملة بمدينة مدينتي. نحن نركز طاقتنا وخبرتنا داخل مدينتي لنقدم لعملائنا أدق التفاصيل حول كل منطقة.",
        inventory: "المخزون المتاح", search: "ابحث بالكود أو المنطقة..."
    },
    en: {
        home: "Home", about: "About", units: "Inventory",
        hero: "Premium Madinaty Real Estate - Resale at Best Prices",
        aboutTitle: "About STR",
        aboutText: "STR was established to be the summit of real estate services in Madinaty. We focus our expertise to provide clients with accurate details across all zones.",
        inventory: "Available Inventory", search: "Search by Code or Zone..."
    }
};

function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.getElementById('mainHtml').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('mainHtml').lang = currentLang;
    updateUI();
}

function updateUI() {
    const t = translations[currentLang];
    document.getElementById('nav-home').innerText = t.home;
    document.getElementById('nav-about').innerText = t.about;
    document.getElementById('nav-units').innerText = t.units;
    document.getElementById('hero-desc').innerText = t.hero;
    document.getElementById('about-title').innerText = t.aboutTitle;
    document.getElementById('about-text').innerHTML = t.aboutText;
    document.getElementById('units-title').innerHTML = t.inventory;
    document.getElementById('searchInput').placeholder = t.search;
    document.getElementById('langBtn').innerText = currentLang === 'ar' ? 'EN' : 'AR';
    renderUnits(inventory);
}

function renderUnits(data) {
    const grid = document.getElementById('units-grid');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    grid.innerHTML = data.map(u => `
        <div class="bg-[#111] rounded-3xl border border-gray-900 overflow-hidden card-hover transition-all cursor-pointer relative" onclick="openModal('${u.code}')">
            ${isAdmin ? `<div class="absolute top-2 left-2 z-10 bg-red-600 text-white text-[8px] px-2 py-1 rounded cursor-help" title="Admin Mode">DELETE</div>` : ''}
            <div class="relative h-64 overflow-hidden">
                <img src="${u.code}/1.jpg" onerror="this.src='Str Black & Gold Logo 2.jpg'" class="w-full h-full object-cover opacity-80">
                <div class="absolute top-4 right-4 bg-black/80 px-4 py-1 rounded-full text-[10px] gold-text font-bold">#${u.code}</div>
            </div>
            <div class="p-6 text-right">
                <h3 class="text-2xl font-bold gold-text mb-2">${u.price} <span class="text-xs text-white">EGP</span></h3>
                <p class="text-gray-500 text-sm mb-4">${u.view}</p>
                <div class="flex justify-between border-t border-gray-800 pt-4 text-xs text-gray-400">
                    <span>${u.area} m²</span>
                    <span>Zone: ${u.zone}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterUnits() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const res = inventory.filter(u => u.code.toLowerCase().includes(q) || u.zone.toLowerCase().includes(q));
    renderUnits(res);
}

function openModal(code) {
    const u = inventory.find(item => item.code === code);
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <button onclick="closeModal()" class="absolute top-4 right-4 text-3xl text-gray-500">&times;</button>
        <div class="grid md:grid-cols-2 gap-10 text-right">
            <div>
                <h2 class="text-4xl font-bold gold-text italic mb-6">CODE #${u.code}</h2>
                <div class="space-y-4 text-lg border-b border-gray-900 pb-6 text-white">
                    <p><span class="text-gray-500">Zone:</span> ${u.zone}</p>
                    <p><span class="text-gray-500">Area:</span> ${u.area} m²</p>
                    <p><span class="text-gray-500">Status:</span> ${u.status}</p>
                </div>
            </div>
            <div class="bg-[#121212] p-8 rounded-3xl border border-gray-800">
                <p class="text-3xl font-bold gold-text mb-6">${u.price} EGP</p>
                <p class="text-gray-400 italic mb-8 border-r-4 border-gold-text pr-4">"${u.notes}"</p>
                <a href="https://wa.me/201159333060?text=I am interested in Unit Code: ${u.code}" target="_blank" class="block w-full gold-bg text-black text-center py-4 rounded-xl font-bold">WHATSAPP NOW</a>
            </div>
        </div>
    `;
    document.getElementById('unitModal').style.display = 'block';
}

function closeModal() { document.getElementById('unitModal').style.display = 'none'; }
function openLogin() { document.getElementById('loginModal').style.display = 'flex'; }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }

function checkAdmin() {
    const pass = document.getElementById('adminPass').value;
    if (pass === "str2025") {
        localStorage.setItem('isAdmin', 'true');
        document.getElementById('adminPanel').classList.remove('hidden');
        closeLogin();
        renderUnits(inventory);
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
}

function logoutAdmin() {
    localStorage.removeItem('isAdmin');
    document.getElementById('adminPanel').classList.add('hidden');
    renderUnits(inventory);
}

window.onload = () => {
    updateUI();
    if(localStorage.getItem('isAdmin') === 'true') document.getElementById('adminPanel').classList.remove('hidden');
};
