// ==================== DATA MANAGEMENT ====================

// Company Data - Updated with full profile
let aboutData = JSON.parse(localStorage.getItem('aboutData')) || {
    tagline: "Where Every Step Leads To The Summit | حيث تؤدي كل خطوة إلى القمة",
    
    aboutUs: {
        image: '',
        en: "Our company is a pioneer and emerging strongly and specialized in the field of marketing and real estate investment in the Egyptian market. Our company was established by a professional loyal team in the field of marketing and real estate development. Our company also has all the required permits and approvals. Our company is a pioneer in effective solutions with high quality. We are always working to use the latest technology and systems available in the field. We differ a lot from our competitors in terms of the quality of our services, the efficiency of our human elements and the diversity of our products. And our commitment to providing the best value in the market always. We provide strict control systems (human / physical) for the company's employees to ensure and confirm the quality of our services.",
        ar: "شركتنا رائدة وناشئة بقوة و متخصصة فى مجال التسويق والإستثمار العقاري بالسوق المصري. تأسست شركتنا بواسطة فريق مخلص محترف فى مجال التسويق والتطوير العقاري. كما أن شركتنا حاصلة على كافة التصاريح والموافقات المطلوبة. شركتنا رائدة فى الحلول الفعالة ذات الجودة العالية ونعمل دائماً على إستخدام أحدث تكنولوجيا وأنظمة متاحة فى المجال. نختلف كثيراً عن منافسينا من حيث جودة خدماتنا وكفاءة عناصرنا البشرية وتنوع منتجاتنا وإلتزامنا بتقديم أفضل قيمة بالسوق دائماً. ونوفر أنظمة مراقبة صارمة (بشرية / مادية) للعاملين بالشركة لضمان وتأكيد جودة خدماتنا."
    },
    
    vision: {
        image: '',
        en: "Providing the best value for the best price in the field of real estate marketing by combining elements of quality and excellence with excellent and competitive financial value. To be our company your primary source for meeting all your needs in the field of real estate investment and to be a leader without competition in the comfort and satisfaction of its clients. We believe that complete customer satisfaction is a goal that can be achieved through trust, hard teamwork, and follow-up under the overarching theme of professionalism. Our strict measures for cost control and customer service enable us to provide the best diverse and competitive value in the field, while delivering the highest level of service.",
        ar: "تقديم أفضل قيمة مقابل افضل سعر فى مجال التسويق العقاري بالدمج بين عنصرى الجودة والتميز مقابل القيمة المالية الممتازة والتنافسية. أن تكون شركتنا مصدرك الأول لتلبية جميع إحتياجاتك في مجال الاستثمار العقاري وأن تكون رائده بلا منافس فى راحة ورضا عملائها. نؤمن أن رضا عملاؤنا الكامل هو هدف يمكن بلوغه و تحقيقة من خلال الثقة والعمل الجماعى الجاد والمتابعة تحت عنوان كبير وهو الإحتراف. إجراءاتنا الصارمة لمراقبة التكاليف وخدمة العملاء تمكننا من توفير أفضل قيمة متنوعة وتنافسية فى المجال مع تقديم أعلى مستوى للخدمة."
    },
    
    team: {
        image: '',
        en: "A distinguished selection of skilled and experienced individuals from Egypt and several Arab countries manages the company. We take pride in our employees as they are carefully selected from those with extensive experience in investment and real estate marketing. Our employees are trained and have the best advanced and specialized training programs. Other than the internal training programs provided by the company. Our company has a strong corporate culture that creates shared values of responsibility, ownership and entrepreneurship among its employees. In general, our staff are multi-skilled, adept and have a lot of experience. And you can benefit from our services in more ways than you think.",
        ar: "يتولى إدارة الشركة نخبة مميزة منتقاه من أصحاب الكفاءات والخبرات المتنوعة فى مصر و عدد من الدول العربية. نفخر بموظفينا حيث يتم إختيارهم بعناية فائقة من ذوى الخبرات الكبيرة فى مجال الاستثمار والتسويق العقاري. موظفينا مدربون وحاصلون على أفضل البرامج التدريبية المتطورة والمتخصصة بخلاف برامج التدريب الداخلية التى تقدمها الشركة. شركتنا لديها ثقافة الشركات القوية التى تخلق القيم المشتركة للمسئولية والملكية و روح المبادره بين موظفيها. بصفة عامة موظفينا متعددو المهارات وبارعون ولديهم الكثير من الخبرة ويمكنك الإستفاده من خدماتنا بطرق أكثر مما تظن."
    },
    
    closing: {
        image: '',
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
    // Hide all tab content sections
    document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
    // Also hide units-section explicitly
    document.getElementById('units-section').style.display = 'none';
    // Remove active from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // Map tab names to button text
    const tabLabels = {
        'home': 'الرئيسية',
        'about': 'عن الشركة',
        'resale': 'ريسيل',
        'primary': 'برايمري',
        'rentals': 'إيجار',
        'services': 'مناطق عملنا',
        'partners': 'شركاؤنا'
    };
    const label = tabLabels[tabName];
    if(label) {
        const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.textContent.trim() === label);
        if(activeBtn) activeBtn.classList.add('active');
    }

    if(['resale', 'primary', 'rentals'].includes(tabName)) {
        currentUnitTab = tabName;
        document.getElementById('units-section').style.display = 'block';
        renderUnits();
    } else {
        const section = document.getElementById(tabName);
        if(section) {
            section.style.display = 'block';
            if(tabName === 'about') renderAbout();
        }
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== UNITS MANAGEMENT ====================

// ==================== CRM MANAGEMENT ====================

// ==================== ABOUT PAGE ====================

// ==================== STORAGE ====================

function saveLeads() {
    localStorage.setItem('leads', JSON.stringify(leads));
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
    
    // Units by type
    const resaleUnits = units.filter(u => u.type === 'resale').length;
    const resaleFeatured = units.filter(u => u.type === 'resale' && u.featured).length;
    
    const primaryUnits = units.filter(u => u.type === 'primary').length;
    const primaryFeatured = units.filter(u => u.type === 'primary' && u.featured).length;
    
    const rentalUnits = units.filter(u => u.type === 'rentals').length;
    const rentalFeatured = units.filter(u => u.type === 'rentals' && u.featured).length;
    
    const totalUnits = units.length;
    
    // Leads stats
    const totalLeads = leads.length;
    const newLeads = leads.filter(l => l.status === 'new').length;
    const convertedLeads = leads.filter(l => l.status === 'converted').length;
    
    statsDiv.innerHTML = `
        <!-- Row 1: Main Stats -->
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
        
        <!-- Row 2: Resale Units -->
        <div class="bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-500/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">وحدات ريسيل</p>
            <p class="text-3xl font-bold text-purple-400">${resaleUnits}</p>
            <p class="text-xs text-purple-300 mt-1">مميز: ${resaleFeatured}</p>
        </div>
        
        <!-- Row 2: Primary Units -->
        <div class="bg-gradient-to-br from-cyan-900/20 to-cyan-900/5 border border-cyan-500/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">وحدات برايمري</p>
            <p class="text-3xl font-bold text-cyan-400">${primaryUnits}</p>
            <p class="text-xs text-cyan-300 mt-1">مميز: ${primaryFeatured}</p>
        </div>
        
        <!-- Row 2: Rental Units -->
        <div class="bg-gradient-to-br from-orange-900/20 to-orange-900/5 border border-orange-500/30 rounded-lg p-6">
            <p class="text-silver text-sm mb-2">وحدات إيجار</p>
            <p class="text-3xl font-bold text-orange-400">${rentalUnits}</p>
            <p class="text-xs text-orange-300 mt-1">مميز: ${rentalFeatured}</p>
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
    
    // Update Code input placeholder
    const codeInput = document.getElementById('filterCode');
    if (codeInput) {
        codeInput.placeholder = isAr ? 'كود الوحدة' : 'Unit Code';
    }
    
    // Update Price filter
    const priceSelect = document.getElementById('filterPrice');
    if (priceSelect) {
        const options = priceSelect.querySelectorAll('option');
        options.forEach(opt => {
            if (opt.value === '') opt.textContent = isAr ? 'السعر' : 'Price';
            if (opt.value === '2000000') opt.textContent = isAr ? 'تحت 2 مليون' : 'Under 2M';
            if (opt.value === '5000000') opt.textContent = isAr ? 'تحت 5 مليون' : 'Under 5M';
            if (opt.value === '10000000') opt.textContent = isAr ? 'تحت 10 مليون' : 'Under 10M';
        });
    }
    
    // Update Rooms filter
    const roomsSelect = document.getElementById('filterRooms');
    if (roomsSelect) {
        const options = roomsSelect.querySelectorAll('option');
        options.forEach(opt => {
            if (opt.value === '') opt.textContent = isAr ? 'عدد الغرف' : 'Rooms';
            if (opt.value === '1') opt.textContent = isAr ? 'غرفة واحدة' : '1 Room';
            if (opt.value === '2') opt.textContent = isAr ? 'غرفتان' : '2 Rooms';
            if (opt.value === '3') opt.textContent = isAr ? 'ثلاث غرف' : '3 Rooms';
        });
    }
    
    // Update Zone filter
    const zoneSelect = document.getElementById('filterZone');
    if (zoneSelect) {
        const options = zoneSelect.querySelectorAll('option');
        options.forEach(opt => {
            if (opt.value === '') opt.textContent = isAr ? 'المنطقة' : 'Zone';
            if (opt.value === 'مدينتي') opt.textContent = isAr ? 'مدينتي' : 'Madinaty';
            if (opt.value === 'الرحاب') opt.textContent = isAr ? 'الرحاب' : 'Al Rehab';
            if (opt.value === 'العاصمة الإدارية') opt.textContent = isAr ? 'العاصمة الإدارية' : 'New Capital';
            if (opt.value === 'الساحل الشمالي') opt.textContent = isAr ? 'الساحل الشمالي' : 'North Coast';
            if (opt.value === 'رأس الحكمة') opt.textContent = isAr ? 'رأس الحكمة' : 'Ras El Hekma';
            if (opt.value === 'القاهرة الجديدة') opt.textContent = isAr ? 'القاهرة الجديدة' : 'New Cairo';
            if (opt.value === 'العين السخنة') opt.textContent = isAr ? 'العين السخنة' : 'Ain El Sokhna';
            if (opt.value === 'الشيخ زايد') opt.textContent = isAr ? 'الشيخ زايد' : 'Sheikh Zayed';
        });
    }
    
    // Update unit tab buttons
    const unitTabBtns = document.querySelectorAll('#units-section .nav-btn');
    unitTabBtns.forEach(btn => {
        if (btn.textContent.includes('ريسيل') || btn.textContent.includes('Resale')) {
            btn.textContent = isAr ? 'ريسيل' : 'Resale';
        }
        if (btn.textContent.includes('برايمري') || btn.textContent.includes('Primary')) {
            btn.textContent = isAr ? 'برايمري' : 'Primary';
        }
        if (btn.textContent.includes('إيجار') || btn.textContent.includes('Rentals')) {
            btn.textContent = isAr ? 'إيجار' : 'Rentals';
        }
    });
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
    
    function sectionImage(img, fallbackIcon, fallbackColor) {
        if(img) {
            return `<div class="flex items-center justify-center p-4 overflow-hidden"><img src="${img}" class="w-full h-48 object-cover rounded-lg" alt=""></div>`;
        }
        return `<div class="bg-gradient-to-br ${fallbackColor} flex items-center justify-center p-10"><i class="fas ${fallbackIcon} text-6xl gold-text"></i></div>`;
    }
    
    about.innerHTML = `
        <h1 class="text-4xl font-bold text-center mb-2 gold-text">عن الشركة | About Us</h1>
        <p class="text-center silver-text text-xl mb-12">حيث تؤدي كل خطوة إلى القمة | Where every step leads to the summit</p>
        <div class="max-w-6xl mx-auto space-y-10">
            
            <!-- Mission Section -->
            <div class="bg-zinc-900 border border-gold/30 rounded-xl overflow-hidden">
                <div class="grid md:grid-cols-5 gap-0">
                    ${sectionImage(aboutData.aboutUs.image, 'fa-bullseye', 'from-gold/20 to-gold/5')}
                    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-l border-gold/20" dir="rtl">
                        <h2 class="text-2xl font-bold gold-text mb-3">رسالتنا</h2>
                        <p class="text-white leading-relaxed text-sm">${aboutData.aboutUs.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6" dir="ltr">
                        <h2 class="text-2xl font-bold gold-text mb-3">Our Mission</h2>
                        <p class="text-silver leading-relaxed text-sm">${aboutData.aboutUs.en}</p>
                    </div>
                </div>
            </div>
            
            <!-- Vision Section -->
            <div class="bg-zinc-900 border border-gold/30 rounded-xl overflow-hidden">
                <div class="grid md:grid-cols-5 gap-0">
                    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-l border-gold/20" dir="rtl">
                        <h2 class="text-2xl font-bold gold-text mb-3">رؤيتنا</h2>
                        <p class="text-white leading-relaxed text-sm">${aboutData.vision.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-l border-gold/20" dir="ltr">
                        <h2 class="text-2xl font-bold gold-text mb-3">Our Vision</h2>
                        <p class="text-silver leading-relaxed text-sm">${aboutData.vision.en}</p>
                    </div>
                    ${sectionImage(aboutData.vision.image, 'fa-eye', 'from-purple-900/20 to-purple-900/5')}
                </div>
            </div>
            
            <!-- Team Section -->
            <div class="bg-zinc-900 border border-gold/30 rounded-xl overflow-hidden">
                <div class="grid md:grid-cols-5 gap-0">
                    ${sectionImage(aboutData.team.image, 'fa-users', 'from-cyan-900/20 to-cyan-900/5')}
                    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-l border-gold/20" dir="rtl">
                        <h2 class="text-2xl font-bold gold-text mb-3">فريقنا</h2>
                        <p class="text-white leading-relaxed text-sm">${aboutData.team.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6" dir="ltr">
                        <h2 class="text-2xl font-bold gold-text mb-3">Our Team</h2>
                        <p class="text-silver leading-relaxed text-sm">${aboutData.team.en}</p>
                    </div>
                </div>
            </div>
            
            <!-- Closing Section -->
            <div class="bg-gold/10 border border-gold/30 rounded-xl overflow-hidden">
                <div class="grid md:grid-cols-5 gap-0">
                    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-l border-gold/20" dir="rtl">
                        <h2 class="text-2xl font-bold gold-text mb-3">لماذا نحن؟</h2>
                        <p class="text-white leading-relaxed text-sm">${aboutData.closing.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-l border-gold/20" dir="ltr">
                        <h2 class="text-2xl font-bold gold-text mb-3">Why Us?</h2>
                        <p class="text-silver leading-relaxed text-sm">${aboutData.closing.en}</p>
                    </div>
                    ${sectionImage(aboutData.closing.image, 'fa-trophy', 'from-green-900/20 to-green-900/5')}
                </div>
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
        renderAdminUnitsTable();
    }
    if(tabName === 'crm') renderLeadsList();
    if(tabName === 'employees') renderEmployeesList();
    if(tabName === 'settings') loadAboutEditor();
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
                            <button onclick="openEditEmployeeModal(${emp.id})" class="text-gold hover:text-gold-light text-xs">تعديل</button>
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
    
    // Pagination
    const itemsPerPage = 20;
    const currentPage = window.currentUnitPage || 1;
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const paginatedUnits = filtered.slice(startIdx, endIdx);
    
    grid.innerHTML = paginatedUnits.map(unit => `
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
    
    // Add pagination controls
    addPaginationControls(grid, currentPage, totalPages, 'goToUnitPage');
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
                            <button onclick="openEditUnitModal(${u.id})" class="text-gold hover:text-gold-light">تعديل</button>
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
                            <button onclick="openEditLeadModal(${l.id})" class="text-gold hover:text-gold-light">تعديل</button>
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
            
            // Detect delimiter (comma or tab)
            const firstLine = lines[0];
            const delimiter = firstLine.includes(',') ? ',' : '\t';
            
            // Parse headers and remove quotes
            const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^"|"$/g, ''));
            
            let importedCount = 0;
            
            for(let i = 1; i < lines.length; i++) {
                if(!lines[i].trim()) continue;
                
                // Parse values and remove quotes
                const values = lines[i].split(delimiter).map(v => v.trim().replace(/^"|"$/g, ''));
                const row = {};
                
                headers.forEach((header, idx) => {
                    row[header] = values[idx] || '';
                });
                
                // Map columns to unit object
                const unit = {
                    id: Date.now() + i,
                    code: row['code :'] || row['code'] || row['كود'] || '',
                    category: row['Category :'] || row['Category'] || '',
                    type: row['Category :']?.toLowerCase().includes('villa') ? 'primary' : 
                          row['Category :']?.toLowerCase().includes('resale') ? 'resale' : 'rentals',
                    city: row['City :'] || row['City'] || 'Madinaty',
                    zone: row['منطقة :'] || row['منطقة'] || '',
                    building: row['عمارة :'] || row['عمارة'] || row['مجموعة :'] || row['مجموعة'] || '',
                    unit: row['وحدة :'] || row['وحدة'] || '',
                    floor: row['الدور :'] || row['الدور'] || '',
                    model: row['النموذج :'] || row['النموذج'] || '',
                    delivery: row['الاستلام :'] || row['الاستلام'] || '',
                    facade: row['الواجهة :'] || row['الواجهة'] || '',
                    space: parseInt((row['مساحة :'] || row['مساحة'] || '0')?.toString().replace(/,/g, '')) || 0,
                    garden: row['جاردن :'] || row['جاردن'] || '',
                    rooms: parseInt(row['غرف نوم :'] || row['غرف نوم'] || 0),
                    bathroom: row['حمام :'] || row['حمام'] || '',
                    bookingDate: row['تاريخ الحجز :'] || row['تاريخ الحجز'] || '',
                    installmentPeriod: row['مدة القسط :'] || row['مدة القسط'] || '',
                    payments: parseInt((row['مدفوعات :'] || row['مدفوعات'] || '0')?.toString().replace(/,/g, '')) || 0,
                    offerPrice: parseInt((row['اوفر برايس :'] || row['اوفر برايس'] || '0')?.toString().replace(/,/g, '')) || 0,
                    totalPayments: parseInt((row['مدفوعات + اوفر :'] || row['مدفوعات + اوفر'] || '0')?.toString().replace(/,/g, '')) || 0,
                    installmentDetails: row['تفاصيل الاقساط :'] || row['تفاصيل الاقساط'] || '',
                    price: parseInt((row['اصل العقد او ثمن الكاش :'] || row['اصل العقد او ثمن الكاش'] || row['مدفوعات :'] || row['مدفوعات'] || '0')?.toString().replace(/,/g, '')) || 0,
                    notes: row['ملاحظات :'] || row['ملاحظات'] || '',
                    clientName: row['client name'] || '',
                    clientPhone: row['phone'] || row['phone 2'] || '',
                    status: row['Status :'] || row['Status'] || 'available',
                    source: row['Source :'] || row['Source'] || 'imported',
                    createdAt: new Date().toISOString(),
                    featured: false
                };
                
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
    
    reader.readAsText(file, 'UTF-8');
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
            
            // Detect delimiter (comma or tab)
            const firstLine = lines[0];
            const delimiter = firstLine.includes(',') ? ',' : '\t';
            
            // Parse headers and remove quotes
            const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^"|"$/g, ''));
            
            let importedCount = 0;
            
            for(let i = 1; i < lines.length; i++) {
                if(!lines[i].trim()) continue;
                
                // Parse values and remove quotes
                const values = lines[i].split(delimiter).map(v => v.trim().replace(/^"|"$/g, ''));
                const row = {};
                
                headers.forEach((header, idx) => {
                    row[header] = values[idx] || '';
                });
                
                // Map columns to lead object
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
    
    reader.readAsText(file, 'UTF-8');
    e.target.value = '';
}
function downloadLeadsTemplate() {
    const headers = [
        'name',
        'phone',
        'email',
        'status',
        'notes',
        'assigned_to'
    ];
    
    const sampleData = [
        ['أحمد محمد', '01001234567', 'ahmed@email.com', 'new', 'عميل جديد', 'محمود'],
        ['فاطمة علي', '01001234568', 'fatima@email.com', 'follow-up', 'في انتظار الرد', 'سارة'],
        ['محمود حسن', '01001234569', 'mahmoud@email.com', 'converted', 'عميل محول', 'محمود']
    ];
    
    let csvContent = headers.join('\t') + '\n';
    sampleData.forEach(row => {
        csvContent += row.join('\t') + '\n';
    });
    
    const blob = new Blob([csvContent], { type: 'text/tab-separated-values;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'leads_template.tsv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('تم تحميل تيمبلت الـ Leads بنجاح! ✅');
}
// Function to render customer-facing unit cards (simplified view with 9 fields)
function renderCustomerUnits() {
    const container = document.getElementById('unitsList');
    if (!container) return;
    
    let filtered = units.filter(u => u.status !== 'Sold');
    
    // Sort: featured first, then by price
    filtered.sort((a, b) => {
        if (b.featured !== a.featured) return b.featured - a.featured;
        return a.price - b.price;
    });
    
    // Pagination
    const itemsPerPage = 20;
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentUnitPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedUnits = filtered.slice(start, end);
    
    let html = '<div class="grid md:grid-cols-4 gap-6">';
    
    paginatedUnits.forEach(unit => {
        const imageUrl = unit.images && unit.images[0] ? unit.images[0] : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23333" width="300" height="200"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999" font-size="16"%3ENo Image%3C/text%3E%3C/svg%3E';
        
        html += `
            <div class="bg-zinc-900 rounded-lg overflow-hidden border border-gold/30 hover:border-gold transition">
                <img src="${imageUrl}" alt="${unit.code}" class="w-full h-48 object-cover">
                <div class="p-4 space-y-2">
                    ${unit.featured ? '<div class="text-gold text-sm">⭐ مميز</div>' : ''}
                    <h3 class="gold-text font-bold">${unit.zone} - ${unit.building}</h3>
                    <div class="text-silver text-sm space-y-1">
                        <p>📍 المنطقة: ${unit.zone}</p>
                        <p>🏢 المجموعة: ${unit.building}</p>
                        <p>🛏️ الغرف: ${unit.rooms}</p>
                        <p>📐 المساحة: ${unit.space} م²</p>
                        <p>💰 السعر: ${unit.price?.toLocaleString()} جنيه</p>
                        ${unit.offerPrice ? `<p>🎁 اوفر برايس: ${unit.offerPrice?.toLocaleString()} جنيه</p>` : ''}
                        <p>📅 التقسيط: ${unit.installmentPeriod}</p>
                        <p>🚚 الاستلام: ${unit.delivery}</p>
                    </div>
                    <button onclick="contactAboutUnit('${unit.code}')" class="w-full btn-primary mt-2">تواصل معنا</button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    // Add pagination
    if (totalPages > 1) {
        html += '<div class="flex justify-center gap-2 mt-6">';
        if (currentUnitPage > 1) {
            html += `<button onclick="currentUnitPage--; renderCustomerUnits()" class="btn-secondary">السابق</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            html += `<button onclick="currentUnitPage=${i}; renderCustomerUnits()" class="btn-${currentUnitPage === i ? 'primary' : 'secondary'}">${i}</button>`;
        }
        if (currentUnitPage < totalPages) {
            html += `<button onclick="currentUnitPage++; renderCustomerUnits()" class="btn-secondary">التالي</button>`;
        }
        html += '</div>';
    }
    
    container.innerHTML = html;
}

// Contact function for customers
function contactAboutUnit(code) {
    const message = `أنا مهتم بالوحدة رقم ${code}`;
    window.open(`https://wa.me/201159333060?text=${encodeURIComponent(message)}`, '_blank');
}
