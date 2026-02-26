/**
 * Update navigation tabs language
 */
function updateNavigationLanguage() {
    const isAr = lang === 'ar';
    
    // Translation map
    const translations = {
        'ar': {
            'Home': 'الرئيسية',
            'About Us': 'عن الشركة',
            'Resale': 'ريسيل',
            'Primary': 'برايمري',
            'Rental': 'إيجار',
            'Our Services': 'مناطق عملنا',
            'Partners': 'شركاؤنا',
            'Privacy Policy': 'سياسة الخصوصية',
            'Terms & Conditions': 'الشروط والأحكام',
            'FAQ': 'الأسئلة الشائعة',
            'Contact Us': 'اتصل بنا',
            'CRM': 'CRM',
            'Inventory': 'الإنفنتوري',
            'Admin': 'الأدمن'
        },
        'en': {
            'الرئيسية': 'Home',
            'عن الشركة': 'About Us',
            'ريسيل': 'Resale',
            'برايمري': 'Primary',
            'إيجار': 'Rental',
            'مناطق عملنا': 'Our Services',
            'شركاؤنا': 'Partners',
            'سياسة الخصوصية': 'Privacy Policy',
            'الشروط والأحكام': 'Terms & Conditions',
            'الأسئلة الشائعة': 'FAQ',
            'اتصل بنا': 'Contact Us',
            'CRM': 'CRM',
            'الإنفنتوري': 'Inventory',
            'الأدمن': 'Admin'
        }
    };
    
    // Update all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const currentText = btn.textContent.trim();
        const langMap = translations[lang];
        if (langMap && langMap[currentText]) {
            btn.textContent = langMap[currentText];
        }
    });
    
    console.log('✅ تم تحديث لغة التابات الرئيسية');
}

// Update toggleLanguage function to call updateNavigationLanguage
const originalToggleLanguage = toggleLanguage;
function toggleLanguage() {
    lang = lang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.getElementById('langToggle').textContent = lang === 'ar' ? 'English' : 'عربي';
    
    // Update navigation tabs
    updateNavigationLanguage();
    
    updateFilterLabels();
    renderAbout();
    renderUnits();
}
