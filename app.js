// --- 1. Global State & Data ---
let currentLang = 'ar';
let siteContent = {
    slogan: "حيث تؤدي كل خطوة إلى القمة",
    whoUs: "نحن شركة رائدة وناشئة بقوة، متخصصون في التسويق والاستثمار العقاري بالسوق المصري، ونمتلك خبرة واسعة في تلبية احتياجات العملاء بأرقى المناطق السكنية.",
    vision: "تقديم أفضل قيمة مقابل أفضل سعر بالدمج بين عنصري الجودة والتميز."
};

const translations = {
    ar: {
        nav_home: "الرئيسية", nav_about: "عن الشركة", nav_partners: "شركاؤنا", nav_areas: "مناطق عملنا",
        nav_resale: "ريسيل", nav_primary: "برايمري", nav_rentals: "إيجار فندقي", nav_admin: "الإدارة",
        notifications: "التنبيهات", lang_btn: "English"
    },
    en: {
        nav_home: "Home", nav_about: "About Us", nav_partners: "Partners", nav_areas: "Locations",
        nav_resale: "Resale", nav_primary: "Primary", nav_rentals: "Rentals", nav_admin: "Admin",
        notifications: "Notifications", lang_btn: "العربية"
    }
};

const partnersData = [
    { name: "مجموعة طلعت مصطفى", logo: "TMG", desc: "أكبر مطور عقاري في مصر والشرق الأوسط، مطور مدينتي والرحاب." },
    { name: "إعمار مصر", logo: "EMAAR", desc: "صاحبة مشروعات ميفيدا، مراسي، وأبتاون كايرو، رمز الفخامة العالمي." },
    { name: "سوديك", logo: "SODIC", desc: "التميز في التطوير العقاري بالشيخ زايد والقاهرة الجديدة." },
    { name: "أورا العقارية", logo: "ORA", desc: "مشروعات المهندس نجيب ساويرس، زد وزيد إيست." }
];

const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "الشيخ زايد", "العين السخنة"];

// --- 2. Units & CRM System ---
let units = [];
let employees = [
    { name: "أحمد علي", leads: 0, avatar: "A" },
    { name: "سارة حسن", leads: 0, avatar: "S" },
    { name: "محمود عبده", leads: 0, avatar: "M" },
    { name: "نورهان كريم", leads: 0, avatar: "N" }
];
let leads = [];
let notifications = [];

// توليد بيانات وهمية ضخمة (30 وحدة) للبدء
const categories = ['resale', 'primary', 'rentals'];
for (let i = 0; i < 30; i++) {
    const cat = categories[i % 3];
    const basePrice = (i + 1) * 850000;
    units.push({
        id: i,
        code: (cat === 'resale' ? 7000 : (cat === 'primary' ? 8000 : 9000)) + i,
        type: cat,
        price: basePrice,
        downPayment: basePrice * 0.1,
        installments: (i % 5 + 3) + " سنوات",
        zone: areas[i % areas.length],
        space: 90 + (i * 8),
        rooms: (i % 3) + 1,
        status: 'متاح',
        images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"]
    });
}

// --- 3. Core Functions ---

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.getElementById('langText').innerText = translations[currentLang].lang_btn;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[currentLang][key];
    });
    
    // إعادة رندر المحتوى باللغة الجديدة (إذا كان يدعم الترجمة)
    if (currentLang === 'en') {
        document.getElementById('site-slogan').innerText = "Where every step leads to the summit";
    } else {
        document.getElementById('site-slogan').innerText = siteContent.slogan;
    }
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const targetId = (['resale', 'primary', 'rentals'].includes(tabName)) ? 'units-section' : tabName;
    document.getElementById(targetId).classList.add('active-tab');
    
    // تفعيل الزر المناسب
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(tabName.toLowerCase()) || 
           (tabName === 'rentals' && btn.innerText.includes('إيجار'))) {
            btn.classList.add('active');
        }
    });

    if (['resale', 'primary', 'rentals'].includes(tabName)) {
        window.currentUnitTab = tabName;
        renderUnits();
    }
    
    if (tabName === 'about') renderAbout();
    if (tabName === 'partners') renderPartners();
    if (tabName === 'areas') renderAreas();
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const zoneF = document.getElementById('filterZone').value;
    const priceF = document.getElementById('filterPrice').value;
    const roomsF = document.getElementById('filterRooms').value;

    let filtered = units.filter(u => {
        return u.type === window.currentUnitTab &&
               (u.code.toString().includes(search) || u.zone.includes(search)) &&
               (!zoneF || u.zone === zoneF) &&
               (!priceF || u.price <= priceF) &&
               (!roomsF || u.rooms == roomsF);
    });

    grid.innerHTML = filtered.map(u => `
        <div class="u-card group cursor-pointer" onclick="openUnit(${u.id})">
            <div class="relative h-56 overflow-hidden">
                <img src="${u.images[0]}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[10px] gold-text font-bold">
                    ${u.code}
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">${u.zone}</span>
                    <span class="text-green-500 text-[10px] font-bold">● ${u.status}</span>
                </div>
                <h3 class="text-xl font-bold mb-4">${u.price.toLocaleString()} EGP</h3>
                <div class="flex gap-4 text-xs text-zinc-400 border-t border-zinc-800 pt-4">
                    <span><i class="fa fa-bed gold-text ml-1"></i> ${u.rooms}</span>
                    <span><i class="fa fa-expand gold-text ml-1"></i> ${u.space} م²</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openUnit(id) {
    const u = units.find(u => u.id === id);
    const modal = document.getElementById('unitModal');
    
    document.getElementById('sliderWrapper').innerHTML = `<img src="${u.images[0]}" class="w-full h-full object-cover">`;
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').querySelector('span').innerText = u.zone;
    document.getElementById('m-space').innerText = u.space + " متر مربع";
    document.getElementById('m-rooms').innerText = u.rooms + " غرف وصالة";
    document.getElementById('m-finance').innerText = `${u.price.toLocaleString()} ج (مقدم: ${u.downPayment.toLocaleString()} ج / تقسيط ${u.installments})`;
    
    modal.style.display = 'block';

    document.getElementById('wa-btn').onclick = () => {
        // توزيع الليد تلقائياً
        employees.sort((a, b) => a.leads - b.leads);
        const agent = employees[0];
        agent.leads++;
        
        const newLead = {
            client: "مهتم بالواتساب",
            code: u.code,
            staff: agent.name,
            status: "جديد",
            date: new Date().toLocaleDateString()
        };
        leads.unshift(newLead);
        
        addNotification(`ليد جديد للوحدة ${u.code} تم تعيينه للموظف: ${agent.name}`, 'system');
        window.open(`https://wa.me/201159333060?text=استفسار عن وحدة كود ${u.code}`);
    };
}

// --- 4. Admin Panel Logic ---

function openAdmin() {
    const pass = prompt("من فضلك ادخل كلمة مرور الإدارة:");
    if (pass === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        document.getElementById('edit-slogan').value = siteContent.slogan;
        document.getElementById('edit-whoUs').value = siteContent.whoUs;
        showAdminTab('inventory');
    } else {
        alert("كلمة مرور خاطئة");
    }
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.admin-sidebar-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById('admin-' + tab).classList.remove('hidden');
    event.currentTarget.classList.add('active');
    
    if (tab === 'inventory') renderInventoryTable();
    if (tab === 'crm') renderCRMTable();
}

function renderInventoryTable() {
    const tbody = document.getElementById('inventoryTable');
    tbody.innerHTML = units.map(u => `
        <tr class="hover:bg-zinc-800/30 transition">
            <td class="p-5 font-bold gold-text">${u.code}</td>
            <td class="p-5">${u.zone}</td>
            <td class="p-5 text-zinc-500 uppercase font-bold">${u.type}</td>
            <td class="p-5">${u.space}م²</td>
            <td class="p-5 font-bold italic">${u.price.toLocaleString()}</td>
            <td class="p-5 text-green-500">${u.downPayment.toLocaleString()}</td>
            <td class="p-5"><span class="bg-green-900/30 text-green-500 px-3 py-1 rounded-full text-[10px]">${u.status}</span></td>
            <td class="p-5 flex gap-3"><button class="text-blue-500 hover:text-white transition"><i class="fa fa-edit"></i></button><button class="text-red-500 hover:text-white transition"><i class="fa fa-trash"></i></button></td>
        </tr>
    `).join('');
}

function renderCRMTable() {
    const tbody = document.getElementById('crmTable');
    tbody.innerHTML = leads.map(l => `
        <tr class="hover:bg-zinc-800/30 transition text-[11px]">
            <td class="p-5">${l.client}</td>
            <td class="p-5 gold-text font-bold">${l.code}</td>
            <td class="p-5 text-white font-bold">${l.staff}</td>
            <td class="p-5"><span class="bg-blue-900/40 text-blue-400 px-3 py-1 rounded-full">${l.status}</span></td>
            <td class="p-5 text-zinc-600">${l.date}</td>
        </tr>
    `).join('');

    const stats = document.getElementById('crmStats');
    stats.innerHTML = employees.map(e => `
        <div class="bg-zinc-900/50 p-6 rounded-[25px] border border-zinc-800 text-center">
            <div class="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center mx-auto mb-3 font-black text-xl">${e.avatar}</div>
            <p class="text-xs text-zinc-500 mb-1">${e.name}</p>
            <p class="text-2xl font-black gold-text">${e.leads} <span class="text-[10px] text-white uppercase">Leads</span></p>
        </div>
    `).join('');
}

function saveSettings() {
    siteContent.slogan = document.getElementById('edit-slogan').value;
    siteContent.whoUs = document.getElementById('edit-whoUs').value;
    alert("تم حفظ البيانات وتحديث الموقع بنجاح!");
    showTab('home');
}

// --- 5. Notifications & Static Pages ---

function addNotification(msg, type) {
    const n = { msg, type, time: new Date().toLocaleTimeString() };
    notifications.unshift(n);
    updateNotifyUI();
}

function updateNotifyUI() {
    document.getElementById('notifyCount').innerText = notifications.length;
    const list = document.getElementById('notifyList');
    list.innerHTML = notifications.map(n => `
        <div class="bg-black/50 p-4 rounded-2xl border-r-4 border-gold mb-2">
            <p class="text-xs leading-relaxed">${n.msg}</p>
            <span class="text-[9px] text-zinc-600 mt-2 block">${n.time}</span>
        </div>
    `).join('');
}

function renderAbout() {
    document.getElementById('about').innerHTML = `
        <div class="max-w-4xl mx-auto space-y-12">
            <div class="bg-zinc-900/50 p-12 rounded-[50px] border border-zinc-800 text-center">
                <h2 class="text-4xl gold-text font-black mb-8 italic">من نحن - SUMMIT TEAM</h2>
                <p class="text-xl silver-text leading-loose">${siteContent.whoUs}</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-zinc-900/50 p-10 rounded-[40px] border border-zinc-800">
                    <h3 class="gold-text font-bold text-2xl mb-4">رؤيتنا</h3>
                    <p class="text-zinc-400 leading-relaxed">${siteContent.vision}</p>
                </div>
                <div class="bg-zinc-900/50 p-10 rounded-[40px] border border-zinc-800">
                    <h3 class="gold-text font-bold text-2xl mb-4">الفريق</h3>
                    <p class="text-zinc-400 leading-relaxed">نخبة من المستشارين العقاريين بخبرة تفوق الـ 10 سنوات في السوق المصري.</p>
                </div>
            </div>
        </div>`;
}

function renderPartners() {
    document.getElementById('partners').innerHTML = `
        <div class="text-center mb-16"><h2 class="text-5xl font-black gold-text italic mb-4">شركاء النجاح</h2><p class="text-zinc-500">نتعاون مع أكبر المطورين العقاريين في مصر لنضمن لك الأفضل.</p></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${partnersData.map(p => `
                <div class="bg-zinc-900/50 p-8 rounded-[35px] border border-zinc-800 text-center hover:border-gold transition group">
                    <div class="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 border border-zinc-800">
                        <span class="gold-text font-black text-2xl">${p.logo}</span>
                    </div>
                    <h4 class="text-xl font-bold mb-3">${p.name}</h4>
                    <p class="text-xs text-zinc-500 leading-relaxed">${p.desc}</p>
                </div>
            `).join('')}
        </div>`;
}

function renderAreas() {
    document.getElementById('areas').innerHTML = `
        <div class="text-center mb-16"><h2 class="text-5xl font-black gold-text italic mb-4">نغطي كافة المناطق</h2></div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            ${areas.map(a => `
                <div class="bg-zinc-900/50 p-12 rounded-[30px] border border-zinc-800 text-center hover:bg-gold hover:text-black transition duration-500 group">
                    <i class="fa fa-map-marked-alt text-3xl mb-4 gold-text group-hover:text-black transition"></i>
                    <p class="text-xl font-black">${a}</p>
                </div>
            `).join('')}
        </div>`;
}

// --- 6. Initializers & UI Helpers ---

window.onload = () => {
    const zs = document.getElementById('filterZone');
    zs.innerHTML = '<option value="">كل المناطق</option>' + areas.map(a => `<option value="${a}">${a}</option>`).join('');
    showTab('home');
    addNotification("مرحباً بك في نظام STR الإداري. الموقع جاهز للعمل.", "system");
};

function toggleNotify() { document.getElementById('notifyBox').classList.toggle('hidden'); }
function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function closeUnit() { document.getElementById('unitModal').style.display = 'none'; }
function clearFilters() {
    document.getElementById('filterPrice').value = '';
    document.getElementById('filterRooms').value = '';
    document.getElementById('filterZone').value = '';
    renderUnits();
}
function clearNotify() { notifications = []; updateNotifyUI(); }

// غلق المودالات عند الضغط خارجها
window.onclick = function(event) {
    if (event.target == document.getElementById('adminModal')) closeAdmin();
    if (event.target == document.getElementById('unitModal')) closeUnit();
}
