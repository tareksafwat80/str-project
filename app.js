// مصفوفة الوحدات (ضع هنا بياناتك الحقيقية)
const inventory = [
    { code: "4001", zone: "B12", area: "78", status: "Instant", view: "North-facing Street View", price: "2,570,000", notes: "Paid + Over. Original contract 1.7M" },
    { code: "4002", zone: "B14", area: "67", status: "2028", view: "Garden View", price: "866,000", notes: "Studio with private garden" }
];

// نظام الترجمة
let currentLang = 'ar';
const translations = {
    ar: {
        home: "الرئيسية", about: "عن الشركة", units: "الوحدات المتاحة",
        hero: "نخبة العقارات في مدينتي - ري سيل بأفضل الأسعار",
        aboutTitle: "عن شركة STR",
        aboutText: "شركة Summit Team Real Estate (STR) هي شريكك الموثوق في السوق العقاري بمدينتي...",
        inventory: "المخزون المتاح", search: "ابحث بالكود أو المنطقة...",
        price: "السعر", area: "المساحة", zone: "المنطقة"
    },
    en: {
        home: "Home", about: "About Us", units: "Inventory",
        hero: "Premium Madinaty Real Estate - Resale at Best Prices",
        aboutTitle: "About STR",
        aboutText: "Summit Team Real Estate (STR) is your trusted partner in Madinaty...",
        inventory: "Available Inventory", search: "Search by code or zone...",
        price: "Price", area: "Area", zone: "Zone"
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
    document.getElementById('about-text').innerText = t.aboutText;
    document.getElementById('langBtn').innerText = currentLang === 'ar' ? 'EN' : 'AR';
    renderUnits(inventory);
}

function renderUnits(data) {
    const grid = document.getElementById('units-grid');
    grid.innerHTML = data.map(u => `
        <div class="bg-[#111] rounded-3xl border border-gray-900 overflow-hidden group hover:border-gold-text transition duration-500 cursor-pointer" onclick="openModal('${u.code}')">
            <div class="relative h-64 overflow-hidden">
                <img src="${u.code}/1.jpg" onerror="this.src='Str Black & Gold Logo 2.jpg'" class="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-80">
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

function openModal(code) {
    const u = inventory.find(item => item.code === code);
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div class="grid md:grid-cols-2 gap-10 text-right">
            <div>
                <h2 class="text-4xl font-bold gold-text italic mb-6">CODE #${u.code}</h2>
                <div class="space-y-4 text-lg border-b border-gray-900 pb-6">
                    <p><span class="text-gray-500">Zone:</span> ${u.zone}</p>
                    <p><span class="text-gray-500">Area:</span> ${u.area} m²</p>
                    <p><span class="text-gray-500">Status:</span> ${u.status}</p>
                </div>
            </div>
            <div class="bg-[#121212] p-8 rounded-3xl border border-gray-800">
                <p class="text-3xl font-bold gold-text mb-6">${u.price} EGP</p>
                <p class="text-gray-400 italic mb-8 border-r-4 border-gold-text pr-4">${u.notes}</p>
                <a href="https://wa.me/201159333060?text=Code:${u.code}" class="block w-full gold-bg text-black text-center py-4 rounded-xl font-bold shadow-xl">WHATSAPP NOW</a>
            </div>
        </div>
    `;
    document.getElementById('unitModal').style.display = 'block';
}

function closeModal() { document.getElementById('unitModal').style.display = 'none'; }
window.onload = updateUI;
