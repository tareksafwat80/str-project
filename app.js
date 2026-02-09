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
    renderAbout();
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
