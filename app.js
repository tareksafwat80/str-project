// --- Database State ---
let state = {
    content: {
        slogan: "حيث تؤدي كل خطوة إلى القمة - نعدك بالتميز في كل اختيار عقاري.",
        about: "نحن شركة STR، رائدون في تقديم الحلول العقارية المتكاملة.",
        areas: "مدينتي, الرحاب, التجمع الخامس, العاصمة الإدارية",
        partners: [{ name: "طلعت مصطفى", logo: "TMG" }, { name: "إعمار", logo: "EMAAR" }]
    },
    units: [],
    leads: [],
    team: [
        { id: 1, name: "Admin STR", user: "admin", pass: "str2026", role: "admin", leadsCount: 0 },
        { id: 2, name: "Sales Agent", user: "sales", pass: "123", role: "agent", leadsCount: 0 }
    ],
    notifications: [],
    currentUser: null
};

// Seed Units
for (let i = 0; i < 15; i++) {
    const type = i < 5 ? 'resale' : (i < 10 ? 'primary' : 'rentals');
    state.units.push({
        id: Date.now() + i, code: 1000 + i, area: "مدينتي",
        price: 5000000 + (i * 100000), space: 110 + i, rooms: 3,
        type: type, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    });
}

// --- Navigation ---
function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    if (['resale', 'primary', 'rentals'].includes(tab)) {
        window.currentCategory = tab;
        document.getElementById('units-section').classList.add('active-tab');
        renderUnits();
    } else {
        document.getElementById(tab).classList.add('active-tab');
    }
    if (tab === 'home') document.getElementById('site-slogan').innerText = state.content.slogan;
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const filtered = state.units.filter(u => u.type === window.currentCategory && (u.code.toString().includes(search) || u.area.includes(search)));
    
    grid.innerHTML = filtered.map(u => `
        <div class="bg-zinc-900 border border-zinc-800 rounded-[30px] overflow-hidden hover:border-gold transition">
            <img src="${u.img}" class="h-48 w-full object-cover">
            <div class="p-6">
                <span class="text-[10px] gold-text font-bold">كود: ${u.code}</span>
                <h3 class="text-xl font-black mt-2">${u.price.toLocaleString()} EGP</h3>
                <p class="text-zinc-500 text-sm mt-1">${u.area}</p>
                <button onclick="assignLead(${u.code})" class="w-full mt-4 bg-zinc-800 py-3 rounded-xl font-bold hover:bg-gold hover:text-black transition">واتساب</button>
            </div>
        </div>
    `).join('');
}
// --- Admin & Login Logic ---
function openAdminPortal() {
    if (!state.currentUser) {
        document.getElementById('loginModal').style.display = 'flex';
    } else {
        document.getElementById('adminPortal').style.display = 'block';
        showAdminTab('inventory');
    }
}

function processLogin() {
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
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-sidebar-btn').forEach(b => b.classList.remove('active'));
    const btn = Array.from(document.querySelectorAll('.admin-sidebar-btn')).find(b => b.onclick.toString().includes(tab));
    if(btn) btn.classList.add('active');
    
    const body = document.getElementById('adminBody');
    if (tab === 'inventory') renderInventory(body);
    if (tab === 'crm') renderCRM(body);
    if (tab === 'team') renderTeam(body);
    if (tab === 'cms') renderCMS(body);
}

function renderInventory(el) {
    el.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-black gold-text">المخزون العقاري</h2>
            <div class="flex gap-3">
                <button onclick="exportToExcel('units')" class="bg-green-700 text-white px-4 py-2 rounded-xl text-xs font-bold">تصدير EXCEL</button>
                <button onclick="alert('جارٍ تجهيز رفع الملف...')" class="bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold">استيراد IMPORT</button>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-2">
            ${state.units.map(u => `<div class="bg-zinc-900 p-4 rounded-xl flex justify-between border border-zinc-800">
                <span>كود: ${u.code} - ${u.area}</span>
                <span class="gold-text font-bold">${u.price.toLocaleString()} EGP</span>
            </div>`).join('')}
        </div>`;
}

function renderCRM(el) {
    el.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-black gold-text">إدارة الليدز CRM</h2>
            <button onclick="exportToExcel('leads')" class="bg-green-700 text-white px-4 py-2 rounded-xl text-xs font-bold">تحميل ليدز EXCEL</button>
        </div>
        <div class="space-y-3">
            ${state.leads.length === 0 ? '<p class="text-zinc-500">لا يوجد ليدز حالياً</p>' : 
              state.leads.map(l => `<div class="bg-zinc-950 p-5 rounded-2xl border-r-4 border-gold">
                <div class="flex justify-between font-bold"><span>${l.name}</span><span>${l.date}</span></div>
                <div class="text-xs text-zinc-500 mt-1">مهتم بكود: ${l.code} | الموظف: ${l.staff}</div>
              </div>`).join('')}
        </div>`;
}

function renderTeam(el) {
    if (state.currentUser.role !== 'admin') {
        el.innerHTML = '<p class="text-red-500">عفواً، لا تملك صلاحية مدير لمشاهدة الموظفين</p>';
        return;
    }
    el.innerHTML = `
        <h2 class="text-3xl font-black gold-text mb-8">إدارة فريق العمل</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${state.team.map(t => `<div class="bg-zinc-900 p-6 rounded-3xl text-center">
                <div class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gold font-black">${t.name[0]}</div>
                <h4 class="font-bold">${t.name}</h4>
                <p class="text-xs text-zinc-500 uppercase">${t.role}</p>
                <p class="mt-4 text-sm font-bold">ليدز محولة: ${t.leadsCount}</p>
            </div>`).join('')}
        </div>`;
}

function renderCMS(el) {
    el.innerHTML = `
        <h2 class="text-3xl font-black gold-text mb-8">تعديل المحتوى</h2>
        <div class="space-y-4">
            <label class="block text-xs">شعار الموقع (Slogan)</label>
            <input id="new-slogan" value="${state.content.slogan}" class="w-full bg-black border border-zinc-800 p-4 rounded-xl">
            <button onclick="state.content.slogan=document.getElementById('new-slogan').value; alert('تم التحديث'); showTab('home')" class="bg-gold text-black px-8 py-3 rounded-xl font-bold">حفظ التغييرات</button>
        </div>`;
}

// --- Logic ---
function assignLead(code) {
    state.team.sort((a, b) => a.leadsCount - b.leadsCount);
    const agent = state.team[0];
    agent.leadsCount++;
    state.leads.unshift({ name: "عميل واتساب", code, staff: agent.name, date: new Date().toLocaleDateString() });
    window.open(`https://wa.me/201159333060?text=استفسار عن كود: ${code}`);
}

function exportToExcel(type) {
    const data = type === 'units' ? state.units : state.leads;
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, type);
    XLSX.writeFile(wb, `STR_${type}_2026.xlsx`);
}

function toggleLanguage() {
    alert("English language pack is being loaded...");
}

// Init

// --- Advanced Management & CRM Logic ---

// نظام تتبع حالة الوحدات (متاحة، محجوزة، مباعة)
function updateUnitStatus(unitId, newStatus) {
    const unit = state.units.find(u => u.id === unitId);
    if (unit) {
        unit.status = newStatus;
        addNotification(`تم تغيير حالة الوحدة ${unit.code} إلى ${newStatus}`);
        renderInventory(document.getElementById('adminBody'));
    }
}

// إضافة إشعار جديد للنظام
function addNotification(message) {
    const note = {
        id: Date.now(),
        text: message,
        time: new Date().toLocaleTimeString('ar-EG'),
        read: false
    };
    state.notifications.unshift(note);
    updateNotifyUI();
}

// تحديث عداد الإشعارات في الواجهة
function updateNotifyUI() {
    const countEl = document.getElementById('notifyCount');
    if (countEl) {
        const unread = state.notifications.filter(n => !n.read).length;
        countEl.innerText = unread;
        countEl.style.display = unread > 0 ? 'flex' : 'none';
    }
}

// نظام إدارة الصلاحيات المتقدم (Permissions)
function checkPermission(action) {
    if (!state.currentUser) return false;
    if (state.currentUser.role === 'admin') return true;
    
    const limitedActions = ['deleteUnit', 'editTeam', 'exportLeads'];
    return !limitedActions.includes(action);
}

// معالج البحث المتقدم (Advanced Filter)
function advancedSearch() {
    const minPrice = document.getElementById('minPrice')?.value || 0;
    const maxPrice = document.getElementById('maxPrice')?.value || Infinity;
    const areaFilter = document.getElementById('areaFilter')?.value || "";

    const filtered = state.units.filter(u => {
        return u.price >= minPrice && 
               u.price <= maxPrice && 
               (areaFilter === "" || u.area.includes(areaFilter));
    });

    renderUnitsGrid(filtered);
}

// تصدير التقارير بصيغة CSV كبديل سريع أو إضافي لـ XLSX
function downloadCSV(type) {
    const data = type === 'leads' ? state.leads : state.units;
    let csvContent = "\uFEFF"; // لضمان دعم اللغة العربية في Excel
    const keys = Object.keys(data[0]);
    csvContent += keys.join(",") + "\n";

    data.forEach(item => {
        let row = keys.map(key => `"${item[key]}"`).join(",");
        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `STR_Report_${type}.csv`);
    link.click();
}

// وظيفة استيراد البيانات من Excel (Logic)
function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        // دمج البيانات الجديدة مع المخزون الحالي
        state.units = [...state.units, ...jsonData];
        addNotification(`تم استيراد ${jsonData.length} وحدة بنجاح`);
        alert("تم تحديث المخزون من ملف الإكسيل بنجاح!");
    };
    reader.readAsArrayBuffer(file);
}

// إعدادات لوحة التحكم للموبايل (Mobile Responsiveness UI)
function toggleMobileMenu() {
    const nav = document.querySelector('nav div.flex-wrap');
    nav.classList.toggle('hidden');
}

// تنظيف الجلسة عند الخروج
function logout() {
    state.currentUser = null;
    localStorage.removeItem('str_session');
    location.reload();
}

// نظام حفظ المحتوى محلياً (Auto-save)
function autoSaveState() {
    localStorage.setItem('str_state', JSON.stringify(state));
}

// استرجاع البيانات عند فتح الموقع
function loadSavedState() {
    const saved = localStorage.getItem('str_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.content = parsed.content;
        state.units = parsed.units;
        state.leads = parsed.leads;
    }
}

// تشغيل النظام
document.addEventListener('DOMContentLoaded', () => {
    loadSavedState();
    showTab('home');
    setInterval(autoSaveState, 30000); // // --- الجزء الرابع: محرك الإدارة المتقدم والتقارير ---

/**
 * 1. نظام الإحصائيات (Stats Dashboard)
 * يقوم بحساب الأرقام لعرضها في لوحة الإدارة
 */
function calculateStats() {
    const totalValue = state.units.reduce((sum, u) => sum + (u.price || 0), 0);
    const avgPrice = totalValue / (state.units.length || 1);
    const leadsByStatus = {
        resale: state.leads.filter(l => l.type === 'resale').length,
        primary: state.leads.filter(l => l.type === 'primary').length
    };
    return { totalValue, avgPrice, leadsByStatus };
}

/**
 * 2. واجهة الإدارة المتطورة (Advanced UI Components)
 */
function renderDashboardHome(el) {
    const stats = calculateStats();
    el.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div class="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[35px] border border-zinc-800 shadow-xl">
                <p class="text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">إجمالي قيمة المحفظة</p>
                <h3 class="text-3xl font-black gold-text">${stats.totalValue.toLocaleString()} EGP</h3>
            </div>
            <div class="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[35px] border border-zinc-800 shadow-xl">
                <p class="text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">عدد الليدز النشطة</p>
                <h3 class="text-3xl font-black text-white">${state.leads.length} عميل</h3>
            </div>
            <div class="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[35px] border border-zinc-800 shadow-xl">
                <p class="text-zinc-500 text-xs font-bold mb-2 uppercase tracking-widest">متوسط سعر الوحدات</p>
                <h3 class="text-3xl font-black text-white">${Math.floor(stats.avgPrice).toLocaleString()} EGP</h3>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800">
                <h4 class="text-xl font-black mb-6 flex items-center gap-3">
                    <i class="fa fa-chart-line gold-text"></i> توزيع الاهتمام (Sales Funnel)
                </h4>
                <div class="space-y-4">
                    ${Object.entries(stats.leadsByStatus).map(([key, val]) => `
                        <div>
                            <div class="flex justify-between text-xs mb-1 uppercase font-bold">
                                <span>${key}</span> <span>${val} ليد</span>
                            </div>
                            <div class="w-full bg-black h-2 rounded-full overflow-hidden">
                                <div class="bg-gold h-full" style="width: ${(val/state.leads.length)*100 || 0}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="bg-zinc-900/50 p-8 rounded-[40px] border border-zinc-800">
                <h4 class="text-xl font-black mb-6 italic">أحدث حركات النظام</h4>
                <div class="space-y-4 max-h-60 overflow-y-auto pr-2" id="logs-container">
                    ${state.notifications.map(n => `
                        <div class="flex items-start gap-4 border-b border-zinc-800 pb-3">
                            <div class="w-2 h-2 rounded-full bg-gold mt-2"></div>
                            <div>
                                <p class="text-sm text-zinc-300">${n.text}</p>
                                <span class="text-[10px] text-zinc-600 font-bold">${n.time}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * 3. معالج الوحدة الجديدة (Unit Management Modal)
 */
function openAddUnitModal() {
    const modalHtml = `
        <div id="unitFormModal" class="fixed inset-0 bg-black/95 z-[3000] flex items-center justify-center p-4">
            <div class="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-[40px] p-10 overflow-y-auto max-h-[90vh]">
                <h2 class="text-3xl font-black gold-text mb-8 italic">إضافة وحدة عقارية جديدة</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input id="u_code" type="number" placeholder="كود الوحدة" class="bg-black border border-zinc-800 p-4 rounded-2xl outline-none focus:border-gold">
                    <select id="u_type" class="bg-black border border-zinc-800 p-4 rounded-2xl outline-none focus:border-gold text-zinc-400">
                        <option value="resale">ريسيل (Resale)</option>
                        <option value="primary">برايمري (Primary)</option>
                        <option value="rentals">إيجار فندقي</option>
                    </select>
                    <input id="u_area" type="text" placeholder="المنطقة (مثال: مدينتي B8)" class="bg-black border border-zinc-800 p-4 rounded-2xl outline-none focus:border-gold">
                    <input id="u_price" type="number" placeholder="السعر الإجمالي" class="bg-black border border-zinc-800 p-4 rounded-2xl outline-none focus:border-gold">
                    <input id="u_space" type="number" placeholder="المساحة بالمتر" class="bg-black border border-zinc-800 p-4 rounded-2xl outline-none focus:border-gold">
                    <input id="u_rooms" type="number" placeholder="عدد الغرف" class="bg-black border border-zinc-800 p-4 rounded-2xl outline-none focus:border-gold">
                </div>
                <div class="mt-8 flex gap-4">
                    <button onclick="saveNewUnit()" class="flex-1 bg-gold text-black py-4 rounded-2xl font-black text-xl hover:scale-95 transition">حفظ الوحدة</button>
                    <button onclick="document.getElementById('unitFormModal').remove()" class="px-8 bg-zinc-800 rounded-2xl font-bold">إلغاء</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveNewUnit() {
    const newUnit = {
        id: Date.now(),
        code: document.getElementById('u_code').value,
        type: document.getElementById('u_type').value,
        area: document.getElementById('u_area').value,
        price: Number(document.getElementById('u_price').value),
        space: document.getElementById('u_space').value,
        rooms: document.getElementById('u_rooms').value,
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    };

    if(!newUnit.code || !newUnit.price) return alert("يرجى ملء البيانات الأساسية");
    
    state.units.unshift(newUnit);
    addNotification(`تمت إضافة وحدة جديدة بنجاح كود: ${newUnit.code}`);
    document.getElementById('unitFormModal').remove();
    showAdminTab('inventory');
    autoSaveState();
}

/**
 * 4. نظام الفلترة المتقدمة للمستخدم (User Side Filtering)
 */
function applyFilters() {
    const searchVal = document.getElementById('globalSearch').value.toLowerCase();
    const filtered = state.units.filter(u => {
        return (u.code.toString().includes(searchVal) || u.area.toLowerCase().includes(searchVal)) &&
               (window.currentCategory ? u.type === window.currentCategory : true);
    });
    
    // إعادة بناء الجريد بناءً على الفلتر
    const grid = document.getElementById('units-grid');
    if(grid) {
        // نستخدم الفانكشن اللي في الجزء التاني لترتيبهم
        renderUnitsGrid(filtered); 
    }
}

// تعديل بسيط لربط الإحصائيات عند فتح لوحة الإدارة
const originalShowAdminTab = showAdminTab;
showAdminTab = function(tab) {
    if (tab === 'inventory') {
        const body = document.getElementById('adminBody');
        // عرض الإحصائيات أولاً قبل الجدول
        const dashboardHtml = `<div id="stats-root"></div><div id="table-root"></div>`;
        body.innerHTML = dashboardHtml;
        renderDashboardHome(document.getElementById('stats-root'));
        renderInventory(document.getElementById('table-root'));
    } else {
        originalShowAdminTab(tab);
    }
}

// --- نهاية الكود الكامل ---حفظ تلقائي كل 30 ثانية
});window.onload = () => showTab('home');
