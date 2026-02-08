// بيانات الموظفين
let employees = [
    { id: 1, name: "أحمد علي", role: "Senior Sales", leads: 0 },
    { id: 2, name: "سارة حسن", role: "Property Consultant", leads: 0 },
    { id: 3, name: "محمود عبده", role: "Junior Sales", leads: 0 }
];

// بيانات الوحدات والليدز
let units = [];
let leads = [];
let notifications = [];

// توليد وحدات ديمو
const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية"];
for(let i=1; i<=15; i++) {
    units.push({
        id: i, code: 7000+i, zone: areas[i%3], price: i*1000000, type: 'resale', status: 'active', featured: false
    });
}

// وظائف التنقل
function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active-tab'));
    document.getElementById(tab === 'home' ? 'home' : 'units-section').classList.add('active-tab');
    if(tab !== 'home') { window.currentType = tab; renderUnits(); }
}

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const filtered = units.filter(u => u.type === window.currentType && u.status === 'active');
    grid.innerHTML = filtered.map(u => `
        <div class="bg-zinc-900 p-4 rounded-xl border border-gray-800 cursor-pointer" onclick="openUnit(${u.id})">
            <div class="text-gold font-bold mb-2">كود: ${u.code}</div>
            <p class="text-sm">${u.zone}</p>
            <p class="text-lg font-bold mt-2">${u.price.toLocaleString()} EGP</p>
        </div>
    `).join('');
}

// نظام التواصل والـ CRM (توزيع الليدز أوتوماتيكياً)
function openUnit(id) {
    const u = units.find(u => u.id === id);
    document.getElementById('m-code').innerText = "وحدة " + u.code;
    document.getElementById('m-details').innerText = `منطقة ${u.zone} - السعر ${u.price.toLocaleString()}`;
    
    document.getElementById('wa-btn').onclick = () => {
        // 1. تسجيل الليد في السيستم
        const assignedEmployee = distributeLead();
        const newLead = {
            id: Date.now(),
            clientName: "عميل جديد",
            phone: "01xxxxxxxxx",
            unitCode: u.code,
            staffName: assignedEmployee.name,
            status: "New"
        };
        leads.unshift(newLead);
        
        // 2. إشعار للموظف وللآدمن
        addNotification(`ليد جديد للوحدة ${u.code} تم تحويله لـ ${assignedEmployee.name}`, 'staff');
        
        window.open(`https://wa.me/201159333060?text=استفسار عن الوحدة ${u.code}`);
    };
    document.getElementById('unitModal').style.display = 'block';
}

// خوارزمية توزيع الليدز (بالتساوي)
function distributeLead() {
    // نختار الموظف اللي عنده أقل عدد ليدز حالياً
    employees.sort((a, b) => a.leads - b.leads);
    employees[0].leads++;
    return employees[0];
}

// نظام الإشعارات
function addNotification(msg, type) {
    notifications.unshift({ msg, type, time: new Date().toLocaleTimeString() });
    updateNotifyUI();
}

function updateNotifyUI() {
    const list = document.getElementById('notifyList');
    const count = document.getElementById('notifyCount');
    count.innerText = notifications.length;
    list.innerHTML = notifications.map(n => `
        <div class="bg-black p-2 rounded border-l-2 ${n.type === 'staff' ? 'border-blue-500' : 'border-gold'}">
            <p class="text-white">${n.msg}</p>
            <span class="text-[8px] text-gray-500">${n.time}</span>
        </div>
    `).join('');
}

// إدارة الأدمن
function openAdmin() {
    if(prompt("كلمة السر:") === "str2026") {
        document.getElementById('adminModal').style.display = 'block';
        renderAdminInventory();
        renderCRM();
    }
}

function renderAdminInventory() {
    const tbody = document.getElementById('inventoryTable');
    tbody.innerHTML = units.map(u => `
        <tr class="border-b border-gray-800">
            <td class="p-4">${u.code}</td><td class="p-4">${u.zone}</td><td class="p-4">${u.price}</td>
            <td class="p-4"><span class="bg-green-900 text-green-300 px-2 py-1 rounded">${u.status}</span></td>
            <td class="p-4 flex gap-2">
                <button class="text-blue-500">تعديل</button>
                <button onclick="deleteUnit(${u.id})" class="text-red-500">حذف</button>
            </td>
        </tr>
    `).join('');
}

function renderCRM() {
    const tbody = document.getElementById('crmTable');
    tbody.innerHTML = leads.map(l => `
        <tr class="border-b border-gray-800">
            <td class="p-4">${l.clientName}</td><td class="p-4">${l.phone}</td><td class="p-4">${l.unitCode}</td>
            <td class="p-4 gold-text">${l.staffName}</td>
            <td class="p-4"><span class="bg-blue-900 px-2 py-1 rounded">${l.status}</span></td>
        </tr>
    `).join('');
    
    document.getElementById('crmStats').innerHTML = `
        <div class="admin-card text-center"><p class="silver-text text-xs">إجمالي الليدز</p><p class="text-2xl font-bold">${leads.length}</p></div>
        <div class="admin-card text-center"><p class="silver-text text-xs">أحمد علي</p><p class="text-xl">${employees[0].leads}</p></div>
        <div class="admin-card text-center"><p class="silver-text text-xs">سارة حسن</p><p class="text-xl">${employees[1].leads}</p></div>
        <div class="admin-card text-center"><p class="silver-text text-xs">محمود عبده</p><p class="text-xl">${employees[2].leads}</p></div>
    `;
}

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById('admin-' + tab).classList.remove('hidden');
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function closeUnit() { document.getElementById('unitModal').style.display = 'none'; }
function toggleNotify() { document.getElementById('notifyBox').classList.toggle('hidden'); }
