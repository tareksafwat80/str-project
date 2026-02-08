/**
 * STR REAL ESTATE - ENTERPRISE MANAGEMENT SYSTEM
 * Version: 2.5.0 (Full Features)
 * Built for: 2026 Summit Team
 */

// ==========================================
// 1. القائمة البرمجية الأساسية (State Management)
// ==========================================
const GlobalState = {
    settings: {
        companyName: "Summit Team Real Estate",
        slogan: "STR - حيث تلتقي الفخامة بالاحترافية. نحن لا نوفر مجرد وحدات سكنية، بل نبني لك مستقبلاً مشرقاً في أرقى بقاع مصر | 2026",
        contactPhone: "201159333060",
        version: "2.5.0"
    },
    inventory: [],
    leads: [],
    users: [
        { id: 101, name: "إدارة STR المركزية", username: "admin", password: "str2026", role: "admin", leadsAssigned: 0 },
        { id: 102, name: "فريق المبيعات A", username: "sales1", password: "123", role: "agent", leadsAssigned: 0 },
        { id: 103, name: "فريق المبيعات B", username: "sales2", password: "123", role: "agent", leadsAssigned: 0 }
    ],
    session: {
        activeUser: null,
        isLoggedIn: false
    },
    ui: {
        activeTab: 'home',
        activeCategory: 'resale',
        adminSection: 'inventory'
    }
};

// ==========================================
// 2. محرك توليد البيانات (Data Factory)
// ==========================================
function dataSeedingEngine() {
    const locations = [
        "مدينتي - مجموعة B8 المميزة", 
        "الرحاب - المرحلة التاسعة", 
        "التجمع الخامس - النرجس عمارات", 
        "العاصمة الإدارية - R7", 
        "القاهرة الجديدة - اللوتس الشمالية"
    ];

    const types = ['resale', 'primary'];
    const images = [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1600607687940-47a0f9259017?w=800"
    ];

    // توليد 40 وحدة افتراضية لتعبئة النظام
    for (let i = 1; i <= 40; i++) {
        GlobalState.inventory.push({
            uid: btoa(Math.random().toString()).substring(0, 12),
            code: 9000 + i,
            title: `وحدة سكنية فاخرة #${9000 + i}`,
            area: locations[i % locations.length],
            price: 3500000 + (Math.floor(Math.random() * 50) * 100000),
            space: 110 + (i * 2),
            rooms: (i % 3) + 2,
            bathrooms: (i % 2) + 1,
            type: i <= 20 ? 'resale' : 'primary',
            thumbnail: images[i % images.length],
            description: "تتميز هذه الوحدة بتصميم عصري وإطلالة خلابة على المساحات الخضراء، مع تشطيبات فندقية فاخرة وموقع استراتيجي بالقرب من الخدمات الأساسية.",
            createdAt: new Date().toLocaleDateString('ar-EG')
        });
    }
}

// ==========================================
// 3. محرك التنقل والعرض (UI Engine)
// ==========================================
window.showTab = (tabId) => {
    // تحديث الحالة
    GlobalState.ui.activeTab = tabId;
    if (['resale', 'primary'].includes(tabId)) {
        GlobalState.ui.activeCategory = tabId;
        GlobalState.ui.activeTab = 'properties';
    }

    // إدارة العناصر البصرية
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

    const targetId = GlobalState.ui.activeTab === 'properties' ? 'properties-section' : tabId;
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.classList.add('active');

    // تفعيل الرابط في المنيو
    if (tabId === 'home') document.getElementById('nav-home').classList.add('active');
    else if (tabId === 'resale') document.getElementById('nav-resale').classList.add('active');
    else if (tabId === 'primary') document.getElementById('nav-primary').classList.add('active');

    // تحديث البيانات
    if (GlobalState.ui.activeTab === 'properties') {
        document.getElementById('category-title').innerText = tabId === 'resale' ? 'وحدات الاستلام الفوري' : 'مشروعات برايمري';
        renderPropertyGrid();
    } else {
        document.getElementById('site-slogan-display').innerText = GlobalState.settings.slogan;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderPropertyGrid(filteredData = null) {
    const grid = document.getElementById('main-grid');
    const noResults = document.getElementById('no-results');
    const data = filteredData || GlobalState.inventory.filter(u => u.type === GlobalState.ui.activeCategory);

    if (data.length === 0) {
        grid.innerHTML = "";
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = data.map(unit => `
        <div class="property-card group">
            <div class="relative h-72 overflow-hidden">
                <img src="${unit.thumbnail}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div class="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-gold/30">
                    <span class="text-gold text-[10px] font-black italic tracking-widest uppercase">CODE: ${unit.code}</span>
                </div>
                <div class="absolute bottom-6 right-6">
                    <p class="text-zinc-400 text-[10px] font-bold uppercase tracking-[3px]">${unit.area}</p>
                    <h4 class="text-white text-xl font-black">${unit.price.toLocaleString()} <span class="text-[10px] gold-text">EGP</span></h4>
                </div>
            </div>
            <div class="p-8">
                <div class="flex justify-between items-center mb-8 text-zinc-400 text-xs font-bold border-b border-zinc-800/50 pb-6">
                    <span><i class="fa fa-ruler-combined gold-text ml-2"></i>${unit.space} م²</span>
                    <span><i class="fa fa-bed gold-text ml-2"></i>${unit.rooms} غرف</span>
                    <span><i class="fa fa-bath gold-text ml-2"></i>${unit.bathrooms} حمام</span>
                </div>
                <div class="flex gap-3">
                    <button onclick="openLeadAssignment(${unit.code})" class="flex-1 bg-gold text-black py-4 rounded-2xl font-black text-sm hover:brightness-110 active:scale-95 transition-all">تواصل واتساب</button>
                    <button onclick="viewUnitDetails('${unit.uid}')" class="w-14 bg-zinc-800 text-white rounded-2xl flex items-center justify-center hover:bg-zinc-700 transition-all"><i class="fa fa-eye"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// 4. نظام إدارة العملاء والليدز (CRM System)
// ==========================================
window.openLeadAssignment = (propertyCode) => {
    // خوارزمية التوزيع العادل (Round Robin Based on Current Load)
    const availableAgents = GlobalState.users.filter(u => u.role === 'agent');
    
    // ترتيب الموظفين حسب الأقل استقبالاً لليدز
    availableAgents.sort((a, b) => a.leadsAssigned - b.leadsAssigned);
    
    const targetAgent = availableAgents[0];
    targetAgent.leadsAssigned++;

    const leadEntry = {
        id: Date.now(),
        propertyCode: propertyCode,
        agentName: targetAgent.name,
        agentId: targetAgent.id,
        timestamp: new Date().toLocaleString('ar-EG'),
        status: 'جديد'
    };

    GlobalState.leads.unshift(leadEntry);

    // إشعار وهمي للمستخدم وتوجيه للواتساب
    console.log(`System: Lead assigned to ${targetAgent.name}`);
    
    const message = `مرحباً، أود الاستفسار عن الوحدة المعروضة بكود: ${propertyCode}. هل هي متاحة؟`;
    const waUrl = `https://wa.me/${GlobalState.settings.contactPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(waUrl, '_blank');
};

// ==========================================
// 5. محرك الإدارة (Admin Engine)
// ==========================================
window.toggleAdminPortal = () => {
    if (!GlobalState.session.isLoggedIn) {
        document.getElementById('authModal').style.display = 'flex';
    } else {
        document.getElementById('adminPortalModal').style.display = 'block';
        renderAdminSection('inventory');
    }
};

window.handleLoginAttempt = () => {
    const user = document.getElementById('auth-username').value;
    const pass = document.getElementById('auth-password').value;

    const matchedUser = GlobalState.users.find(u => u.username === user && u.password === pass);

    if (matchedUser) {
        GlobalState.session.activeUser = matchedUser;
        GlobalState.session.isLoggedIn = true;
        document.getElementById('authModal').style.display = 'none';
        document.getElementById('active-user-name').innerText = matchedUser.name;
        window.toggleAdminPortal();
    } else {
        alert("خطأ في بيانات الدخول! يرجى التأكد من اسم المستخدم وكلمة المرور.");
    }
};

window.renderAdminSection = (sectionId) => {
    GlobalState.ui.adminSection = sectionId;
    const container = document.getElementById('admin-main-container');
    
    // تحديث شكل السايدبار
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`adm-nav-${sectionId}`);
    if(activeBtn) activeBtn.classList.add('active');

    if (sectionId === 'inventory') {
        container.innerHTML = `
            <div class="flex justify-between items-center mb-16">
                <h2 class="text-5xl font-black gold-text italic">قائمة المخزون</h2>
                <div class="flex gap-4">
                    <button onclick="exportToExcel()" class="bg-green-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-all"><i class="fa fa-file-excel ml-2"></i> تصدير إكسيل</button>
                    <button onclick="renderAdminSection('add-unit')" class="bg-gold text-black px-8 py-3 rounded-xl font-bold"><i class="fa fa-plus ml-2"></i> إضافة وحدة</button>
                </div>
            </div>
            <div class="grid gap-4">
                ${GlobalState.inventory.map(u => `
                    <div class="bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800 flex items-center justify-between group hover:border-gold/50 transition-all">
                        <div class="flex items-center gap-8">
                            <img src="${u.thumbnail}" class="w-20 h-20 rounded-2xl object-cover">
                            <div>
                                <h5 class="text-xl font-black">${u.title}</h5>
                                <p class="text-zinc-500 text-sm font-bold">كود: ${u.code} | ${u.area}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-12">
                            <span class="text-gold font-black text-xl">${u.price.toLocaleString()} EGP</span>
                            <div class="flex gap-2">
                                <button onclick="deleteProperty('${u.uid}')" class="w-12 h-12 bg-red-950/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (sectionId === 'crm') {
        container.innerHTML = `
            <h2 class="text-5xl font-black gold-text italic mb-16">سجل الليدز وتحويلات الموظفين</h2>
            <div class="grid gap-6">
                ${GlobalState.leads.length === 0 ? '<div class="text-center py-20 text-zinc-600 italic">لا يوجد سجل عملاء حالياً</div>' : 
                GlobalState.leads.map(lead => `
                    <div class="bg-zinc-900 p-8 rounded-[40px] border-r-8 border-gold shadow-2xl flex justify-between items-center">
                        <div>
                            <h4 class="text-2xl font-black mb-2 italic">اهتمام بالوحدة #${lead.propertyCode}</h4>
                            <p class="text-sm text-zinc-500 font-bold uppercase tracking-[2px]">الموظف المسؤول: <span class="text-white">${lead.agentName}</span></p>
                        </div>
                        <div class="text-left">
                            <p class="text-xs text-zinc-600 font-bold mb-2">${lead.timestamp}</p>
                            <span class="bg-gold/10 text-gold px-4 py-1 rounded-full text-[10px] font-black uppercase">${lead.status}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (sectionId === 'add-unit') {
        container.innerHTML = `
            <h2 class="text-5xl font-black gold-text italic mb-16 text-right">إضافة وحدة عقارية جديدة</h2>
            <div class="bg-zinc-900 p-12 rounded-[50px] border border-zinc-800">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <input type="number" id="new-p-code" placeholder="كود الوحدة" class="glass-input">
                    <input type="text" id="new-p-title" placeholder="عنوان الوحدة" class="glass-input">
                    <input type="text" id="new-p-area" placeholder="المنطقة" class="glass-input">
                    <input type="number" id="new-p-price" placeholder="السعر الكلي" class="glass-input">
                    <input type="number" id="new-p-space" placeholder="المساحة بالمتر" class="glass-input">
                    <select id="new-p-type" class="glass-input">
                        <option value="resale">ريسيل (استلام فوري)</option>
                        <option value="primary">برايمري (تحت الإنشاء)</option>
                    </select>
                </div>
                <button onclick="processAddNewProperty()" class="w-full bg-gold text-black py-6 rounded-3xl font-black text-xl">حفظ وإضافة للمخزون</button>
            </div>
        `;
    } else if (sectionId === 'settings') {
        container.innerHTML = `
            <h2 class="text-5xl font-black gold-text italic mb-16">إعدادات المنصة</h2>
            <div class="bg-zinc-900 p-12 rounded-[50px] border border-zinc-800 max-w-2xl">
                <div class="mb-10">
                    <label class="block text-zinc-500 font-bold mb-4 mr-2 uppercase text-xs tracking-widest">رسالة السلوجان الرئيسية</label>
                    <textarea id="settings-slogan-input" rows="6" class="glass-input leading-relaxed">${GlobalState.settings.slogan}</textarea>
                </div>
                <button onclick="saveGlobalSettings()" class="bg-gold text-black px-12 py-5 rounded-2xl font-black">تحديث البيانات</button>
            </div>
        `;
    }
};

// ==========================================
// 6. الدوال التشغيلية (Logic Functions)
// ==========================================
window.processAddNewProperty = () => {
    const code = document.getElementById('new-p-code').value;
    const title = document.getElementById('new-p-title').value;
    const area = document.getElementById('new-p-area').value;
    const price = document.getElementById('new-p-price').value;
    const type = document.getElementById('new-p-type').value;

    if(!code || !title || !area || !price) {
        alert("يرجى ملء جميع البيانات الأساسية!");
        return;
    }

    const newUnit = {
        uid: btoa(Math.random().toString()).substring(0, 12),
        code: parseInt(code),
        title: title,
        area: area,
        price: parseInt(price),
        space: 140,
        rooms: 3,
        bathrooms: 2,
        type: type,
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        createdAt: new Date().toLocaleDateString('ar-EG')
    };

    GlobalState.inventory.unshift(newUnit);
    alert("تمت إضافة الوحدة بنجاح إلى المخزون!");
    renderAdminSection('inventory');
};

window.deleteProperty = (uid) => {
    if(confirm("هل أنت متأكد من حذف هذه الوحدة نهائياً؟")) {
        GlobalState.inventory = GlobalState.inventory.filter(u => u.uid !== uid);
        renderAdminSection('inventory');
    }
};

window.saveGlobalSettings = () => {
    const newSlogan = document.getElementById('settings-slogan-input').value;
    GlobalState.settings.slogan = newSlogan;
    alert("تم تحديث إعدادات الموقع بنجاح!");
    document.getElementById('site-slogan-display').innerText = newSlogan;
};

window.handleGlobalSearch = () => {
    const query = document.getElementById('global-search-input').value.toLowerCase();
    const filtered = GlobalState.inventory.filter(unit => {
        return unit.type === GlobalState.ui.activeCategory && 
               (unit.code.toString().includes(query) || 
                unit.area.toLowerCase().includes(query) ||
                unit.price.toString().includes(query));
    });
    renderPropertyGrid(filtered);
};

window.exportToExcel = () => {
    const dataForExport = GlobalState.inventory.map(u => ({
        "كود الوحدة": u.code,
        "العنوان": u.title,
        "المنطقة": u.area,
        "السعر": u.price,
        "المساحة": u.space,
        "النوع": u.type === 'resale' ? 'ريسيل' : 'برايمري',
        "تاريخ الإضافة": u.createdAt
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataForExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
    XLSX.writeFile(workbook, `STR_Inventory_${new Date().toLocaleDateString()}.xlsx`);
};

window.secureLogout = () => {
    GlobalState.session.isLoggedIn = false;
    GlobalState.session.activeUser = null;
    document.getElementById('adminPortalModal').style.display = 'none';
};

window.closeModals = () => {
    document.querySelectorAll('.full-modal').forEach(m => m.style.display = 'none');
};

// ==========================================
// 7. تشغيل النظام (Bootstrap)
// ==========================================
window.onload = () => {
    console.log("STR Engine Starting...");
    dataSeedingEngine();
    showTab('home');
};
