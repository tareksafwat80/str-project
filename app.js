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

// ==================== REAL ESTATE DATA FROM EXCEL ====================
let units = [{"id": 20002, "code": "1001", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "37", "unit": "4", "floor": "G", "model": "ستوديو", "delivery": "2027", "facade": "فيو مفتوح واجهة", "space": 45, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 690000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 17.000  سنوي 160.000", "price": 4100000, "notes": "ستوديو 1 غرفة نوم", "clientName": "Sara", "clientPhone": "01111700072", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 40004, "code": "1003", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B2", "building": "48", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك و جاردن", "space": 107, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5000000, "notes": "تخصيص شرطه", "clientName": "M7md", "clientPhone": "01149033088", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 50005, "code": "1005", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "21", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك و جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4900000, "notes": "الفيديو مع المالك تشطيبات خاصه والشقة حاليا مؤجرة", "clientName": "Rafik Eskandar", "clientPhone": "0061466521988", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 60006, "code": "1006", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "20", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 145, "garden": "39", "rooms": 3, "bathroom": "3", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1900000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 40.000  سنوي 450.000", "price": 12778000, "notes": "--", "clientName": "3olla Gad", "clientPhone": "01030242165", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 70007, "code": "1007", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B3", "building": "12", "unit": "61", "floor": "6", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 208, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 11900000, "notes": "استلام فوري Ready To Move", "clientName": "Aya Taher", "clientPhone": "01205389754", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 80008, "code": "1008", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "66", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو بارك", "space": 109, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1370000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 32.000  سنوي 330.000", "price": 8028000, "notes": "--", "clientName": "Dr M7md Dawood", "clientPhone": "01116992012", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 90009, "code": "1009", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B3", "building": "15", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 140, "garden": "40", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 8500000, "notes": "بالعفش و الاجهزه و التكييفات", "clientName": "", "clientPhone": "01126365664", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 100010, "code": "2001", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "60", "unit": "51", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 200, "garden": "--", "rooms": 4, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 10000000, "notes": "استلام فوري Ready To Move", "clientName": "M7md Ghanem", "clientPhone": "01289236362", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 110011, "code": "2002", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 111, "garden": "45", "rooms": 2, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 4300000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 30.000  سنوي 790.000", "price": 10493000, "notes": "بالتكييفات", "clientName": "A7md", "clientPhone": "01150574474", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 120012, "code": "2003", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "51", "unit": "44", "floor": "4", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 107, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "--", "payments": 1300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 6700000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "A7md", "clientPhone": "01150574474", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 130013, "code": "2004", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "13", "unit": "4", "floor": "G", "model": "ستوديو", "delivery": "استلام فوري", "facade": "--", "space": 45, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 400000, "offerPrice": 1450000, "totalPayments": 0, "installmentDetails": "--", "price": 1855000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01144570828", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 150015, "code": "2009", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "78", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "طرفية بحري فيو  وايد جاردن", "space": 142, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "سبتمبر 2025", "installmentPeriod": "10", "payments": 0, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "--", "price": 14502450, "notes": "--", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 160016, "code": "3001", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 113, "garden": "--", "rooms": 3, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5500000, "notes": "طلعت مصطفي - خالصة جميع المستحقات", "clientName": "", "clientPhone": "01005805957", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 170017, "code": "3002", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "44", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو بارك", "space": 142, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "يناير 2025", "installmentPeriod": "10", "payments": 0, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 55.000  سنوي 484.000", "price": 13019940, "notes": "--", "clientName": "", "clientPhone": "01211809302", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 180018, "code": "3003", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "45", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو بارك", "space": 143, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "يناير 2025", "installmentPeriod": "10", "payments": 0, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "--", "price": 13861085, "notes": "--", "clientName": "", "clientPhone": "01211809302", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 190019, "code": "3004", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "41", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "يناير 2025", "installmentPeriod": "10", "payments": 0, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 45.000  سنوي 402.000", "price": 10544350, "notes": "--", "clientName": "", "clientPhone": "01211809302", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 200020, "code": "3005", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "--", "unit": "--", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو البحيرات", "space": 150, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 10000000, "notes": "فيو البحيرات السعر شامل النادى والتكييفات السعر 11 م بالفرش", "clientName": "M7md 3abbas", "clientPhone": "01028875011", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 210021, "code": "3006", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B2", "building": "47", "unit": "66", "floor": "6", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 67, "garden": "--", "rooms": 1, "bathroom": "--", "bookingDate": "ابريل 2024", "installmentPeriod": "12", "payments": 890000, "offerPrice": -100000, "totalPayments": 0, "installmentDetails": "--", "price": 4534000, "notes": "البيع بخساره 100 الف من المدفوع لتعثر السداد", "clientName": "3ly", "clientPhone": "00966592263533", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 220022, "code": "3008", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "31A", "unit": "51", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع رئيسي", "space": 83, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "مارس 2024", "installmentPeriod": "7", "payments": 3000000, "offerPrice": 2100000, "totalPayments": 0, "installmentDetails": "--", "price": 7326610, "notes": "متبقى 4.3 مليون اقساط على 6 سنوات تشطيبات  خاصه بالتكييفات السعر شامل الفرش بدون فرش 7.3م", "clientName": "Asma2 Elkholy", "clientPhone": "00966566983763", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 230023, "code": "3009", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "14", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 119, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "يوليو 2022", "installmentPeriod": "8", "payments": 1500000, "offerPrice": 3500000, "totalPayments": 0, "installmentDetails": "--", "price": 4544920, "notes": "--", "clientName": "Salah", "clientPhone": "01050035408", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 240024, "code": "4001", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "71", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "واجهه بحرى صريح على شارع طرفيه", "space": 78, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "7", "payments": 1270000, "offerPrice": 1300000, "totalPayments": 0, "installmentDetails": "سنوي 450.000", "price": 1700000, "notes": "", "clientName": "Gehan Shalaby", "clientPhone": "01121112501", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 250025, "code": "4002", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "32", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 67, "garden": "35", "rooms": 1, "bathroom": "--", "bookingDate": "مارس 2025", "installmentPeriod": "10", "payments": 666000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهري 25.605 سنوي 256.050", "price": 6883570, "notes": "ستوديو ارضي بجاردن", "clientName": "Salah Selim", "clientPhone": "01272227233", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 260026, "code": "4003", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "41", "unit": "23", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1500000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهري 34.155 سنوي 337.050", "price": 9059870, "notes": "--", "clientName": "Dr Sara", "clientPhone": "01014625757", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 270027, "code": "4004", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "64", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "بحري شرقي", "space": 117, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "اغسطس 2023", "installmentPeriod": "7", "payments": 2500000, "offerPrice": 2500000, "totalPayments": 0, "installmentDetails": "--", "price": 5363680, "notes": "تخصيص هيئة - تشطيبات خاصة الترا لوكس العدادات راكبة ومستلمة", "clientName": "M7md", "clientPhone": "01069326434", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 280028, "code": "4007", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "93", "unit": "34", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك وشارع", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4750000, "notes": "استلام فوري Ready To Move", "clientName": "Hany Elseba3y", "clientPhone": "01222228395", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 300030, "code": "4009", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "49", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 201, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "يونيو 2024", "installmentPeriod": "8", "payments": 3000000, "offerPrice": 2500000, "totalPayments": 0, "installmentDetails": "شهرى 63.985 سنوى 639.850", "price": 14542110, "notes": "--", "clientName": "Haitham 3blnaby", "clientPhone": "01033223549", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 330033, "code": "5003", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "12", "unit": "61", "floor": "6", "model": "شقة سكنية", "delivery": "2027", "facade": "--", "space": 127, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1205000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 23.850 سنوي 230.550", "price": 8246000, "notes": "--", "clientName": "inv Doc A7md Sa3d", "clientPhone": "TSS", "status": "Refreshed", "source": "TSS", "createdAt": "", "featured": false}, {"id": 340034, "code": "5005", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B2", "building": "6", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع و جاردن خطوة من مجري السيل والنادي", "space": 202, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 10600000, "notes": "تشطيبات خاصة  لم تستخدم", "clientName": "Sabry", "clientPhone": "TSS", "status": "اعلان", "source": "TSS", "createdAt": "", "featured": false}, {"id": 350035, "code": "5007", "category": "Apt Resale", "type": "resale", "city": "Alrehab", "zone": "Alrehab", "building": "65", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "وايد جاردن", "space": 162, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "7", "payments": 3400000, "offerPrice": 3000000, "totalPayments": 0, "installmentDetails": "--", "price": 8400000, "notes": "باقى الاقساط على 5 سنين تشطيبات خاصه متأجره لحد 14/1/2026", "clientName": "Council Sa3eed", "clientPhone": "TSS", "status": "available", "source": "TSS", "createdAt": "", "featured": false}, {"id": 360036, "code": "5008", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5000000, "notes": "تشطيبات الترا سوبر لوكس", "clientName": "M7md Ghanem", "clientPhone": "01002166073", "status": "Refreshed", "source": "TSS", "createdAt": "", "featured": false}, {"id": 380038, "code": "7002", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "66", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو وايد جاردن ومجرى السيل", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1500000, "offerPrice": 800000, "totalPayments": 0, "installmentDetails": "شهرى 36.485 سنوى 364.850", "price": 8898000, "notes": "فيو وايد جاردن مجرى السيل", "clientName": "", "clientPhone": "01001686278", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 390039, "code": "7003", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "68", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1681000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 37.055 سنوى 353.300", "price": 8617470, "notes": "تنازل مجانى نادى غير اجبارى", "clientName": "", "clientPhone": "01557212001", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 400040, "code": "7004", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "وايد جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5500000, "notes": "تشطيبات خاصه", "clientName": "", "clientPhone": "01152655556", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 410041, "code": "7005", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B1", "building": "34", "unit": "36", "floor": "3", "model": "ستوديو", "delivery": "2026", "facade": "--", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "يونيو 2021", "installmentPeriod": "15", "payments": 550000, "offerPrice": 1600000, "totalPayments": 0, "installmentDetails": "شهرى 4.920 سنوى 48.850", "price": 1837150, "notes": "حجز 2021 بسعر ممتاز", "clientName": "", "clientPhone": "01114182042", "status": "Refreshed", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 420042, "code": "7006", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "4", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو بارك", "space": 109, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2023", "installmentPeriod": "12", "payments": 1136000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهرى 13.760 سنوى 135.250", "price": 5187446, "notes": "حجز 2023 بسعر ممتاز", "clientName": "", "clientPhone": "0100031628", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 430043, "code": "7007", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "--", "unit": "--", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4950000, "notes": "تشطيبات فندقيه خالص جميع المستحقات البيع شامل الوديعه و الاضاءات والعدادت وتكيف كونسيلد", "clientName": "", "clientPhone": "01127732369", "status": "Refreshed", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 440044, "code": "7008", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "18", "unit": "--", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "--", "space": 78, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 850000, "offerPrice": 1800000, "totalPayments": 0, "installmentDetails": "شهرى 7500 سنوى 124.000", "price": 3200000, "notes": "--", "clientName": "", "clientPhone": "01098966985", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 450045, "code": "7009", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "40", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو East Hub", "space": 70, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "مايو 2023", "installmentPeriod": "7", "payments": 1400000, "offerPrice": 1200000, "totalPayments": 0, "installmentDetails": "شهرى 7400 سنوى 190.000", "price": 2642300, "notes": "متأجره ب12 الف وباقى  اقساط على 5 سنوات يمكن تخصيص جاردن تخصيص هيئه", "clientName": "Dr M7mod", "clientPhone": "01022669929", "status": "Xclusive", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 460046, "code": "10010", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "52", "unit": "54", "floor": "5", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 109, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1000000, "offerPrice": 50000, "totalPayments": 0, "installmentDetails": "شهري 35.000  سنوي 380.000", "price": 8300000, "notes": "--", "clientName": "", "clientPhone": "01115429444", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 470047, "code": "10011", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "--", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 91, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4100000, "notes": "تخصيص - خالصة ليس عليها اي مستحقات - استلام فوري", "clientName": "inv 3bdalla Elgamal", "clientPhone": "01503456757", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 480048, "code": "10013", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع", "space": 92, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4700000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01221737217", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 490049, "code": "10015", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "4", "unit": "43", "floor": "4", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 80, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 925000, "offerPrice": 900000, "totalPayments": 0, "installmentDetails": "شهري 20.000  سنوي 170.000", "price": 4566200, "notes": "--", "clientName": "", "clientPhone": "0096569009464", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 500050, "code": "10017", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "45", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 96, "garden": "42", "rooms": 2, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "12", "payments": 300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 26.000  سنوي 270.000", "price": 7922000, "notes": "--", "clientName": "", "clientPhone": "01115333694", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 510051, "code": "10018", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "41", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 140, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "7", "payments": 2650000, "offerPrice": 2750000, "totalPayments": 0, "installmentDetails": "سنوي 689.190", "price": 3245000, "notes": "تخصيص شرطه", "clientName": "", "clientPhone": "01033345938", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 520052, "code": "10019", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "22", "unit": "52", "floor": "5", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو النادي", "space": 107, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "2024", "installmentPeriod": "6", "payments": 2300000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهري 47.000  سنوي 470.000", "price": 11904000, "notes": "--", "clientName": "A7md 3ashor", "clientPhone": "00966506971298", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 530053, "code": "10020", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "42", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1128000, "offerPrice": 260000, "totalPayments": 0, "installmentDetails": "شهري 35.000  سنوي 350.000", "price": 9138500, "notes": "نادى غير اجبارى", "clientName": "", "clientPhone": "01097731995", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 540054, "code": "10022", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "71", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 223, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "2023", "installmentPeriod": "12", "payments": 1735000, "offerPrice": 600000, "totalPayments": 0, "installmentDetails": "شهري 31.000  سنوي 330.000", "price": 10917000, "notes": "--", "clientName": "Hagar Hussein", "clientPhone": "01141222270", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 550055, "code": "10023", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "19", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1276000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 40.000  سنوي 380.000", "price": 9736000, "notes": "--", "clientName": "Osama Shehata", "clientPhone": "01067645718", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 560056, "code": "10024", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "68", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1133000, "offerPrice": 307000, "totalPayments": 0, "installmentDetails": "شهري 37.000  سنوي 360.000", "price": 9545000, "notes": "--", "clientName": "investor M7md Ghaly", "clientPhone": "01111119556", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 570057, "code": "10025", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "65", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1144000, "offerPrice": 336000, "totalPayments": 0, "installmentDetails": "شهري 35.000  سنوي 360.000", "price": 9449000, "notes": "--", "clientName": "investor M7md Ghaly", "clientPhone": "01111119556", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 580058, "code": "10026", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "25", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1441000, "offerPrice": 209000, "totalPayments": 0, "installmentDetails": "شهري 50.000  سنوي 460.000", "price": 12022000, "notes": "--", "clientName": "investor M7md Ghaly", "clientPhone": "01111119556", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 590059, "code": "10027", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "61", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 141, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 2182000, "offerPrice": 450000, "totalPayments": 0, "installmentDetails": "شهري 41.000  سنوي 450.000", "price": 11536000, "notes": "--", "clientName": "", "clientPhone": "01014933334", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 600060, "code": "10028", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "--", "unit": "--", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 200, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 13500000, "notes": "السعر شامل التكييفات والمطبخ", "clientName": "Haga Wafa2", "clientPhone": "01063109089", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 610061, "code": "10029", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 78, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "5", "payments": 1900000, "offerPrice": 1600000, "totalPayments": 0, "installmentDetails": "شهري 6140  سنوي 156.000", "price": 2700000, "notes": "استلام فوري - رواسي قريبه من المسجد والخدمات ثانى صف من مجرى السيل باقى 1.3 على 5 سنوات متأجره ب 12 الف", "clientName": "Dina Fo2ad", "clientPhone": "01006664614", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 620062, "code": "10030", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "34", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو وايد جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2023", "installmentPeriod": "10", "payments": 1740000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهري 38.000  سنوي 384.000", "price": 10336000, "notes": "--", "clientName": "inv 3bdalla Elgamal", "clientPhone": "01503456757", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 630063, "code": "10031", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "43", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1200000, "offerPrice": 175000, "totalPayments": 0, "installmentDetails": "شهري 45.000  سنوي 404.000", "price": 10440000, "notes": "--", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 640064, "code": "10033", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "19", "unit": "1", "floor": "g", "model": "شقة سكنية", "delivery": "2027", "facade": "طرفية فيو بارك", "space": 67, "garden": "35", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 972000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 21.745 سنوى 214.750", "price": 5772360, "notes": "ستوديو ارضي بجاردن", "clientName": "Ghada", "clientPhone": "01044478044", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 650065, "code": "10034", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 136, "garden": "60", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 8200000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01554405353", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 660066, "code": "10038", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "--", "unit": "--", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 90, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "7", "payments": 650000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "سنوي 520.000", "price": 4600000, "notes": "استلام فوري Ready To Move", "clientName": "Investor A7md Hassan", "clientPhone": "01023338969", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 670067, "code": "10039", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "11", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو وايد جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "اغسطس 2023", "installmentPeriod": "10", "payments": 1430000, "offerPrice": 740000, "totalPayments": 0, "installmentDetails": "شهري 25.000  سنوي 217.000", "price": 6307000, "notes": "--", "clientName": "investor A7md", "clientPhone": "01144544599", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 680068, "code": "10040", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "64", "unit": "23", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1590000, "offerPrice": 510000, "totalPayments": 0, "installmentDetails": "شهري 36.000  سنوي 370.000", "price": 9449000, "notes": "--", "clientName": "investor A7md", "clientPhone": "01144544599", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 690069, "code": "10041", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "88", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو ميجا مول", "space": 200, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2820000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 75.000  سنوي 650.000", "price": 16762000, "notes": "--", "clientName": "investor A7md", "clientPhone": "01144544599", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 700070, "code": "10042", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "88", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو ميجا مول", "space": 200, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "8", "payments": 2790000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 75.000  سنوي 650.000", "price": 16597000, "notes": "--", "clientName": "investor A7md", "clientPhone": "01144544599", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 720072, "code": "10044", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "43", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 106, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "ديسمبر 2024", "installmentPeriod": "10", "payments": 1000000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 30.745 سنوى 307.450", "price": 8155330, "notes": "بدون اوفر برايس", "clientName": "Khaled Bayomy", "clientPhone": "01000866118", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 730073, "code": "10045", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "53", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "2028", "facade": "وايد جاردن امام المول والخدمات طرفية", "space": 167, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 2768000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهري 48.070", "price": 12922000, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 760076, "code": "10049", "category": "Apt Resale", "type": "resale", "city": "Celia", "zone": "B03", "building": "160", "unit": "73", "floor": "7", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 139, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1450000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 31.000  سنوي 320.000", "price": 9583525, "notes": "--", "clientName": "Amal Hakim", "clientPhone": "01000171826", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 770077, "code": "10050", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "50", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 135, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6400000, "notes": "تشطيبات خاصه ارضيات بورسلين  مستورد المويتال عاكس قريبه من الساوث بارك والخدمات  سعر  الفرش والاجهزه 100 الف", "clientName": "Khaled", "clientPhone": "01007887116", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 800080, "code": "10053", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "--", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5900000, "notes": "البيع بالفرش و الاجهزه  تخصيص شرطه", "clientName": "", "clientPhone": "01221911862", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 810081, "code": "10054", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "60", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1350000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهري 37.500  سنوي 375.000", "price": 10000000, "notes": "الاوفر شامل كومشن و تصرفات عقاريه", "clientName": "Broker A7md Elbadawy", "clientPhone": "01060082707", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 850085, "code": "10058", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "36", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "بحرى طرفيه", "space": 136, "garden": "64", "rooms": 3, "bathroom": "2", "bookingDate": "اكتوبر 2024", "installmentPeriod": "10", "payments": 1800000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 42.820 سنوى 428.600", "price": 11521960, "notes": "قريبه من الخدمات", "clientName": "", "clientPhone": "01001667677", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 860086, "code": "10059", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "16", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 142, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1500000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهري 52.000  سنوي 450.000", "price": 12143780, "notes": "--", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 870087, "code": "10060", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "71", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "طرفية بحري فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2025", "installmentPeriod": "10", "payments": 1100000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهري 47.000  سنوي 420.000", "price": 11500779, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 880088, "code": "10061", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "33", "unit": "12", "floor": "1", "model": "T14", "delivery": "2029", "facade": "طرفية بحري فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2025", "installmentPeriod": "10", "payments": 1000000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهري 50.000  سنوي 430.000", "price": 10651000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 890089, "code": "10063", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "60", "unit": "21", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "دوبل فيو وايد جاردن وبارك", "space": 107, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6000000, "notes": "متأجره شهرى ب 12 الف السعر شامل الفرش و الاجهزه", "clientName": "", "clientPhone": "01002523131", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 900090, "code": "10064", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "21", "floor": "2", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو بارك وجاردن", "space": 107, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "10", "payments": 346200, "offerPrice": 450000, "totalPayments": 0, "installmentDetails": "شهري 29.000  سنوي 290.00", "price": 7754870, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 910091, "code": "10065", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "49", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "10", "payments": 852100, "offerPrice": 450000, "totalPayments": 0, "installmentDetails": "شهري 36.000  سنوي 360.000", "price": 9545160, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 920092, "code": "10066", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "49", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 852100, "offerPrice": 450000, "totalPayments": 0, "installmentDetails": "شهري 36.000  سنوي 360.000", "price": 9545160, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 930093, "code": "10067", "category": "Apt Resale", "type": "resale", "city": "Alrehab", "zone": "Alrehab Eden", "building": "--", "unit": "--", "floor": "4", "model": "وحدة فندقية", "delivery": "2028", "facade": "فيو البحيرات", "space": 71, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "11", "payments": 403000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "--", "price": 8000000, "notes": "شقة فندقية ادارة فندق كمبينسكي  ايدن أمام النادي", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 950095, "code": "10070", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 922000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهري 37.000  سنوي 365.000", "price": 9843000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 960096, "code": "10071", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "31", "unit": "23", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو وايد جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1300000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهري 42.000  سنوي 420.000", "price": 9736000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "Refreshed", "source": "GHA", "createdAt": "", "featured": false}, {"id": 970097, "code": "10072", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "32", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 108, "garden": "55", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "9", "payments": 1311430, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 10932710, "notes": "بدون اوفر برايس", "clientName": "Sara", "clientPhone": "01112906342", "status": "Refreshed", "source": "GHA", "createdAt": "", "featured": false}, {"id": 980098, "code": "10073", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "33", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "9", "payments": 1108000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 35.000  سنوي 360.000", "price": 9241000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Sara", "clientPhone": "01112906342", "status": "available", "source": "GHA", "createdAt": "", "featured": false}, {"id": 990099, "code": "10074", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "37", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "9", "payments": 1167380, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 38.000  سنوي 370.000", "price": 9736000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Sara", "clientPhone": "01112906342", "status": "available", "source": "GHA", "createdAt": "", "featured": false}, {"id": 1000100, "code": "10075", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع", "space": 84, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6000000, "notes": "البيع شامل الفرش ومتبقي 720.000 علي 9 اقساط نصف سنوية", "clientName": "", "clientPhone": "01111510009", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1010101, "code": "10076", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "70", "unit": "34", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 106, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2025", "installmentPeriod": "10", "payments": 800000, "offerPrice": 400000, "totalPayments": 0, "installmentDetails": "شهري 37.000  سنوي 315.000", "price": 8319000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "", "clientPhone": "01111510009", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1020102, "code": "10077", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 90, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "6", "payments": 2500000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "سنوي 527.000", "price": 5900000, "notes": "استلام فوري Ready To Move", "clientName": "Nadeem", "clientPhone": "01111157973", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1030103, "code": "10078", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B1", "building": "7", "unit": "16", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن وشارع", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "15", "payments": 1560000, "offerPrice": 1750000, "totalPayments": 0, "installmentDetails": "شهرى 5.460 سنوى 55.050", "price": 1963100, "notes": "ستوديو 1 غرفة نوم", "clientName": "", "clientPhone": "01001323370", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 1040104, "code": "10080", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "287", "unit": "--", "floor": "--", "model": "VILLA S2", "delivery": "2029", "facade": "فيو لاجون", "space": 231, "garden": "254", "rooms": 5, "bathroom": "--", "bookingDate": "يوليو 2024", "installmentPeriod": "12", "payments": 7000000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "--", "price": 42729360, "notes": "--", "clientName": "investor Maher Elwakil", "clientPhone": "01111156823", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 1050105, "code": "10081", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "17", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو جاردن", "space": 180, "garden": "60", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 12000000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01009990675", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 1060106, "code": "10082", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "57", "unit": "23", "floor": "2", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 140, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1000000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 45.000  سنوي 450.000", "price": 11703060, "notes": "--", "clientName": "investor M7md Ghaly", "clientPhone": "01111119556", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1070107, "code": "10083", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "14", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "اكتوبر 2024", "installmentPeriod": "10", "payments": 842000, "offerPrice": 550000, "totalPayments": 0, "installmentDetails": "شهري 38.000  سنوي 380.000", "price": 9834750, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "investor M7md Ghaly", "clientPhone": "01111119556", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1080108, "code": "10084", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "31", "unit": "43", "floor": "4", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 126, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1052000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهري 47.000  سنوي 470.000", "price": 12292850, "notes": "--", "clientName": "investor M7md Ghaly", "clientPhone": "01111119556", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1090109, "code": "10085", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "11", "unit": "44", "floor": "4", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 84, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "اغسطس 2024", "installmentPeriod": "10", "payments": 1670000, "offerPrice": -250000, "totalPayments": 0, "installmentDetails": "شهرى 30.875 سنوى 308.750", "price": 8776640, "notes": "بالجراج و النادى اجبارى بدون تكييف البيع بخساره 250 الف من المدفوع", "clientName": "George", "clientPhone": "01113007661", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1100110, "code": "10087", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "56", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1250000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهري 38.000  سنوي 360.000", "price": 9545000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Eng 3mro", "clientPhone": "01023456972", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1110111, "code": "10088", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "32A", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو بارك", "space": 111, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "7", "payments": 620000, "offerPrice": 1800000, "totalPayments": 0, "installmentDetails": "سنوي 492.000", "price": 5000000, "notes": "متبقي 6 اقساط سنوية + 675 قسط متاخر + الصيانة والعدادات", "clientName": "Eng M7md Mousa", "clientPhone": "01119033333", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1120112, "code": "10089", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "28", "unit": "4", "floor": "G", "model": "ستوديو", "delivery": "2028", "facade": "--", "space": 45, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "2023", "installmentPeriod": "12", "payments": 450000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهري 8000  سنوي 60.000", "price": 2201000, "notes": "ستوديو 1 غرفة نوم", "clientName": "investor M7md Abosaty", "clientPhone": "01064228422", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1130113, "code": "10090", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 76, "garden": "40", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4800000, "notes": "تخصيص قديم", "clientName": "Investor A7md Hassan", "clientPhone": "01023338969", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 1140114, "code": "10091", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "49", "unit": "56", "floor": "5", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "2024", "installmentPeriod": "10", "payments": 680000, "offerPrice": 50000, "totalPayments": 0, "installmentDetails": "شهري 14.000  سنوي 136.000", "price": 4480000, "notes": "ستوديو 1 غرفة نوم", "clientName": "investor M7md Abosaty", "clientPhone": "01064228422", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 1150115, "code": "10094", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "89", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1590000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهري 35.000  سنوي 350.000", "price": 10037000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Eng 3mro", "clientPhone": "01023456972", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1160116, "code": "10095", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 141, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1200000, "offerPrice": 70000, "totalPayments": 0, "installmentDetails": "شهري 50.000  سنوي 470.000", "price": 12600000, "notes": "--", "clientName": "Eng 3mro", "clientPhone": "01023456972", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1170117, "code": "10096", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "25", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 82, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "12", "payments": 0, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهري 21.000  سنوي 200.000", "price": 6219300, "notes": "--", "clientName": "investor Mostshar Tamer", "clientPhone": "01008153844", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1180118, "code": "10097", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "63", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن وشارع", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1450000, "offerPrice": 650000, "totalPayments": 0, "installmentDetails": "شهري 35.000  سنوي 315.000", "price": 8200000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Eng 3mro", "clientPhone": "01023456972", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1200120, "code": "10099", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "94", "unit": "21", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "ثلاثية الاتجاهات - وايد جاردن طرفية غير مجروحة", "space": 167, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2200000, "offerPrice": 1000000, "totalPayments": 0, "installmentDetails": "--", "price": 14138770, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 1220122, "code": "20011", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "39", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2027", "facade": "طرفية فيو بارك", "space": 69, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 978000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهري 21.000  سنوي 216.000", "price": 5819000, "notes": "طلعت مصطفي - نادي غير اجباري في حاله وجود عضويه - تنازل فوري بشركة طلعت مصطفي", "clientName": "inv Shereen", "clientPhone": "01044478044", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1230123, "code": "20012", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "37", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2027", "facade": "طرفية فيو بارك", "space": 69, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 1074260, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهري 23.000  سنوي 237.000", "price": 6389890, "notes": "طلعت مصطفي - نادي غير اجباري في حاله وجود عضويه - تنازل فوري بشركة طلعت مصطفي", "clientName": "inv Shereen", "clientPhone": "01044478044", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1240124, "code": "20013", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "--", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو مفتوح علي جاردن وشارع  موقع مميز جدًا بجانب ميجا مول وأبراج spine  ،والشقة رقم 2 طرفيه في عماره طرفيه", "space": 72, "garden": "45", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 1750000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 25.000  سنوي 259.000", "price": 6900000, "notes": "طلعت مصطفي - نادي غير اجباري في حاله وجود عضويه - تنازل فوري بشركة طلعت مصطفي", "clientName": "inv Shereen", "clientPhone": "01044478044", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1250125, "code": "20014", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "23", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "--", "space": 77, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 1136000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهري 25.000  سنوي 251.000", "price": 6758090, "notes": "--", "clientName": "inv Shereen", "clientPhone": "01044478044", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1260126, "code": "20015", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "35", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن ومجري السيل", "space": 107, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "10", "payments": 870000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 30.000  سنوي 309.000", "price": 8319930, "notes": "طلعت مصطفي - نادي غير اجباري في حاله وجود عضويه - تنازل فوري بشركة طلعت مصطفي", "clientName": "inv Shereen", "clientPhone": "01044478044", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1270127, "code": "20021", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "23", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 84, "garden": "30", "rooms": 2, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "6", "payments": 1315000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "--", "price": 7675000, "notes": "--", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1280128, "code": "20022", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "44", "unit": "44", "floor": "4", "model": "شقة سكنية", "delivery": "2027", "facade": "--", "space": 98, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "12", "payments": 840000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "--", "price": 6593000, "notes": "--", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1290129, "code": "20023", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "26", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 81, "garden": "37", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "12", "payments": 892000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "--", "price": 7005000, "notes": "--", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1320132, "code": "20027", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "72", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "اغسطس 2024", "installmentPeriod": "10", "payments": 970000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "--", "price": 8969000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Shahd", "clientPhone": "01010821733", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1330133, "code": "20028", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "41", "unit": "24", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 107, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 784000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهري 29.000  سنوي 300.000", "price": 7526000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Shahd", "clientPhone": "01010821733", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1340134, "code": "20032", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "--", "unit": "--", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 79, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "10", "payments": 850000, "offerPrice": 550000, "totalPayments": 0, "installmentDetails": "--", "price": 6500000, "notes": "--", "clientName": "Karim", "clientPhone": "01111180192", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1350135, "code": "20034", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك وشارع دوبل فيو", "space": 135, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6500000, "notes": "السعر شامل النادى", "clientName": "Mo2men", "clientPhone": "01005146450", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1360136, "code": "20035", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "--", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5000000, "notes": "استلام فوري Ready To Move", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1370137, "code": "20037", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "23", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع رئيسي", "space": 85, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "2023", "installmentPeriod": "5", "payments": 1950000, "offerPrice": 1700000, "totalPayments": 0, "installmentDetails": "--", "price": 4158000, "notes": "متبقى 2 مليون على 5 سنوات النادى غير اجبارى", "clientName": "", "clientPhone": "01063719199", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1380138, "code": "20039", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "50", "unit": "24", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو شارع", "space": 107, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 1050000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهري 35.160  سنوي 351.600", "price": 7726000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "", "clientPhone": "01097004550", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1390139, "code": "20045", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "8", "unit": "44", "floor": "4", "model": "A2", "delivery": "استلام فوري", "facade": "بحري صريح", "space": 78, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "يناير 2024", "installmentPeriod": "7", "payments": 1900000, "offerPrice": 1250000, "totalPayments": 0, "installmentDetails": "--", "price": 4300000, "notes": "رواسي - مستلمة وبهال العدادات والغاز والبيع بالمطبخ", "clientName": "3mad", "clientPhone": "01223238152", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1400140, "code": "20047", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "31", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "جاردن - قريبة من الخدمات والحركة", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4350000, "notes": "تشطيبات خاصة", "clientName": "Anas", "clientPhone": "01147765330", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1410141, "code": "20048", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "بالقرب من مول ايست هب", "space": 73, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "6", "payments": 2900000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "سنوي 333.000", "price": 4150000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01206026550", "status": "available", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1420142, "code": "20049", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "ملاصقة للخدمات والمسجد ومول All Season بحري شرقي", "space": 133, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7300000, "notes": "النادي غير اجباري", "clientName": "", "clientPhone": "01113130333", "status": "Refreshed", "source": "TAH", "createdAt": "", "featured": false}, {"id": 1440144, "code": "30010", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "14", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 125, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "يوليو 2022", "installmentPeriod": "10", "payments": 1600000, "offerPrice": 3500000, "totalPayments": 0, "installmentDetails": "--", "price": 5128161, "notes": "--", "clientName": "Salah", "clientPhone": "01050035408", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1450145, "code": "30011", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "--", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو مفتوح شارع رئيسي امتداد All Season", "space": 165, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 8600000, "notes": "تشطيبات خاصة بالكامل - ارضيات باركية - جبسون بورد - شاتر للشقة بالكامل - الوميتال uvbc للشقة بالكامل 'تخصيص شرطة - نادي غير اجباري", "clientName": "Karim Kennawy", "clientPhone": "01000972008", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1470147, "code": "30018", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "49", "unit": "52", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 140, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7500000, "notes": "استلام فوري Ready To Move", "clientName": "M7md Sayed 3ly", "clientPhone": "01019550010", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1480148, "code": "30019", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "--", "unit": "--", "floor": "G", "model": "ستوديو", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 65, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "3", "payments": 1020000, "offerPrice": 2500000, "totalPayments": 0, "installmentDetails": "شهري 14.000", "price": 1480000, "notes": "البيع بالفرش و الاجهزه", "clientName": "Tal3at Mostafa", "clientPhone": "0109743331", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1490149, "code": "30020", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "76", "unit": "4", "floor": "g", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك و جاردن", "space": 89, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 3900000, "notes": "تشطيبات خاصة تخصيص قديم - بدون نادي - اصل العقد 700.000", "clientName": "", "clientPhone": "01200443080", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1500150, "code": "30021", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "--", "unit": "--", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو ابراج ميجا مول", "space": 110, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "10", "payments": 2650000, "offerPrice": 2250000, "totalPayments": 0, "installmentDetails": "--", "price": 5700000, "notes": "السعر بالنادى والجراج", "clientName": "", "clientPhone": "01018118818", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1520152, "code": "30023", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "11/B", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "طرفية ڤيو بحيرات +وايد جاردن بجوار الخدمات", "space": 81, "garden": "35", "rooms": 2, "bathroom": "1", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1750000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "ربع سنوي 130.000", "price": 9535070, "notes": "بدون اوفر برايس", "clientName": "", "clientPhone": "01221053636", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1530153, "code": "30024", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "2", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية جاردن", "space": 200, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "7", "payments": 4800000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "سنوي 987.803", "price": 11000000, "notes": "ثمن الشقة في الشركة 18.300.000 واستلام بعد سنتين المقدم المطلوب 4.800.000 شامل الاوفر برايس + المقدم 25% فقط وباقي 7 اقساط سنوية", "clientName": "3bdlwahab Elsayed", "clientPhone": "0096596962270", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1580158, "code": "30031", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 92, "garden": "50", "rooms": 2, "bathroom": "--", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 1172670, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 9488070, "notes": "شقة ارضي بجاردن", "clientName": "inv A7md Ref3at", "clientPhone": "01001023603", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1610161, "code": "30034", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "33", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو مفتوح", "space": 82, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4150000, "notes": "طلعت مصطفي - خالصة جميع المستحقات", "clientName": "inv Wael Elgazzar", "clientPhone": "01001611104", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1620162, "code": "30036", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "5", "unit": "35", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 131, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1200000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "نصف سنوي", "price": 8327550, "notes": "--", "clientName": "Shams", "clientPhone": "01070390976", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1630163, "code": "30037", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "--", "unit": "--", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بحيرات علي تبة عالية اعلي تميز", "space": 83, "garden": "35", "rooms": 2, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "6", "payments": 4300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 10950000, "notes": "تكييفات مركزية وباركنج اسفل العمارات الشقة مؤجرة ب 17,000", "clientName": "Sayed Sh3ban", "clientPhone": "00971508960260", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1640164, "code": "30040", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "17", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو وايد جاردن", "space": 120, "garden": "51", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 850000, "offerPrice": 50000, "totalPayments": 0, "installmentDetails": "شهري 27.000 سنوي 275.000", "price": 9890000, "notes": "شقة ارضي بجاردن", "clientName": "inv Wael Fekry", "clientPhone": "01001607087", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1650165, "code": "30041", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "2", "unit": "21", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "CENTRAL PARK", "space": 119, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 790000, "offerPrice": 50000, "totalPayments": 0, "installmentDetails": "شهري 21.000 سنوي 217.000", "price": 7794460, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "inv Wael Fekry", "clientPhone": "01001607087", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1660166, "code": "30043", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو النادى", "space": 259, "garden": "--", "rooms": 4, "bathroom": "4", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 12500000, "notes": "امام النادى تشطيبات خاصه", "clientName": "", "clientPhone": "01112728424", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1670167, "code": "30044", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "43", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4800000, "notes": "استلام فوري Ready To Move", "clientName": "M7md Mokhtar", "clientPhone": "01000627171", "status": "Sold", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1680168, "code": "30045", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "SOUTH MED", "building": "377", "unit": "25", "floor": "2", "model": "ستوديو", "delivery": "2028", "facade": "فيو لاجون", "space": 62, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "2024", "installmentPeriod": "12", "payments": 700000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "--", "price": 6700000, "notes": "--", "clientName": "M7md Mokhtar", "clientPhone": "01000627171", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1690169, "code": "30047", "category": "APT Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "161", "unit": "51", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 131, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "6", "payments": 3000000, "offerPrice": 1750000, "totalPayments": 0, "installmentDetails": "--", "price": 7800000, "notes": "بالمطبخ والتكييفات", "clientName": "Asma2", "clientPhone": "01503008130", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1700170, "code": "30049", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "61", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو جاردن", "space": 96, "garden": "45", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5000000, "notes": "طلعت مصطفى - تشطيبات خاصه - تقسيمه معدله", "clientName": "Gehan Hakim", "clientPhone": "01099666177", "status": "Sold", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1710171, "code": "30051", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "33", "unit": "21", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو بارك وجاردن", "space": 155, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "7", "payments": 2217915, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 67.660 سنوى 620.200", "price": 11300000, "notes": "بدون اوفر برايس", "clientName": "", "clientPhone": "01111185130", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1720172, "code": "30052", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "2A", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو مفتوح شارع وجاردن", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "--", "payments": 5160000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "--", "price": 6500000, "notes": "السعر شامل النادى و الجراج راكب عدادات باقى 3.3م", "clientName": "", "clientPhone": "01222211788", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1730173, "code": "30053", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 77, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4400000, "notes": "تخصيص تشطيبات خاصه خالص جميع المستحقات", "clientName": "Hany Elseba3y", "clientPhone": "01222228395", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1740174, "code": "30056", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "--", "unit": "33", "floor": "3", "model": "T14", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 1200000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهرى 38.450 سنوى 384.500", "price": 11159912, "notes": "تفاوض عند الجديه", "clientName": "", "clientPhone": "01227689010", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1750175, "code": "30057", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "15A", "unit": "51", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو مسجد", "space": 105, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "اكتوبر 2023", "installmentPeriod": "--", "payments": 6250000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "سنوى 500.000 متقسم على دفعات شهريه", "price": 5146520, "notes": "السعر شامل الفرش و التكييفات و النادى باقى 7 اقساط ب 500 الف فى السنه", "clientName": "abdelrahman", "clientPhone": "01014673341", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1760176, "code": "30058", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع", "space": 133, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "--", "payments": 3401745, "offerPrice": 3700000, "totalPayments": 0, "installmentDetails": "--", "price": 4193610, "notes": "الشقه راكبه عدادات النادى والوديعه مدفوعين بالكامل وباقى 1.541.865 اقساط حتى 2027", "clientName": "", "clientPhone": "01019483061", "status": "اعلان", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1770177, "code": "30059", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "42", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو شارع بحرى صريح", "space": 127, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "2024", "installmentPeriod": "11", "payments": 1950000, "offerPrice": -250000, "totalPayments": 0, "installmentDetails": "--", "price": 11900000, "notes": "طلعت مصطفى - البيع بخسارة 250 الف من المدفوعات", "clientName": "", "clientPhone": "01285200195", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1780178, "code": "30060", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "16", "unit": "43", "floor": "4", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو وايد جاردن", "space": 147, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1850000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهرى 33.160 سنوى 320.900", "price": 11087290, "notes": "--", "clientName": "", "clientPhone": "01091159191", "status": "Refreshed", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1790179, "code": "30063", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "22", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 116, "garden": "60", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "--", "payments": 0, "offerPrice": 4100000, "totalPayments": 0, "installmentDetails": "--", "price": 4750000, "notes": "تخصيص هيئه اقساط ثابته يمكن تخصيص جاردن باقى 2 مليون على اربع سنوات", "clientName": "مصطفى", "clientPhone": "00249912330586", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1800180, "code": "30064", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "1", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 101, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "--", "payments": 3191068, "offerPrice": 1900000, "totalPayments": 0, "installmentDetails": "--", "price": 6204880, "notes": "مؤجره لاخر 2026 السعر شامل الجراج", "clientName": "", "clientPhone": "00966547782171", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1810181, "code": "30065", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "8", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو جاردن", "space": 82, "garden": "35", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "--", "payments": 3066185, "offerPrice": 1900000, "totalPayments": 0, "installmentDetails": "--", "price": 5963530, "notes": "مؤجره لاخر 2026", "clientName": "", "clientPhone": "00966547782171", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1820182, "code": "30066", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "NOOR", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "2026", "facade": "بحرى", "space": 174, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "ديسمبر 2023", "installmentPeriod": "10", "payments": 2600000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 38.570 سنوى 394.100", "price": 8760640, "notes": "--", "clientName": "عمرو الامير", "clientPhone": "01149188820", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1830183, "code": "30067", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "58", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 146, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "اغسطس 2024", "installmentPeriod": "7", "payments": 4000000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 31.650 سنوى 820.500", "price": 12504304, "notes": "--", "clientName": "عمرو الامير", "clientPhone": "01149188820", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1840184, "code": "30068", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "46", "unit": "43", "floor": "4", "model": "T06", "delivery": "2029", "facade": "فيو بارك", "space": 140, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1547600, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 44.390 سنوى 438.050", "price": 11619810, "notes": "بدون اوفر برايس", "clientName": "ا/ اسماعيل", "clientPhone": "01104106638", "status": "اعلان", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1860186, "code": "30072", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "44", "unit": "14", "floor": "1", "model": "T06", "delivery": "2029", "facade": "--", "space": 142, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "يناير 2025", "installmentPeriod": "10", "payments": 2200000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 49.085 سنوى 484.350", "price": 13019940, "notes": "بدون اوفر", "clientName": "", "clientPhone": "01211809302", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1870187, "code": "30073", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "45", "unit": "14", "floor": "1", "model": "T06", "delivery": "2029", "facade": "--", "space": 142, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "يناير 2025", "installmentPeriod": "10", "payments": 2200000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 49.085 سنوى 484.3500", "price": 13862085, "notes": "بدون اوفر", "clientName": "", "clientPhone": "01211809302", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1880188, "code": "30074", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "24", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 89, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4000000, "notes": "تخصيص هيئه السعر قابل للتفاوض", "clientName": "", "clientPhone": "01111555120", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1900190, "code": "30076", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "58", "unit": "44", "floor": "4", "model": "T01", "delivery": "2029", "facade": "فيو شارع", "space": 80, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 1000000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهرى 23.280 سنوى 229.750", "price": 6093930, "notes": "", "clientName": "لبنى", "clientPhone": "01157544568‬", "status": "available", "source": "Noha", "createdAt": "", "featured": false}, {"id": 1920192, "code": "40010", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "52", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 1277460, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 40.000 سنوى 394.850", "price": 10336330, "notes": "بدون اوفر برايس", "clientName": "inv A7md Ref3at", "clientPhone": "01001023603", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 1930193, "code": "40011", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "72", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "ملاصقه للخدمات ماركت و مسجد و صيدليه", "space": 108, "garden": "55", "rooms": 3, "bathroom": "2", "bookingDate": "اغسطس 2024", "installmentPeriod": "10", "payments": 1922100, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهرى 38.470 سنوى 379.650", "price": 10070660, "notes": "بدون نادي اجباري", "clientName": "investor Mostshar Tamer", "clientPhone": "01008153844", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 1940194, "code": "40012", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "27", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "طرفية فيو بارك", "space": 136, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2023", "installmentPeriod": "10", "payments": 1420000, "offerPrice": 1450000, "totalPayments": 0, "installmentDetails": "شهرى 25.358 سنوى 239.550", "price": 7150690, "notes": "--", "clientName": "Mohab Adel", "clientPhone": "01103191458", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 1960196, "code": "40015", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B1", "building": "62", "unit": "16", "floor": "1", "model": "ستوديو", "delivery": "2028", "facade": "بحرى على بارك وشارع", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "ديسمبر 2023", "installmentPeriod": "13", "payments": 600000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 9.000 سنوى 90.000", "price": 3330830, "notes": "ستوديو 1 غرفة نوم", "clientName": "Marwa Elkennawy", "clientPhone": "01065340503", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 1970197, "code": "40017", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "64", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 94, "garden": "50", "rooms": 2, "bathroom": "--", "bookingDate": "يناير 2025", "installmentPeriod": "6", "payments": 1036365, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 37.275 سنوى 388.850", "price": 6776850, "notes": "بدون اوفر مطلوب المدفوع فقط المالك عاوز يبيع الشقتين مع بعض 40017+40018", "clientName": "3mro Elno3many", "clientPhone": "01022022611", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 1980198, "code": "40018", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "63", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 94, "garden": "50", "rooms": 2, "bathroom": "--", "bookingDate": "يناير 2025", "installmentPeriod": "6", "payments": 1137399, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 37.275 سنوى  388.850", "price": 7486433, "notes": "بدون اوفر مطلوب المدفوع فقط المالك عاوز يبيع الشقتين مع بعض 40017+40018", "clientName": "3mro Elno3many", "clientPhone": "01022022611", "status": "اعلان", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 1990199, "code": "40019", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "19", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بحيره", "space": 100, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "7", "payments": 3400000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهرى 28.670 سنوى 743.200", "price": 11181250, "notes": "استلام فوري Ready To Move", "clientName": "3sam Sh3ban", "clientPhone": "01121268080", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2000200, "code": "40020", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "27", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو نارو جاردن وبارك", "space": 88, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4000000, "notes": "طلعت مصطفي - نادي غير اجباري في حاله وجود عضويه - تنازل فوري بشركة طلعت مصطفي", "clientName": "Walid 3atef", "clientPhone": "01000403115", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2010201, "code": "40021", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "53", "unit": "43", "floor": "3", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو بارك", "space": 106, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "ديسمبر 2024", "installmentPeriod": "10", "payments": 1050000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 30.845 سنوى 304.400", "price": 8074100, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "", "clientPhone": "01002463304", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2020202, "code": "40022", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "67", "unit": "31", "floor": "3", "model": "T14", "delivery": "2028", "facade": "--", "space": 106, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1500000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 28.945 سنوى 285.650", "price": 8319384, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "M7md 3ezz", "clientPhone": "01000048701", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2030203, "code": "40023", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "67", "unit": "32", "floor": "3", "model": "T14", "delivery": "2028", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1500000, "offerPrice": 600000, "totalPayments": 0, "installmentDetails": "شهرى 33.990 سنوى 335.450", "price": 8898390, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "M7md 3ezz", "clientPhone": "01000048701", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2040204, "code": "40024", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B3", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو مفتوح على شارع وجاردن والساوث بارك", "space": 135, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7900000, "notes": "طلعت مصطفى - تشطيبات خاصه - السعر شامل المطبخ والتكييفات", "clientName": "M7md 3ysa", "clientPhone": "01000347283", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2060206, "code": "40027", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "50", "unit": "--", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6000000, "notes": "طلعت مصطفى خالصه تماما -  السعر شامل الفرش و الاجهزه بدون 5.6م شقه معدله ل3 غرف مطبخ امريكى بها غاز طبيعى", "clientName": "Ayman", "clientPhone": "01001645738", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2070207, "code": "40028", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "20", "unit": "61", "floor": "6", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو خدمات", "space": 108, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5900000, "notes": "تخصيص هيئه مجتمعات تشطيب شركه نادى غير اجبارى  بها مستأجر بيدفع 13 الف", "clientName": "Eng Samer", "clientPhone": "01095008176", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2080208, "code": "40029", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "--", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5400000, "notes": "بجوار الخدمات الساوث بارك والحركه السعر شامل الفرش و الاجهزه", "clientName": "", "clientPhone": "01120606191", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2090209, "code": "40030", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "27", "unit": "34", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو STRIP", "space": 114, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5500000, "notes": "طلعت مصطفى - تشطيبات خاصه", "clientName": "M7md Elhossary", "clientPhone": "01116554684", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2100210, "code": "40031", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "47", "unit": "1", "floor": "G", "model": "ستوديو", "delivery": "استلام فوري", "facade": "--", "space": 42, "garden": "40", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 3500000, "notes": "بجوار الخدمات المركز الطبى و السوبر ماركت قريبه من الساوث بارك مطبخ منفصل", "clientName": "Dr Marwa", "clientPhone": "01006209388", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2110211, "code": "40033", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5400000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01007283955", "status": "Refreshed", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2120212, "code": "40034", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "49", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو نادى بريفادو", "space": 92, "garden": "50", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5300000, "notes": "طلعت مصطفى السعر شامل التصرفات العقارية فقط", "clientName": "Eman", "clientPhone": "01108611950", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2130213, "code": "40035", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "63", "unit": "44", "floor": "4", "model": "T14", "delivery": "2029", "facade": "فيو بارك", "space": 107, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1337850, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 28.090 سنوى 280.900", "price": 7451180, "notes": "بدون اوفر برايس", "clientName": "Men3em", "clientPhone": "01022822335", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2140214, "code": "40036", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "C1", "building": "394", "unit": "32", "floor": "3", "model": "A", "delivery": "2029", "facade": "فيو لاجون بحرى", "space": 122, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يونيو 2024", "installmentPeriod": "12", "payments": 2160000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهرى 44.540 سنوى 431.050", "price": 14367660, "notes": "--", "clientName": "Men3em", "clientPhone": "01022822335", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2150215, "code": "40037", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5700000, "notes": "خالصه تخصيص صحفيين قريبه من الخدمات", "clientName": "A7md", "clientPhone": "01023261526", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2170217, "code": "40039", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "NOOR", "building": "21", "unit": "4", "floor": "G", "model": "B", "delivery": "2028", "facade": "فيو نارو جاردن", "space": 120, "garden": "52", "rooms": 3, "bathroom": "2", "bookingDate": "يناير 2024", "installmentPeriod": "12", "payments": 1850000, "offerPrice": 2500000, "totalPayments": 0, "installmentDetails": "شهرى 21.615 سنوى 209.150", "price": 7206880, "notes": "السعر قابل للتفاوض", "clientName": "", "clientPhone": "0096897487740", "status": "available", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2180218, "code": "40040", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "23", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 103, "garden": "50", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "cash", "price": 6000000, "notes": "امام الحركه مباشره و امكانيه تقسيط نصف المبلغ على سنه", "clientName": "", "clientPhone": "01100255418", "status": "اعلان", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2190219, "code": "40041", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "50", "unit": "54", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4400000, "notes": "", "clientName": "Dima", "clientPhone": "01021580620", "status": "اعلان", "source": "M 3bdalla", "createdAt": "", "featured": false}, {"id": 2210221, "code": "50013", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "12A", "unit": "42", "floor": "4", "model": "E", "delivery": "2027", "facade": "فيو بحيرات", "space": 84, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "اكتوبر 2024", "installmentPeriod": "10", "payments": 1500000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 38.220 سنوى 377.200", "price": 10616790, "notes": "بدون اوفر برايس", "clientName": "Haitham 3blnaby", "clientPhone": "01033223549", "status": "اعلان", "source": "TSS", "createdAt": "", "featured": false}, {"id": 2230223, "code": "50015", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "25", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن مفتوح - وخطوات من جميع الخدمات", "space": 116, "garden": "60", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6100000, "notes": "تشطيبات خاصه - تخصيص شرطه -  امكانية البيع بالفرش والاجهزة", "clientName": "Sameh Sannad", "clientPhone": "01007377512", "status": "اعلان", "source": "TSS", "createdAt": "", "featured": false}, {"id": 2250225, "code": "70011", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B2", "building": "29", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن   خطوه من المسجد والخدمات", "space": 98, "garden": "40", "rooms": 2, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "7", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "سنوى 490.000", "price": 2290000, "notes": "تشطيبات خاصة بالكامل والبيع شامل المطبخ متبقى 5 اقساط", "clientName": "Dr Gehan", "clientPhone": "01115363005", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2260226, "code": "70015", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "42", "unit": "43", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5000000, "notes": "الشقه بها مستأجر لا يمانع الخروج على ان يمنح ثلاث شهور للنقل", "clientName": "", "clientPhone": "01098181654", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2270227, "code": "70016", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "60", "unit": "52", "floor": "5", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو مجرى السيل وميجا مول", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1600000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 41.000 سنوى 410.100", "price": 10877790, "notes": "--", "clientName": "Wa2el", "clientPhone": "01005249181", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2280228, "code": "70017", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "19", "unit": "34", "floor": "3", "model": "A2", "delivery": "2027", "facade": "--", "space": 78, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "فبراير 2023", "installmentPeriod": "12", "payments": 900000, "offerPrice": 1700000, "totalPayments": 0, "installmentDetails": "شهرى 9.895 سنوى 97.300", "price": 3297490, "notes": "--", "clientName": "", "clientPhone": "01001511557", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2290229, "code": "70018", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "61", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4900000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01093955550", "status": "اعلان", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2300230, "code": "70019", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "30", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع بحرى مفتوح على وايد جاردن خطوات من الخدمات", "space": 123, "garden": "40", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7000000, "notes": "طلعت مصطفى - تشطيب شركه", "clientName": "", "clientPhone": "01100939162", "status": "Refreshed", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2310231, "code": "70020", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "8", "unit": "21", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك وجاردن", "space": 200, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "--", "payments": 4700000, "offerPrice": 3500000, "totalPayments": 0, "installmentDetails": "سنوى 1.025.000", "price": 4925000, "notes": "تخصيص شرطه قابل للتفاوض", "clientName": "", "clientPhone": "01001997799", "status": "Refreshed", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2320232, "code": "70021", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "53", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو بارك", "space": 124, "garden": "40", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7000000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01019931934", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2330233, "code": "70022", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "13", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو جاردن", "space": 123, "garden": "45", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7500000, "notes": "السعر قابل للتفاوض تشطيب شركه بجوار مترو ماركت", "clientName": "", "clientPhone": "01222109624", "status": "Refreshed", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2340234, "code": "70023", "category": "Apt Resale", "type": "resale", "city": "Alrehab", "zone": "Alrehab", "building": "12", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 211, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 9500000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01550080584", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2350235, "code": "70025", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "51", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو بارك", "space": 64, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 3350000, "notes": "تشطيبات خاصه طلعت مصطفى مطبخ امريكى", "clientName": "", "clientPhone": "01019138668", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2360236, "code": "70026", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B2", "building": "22", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 211, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 10000000, "notes": "السعر شامل ضريبة التصرفات العقارية", "clientName": "", "clientPhone": "01000344488", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2370237, "code": "70027", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "4A", "unit": "4", "floor": "G", "model": "ستوديو", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 70, "garden": "35", "rooms": 1, "bathroom": "1", "bookingDate": "سبتمبر 2023", "installmentPeriod": "7", "payments": 2278590, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهرى 13.410 سنوى 346.750", "price": 5001930, "notes": "استلام فورى", "clientName": "ايهاب", "clientPhone": "01227778700", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2380238, "code": "70028", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "3A", "unit": "43", "floor": "4", "model": "ستوديو", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 63, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "سبتمبر 2023", "installmentPeriod": "7", "payments": 1720160, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهرى 10.035 سنوى 259.500", "price": 3838340, "notes": "استلام فورى", "clientName": "ايهاب", "clientPhone": "01227778700", "status": "اعلان", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2390239, "code": "70029", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "--", "unit": "--", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو مفتوح على جاردن", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "7", "payments": 2700000, "offerPrice": 400000, "totalPayments": 0, "installmentDetails": "شهرى 20.025 سنوى 120.150", "price": 6897300, "notes": "السعر شامل النادى امام الخدمات", "clientName": "محمد احمد", "clientPhone": "01279715893", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2400240, "code": "70030", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "واجهه بحرى", "space": 81, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4200000, "notes": "تشطيبات خاصه بها مستأجر", "clientName": "Mahmoud zakarea", "clientPhone": "01501011171", "status": "اعلان", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2410241, "code": "70031", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "8B", "unit": "52", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "نارو جاردن", "space": 82, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "سبتمبر 2023", "installmentPeriod": "7", "payments": 2750000, "offerPrice": 2000000, "totalPayments": 0, "installmentDetails": "شهرى 14.105 سنوى 364.700", "price": 5241040, "notes": "", "clientName": "", "clientPhone": "01022669929", "status": "اعلان", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2420242, "code": "70032", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "NOOR", "building": "31", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 82, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "سبتمبر 2023", "installmentPeriod": "14", "payments": 750000, "offerPrice": 750000, "totalPayments": 0, "installmentDetails": "شهرى 10.995 سنوى 105.850", "price": 4204620, "notes": "", "clientName": "", "clientPhone": "01014588714", "status": "Sold", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2430243, "code": "70033", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "NOOR", "building": "26", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 82, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "سبتمبر 2023", "installmentPeriod": "13", "payments": 750000, "offerPrice": 750000, "totalPayments": 0, "installmentDetails": "شهرى 11.750 سنوى 113.600", "price": 4053520, "notes": "", "clientName": "", "clientPhone": "01014588714", "status": "available", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2440244, "code": "70034", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "20", "unit": "12", "floor": "2", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو وايد جاردن", "space": 125, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "10", "payments": 1700000, "offerPrice": 3200000, "totalPayments": 0, "installmentDetails": "شهرى 18.0500 سنوى 191.500", "price": 5400000, "notes": "قريبه من النادى والشانزيلزيه", "clientName": "Wa2el", "clientPhone": "01005249181", "status": "Refreshed", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2460246, "code": "70036", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "15A", "unit": "1", "floor": "G", "model": "D", "delivery": "استلام فوري", "facade": "فيو شارع ومسجد", "space": 97, "garden": "45", "rooms": 2, "bathroom": "2", "bookingDate": "اكتوبر 2023", "installmentPeriod": "7", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 18.000 سنوى 470.000", "price": 7119780, "notes": "البيع بالفرش و الاجهزه مقدم 5.4م", "clientName": "", "clientPhone": "01200913157", "status": "اعلان", "source": "Abdalla", "createdAt": "", "featured": false}, {"id": 2480248, "code": "100102", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "12", "unit": "25", "floor": "2", "model": "شالية", "delivery": "2029", "facade": "فيو لاجون", "space": 61, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "2025", "installmentPeriod": "12", "payments": 5750000, "offerPrice": 160000, "totalPayments": 0, "installmentDetails": "شهري 24.000  سنوي 210.000", "price": 7222000, "notes": "--", "clientName": "investor M7md Abosaty", "clientPhone": "01064228422", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2490249, "code": "100104", "category": "Apt Resale", "type": "resale", "city": "Alrehab", "zone": "Alrehab", "building": "9", "unit": "44", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك وشارع", "space": 128, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5500000, "notes": "استلام فوري Ready To Move", "clientName": "Bakry", "clientPhone": "01022208258", "status": "Refreshed", "source": "GHA", "createdAt": "", "featured": false}, {"id": 2500250, "code": "100105", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "233", "unit": "33", "floor": "3", "model": "شالية", "delivery": "2028", "facade": "--", "space": 104, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يوليو 2024", "installmentPeriod": "12", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 11798590, "notes": "--", "clientName": "investor Mostshar Tamer", "clientPhone": "01008153844", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2510251, "code": "100106", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "231", "unit": "13", "floor": "1", "model": "شالية", "delivery": "2028", "facade": "--", "space": 106, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يوليو 2024", "installmentPeriod": "12", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 12025440, "notes": "--", "clientName": "investor Mostshar Tamer", "clientPhone": "01008153844", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2530253, "code": "100108", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "6", "unit": "11", "floor": "1", "model": "شالية", "delivery": "2029", "facade": "لاجون بحري صف اول طرفي", "space": 131, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "2024", "installmentPeriod": "12", "payments": 2411000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "ربع سنوي 153.855", "price": 17095000, "notes": "--", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2540254, "code": "100110", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو جاردن", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1250000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "--", "price": 9545000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "Eng 3mro", "clientPhone": "01023456972", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2550255, "code": "100111", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "62", "unit": "43", "floor": "4", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو مفتوح وايد جاردن", "space": 147, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "ابريل 2024", "installmentPeriod": "12", "payments": 1438000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "--", "price": 11239250, "notes": "السعر شامل النادي ومكان بالجراج", "clientName": "Aml", "clientPhone": "01010654190", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2560256, "code": "100112", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "24", "unit": "11", "floor": "1", "model": "شالية", "delivery": "2029", "facade": "لاجون بحري صف اول", "space": 131, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "2024", "installmentPeriod": "12", "payments": 2136000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "ربع سنوي 136.350", "price": 15149000, "notes": "--", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2570257, "code": "100113", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "13", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "2028", "facade": "وايد جاردن طرفية دوبل فيو", "space": 98, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1143000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 20.220", "price": 6953000, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 2580258, "code": "100114", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "63", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2027", "facade": "جاردن بحري صريح", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1600000, "offerPrice": 650000, "totalPayments": 0, "installmentDetails": "شهري 35.000 سنوي 310.000", "price": 8146000, "notes": "بدون نادي اجباري", "clientName": "inv Taha Mekky", "clientPhone": "01001703947", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2590259, "code": "100115", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2027", "facade": "غير مجروحة نهائي طرفيه بحري صريح", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1540000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 35.000 سنوي 350.000", "price": 9545000, "notes": "بدون نادي اجباري", "clientName": "inv Taha Mekky", "clientPhone": "01001703947", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2600260, "code": "100116", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "47", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2027", "facade": "غير مجروحة نهائي بحري صريح", "space": 141, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1400000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 35.000 سنوي 350.000", "price": 12600000, "notes": "بدون نادي اجباري", "clientName": "inv Taha Mekky", "clientPhone": "01001703947", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2610261, "code": "100117", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "56", "unit": "52", "floor": "5", "model": "شقة سكنية", "delivery": "2027", "facade": "غير مجروحة نهائي طرفيه بحري صريح", "space": 116, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "10", "payments": 1540000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 35.000 سنوي 350.000", "price": 9545000, "notes": "بدون نادي اجباري", "clientName": "inv Taha Mekky", "clientPhone": "01001703947", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2620262, "code": "100118", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "10", "unit": "53", "floor": "5", "model": "ستوديو", "delivery": "2028", "facade": "فيو بحيرات", "space": 63, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "2024", "installmentPeriod": "12", "payments": 700000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهري 18.400 سنوي 184.000", "price": 7300000, "notes": "ستوديو 1 غرفة نوم", "clientName": "A7md Samir Yosry", "clientPhone": "01022827567", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 2630263, "code": "100119", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "5", "unit": "42", "floor": "4", "model": "penthouse", "delivery": "2029", "facade": "فيو بحر ومارينا ولاجون كبير بحري شرقي امامي", "space": 93, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "يناير 2025", "installmentPeriod": "12", "payments": 980000, "offerPrice": 270000, "totalPayments": 0, "installmentDetails": "--", "price": 12222260, "notes": "--", "clientName": "A7md Samir Yosry", "clientPhone": "01022827567", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2640264, "code": "100120", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "264", "unit": "4", "floor": "G", "model": "A", "delivery": "2028", "facade": "--", "space": 86, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "اغسطس 2024", "installmentPeriod": "12", "payments": 1350000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "--", "price": 10562020, "notes": "--", "clientName": "3mro Elgamily", "clientPhone": "00249912395303", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 2650265, "code": "100121", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "20", "unit": "2", "floor": "G", "model": "A1", "delivery": "2028", "facade": "طرفية فيو جاردن", "space": 84, "garden": "30", "rooms": 2, "bathroom": "1", "bookingDate": "فبراير 2025", "installmentPeriod": "10", "payments": 100000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "--", "price": 10271440, "notes": "شقة ارضي بجاردن", "clientName": "3mro Elgamily", "clientPhone": "00249912395303", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2660266, "code": "100122", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "16", "unit": "62", "floor": "6", "model": "شقة سكنية", "delivery": "2028", "facade": "وايد جاردن طرفية دوبل فيو", "space": 146, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1800000, "offerPrice": 600000, "totalPayments": 0, "installmentDetails": "شهري 31.890", "price": 11020000, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 2670267, "code": "100123", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B2", "building": "12", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو جاردن", "space": 95, "garden": "39", "rooms": 2, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 903000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهرى 20.650 سنوى 206.500", "price": 7081360, "notes": "متاح تقسيط المقدم على دفعات مع وجود قسط متاخر بحوالى 260الف", "clientName": "", "clientPhone": "01006115865", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2680268, "code": "100125", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "35", "unit": "32", "floor": "3", "model": "شقة سكنية", "delivery": "2028", "facade": "وايد جاردن امام المول والخدمات", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "8", "payments": 2054000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 45.530 سنوي 470.000", "price": 10587000, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2690269, "code": "100126", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "44", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "وايد جاردن امام المول والخدمات", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "8", "payments": 1579000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 36.870", "price": 8138760, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2700270, "code": "100127", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "48", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "2028", "facade": "وايد جاردن امام المول والخدمات", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "8", "payments": 1663000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهري 36.870", "price": 8086760, "notes": "نادي غير اجباري لو في عضوية - وتنازل مجاني", "clientName": "inv Sherif Mady", "clientPhone": "01211418477", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2710271, "code": "100128", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "30", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك و شارع", "space": 77, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "ديسمبر 2023", "installmentPeriod": "6", "payments": 1560000, "offerPrice": 1750000, "totalPayments": 0, "installmentDetails": "شهرى 10.900 سنوى 300.000", "price": 3766000, "notes": "نادي غير اجباري لو في اشتراك نادي فى تفاوض", "clientName": "", "clientPhone": "01010353895", "status": "اعلان", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2720272, "code": "100132", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "76", "unit": "22", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "دوبل فيو نادى بريفادو وجاردن", "space": 200, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 11000000, "notes": "تشطيب شركه مسدد صيانه و اشتراك نادى", "clientName": "", "clientPhone": "01006033538", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2730273, "code": "100133", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "43", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "نوفمبر 2023", "installmentPeriod": "7", "payments": 1800000, "offerPrice": 1000000, "totalPayments": 0, "installmentDetails": "شهرى 12.150 ستوى 314.600", "price": 4608520, "notes": "الشقه بها مستأجر بايجار شهرى 10.5 ويوجد مستحقات شهر 12 بقيمه 340.000الف", "clientName": "M7md Mamdoh", "clientPhone": "01024001236", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2750275, "code": "100135", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك بحرى صريح", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "فبراير 2024", "installmentPeriod": "--", "payments": 1974000, "offerPrice": 900000, "totalPayments": 0, "installmentDetails": "شهرى 13.850 سنوى 367.550", "price": 4500000, "notes": "تخصيص هيئه بجوار مجرى السيل البيع بتوكيل والتنازل بعد اكتمال الاقساط", "clientName": "A7md", "clientPhone": "01004588636", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2760276, "code": "100136", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "33", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع وجاردن بحرى", "space": 91, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4600000, "notes": "ليس عليها مبالغ مستحقه السعر شامل الفرش  والاجهزة السعر بدونها 4.45 مليون", "clientName": "M7mod 3bdhalim Bk", "clientPhone": "01028280000", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2770277, "code": "100139", "category": "Apt Resale", "type": "resale", "city": "Alrehab", "zone": "Alrehab Eden", "building": "RX2", "unit": "6", "floor": "G", "model": "وحدة فندقية", "delivery": "2027", "facade": "--", "space": 156, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "يناير 2024", "installmentPeriod": "11", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 49.765 سنوى 650.750", "price": 19139450, "notes": "--", "clientName": "M7md Elfaramwy", "clientPhone": "01090402292", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2780278, "code": "100140", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "92", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك وجاردن طرفيه", "space": 137, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "مايو 2024", "installmentPeriod": "7", "payments": 1212020, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "--", "price": 6046930, "notes": "استلام فوري Ready To Move", "clientName": "Nasser", "clientPhone": "01111793469", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 2790279, "code": "100141", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B2", "building": "44", "unit": "44", "floor": "4", "model": "E", "delivery": "2029", "facade": "--", "space": 98, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "ابريل 2024", "installmentPeriod": "10", "payments": 1109000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 19.375 سنوى 190.950", "price": 6593330, "notes": "--", "clientName": "M7md Sayed", "clientPhone": "01031390200", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2800280, "code": "100142", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "57", "unit": "31", "floor": "3", "model": "T06", "delivery": "2028", "facade": "--", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1830000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 41.045 سنوى 410.450", "price": 10887000, "notes": "--", "clientName": "M7md Sayed", "clientPhone": "01031390200", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2810281, "code": "100143", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "84", "unit": "54", "floor": "5", "model": "T01", "delivery": "2029", "facade": "--", "space": 81, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "اغسطس 2024", "installmentPeriod": "10", "payments": 1103000, "offerPrice": 150000, "totalPayments": 0, "installmentDetails": "شهرى 23.485 سنوى 231.800", "price": 6148000, "notes": "--", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2820282, "code": "100144", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "23", "unit": "2", "floor": "G", "model": "A3", "delivery": "2029", "facade": "طرفية فيو جاردن", "space": 84, "garden": "30", "rooms": 2, "bathroom": "--", "bookingDate": "اكتوبر 2024", "installmentPeriod": "10", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 38.075 سنوى 375.750", "price": 9967250, "notes": "--", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2830283, "code": "100145", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "61", "unit": "32", "floor": "3", "model": "T01", "delivery": "2028", "facade": "فيو جاردن", "space": 79, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1090000, "offerPrice": 350000, "totalPayments": 0, "installmentDetails": "شهرى 24.800 سنوى 244.750", "price": 6491550, "notes": "شقة ارضي بجاردن", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2840284, "code": "100146", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "31", "unit": "41", "floor": "4", "model": "A44", "delivery": "2028", "facade": "--", "space": 154, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2560000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 54.475 سنوى 537.600", "price": 14260540, "notes": "--", "clientName": "investor Ahmed Elshoura", "clientPhone": "01031390200", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2850285, "code": "100147", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "66", "unit": "2", "floor": "G", "model": "T06", "delivery": "2029", "facade": "طرفية فيو جاردن", "space": 135, "garden": "65", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2025", "installmentPeriod": "10", "payments": 1400000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهرى 54.010 سنوى 533.050", "price": 14967360, "notes": "شقة ارضي بجاردن", "clientName": "Invesor Mostafa Elkady", "clientPhone": "01117871247", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2860286, "code": "100148", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "17", "unit": "1", "floor": "G", "model": "T14", "delivery": "2028", "facade": "طرفية فيو بارك", "space": 67, "garden": "--", "rooms": 1, "bathroom": "--", "bookingDate": "سبتمبر 2023", "installmentPeriod": "11", "payments": 855000, "offerPrice": 1100000, "totalPayments": 0, "installmentDetails": "شهرى 12.070 سنوى 117.200", "price": 3498030, "notes": "حجز 2023 بسعر ممتاز", "clientName": "Dr Reham", "clientPhone": "01000939162", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2870287, "code": "100149", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B2", "building": "72", "unit": "64", "floor": "6", "model": "E", "delivery": "2028", "facade": "فيو جاردن", "space": 98, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1178000, "offerPrice": 80000, "totalPayments": 0, "installmentDetails": "شهرى 20.985 سنوى 203.050", "price": 7101150, "notes": "--", "clientName": "", "clientPhone": "01024242329", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2880288, "code": "100151", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "54", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 135, "garden": "65", "rooms": 3, "bathroom": "3", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 2500000, "offerPrice": -100000, "totalPayments": 0, "installmentDetails": "شهرى 54.930 سنوى 542.100", "price": 14379100, "notes": "البيع بخساره 100 الف من المدفوع والتنازل مجانى", "clientName": "El3emery 3omar", "clientPhone": "01207779455", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2890289, "code": "100152", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "6", "unit": "52", "floor": "5", "model": "T06", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 142, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 2100000, "offerPrice": 50000, "totalPayments": 0, "installmentDetails": "شهرى 45.815 سنوى 452.150", "price": 11993300, "notes": "--", "clientName": "El3emery 3omar", "clientPhone": "01207779455", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2900290, "code": "100153", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "67", "unit": "2", "floor": "G", "model": "T14", "delivery": "استلام فوري", "facade": "طرفية فيو جاردن", "space": 108, "garden": "55", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 38.165 سنوى 376.650", "price": 9990630, "notes": "بجانب مجرى السيل وقريبه من الخدمات", "clientName": "", "clientPhone": "01009677441", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2910291, "code": "100154", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "50", "unit": "13", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "2024", "installmentPeriod": "9", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهري 40.000 سنوي 360.000", "price": 9545000, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "M7md Mokhtar", "clientPhone": "01000627171", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2920292, "code": "100155", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "33", "unit": "23", "floor": "2", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 70, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4000000, "notes": "البيع بالفرش", "clientName": "", "clientPhone": "01015451850", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 2940294, "code": "100158", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "30", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 90, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "--", "payments": 1456000, "offerPrice": 1100000, "totalPayments": 0, "installmentDetails": "سنوى 527.000", "price": 2450000, "notes": "باقى 6 اقساط سنويه المدفوع شامل الوديعه", "clientName": "Mostafa", "clientPhone": "01002531444", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 2950295, "code": "100159", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "3", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 318, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "--", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 26500000, "notes": "تشطيبات الترا سوبر لوكس بسخان و تدفئه مركزيه", "clientName": "", "clientPhone": "01280631000", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2960296, "code": "100160", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B01", "building": "56", "unit": "43", "floor": "3", "model": "B", "delivery": "2028", "facade": "--", "space": 147, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "اكتوبر 2023", "installmentPeriod": "12", "payments": 1500000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهرى 23.050 سنوى 222.800", "price": 7940560, "notes": "--", "clientName": "", "clientPhone": "01004244837", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2970297, "code": "100161", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "38", "unit": "43", "floor": "3", "model": "T14", "delivery": "2029", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1600000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 35.300 سنوى 348.400", "price": 9241470, "notes": "بدون اوفر برايس", "clientName": "", "clientPhone": "01004244837", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 2980298, "code": "100162", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "38", "unit": "1", "floor": "G", "model": "ستوديو", "delivery": "2029", "facade": "طرفية فيو بارك", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1000000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 22.050 سنوى 217.600", "price": 5772360, "notes": "اوفر حسب السوق تنازل مجانى نادى غير اجبارى", "clientName": "", "clientPhone": "01557212001", "status": "اعلان", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3000300, "code": "100164", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "South Med", "building": "79", "unit": "--", "floor": "--", "model": "شالية", "delivery": "2028", "facade": "فيو لاجون و بحر", "space": 118, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يوليو 2024", "installmentPeriod": "12", "payments": 1800000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "--", "price": 13800000, "notes": "باقى 12م على 12 سنه متاح تفاوض", "clientName": "", "clientPhone": "01111188255", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3010301, "code": "100165", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B3", "building": "10", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك ونارو جاردن", "space": 140, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6300000, "notes": "--", "clientName": "", "clientPhone": "01208898819", "status": "اعلان", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3020302, "code": "100166", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "36", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 103, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4800000, "notes": "طلعت مصطفى - تشطيبات خاصه - خالصه بالكامل - راكب عدادات", "clientName": "", "clientPhone": "01111006171", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3030303, "code": "100168", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "169B", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو سنترال بارك", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5300000, "notes": "تخصيص هيئه راكب عدادات لا يوجد عليها مستحقات", "clientName": "", "clientPhone": "01119440142", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3040304, "code": "100169", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "66", "unit": "--", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 200, "garden": "--", "rooms": 4, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 10000000, "notes": "استلام فوري Ready To Move", "clientName": "", "clientPhone": "01113636676", "status": "اعلان", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3060306, "code": "100172", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "47", "unit": "54", "floor": "5", "model": "E", "delivery": "2029", "facade": "فيو جاردن", "space": 98, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "ابريل 2024", "installmentPeriod": "12", "payments": 1175000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهرى 21.750 سنوى 210.450", "price": 7240810, "notes": "--", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3070307, "code": "100173", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "62", "unit": "1", "floor": "G", "model": "B", "delivery": "2029", "facade": "--", "space": 95, "garden": "35", "rooms": 2, "bathroom": "2", "bookingDate": "ابريل 2024", "installmentPeriod": "12", "payments": 1180000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهرى 21.920 سنوى 212.150", "price": 7296530, "notes": "شقة ارضي بجاردن", "clientName": "investor M7md Ragab", "clientPhone": "01115566988", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3080308, "code": "100174", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "33", "unit": "44", "floor": "4", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 107, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "يوليو 2025", "installmentPeriod": "10", "payments": 780000, "offerPrice": 150000, "totalPayments": 0, "installmentDetails": "شهرى 32.630 سنوى 322.000", "price": 8655440, "notes": "اوفر قابل للتفاوض", "clientName": "Doc M7md Amin", "clientPhone": "01141616802", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3090309, "code": "100175", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "65", "unit": "31", "floor": "3", "model": "شقة سكنية", "delivery": "2028", "facade": "دوبل فيو مجرى السيل و جاردن", "space": 167, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مايو 2024", "installmentPeriod": "10", "payments": 2526900, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "--", "price": 13451180, "notes": "يمكن تقليل الاجمالى الى12 م فى حاله التقسيط على 8 سنين بدل 10", "clientName": "", "clientPhone": "01109413311", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 3100310, "code": "100176", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "33", "unit": "12", "floor": "1", "model": "A2", "delivery": "2027", "facade": "وايد جاردن", "space": 105, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يناير 2023", "installmentPeriod": "12", "payments": 1500000, "offerPrice": 2500000, "totalPayments": 0, "installmentDetails": "شهرى 12.925 سنوى 127.100", "price": 4740680, "notes": "--", "clientName": "Wagida Hassan", "clientPhone": "01224400090", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3110311, "code": "100178", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "43", "unit": "33", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5300000, "notes": "طلعت مصطفى - تشطيبات خاصه", "clientName": "Eng 3bdlwahab", "clientPhone": "01029629549", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 3120312, "code": "100184", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "30", "unit": "16", "floor": "1", "model": "E", "delivery": "2029", "facade": "--", "space": 67, "garden": "--", "rooms": 1, "bathroom": "--", "bookingDate": "مايو 2024", "installmentPeriod": "12", "payments": 579300, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 13.625 سنوى 131.900", "price": 4626210, "notes": "ستوديو 1 غرفة نوم", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3130313, "code": "100185", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "33", "unit": "6", "floor": "G", "model": "E", "delivery": "2029", "facade": "--", "space": 63, "garden": "35", "rooms": 1, "bathroom": "--", "bookingDate": "اغسطس 2024", "installmentPeriod": "12", "payments": 642960, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 15.265 سنوى 147.700", "price": 5166740, "notes": "ستوديو ارضي بجاردن", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3140314, "code": "100186", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "33", "unit": "36", "floor": "3", "model": "E", "delivery": "2029", "facade": "--", "space": 67, "garden": "--", "rooms": 1, "bathroom": "--", "bookingDate": "اغسطس 2024", "installmentPeriod": "12", "payments": 613905, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 13.725 سنوى 137.250", "price": 4818650, "notes": "ستوديو 1 غرفة نوم", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3150315, "code": "100187", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "42", "unit": "33", "floor": "3", "model": "E", "delivery": "2029", "facade": "--", "space": 82, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "يناير 2025", "installmentPeriod": "12", "payments": 512510, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 16.830 سنوى 162.700", "price": 5868940, "notes": "--", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3160316, "code": "100188", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "68", "unit": "3", "floor": "G", "model": "T14", "delivery": "2028", "facade": "فيو جاردن", "space": 108, "garden": "55", "rooms": 3, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 1846470, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 36.960 سنوى 364.750", "price": 9675060, "notes": "شقة ارضي بجاردن", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3170317, "code": "100189", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "70", "unit": "1", "floor": "G", "model": "T06", "delivery": "2028", "facade": "طرفية فيو بارك", "space": 136, "garden": "64", "rooms": 3, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 2340090, "offerPrice": 600000, "totalPayments": 0, "installmentDetails": "شهرى 44.730 سنوى 441.450", "price": 11709600, "notes": "شقة ارضي بجاردن", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3180318, "code": "100190", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "70", "unit": "41", "floor": "4", "model": "T06", "delivery": "2028", "facade": "--", "space": 142, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 2069430, "offerPrice": 650000, "totalPayments": 0, "installmentDetails": "شهرى 39.560 سنوى 390.400", "price": 10355400, "notes": "--", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3190319, "code": "100191", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "56", "unit": "54", "floor": "5", "model": "T14", "delivery": "2029", "facade": "--", "space": 109, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1521990, "offerPrice": 400000, "totalPayments": 0, "installmentDetails": "شهرى 34.560 سنوى 341.100", "price": 9047020, "notes": "مساحة ممتازة 3 نوم افضل استغلال للمساحات", "clientName": "inv Mina Sa3d", "clientPhone": "01061003269", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3200320, "code": "100192", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "10B", "unit": "3", "floor": "G", "model": "C", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يناير 2024", "installmentPeriod": "7", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 13.245 سنوى 342.950", "price": 4730380, "notes": "متاح تخصيص جاردن", "clientName": "", "clientPhone": "01016811417", "status": "Refreshed", "source": "STR", "createdAt": "", "featured": false}, {"id": 3220322, "code": "100194", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "21/4", "unit": "56", "floor": "5", "model": "ستوديو", "delivery": "2028", "facade": "فيو بارك و شارع", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 787380, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهرى 13.640 سنوى 132.800", "price": 3600000, "notes": "ستوديو 1 غرفة نوم", "clientName": "Tamer Khedr", "clientPhone": "01003781681", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3230323, "code": "100195", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B01", "building": "13", "unit": "65", "floor": "6", "model": "E", "delivery": "2027", "facade": "فيو شارع", "space": 131, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "يونيو 2022", "installmentPeriod": "12", "payments": 900000, "offerPrice": 2100000, "totalPayments": 0, "installmentDetails": "شهرى 12.130 سنوى 113.000", "price": 4321230, "notes": "حجز 2022 بسعر ممتاز", "clientName": "Hussein", "clientPhone": "01281067557", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3240324, "code": "100196", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "44", "unit": "53", "floor": "5", "model": "T14", "delivery": "2027", "facade": "--", "space": 116, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "مارس 2023", "installmentPeriod": "12", "payments": 1250000, "offerPrice": 1800000, "totalPayments": 0, "installmentDetails": "شهرى 15.455 سنوى 152.000", "price": 5152020, "notes": "تفاوض فى حاله الجديه", "clientName": "inv Wael Fekry", "clientPhone": "01001607087", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3250325, "code": "100197", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "12", "unit": "43", "floor": "4", "model": "T25", "delivery": "2028", "facade": "فيو جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "سبتمبر 2023", "installmentPeriod": "11", "payments": 1450000, "offerPrice": 2000000, "totalPayments": 0, "installmentDetails": "شهرى 21.980 سنوى 213.400", "price": 6730430, "notes": "حجز 2023 بسعر ممتاز", "clientName": "Eng M7md A7md", "clientPhone": "01120036040", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3260326, "code": "100199", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "37", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو وايد جاردن طرفيه", "space": 82, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4300000, "notes": "طلعت مصطفى - السعر شامل العدادات والتكييفات - و بدون التكييفات 4.2م", "clientName": "A7md Tobbal", "clientPhone": "01060999095", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3270327, "code": "100200", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "32", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع وبارك", "space": 82, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4500000, "notes": "طلعت مصطفى - السعر شامل الفرش والاجهزه - قريبه من الخدمات", "clientName": "investor Eng Ramy Elseba3y", "clientPhone": "01093448094", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3280328, "code": "100202", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "5", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 88, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4000000, "notes": "تخصيص هيئة امام الخدمات و الجامع مباشره السعر شامل الفرش بدون 3.900م", "clientName": "", "clientPhone": "01001693518", "status": "اعلان", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3290329, "code": "100204", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B3", "building": "2", "unit": "63", "floor": "6", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو المسجد و الخدمات", "space": 135, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6850000, "notes": "تشطيبات خاصه", "clientName": "Trader Hamza", "clientPhone": "01208484902", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3300330, "code": "100205", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "B02", "building": "9", "unit": "32", "floor": "3", "model": "E", "delivery": "2028", "facade": "فيو جاردن", "space": 123, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "13", "payments": 1303000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 23.560 سنوى 228.000", "price": 7917250, "notes": "اوفر حسب السوق 500.000 تفاوض", "clientName": "3afaf Elkhatib", "clientPhone": "0097470562736", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3310331, "code": "100206", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "29B", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو بارك", "space": 111, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5400000, "notes": "تخصيص شرطه تشطيب شركه استلام فورى بعد دفع الوديعه السعر شامل الوديعه و التنازل", "clientName": "Noura 3sam", "clientPhone": "01007916444", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3320332, "code": "100207", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B12", "building": "73", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 120, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 8000000, "notes": "يوجد اسانسير البيع بالفرش و الاجهزه تشطيبات خاصه", "clientName": "", "clientPhone": "01005580368", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3340334, "code": "100209", "category": "Apt Resale", "type": "resale", "city": "Alrehab", "zone": "Alrehab Eden", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو نادى الرحاب بحرى", "space": 149, "garden": "--", "rooms": 3, "bathroom": "--", "bookingDate": "--", "installmentPeriod": "11", "payments": 3300000, "offerPrice": 400000, "totalPayments": 0, "installmentDetails": "--", "price": 24280990, "notes": "شقه فندقيه  فى ايدين الرحاب السعر شامل التكييفات و اشتراك النادى والجراج لو على 7 سنوات اجمالى 17.280م", "clientName": "abdelrahman", "clientPhone": "01014673341", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3350335, "code": "100210", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "54", "unit": "2", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "طرفية فيو جاردن", "space": 108, "garden": "55", "rooms": 3, "bathroom": "2", "bookingDate": "فبراير 2024", "installmentPeriod": "10", "payments": 1850000, "offerPrice": 750000, "totalPayments": 0, "installmentDetails": "شهرى 33.570 سنوى 331.300", "price": 8787290, "notes": "خطوات للخدمات ومجرى السيل", "clientName": "abdelrahman", "clientPhone": "01014673341", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3360336, "code": "100211", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "22", "unit": "76", "floor": "7", "model": "ستوديو", "delivery": "2028", "facade": "فيو شارع", "space": 67, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "اغسطس 2024", "installmentPeriod": "14", "payments": 550000, "offerPrice": 1300000, "totalPayments": 0, "installmentDetails": "شهرى 8.050 سنوى 77.500", "price": 3109720, "notes": "تنازل مجانا خطوات من السنترال بارك يتم التنازل بالنادى", "clientName": "abdelrahman", "clientPhone": "01014673341", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3370337, "code": "100212", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "49", "unit": "12", "floor": "1", "model": "T14", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 115, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1950000, "offerPrice": 400000, "totalPayments": 0, "installmentDetails": "شهرى 36.940 سنوى 359.850", "price": 9545160, "notes": "خطوات للخدمات", "clientName": "abdelrahman", "clientPhone": "0104673341", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3380338, "code": "100213", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "C3", "building": "96", "unit": "53", "floor": "3", "model": "شالية", "delivery": "2030", "facade": "فيو مفتوح بحرى لاجون", "space": 62, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "اغسطس 2025", "installmentPeriod": "10", "payments": 660000, "offerPrice": 150000, "totalPayments": 0, "installmentDetails": "شهرى 29.205 سنوى 288.200", "price": 7747190, "notes": "--", "clientName": "", "clientPhone": "01062820110", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3390339, "code": "100214", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "47", "unit": "74", "floor": "7", "model": "E", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 98, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "ابريل 2024", "installmentPeriod": "12", "payments": 1050000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 21.750 سنوى 210.450", "price": 7240810, "notes": "الاقساط كل سنه فى شهر 4 500 الف", "clientName": "IBRAHIM", "clientPhone": "01115333694", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3400340, "code": "100215", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "35", "unit": "42", "floor": "4", "model": "A", "delivery": "2029", "facade": "--", "space": 101, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "يناير 2025", "installmentPeriod": "10", "payments": 1300000, "offerPrice": -250000, "totalPayments": 0, "installmentDetails": "شهرى 33.915 سنوى 260.900", "price": 13674810, "notes": "البيع بخساره 250 الف من المدفوع  تنازل مجانى داخل الشركه", "clientName": "عابد", "clientPhone": "01096966100", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3410341, "code": "100216", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "49", "unit": "41", "floor": "4", "model": "E", "delivery": "2030", "facade": "--", "space": 119, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "يوليو 2025", "installmentPeriod": "12", "payments": 597400, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 23.815 سنوى 219.800", "price": 9567560, "notes": "بدون اوفر", "clientName": "غيث", "clientPhone": "01116451666", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3420342, "code": "100217", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "Noor", "building": "9", "unit": "32", "floor": "3", "model": "E", "delivery": "2028", "facade": "فيو جاردن", "space": 123, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1303000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 23.560 سنوى 228.000", "price": 7917250, "notes": "تحديد الاوفر عند الجديه", "clientName": "عفاف الخطيب", "clientPhone": "0097470562736", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3430343, "code": "100218", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B3", "building": "--", "unit": "41", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 107, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4800000, "notes": "بجانب النادى و السنترال بارك وقريبه من بوابه 1 وارابيسك و الاوبن اير مول", "clientName": "عبير بركات", "clientPhone": "01023647464", "status": "اعلان", "source": "STR", "createdAt": "", "featured": false}, {"id": 3440344, "code": "100219", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "9", "unit": "1", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع", "space": 150, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 13000000, "notes": "الشقه بحرى بالكامل خالصه اقساط ووديعه السعر شامل الجراج و النادى", "clientName": "", "clientPhone": "01094409957", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3450345, "code": "100220", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بحرى بارك", "space": 114, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 6200000, "notes": "السعر قابل للتفاوض تشطيبات خاصه الترا سوبر لوكس عزل ضوضاء ساوند سيستم", "clientName": "شيماء عبد البديع", "clientPhone": "01112656133", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3460346, "code": "100221", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "85", "unit": "53", "floor": "5", "model": "T06", "delivery": "2029", "facade": "فيو جاردن", "space": 141, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مايو 2025", "installmentPeriod": "10", "payments": 2500000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهرى 42.950 سنوى 423.850", "price": 11242940, "notes": "--", "clientName": "اسلام رافت", "clientPhone": "01555780555", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3470347, "code": "100222", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "19", "unit": "2", "floor": "G", "model": "T14", "delivery": "2029", "facade": "طرفية فيو جاردن", "space": 108, "garden": "55", "rooms": 3, "bathroom": "2", "bookingDate": "اكتوبر 2025", "installmentPeriod": "10", "payments": 2000000, "offerPrice": 100000, "totalPayments": 0, "installmentDetails": "شهرى 41.765 سنوى 412.150", "price": 10932710, "notes": "--", "clientName": "اسلام رافت", "clientPhone": "01555780555", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3500350, "code": "100225", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "25", "unit": "24", "floor": "2", "model": "شقة سكنية", "delivery": "2029", "facade": "--", "space": 107, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "اكتوبر 2025", "installmentPeriod": "10", "payments": 470000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 34.915 سنوى 344.500", "price": 10146218, "notes": "بدون اوفر", "clientName": "سماح", "clientPhone": "01155259651", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3520352, "code": "100227", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "52", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "2028", "facade": "دوبل فيو مجرى السيل وجاردن", "space": 163, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 2383110, "offerPrice": 1000000, "totalPayments": 0, "installmentDetails": "شهرى 47.700 سنوى 470.750", "price": 12486430, "notes": "--", "clientName": "محمود", "clientPhone": "01098189800", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3530353, "code": "100228", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "32", "unit": "24", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 114, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "cash", "price": 6000000, "notes": "تشطيبات خاصه", "clientName": "محمد سلمان", "clientPhone": "01000363067", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3540354, "code": "100229", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "161A", "unit": "11", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 131, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "يناير 2024", "installmentPeriod": "7", "payments": 2500000, "offerPrice": 2000000, "totalPayments": 0, "installmentDetails": "شهرى 17.260 سنوى 446.950", "price": 7050000, "notes": "--", "clientName": "محمد سلمان", "clientPhone": "01000363067", "status": "اعلان", "source": "STR", "createdAt": "", "featured": false}, {"id": 3560356, "code": "100231", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "13", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "طرفية فيو بارك", "space": 77, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "cash", "price": 4500000, "notes": "تشطيبات خاصه امام الايست هاب والكرافت زون", "clientName": "", "clientPhone": "01006011879", "status": "اعلان", "source": "STR", "createdAt": "", "featured": false}, {"id": 3570357, "code": "100232", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "99", "unit": "55", "floor": "5", "model": "ستوديو", "delivery": "2028", "facade": "فيو وايد جاردن", "space": 68, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "مايو 2025", "installmentPeriod": "--", "payments": 548600, "offerPrice": 101400, "totalPayments": 0, "installmentDetails": "--", "price": 8391410, "notes": "--", "clientName": "", "clientPhone": "01129773360", "status": "اعلان", "source": "STR", "createdAt": "", "featured": false}, {"id": 3580358, "code": "100233", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "31", "unit": "--", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 96, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4600000, "notes": "--", "clientName": "انس جمال", "clientPhone": "01055888166", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3590359, "code": "100234", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "72", "unit": "14", "floor": "1", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو بارك", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مايو 2024", "installmentPeriod": "10", "payments": 1257500, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "شهرى 40.360 سنوى 398.300", "price": 10565000, "notes": "--", "clientName": "عبد الرحمن طارق", "clientPhone": "01100666005", "status": "available", "source": "Abdelrhman", "createdAt": "", "featured": false}, {"id": 3600360, "code": "100235", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "78", "unit": "12", "floor": "1", "model": "T07", "delivery": "2029", "facade": "فيو وايد جاردن و مجرى السيل", "space": 163, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "--", "payments": 2000000, "offerPrice": 250000, "totalPayments": 0, "installmentDetails": "--", "price": 13128000, "notes": "--", "clientName": "عبد الرحمن طارق", "clientPhone": "01100666005", "status": "available", "source": "Abdelrhman", "createdAt": "", "featured": false}, {"id": 3610361, "code": "100236", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "6", "unit": "42", "floor": "4", "model": "T06", "delivery": "2029", "facade": "فيو بارك", "space": 142, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2025", "installmentPeriod": "10", "payments": 1300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 47.060 سنوى 464.350", "price": 12482840, "notes": "مطلوب المدفوع فقط بدون اوفر", "clientName": "مصطفي احمد", "clientPhone": "01006041039", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3620362, "code": "100237", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "65", "unit": "1", "floor": "G", "model": "T06", "delivery": "2029", "facade": "فيو جاردن طرفيه", "space": 136, "garden": "65", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2025", "installmentPeriod": "10", "payments": 1300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 47.640 سنوى 470.050", "price": 12635940, "notes": "مطلوب المدفوع فقط بدون اوفر", "clientName": "مصطفي احمد", "clientPhone": "01006041039", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3630363, "code": "100238", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "16", "unit": "23", "floor": "2", "model": "T06", "delivery": "2029", "facade": "فيو جاردن", "space": 141, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "مارس 2025", "installmentPeriod": "10", "payments": 1300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 48.580 سنوى 485.800", "price": 13908809, "notes": "مطلوب المدفوع فقط بدون اوفر", "clientName": "مصطفي احمد", "clientPhone": "01006041039", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3640364, "code": "100239", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "11", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 96, "garden": "45", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "cash", "price": 5300000, "notes": "طلعت مصطفى خالصه تشطيبات خاصه", "clientName": "محمد اسماعيل", "clientPhone": "01117728732", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3650365, "code": "100240", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "53", "unit": "51", "floor": "5", "model": "T07", "delivery": "2028", "facade": "فيو مجرى السيل وجاردن", "space": 168, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "8", "payments": 2880000, "offerPrice": 300000, "totalPayments": 0, "installmentDetails": "شهرى 51.385 سنوى 508.000", "price": 11677880, "notes": "", "clientName": "محمد حافظ", "clientPhone": "01000222458", "status": "اعلان", "source": "STR", "createdAt": "", "featured": false}, {"id": 3660366, "code": "100241", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "53", "unit": "31", "floor": "3", "model": "T07", "delivery": "2028", "facade": "فيو مجرى السيل وجاردن", "space": 167, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 2965000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 48.700 سنوى 487.150", "price": 12922030, "notes": "", "clientName": "محمد حافظ", "clientPhone": "01000222458", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3670367, "code": "100242", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "53", "unit": "21", "floor": "2", "model": "T07", "delivery": "2028", "facade": "فيو مجرى السيل وجاردن", "space": 167, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "مارس 2024", "installmentPeriod": "10", "payments": 2767000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 51.385 سنوى 508.000", "price": 11677880, "notes": "", "clientName": "محمد حافظ", "clientPhone": "01000222458", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3680368, "code": "100243", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "63", "unit": "51", "floor": "5", "model": "T14", "delivery": "2029", "facade": "فيو بارك", "space": 109, "garden": "--", "rooms": 3, "bathroom": "2", "bookingDate": "يونيو 2024", "installmentPeriod": "10", "payments": 1600000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 30.980 سنوى 305.705", "price": 8110000, "notes": "بدون اوفر برايس", "clientName": "", "clientPhone": "01008168674", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3690369, "code": "100244", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "18", "unit": "1", "floor": "G", "model": "ستوديو", "delivery": "استلام فوري", "facade": "طرفيه فيو بارك و شارع", "space": 58, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 3400000, "notes": "تخصيص هيئه نادى غير اجبارى", "clientName": "", "clientPhone": "01005554298", "status": "اعلان", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3700370, "code": "100245", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "44A", "unit": "53", "floor": "5", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يوليو 2024", "installmentPeriod": "7", "payments": 2000000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 18.755 سنوى 485.650", "price": 7814886, "notes": "", "clientName": "", "clientPhone": "01008168674", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3710371, "code": "100247", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "29B", "unit": "42", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5400000, "notes": "خالصه جميع المستحقات تشطيبات خاصه", "clientName": "", "clientPhone": "01222228395", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3720372, "code": "100249", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B6", "building": "29", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 81, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4200000, "notes": "امام ستريب مول و شايفه ابراج العاصمه", "clientName": "ايات الله", "clientPhone": "01022919001", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3730373, "code": "100250", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "20", "unit": "1", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 101, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "7", "payments": 4700000, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهرى 30.735 سنوى 796.800", "price": 11946810, "notes": "", "clientName": "", "clientPhone": "01044459844", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3740374, "code": "100251", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "NOOR", "building": "7", "unit": "61", "floor": "6", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو مفتوح على السنترال بارك والفيلات", "space": 119, "garden": "--", "rooms": 2, "bathroom": "--", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 1300000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 22.790 سنوى 220.550", "price": 7670140, "notes": "أوفر تجاري حسب السوق", "clientName": "د/ طه", "clientPhone": "01229075073", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3750375, "code": "100252", "category": "Apt Resale", "type": "resale", "city": "Noor", "zone": "NOOR", "building": "76", "unit": "63", "floor": "6", "model": "شقة سكنية", "delivery": "2028", "facade": "--", "space": 82, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "مارس 2024", "installmentPeriod": "12", "payments": 964400, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 16.315 سنوى 157.850", "price": 5477440, "notes": "أوفر تجاري حسب السوق", "clientName": "د/ طه", "clientPhone": "01229075073", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3770377, "code": "100254", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B11", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 77, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4300000, "notes": "طلعت مصطفى تشطيبات خاصه السعر شامل الفرش", "clientName": "", "clientPhone": "01281499542", "status": "Refreshed", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3780378, "code": "100254", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو وايد جاردن", "space": 119, "garden": "45", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "10", "payments": 2327700, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 13706820, "notes": "امام النادى وناطحات سحاب الSPINE اوفر حسب السوق", "clientName": "احمد يوسف صلاح الدين", "clientPhone": "01000102796", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3790379, "code": "100255", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "2027", "facade": "فيو شارع وجاردن", "space": 158, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "10", "payments": 2287960, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 14132189, "notes": "بدون نادى اوفر معقول حسب السوق", "clientName": "احمد يوسف صلاح الدين", "clientPhone": "01000102796", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3800380, "code": "100256", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "2028", "facade": "فيو وايد جاردن", "space": 135, "garden": "65", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "10", "payments": 2203120, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "--", "price": 12510840, "notes": "بدون نادى اوفر معقول حسب السوق", "clientName": "احمد يوسف صلاح الدين", "clientPhone": "01000102796", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3810381, "code": "100257", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B7", "building": "47", "unit": "34", "floor": "4", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو بارك", "space": 82, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 4100000, "notes": "السعر شامل العفش والتكييفات والاجهزه", "clientName": "شريف حلمى", "clientPhone": "01033355517", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3820382, "code": "100258", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B2", "building": "", "unit": "", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن وشارع", "space": 208, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 11500000, "notes": "السعر شامل المطبخ كامل بجوار النادى والمسجد والخدمات تشطيبات خاصه تخصيص و خالصه اقساط (فى الاعلانات ننزل صور الفيو بس صور الشقه نبعتها خاص ) بها مستأجر لمده قصيره", "clientName": "ريهام مجدى", "clientPhone": "01283664966", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3830383, "code": "100259", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B15", "building": "--", "unit": "--", "floor": "--", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "--", "space": 111, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 8500000, "notes": "بجوار المسجد ومنطقه الخدمات متأجره شهرى ب 11 الف والعقد قرب الانتهاء", "clientName": "", "clientPhone": "01004166331", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3840384, "code": "100260", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "30", "unit": "4", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو شارع مفتوع على وايد جاردن", "space": 123, "garden": "40", "rooms": 3, "bathroom": "2", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 7000000, "notes": "قريبه من الخدمات طلعت مصطفى", "clientName": "DR REHAM", "clientPhone": "01000939162", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3850385, "code": "100261", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "41", "unit": "21", "floor": "2", "model": "D", "delivery": "2030", "facade": "فيو نارو جاردن و شارع", "space": 100, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "ابريل 2025", "installmentPeriod": "12", "payments": 870000, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 31.400 سنوى 241.550", "price": 12727870, "notes": "السعر شامل الجراج والنادى بدون اوفر", "clientName": "", "clientPhone": "01070879712", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3880388, "code": "100264", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B10", "building": "--", "unit": "--", "floor": "G", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو الشانشلزيه", "space": 90, "garden": "55", "rooms": 2, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 5200000, "notes": "بها جميع العدادات و خالصه", "clientName": "عزه", "clientPhone": "01001729352", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3890389, "code": "100265", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "5", "unit": "12", "floor": "1", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو جاردن", "space": 210, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 12000000, "notes": "الشقه خالصه تشطيبات خاصه تخصيص  شرطه السعر بالعفش 12.5 م", "clientName": "", "clientPhone": "01124663335", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3900390, "code": "100266", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B1", "building": "--", "unit": "--", "floor": "3", "model": "شقة سكنية", "delivery": "استلام فوري", "facade": "فيو نارو جاردن وبارك", "space": 178, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "--", "installmentPeriod": "Cash", "payments": 0, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "Cash", "price": 9000000, "notes": "خالصه تشطيبات خاصه", "clientName": "نسمه فتح الباب", "clientPhone": "01008578844", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3920392, "code": "100268", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "56", "unit": "3", "floor": "G", "model": "شقة سكنية", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 108, "garden": "55", "rooms": 3, "bathroom": "2", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2045000, "offerPrice": 315000, "totalPayments": 0, "installmentDetails": "شهرى 40.940  سنوى 404.050", "price": 10717770, "notes": "الشقه بجوار المسجد و الخدمات مباشره", "clientName": "Inv Sherif", "clientPhone": "01064109001", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3940394, "code": "100270", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "59", "unit": "22", "floor": "2", "model": "T01", "delivery": "2029", "facade": "فيو وايد جاردن", "space": 79, "garden": "--", "rooms": 2, "bathroom": "1", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 1275000, "offerPrice": 565000, "totalPayments": 0, "installmentDetails": "شهرى 25.550  سنوى 252.150", "price": 6688680, "notes": "الشقه بجوار المسجد و الخدمات مباشره", "clientName": "Inv Sherif", "clientPhone": "01064109001", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3950395, "code": "100271", "category": "Chalet Resale", "type": "resale", "city": "South Med", "zone": "C1", "building": "366", "unit": "33", "floor": "3", "model": "B", "delivery": "2029", "facade": "فيو لاجون", "space": 121, "garden": "--", "rooms": 2, "bathroom": "2", "bookingDate": "يوليو 2024", "installmentPeriod": "12", "payments": 2100000, "offerPrice": 315000, "totalPayments": 0, "installmentDetails": "شهرى 40.000 سنوى 405.000", "price": 13995680, "notes": "--", "clientName": "Inv Sherif", "clientPhone": "01064109001", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3960396, "code": "100272", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "Privado", "building": "37", "unit": "--", "floor": "5", "model": "D", "delivery": "2028", "facade": "فيو لاجون ولاند سكيب", "space": 65, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "12", "payments": 966250, "offerPrice": 200000, "totalPayments": 0, "installmentDetails": "شهرى 18 الف", "price": 7860000, "notes": "السعر شامل الصيانه و النادى", "clientName": "وسيم عوده", "clientPhone": "01275441166", "status": "available", "source": "STR", "createdAt": "", "featured": false}, {"id": 3970397, "code": "100273", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "25", "unit": "34", "floor": "2", "model": "ستوديو", "delivery": "استلام فورى", "facade": "فيو شارع", "space": 65, "garden": "--", "rooms": 1, "bathroom": "1", "bookingDate": "--", "installmentPeriod": "--", "payments": 1500000, "offerPrice": 2000000, "totalPayments": 0, "installmentDetails": "شهرى 9.500 سنوى 250.000", "price": 2900000, "notes": "السعر غير شامل النادى", "clientName": "", "clientPhone": "01275555774", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3980398, "code": "100274", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "23", "unit": "52", "floor": "5", "model": "A3", "delivery": "2029", "facade": "فيو النادى", "space": 125, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "نوفمبر 2024", "installmentPeriod": "10", "payments": 2500000, "offerPrice": 1500000, "totalPayments": 0, "installmentDetails": "شهرى 49.450 سنوى 488.050", "price": 12945300, "notes": "", "clientName": "A7md 3ashor", "clientPhone": "00966506971298", "status": "available", "source": "Maged", "createdAt": "", "featured": false}, {"id": 3990399, "code": "100275", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "39", "unit": "2", "floor": "G", "model": "A77", "delivery": "2029", "facade": "وايد جاردن مفتوح", "space": 119, "garden": "45", "rooms": 3, "bathroom": "3", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2327700, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 50.990 سنوى 509.900", "price": 13706820, "notes": "اوفر برايس حسب السوق", "clientName": "احمد يوسف صلاح الدين", "clientPhone": "01000102796", "status": "available", "source": "Khamis", "createdAt": "", "featured": false}, {"id": 4000400, "code": "100276", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B8", "building": "36", "unit": "11", "floor": "1", "model": "A77", "delivery": "2029", "facade": "فيو جاردن وشارع", "space": 158, "garden": "--", "rooms": 3, "bathroom": "3", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2287960, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 50.905 سنوى 502.350", "price": 14132189, "notes": "اوفر برايس حسب السوق", "clientName": "احمد يوسف صلاح الدين", "clientPhone": "01000102796", "status": "available", "source": "Khamis", "createdAt": "", "featured": false}, {"id": 4010401, "code": "100277", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "36", "unit": "2", "floor": "G", "model": "T06", "delivery": "2028", "facade": "فيو وايد جاردن", "space": 135, "garden": "65", "rooms": 3, "bathroom": "3", "bookingDate": "سبتمبر 2024", "installmentPeriod": "10", "payments": 2203120, "offerPrice": 0, "totalPayments": 0, "installmentDetails": "شهرى 47.790 سنوى 471.650", "price": 12510840, "notes": "اوفر برايس حسب السوق", "clientName": "احمد يوسف صلاح الدين", "clientPhone": "01000102796", "status": "available", "source": "Khamis", "createdAt": "", "featured": false}, {"id": 4020402, "code": "100278", "category": "Apt Resale", "type": "resale", "city": "Madinaty", "zone": "B14", "building": "92", "unit": "1", "floor": "G", "model": "T14", "delivery": "2029", "facade": "فيو بارك", "space": 67, "garden": "35", "rooms": 1, "bathroom": "1", "bookingDate": "اغسطس 2024", "installmentPeriod": "10", "payments": 1400000, "offerPrice": 500000, "totalPayments": 0, "installmentDetails": "شهرى 23.325  سنوى 230.200", "price": 6105860, "notes": "", "clientName": "", "clientPhone": "01222229596", "status": "available", "source": "STR", "createdAt": "", "featured": false}];

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
        <div class="bg-gold-card border-2 ${unit.featured ? 'border-white' : 'border-black'} rounded-xl overflow-hidden hover:border-white transition hover:shadow-2xl shadow-lg ${unit.featured ? 'ring-2 ring-white/50' : ''}">
            <div class="bg-gold-light h-40 flex items-center justify-center border-b-2 border-black relative">
                ${unit.featured ? '<div class="absolute top-2 right-2 bg-gold text-black px-2 py-1 rounded text-xs font-bold">⭐ مميز</div>' : ''}
                <i class="fas fa-building text-4xl gold-text"></i>
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
    const list = document.getElementById('partnersList');
    if(!list) return;
    
    if(partners.length === 0) {
        list.innerHTML = '<p class="text-silver p-4">لا توجد شركاء مضافة</p>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b border-gold/30">
                    <th class="p-3 text-gold text-right">الاسم</th>
                    <th class="p-3 text-gold text-right">الوصف</th>
                    <th class="p-3 text-gold text-center">صورة</th>
                    <th class="p-3 text-gold text-center">إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${partners.map(p => `
                    <tr class="border-b border-gold/20 hover:bg-gold/5">
                        <td class="p-3 text-silver">${p.name}</td>
                        <td class="p-3 text-silver text-xs">${p.descAr.substring(0, 50)}...</td>
                        <td class="p-3 text-center">${p.image ? '✓' : '✗'}</td>
                        <td class="p-3 text-center">
                            <button onclick="deletePartner(${p.id})" class="text-red-500 hover:text-red-700">حذف</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// ==================== SERVICES MANAGEMENT ====================

let services = JSON.parse(localStorage.getItem('services')) || [];

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
    const list = document.getElementById('servicesList');
    if(!list) return;
    
    if(services.length === 0) {
        list.innerHTML = '<p class="text-silver p-4">لا توجد مناطق عمل مضافة</p>';
        return;
    }
    
    list.innerHTML = `
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b border-gold/30">
                    <th class="p-3 text-gold text-right">الاسم (عربي)</th>
                    <th class="p-3 text-gold text-right">الاسم (إنجليزي)</th>
                    <th class="p-3 text-gold text-center">صورة</th>
                    <th class="p-3 text-gold text-center">إجراءات</th>
                </tr>
            </thead>
            <tbody>
                ${services.map(s => `
                    <tr class="border-b border-gold/20 hover:bg-gold/5">
                        <td class="p-3 text-silver">${s.nameAr}</td>
                        <td class="p-3 text-silver">${s.nameEn}</td>
                        <td class="p-3 text-center">${s.image ? '✓' : '✗'}</td>
                        <td class="p-3 text-center">
                            <button onclick="deleteService(${s.id})" class="text-red-500 hover:text-red-700">حذف</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderPartnersList();
    renderServicesList();
});
