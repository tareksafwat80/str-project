// بيانات الشركاء والمناطق (Placeholders)
const partnersData = Array(16).fill({ name: "شريك استراتيجي", desc: "أقوى مطور عقاري في السوق المصري لخدمتكم." });
const areasData = [
    { ar: "مدينتي", en: "Madinaty" }, { ar: "الرحاب", en: "Al Rehab" },
    { ar: "العاصمة الإدارية", en: "New Capital" }, { ar: "الساحل الشمالي", en: "North Coast" },
    { ar: "راس الحكمة", en: "Ras El Hekma" }, { ar: "القاهرة الجديدة", en: "New Cairo" },
    { ar: "العين السخنة", en: "Sokhna" }, { ar: "الشيخ زايد", en: "Zayed" }
];

// داتا الوحدات (الديمو)
let units = [];
const types = ['resale', 'primary', 'rentals'];

// توليد 30 وحدة تجريبية
for(let i=1; i<=30; i++) {
    units.push({
        id: Date.now() + i,
        code: `STR-${1000 + i}`,
        type: types[i % 3],
        price: (Math.random() * 5000000 + 1000000).toLocaleString(),
        zone: areasData[i % 8].ar,
        space: 100 + (i * 2),
        model: "نموذج " + i,
        view: "لاند سكيب",
        status: "active",
        featured: i % 10 === 0,
        waClicks: Math.floor(Math.random() * 50),
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"]
    });
}

let currentTab = 'home';
let currentPage = 1;
const perPage = 24;

function showTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // إذا كان التبويب أحد أقسام العقارات
    if(['resale', 'primary', 'rentals'].includes(tabName)) {
        document.getElementById('units-section').classList.add('active-tab');
        renderUnits();
    } else {
        document.getElementById(tabName).classList.add('active-tab');
    }
    event.currentTarget.classList.add('active');
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    let filtered = units.filter(u => u.type === currentTab && u.status === 'active');
    
    // ترتيب: المميز بالنجمة أولاً ثم الأحدث
    filtered.sort((a, b) => (b.featured - a.featured) || (b.id - a.id));

    const start = (currentPage - 1) * perPage;
    const paginated = filtered.slice(start, start + perPage);

    grid.innerHTML = paginated.map(u => `
        <div class="bg-zinc-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gold transition group cursor-pointer" onclick="openUnit(${u.id})">
            <div class="h-48 bg-cover bg-center relative" style="background-image:url('${u.images[0]}')">
                ${u.featured ? '<div class="absolute top-2 left-2 text-gold"><i class="fa fa-star"></i></div>' : ''}
            </div>
            <div class="p-4">
                <p class="text-xs gold-text mb-1">${u.zone} - ${u.code}</p>
                <h3 class="text-xl font-bold">${u.price} EGP</h3>
                <p class="text-[10px] silver-text mt-2">${u.space}م | ${u.view}</p>
            </div>
        </div>
    `).join('');
    renderPagination(filtered.length);
}

function openUnit(id) {
    const u = units.find(u => u.id === id);
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = `${u.zone} - ${u.model}`;
    document.getElementById('m-specs').innerText = `${u.space} متر - ${u.view}`;
    document.getElementById('m-finance').innerText = `السعر: ${u.price}`;
    document.getElementById('m-dates').innerText = `تاريخ الإضافة: ${new Date(u.id).toLocaleDateString('ar-EG')}`;
    
    document.getElementById('wa-btn').onclick = () => {
        u.waClicks++;
        window.open(`https://wa.me/201159333060?text=استفسار عن الوحدة كود ${u.code}`);
    };
    
    document.getElementById('unitModal').style.display = 'block';
}

function closeModal(e) {
    document.getElementById('unitModal').style.display = 'none';
}

// Admin Logic
function openAdmin() {
    const pass = prompt("كلمة المرور:");
    if(pass === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        updateAdminStats();
    }
}

function updateAdminStats() {
    const stats = document.getElementById('adminStats');
    stats.innerHTML = `
        <div class="bg-black p-4 rounded border border-gold text-center">
            <p class="text-xs silver-text">إجمالي الوحدات</p>
            <p class="text-2xl font-bold">${units.length}</p>
        </div>
        <div class="bg-black p-4 rounded border border-green-600 text-center">
            <p class="text-xs silver-text">نقرات الواتساب</p>
            <p class="text-2xl font-bold">${units.reduce((acc, curr) => acc + curr.waClicks, 0)}</p>
        </div>
        <div class="bg-black p-4 rounded border border-blue-600 text-center">
            <p class="text-xs silver-text">نشط الآن</p>
            <p class="text-2xl font-bold">${units.filter(u=>u.status==='active').length}</p>
        </div>
    `;
}

// 초기화
window.onload = () => {
    // رندر الشركاء والمناطق
    document.getElementById('partners-grid').innerHTML = partnersData.map(p => `
        <div class="bg-zinc-900 p-6 rounded-lg border border-gray-800 text-center hover:border-silver transition">
            <div class="h-16 w-16 bg-zinc-800 rounded-full mx-auto mb-4"></div>
            <p class="text-[10px] silver-text">${p.desc}</p>
        </div>
    `).join('');
};
