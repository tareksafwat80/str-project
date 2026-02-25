// ==================== INVENTORY UI FUNCTIONS ====================

/**
 * Initialize inventory dashboard
 */
function initializeInventoryDashboard() {
    updateInventoryStats();
    renderInventoryPipeline();
}

/**
 * Update inventory statistics dashboard
 */
function updateInventoryStats() {
    const stats = getInventoryStatistics();
    
    document.getElementById('invTotalUnits').textContent = stats.total;
    document.getElementById('invAvailable').textContent = stats.available;
    document.getElementById('invReserved').textContent = stats.reserved;
    document.getElementById('invSold').textContent = stats.sold;
    document.getElementById('invTotalValue').textContent = (stats.totalValue / 1000000).toFixed(1) + 'M';
    document.getElementById('invAveragePrice').textContent = (stats.averagePrice / 1000000).toFixed(2) + 'M';
}

/**
 * Render inventory status pipeline
 */
function renderInventoryPipeline() {
    const stats = getInventoryStatistics();
    const pipelineContainer = document.getElementById('inventoryPipeline');
    
    if (!pipelineContainer) return;
    
    let html = `
        <div class="bg-blue-100 border-2 border-blue-900 rounded-lg p-4">
            <h4 class="font-bold text-black mb-2">متاح</h4>
            <p class="text-3xl font-bold text-blue-900">${stats.available}</p>
            <p class="text-xs text-gray-600 mt-2">${((stats.available/stats.total)*100).toFixed(1)}%</p>
        </div>
        <div class="bg-yellow-100 border-2 border-yellow-900 rounded-lg p-4">
            <h4 class="font-bold text-black mb-2">محجوز</h4>
            <p class="text-3xl font-bold text-yellow-900">${stats.reserved}</p>
            <p class="text-xs text-gray-600 mt-2">${((stats.reserved/stats.total)*100).toFixed(1)}%</p>
        </div>
        <div class="bg-green-100 border-2 border-green-900 rounded-lg p-4">
            <h4 class="font-bold text-black mb-2">مباع</h4>
            <p class="text-3xl font-bold text-green-900">${stats.sold}</p>
            <p class="text-xs text-gray-600 mt-2">${((stats.sold/stats.total)*100).toFixed(1)}%</p>
        </div>
        <div class="bg-purple-100 border-2 border-purple-900 rounded-lg p-4">
            <h4 class="font-bold text-black mb-2">مميز</h4>
            <p class="text-3xl font-bold text-purple-900">${stats.featured}</p>
            <p class="text-xs text-gray-600 mt-2">Featured</p>
        </div>
        <div class="bg-red-100 border-2 border-red-900 rounded-lg p-4">
            <h4 class="font-bold text-black mb-2">القيمة الكلية</h4>
            <p class="text-2xl font-bold text-red-900">${(stats.totalValue / 1000000).toFixed(1)}M</p>
            <p class="text-xs text-gray-600 mt-2">جنيه</p>
        </div>
    `;
    
    pipelineContainer.innerHTML = html;
}

/**
 * Render inventory units list
 */
function renderInventoryList(page = 1) {
    const itemsPerPage = 40;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    const units = getAllUnits().slice(start, end);
    
    let html = '<table style="width:100%; border-collapse:collapse; font-size:12px;">';
    html += '<tr style="background:#d4af37; color:#000; font-weight:bold;"><th style="padding:8px; text-align:right;">الكود</th><th style="padding:8px; text-align:right;">النوع</th><th style="padding:8px; text-align:right;">المنطقة</th><th style="padding:8px; text-align:right;">الغرف</th><th style="padding:8px; text-align:right;">المساحة</th><th style="padding:8px; text-align:right;">السعر</th><th style="padding:8px; text-align:right;">الحالة</th><th style="padding:8px; text-align:right;">الإجراءات</th></tr>';
    
    units.forEach(unit => {
        const statusColor = unit.status === 'متاح' ? '#4CAF50' : unit.status === 'محجوز' ? '#FFC107' : '#2196F3';
        
        html += `<tr style="border:1px solid #ddd;">
            <td style="padding:8px;">${unit.code}</td>
            <td style="padding:8px;">${unit.type}</td>
            <td style="padding:8px;">${unit.zone || '--'}</td>
            <td style="padding:8px;">${unit.rooms || '--'}</td>
            <td style="padding:8px;">${unit.space || '--'} m2</td>
            <td style="padding:8px;">${unit.price?.toLocaleString() || '--'}</td>
            <td style="padding:8px; color:${statusColor}; font-weight:bold;">${unit.status}</td>
            <td style="padding:8px;">
                <button onclick="openInventoryUnitModal(${unit.id})" style="background:#d4af37; color:#000; padding:4px 8px; margin:2px; border:none; border-radius:3px; cursor:pointer; font-weight:bold; font-size:11px;">تفاصيل</button>
                <button onclick="changeUnitStatus(${unit.id}, 'محجوز'); renderInventoryList(1); updateInventoryStats();" style="background:#FFC107; color:#000; padding:4px 8px; margin:2px; border:none; border-radius:3px; cursor:pointer; font-weight:bold; font-size:11px;">حجز</button>
                <button onclick="archiveUnit(${unit.id}); renderInventoryList(1); updateInventoryStats();" style="background:#FF9800; color:#fff; padding:4px 8px; margin:2px; border:none; border-radius:3px; cursor:pointer; font-weight:bold; font-size:11px;">أرشيف</button>
            </td>
        </tr>`;
    });
    
    html += '</table>';
    
    // Add pagination
    const totalPages = Math.ceil(getAllUnits().length / itemsPerPage);
    html += '<div style="margin-top:20px; text-align:center;">';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="renderInventoryList(${i})" style="margin:5px; padding:8px 12px; ${i === page ? 'background:#d4af37; color:#000;' : 'background:#666; color:#fff;'} border:none; border-radius:3px; cursor:pointer; font-weight:bold;">${i}</button>`;
    }
    html += '</div>';
    
    const container = document.getElementById('inventoryListContainer');
    if (container) container.innerHTML = html;
}

/**
 * Open unit details modal
 */
function openInventoryUnitModal(unitId) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (!unit) return;
    
    const modal = document.createElement('div');
    modal.id = 'inventoryUnitModal';
    modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:9999;';
    
    modal.innerHTML = `
        <div style="background:#1a1a1a; color:#fff; padding:20px; border-radius:8px; max-width:800px; width:90%; max-height:80vh; overflow-y:auto; border:2px solid #d4af37;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:2px solid #d4af37; padding-bottom:10px;">
                <h2 style="color:#d4af37; margin:0;">الوحدة: ${unit.code}</h2>
                <button onclick="closeInventoryUnitModal()" style="background:#FF0000; color:#fff; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold;">إغلاق</button>
            </div>
            
            <!-- Unit Info Grid -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:20px;">
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">النوع:</p>
                    <p>${unit.type}</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">المنطقة:</p>
                    <p>${unit.zone}</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">عدد الغرف:</p>
                    <p>${unit.rooms}</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">المساحة:</p>
                    <p>${unit.space} م²</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">السعر:</p>
                    <p>${unit.price?.toLocaleString()}</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">الحالة:</p>
                    <select onchange="changeUnitStatus(${unitId}, this.value); closeInventoryUnitModal(); renderInventoryList(1); updateInventoryStats();" style="background:#333; color:#fff; border:1px solid #d4af37; padding:5px; border-radius:3px; width:100%;">
                        <option value="متاح" ${unit.status === 'متاح' ? 'selected' : ''}>متاح</option>
                        <option value="محجوز" ${unit.status === 'محجوز' ? 'selected' : ''}>محجوز</option>
                        <option value="مباع" ${unit.status === 'مباع' ? 'selected' : ''}>مباع</option>
                    </select>
                </div>
            </div>
            
            <!-- Description -->
            <div style="margin-bottom:20px; border-top:2px solid #d4af37; padding-top:15px;">
                <h3 style="color:#d4af37; margin-bottom:10px;">الوصف</h3>
                <p>${unit.description || 'لا يوجد وصف'}</p>
            </div>
            
            <!-- Metadata -->
            <div style="margin-bottom:20px; border-top:2px solid #d4af37; padding-top:15px;">
                <h3 style="color:#d4af37; margin-bottom:10px;">معلومات إضافية</h3>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12px;">
                    <div>
                        <p style="color:#d4af37; margin:0;">تاريخ الإضافة:</p>
                        <p style="margin:0;">${new Date(unit.createdAt).toLocaleDateString('ar-EG')}</p>
                    </div>
                    <div>
                        <p style="color:#d4af37; margin:0;">عدد المشاهدات:</p>
                        <p style="margin:0;">${unit.views}</p>
                    </div>
                    <div>
                        <p style="color:#d4af37; margin:0;">المجموعة:</p>
                        <p style="margin:0;">${unit.category || '--'}</p>
                    </div>
                    <div>
                        <p style="color:#d4af37; margin:0;">مميز:</p>
                        <p style="margin:0;">${unit.featured ? 'نعم' : 'لا'}</p>
                    </div>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="display:flex; gap:10px; margin-top:20px;">
                <button onclick="toggleUnitFeatured(${unitId}); closeInventoryUnitModal(); renderInventoryList(1);" style="flex:1; background:#d4af37; color:#000; padding:10px; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">${unit.featured ? 'إلغاء التمييز' : 'تمييز'}</button>
                <button onclick="openEditUnitModal(${unitId})" style="flex:1; background:#0077B5; color:#fff; padding:10px; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">تعديل</button>
                <button onclick="archiveUnit(${unitId}); closeInventoryUnitModal(); renderInventoryList(1); updateInventoryStats();" style="flex:1; background:#FF9800; color:#fff; padding:10px; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">أرشيف</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

/**
 * Close unit details modal
 */
function closeInventoryUnitModal() {
    const modal = document.getElementById('inventoryUnitModal');
    if (modal) modal.remove();
}

/**
 * Show inventory tab
 */
function showInventoryTab() {
    initializeInventoryDashboard();
    renderInventoryList(1);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ واجهة الإنفنتوري جاهزة');
});
