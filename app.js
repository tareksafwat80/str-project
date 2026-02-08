// --- 1. الحالة العامة ---
let state = {
    content: { slogan: "STR - حيث تؤدي كل خطوة إلى القمة | 2026" },
    units: [],
    leads: [],
    team: [
        { name: "المدير", user: "admin", pass: "str2026", role: "admin", leadsCount: 0 },
        { name: "Sales 1", user: "sales1", pass: "123", role: "agent", leadsCount: 0 },
        { name: "Sales 2", user: "sales2", pass: "123", role: "agent", leadsCount: 0 }
    ],
    currentUser: null,
    currentCategory: 'resale'
};

// --- 2. التشغيل المبدئي ---
function init() {
    const areas = ["مدينتي B8", "الرحاب", "العاصمة", "التجمع"];
    for (let i = 1; i <= 12; i++) {
        state.units.push({
            id: Date.now() + i,
            code: 8000 + i,
            area: areas[i % 4],
            price: 4000000 + (i * 100000),
            space: 120 + i,
            rooms: 3,
            type: i <= 6 ? 'resale' : 'primary',
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
        });
    }
    document.getElementById('site-slogan').innerText = state.content.slogan;
}

// --- 3. التنقل والعرض ---
window.showTab = function(tab) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (['resale', 'primary'].includes(tab)) {
        state.currentCategory = tab;
        document.getElementById('units-section').classList.add('active-tab');
        document.getElementById(`btn-${tab}`).classList.add('active');
        renderUnits();
    } else {
        document.getElementById(tab).classList.add('active-tab');
        document.getElementById('btn-home').classList.add('active');
    }
};

function renderUnits(data = null) {
    const grid = document.getElementById('units-grid');
    const units = data || state.units.filter(u => u.type === state.currentCategory);
    grid.innerHTML = units.map(u => `
        <div class="bg-zinc-900 border border-zinc-800 rounded-[35px] overflow-hidden group hover:border-gold transition shadow-xl">
            <div class="h-56 relative"><img src="${u.img}" class="w-full h-full object-cover"></div>
            <div class="p-8">
                <p class="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">${u.area}</p>
                <h3 class="text-2xl font-black my-2">${u.price.toLocaleString()} EGP</h3>
                <div class="text-xs text-zinc-400 pb-4 border-b border-zinc-800">${u.space}م | ${u.rooms} غرف | كود: ${u.code}</div>
                <button onclick="assignLead(${u.code})" class="w-full mt-6 bg-zinc-800 group-hover:bg-gold group-hover:text-black py-4 rounded-2xl font-black transition">واتساب الآن</button>
            </div>
        </div>
    `).join('');
}

window.applyFilters = function() {
    const val = document.getElementById('globalSearch').value.toLowerCase();
    const filtered = state.units.filter(u => u.type === state.currentCategory && (u.code.toString().includes(val) || u.area.toLowerCase().includes(val)));
    renderUnits(filtered);
};

// --- 4. الإدارة ---
window.openAdminPortal = function() {
    if (!state.currentUser) document.getElementById('loginModal').style.display = 'flex';
    else { document.getElementById('adminPortal').style.display = 'block'; showAdminTab('inventory'); }
};

window.processLogin = function() {
    const u = document.getElementById('loginUser').value;
    const p = document.getElementById('loginPass').value;
    const user = state.team.find(t => t.user === u && t.pass === p);
    if (user) { state.currentUser = user; document.getElementById('loginModal').style.display = 'none'; showAdminTab('inventory'); document.getElementById('adminPortal').style.display = 'block'; }
    else alert("بيانات خاطئة");
};

window.showAdminTab = function(tab) {
    document.querySelectorAll('.admin-sidebar-btn').forEach(b => b.classList.remove('active'));
    if(document.getElementById(`adm-${tab}`)) document.getElementById(`adm-${tab}`).classList.add('active');
    const body = document.getElementById('adminBody');
    
    if (tab === 'inventory') {
        body.innerHTML = `<div class="flex justify-between mb-8"><h2 class="text-3xl font-black gold-text">المخزون</h2><button onclick="exportExcel()" class="bg-green-700 px-6 py-2 rounded-xl font-bold">تصدير EXCEL</button></div>
        ${state.units.map(u => `<div class="bg-zinc-900 p-4 rounded-2xl mb-2 flex justify-between"><span>#${u.code} - ${u.area}</span><button onclick="deleteUnit(${u.id})" class="text-red-500">حذف</button></div>`).join('')}`;
    } else if (tab === 'crm') {
        body.innerHTML = `<h2 class="text-3xl font-black gold-text mb-8 text-right">العملاء (CRM)</h2>
        ${state.leads.map(l => `<div class="bg-zinc-900 p-6 rounded-3xl mb-4 border-r-4 border-gold text-right"><h4 class="font-black italic">كود الوحدة: ${l.code}</h4><p class="text-zinc-400">الموظف: ${l.staff}</p><span class="text-[10px] text-zinc-600">${l.date}</span></div>`).join('')}`;
    } else if (tab === 'cms') {
        body.innerHTML = `<h2 class="text-3xl font-black gold-text mb-8">تعديل المحتوى</h2><textarea id="cms-slogan" rows="4" class="w-full bg-black border border-zinc-800 p-6 rounded-3xl outline-none focus:border-gold mb-6">${state.content.slogan}</textarea><button onclick="saveCMS()" class="bg-gold text-black px-12 py-4 rounded-2xl font-black">حفظ</button>`;
    } else if (tab === 'add') {
        body.innerHTML = `<h2 class="text-3xl font-black gold-text mb-8">إضافة وحدة</h2><div class="grid grid-cols-2 gap-4"><input id="add-code" placeholder="الكود" class="bg-zinc-900 p-4 rounded-xl outline-none"><input id="add-area" placeholder="المنطقة" class="bg-zinc-900 p-4 rounded-xl outline-none"><input id="add-price" placeholder="السعر" class="bg-zinc-900 p-4 rounded-xl outline-none"><select id="add-type" class="bg-zinc-900 p-4 rounded-xl"><option value="resale">ريسيل</option><option value="primary">برايمري</option></select><button onclick="addNewUnit()" class="col-span-2 bg-green-700 py-4 rounded-xl font-bold">إضافة</button></div>`;
    }
};

// --- 5. العمليات ---
window.assignLead = function(code) {
    state.team.sort((a, b) => a.leadsCount - b.leadsCount);
    const agent = state.team.find(t => t.role === 'agent') || state.team[0];
    agent.leadsCount++;
    state.leads.unshift({ code, staff: agent.name, date: new Date().toLocaleString() });
    alert(`تم تسجيل طلبك لـ ${agent.name}. سيتم توجيهك للواتساب.`);
    window.open(`https://wa.me/201159333060?text=استفسار عن كود: ${code}`);
};

window.addNewUnit = function() {
    const u = { id: Date.now(), code: document.getElementById('add-code').value, area: document.getElementById('add-area').value, price: document.getElementById('add-price').value, space: "150", rooms: "3", type: document.getElementById('add-type').value, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" };
    state.units.unshift(u); alert("تمت الإضافة"); showAdminTab('inventory');
};

window.deleteUnit = function(id) { state.units = state.units.filter(u => u.id !== id); showAdminTab('inventory'); };
window.saveCMS = function() { state.content.slogan = document.getElementById('cms-slogan').value; alert("تم الحفظ"); showTab('home'); };
window.exportExcel = function() { const ws = XLSX.utils.json_to_sheet(state.units); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, "STR"); XLSX.writeFile(wb, "STR_Inventory.xlsx"); };

window.onload = init;
