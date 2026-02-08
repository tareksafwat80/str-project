// بيانات الشركة الأصلية
const aboutData = {
    vision: "تقديم أفضل قيمة مقابل أفضل سعر بالدمج بين عنصري الجودة والتميز، وتوفير كافة متطلبات عملائنا وصولاً لراحتهم ورضاهم.",
    whoUs: "نحن شركة رائدة وناشئة بقوة، متخصصون في التسويق والاستثمار العقاري بالسوق المصري، ونمتلك خبرة واسعة في تلبية احتياجات العملاء بأرقى المناطق السكنية.",
    team: "يتولى إدارة الشركة نخبة مميزة من أصحاب الكفاءات والخبرات المتنوعة في مصر والوطن العربي، مما يضمن احترافية التعامل ودقة التنفيذ.",
};

const partners = ["طلعت مصطفى", "إعمار", "سوديك", "نيو جيزة", "ماونتن فيو", "بالم هيلز", "أورا", "سيتي إيدج", "هايد بارك", "صبور", "مصر إيطاليا", "أوراسكوم", "مراسي", "لافيستا", "فاي", "مدينتي"];
const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "العين السخنة", "الشيخ زايد"];

// المخزون والموظفين والليدز
let units = [];
let employees = [{ name: "أحمد علي", leads: 0 }, { name: "سارة حسن", leads: 0 }, { name: "محمود عبده", leads: 0 }];
let leads = [];
let notifications = [];

// توليد 30 كارت ديمو (10 لكل تبويب)
const categories = ['resale', 'primary', 'rentals'];
for(let i=0; i<30; i++) {
    const cat = categories[Math.floor(i/10)];
    units.push({
        id: i, code: (cat === 'resale' ? 7000 : (cat === 'primary' ? 8000 : 9000)) + i,
        type: cat, price: (i + 1) * 700000, zone: areas[i % areas.length],
        space: 100 + i, rooms: (i % 3) + 1, status: 'active', waClicks: 0,
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"]
    });
}

// تبديل التبويبات الرئيسية
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // تفعيل التبويب المختار
    const target = (['resale', 'primary', 'rentals'].includes(tabName)) ? 'units-section' : tabName;
    document.getElementById(target).style.display = 'block';
    
    // تفعيل الزر
    const btn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.textContent.includes(tabName === 'rentals' ? 'إيجار' : (tabName === 'primary' ? 'برايمري' : (tabName === 'resale' ? 'ريسيل' : (tabName === 'about' ? 'عن الشركة' : 'الرئيسية')))));
    if(btn) btn.classList.add('active');

    if(['resale', 'primary', 'rentals'].includes(tabName)) { window.currentUnitTab = tabName; renderUnits(); }
    if(tabName === 'about') renderAbout();
    if(tabName === 'partners') renderPartners();
    if(tabName === 'areas') renderAreas();
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const maxPrice = document.getElementById('filterPrice').value;
    const rooms = document.getElementById('filterRooms').value;
    const zone = document.getElementById('filterZone').value;

    let filtered = units.filter(u => {
        return u.type === window.currentUnitTab &&
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

// التعامل مع التواصل والـ CRM والاشعارات
function openUnit(id) {
    const u = units.find(u => u.id === id);
    document.getElementById('sliderWrapper').innerHTML = `<img src="${u.images[0]}" class="w-full h-full object-cover">`;
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = u.zone;
    document.getElementById('m-specs').innerText = `${u.rooms} غرف - ${u.space} متر`;
    document.getElementById('m-finance').innerText = u.price.toLocaleString() + " جنيه";
    document.getElementById('m-notes').innerText = "تمت إضافة هذه الوحدة حديثاً، تواصل للمعاينة.";
    document.getElementById('unitModal').style.display = 'block';

    document.getElementById('wa-btn').onclick = () => {
        // توزيع الليد
        employees.sort((a, b) => a.leads - b.leads);
        const agent = employees[0];
        agent.leads++;
        const newLead = { client: "عميل واتساب", phone: "تحت الطلب", unit: u.code, staff: agent.name, date: new Date().toLocaleDateString() };
        leads.unshift(newLead);
        
        // اشعار الموظف
        notifications.unshift({ msg: `ليد جديد (كود ${u.code}) تم تعيينه لـ ${agent.name}`, type: 'staff', time: new Date().toLocaleTimeString() });
        updateNotifyUI();
        window.open(`https://wa.me/201159333060?text=استفسار عن كود ${u.code}`);
    };
}

// وظائف الأدمن
function openAdmin() {
    if(prompt("كلمة السر:") === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        showAdminTab('inventory');
    }
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById('admin-' + tab).classList.remove('hidden');
    if(tab === 'inventory') renderInventoryTable();
    if(tab === 'crm') renderCRMTable();
}

function renderInventoryTable() {
    const tbody = document.getElementById('inventoryTable');
    tbody.innerHTML = units.map(u => `
        <tr class="border-b border-gray-800">
            <td class="p-4">${u.code}</td><td class="p-4">${u.zone}</td><td class="p-4">${u.price.toLocaleString()}</td>
            <td class="p-4"><span class="bg-green-900 px-2 py-1 rounded text-[10px]">${u.status}</span></td>
            <td class="p-4 flex gap-2"><button class="text-blue-500">تعديل</button><button class="text-red-500">حذف</button></td>
        </tr>
    `).join('');
}

function renderCRMTable() {
    const tbody = document.getElementById('crmTable');
    tbody.innerHTML = leads.map(l => `
        <tr class="border-b border-gray-800">
            <td class="p-4">${l.client}</td><td class="p-4">${l.phone}</td><td class="p-4">${l.unit}</td>
            <td class="p-4 gold-text">${l.staff}</td><td class="p-4 text-gray-500">${l.date}</td>
        </tr>
    `).join('');
}

// الاشعارات
function toggleNotify() { document.getElementById('notifyBox').classList.toggle('hidden'); }
function updateNotifyUI() {
    document.getElementById('notifyCount').innerText = notifications.length;
    document.getElementById('notifyList').innerHTML = notifications.map(n => `
        <div class="bg-black p-3 rounded-lg border-l-4 border-gold">
            <p class="font-bold">${n.msg}</p><span class="text-gray-600 text-[10px]">${n.time}</span>
        </div>
    `).join('');
}

// رندر المحتوى الثابت
function renderAbout() {
    document.getElementById('about').innerHTML = `<div class="max-w-4xl mx-auto space-y-12 text-center">
        <div class="bg-zinc-900 p-8 rounded-3xl border border-gray-800"><h2 class="text-3xl gold-text mb-4">من نحن</h2><p>${aboutData.whoUs}</p></div>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-zinc-900 p-8 rounded-3xl border border-gray-800"><h2 class="text-2xl gold-text mb-4">رؤيتنا</h2><p>${aboutData.vision}</p></div>
            <div class="bg-zinc-900 p-8 rounded-3xl border border-gray-800"><h2 class="text-2xl gold-text mb-4">الفريق</h2><p>نخبة من الخبراء في مصر والوطن العربي.</p></div>
        </div></div>`;
}

function renderPartners() {
    document.getElementById('partners').innerHTML = `<h2 class="text-3xl gold-text text-center mb-10">شركاء النجاح</h2><div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${partners.map(p => `<div class="p-4 bg-zinc-900 border border-gray-800 text-center rounded-xl"><div class="h-10 w-10 bg-gold/10 rounded-full mx-auto mb-2"></div><p class="text-sm">${p}</p></div>`).join('')}
    </div>`;
}

function renderAreas() {
    document.getElementById('areas').innerHTML = `<h2 class="text-3xl gold-text text-center mb-10">مناطق عملنا</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${areas.map(a => `<div class="p-10 bg-zinc-900 border border-gray-800 text-center rounded-xl hover:border-gold transition"><i class="fa fa-map-marker-alt gold-text mb-4 text-2xl"></i><p class="text-xl font-bold">${a}</p></div>`).join('')}
    </div>`;
}

// Initial
window.onload = () => {
    const zs = document.getElementById('filterZone');
    zs.innerHTML = '<option value="">كل المناطق</option>' + areas.map(a => `<option value="${a}">${a}</option>`).join('');
    showTab('home');
};
function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function closeUnit() { document.getElementById('unitModal').style.display = 'none'; }
function clearFilters() {
    document.getElementById('filterPrice').value = ''; document.getElementById('filterRooms').value = ''; document.getElementById('filterZone').value = '';
    renderUnits();
}
