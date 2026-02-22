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


// Partners Data
let partnersData = JSON.parse(localStorage.getItem('partnersData')) || [
    { id: 1, name: 'شركة الأهلي العقارية', logo: 'https://via.placeholder.com/200x100?text=Ahly', description: 'متخصصة في المشاريع السكنية الكبرى' },
    { id: 2, name: 'شركة الإمارات للتطوير', logo: 'https://via.placeholder.com/200x100?text=Emirates', description: 'رائدة في التطوير العقاري الفاخر' },
    { id: 3, name: 'شركة النيل للاستثمار', logo: 'https://via.placeholder.com/200x100?text=Nile', description: 'متخصصة في المشاريع التجارية' },
    { id: 4, name: 'شركة الرحاب للتطوير', logo: 'https://via.placeholder.com/200x100?text=Rehab', description: 'رائدة في المجتمعات العمرانية' },
    { id: 5, name: 'شركة العاصمة الإدارية', logo: 'https://via.placeholder.com/200x100?text=Capital', description: 'متخصصة في مشاريع العاصمة الإدارية' },
    { id: 6, name: 'شركة الساحل الشمالي', logo: 'https://via.placeholder.com/200x100?text=Coast', description: 'متخصصة في مشاريع الساحل الشمالي' }
];

// Services/Areas Data
let servicesData = JSON.parse(localStorage.getItem('servicesData')) || [
    { id: 1, name: 'مدينتي', description: 'مجتمع عمراني متكامل بالقاهرة الجديدة', units: 45 },
    { id: 2, name: 'الرحاب', description: 'مدينة سكنية حديثة بالقاهرة الجديدة', units: 38 },
    { id: 3, name: 'العاصمة الإدارية', description: 'مشاريع حكومية وسكنية بالعاصمة الجديدة', units: 52 },
    { id: 4, name: 'الساحل الشمالي', description: 'مشاريع سياحية وسكنية على الساحل', units: 28 },
    { id: 5, name: 'رأس الحكمة', description: 'منتجعات ومشاريع سياحية بالساحل الشمالي', units: 35 },
    { id: 6, name: 'القاهرة الجديدة', description: 'مشاريع سكنية وتجارية بالقاهرة الجديدة', units: 42 }
];


const areas = ["مدينتي", "الرحاب", "العاصمة الإدارية", "الساحل الشمالي", "رأس الحكمة", "القاهرة الجديدة", "العين السخنة", "الشيخ زايد"];

// Initialize data from localStorage


// ==================== REAL ESTATE DATA FROM EXCEL ====================

// ==================== REAL ESTATE DATA FROM EXCEL ====================
let units = [];
// Load resale and rental units from separate JSON files
Promise.all([
    fetch('resale.json').then(r => r.json()),
    fetch('rental.json').then(r => r.json())
])
.then(([resaleData, rentalData]) => {
    const resaleWithType = resaleData.map(u => ({ ...u, type: 'resale' }));
    const rentalWithType = rentalData.map(u => ({ ...u, type: 'rental' }));
    units = [...resaleWithType, ...rentalWithType];
    console.log(`✅ تم تحميل ${resaleData.length} ريسيل + ${rentalData.length} إيجار = ${units.length} وحدة`);
})
.catch(error => console.error('خطأ في تحميل الوحدات:', error));

// ==================== LEADS DATA FROM EXCEL ====================
let leads = [];
// Load leads from JSON file
fetch('leads.json')
    .then(response => response.json())
    .then(data => {
        leads = data;
        console.log(`✅ تم تحميل ${leads.length} ليد`);
    })
    .catch(error => console.error('خطأ في تحميل الليدز:', error));

// ==================== PAGINATION VARIABLES ====================
let currentUnitsPage = 1;
let currentLeadsPage = 1;
const itemsPerPage = 30;
let filteredUnits = [];
let filteredLeads = [];

// ==================== FILTER VARIABLES ====================
let currentFilters = {
    units: {
        code: '',
        area: '',
        minSpace: '',
        maxSpace: '',
        minPrice: '',
        maxPrice: '',
        category: ''
    },
    leads: {
        name: '',
        phone: '',
        source: '',
        campaign: ''
    }
};





let currentTab = 'home';
let currentUnitTab = 'resale';
const ADMIN_PASSWORD = 'str2026';



// Employee Permissions System
let employeePermissions = {
    canViewUnits: localStorage.getItem('employeeCanViewUnits') === 'true',
    canViewLeads: localStorage.getItem('employeeCanViewLeads') === 'true'
};

function updateEmployeePermissions(canViewUnits, canViewLeads) {
    employeePermissions.canViewUnits = canViewUnits;
    employeePermissions.canViewLeads = canViewLeads;
    localStorage.setItem('employeeCanViewUnits', canViewUnits);
    localStorage.setItem('employeeCanViewLeads', canViewLeads);
    console.log('✅ تم تحديث صلاحيات الموظفين');
}

function checkEmployeeAccess(type) {
    if (type === 'units') return employeePermissions.canViewUnits;
    if (type === 'leads') return employeePermissions.canViewLeads;
    return false;
}

// Load data from JSON files on page load
async function loadDataFromJSON() {
    try {
        const resaleResponse = await fetch('resale.json');
        const rentalResponse = await fetch('rental.json');
        const primaryResponse = await fetch('primary.json');
        const leadsResponse = await fetch('leads.json');
        
        const resaleData = await resaleResponse.json();
        const rentalData = await rentalResponse.json();
        const primaryData = await primaryResponse.json();
        const leadsData = await leadsResponse.json();
        
        // Merge resale, rental, and primary into units
        units = [...resaleData, ...rentalData, ...primaryData];
        leads = leadsData;
        
        // Initialize displays
        renderUnits();
        renderLeadsList();
        
        console.log('✅ Data loaded:', units.length, 'units,', leads.length, 'leads');
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadDataFromJSON);

// Load data from JSON files
async function loadData() {
    try {
        // Load resale units
        const resaleRes = await fetch('resale.json');
        const resaleData = await resaleRes.json();
        
        // Load rental units
        const rentalRes = await fetch('rental.json');
        const rentalData = await rentalRes.json();
        
        // Load leads
        const leadsRes = await fetch('leads.json');
        const leadsData = await leadsRes.json();
        
        // Combine units
        units = [...resaleData, ...rentalData];
        leads = leadsData;
        
        console.log('✅ تم تحميل البيانات:', units.length, 'وحدة،', leads.length, 'ليد');
        
        // Render initial content
        renderUnits();
        renderPartnersList();
        renderServicesList();
    } catch(e) {
        console.error('❌ خطأ في تحميل البيانات:', e);
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadData);



// ==================== ADMIN PAGINATION FUNCTIONS ====================
function renderAdminUnitsPage(page = 1) {
    const unitsContainer = document.getElementById('admin-units-list');
    if (!unitsContainer) return;
    
    const searchInput = document.getElementById('admin-units-search');
    const filterType = document.getElementById('admin-units-filter-type');
    
    let filtered = units;
    
    // Apply search
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(u => 
            u.code?.toString().includes(searchTerm) ||
            u.zone?.toLowerCase().includes(searchTerm) ||
            u.category?.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply filter
    if (filterType && filterType.value) {
        filtered = filtered.filter(u => u.type === filterType.value);
    }
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filtered.slice(start, end);
    
    let html = '<table style="width:100%; border-collapse:collapse;"><tr style="background:#d4af37;"><th>الكود</th><th>النوع</th><th>المنطقة</th><th>السعر</th><th>الإجراءات</th></tr>';
    
    pageItems.forEach(unit => {
        html += `<tr style="border:1px solid #ddd;">
            <td>${unit.code}</td>
            <td>${unit.type}</td>
            <td>${unit.zone}</td>
            <td>${unit.price?.toLocaleString() || '--'}</td>
            <td><button onclick="editUnit(${unit.id})">تعديل</button></td>
        </tr>`;
    });
    
    html += '</table>';
    
    // Add pagination
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    html += '<div style="margin-top:20px; text-align:center;">';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="renderAdminUnitsPage(${i})" style="margin:5px; ${i === page ? 'background:#d4af37;' : ''}">${i}</button>`;
    }
    html += '</div>';
    
    unitsContainer.innerHTML = html;
}

function renderAdminLeadsPage(page = 1) {
    const leadsContainer = document.getElementById('admin-leads-list');
    if (!leadsContainer) return;
    
    const searchInput = document.getElementById('admin-leads-search');
    
    let filtered = leads;
    
    // Apply search
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(l => 
            l.name?.toLowerCase().includes(searchTerm) ||
            l.phone?.includes(searchTerm)
        );
    }
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filtered.slice(start, end);
    
    let html = '<table style="width:100%; border-collapse:collapse;"><tr style="background:#d4af37;"><th>الاسم</th><th>الهاتف</th><th>المصدر</th><th>الحالة</th><th>الإجراءات</th></tr>';
    
    pageItems.forEach(lead => {
        html += `<tr style="border:1px solid #ddd;">
            <td>${lead.name}</td>
            <td>${lead.phone}</td>
            <td>${lead.source || '--'}</td>
            <td>${lead.status || '--'}</td>
            <td><button onclick="editLead(${lead.id})">تعديل</button></td>
        </tr>`;
    });
    
    html += '</table>';
    
    // Add pagination
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    html += '<div style="margin-top:20px; text-align:center;">';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="renderAdminLeadsPage(${i})" style="margin:5px; ${i === page ? 'background:#d4af37;' : ''}">${i}</button>`;
    }
    html += '</div>';
    
    leadsContainer.innerHTML = html;
}

function editUnit(unitId) {
    alert('تعديل الوحدة: ' + unitId);
}

function editLead(leadId) {
    alert('تعديل الليد: ' + leadId);
}

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
    const unitsSection = document.getElementById('units-section');
    if(unitsSection) unitsSection.style.display = 'none';
    // Remove active from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // Map tab names to button text
    const tabLabels = {
        'home': 'الرئيسية',
        'about': 'عن الشركة',
        'resale': 'ريسيل',
        'primary': 'برايمري',
        'rental': 'إيجار',
        'services': 'مناطق عملنا',
        'partners': 'شركاؤنا',
        'privacy': 'سياسة الخصوصية',
        'terms': 'الشروط والأحكام',
        'faq': 'الأسئلة الشائعة',
        'contact': 'اتصل بنا'
    };
    const label = tabLabels[tabName];
    if(label) {
        const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.textContent.trim() === label);
        if(activeBtn) activeBtn.classList.add('active');
    }

    if(['resale', 'primary', 'rental'].includes(tabName)) {
        currentUnitTab = tabName;
        if(unitsSection) unitsSection.style.display = 'block';
        renderUnits();
    } else {
        const section = document.getElementById(tabName);
        if(section) {
            section.style.display = 'block';
            if(tabName === 'about') renderAbout();
            if(tabName === 'partners') renderPartners();
            if(tabName === 'services') renderServices();
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
            <div class="bg-gold-card border-2 border-black rounded-lg p-6 shadow-lg">
                <p class="text-black font-bold text-sm mb-2">${lang === 'ar' ? 'إجمالي الوحدات' : 'Total Units'}</p>
                <p class="text-3xl font-bold gold-text">${totalUnits}</p>
            </div>
            <div class="bg-blue-100 border-2 border-blue-900 rounded-lg p-6 shadow-lg">
                <p class="text-black font-bold text-sm mb-2">${lang === 'ar' ? 'إجمالي Leads' : 'Total Leads'}</p>
                <p class="text-3xl font-bold text-blue-900">${totalLeads}</p>
            </div>
            <div class="bg-yellow-100 border-2 border-yellow-900 rounded-lg p-6 shadow-lg">
                <p class="text-black font-bold text-sm mb-2">${lang === 'ar' ? 'Leads جديد' : 'New Leads'}</p>
                <p class="text-3xl font-bold text-yellow-900">${newLeads}</p>
            </div>
            <div class="bg-green-100 border-2 border-green-900 rounded-lg p-6 shadow-lg">
                <p class="text-black font-bold text-sm mb-2">${lang === 'ar' ? 'Leads محول' : 'Converted'}</p>
                <p class="text-3xl font-bold text-green-900">${convertedLeads}</p>
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
        <div class="bg-gold-card border-2 border-black rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">إجمالي الوحدات</p>
            <p class="text-3xl font-bold gold-text">${totalUnits}</p>
        </div>
        <div class="bg-blue-100 border-2 border-blue-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">إجمالي Leads</p>
            <p class="text-3xl font-bold text-blue-900">${totalLeads}</p>
        </div>
        <div class="bg-yellow-100 border-2 border-yellow-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">Leads جديد</p>
            <p class="text-3xl font-bold text-yellow-900">${newLeads}</p>
        </div>
        <div class="bg-green-100 border-2 border-green-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">Leads محول</p>
            <p class="text-3xl font-bold text-green-900">${convertedLeads}</p>
        </div>
        
        <!-- Row 2: Resale Units -->
        <div class="bg-purple-100 border-2 border-purple-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">وحدات ريسيل</p>
            <p class="text-3xl font-bold text-purple-900">${resaleUnits}</p>
            <p class="text-xs text-purple-300 mt-1">مميز: ${resaleFeatured}</p>
        </div>
        
        <!-- Row 2: Primary Units -->
        <div class="bg-cyan-100 border-2 border-cyan-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">وحدات برايمري</p>
            <p class="text-3xl font-bold text-cyan-900">${primaryUnits}</p>
            <p class="text-xs text-cyan-300 mt-1">مميز: ${primaryFeatured}</p>
        </div>
        
        <!-- Row 2: Rental Units -->
        <div class="bg-orange-100 border-2 border-orange-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">وحدات إيجار</p>
            <p class="text-3xl font-bold text-orange-900">${rentalUnits}</p>
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
    window.currentUnitPage = 1;
    renderUnits();
}

// Add filter event listeners
document.addEventListener('DOMContentLoaded', function() {
    const filterInputs = ['filterCode', 'filterPrice', 'filterRooms', 'filterZone'];
    filterInputs.forEach(id => {
        const elem = document.getElementById(id);
        if(elem) {
            elem.addEventListener('change', function() {
                window.currentUnitPage = 1;
                renderUnits();
            });
            elem.addEventListener('input', function() {
                window.currentUnitPage = 1;
                renderUnits();
            });
        }
    });
});

function clearFilters() {
    document.getElementById('filterCode').value = '';
    document.getElementById('filterPrice').value = '';
    document.getElementById('filterRooms').value = '';
    document.getElementById('filterZone').value = '';
    window.currentUnitPage = 1;
    renderUnits();
}

// ==================== MISSING FUNCTIONS ====================

function renderAbout() {
    const about = document.getElementById('about');
    
    function sectionImage(img, fallbackIcon, fallbackColor) {
        if(img) {
            return `<div class="flex items-center justify-center p-4 overflow-hidden"><img src="${img}" class="w-full h-48 object-cover rounded-lg" alt=""></div>`;
        }
        return `<div class="bg-gold-light flex items-center justify-center p-10 border-b-2 border-black"><i class="fas ${fallbackIcon} text-6xl gold-text"></i></div>`;
    }
    
    about.innerHTML = `
        <h1 class="text-4xl font-bold text-center mb-2 gold-text">عن الشركة | About Us</h1>
        <p class="text-center silver-text text-xl mb-12">حيث تؤدي كل خطوة إلى القمة | Where every step leads to the summit</p>
        <div class="max-w-6xl mx-auto space-y-10">
            
            <!-- Mission Section -->
            <div class="bg-gold-card border-2 border-black rounded-xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-5 gap-0">
                    ${sectionImage(aboutData.aboutUs.image, 'fa-bullseye', 'from-gold/20 to-gold/5')}
                    <div class="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-l-2 border-black/30" dir="rtl">
                        <h2 class="text-2xl font-bold text-black mb-3">رسالتنا</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.aboutUs.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6" dir="ltr">
                        <h2 class="text-2xl font-bold text-black mb-3">Our Mission</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.aboutUs.en}</p>
                    </div>
                </div>
            </div>
            
            <!-- Vision Section -->
            <div class="bg-gold-card border-2 border-black rounded-xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-5 gap-0">
                    <div class="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-l-2 border-black/30" dir="rtl">
                        <h2 class="text-2xl font-bold text-black mb-3">رؤيتنا</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.vision.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-l-2 border-black/30" dir="ltr">
                        <h2 class="text-2xl font-bold text-black mb-3">Our Vision</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.vision.en}</p>
                    </div>
                    ${sectionImage(aboutData.vision.image, 'fa-eye', 'from-purple-900/20 to-purple-900/5')}
                </div>
            </div>
            
            <!-- Team Section -->
            <div class="bg-gold-card border-2 border-black rounded-xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-5 gap-0">
                    ${sectionImage(aboutData.team.image, 'fa-users', 'from-cyan-900/20 to-cyan-900/5')}
                    <div class="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-l-2 border-black/30" dir="rtl">
                        <h2 class="text-2xl font-bold text-black mb-3">فريقنا</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.team.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6" dir="ltr">
                        <h2 class="text-2xl font-bold text-black mb-3">Our Team</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.team.en}</p>
                    </div>
                </div>
            </div>
            
            <!-- Closing Section -->
            <div class="bg-gold-card border-2 border-black rounded-xl overflow-hidden shadow-lg">
                <div class="grid md:grid-cols-5 gap-0">
                    <div class="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-l-2 border-black/30" dir="rtl">
                        <h2 class="text-2xl font-bold text-black mb-3">لماذا نحن؟</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.closing.ar}</p>
                    </div>
                    <div class="md:col-span-2 p-6 border-b-2 md:border-b-0 md:border-l-2 border-black/30" dir="ltr">
                        <h2 class="text-2xl font-bold text-black mb-3">Why Us?</h2>
                        <p class="text-black font-bold leading-relaxed text-sm">${aboutData.closing.en}</p>
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
        renderAdminUnitsPage(1);
    }
    if(tabName === 'crm') {
        renderAdminLeadsPage(1);
    }
    if(tabName === 'employees') renderEmployeesList();
    if(tabName === 'settings') loadAboutEditor();
    if(tabName === 'partners') renderAdminPartnersList();
    if(tabName === 'services') renderAdminServicesList();
}


// Add to admin panel - permissions tab
function showPermissionsTab() {
    const adminContent = document.getElementById('admin-content');
    if (!adminContent) return;
    
    adminContent.innerHTML = `
        <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">صلاحيات الموظفين</h2>
            <div class="space-y-4">
                <label class="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" id="employeeUnitsPermission" ${employeePermissions.canViewUnits ? 'checked' : ''} 
                        onchange="updateEmployeePermissions(this.checked, employeePermissions.canViewLeads)">
                    <span>السماح للموظفين برؤية جدول الوحدات</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" id="employeeLeadsPermission" ${employeePermissions.canViewLeads ? 'checked' : ''} 
                        onchange="updateEmployeePermissions(employeePermissions.canViewUnits, this.checked)">
                    <span>السماح للموظفين برؤية جدول الليدز</span>
                </label>
            </div>
        </div>
    `;
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
    
    // Apply admin filters
    const filters = currentFilters.units;
    if(filters.code) filtered = filtered.filter(u => u.code.toLowerCase().includes(filters.code.toLowerCase()));
    if(filters.area) filtered = filtered.filter(u => (u.zone || u.area || '').toLowerCase().includes(filters.area.toLowerCase()));
    if(filters.minSpace) filtered = filtered.filter(u => u.space >= parseInt(filters.minSpace));
    if(filters.maxSpace) filtered = filtered.filter(u => u.space <= parseInt(filters.maxSpace));
    if(filters.minPrice) filtered = filtered.filter(u => u.price >= parseInt(filters.minPrice));
    if(filters.maxPrice) filtered = filtered.filter(u => u.price <= parseInt(filters.maxPrice));
    
    // Featured first
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    
    // Pagination
    const itemsPerPage = 20;
    const currentPage = window.currentUnitPage || 1;
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const paginatedUnits = filtered.slice(startIdx, endIdx);
    
    grid.innerHTML = paginatedUnits.map(unit => `
        <div class="bg-gold-card border-2 ${unit.featured ? 'border-white' : 'border-black'} rounded-xl overflow-hidden hover:border-white transition hover:shadow-2xl shadow-lg ${unit.featured ? 'ring-2 ring-white/50' : ''}">
            <div class="bg-gold-light h-40 flex items-center justify-center border-b-2 border-black relative overflow-hidden">
                ${unit.featured ? '<div class="absolute top-2 right-2 bg-gold text-black px-2 py-1 rounded text-xs font-bold">⭐ مميز</div>' : ''}
                ${unit.images && unit.images.length > 0 ? `
                <div class="image-carousel relative w-full h-full">
                    <img src="${unit.images[0]}" alt="${unit.code}" class="w-full h-full object-cover" id="img-${unit.id}">
                    <div class="absolute bottom-2 left-2 right-2 flex gap-1 justify-center">
                        ${unit.images.map((img, idx) => `<div class="w-2 h-2 rounded-full ${idx === 0 ? 'bg-gold' : 'bg-white/50'}" onclick="changeImage(${unit.id}, ${idx})"></div>`).join('')}
                    </div>
                </div>
                ` : '<i class="fas fa-building text-4xl gold-text"></i>'}
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-black">كود: ${unit.code}</h3>
                    <span class="text-xs bg-black text-gold px-2 py-1 rounded font-bold">${unit.type}</span>
                </div>
                <p class="text-sm text-black font-bold mb-2">${unit.zone}</p>
                <div class="spec-grid mb-3">
                    <div class="spec-box text-xs">
                        <p class="text-black/70 font-bold">غرف</p>
                        <p class="text-black font-bold">${unit.rooms}</p>
                    </div>
                    <div class="spec-box text-xs">
                        <p class="text-black/70 font-bold">مساحة</p>
                        <p class="text-black font-bold">${unit.space}م²</p>
                    </div>
                </div>
                <p class="text-lg font-bold text-black mb-3">${unit.price.toLocaleString()} EGP</p>
                <button onclick="openUnit(${unit.id})" class="w-full btn-primary text-sm mb-2">عرض التفاصيل</button>
            </div>
        </div>
    `).join('');
    
    // Add pagination controls
    addPaginationControls(grid, currentPage, totalPages, 'goToUnitPage');
}

function changeImage(unitId, imageIndex) {
    const img = document.getElementById(`img-${unitId}`);
    const unit = units.find(u => u.id === unitId);
    if (img && unit && unit.images && unit.images[imageIndex]) {
        img.src = unit.images[imageIndex];
        // Update carousel dots
        const carousel = img.parentElement;
        const dots = carousel.querySelectorAll('.w-2');
        dots.forEach((dot, idx) => {
            dot.className = idx === imageIndex ? 'w-2 h-2 rounded-full bg-gold' : 'w-2 h-2 rounded-full bg-white/50';
        });
    }
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
    const filteredLeads = filterLeads();
    const leadsTable = document.getElementById('admin-leads-table');
    if (!leadsTable) return;
    
    const currentPage = parseInt(document.getElementById('leadsPage')?.value || '1');
    const itemsPerPage = 30;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedLeads = filteredLeads.slice(startIndex, endIndex);
    
    leadsTable.innerHTML = paginatedLeads.map(lead => `
        <tr>
            <td>${lead.date || '-'}</td>
            <td>${lead.name || '-'}</td>
            <td>${lead.phone || '-'}</td>
            <td>${lead.source || '-'}</td>
            <td>${lead.method || '-'}</td>
            <td>${lead.campaign || '-'}</td>
            <td>${lead.notes || '-'}</td>
            <td>${lead.rating || '-'}</td>
            <td>${lead.sales || '-'}</td>
            <td>${lead.followUp || '-'}</td>
        </tr>
    `).join('');
    
    // Update pagination
    const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
    const paginationDiv = document.getElementById('leadsPagination');
    if (paginationDiv) {
        paginationDiv.innerHTML = Array.from({length: totalPages}, (_, i) => `
            <button onclick="goToLeadsPage(${i + 1})" class="${currentPage === i + 1 ? 'active' : ''}">${i + 1}</button>
        `).join('');
    }
}

function goToLeadsPage(page) {
    document.getElementById('leadsPage').value = page;
    renderLeadsList();
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

// ==================== ADVANCED IMPORT/EXPORT ====================

function bulkImport(e) {
    const file = e.target.files[0];
    if(!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const csv = event.target.result;
            const lines = csv.split('\n');
            // Detect delimiter (Tab or Comma)
            const firstLine = lines[0];
            const delimiter = firstLine.includes('\t') ? '\t' : ',';
            const headers = firstLine.split(delimiter).map(h => h.trim().replace(/^"|"$/g, ''));
            
            let importedCount = 0;
            
            for(let i = 1; i < lines.length; i++) {
                if(!lines[i].trim()) continue;
                
                let values = [];
                if (delimiter === ',') {
                    // Simple CSV parser for quoted values
                    values = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || lines[i].split(',');
                    values = values.map(v => v.trim().replace(/^"|"$/g, ''));
                } else {
                    values = lines[i].split('\t').map(v => v.trim());
                }
                const row = {};
                
                headers.forEach((header, idx) => {
                    row[header] = values[idx] ? values[idx].trim() : '';
                });
                
                // Map columns to unit object - matching exact Excel format
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
            // Detect delimiter (Tab or Comma)
            const firstLine = lines[0];
            const delimiter = firstLine.includes('\t') ? '\t' : ',';
            const headers = firstLine.split(delimiter).map(h => h.trim().replace(/^"|"$/g, ''));
            
            let importedCount = 0;
            
            for(let i = 1; i < lines.length; i++) {
                if(!lines[i].trim()) continue;
                
                let values = [];
                if (delimiter === ',') {
                    // Simple CSV parser for quoted values
                    values = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || lines[i].split(',');
                    values = values.map(v => v.trim().replace(/^"|"$/g, ''));
                } else {
                    values = lines[i].split('\t').map(v => v.trim());
                }
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

// ==================== EMPLOYEE LOGIN SYSTEM ====================

function openEmployeeLogin() {
    document.getElementById('employeeLoginModal').style.display = 'flex';
}

function closeEmployeeLoginModal() {
    document.getElementById('employeeLoginModal').style.display = 'none';
    document.getElementById('employeeEmail').value = '';
    document.getElementById('employeePassword').value = '';
}

function checkEmployeeLogin() {
    const email = document.getElementById('employeeEmail').value;
    const password = document.getElementById('employeePassword').value;
    
    if(!email || !password) {
        alert('الرجاء إدخال البريد الإلكتروني وكلمة السر');
        return;
    }
    
    const employee = employees.find(e => e.email === email && e.password === password);
    
    if(employee) {
        currentUser = employee;
        localStorage.setItem('currentEmployee', JSON.stringify(employee));
        closeEmployeeLoginModal();
        showEmployeeDashboard();
    } else {
        alert('البريد الإلكتروني أو كلمة السر غير صحيحة');
    }
}

function showEmployeeDashboard() {
    document.getElementById('employeeDashboardModal').style.display = 'flex';
    document.getElementById('employeeName').textContent = currentUser.name;
    showEmployeeTab('leads');
}

function showEmployeeTab(tabName) {
    document.querySelectorAll('#employeeDashboardModal .admin-tab-content').forEach(t => t.classList.remove('active-admin-tab'));
    document.querySelectorAll('#employeeDashboardModal .admin-tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById('employee-' + tabName).classList.add('active-admin-tab');
    event.target.classList.add('active');
    
    if(tabName === 'leads') renderEmployeeLeads();
    if(tabName === 'stats') renderEmployeeStats();
}

function renderEmployeeLeads() {
    const list = document.getElementById('employeeLeadsList');
    const assignedLeads = leads.filter(l => l.assignedTo === currentUser.id);
    
    if(assignedLeads.length === 0) {
        list.innerHTML = '<div class="p-4 text-center text-silver">لا توجد Leads مسندة</div>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b border-gold/30">
                    <th class="p-4 text-right gold-text">الاسم</th>
                    <th class="p-4 text-right gold-text">الهاتف</th>
                    <th class="p-4 text-right gold-text">الحالة</th>
                    <th class="p-4 text-right gold-text">الإجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${assignedLeads.map(lead => `
                    <tr class="border-b border-gold/20 hover:bg-gold/5">
                        <td class="p-4 text-white">${lead.name}</td>
                        <td class="p-4 text-silver">${lead.phone}</td>
                        <td class="p-4">
                            <span class="px-3 py-1 rounded-full text-xs font-bold ${
                                lead.status === 'new' ? 'bg-yellow-900/30 text-yellow-900' :
                                lead.status === 'converted' ? 'bg-green-900/30 text-green-900' :
                                'bg-blue-900/30 text-blue-900'
                            }">
                                ${lead.status === 'new' ? 'جديد' : lead.status === 'converted' ? 'محول' : 'متابعة'}
                            </span>
                        </td>
                        <td class="p-4">
                            <button onclick="convertLead(${lead.id})" class="text-green-900 hover:text-green-300 text-xs">تحويل</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function renderEmployeeStats() {
    const stats = document.getElementById('employeeStats');
    const assignedLeads = leads.filter(l => l.assignedTo === currentUser.id);
    const convertedLeads = assignedLeads.filter(l => l.status === 'converted').length;
    const newLeads = assignedLeads.filter(l => l.status === 'new').length;
    
    stats.innerHTML = `
        <div class="bg-blue-100 border-2 border-blue-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">إجمالي Leads</p>
            <p class="text-3xl font-bold text-blue-900">${assignedLeads.length}</p>
        </div>
        <div class="bg-yellow-100 border-2 border-yellow-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">Leads جديد</p>
            <p class="text-3xl font-bold text-yellow-900">${newLeads}</p>
        </div>
        <div class="bg-green-100 border-2 border-green-900 rounded-lg p-6 shadow-lg">
            <p class="text-black font-bold text-sm mb-2">Leads محول</p>
            <p class="text-3xl font-bold text-green-900">${convertedLeads}</p>
        </div>
    `;
}

function convertLead(leadId) {
    const lead = leads.find(l => l.id === leadId);
    if(lead) {
        lead.status = 'converted';
        localStorage.setItem('leads', JSON.stringify(leads));
        currentUser.convertedLeads = (currentUser.convertedLeads || 0) + 1;
        localStorage.setItem('currentEmployee', JSON.stringify(currentUser));
        alert('تم تحويل الـ Lead بنجاح!');
        renderEmployeeLeads();
        renderEmployeeStats();
    }
}

function logoutEmployee() {
    currentUser = null;
    localStorage.removeItem('currentEmployee');
    document.getElementById('employeeDashboardModal').style.display = 'none';
    alert('تم تسجيل الخروج بنجاح');
}

// Check if employee is already logged in
window.addEventListener('load', () => {
    const savedEmployee = localStorage.getItem('currentEmployee');
    if(savedEmployee) {
        currentUser = JSON.parse(savedEmployee);
        // Optionally show dashboard
    }
});

// ==================== ENHANCED FILE UPLOAD SYSTEM ====================

function updateFileCount(inputId, countId) {
    const input = document.getElementById(inputId);
    const count = input.files.length;
    const countSpan = document.getElementById(countId);
    
    if(count > 10) {
        alert('يمكنك اختيار حتى 10 ملفات فقط!');
        input.value = '';
        countSpan.textContent = '0 ملف';
        return;
    }
    
    countSpan.textContent = count + ' ملف';
}

function processFilesAsync(files, type) {
    return Promise.all(Array.from(files).map(file => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    data: e.target.result
                });
            };
            reader.readAsDataURL(file);
        });
    }));
}

// ==================== EDIT FUNCTIONALITY ====================

// ===== UNIT EDIT =====
function openEditUnitModal(unitId) {
    const unit = units.find(u => u.id === unitId);
    if(!unit) return;
    
    document.getElementById('editUnitId').value = unit.id;
    document.getElementById('editUnitCode').value = unit.code;
    document.getElementById('editUnitType').value = unit.type;
    document.getElementById('editUnitPrice').value = unit.price;
    document.getElementById('editUnitZone').value = unit.zone;
    document.getElementById('editUnitRooms').value = unit.rooms;
    document.getElementById('editUnitSpace').value = unit.space;
    document.getElementById('editUnitNotes').value = unit.notes || '';
    
    const modal = document.getElementById('editUnitModal');
    modal.style.display = 'flex';
    modal.scrollTop = 0;
}

function closeEditUnitModal() {
    document.getElementById('editUnitModal').style.display = 'none';
}

function saveUnitEdit(e) {
    e.preventDefault();
    
    const unitId = parseInt(document.getElementById('editUnitId').value);
    const unit = units.find(u => u.id === unitId);
    
    if(unit) {
        unit.code = document.getElementById('editUnitCode').value;
        unit.type = document.getElementById('editUnitType').value;
        unit.price = parseInt(document.getElementById('editUnitPrice').value);
        unit.zone = document.getElementById('editUnitZone').value;
        unit.rooms = parseInt(document.getElementById('editUnitRooms').value);
        unit.space = parseInt(document.getElementById('editUnitSpace').value);
        unit.notes = document.getElementById('editUnitNotes').value;
        
        saveUnits();
        alert('تم تحديث الوحدة بنجاح!');
        closeEditUnitModal();
        renderUnitsList();
        renderUnits();
    }
}

// ===== LEAD EDIT =====
function openEditLeadModal(leadId) {
    const lead = leads.find(l => l.id === leadId);
    if(!lead) return;
    
    document.getElementById('editLeadId').value = lead.id;
    document.getElementById('editLeadName').value = lead.name;
    document.getElementById('editLeadPhone').value = lead.phone;
    document.getElementById('editLeadEmail').value = lead.email || '';
    document.getElementById('editLeadStatus').value = lead.status;
    document.getElementById('editLeadNotes').value = lead.notes || '';
    
    const modal = document.getElementById('editLeadModal');
    modal.style.display = 'flex';
    modal.scrollTop = 0;
}

function closeEditLeadModal() {
    document.getElementById('editLeadModal').style.display = 'none';
}

function saveLeadEdit(e) {
    e.preventDefault();
    
    const leadId = parseInt(document.getElementById('editLeadId').value);
    const lead = leads.find(l => l.id === leadId);
    
    if(lead) {
        lead.name = document.getElementById('editLeadName').value;
        lead.phone = document.getElementById('editLeadPhone').value;
        lead.email = document.getElementById('editLeadEmail').value;
        lead.status = document.getElementById('editLeadStatus').value;
        lead.notes = document.getElementById('editLeadNotes').value;
        
        localStorage.setItem('leads', JSON.stringify(leads));
        alert('تم تحديث الـ Lead بنجاح!');
        closeEditLeadModal();
        renderLeadsList();
    }
}

// ===== EMPLOYEE EDIT =====
function openEditEmployeeModal(employeeId) {
    const employee = employees.find(e => e.id === employeeId);
    if(!employee) return;
    
    document.getElementById('editEmployeeId').value = employee.id;
    document.getElementById('editEmployeeName').value = employee.name;
    document.getElementById('editEmployeePhone').value = employee.phone;
    document.getElementById('editEmployeeEmail').value = employee.email;
    document.getElementById('editEmployeeRole').value = employee.role;
    document.getElementById('editEmployeeCanAddUnits').checked = employee.canAddUnits || false;
    
    const modal = document.getElementById('editEmployeeModal');
    modal.style.display = 'flex';
    modal.scrollTop = 0;
}

function closeEditEmployeeModal() {
    document.getElementById('editEmployeeModal').style.display = 'none';
}

function saveEmployeeEdit(e) {
    e.preventDefault();
    
    const employeeId = parseInt(document.getElementById('editEmployeeId').value);
    const employee = employees.find(e => e.id === employeeId);
    
    if(employee) {
        employee.name = document.getElementById('editEmployeeName').value;
        employee.phone = document.getElementById('editEmployeePhone').value;
        employee.email = document.getElementById('editEmployeeEmail').value;
        employee.role = document.getElementById('editEmployeeRole').value;
        employee.canAddUnits = document.getElementById('editEmployeeCanAddUnits').checked;
        
        const newPassword = document.getElementById('editEmployeePassword').value;
        if(newPassword) {
            employee.password = newPassword;
        }
        
        localStorage.setItem('employees', JSON.stringify(employees));
        alert('تم تحديث الموظف بنجاح!');
        closeEditEmployeeModal();
        renderEmployeesList();
    }
}

// Add pagination controls
function addPaginationControls(grid, currentPage, totalPages, pageCallback) {
    if(totalPages <= 1) return;
    
    // Remove existing pagination
    const existingPagination = grid.parentElement.nextElementSibling;
    if(existingPagination && existingPagination.classList.contains('flex') && existingPagination.classList.contains('justify-center')) {
        existingPagination.remove();
    }
    
    let paginationHTML = '<div class="flex justify-center gap-2 mt-8 flex-wrap">';
    
    if(currentPage > 1) {
        paginationHTML += `<button onclick="${pageCallback}(${currentPage - 1})" class="btn-secondary px-4 py-2 text-sm">السابق</button>`;
    }
    
    for(let i = 1; i <= totalPages; i++) {
        if(i === currentPage) {
            paginationHTML += `<button class="btn-primary px-4 py-2 text-sm">${i}</button>`;
        } else {
            paginationHTML += `<button onclick="${pageCallback}(${i})" class="btn-secondary px-4 py-2 text-sm">${i}</button>`;
        }
    }
    
    if(currentPage < totalPages) {
        paginationHTML += `<button onclick="${pageCallback}(${currentPage + 1})" class="btn-secondary px-4 py-2 text-sm">التالي</button>`;
    }
    
    paginationHTML += '</div>';
    grid.parentElement.insertAdjacentHTML('afterend', paginationHTML);
}

function goToUnitPage(page) {
    window.currentUnitPage = page;
    renderUnits();
    document.getElementById('units-grid').scrollIntoView({ behavior: 'smooth' });
}

// ==================== ABOUT PAGE EDITOR ====================

function previewAboutImage(input, previewId) {
    const preview = document.getElementById(previewId);
    if(input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function loadAboutEditor() {
    // Fill textareas with current data
    document.getElementById('aboutMissionAr').value = aboutData.aboutUs.ar;
    document.getElementById('aboutMissionEn').value = aboutData.aboutUs.en;
    document.getElementById('aboutVisionAr').value = aboutData.vision.ar;
    document.getElementById('aboutVisionEn').value = aboutData.vision.en;
    document.getElementById('aboutTeamAr').value = aboutData.team.ar;
    document.getElementById('aboutTeamEn').value = aboutData.team.en;
    document.getElementById('aboutClosingAr').value = aboutData.closing.ar;
    document.getElementById('aboutClosingEn').value = aboutData.closing.en;
    
    // Show existing images
    if(aboutData.aboutUs.image) {
        const p = document.getElementById('missionPreview');
        p.src = aboutData.aboutUs.image; p.classList.remove('hidden');
    }
    if(aboutData.vision.image) {
        const p = document.getElementById('visionPreview');
        p.src = aboutData.vision.image; p.classList.remove('hidden');
    }
    if(aboutData.team.image) {
        const p = document.getElementById('teamPreview');
        p.src = aboutData.team.image; p.classList.remove('hidden');
    }
    if(aboutData.closing.image) {
        const p = document.getElementById('closingPreview');
        p.src = aboutData.closing.image; p.classList.remove('hidden');
    }
}

function saveAboutData(e) {
    e.preventDefault();
    
    // Update text
    aboutData.aboutUs.ar = document.getElementById('aboutMissionAr').value;
    aboutData.aboutUs.en = document.getElementById('aboutMissionEn').value;
    aboutData.vision.ar = document.getElementById('aboutVisionAr').value;
    aboutData.vision.en = document.getElementById('aboutVisionEn').value;
    aboutData.team.ar = document.getElementById('aboutTeamAr').value;
    aboutData.team.en = document.getElementById('aboutTeamEn').value;
    aboutData.closing.ar = document.getElementById('aboutClosingAr').value;
    aboutData.closing.en = document.getElementById('aboutClosingEn').value;
    
    // Update images
    const missionPreview = document.getElementById('missionPreview');
    if(missionPreview.src && !missionPreview.classList.contains('hidden')) {
        aboutData.aboutUs.image = missionPreview.src;
    }
    const visionPreview = document.getElementById('visionPreview');
    if(visionPreview.src && !visionPreview.classList.contains('hidden')) {
        aboutData.vision.image = visionPreview.src;
    }
    const teamPreview = document.getElementById('teamPreview');
    if(teamPreview.src && !teamPreview.classList.contains('hidden')) {
        aboutData.team.image = teamPreview.src;
    }
    const closingPreview = document.getElementById('closingPreview');
    if(closingPreview.src && !closingPreview.classList.contains('hidden')) {
        aboutData.closing.image = closingPreview.src;
    }
    
    // Save to localStorage
    localStorage.setItem('aboutData', JSON.stringify(aboutData));
    
    alert('تم حفظ تعديلات صفحة "عن الشركة" بنجاح!');
    renderAbout();
}
// Function to download Excel template for units import
function downloadUnitsTemplate() {
    const headers = ['Category :', 'City :', 'Status :', 'Source :', 'code :', 'منطقة :', 'مجموعة :', 'عمارة :', 'وحدة :', 'الدور :', 'النموذج :', 'الاستلام :', 'الواجهة :', 'مساحة :', 'جاردن :', 'غرف نوم :', 'حمام :', 'تاريخ الحجز :', 'مدة القسط :', 'مدفوعات :', 'اوفر برايس :', 'مدفوعات + اوفر :', 'تفاصيل الاقساط :', 'اصل العقد او ثمن الكاش :', 'ملاحظات :', 'client name', 'phone', 'phone 2'];
    const sampleData = [
        ['Apt Resale', 'Madinaty', 'Refreshed', 'M 3bdalla', '4001', 'B12', '125', '71', '22', '2', 'شقة سكنية', 'استلام فوري', 'واجهه بحرى صريح', '78', '--', '2', '1', '--', '7', '1270000', '1300000', '2570000', 'سنوي 450.000', '1700000', 'مثال على وحدة', 'Gehan Shalaby', '01121112501', ''],
        ['Apt Resale', 'Madinaty', 'Refreshed', 'M 3bdalla', '4002', 'B14', '144', '32', '1', 'G', 'شقة سكنية', '2028', 'فيو جاردن', '67', '35', '1', '--', 'مارس 2025', '10', '666000', '200000', '866000', 'شهري 25.605', '6883570', 'ستوديو ارضي بجاردن', 'Salah Selim', '01272227233', '']
    ];
    let csvContent = headers.join('\t') + '\n';
    sampleData.forEach(row => { csvContent += row.join('\t') + '\n'; });
    const blob = new Blob([csvContent], { type: 'text/tab-separated-values;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'units_template_STR.tsv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('تم تحميل التيمبلت بنجاح! ✅\n\nالتعليمات:\n1. افتح الملف بـ Excel\n2. امسح الأمثلة وأضف وحداتك\n3. احفظ الملف\n4. ارجع وارفعه في التطبيق');
}
// Function to download Leads template
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
            <div class="bg-gold-card rounded-lg overflow-hidden border-2 border-black hover:border-white transition shadow-lg">
                <img src="${imageUrl}" alt="${unit.code}" class="w-full h-48 object-cover">
                <div class="p-4 space-y-2">
                    ${unit.featured ? '<div class="text-black font-bold text-sm">⭐ مميز</div>' : ''}
                    <h3 class="text-black font-bold">${unit.zone} - ${unit.building}</h3>
                    <div class="text-black font-medium text-sm space-y-1">
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


// ==================== PARTNERS MANAGEMENT ====================

let partners = JSON.parse(localStorage.getItem('partners')) || [];

function addPartner(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, textarea');
    
    const partner = {
        id: Date.now(),
        name: inputs[0].value,
        descAr: inputs[1].value,
        descEn: inputs[2].value,
        image: inputs[3].files[0] ? URL.createObjectURL(inputs[3].files[0]) : ''
    };
    
    if(partner.name && partner.descAr && partner.descEn) {
        partners.push(partner);
        localStorage.setItem('partners', JSON.stringify(partners));
        form.reset();
        renderPartnersList();
        alert('تم إضافة الشريك بنجاح!');
    }
}

function deletePartner(id) {
    if(confirm('هل تريد حذف هذا الشريك؟')) {
        partners = partners.filter(p => p.id !== id);
        localStorage.setItem('partners', JSON.stringify(partners));
        renderPartnersList();
    }
}


function renderPartnersList() {
    const container = document.getElementById('admin-partners-list');
    if (!container) return;
    
    let partners = JSON.parse(localStorage.getItem('partners')) || [];
    
    let html = '<div style="margin-bottom:20px;">';
    html += '<button onclick="showAddPartnerForm()" style="padding:10px 20px; background:#d4af37; color:#000; border:none; border-radius:5px; cursor:pointer;">+ إضافة شريك جديد</button>';
    html += '</div>';
    
    if (partners.length === 0) {
        html += '<p style="color:#999;">لا توجد شركاء حالياً</p>';
    } else {
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:20px;">';
        partners.forEach((partner, index) => {
            html += `<div style="background:#d4af37; color:#000; padding:20px; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                <div style="text-align:center; margin-bottom:15px;">
                    ${partner.image ? `<img src="${partner.image}" style="width:100%; height:150px; object-fit:cover; border-radius:5px;">` : '<div style="width:100%; height:150px; background:#999; border-radius:5px; display:flex; align-items:center; justify-content:center; color:#fff;">لا توجد صورة</div>'}
                </div>
                <h3 style="margin:10px 0; color:#000;">${partner.nameAr}</h3>
                <p style="margin:5px 0; color:#333; font-size:14px;">${partner.descriptionAr}</p>
                <div style="margin-top:15px; display:flex; gap:10px;">
                    <button onclick="editPartner(${index})" style="flex:1; padding:8px; background:#000; color:#d4af37; border:none; border-radius:5px; cursor:pointer;">تعديل</button>
                    <button onclick="deletePartner(${index})" style="flex:1; padding:8px; background:#f44336; color:#fff; border:none; border-radius:5px; cursor:pointer;">حذف</button>
                </div>
            </div>`;
        });
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function showAddPartnerForm() {
    const modal = document.createElement('div');
    modal.id = 'partner-modal';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:1000;';
    
    modal.innerHTML = `
        <div style="background:#d4af37; color:#000; padding:30px; border-radius:10px; width:90%; max-width:500px; max-height:90vh; overflow-y:auto;">
            <h2 style="margin-top:0;">إضافة شريك جديد</h2>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الاسم (عربي)</label>
                <input type="text" id="partner-name-ar" placeholder="اسم الشريك" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box;">
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الاسم (إنجليزي)</label>
                <input type="text" id="partner-name-en" placeholder="Partner Name" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box;">
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الوصف (عربي)</label>
                <textarea id="partner-desc-ar" placeholder="وصف الشريك" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box; height:80px;"></textarea>
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الوصف (إنجليزي)</label>
                <textarea id="partner-desc-en" placeholder="Partner Description" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box; height:80px;"></textarea>
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الصورة</label>
                <input type="file" id="partner-image" accept="image/*" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box;">
            </div>
            <div style="display:flex; gap:10px;">
                <button onclick="savePartner()" style="flex:1; padding:10px; background:#000; color:#d4af37; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">حفظ</button>
                <button onclick="closePartnerModal()" style="flex:1; padding:10px; background:#999; color:#fff; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">إلغاء</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function savePartner() {
    const nameAr = document.getElementById('partner-name-ar').value;
    const nameEn = document.getElementById('partner-name-en').value;
    const descAr = document.getElementById('partner-desc-ar').value;
    const descEn = document.getElementById('partner-desc-en').value;
    const imageInput = document.getElementById('partner-image');
    
    if (!nameAr || !nameEn) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    let partners = JSON.parse(localStorage.getItem('partners')) || [];
    
    const reader = new FileReader();
    if (imageInput.files[0]) {
        reader.onload = (e) => {
            partners.push({
                nameAr, nameEn, descAr, descEn,
                image: e.target.result
            });
            localStorage.setItem('partners', JSON.stringify(partners));
            closePartnerModal();
            renderPartnersList();
            alert('تم إضافة الشريك بنجاح!');
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        partners.push({ nameAr, nameEn, descAr, descEn, image: '' });
        localStorage.setItem('partners', JSON.stringify(partners));
        closePartnerModal();
        renderPartnersList();
        alert('تم إضافة الشريك بنجاح!');
    }
}

function editPartner(index) {
    alert('تعديل الشريك: سيتم تطويره قريباً');
}



function closePartnerModal() {
    const modal = document.getElementById('partner-modal');
    if (modal) modal.remove();
}


function addService(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, textarea');
    
    const service = {
        id: Date.now(),
        nameAr: inputs[0].value,
        nameEn: inputs[1].value,
        descAr: inputs[2].value,
        descEn: inputs[3].value,
        image: inputs[4].files[0] ? URL.createObjectURL(inputs[4].files[0]) : ''
    };
    
    if(service.nameAr && service.nameEn && service.descAr && service.descEn) {
        services.push(service);
        localStorage.setItem('services', JSON.stringify(services));
        form.reset();
        renderServicesList();
        alert('تم إضافة المنطقة بنجاح!');
    }
}

function deleteService(id) {
    if(confirm('هل تريد حذف هذه المنطقة؟')) {
        services = services.filter(s => s.id !== id);
        localStorage.setItem('services', JSON.stringify(services));
        renderServicesList();
    }
}


function renderServicesList() {
    const container = document.getElementById('admin-services-list');
    if (!container) return;
    
    let services = JSON.parse(localStorage.getItem('services')) || [];
    
    let html = '<div style="margin-bottom:20px;">';
    html += '<button onclick="showAddServiceForm()" style="padding:10px 20px; background:#d4af37; color:#000; border:none; border-radius:5px; cursor:pointer;">+ إضافة منطقة عمل جديدة</button>';
    html += '</div>';
    
    if (services.length === 0) {
        html += '<p style="color:#999;">لا توجد مناطق عمل حالياً</p>';
    } else {
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:20px;">';
        services.forEach((service, index) => {
            html += `<div style="background:#d4af37; color:#000; padding:20px; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                <div style="text-align:center; margin-bottom:15px;">
                    ${service.image ? `<img src="${service.image}" style="width:100%; height:150px; object-fit:cover; border-radius:5px;">` : '<div style="width:100%; height:150px; background:#999; border-radius:5px; display:flex; align-items:center; justify-content:center; color:#fff;">لا توجد صورة</div>'}
                </div>
                <h3 style="margin:10px 0; color:#000;">${service.nameAr}</h3>
                <p style="margin:5px 0; color:#333; font-size:14px;">${service.descriptionAr}</p>
                <div style="margin-top:15px; display:flex; gap:10px;">
                    <button onclick="editService(${index})" style="flex:1; padding:8px; background:#000; color:#d4af37; border:none; border-radius:5px; cursor:pointer;">تعديل</button>
                    <button onclick="deleteService(${index})" style="flex:1; padding:8px; background:#f44336; color:#fff; border:none; border-radius:5px; cursor:pointer;">حذف</button>
                </div>
            </div>`;
        });
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function showAddServiceForm() {
    const modal = document.createElement('div');
    modal.id = 'service-modal';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:1000;';
    
    modal.innerHTML = `
        <div style="background:#d4af37; color:#000; padding:30px; border-radius:10px; width:90%; max-width:500px; max-height:90vh; overflow-y:auto;">
            <h2 style="margin-top:0;">إضافة منطقة عمل جديدة</h2>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الاسم (عربي)</label>
                <input type="text" id="service-name-ar" placeholder="اسم المنطقة" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box;">
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الاسم (إنجليزي)</label>
                <input type="text" id="service-name-en" placeholder="Area Name" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box;">
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الوصف (عربي)</label>
                <textarea id="service-desc-ar" placeholder="وصف المنطقة" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box; height:80px;"></textarea>
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الوصف (إنجليزي)</label>
                <textarea id="service-desc-en" placeholder="Area Description" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box; height:80px;"></textarea>
            </div>
            <div style="margin-bottom:15px;">
                <label style="display:block; margin-bottom:5px; font-weight:bold;">الصورة</label>
                <input type="file" id="service-image" accept="image/*" style="width:100%; padding:10px; border:1px solid #999; border-radius:5px; box-sizing:border-box;">
            </div>
            <div style="display:flex; gap:10px;">
                <button onclick="saveService()" style="flex:1; padding:10px; background:#000; color:#d4af37; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">حفظ</button>
                <button onclick="closeServiceModal()" style="flex:1; padding:10px; background:#999; color:#fff; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">إلغاء</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function saveService() {
    const nameAr = document.getElementById('service-name-ar').value;
    const nameEn = document.getElementById('service-name-en').value;
    const descAr = document.getElementById('service-desc-ar').value;
    const descEn = document.getElementById('service-desc-en').value;
    const imageInput = document.getElementById('service-image');
    
    if (!nameAr || !nameEn) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    let services = JSON.parse(localStorage.getItem('services')) || [];
    
    const reader = new FileReader();
    if (imageInput.files[0]) {
        reader.onload = (e) => {
            services.push({
                nameAr, nameEn, descAr, descEn,
                image: e.target.result
            });
            localStorage.setItem('services', JSON.stringify(services));
            closeServiceModal();
            renderServicesList();
            alert('تم إضافة المنطقة بنجاح!');
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        services.push({ nameAr, nameEn, descAr, descEn, image: '' });
        localStorage.setItem('services', JSON.stringify(services));
        closeServiceModal();
        renderServicesList();
        alert('تم إضافة المنطقة بنجاح!');
    }
}

function editService(index) {
    alert('تعديل المنطقة: سيتم تطويره قريباً');
}



function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    if (modal) modal.remove();
}


function searchUnits(query) {
    if(!query) {
        renderUnits();
        return;
    }
    
    const grid = document.getElementById('units-grid');
    if(!grid) return;
    
    const searchTerm = query.toLowerCase();
    let filtered = units.filter(u => 
        u.code.toString().includes(searchTerm) ||
        u.zone.toLowerCase().includes(searchTerm) ||
        u.model.toLowerCase().includes(searchTerm) ||
        u.notes.toLowerCase().includes(searchTerm)
    );
    
    grid.innerHTML = filtered.slice(0, 20).map(unit => `
        <div class="bg-gold-card border-2 ${unit.featured ? 'border-white' : 'border-black'} rounded-xl overflow-hidden hover:border-white transition hover:shadow-2xl shadow-lg ${unit.featured ? 'ring-2 ring-white/50' : ''}">
            <div class="bg-gold-light h-40 flex items-center justify-center border-b-2 border-black relative overflow-hidden">
                ${unit.featured ? '<div class="absolute top-2 right-2 bg-gold text-black px-2 py-1 rounded text-xs font-bold">⭐ مميز</div>' : ''}
                ${unit.images && unit.images.length > 0 ? `
                <div class="image-carousel relative w-full h-full">
                    <img src="${unit.images[0]}" alt="${unit.code}" class="w-full h-full object-cover" id="img-${unit.id}">
                    <div class="absolute bottom-2 left-2 right-2 flex gap-1 justify-center">
                        ${unit.images.map((img, idx) => `<div class="w-2 h-2 rounded-full ${idx === 0 ? 'bg-gold' : 'bg-white/50'}" onclick="changeImage(${unit.id}, ${idx})"></div>`).join('')}
                    </div>
                </div>
                ` : '<i class="fas fa-building text-4xl gold-text"></i>'}
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-black">كود: ${unit.code}</h3>
                    <span class="text-xs bg-black text-gold px-2 py-1 rounded font-bold">${unit.type}</span>
                </div>
                <p class="text-sm text-black font-bold mb-2">${unit.zone}</p>
                <div class="spec-grid mb-3">
                    <div class="spec-box text-xs">
                        <p class="text-black/70 font-bold">غرف</p>
                        <p class="text-black font-bold">${unit.rooms}</p>
                    </div>
                    <div class="spec-box text-xs">
                        <p class="text-black/70 font-bold">مساحة</p>
                        <p class="text-black font-bold">${unit.space}م²</p>
                    </div>
                </div>
                <p class="text-lg font-bold text-black mb-3">${unit.price.toLocaleString()} EGP</p>
                <button onclick="openUnit(${unit.id})" class="w-full btn-primary text-sm mb-2">عرض التفاصيل</button>
            </div>
        </div>
    `).join('');
    
    if(filtered.length === 0) {
        grid.innerHTML = '<p class="col-span-full text-center text-silver text-lg">لا توجد نتائج</p>';
    }
}

// Add search event listener
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('globalSearch');
    if(searchInput) {
        searchInput.addEventListener('input', function() {
            searchUnits(this.value);
        });
    }
});


// ==================== LOAD HARDCODED DATA ====================

function initializeHardcodedData() {
    // Check if partners already exist in localStorage
    let partners = JSON.parse(localStorage.getItem('partners')) || [];
    let services = JSON.parse(localStorage.getItem('services')) || [];
    
    // If empty, load hardcoded data
    if(partners.length === 0) {
        partners = [
            {
                id: 1,
                name: 'Emaar',
                descAr: 'شركة عملاقة متخصصة في تطوير المشاريع السكنية والتجارية الفاخرة. تتمتع بخبرة عقود في بناء مجتمعات عمرانية متكاملة.',
                descEn: 'A giant company specializing in developing luxury residential and commercial projects. It has decades of experience in building integrated urban communities.',
                image: ''
            },
            {
                id: 2,
                name: 'Tatweer Misr',
                descAr: 'متخصصة في تطوير المشاريع السكنية المتميزة والمناطق السياحية. تركز على الجودة والاستدامة في جميع مشاريعها.',
                descEn: 'Specializing in developing distinguished residential projects and tourist areas. Focuses on quality and sustainability in all its projects.',
                image: ''
            },
            {
                id: 3,
                name: 'Palm Hills',
                descAr: 'رائدة في تطوير المجتمعات السكنية المتكاملة بتصاميم معمارية عصرية. معروفة بالتزامها بالجودة والخدمات المتميزة.',
                descEn: 'A leader in developing integrated residential communities with modern architectural designs. Known for its commitment to quality and distinguished services.',
                image: ''
            },
            {
                id: 4,
                name: 'Sodic',
                descAr: 'متخصصة في تطوير مشاريع سكنية وتجارية عالية الجودة. تتميز بالابتكار والتصاميم المستدامة والخدمات العملاء المتقدمة.',
                descEn: 'Specializing in developing high-quality residential and commercial projects. Distinguished by innovation, sustainable designs, and advanced customer services.',
                image: ''
            },
            {
                id: 5,
                name: 'Zamalek',
                descAr: 'متخصصة في المشاريع السكنية الفاخرة والعقارات الاستثمارية. تتمتع بسمعة قوية في تقديم مشاريع بمعايير عالمية.',
                descEn: 'Specializing in luxury residential projects and investment real estate. Enjoys a strong reputation for delivering projects to international standards.',
                image: ''
            }
        ];
        localStorage.setItem('partners', JSON.stringify(partners));
    }
    
    if(services.length === 0) {
        services = [
            {
                id: 1,
                nameAr: 'العاصمة الإدارية الجديدة',
                nameEn: 'New Capital',
                descAr: 'مشاريع سكنية وتجارية متميزة في قلب العاصمة الإدارية الجديدة',
                descEn: 'Distinguished residential and commercial projects in the heart of the New Capital',
                image: ''
            },
            {
                id: 2,
                nameAr: 'راس الحكمة',
                nameEn: 'Ras El Hekma',
                descAr: 'مشاريع ساحلية فاخرة على ساحل البحر المتوسط',
                descEn: 'Luxury coastal projects on the Mediterranean coast',
                image: ''
            },
            {
                id: 3,
                nameAr: 'مدينتي',
                nameEn: 'Madinaty',
                descAr: 'مجتمع سكني متكامل بأحدث المرافق والخدمات',
                descEn: 'An integrated residential community with the latest facilities and services',
                image: ''
            },
            {
                id: 4,
                nameAr: 'الساحل الشمالي',
                nameEn: 'North Coast',
                descAr: 'منتجعات ساحلية وفيلات فاخرة على الساحل الشمالي',
                descEn: 'Coastal resorts and luxury villas on the North Coast',
                image: ''
            },
            {
                id: 5,
                nameAr: 'الرحاب',
                nameEn: 'Al Rehab',
                descAr: 'مجتمع سكني راقي مع مرافق متطورة',
                descEn: 'An upscale residential community with advanced facilities',
                image: ''
            },
            {
                id: 6,
                nameAr: 'القاهرة الجديدة',
                nameEn: 'New Cairo',
                descAr: 'مشاريع سكنية وتجارية في أرقى مناطق القاهرة الجديدة',
                descEn: 'Residential and commercial projects in the finest areas of New Cairo',
                image: ''
            }
        ];
        localStorage.setItem('services', JSON.stringify(services));
    }
    
    // Update global variables
    window.partners = partners;
    window.services = services;
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeHardcodedData();
    renderPartnersList();
    renderServicesList();
});

// ==================== PAGINATION FUNCTIONS ====================

function renderUnitsWithPagination() {
    filteredUnits = units;
    const totalPages = Math.ceil(filteredUnits.length / itemsPerPage);
    const start = (currentUnitsPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedUnits = filteredUnits.slice(start, end);
    
    const grid = document.getElementById('admin-units-grid');
    if (!grid) return;
    
    grid.innerHTML = paginatedUnits.map(unit => `
        <div class="bg-gold-card border-2 border-black rounded-xl p-4 hover:border-white transition">
            <div class="font-bold text-black mb-2">${unit.code}</div>
            <div class="text-sm text-black mb-1">المنطقة: ${unit.zone || 'N/A'}</div>
            <div class="text-sm text-black mb-1">السعر: ${unit.price ? unit.price.toLocaleString() : 'N/A'}</div>
            <div class="text-sm text-black mb-3">النوع: ${unit.type}</div>
            <button onclick="editUnit(${unit.id})" class="bg-blue-600 text-white px-3 py-1 rounded text-xs mr-2">تعديل</button>
            <button onclick="deleteUnit(${unit.id})" class="bg-red-600 text-white px-3 py-1 rounded text-xs">حذف</button>
        </div>
    `).join('');
    
    // Render pagination controls
    renderUnitsPagination(totalPages);
}

function renderUnitsPagination(totalPages) {
    const paginationDiv = document.getElementById('units-pagination');
    if (!paginationDiv) return;
    
    let html = '<div class="flex justify-center gap-2 mt-4 flex-wrap">';
    
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="goToUnitsPage(${i})" class="px-3 py-2 rounded ${i === currentUnitsPage ? 'bg-gold text-black' : 'bg-gray-700 text-white'}">${i}</button>`;
    }
    
    html += '</div>';
    paginationDiv.innerHTML = html;
}

function goToUnitsPage(page) {
    currentUnitsPage = page;
    renderUnitsWithPagination();
}

function searchUnitsAdmin(query) {
    if (!query) {
        filteredUnits = units;
    } else {
        filteredUnits = units.filter(u => 
            u.code.toLowerCase().includes(query.toLowerCase()) ||
            u.zone.toLowerCase().includes(query.toLowerCase()) ||
            u.category.toLowerCase().includes(query.toLowerCase())
        );
    }
    currentUnitsPage = 1;
    renderUnitsWithPagination();
}

function renderLeadsWithPagination() {
    filteredLeads = leads;
    const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
    const start = (currentLeadsPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedLeads = filteredLeads.slice(start, end);
    
    const table = document.getElementById('admin-leads-table');
    if (!table) return;
    
    table.innerHTML = `
        <thead>
            <tr class="border-b border-gold/30">
                <th class="p-3 text-gold text-right">التاريخ</th>
                <th class="p-3 text-gold text-right">الاسم</th>
                <th class="p-3 text-gold text-right">الهاتف</th>
                <th class="p-3 text-gold text-right">المصدر</th>
                <th class="p-3 text-gold text-right">التواصل</th>
                <th class="p-3 text-gold text-right">الحملة</th>
                <th class="p-3 text-gold text-right">الملاحظات</th>
                <th class="p-3 text-gold text-right">التقييم</th>
                <th class="p-3 text-gold text-right">المبيعات</th>
                <th class="p-3 text-gold text-right">المتابعة</th>
                <th class="p-3 text-gold text-center">إجراءات</th>
            </tr>
        </thead>
        <tbody>
            ${paginatedLeads.map(l => `
                <tr class="border-b border-gold/20 hover:bg-gold/5">
                    <td class="p-3 text-silver text-xs">${l.date}</td>
                    <td class="p-3 text-silver">${l.name}</td>
                    <td class="p-3 text-silver">${l.phone}</td>
                    <td class="p-3 text-silver text-xs">${l.source}</td>
                    <td class="p-3 text-silver text-xs">${l.contact}</td>
                    <td class="p-3 text-silver text-xs">${l.campaign}</td>
                    <td class="p-3 text-silver text-xs">${l.notes}</td>
                    <td class="p-3 text-silver text-xs">${l.rating}</td>
                    <td class="p-3 text-silver text-xs">${l.sales}</td>
                    <td class="p-3 text-silver text-xs">${l.followUp}</td>
                    <td class="p-3 text-center">
                        <button onclick="deleteLead(${l.id})" class="text-red-500 hover:text-red-700">حذف</button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    // Render pagination controls
    renderLeadsPagination(totalPages);
}

function renderLeadsPagination(totalPages) {
    const paginationDiv = document.getElementById('leads-pagination');
    if (!paginationDiv) return;
    
    let html = '<div class="flex justify-center gap-2 mt-4 flex-wrap">';
    
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="goToLeadsPage(${i})" class="px-3 py-2 rounded ${i === currentLeadsPage ? 'bg-gold text-black' : 'bg-gray-700 text-white'}">${i}</button>`;
    }
    
    html += '</div>';
    paginationDiv.innerHTML = html;
}



function searchLeadsAdmin(query) {
    if (!query) {
        filteredLeads = leads;
    } else {
        filteredLeads = leads.filter(l => 
            l.name.toLowerCase().includes(query.toLowerCase()) ||
            l.phone.includes(query) ||
            l.source.toLowerCase().includes(query.toLowerCase())
        );
    }
    currentLeadsPage = 1;
    renderLeadsWithPagination();
}


// ==================== FOOTER STYLING ====================
function initializeFooter() {
    // Quick Links section - gold background
    const quickLinks = document.querySelector('[data-footer-section="quick-links"]');
    if (quickLinks) {
        quickLinks.style.backgroundColor = '#d4af37';
        quickLinks.style.color = '#000000';
    }
    
    // Social Media section - black background
    const socialMedia = document.querySelector('[data-footer-section="social-media"]');
    if (socialMedia) {
        socialMedia.style.backgroundColor = '#000000';
        socialMedia.style.color = '#ffffff';
        // Update logo colors
        const logos = socialMedia.querySelectorAll('svg, img');
        logos.forEach(logo => {
            logo.style.filter = 'brightness(0) invert(1)';
        });
    }
    
    // Property Platforms section - black background
    const platforms = document.querySelector('[data-footer-section="platforms"]');
    if (platforms) {
        platforms.style.backgroundColor = '#000000';
        platforms.style.color = '#ffffff';
        // Update logo colors
        const logos = platforms.querySelectorAll('svg, img');
        logos.forEach(logo => {
            logo.style.filter = 'brightness(0) invert(1)';
        });
    }
    
    // Copyright section - gold background
    const copyright = document.querySelector('[data-footer-section="copyright"]');
    if (copyright) {
        copyright.style.backgroundColor = '#d4af37';
        copyright.style.color = '#000000';
    }
}

// Employee View Functions




// Filter Functions for Units and Leads

function filterUnits() {
    const filters = currentFilters.units;
    
    return units.filter(unit => {
        const codeMatch = !filters.code || unit.code.toLowerCase().includes(filters.code.toLowerCase());
        const areaMatch = !filters.area || unit.area.toLowerCase().includes(filters.area.toLowerCase());
        const spaceMatch = (!filters.minSpace || unit.space >= parseInt(filters.minSpace)) &&
                          (!filters.maxSpace || unit.space <= parseInt(filters.maxSpace));
        const priceMatch = (!filters.minPrice || unit.price >= parseInt(filters.minPrice)) &&
                          (!filters.maxPrice || unit.price <= parseInt(filters.maxPrice));
        const categoryMatch = !filters.category || unit.category === filters.category;
        
        return codeMatch && areaMatch && spaceMatch && priceMatch && categoryMatch;
    });
}

function filterLeads() {
    const filters = currentFilters.leads;
    
    return leads.filter(lead => {
        const nameMatch = !filters.name || lead.name.toLowerCase().includes(filters.name.toLowerCase());
        const phoneMatch = !filters.phone || lead.phone.includes(filters.phone);
        const sourceMatch = !filters.source || lead.source.toLowerCase().includes(filters.source.toLowerCase());
        const campaignMatch = !filters.campaign || lead.campaign.toLowerCase().includes(filters.campaign.toLowerCase());
        
        return nameMatch && phoneMatch && sourceMatch && campaignMatch;
    });
}

function applyUnitFilters() {
    // Get filter values from inputs
    currentFilters.units.code = document.getElementById('filterCode')?.value || '';
    currentFilters.units.area = document.getElementById('filterArea')?.value || '';
    currentFilters.units.minSpace = document.getElementById('filterMinSpace')?.value || '';
    currentFilters.units.maxSpace = document.getElementById('filterMaxSpace')?.value || '';
    currentFilters.units.minPrice = document.getElementById('filterMinPrice')?.value || '';
    currentFilters.units.maxPrice = document.getElementById('filterMaxPrice')?.value || '';
    currentFilters.units.category = document.getElementById('filterCategory')?.value || '';
    
    // Reset to page 1
    document.getElementById('unitsPage').value = '1';
    renderUnits();
}

function applyLeadFilters() {
    // Get filter values from inputs
    currentFilters.leads.name = document.getElementById('filterLeadName')?.value || '';
    currentFilters.leads.phone = document.getElementById('filterLeadPhone')?.value || '';
    currentFilters.leads.source = document.getElementById('filterLeadSource')?.value || '';
    currentFilters.leads.campaign = document.getElementById('filterLeadCampaign')?.value || '';
    
    // Reset to page 1
    document.getElementById('leadsPage').value = '1';
    renderLeadsList();
}

function clearUnitFilters() {
    currentFilters.units = {code: '', area: '', minSpace: '', maxSpace: '', minPrice: '', maxPrice: '', category: ''};
    document.getElementById('filterCode').value = '';
    document.getElementById('filterArea').value = '';
    document.getElementById('filterMinSpace').value = '';
    document.getElementById('filterMaxSpace').value = '';
    document.getElementById('filterMinPrice').value = '';
    document.getElementById('filterMaxPrice').value = '';
    document.getElementById('filterCategory').value = '';
    applyUnitFilters();
}

function clearLeadFilters() {
    currentFilters.leads = {name: '', phone: '', source: '', campaign: ''};
    document.getElementById('filterLeadName').value = '';
    document.getElementById('filterLeadPhone').value = '';
    document.getElementById('filterLeadSource').value = '';
    document.getElementById('filterLeadCampaign').value = '';
    applyLeadFilters();
}



function showEmployeeUnitsView() {
    const modal = document.getElementById('employeeViewModal');
    if (!modal) {
        const newModal = document.createElement('div');
        newModal.id = 'employeeViewModal';
        newModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        newModal.innerHTML = `
            <div class="bg-gold-card p-6 rounded-lg max-w-4xl w-full max-h-96 overflow-auto">
                <h2 class="text-2xl font-bold mb-4">جدول الوحدات</h2>
                <div class="mb-4 grid grid-cols-2 gap-2">
                    <input type="text" id="empFilterCode" placeholder="البحث بالكود" class="p-2 rounded bg-white text-black" onchange="updateEmployeeUnitsView()">
                    <input type="text" id="empFilterArea" placeholder="المنطقة" class="p-2 rounded bg-white text-black" onchange="updateEmployeeUnitsView()">
                    <input type="number" id="empFilterMinSpace" placeholder="الحد الأدنى للمساحة" class="p-2 rounded bg-white text-black" onchange="updateEmployeeUnitsView()">
                    <input type="number" id="empFilterMaxPrice" placeholder="الحد الأقصى للسعر" class="p-2 rounded bg-white text-black" onchange="updateEmployeeUnitsView()">
                </div>
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-black text-gold-card">
                            <th class="border p-2">الكود</th>
                            <th class="border p-2">النوع</th>
                            <th class="border p-2">المنطقة</th>
                            <th class="border p-2">الغرف</th>
                            <th class="border p-2">المساحة</th>
                            <th class="border p-2">السعر</th>
                        </tr>
                    </thead>
                    <tbody id="employeeUnitsTable"></tbody>
                </table>
                <button onclick="document.getElementById('employeeViewModal').remove()" class="mt-4 bg-black text-gold-card px-4 py-2 rounded">إغلاق</button>
            </div>
        `;
        document.body.appendChild(newModal);
    }
    updateEmployeeUnitsView();
}

function updateEmployeeUnitsView() {
    const code = document.getElementById('empFilterCode')?.value || '';
    const area = document.getElementById('empFilterArea')?.value || '';
    const minSpace = document.getElementById('empFilterMinSpace')?.value || '';
    const maxPrice = document.getElementById('empFilterMaxPrice')?.value || '';
    
    const filtered = units.filter(unit => {
        return (!code || unit.code.toLowerCase().includes(code.toLowerCase())) &&
               (!area || unit.area.toLowerCase().includes(area.toLowerCase())) &&
               (!minSpace || unit.space >= parseInt(minSpace)) &&
               (!maxPrice || unit.price <= parseInt(maxPrice));
    });
    
    const table = document.getElementById('employeeUnitsTable');
    table.innerHTML = filtered.slice(0, 30).map(unit => `
        <tr>
            <td class="border p-2">${unit.code}</td>
            <td class="border p-2">${unit.type}</td>
            <td class="border p-2">${unit.zone || unit.area || '--'}</td>
            <td class="border p-2">${unit.rooms}</td>
            <td class="border p-2">${unit.space}</td>
            <td class="border p-2">${unit.price}</td>
        </tr>
    `).join('');
}

function showEmployeeLeadsView() {
    const modal = document.getElementById('employeeLeadsModal');
    if (!modal) {
        const newModal = document.createElement('div');
        newModal.id = 'employeeLeadsModal';
        newModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        newModal.innerHTML = `
            <div class="bg-gold-card p-6 rounded-lg max-w-4xl w-full max-h-96 overflow-auto">
                <h2 class="text-2xl font-bold mb-4">جدول الليدز</h2>
                <div class="mb-4 grid grid-cols-2 gap-2">
                    <input type="text" id="empFilterLeadName" placeholder="البحث بالاسم" class="p-2 rounded bg-white text-black" onchange="updateEmployeeLeadsView()">
                    <input type="text" id="empFilterLeadPhone" placeholder="البحث برقم الهاتف" class="p-2 rounded bg-white text-black" onchange="updateEmployeeLeadsView()">
                </div>
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-black text-gold-card">
                            <th class="border p-2">الاسم</th>
                            <th class="border p-2">الهاتف</th>
                            <th class="border p-2">المصدر</th>
                            <th class="border p-2">الحملة</th>
                            <th class="border p-2">التقييم</th>
                        </tr>
                    </thead>
                    <tbody id="employeeLeadsTable"></tbody>
                </table>
                <button onclick="document.getElementById('employeeLeadsModal').remove()" class="mt-4 bg-black text-gold-card px-4 py-2 rounded">إغلاق</button>
            </div>
        `;
        document.body.appendChild(newModal);
    }
    updateEmployeeLeadsView();
}

function updateEmployeeLeadsView() {
    const name = document.getElementById('empFilterLeadName')?.value || '';
    const phone = document.getElementById('empFilterLeadPhone')?.value || '';
    
    const filtered = leads.filter(lead => {
        return (!name || lead.name.toLowerCase().includes(name.toLowerCase())) &&
               (!phone || lead.phone.includes(phone));
    });
    
    const table = document.getElementById('employeeLeadsTable');
    table.innerHTML = filtered.slice(0, 30).map(lead => `
        <tr>
            <td class="border p-2">${lead.name}</td>
            <td class="border p-2">${lead.phone}</td>
            <td class="border p-2">${lead.source}</td>
            <td class="border p-2">${lead.campaign}</td>
            <td class="border p-2">${lead.rating}</td>
        </tr>
    `).join('');
}



function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const subject = form.querySelectorAll('input[type="text"]')[1].value;
    const message = form.querySelector('textarea').value;
    
    // Create a lead from contact form
    const newLead = {
        id: leads.length + 1,
        date: new Date().toLocaleDateString('ar-EG'),
        name: name,
        phone: phone,
        email: email,
        source: 'Contact Form',
        method: 'Website',
        campaign: subject,
        notes: message,
        rating: 0,
        sales: 0,
        followUp: 'Pending'
    };
    
    leads.push(newLead);
    localStorage.setItem('leads', JSON.stringify(leads));
    
     alert('شكراً لتواصلك معنا! سيتم الرد عليك قريباً.');
    form.reset();
}


// ==================== RENDER PARTNERS & SERVICES ====================

function renderPartners() {
    const section = document.getElementById('partners');
    if(!section) return;
    
    section.innerHTML = `
        <div class="py-12">
            <h2 class="text-4xl font-bold text-black mb-12 text-center">شركاؤنا</h2>
            <div class="grid md:grid-cols-3 gap-8">
                ${partnersData.map(partner => `
                    <div class="bg-gold-card border-2 border-black rounded-xl p-6 text-center hover:shadow-lg transition">
                        <img src="${partner.logo}" alt="${partner.name}" class="w-full h-24 object-cover mb-4 rounded">
                        <h3 class="text-xl font-bold text-black mb-2">${partner.name}</h3>
                        <p class="text-black text-sm">${partner.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderServices() {
    const section = document.getElementById('services');
    if(!section) return;
    
    section.innerHTML = `
        <div class="py-12">
            <h2 class="text-4xl font-bold text-black mb-12 text-center">مناطق عملنا</h2>
            <div class="grid md:grid-cols-3 gap-8">
                ${servicesData.map(service => `
                    <div class="bg-gold-card border-2 border-black rounded-xl p-6 text-center hover:shadow-lg transition">
                        <div class="text-5xl font-bold text-gold mb-4">${service.units}</div>
                        <h3 class="text-2xl font-bold text-black mb-2">${service.name}</h3>
                        <p class="text-black text-sm">${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ==================== ADMIN PARTNERS & SERVICES MANAGEMENT ====================

function renderAdminPartnersList() {
    const container = document.getElementById('admin-partners');
    if(!container) return;
    
    let html = `<h2 class="text-2xl font-bold text-black mb-6">إدارة الشركاء</h2>
        <div style="margin-bottom:20px;">
            <button onclick="showAddPartnerForm()" style="padding:10px; background:#d4af37; color:#000; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">+ إضافة شريك جديد</button>
        </div>
        <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#d4af37;">
                <th style="padding:10px; text-align:right;">الاسم</th>
                <th style="padding:10px; text-align:right;">الوصف</th>
                <th style="padding:10px; text-align:right;">الإجراءات</th>
            </tr>`;
    
    partnersData.forEach(partner => {
        html += `<tr style="border:1px solid #ddd;">
                <td style="padding:10px;">${partner.name}</td>
                <td style="padding:10px;">${partner.description}</td>
                <td style="padding:10px;">
                    <button onclick="editPartner(${partner.id})" style="padding:5px 10px; background:#333; color:#d4af37; border:none; border-radius:3px; cursor:pointer; margin-right:5px;">تعديل</button>
                    <button onclick="deletePartner(${partner.id})" style="padding:5px 10px; background:#d32f2f; color:white; border:none; border-radius:3px; cursor:pointer;">حذف</button>
                </td>
            </tr>`;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function renderAdminServicesList() {
    const container = document.getElementById('admin-services');
    if(!container) return;
    
    let html = `<h2 class="text-2xl font-bold text-black mb-6">إدارة مناطق العمل</h2>
        <div style="margin-bottom:20px;">
            <button onclick="showAddServiceForm()" style="padding:10px; background:#d4af37; color:#000; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">+ إضافة منطقة جديدة</button>
        </div>
        <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#d4af37;">
                <th style="padding:10px; text-align:right;">الاسم</th>
                <th style="padding:10px; text-align:right;">الوصف</th>
                <th style="padding:10px; text-align:right;">عدد الوحدات</th>
                <th style="padding:10px; text-align:right;">الإجراءات</th>
            </tr>`;
    
    servicesData.forEach(service => {
        html += `<tr style="border:1px solid #ddd;">
                <td style="padding:10px;">${service.name}</td>
                <td style="padding:10px;">${service.description}</td>
                <td style="padding:10px;">${service.units}</td>
                <td style="padding:10px;">
                    <button onclick="editService(${service.id})" style="padding:5px 10px; background:#333; color:#d4af37; border:none; border-radius:3px; cursor:pointer; margin-right:5px;">تعديل</button>
                    <button onclick="deleteService(${service.id})" style="padding:5px 10px; background:#d32f2f; color:white; border:none; border-radius:3px; cursor:pointer;">حذف</button>
                </td>
            </tr>`;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function showAddPartnerForm() {
    const name = prompt('اسم الشريك:');
    if(!name) return;
    const description = prompt('الوصف:');
    if(!description) return;
    
    const newPartner = {
        id: Math.max(...partnersData.map(p => p.id), 0) + 1,
        name: name,
        description: description,
        logo: 'https://via.placeholder.com/200x100?text=' + name
    };
    
    partnersData.push(newPartner);
    localStorage.setItem('partnersData', JSON.stringify(partnersData));
    renderAdminPartnersList();
    alert('تم إضافة الشريك بنجاح');
}

function editPartner(id) {
    const partner = partnersData.find(p => p.id === id);
    if(!partner) return;
    
    const name = prompt('اسم الشريك:', partner.name);
    if(!name) return;
    const description = prompt('الوصف:', partner.description);
    if(!description) return;
    
    partner.name = name;
    partner.description = description;
    localStorage.setItem('partnersData', JSON.stringify(partnersData));
    renderAdminPartnersList();
    alert('تم تعديل الشريك بنجاح');
}

function showAddServiceForm() {
    const name = prompt('اسم المنطقة:');
    if(!name) return;
    const description = prompt('الوصف:');
    if(!description) return;
    const units = prompt('عدد الوحدات:', '0');
    if(!units) return;
    
    const newService = {
        id: Math.max(...servicesData.map(s => s.id), 0) + 1,
        name: name,
        description: description,
        units: parseInt(units)
    };
    
    servicesData.push(newService);
    localStorage.setItem('servicesData', JSON.stringify(servicesData));
    renderAdminServicesList();
    alert('تم إضافة المنطقة بنجاح');
}

function editService(id) {
    const service = servicesData.find(s => s.id === id);
    if(!service) return;
    
    const name = prompt('اسم المنطقة:', service.name);
    if(!name) return;
    const description = prompt('الوصف:', service.description);
    if(!description) return;
    const units = prompt('عدد الوحدات:', service.units);
    if(!units) return;
    
    service.name = name;
    service.description = description;
    service.units = parseInt(units);
    localStorage.setItem('servicesData', JSON.stringify(servicesData));
    renderAdminServicesList();
    alert('تم تعديل المنطقة بنجاح');
}

// Initialize footer on page load
document.addEventListener('DOMContentLoaded', initializeFooter);
