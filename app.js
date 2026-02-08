// بيانات الموقع
let siteContent = {
    slogan: "حيث تؤدي كل خطوة إلى القمة",
    whoUs: "نحن شركة رائدة وناشئة بقوة، متخصصون في التسويق والاستثمار العقاري بالسوق المصري، ونمتلك خبرة واسعة في تلبية احتياجات العملاء بأرقى المناطق السكنية.",
};

const partnersData = [
    { name: "طلعت مصطفى", logo: "TMG", desc: "المطور العقاري الأول في مصر، صاحب مدينتي والرحاب والشروق." },
    { name: "إعمار مصر", logo: "EMAAR", desc: "رائدة التطوير العالمي، صاحبة مشروعات ميفيدا، مراسي، وأبتاون كايرو." },
    { name: "سوديك", logo: "SODIC", desc: "واحدة من أرقى الشركات العقارية في مصر، التميز في الشيخ زايد والقاهرة الجديدة." }
];

const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "الشيخ زايد"];

// المخزون والموظفين والليدز
let units = [];
let employees = [{ name: "أحمد علي", leads: 0 }, { name: "سارة حسن", leads: 0 }, { name: "محمود عبده", leads: 0 }];
let leads = [];
let notifications = [];

// توليد وحدات (بيانات كاملة)
for(let i=0; i<30; i++) {
    const type = i < 10 ? 'resale' : (i < 20 ? 'primary' : 'rentals');
    const price = (i + 1) * 1200000;
    units.push({
        id: i, code: (type === 'resale' ? 7000 : (type === 'primary' ? 8000 : 9000)) + i,
        type: type, price: price, zone: areas[i % areas.length],
        space: 100 + (i * 5), rooms: (i % 3) + 1,
        downPayment: price * 0.1, installments: "8 سنوات", status: 'active',
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"]
    });
}

// تبديل التبويبات
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const target = (['resale', 'primary', 'rentals'].includes(tabName)) ? 'units-section' : tabName;
    document.getElementById(target).style.display = 'block';
    
    if(['resale', 'primary', 'rentals'].includes(tabName)) { window.currentUnitTab = tabName; renderUnits(); }
    if(tabName === 'about') renderAbout();
    if(tabName === 'partners') renderPartners();
    if(tabName === 'areas') renderAreas();
    if(tabName === 'home') document.getElementById('site-slogan').innerText = siteContent.slogan;
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const filtered = units.filter(u => u.type === window.currentUnitTab && (u.code.toString().includes(search) || u.zone.includes(search)));
    
    grid.innerHTML = filtered.map(u => `
        <div class="bg-zinc-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-gold transition" onclick="openUnit(${u.id})">
            <img src="${u.images[0]}" class="h-44 w-full object-cover">
            <div class="p-4">
                <div class="flex justify-between text-[10px] gold-text mb-2 font-bold"><span>CODE: ${u.code}</span><span>${u.zone}</span></div>
                <p class="text-xl font-bold mb-1">${u.price.toLocaleString()} EGP</p>
                <p class="text-xs text-gray-400">${u.rooms} غرف | ${u.space} م²</p>
            </div>
        </div>
    `).join('');
}

// التواصل والـ CRM
function openUnit(id) {
    const u = units.find(u => u.id === id);
    document.getElementById('sliderWrapper').innerHTML = `<img src="${u.images[0]}" class="w-full h-full object-cover rounded-t-2xl">`;
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = u.zone;
    document.getElementById('m-specs').innerText = `${u.rooms} غرف - ${u.space} متر`;
    document.getElementById('m-finance').innerText = u.price.toLocaleString() + " ج.م";
    document.getElementById('m-payment').innerText = `مقدم: ${u.downPayment.toLocaleString()} | قسط: ${u.installments}`;
    document.getElementById('unitModal').style.display = 'block';

    document.getElementById('wa-btn').onclick = () => {
        // توزيع الليد
        employees.sort((a, b) => a.leads - b.leads);
        const agent = employees[0];
        agent.leads++;
        leads.unshift({ client: "عميل مهتم", unit: u.code, staff: agent.name, date: new Date().toLocaleDateString(), status: "جديد" });
        
        // إشعار
        addNotification(`ليد جديد للوحدة ${u.code} تم تحويله لـ ${agent.name}`, 'staff');
        window.open(`https://wa.me/201159333060?text=استفسار عن وحدة كود ${u.code}`);
    };
}

// الإدارة
function openAdmin() {
    if(prompt("كلمة السر:") === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        document.getElementById('edit-slogan').value = siteContent.slogan;
        document.getElementById('edit-whoUs').value = siteContent.whoUs;
        showAdminTab('inventory');
    }
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.admin-sidebar-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('admin-' + tab).classList.remove('hidden');
    // إضافة الـ active للزرار
    if(tab === 'inventory') renderInventoryTable();
    if(tab === 'crm') renderCRMTable();
}

function saveSettings() {
    siteContent.slogan = document.getElementById('edit-slogan').value;
    siteContent.whoUs = document.getElementById('edit-whoUs').value;
    addNotification("تم تحديث نصوص الموقع بنجاح", "system");
    alert("تم الحفظ بنجاح!");
}

function renderInventoryTable() {
    const tbody = document.getElementById('inventoryTable');
    tbody.innerHTML = units.map(u => `
        <tr class="hover:bg-zinc-800/50">
            <td class="p-4 gold-text font-bold">${u.code}</td>
            <td class="p-4">${u.zone}</td>
            <td class="p-4">${u.space}م</td>
            <td class="p-4 font-bold">${u.price.toLocaleString()}</td>
            <td class="p-4 text-green-500">${u.downPayment.toLocaleString()}</td>
            <td class="p-4 silver-text">${u.installments}</td>
            <td class="p-4"><button class="text-blue-500 hover:underline">تعديل</button></td>
        </tr>
    `).join('');
}

function renderCRMTable() {
    const tbody = document.getElementById('crmTable');
    tbody.innerHTML = leads.map(l => `
        <tr class="border-b border-gray-800">
            <td class="p-4">عميل واتساب</td><td class="p-4 font-bold">${l.unit}</td>
            <td class="p-4 gold-text font-bold">${l.staff}</td>
            <td class="p-4"><span class="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">${l.status}</span></td>
            <td class="p-4 text-gray-500">${l.date}</td>
        </tr>
    `).join('');
    
    document.getElementById('crmStats').innerHTML = employees.map(e => `
        <div class="bg-zinc-900 p-6 rounded-2xl border border-gray-800 text-center">
            <p class="silver-text text-xs mb-1">${e.name}</p>
            <p class="text-2xl font-bold gold-text">${e.leads} <span class="text-xs text-white">ليد</span></p>
        </div>
    `).join('');
}

// الإشعارات
function addNotification(msg, type) {
    notifications.unshift({ msg, type, time: new Date().toLocaleTimeString() });
    updateNotifyUI();
}

function updateNotifyUI() {
    document.getElementById('notifyCount').innerText = notifications.length;
    document.getElementById('notifyList').innerHTML = notifications.map(n => `
        <div class="bg-black p-3 rounded-xl border-r-4 ${n.type === 'staff' ? 'border-blue-500' : 'border-gold'}">
            <p class="text-white font-bold">${n.msg}</p><span class="text-gray-600">${n.time}</span>
        </div>
    `).join('');
}

// عرض الصفحات الثابتة
function renderAbout() {
    document.getElementById('about').innerHTML = `
        <div class="max-w-4xl mx-auto space-y-12 text-center">
            <div class="bg-zinc-900 p-10 rounded-3xl border border-gray-800">
                <h2 class="text-4xl gold-text mb-6 font-bold italic">من نحن</h2>
                <p class="text-lg leading-relaxed silver-text">${siteContent.whoUs}</p>
            </div>
        </div>`;
}

function renderPartners() {
    document.getElementById('partners').innerHTML = `
        <h2 class="text-4xl gold-text text-center mb-16 font-bold italic">شركاء النجاح</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${partnersData.map(p => `
                <div class="bg-zinc-900 p-8 rounded-3xl border border-gray-800 text-center hover:border-gold transition">
                    <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                        <span class="gold-text font-bold">${p.logo}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4">${p.name}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">${p.desc}</p>
                </div>
            `).join('')}
        </div>`;
}

function renderAreas() {
    document.getElementById('areas').innerHTML = `<h2 class="text-4xl gold-text text-center mb-10 italic">مناطق انتشارنا</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${areas.map(a => `<div class="p-12 bg-zinc-900 border border-gray-800 text-center rounded-2xl hover:border-gold transition shadow-xl"><i class="fa fa-map-marked-alt gold-text mb-6 text-3xl"></i><p class="text-2xl font-bold">${a}</p></div>`).join('')}
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
function toggleNotify() { document.getElementById('notifyBox').classList.toggle('hidden'); }
function clearFilters() {
    document.getElementById('filterPrice').value = ''; document.getElementById('filterRooms').value = ''; document.getElementById('filterZone').value = '';
    renderUnits();
}
