// --- 1. قاعدة البيانات (State) ---
let state = {
    content: { slogan: "STR - حيث تؤدي كل خطوة إلى القمة | 2026" },
    units: [],
    leads: [],
    team: [
        { name: "المدير", user: "admin", pass: "str2026", role: "admin", leadsCount: 0 },
        { name: "مبيعات 1", user: "sales", pass: "123", role: "agent", leadsCount: 0 }
    ],
    currentUser: null
};

// توليد بيانات افتراضية فورية
const generateData = () => {
    const areas = ["مدينتي B8", "الرحاب", "العاصمة الإدارية", "التجمع الخامس"];
    for (let i = 1; i <= 16; i++) {
        state.units.push({
            id: i, code: 1000 + i, area: areas[i % 4],
            price: 3500000 + (i * 150000), space: 90 + i, rooms: 3,
            type: i <= 8 ? 'resale' : 'primary',
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500"
        });
    }
};
generateData();

// --- 2. وظائف العرض (UI Functions) ---
window.showTab = function(tab) {
    // إخفاء كل الأقسام
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active', 'gold-text'));
    
    if (['resale', 'primary', 'rentals'].includes(tab)) {
        window.currentCat = tab;
        const section = document.getElementById('units-section');
        if(section) section.style.display = 'block';
        renderUnits();
    } else {
        const target = document.getElementById(tab);
        if(target) target.style.display = 'block';
    }
    
    // تحديث الشعار
    const sloganEl = document.getElementById('site-slogan');
    if(sloganEl) sloganEl.innerText = state.content.slogan;
};

function renderUnits() {
    const grid = document.getElementById('units-grid');
    if(!grid) return;
    
    const filtered = state.units.filter(u => u.type === window.currentCat);
    grid.innerHTML = filtered.map(u => `
        <div style="background:#111; border:1px solid #222; border-radius:20px; overflow:hidden;">
            <img src="${u.img}" style="width:100%; h:200px; object-fit:cover;">
            <div style="padding:20px;">
                <p style="color:#d4af37; font-size:12px; font-weight:bold;">كود: ${u.code}</p>
                <h3 style="font-size:20px; font-weight:900;">${u.price.toLocaleString()} EGP</h3>
                <p style="color:#666; font-size:14px;">${u.area} | ${u.space} متر</p>
                <button onclick="assignLead(${u.code})" style="width:100%; margin-top:15px; background:#d4af37; color:black; padding:10px; border-radius:10px; font-weight:bold; cursor:pointer;">تواصل واتساب</button>
            </div>
        </div>
    `).join('');
}

// --- 3. نظام الإدارة (Admin Logic) ---
window.openAdminPortal = function() {
    if (!state.currentUser) {
        const loginModal = document.getElementById('loginModal');
        if(loginModal) loginModal.style.display = 'flex';
    } else {
        const portal = document.getElementById('adminPortal');
        if(portal) portal.style.display = 'block';
        showAdminTab('inventory');
    }
};

window.processLogin = function() {
    const u = document.getElementById('loginUser').value;
    const p = document.getElementById('loginPass').value;
    const user = state.team.find(t => t.user === u && t.pass === p);
    
    if (user) {
        state.currentUser = user;
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('adminPortal').style.display = 'block';
        showAdminTab('inventory');
    } else {
        alert("بيانات الدخول غير صحيحة");
    }
};

window.showAdminTab = function(tab) {
    const body = document.getElementById('adminBody');
    if(!body) return;

    if (tab === 'inventory') {
        body.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h2 style="color:#d4af37; font-size:24px; font-weight:bold;">المخزون العقاري</h2>
                <button onclick="exportToExcel()" style="background:#15803d; color:white; padding:8px 15px; border-radius:8px;">تصدير Excel</button>
            </div>
            <div style="display:grid; gap:10px;">
                ${state.units.map(u => `<div style="background:#18181b; padding:15px; border-radius:12px; display:flex; justify-content:space-between; border:1px solid #27272a;">
                    <span>كود: ${u.code} - ${u.area}</span>
                    <span style="color:#d4af37; font-weight:bold;">${u.price.toLocaleString()} EGP</span>
                </div>`).join('')}
            </div>
        `;
    } else if (tab === 'crm') {
        body.innerHTML = `<h2 style="color:#d4af37; font-size:24px; font-weight:bold;">قائمة العملاء (CRM)</h2>
        <div style="margin-top:20px;">${state.leads.length === 0 ? "لا يوجد طلبات حالياً" : state.leads.map(l => `
            <div style="background:#111; padding:15px; margin-bottom:10px; border-right:4px solid #d4af37;">
                <p>عميل مهتم بالكود: ${l.code}</p>
                <small style="color:#666;">الموظف: ${l.staff} | التاريخ: ${l.date}</small>
            </div>
        `).join('')}</div>`;
    }
};

// --- 4. العمليات (Operations) ---
window.assignLead = function(code) {
    // توزيع عادل لليدز
    state.team.sort((a, b) => a.leadsCount - b.leadsCount);
    const agent = state.team[0];
    agent.leadsCount++;
    
    state.leads.unshift({ code, staff: agent.name, date: new Date().toLocaleString('ar-EG') });
    
    const msg = `استفسار عن وحدة STR كود: ${code}`;
    window.open(`https://wa.me/201159333060?text=${encodeURIComponent(msg)}`);
};

window.exportToExcel = function() {
    const ws = XLSX.utils.json_to_sheet(state.units);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventory");
    XLSX.writeFile(wb, "STR_Inventory_2026.xlsx");
};

// تشغيل عند التحميل
window.onload = () => showTab('home');
