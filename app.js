// ==================== DATA MANAGEMENT ====================

// Company Data - Updated with full profile
const aboutData = {
    tagline: "Where Every Step Leads To The Summit | حيث تؤدي كل خطوة إلى القمة",
    
    aboutUs: {
        en: "Our company is a pioneer and emerging strongly and specialized in the field of marketing and real estate investment in the Egyptian market. Our company was established by a professional loyal team in the field of marketing and real estate development. Our company also has all the required permits and approvals. Our company is a pioneer in effective solutions with high quality. We are always working to use the latest technology and systems available in the field. We differ a lot from our competitors in terms of the quality of our services, the efficiency of our human elements and the diversity of our products. And our commitment to providing the best value in the market always. We provide strict control systems (human / physical) for the company's employees to ensure and confirm the quality of our services.",
        ar: "شركتنا رائدة وناشئة بقوة و متخصصة فى مجال التسويق والإستثمار العقاري بالسوق المصري. تأسست شركتنا بواسطة فريق مخلص محترف فى مجال التسويق والتطوير العقاري. كما أن شركتنا حاصلة على كافة التصاريح والموافقات المطلوبة. شركتنا رائدة فى الحلول الفعالة ذات الجودة العالية ونعمل دائماً على إستخدام أحدث تكنولوجيا وأنظمة متاحة فى المجال. نختلف كثيراً عن منافسينا من حيث جودة خدماتنا وكفاءة عناصرنا البشرية وتنوع منتجاتنا وإلتزامنا بتقديم أفضل قيمة بالسوق دائماً. ونوفر أنظمة مراقبة صارمة (بشرية / مادية) للعاملين بالشركة لضمان وتأكيد جودة خدماتنا."
    },
    
    vision: {
        en: "Providing the best value for the best price in the field of real estate marketing by combining elements of quality and excellence with excellent and competitive financial value. To be our company your primary source for meeting all your needs in the field of real estate investment and to be a leader without competition in the comfort and satisfaction of its clients. We believe that complete customer satisfaction is a goal that can be achieved through trust, hard teamwork, and follow-up under the overarching theme of professionalism. Our strict measures for cost control and customer service enable us to provide the best diverse and competitive value in the field, while delivering the highest level of service.",
        ar: "تقديم أفضل قيمة مقابل افضل سعر فى مجال التسويق العقاري بالدمج بين عنصرى الجودة والتميز مقابل القيمة المالية الممتازة والتنافسية. أن تكون شركتنا مصدرك الأول لتلبية جميع إحتياجاتك في مجال الاستثمار العقاري وأن تكون رائده بلا منافس فى راحة ورضا عملائها. نؤمن أن رضا عملاؤنا الكامل هو هدف يمكن بلوغه و تحقيقة من خلال الثقة والعمل الجماعى الجاد والمتابعة تحت عنوان كبير وهو الإحتراف. إجراءاتنا الصارمة لمراقبة التكاليف وخدمة العملاء تمكننا من توفير أفضل قيمة متنوعة وتنافسية فى المجال مع تقديم أعلى مستوى للخدمة."
    },
    
    team: {
        en: "A distinguished selection of skilled and experienced individuals from Egypt and several Arab countries manages the company. We take pride in our employees as they are carefully selected from those with extensive experience in investment and real estate marketing. Our employees are trained and have the best advanced and specialized training programs. Other than the internal training programs provided by the company. Our company has a strong corporate culture that creates shared values of responsibility, ownership and entrepreneurship among its employees. In general, our staff are multi-skilled, adept and have a lot of experience. And you can benefit from our services in more ways than you think.",
        ar: "يتولى إدارة الشركة نخبة مميزة منتقاه من أصحاب الكفاءات والخبرات المتنوعة فى مصر و عدد من الدول العربية. نفخر بموظفينا حيث يتم إختيارهم بعناية فائقة من ذوى الخبرات الكبيرة فى مجال الاستثمار والتسويق العقاري. موظفينا مدربون وحاصلون على أفضل البرامج التدريبية المتطورة والمتخصصة بخلاف برامج التدريب الداخلية التى تقدمها الشركة. شركتنا لديها ثقافة الشركات القوية التى تخلق القيم المشتركة للمسئولية والملكية و روح المبادره بين موظفيها. بصفة عامة موظفينا متعددو المهارات وبارعون ولديهم الكثير من الخبرة ويمكنك الإستفاده من خدماتنا بطرق أكثر مما تظن."
    },
    
    closing: {
        en: "Finally.. We are committed to providing all the requirements of our customers. While providing the best value in the real estate field. And we all work under the title of professionalism. To reach the main goal of our company... The comfort and satisfaction of our customers.",
        ar: "وأخيراً.. نحن نلتزم بتوفير كافة متطلبات عملائنا.. مع توفير أفضل قيمة فى المجال العقاري.. و نعمل جميعاً تحت عنوان الإحتراف.. وصولاً لهدف شركتنا الرئيسى… راحة ورضا عملاؤنا."
    }
};

const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "العين السخنة", "الشيخ زايد"];

// Initialize data from localStorage
let units = JSON.parse(localStorage.getItem('units')) || generateDemoUnits();
let leads = JSON.parse(localStorage.getItem('leads')) || [];
let currentTab = 'home';
let currentUnitTab = 'resale';
const ADMIN_PASSWORD = 'str2026';

// ==================== DEMO DATA GENERATION ====================

function generateDemoUnits() {
    const categories = ['resale', 'primary', 'rentals'];
    const demoUnits = [];
    for(let i = 0; i < 30; i++) {
        const cat = categories[Math.floor(i / 10)];
        demoUnits.push({
            id: Date.now() + i,
            code: (cat === 'resale' ? 7000 : (cat === 'primary' ? 8000 : 9000)) + i,
            type: cat,
            price: (i + 1) * 800000,
            zone: areas[i % areas.length],
            space: 90 + (i * 10),
            rooms: (i % 3) + 1,
            view: "إطلالة مميزة",
            model: "نموذج " + (i + 1),
            images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"],
            createdAt: new Date().toISOString(),
            status: "active"
        });
    }
    return demoUnits;
}

// ==================== NAVIGATION & TABS ====================

function showTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => 
        b.textContent.includes(tabName === 'home' ? 'الرئيسية' : 
                              tabName === 'about' ? 'عن الشركة' :
                              tabName === 'resale' ? 'ريسيل' :
                              tabName === 'primary' ? 'برايمري' : 'إيجار')
    );
    if(activeBtn) activeBtn.classList.add('active');

    if(['resale', 'primary', 'rentals'].includes(tabName)) {
        currentUnitTab = tabName;
        document.getElementById('units-section').style.display = 'block';
        renderUnits();
    } else {
        document.getElementById(tabName).style.display = 'block';
        if(tabName === 'about') renderAbout();
    }
}

function showAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-content').forEach(t => t.classList.remove('active-admin-tab'));
    document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById('admin-' + tabName).classList.add('active-admin-tab');
    event.target.classList.add('active');

    if(tabName === 'units') renderUnitsList();
    if(tabName === 'crm') renderLeadsList();
}

// ==================== UNITS MANAGEMENT ====================

function renderUnits() {
    const grid = document.getElementById('units-grid');
    const search = document.getElementById('globalSearch').value.toLowerCase();
    const maxPrice = document.getElementById('filterPrice').value;
    const rooms = document.getElementById('filterRooms').value;
    const zone = document.getElementById('filterZone').value;
    const code = document.getElementById('filterCode').value;

    let filtered = units.filter(u => {
        return u.type === currentUnitTab &&
               u.status === 'active' &&
               (u.code.toString().includes(search) || u.zone.includes(search) || !search) &&
               (!maxPrice || u.price <= maxPrice) &&
               (!rooms || u.rooms == rooms) &&
               (!zone || u.zone == zone) &&
               (!code || u.code.toString().includes(code));
    });

    grid.innerHTML = filtered.length > 0 ? filtered.map(u => `
        <div class="bg-zinc-900 border border-gold/30 rounded-xl overflow-hidden cursor-pointer hover:border-gold transition hover:shadow-lg hover:shadow-gold/20" onclick="openUnit(${u.id})">
            <img src="${u.images[0]}" class="h-40 w-full object-cover">
            <div class="p-4">
                <div class="flex justify-between text-[10px] gold-text mb-2"><span>${u.code}</span><span>${u.zone}</span></div>
                <p class="text-lg font-bold text-white mb-2">${u.price.toLocaleString()} EGP</p>
                <p class="text-[10px] silver-text">${u.rooms} غرف | ${u.space} م²</p>
            </div>
        </div>
    `).join('') : '<div class="col-span-full text-center py-12"><p class="text-silver">لا توجد وحدات متاحة</p></div>';
}

function openUnit(id) {
    const u = units.find(u => u.id === id);
    if(!u) return;
    
    document.getElementById('sliderWrapper').innerHTML = `<img src="${u.images[0]}" class="w-full h-full object-cover">`;
    document.getElementById('m-code').innerText = u.code;
    document.getElementById('m-address').innerText = u.zone + " - " + u.model;
    document.getElementById('m-specs').innerText = `${u.rooms} غرف - ${u.space} متر - ${u.view}`;
    document.getElementById('m-finance').innerText = `السعر: ${u.price.toLocaleString()} جنيه`;
    document.getElementById('m-dates').innerText = "متاح للاستلام الفوري";
    document.getElementById('m-notes').innerText = "وحدة مميزة بتشطيب الترا سوبر لوكس، قريبة من جميع الخدمات والمرافق.";
    
    document.getElementById('unitModal').style.display = 'block';
    document.getElementById('wa-btn').onclick = () => {
        const lead = {
            id: Date.now(),
            name: "زائر الموقع",
            phone: "غير محدد",
            email: "غير محدد",
            unitCode: u.code,
            status: "new",
            source: "website",
            createdAt: new Date().toISOString(),
            notes: `استفسار عن الوحدة ${u.code}`
        };
        leads.push(lead);
        saveLead(lead);
        window.open(`https://wa.me/201159333060?text=استفسار عن كود ${u.code}`);
    };
}

function addUnit(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, select');
    
    const newUnit = {
        id: Date.now(),
        code: parseInt(inputs[0].value),
        type: inputs[1].value,
        price: parseInt(inputs[2].value),
        zone: inputs[3].value,
        rooms: parseInt(inputs[4].value),
        space: parseInt(inputs[5].value),
        view: "إطلالة مميزة",
        model: "نموذج جديد",
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"],
        createdAt: new Date().toISOString(),
        status: "active"
    };
    
    units.push(newUnit);
    saveUnits();
    form.reset();
    updateNotifications();
    alert('تمت إضافة الوحدة بنجاح!');
    renderUnitsList();
}

function renderUnitsList() {
    const list = document.getElementById('unitsList');
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-black border-b border-gold">
                <tr class="text-gold">
                    <th class="p-3 text-right">الكود</th>
                    <th class="p-3 text-right">النوع</th>
                    <th class="p-3 text-right">السعر</th>
                    <th class="p-3 text-right">المنطقة</th>
                    <th class="p-3 text-right">الغرف</th>
                    <th class="p-3 text-right">الإجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${units.map(u => `
                    <tr class="border-b border-gold/20 hover:bg-black/50">
                        <td class="p-3">${u.code}</td>
                        <td class="p-3">${u.type}</td>
                        <td class="p-3">${u.price.toLocaleString()}</td>
                        <td class="p-3">${u.zone}</td>
                        <td class="p-3">${u.rooms}</td>
                        <td class="p-3">
                            <button onclick="deleteUnit(${u.id})" class="text-red-500 hover:text-red-700 text-xs">حذف</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function deleteUnit(id) {
    if(confirm('هل تريد حذف هذه الوحدة؟')) {
        units = units.filter(u => u.id !== id);
        saveUnits();
        renderUnitsList();
    }
}

function exportUnits() {
    const csv = 'الكود,النوع,السعر,المنطقة,الغرف,المساحة\n' +
                units.map(u => `${u.code},${u.type},${u.price},${u.zone},${u.rooms},${u.space}`).join('\n');
    downloadCSV(csv, 'units.csv');
}

// ==================== CRM MANAGEMENT ====================

function addLead(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    const newLead = {
        id: Date.now(),
        name: inputs[0].value,
        email: inputs[1].value,
        phone: inputs[2].value,
        status: inputs[3].value,
        notes: inputs[4].value,
        source: "manual",
        createdAt: new Date().toISOString()
    };
    
    leads.push(newLead);
    saveLeads();
    form.reset();
    alert('تمت إضافة Lead بنجاح!');
    renderLeadsList();
}

function renderLeadsList() {
    const list = document.getElementById('leadsList');
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-black border-b border-gold">
                <tr class="text-gold">
                    <th class="p-3 text-right">الاسم</th>
                    <th class="p-3 text-right">الهاتف</th>
                    <th class="p-3 text-right">البريد</th>
                    <th class="p-3 text-right">الحالة</th>
                    <th class="p-3 text-right">المصدر</th>
                    <th class="p-3 text-right">التاريخ</th>
                    <th class="p-3 text-right">الإجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${leads.map(l => `
                    <tr class="border-b border-gold/20 hover:bg-black/50">
                        <td class="p-3">${l.name}</td>
                        <td class="p-3">${l.phone}</td>
                        <td class="p-3 text-xs">${l.email}</td>
                        <td class="p-3"><span class="px-2 py-1 rounded text-xs ${l.status === 'new' ? 'bg-blue-900 text-blue-200' : 'bg-green-900 text-green-200'}">${l.status}</span></td>
                        <td class="p-3 text-xs">${l.source}</td>
                        <td class="p-3 text-xs">${new Date(l.createdAt).toLocaleDateString('ar-EG')}</td>
                        <td class="p-3">
                            <button onclick="deleteLead(${l.id})" class="text-red-500 hover:text-red-700 text-xs">حذف</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function deleteLead(id) {
    if(confirm('هل تريد حذف هذا Lead؟')) {
        leads = leads.filter(l => l.id !== id);
        saveLeads();
        renderLeadsList();
    }
}

function exportLeads() {
    const csv = 'الاسم,الهاتف,البريد,الحالة,المصدر,التاريخ\n' +
                leads.map(l => `${l.name},${l.phone},${l.email},${l.status},${l.source},${new Date(l.createdAt).toLocaleDateString('ar-EG')}`).join('\n');
    downloadCSV(csv, 'leads.csv');
}

// ==================== ABOUT PAGE ====================

function renderAbout() {
    const aboutSection = document.getElementById('about');
    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    
    aboutSection.innerHTML = `
        <div class="max-w-6xl mx-auto px-4 py-12">
            <h1 class="text-4xl font-bold text-center mb-2 gold-text">${lang === 'ar' ? 'عن الشركة' : 'About Us'}</h1>
            <p class="text-center silver-text mb-12">${aboutData.tagline}</p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-zinc-900 border border-gold/30 rounded-xl p-8">
                    <h2 class="text-2xl font-bold gold-text mb-4">${lang === 'ar' ? 'من نحن' : 'Who We Are'}</h2>
                    <p class="text-silver leading-relaxed">${aboutData.aboutUs[lang]}</p>
                </div>
                
                <div class="bg-zinc-900 border border-gold/30 rounded-xl p-8">
                    <h2 class="text-2xl font-bold gold-text mb-4">${lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h2>
                    <p class="text-silver leading-relaxed">${aboutData.vision[lang]}</p>
                </div>
            </div>
            
            <div class="bg-zinc-900 border border-gold/30 rounded-xl p-8 mb-12">
                <h2 class="text-2xl font-bold gold-text mb-4">${lang === 'ar' ? 'فريق عملنا' : 'Our Team'}</h2>
                <p class="text-silver leading-relaxed">${aboutData.team[lang]}</p>
            </div>
            
            <div class="bg-black border border-gold rounded-xl p-8 text-center">
                <p class="text-lg text-white leading-relaxed">${aboutData.closing[lang]}</p>
            </div>
        </div>
    `;
}

// ==================== STORAGE ====================

function saveUnits() {
    localStorage.setItem('units', JSON.stringify(units));
}

function saveLeads() {
    localStorage.setItem('leads', JSON.stringify(leads));
}

function saveLead(lead) {
    leads.push(lead);
    saveLeads();
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// ==================== ADMIN PANEL ====================

function openAdminPanel() {
    const password = prompt('أدخل كلمة المرور:');
    if(password === ADMIN_PASSWORD) {
        document.getElementById('adminPanel').style.display = 'block';
        showAdminTab('dashboard');
    } else {
        alert('كلمة المرور غير صحيحة!');
    }
}

function closeAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
}

function renderDashboard() {
    const dashboard = document.getElementById('admin-dashboard');
    const totalUnits = units.length;
    const totalLeads = leads.length;
    const newLeads = leads.filter(l => l.status === 'new').length;
    const convertedLeads = leads.filter(l => l.status === 'converted').length;
    
    dashboard.innerHTML = `
        <div class="grid md:grid-cols-4 gap-4 mb-8">
            <div class="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-6">
                <p class="text-silver text-sm mb-2">${lang === 'ar' ? 'إجمالي الوحدات' : 'Total Units'}</p>
                <p class="text-3xl font-bold gold-text">${totalUnits}</p>
            </div>
            <div class="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-500/30 rounded-lg p-6">
                <p class="text-silver text-sm mb-2">${lang === 'ar' ? 'إجمالي Leads' : 'Total Leads'}</p>
                <p class="text-3xl font-bold text-blue-400">${totalLeads}</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 border border-yellow-500/30 rounded-lg p-6">
                <p class="text-silver text-sm mb-2">${lang === 'ar' ? 'Leads جديد' : 'New Leads'}</p>
                <p class="text-3xl font-bold text-yellow-400">${newLeads}</p>
            </div>
            <div class="bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/30 rounded-lg p-6">
                <p class="text-silver text-sm mb-2">${lang === 'ar' ? 'Leads محول' : 'Converted'}</p>
                <p class="text-3xl font-bold text-green-400">${convertedLeads}</p>
            </div>
        </div>
    `;
}

// ==================== ADMIN PANEL ====================

function openAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('adminLoginModal').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

function closeAdmin() {
    document.getElementById('adminModal').style.display = 'none';
}

function checkAdminPassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('adminLoginModal').style.display = 'none';
        document.getElementById('adminModal').style.display = 'block';
        showAdminTab('stats');
        renderAdminStats();
    } else {
        alert('كلمة السر غير صحيحة!');
        document.getElementById('adminPassword').value = '';
    }
}

function renderAdminStats() {
    const statsDiv = document.getElementById('adminStats');
    const totalUnits = units.length;
    const totalLeads = leads.length;
    const newLeads = leads.filter(l => l.status === 'new').length;
    const convertedLeads = leads.filter(l => l.status === 'converted').length;
    
    statsDiv.innerHTML = `
        <div class="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">إجمالي الوحدات</p>
            <p class="text-3xl font-bold gold-text">${totalUnits}</p>
        </div>
        <div class="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-500/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">إجمالي Leads</p>
            <p class="text-3xl font-bold text-blue-400">${totalLeads}</p>
        </div>
        <div class="bg-gradient-to-br from-yellow-900/20 to-yellow-900/5 border border-yellow-500/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">Leads جديد</p>
            <p class="text-3xl font-bold text-yellow-400">${newLeads}</p>
        </div>
        <div class="bg-gradient-to-br from-green-900/20 to-green-900/5 border border-green-500/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">Leads محول</p>
            <p class="text-3xl font-bold text-green-400">${convertedLeads}</p>
        </div>
    `;
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});

// ==================== NOTIFICATIONS ====================

function toggleNotifications() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
        updateNotifications();
    }
}

function updateNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    const notificationBadge = document.getElementById('notificationBadge');
    
    // Get last 5 units sorted by creation date
    const recentUnits = [...units]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);
    
    notificationBadge.textContent = recentUnits.length;
    
    if (recentUnits.length === 0) {
        notificationsList.innerHTML = '<div class="p-4 text-center silver-text">لا توجد وحدات جديدة</div>';
        return;
    }
    
    notificationsList.innerHTML = recentUnits.map(unit => `
        <div class="p-3 border-b border-gold/20 hover:bg-black/50 cursor-pointer transition" onclick="openUnit(${unit.id})">
            <div class="flex justify-between items-start mb-2">
                <span class="gold-text font-bold text-sm">كود: ${unit.code}</span>
                <span class="text-xs silver-text">${new Date(unit.createdAt).toLocaleDateString('ar-EG')}</span>
            </div>
            <p class="text-xs text-white mb-1">${unit.zone}</p>
            <p class="text-xs silver-text">${unit.rooms} غرف | ${unit.space} م² | ${unit.price.toLocaleString()} EGP</p>
        </div>
    `).join('');
}

// Update notifications when units are added
function addNotification() {
    updateNotifications();
}

// Close notification panel when clicking outside
document.addEventListener('click', (e) => {
    const panel = document.getElementById('notificationPanel');
    if (panel && !panel.contains(e.target)) {
        const bell = document.querySelector('[onclick="toggleNotifications()"]');
        if (bell && !bell.contains(e.target)) {
            panel.classList.add('hidden');
        }
    }
});


// ==================== LANGUAGE SWITCH ====================

let lang = 'ar';

function toggleLanguage() {
    lang = lang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.getElementById('langToggle').textContent = lang === 'ar' ? 'English' : 'عربي';
    updateFilterLabels();
    renderAbout();
    renderUnits();
}

function updateFilterLabels() {
    const isAr = lang === 'ar';
    
    // Update Category filter
    const categoryLabel = document.querySelector('label[for="category"]');
    if (categoryLabel) {
        categoryLabel.textContent = isAr ? 'النوع:' : 'Category:';
    }
    
    // Update Category select options
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        const options = categorySelect.querySelectorAll('option');
        options.forEach(opt => {
            if (opt.value === 'resale') opt.textContent = isAr ? 'إعادة بيع' : 'Resale';
            if (opt.value === 'primary') opt.textContent = isAr ? 'أولي' : 'Primary';
            if (opt.value === 'rentals') opt.textContent = isAr ? 'إيجار' : 'Rentals';
        });
    }
    
    // Update Zone filter
    const zoneLabel = document.querySelector('label[for="zone"]');
    if (zoneLabel) {
        zoneLabel.textContent = isAr ? 'المنطقة:' : 'Zone:';
    }
    
    // Update Zone select options
    const zoneSelect = document.getElementById('zone');
    if (zoneSelect) {
        const options = zoneSelect.querySelectorAll('option');
        options.forEach(opt => {
            if (opt.value === 'all') opt.textContent = isAr ? 'الكل' : 'All';
            if (opt.value === 'العاصمة الإدارية الجديدة') opt.textContent = isAr ? 'العاصمة الإدارية الجديدة' : 'New Capital';
            if (opt.value === 'الساحل الشمالي') opt.textContent = isAr ? 'الساحل الشمالي' : 'North Coast';
            if (opt.value === 'رأس الحكمة') opt.textContent = isAr ? 'رأس الحكمة' : 'Ras El Hekma';
            if (opt.value === 'القاهرة الجديدة') opt.textContent = isAr ? 'القاهرة الجديدة' : 'New Cairo';
            if (opt.value === 'العين السخنة') opt.textContent = isAr ? 'العين السخنة' : 'Ain El Sokhna';
            if (opt.value === 'الشيخ زايد') opt.textContent = isAr ? 'الشيخ زايد' : 'Sheikh Zayed';
        });
    }
}

function switchUnitTab(tab) {
    currentUnitTab = tab;
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderUnits();
}

// ==================== MISSING FUNCTIONS ====================

function renderAbout() {
    const about = document.getElementById('about');
    const isAr = lang === 'ar';
    about.innerHTML = `
        <h1 class="text-4xl font-bold text-center mb-8 gold-text">${isAr ? 'عن الشركة' : 'About Us'}</h1>
        <p class="text-center silver-text text-xl mb-12">${aboutData.tagline}</p>
        <div class="max-w-4xl mx-auto space-y-8">
            <div class="bg-zinc-900 border border-gold/30 rounded-xl p-8">
                <h2 class="text-2xl font-bold gold-text mb-4">${isAr ? 'رسالتنا' : 'Our Mission'}</h2>
                <p class="text-white leading-relaxed">${isAr ? aboutData.aboutUs.ar : aboutData.aboutUs.en}</p>
            </div>
            <div class="bg-zinc-900 border border-gold/30 rounded-xl p-8">
                <h2 class="text-2xl font-bold gold-text mb-4">${isAr ? 'رؤيتنا' : 'Our Vision'}</h2>
                <p class="text-white leading-relaxed">${isAr ? aboutData.vision.ar : aboutData.vision.en}</p>
            </div>
            <div class="bg-zinc-900 border border-gold/30 rounded-xl p-8">
                <h2 class="text-2xl font-bold gold-text mb-4">${isAr ? 'فريقنا' : 'Our Team'}</h2>
                <p class="text-white leading-relaxed">${isAr ? aboutData.team.ar : aboutData.team.en}</p>
            </div>
            <div class="bg-gold/10 border border-gold/30 rounded-xl p-8">
                <p class="text-white leading-relaxed">${isAr ? aboutData.closing.ar : aboutData.closing.en}</p>
            </div>
        </div>
    `;
}

function addLead(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, select');
    
    const newLead = {
        id: Date.now(),
        name: inputs[0].value,
        phone: inputs[1].value,
        email: inputs[2].value,
        unitCode: inputs[3].value,
        status: inputs[4].value,
        source: "admin",
        createdAt: new Date().toISOString(),
        notes: ""
    };
    
    leads.push(newLead);
    saveLead(newLead);
    form.reset();
    alert('تمت إضافة Lead بنجاح!');
    renderLeadsList();
}

function renderLeadsList() {
    const list = document.getElementById('leadsList');
    if(leads.length === 0) {
        list.innerHTML = '<div class="p-4 text-center text-silver">لا توجد leads</div>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-gold/10 border-b border-gold/30">
                <tr>
                    <th class="p-3 text-right">الاسم</th>
                    <th class="p-3 text-right">الهاتف</th>
                    <th class="p-3 text-right">البريد</th>
                    <th class="p-3 text-right">الحالة</th>
                    <th class="p-3 text-right">التاريخ</th>
                </tr>
            </thead>
            <tbody>
                ${leads.map(l => `
                    <tr class="border-b border-gold/20 hover:bg-black/50">
                        <td class="p-3">${l.name}</td>
                        <td class="p-3">${l.phone}</td>
                        <td class="p-3 text-xs">${l.email}</td>
                        <td class="p-3"><span class="px-2 py-1 rounded text-xs ${l.status === 'converted' ? 'bg-green-900 text-green-200' : 'bg-yellow-900 text-yellow-200'}">${l.status}</span></td>
                        <td class="p-3 text-xs">${new Date(l.createdAt).toLocaleDateString('ar-EG')}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderUnitsList() {
    const list = document.getElementById('unitsList');
    if(units.length === 0) {
        list.innerHTML = '<div class="p-4 text-center text-silver">لا توجد وحدات</div>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-gold/10 border-b border-gold/30">
                <tr>
                    <th class="p-3 text-right">الكود</th>
                    <th class="p-3 text-right">النوع</th>
                    <th class="p-3 text-right">السعر</th>
                    <th class="p-3 text-right">المنطقة</th>
                    <th class="p-3 text-right">الغرف</th>
                    <th class="p-3 text-right">المساحة</th>
                </tr>
            </thead>
            <tbody>
                ${units.map(u => `
                    <tr class="border-b border-gold/20 hover:bg-black/50">
                        <td class="p-3 gold-text font-bold">${u.code}</td>
                        <td class="p-3">${u.type}</td>
                        <td class="p-3">${u.price.toLocaleString()}</td>
                        <td class="p-3">${u.zone}</td>
                        <td class="p-3">${u.rooms}</td>
                        <td class="p-3">${u.space} م²</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function exportUnits() {
    const csv = 'كود,النوع,السعر,المنطقة,الغرف,المساحة\n' + 
        units.map(u => `${u.code},${u.type},${u.price},${u.zone},${u.rooms},${u.space}`).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'units.csv';
    a.click();
}

function exportLeads() {
    const csv = 'الاسم,الهاتف,البريد,كود الوحدة,الحالة,التاريخ\n' + 
        leads.map(l => `${l.name},${l.phone},${l.email},${l.unitCode},${l.status},${l.createdAt}`).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
}

function bulkImport(e) {
    alert('وظيفة الاستيراد من Excel قيد التطوير');
}

function importLeads(e) {
    alert('وظيفة استيراد Leads قيد التطوير');
}

function saveLead(lead) {
    localStorage.setItem('leads', JSON.stringify(leads));
}

function saveUnits() {
    localStorage.setItem('units', JSON.stringify(units));
}


// ==================== EMPLOYEES MANAGEMENT ====================

let employees = JSON.parse(localStorage.getItem('employees')) || [];
let currentUser = null;

// Employee roles and permissions
const ROLES = {
    admin: { name: 'مدير', permissions: ['add_unit', 'edit_unit', 'delete_unit', 'assign_lead', 'manage_employees', 'view_all'] },
    sales: { name: 'سيلز', permissions: ['view_assigned_leads', 'convert_lead', 'view_units'] },
    manager: { name: 'مدير مبيعات', permissions: ['add_unit', 'assign_lead', 'view_all', 'view_assigned_leads', 'convert_lead'] }
};

function showAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-content').forEach(t => t.classList.remove('active-admin-tab'));
    document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById('admin-' + tabName).classList.add('active-admin-tab');
    event.target.classList.add('active');
    
    if(tabName === 'stats') renderAdminStats();
    if(tabName === 'units') {
        renderUnitsList();
        renderUnits();
    }
    if(tabName === 'crm') renderLeadsList();
    if(tabName === 'employees') renderEmployeesList();
}

function addEmployee(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, select');
    
    const newEmployee = {
        id: Date.now(),
        name: inputs[0].value,
        phone: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value,
        role: inputs[4].value,
        canAddUnits: inputs[5].checked,
        createdAt: new Date().toISOString(),
        assignedLeads: [],
        convertedLeads: 0
    };
    
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));
    form.reset();
    alert('تمت إضافة موظف بنجاح!');
    renderEmployeesList();
}

function renderEmployeesList() {
    const list = document.getElementById('employeesList') || document.createElement('div');
    if(employees.length === 0) {
        list.innerHTML = '<div class="p-4 text-center text-silver">لا يوجد موظفين</div>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-gold/10 border-b border-gold/30">
                <tr>
                    <th class="p-3 text-right">الاسم</th>
                    <th class="p-3 text-right">الهاتف</th>
                    <th class="p-3 text-right">الدور</th>
                    <th class="p-3 text-right">إضافة وحدات</th>
                    <th class="p-3 text-right">Leads مسندة</th>
                    <th class="p-3 text-right">محولة</th>
                    <th class="p-3 text-right">إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${employees.map(emp => `
                    <tr class="border-b border-gold/20 hover:bg-black/50">
                        <td class="p-3">${emp.name}</td>
                        <td class="p-3">${emp.phone}</td>
                        <td class="p-3"><span class="px-2 py-1 rounded text-xs bg-gold/20 text-gold">${ROLES[emp.role].name}</span></td>
                        <td class="p-3">${emp.canAddUnits ? '✅' : '❌'}</td>
                        <td class="p-3">${emp.assignedLeads.length}</td>
                        <td class="p-3">${emp.convertedLeads}</td>
                        <td class="p-3 flex gap-2">
                            <button onclick="deleteEmployee(${emp.id})" class="text-red-500 hover:text-red-700 text-xs">حذف</button>
                            <button onclick="editEmployee(${emp.id})" class="text-gold hover:text-gold-light text-xs">تعديل</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function deleteEmployee(id) {
    if(confirm('هل تريد حذف هذا الموظف؟')) {
        employees = employees.filter(e => e.id !== id);
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployeesList();
    }
}

function editEmployee(id) {
    alert('وظيفة التعديل قيد التطوير');
}

function assignLeadToEmployee(leadId, employeeId) {
    const employee = employees.find(e => e.id === employeeId);
    const lead = leads.find(l => l.id === leadId);
    
    if(employee && lead) {
        if(!employee.assignedLeads.includes(leadId)) {
            employee.assignedLeads.push(leadId);
            lead.assignedTo = employeeId;
            lead.status = 'assigned';
            localStorage.setItem('employees', JSON.stringify(employees));
            localStorage.setItem('leads', JSON.stringify(leads));
            alert(`تم تسند Lead إلى ${employee.name}`);
            renderLeadsList();
        }
    }
}

// ==================== ENHANCED UNITS & LEADS MANAGEMENT ====================

function editUnit(id) {
    const unit = units.find(u => u.id === id);
    if(!unit) return;
    
    const newPrice = prompt('السعر الجديد:', unit.price);
    if(newPrice) {
        unit.price = parseInt(newPrice);
        unit.updatedAt = new Date().toISOString();
        saveUnits();
        renderUnitsList();
        alert('تم تحديث الوحدة بنجاح');
    }
}

function deleteUnit(id) {
    if(confirm('هل تريد حذف هذه الوحدة؟')) {
        units = units.filter(u => u.id !== id);
        saveUnits();
        renderUnitsList();
        alert('تم حذف الوحدة');
    }
}

function toggleFeaturedUnit(id) {
    const unit = units.find(u => u.id === id);
    if(unit) {
        unit.featured = !unit.featured;
        saveUnits();
        renderUnitsList();
        renderUnits();
    }
}

function editLead(id) {
    const lead = leads.find(l => l.id === id);
    if(!lead) return;
    
    const newStatus = prompt('الحالة الجديدة (new/assigned/converted):', lead.status);
    if(newStatus) {
        lead.status = newStatus;
        if(newStatus === 'converted') lead.convertedLeads = (lead.convertedLeads || 0) + 1;
        saveLead(lead);
        renderLeadsList();
        alert('تم تحديث Lead');
    }
}

function deleteLead(id) {
    if(confirm('هل تريد حذف هذا Lead؟')) {
        leads = leads.filter(l => l.id !== id);
        localStorage.setItem('leads', JSON.stringify(leads));
        renderLeadsList();
        alert('تم حذف Lead');
    }
}

function toggleFeaturedLead(id) {
    const lead = leads.find(l => l.id === id);
    if(lead) {
        lead.featured = !lead.featured;
        localStorage.setItem('leads', JSON.stringify(leads));
        renderLeadsList();
    }
}

// ==================== ENHANCED RENDERING ====================

function renderUnits() {
    const grid = document.getElementById('units-grid');
    if(!grid) return;
    
    let filtered = units.filter(u => u.type === currentUnitTab);
    
    // Featured first
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    
    // Apply filters
    const codeFilter = document.getElementById('filterCode')?.value;
    const priceFilter = document.getElementById('filterPrice')?.value;
    const roomsFilter = document.getElementById('filterRooms')?.value;
    const zoneFilter = document.getElementById('filterZone')?.value;
    
    if(codeFilter) filtered = filtered.filter(u => u.code.toString().includes(codeFilter));
    if(priceFilter) filtered = filtered.filter(u => u.price <= parseInt(priceFilter));
    if(roomsFilter) filtered = filtered.filter(u => u.rooms == roomsFilter);
    if(zoneFilter) filtered = filtered.filter(u => u.zone === zoneFilter);
    
    grid.innerHTML = filtered.map(unit => `
        <div class="bg-zinc-900 border ${unit.featured ? 'border-gold-light' : 'border-gold/30'} rounded-xl overflow-hidden hover:border-gold transition hover:shadow-lg hover:shadow-gold/20 ${unit.featured ? 'ring-2 ring-gold/50' : ''}">
            <div class="bg-gradient-to-br from-gold/20 to-gold/5 h-40 flex items-center justify-center border-b border-gold/30 relative">
                ${unit.featured ? '<div class="absolute top-2 right-2 bg-gold text-black px-2 py-1 rounded text-xs font-bold">⭐ مميز</div>' : ''}
                <i class="fas fa-building text-4xl gold-text"></i>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold gold-text">كود: ${unit.code}</h3>
                    <span class="text-xs bg-gold/20 text-gold px-2 py-1 rounded">${unit.type}</span>
                </div>
                <p class="text-sm silver-text mb-2">${unit.zone}</p>
                <div class="spec-grid mb-3">
                    <div class="spec-box text-xs">
                        <p class="text-silver">غرف</p>
                        <p class="gold-text font-bold">${unit.rooms}</p>
                    </div>
                    <div class="spec-box text-xs">
                        <p class="text-silver">مساحة</p>
                        <p class="gold-text font-bold">${unit.space}م²</p>
                    </div>
                </div>
                <p class="text-lg font-bold gold-text mb-3">${unit.price.toLocaleString()} EGP</p>
                <button onclick="openUnit(${unit.id})" class="w-full btn-primary text-sm mb-2">عرض التفاصيل</button>
            </div>
        </div>
    `).join('');
}

function renderUnitsList() {
    const list = document.getElementById('unitsList');
    if(!list) return;
    
    if(units.length === 0) {
        list.innerHTML = '<div class="p-4 text-center text-silver">لا توجد وحدات</div>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-gold/10 border-b border-gold/30">
                <tr>
                    <th class="p-3 text-right">الكود</th>
                    <th class="p-3 text-right">النوع</th>
                    <th class="p-3 text-right">السعر</th>
                    <th class="p-3 text-right">المنطقة</th>
                    <th class="p-3 text-right">الغرف</th>
                    <th class="p-3 text-right">المساحة</th>
                    <th class="p-3 text-right">إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${units.map(u => `
                    <tr class="border-b border-gold/20 hover:bg-black/50 ${u.featured ? 'bg-gold/5' : ''}">
                        <td class="p-3 gold-text font-bold">${u.code} ${u.featured ? '⭐' : ''}</td>
                        <td class="p-3">${u.type}</td>
                        <td class="p-3">${u.price.toLocaleString()}</td>
                        <td class="p-3">${u.zone}</td>
                        <td class="p-3">${u.rooms}</td>
                        <td class="p-3">${u.space} م²</td>
                        <td class="p-3 flex gap-2 text-xs">
                            <button onclick="toggleFeaturedUnit(${u.id})" class="text-yellow-500 hover:text-yellow-700">${u.featured ? 'إلغاء' : 'تمييز'}</button>
                            <button onclick="editUnit(${u.id})" class="text-gold hover:text-gold-light">تعديل</button>
                            <button onclick="deleteUnit(${u.id})" class="text-red-500 hover:text-red-700">حذف</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderLeadsList() {
    const list = document.getElementById('leadsList');
    if(!list) return;
    
    if(leads.length === 0) {
        list.innerHTML = '<div class="p-4 text-center text-silver">لا توجد leads</div>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead class="bg-gold/10 border-b border-gold/30">
                <tr>
                    <th class="p-3 text-right">الاسم</th>
                    <th class="p-3 text-right">الهاتف</th>
                    <th class="p-3 text-right">البريد</th>
                    <th class="p-3 text-right">الحالة</th>
                    <th class="p-3 text-right">مسند لـ</th>
                    <th class="p-3 text-right">التاريخ</th>
                    <th class="p-3 text-right">إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${leads.map(l => `
                    <tr class="border-b border-gold/20 hover:bg-black/50 ${l.featured ? 'bg-gold/5' : ''}">
                        <td class="p-3">${l.name} ${l.featured ? '⭐' : ''}</td>
                        <td class="p-3">${l.phone}</td>
                        <td class="p-3 text-xs">${l.email}</td>
                        <td class="p-3"><span class="px-2 py-1 rounded text-xs ${l.status === 'converted' ? 'bg-green-900 text-green-200' : l.status === 'assigned' ? 'bg-blue-900 text-blue-200' : 'bg-yellow-900 text-yellow-200'}">${l.status}</span></td>
                        <td class="p-3 text-xs">${l.assignedTo ? employees.find(e => e.id === l.assignedTo)?.name : 'غير مسند'}</td>
                        <td class="p-3 text-xs">${new Date(l.createdAt).toLocaleDateString('ar-EG')}</td>
                        <td class="p-3 flex gap-2 text-xs">
                            <button onclick="toggleFeaturedLead(${l.id})" class="text-yellow-500 hover:text-yellow-700">${l.featured ? 'إلغاء' : 'تمييز'}</button>
                            <button onclick="editLead(${l.id})" class="text-gold hover:text-gold-light">تعديل</button>
                            <button onclick="deleteLead(${l.id})" class="text-red-500 hover:text-red-700">حذف</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}


// ==================== ADVANCED IMPORT/EXPORT ====================

function bulkImport(e) {
    const file = e.target.files[0];
    if(!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const csv = event.target.result;
            const lines = csv.split('\n');
            const headers = lines[0].split('\t').map(h => h.trim());
            
            let importedCount = 0;
            
            for(let i = 1; i < lines.length; i++) {
                if(!lines[i].trim()) continue;
                
                const values = lines[i].split('\t');
                const row = {};
                
                headers.forEach((header, idx) => {
                    row[header] = values[idx] ? values[idx].trim() : '';
                });
                
                // Map columns to unit object - matching exact Excel format
                const unit = {
                    id: Date.now() + i,
                    code: row['code'] || row['كود'] || '',
                    category: row['Category'] || '',
                    type: row['Category']?.toLowerCase().includes('villa') ? 'primary' : 
                          row['Category']?.toLowerCase().includes('resale') ? 'resale' : 'rentals',
                    city: row['City'] || row['منطقة'] || 'مدينتي',
                    zone: row['منطقة'] || row['City'] || '',
                    building: row['عمارة'] || row['مجموعة'] || '',
                    unit: row['وحدة'] || '',
                    floor: row['الدور'] || '',
                    model: row['النموذج'] || '',
                    delivery: row['الاستلام'] || '',
                    facade: row['الواجهة'] || '',
                    space: parseInt(row['مساحة']?.replace(/,/g, '') || 0),
                    garden: row['جاردن'] || '',
                    rooms: parseInt(row['غرف نوم'] || 0),
                    bathroom: row['حمام'] || '',
                    bookingDate: row['تاريخ الحجز'] || '',
                    installmentPeriod: row['مدة القسط'] || '',
                    payments: parseInt(row['مدفوعات']?.replace(/,/g, '') || 0),
                    offerPrice: parseInt(row['اوفر برايس']?.replace(/,/g, '') || 0),
                    totalPayments: parseInt(row['مدفوعات + اوفر']?.replace(/,/g, '') || 0),
                    installmentDetails: row['تفاصيل الاقساط'] || '',
                    price: parseInt(row['اصل العقد او ثمن الكاش']?.replace(/,/g, '') || row['مدفوعات']?.replace(/,/g, '') || 0),
                    notes: row['ملاحظات'] || '',
                    clientName: row['client name'] || '',
                    clientPhone: row['phone'] || '',
                    status: row['Status'] || 'available',
                    source: row['Source'] || 'imported',
                    createdAt: new Date().toISOString(),
                    featured: false
                };
                
                // Only add if has code and price
                if(unit.code && unit.price > 0) {
                    units.push(unit);
                    importedCount++;
                }
            }
            
            if(importedCount > 0) {
                saveUnits();
                alert(`تم استيراد ${importedCount} وحدة بنجاح!`);
                renderUnitsList();
                renderUnits();
            } else {
                alert('لم يتم العثور على وحدات صحيحة للاستيراد');
            }
        } catch(err) {
            alert('خطأ في قراءة الملف: ' + err.message);
            console.error(err);
        }
    };
    
    reader.readAsText(file);
    e.target.value = '';
}

function importLeads(e) {
    const file = e.target.files[0];
    if(!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const csv = event.target.result;
            const lines = csv.split('\n');
            const headers = lines[0].split('\t').map(h => h.trim());
            
            let importedCount = 0;
            
            for(let i = 1; i < lines.length; i++) {
                if(!lines[i].trim()) continue;
                
                const values = lines[i].split('\t');
                const row = {};
                
                headers.forEach((header, idx) => {
                    row[header] = values[idx] ? values[idx].trim() : '';
                });
                
                // Map columns to lead object - matching exact Excel format
                const lead = {
                    id: Date.now() + i,
                    period: row['الفترة'] || '',
                    name: row['الاسم'] || '',
                    phone: row['تليفون'] || '',
                    source: row['مصدر الليد'] || 'imported',
                    contactMethod: row['طريقة تواصل العميل'] || '',
                    ad: row['الاعلان'] || '',
                    customerRequest: row['طلب العميل'] || '',
                    rating: row['تقييم من 1 ل 10'] || '',
                    salesPerson: row['Sales'] || '',
                    whatsapp: row['واتس'] || '',
                    phone2: row['فون'] || '',
                    followUpResult: row['نتيجة متابعة السيلز'] || '',
                    status: 'new',
                    createdAt: new Date().toISOString(),
                    featured: false,
                    assignedTo: null
                };
                
                if(lead.name && lead.phone) {
                    leads.push(lead);
                    importedCount++;
                }
            }
            
            if(importedCount > 0) {
                localStorage.setItem('leads', JSON.stringify(leads));
                alert(`تم استيراد ${importedCount} lead بنجاح!`);
                renderLeadsList();
            } else {
                alert('لم يتم العثور على leads صحيحة للاستيراد');
            }
        } catch(err) {
            alert('خطأ في قراءة الملف: ' + err.message);
            console.error(err);
        }
    };
    
    reader.readAsText(file);
    e.target.value = '';
}

function exportUnits() {
    const headers = ['الكود', 'النوع', 'السعر', 'المنطقة', 'الغرف', 'المساحة', 'الجاردن', 'الواجهة', 'الاستلام', 'الحالة', 'اسم العميل', 'هاتف العميل', 'ملاحظات'];
    
    const rows = units.map(u => [
        u.code,
        u.type,
        u.price,
        u.zone,
        u.rooms,
        u.space,
        u.garden || '--',
        u.facade || '--',
        u.delivery || '--',
        u.status,
        u.clientName || '--',
        u.clientPhone || '--',
        u.notes || '--'
    ]);
    
    const csv = [headers, ...rows].map(row => row.join('\t')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `units_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportLeads() {
    const headers = ['الاسم', 'الهاتف', 'البريد', 'كود الوحدة', 'الحالة', 'المصدر', 'التاريخ', 'ملاحظات'];
    
    const rows = leads.map(l => [
        l.name,
        l.phone,
        l.email || '--',
        l.unitCode || '--',
        l.status,
        l.source,
        new Date(l.createdAt).toLocaleDateString('ar-EG'),
        l.notes || '--'
    ]);
    
    const csv = [headers, ...rows].map(row => row.join('\t')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==================== UNIT OPERATIONS ====================

function addUnit(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input[type="number"], select');
    
    const imagesInput = document.getElementById('unitImages');
    const videosInput = document.getElementById('unitVideos');
    const pdfsInput = document.getElementById('unitPDFs');
    
    const images = [];
    const videos = [];
    const pdfs = [];
    let filesProcessed = 0;
    let totalFiles = 0;
    
    // Count total files
    if(imagesInput) totalFiles += imagesInput.files.length;
    if(videosInput) totalFiles += videosInput.files.length;
    if(pdfsInput) totalFiles += pdfsInput.files.length;
    
    const newUnit = {
        id: Date.now(),
        code: inputs[0].value,
        type: inputs[1].value,
        price: parseInt(inputs[2].value),
        zone: inputs[3].value,
        rooms: parseInt(inputs[4].value),
        space: parseInt(inputs[5].value),
        images: images,
        videos: videos,
        pdfs: pdfs,
        createdAt: new Date().toISOString(),
        featured: false,
        status: 'available'
    };
    
    function processFile(file, type) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                if(type === 'image') {
                    images.push({name: file.name, data: e.target.result});
                } else if(type === 'video') {
                    videos.push({name: file.name, data: e.target.result});
                } else if(type === 'pdf') {
                    pdfs.push({name: file.name, data: e.target.result});
                }
                filesProcessed++;
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }
    
    async function processAllFiles() {
        const promises = [];
        
        if(imagesInput && imagesInput.files.length > 0) {
            for(let file of imagesInput.files) {
                promises.push(processFile(file, 'image'));
            }
        }
        
        if(videosInput && videosInput.files.length > 0) {
            for(let file of videosInput.files) {
                promises.push(processFile(file, 'video'));
            }
        }
        
        if(pdfsInput && pdfsInput.files.length > 0) {
            for(let file of pdfsInput.files) {
                promises.push(processFile(file, 'pdf'));
            }
        }
        
        if(promises.length > 0) {
            await Promise.all(promises);
        }
        
        units.push(newUnit);
        saveUnits();
        form.reset();
        alert('تمت إضافة الوحدة بنجاح!');
        renderUnitsList();
        renderUnits();
    }
    
    if(totalFiles > 0) {
        processAllFiles();
    } else {
        units.push(newUnit);
        saveUnits();
        form.reset();
        alert('تمت إضافة الوحدة بنجاح!');
        renderUnitsList();
        renderUnits();
    }
}

function openUnit(id) {
    const unit = units.find(u => u.id === id);
    if(!unit) return;
    
    document.getElementById('m-code').textContent = unit.code;
    document.getElementById('m-address').textContent = unit.zone;
    document.getElementById('m-specs').textContent = `${unit.rooms} غرف | ${unit.space} م²`;
    document.getElementById('m-finance').textContent = `${unit.price.toLocaleString()} EGP`;
    document.getElementById('m-dates').textContent = `تاريخ الإضافة: ${new Date(unit.createdAt).toLocaleDateString('ar-EG')}`;
    document.getElementById('m-notes').textContent = unit.notes || 'لا توجد ملاحظات';
    
    const waBtn = document.getElementById('wa-btn');
    waBtn.onclick = () => {
        const message = `مرحباً، أنا مهتم بالوحدة رقم ${unit.code} في ${unit.zone}`;
        window.open(`https://wa.me/201159333060?text=${encodeURIComponent(message)}`, '_blank');
    };
    
    document.getElementById('unitModal').style.display = 'block';
}


// ==================== COMPANY SETTINGS ====================

function saveCompanySettings(e) {
    e.preventDefault();
    
    const settings = {
        companyName: document.getElementById('companyName').value,
        companyEmail: document.getElementById('companyEmail').value,
        companyPhone1: document.getElementById('companyPhone1').value,
        companyPhone2: document.getElementById('companyPhone2').value,
        companyAddress: document.getElementById('companyAddress').value,
        companyLogo: document.getElementById('companyLogo').value,
        companyDescAr: document.getElementById('companyDescAr').value,
        companyDescEn: document.getElementById('companyDescEn').value
    };
    
    localStorage.setItem('companySettings', JSON.stringify(settings));
    alert('تم حفظ إعدادات الشركة بنجاح!');
}

function loadCompanySettings() {
    const settings = JSON.parse(localStorage.getItem('companySettings')) || {};
    
    if(document.getElementById('companyName')) {
        document.getElementById('companyName').value = settings.companyName || 'Summit Team Real Estate';
    }
    if(document.getElementById('companyEmail')) {
        document.getElementById('companyEmail').value = settings.companyEmail || 'admin@str-summitteam.com';
    }
    if(document.getElementById('companyPhone1')) {
        document.getElementById('companyPhone1').value = settings.companyPhone1 || '01159333060';
    }
    if(document.getElementById('companyPhone2')) {
        document.getElementById('companyPhone2').value = settings.companyPhone2 || '01222108383';
    }
    if(document.getElementById('companyAddress')) {
        document.getElementById('companyAddress').value = settings.companyAddress || 'East Hub Mall, Building 16, Madinaty, New Cairo';
    }
    if(document.getElementById('companyLogo')) {
        document.getElementById('companyLogo').value = settings.companyLogo || 'logo.jpg';
    }
    if(document.getElementById('companyDescAr')) {
        document.getElementById('companyDescAr').value = settings.companyDescAr || '';
    }
    if(document.getElementById('companyDescEn')) {
        document.getElementById('companyDescEn').value = settings.companyDescEn || '';
    }
}

// Load settings when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCompanySettings();
});
