// ==================== ADVANCED INVENTORY SYSTEM ====================

// Unit Status
const UNIT_STATUS = {
    AVAILABLE: 'متاح',
    RESERVED: 'محجوز',
    SOLD: 'مباع'
};

// Inventory Data
let inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || {
    units: [],
    activities: [],
    favorites: [],
    archives: []
};

// ==================== UNIT MANAGEMENT ====================

/**
 * Create a new unit
 */
function createUnit(unitData) {
    const newUnit = {
        id: Date.now(),
        code: unitData.code,
        type: unitData.type, // resale, rental, primary
        zone: unitData.zone,
        rooms: unitData.rooms || 0,
        space: unitData.space || 0,
        category: unitData.category,
        price: unitData.price || 0,
        installments: unitData.installments || '',
        offer_price: unitData.offer_price || 0,
        status: UNIT_STATUS.AVAILABLE,
        featured: false,
        images: unitData.images || [],
        videos: unitData.videos || [],
        pdfs: unitData.pdfs || [],
        description: unitData.description || '',
        assignedTo: unitData.assignedTo || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: currentUser?.id || 'system',
        views: 0,
        archived: false
    };
    
    inventoryData.units.push(newUnit);
    logInventoryActivity(`تم إضافة وحدة جديدة: ${newUnit.code}`);
    saveInventoryData();
    return newUnit;
}

/**
 * Update unit information
 */
function updateUnit(unitId, updates) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (!unit) return null;
    
    const oldData = JSON.stringify(unit);
    Object.assign(unit, updates);
    unit.updatedAt = new Date().toISOString();
    
    logInventoryActivity(`تم تعديل الوحدة: ${unit.code}`);
    saveInventoryData();
    return unit;
}

/**
 * Change unit status
 */
function changeUnitStatus(unitId, newStatus) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (!unit) return;
    
    const oldStatus = unit.status;
    unit.status = newStatus;
    unit.updatedAt = new Date().toISOString();
    
    logInventoryActivity(`تم تغيير حالة الوحدة ${unit.code} من ${oldStatus} إلى ${newStatus}`);
    saveInventoryData();
}

/**
 * Toggle featured unit
 */
function toggleUnitFeatured(unitId) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (!unit) return;
    
    unit.featured = !unit.featured;
    logInventoryActivity(`تم ${unit.featured ? 'تمييز' : 'إلغاء تمييز'} الوحدة: ${unit.code}`);
    saveInventoryData();
}

/**
 * Archive unit (soft delete)
 */
function archiveUnit(unitId) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (!unit) return;
    
    unit.archived = true;
    inventoryData.archives.push(unitId);
    logInventoryActivity(`تم أرشفة الوحدة: ${unit.code}`);
    saveInventoryData();
}

/**
 * Restore archived unit
 */
function restoreArchivedUnit(unitId) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (!unit) return;
    
    unit.archived = false;
    inventoryData.archives = inventoryData.archives.filter(id => id !== unitId);
    logInventoryActivity(`تم استرجاع الوحدة من الأرشيف: ${unit.code}`);
    saveInventoryData();
}

/**
 * Increment unit views
 */
function incrementUnitViews(unitId) {
    const unit = inventoryData.units.find(u => u.id === unitId);
    if (unit) {
        unit.views++;
        saveInventoryData();
    }
}

// ==================== SEARCH & FILTER ====================

/**
 * Advanced search with multiple criteria
 */
function searchUnits(criteria) {
    let results = inventoryData.units.filter(u => !u.archived);
    
    if (criteria.code) {
        results = results.filter(u => u.code.toString().includes(criteria.code));
    }
    
    if (criteria.type) {
        results = results.filter(u => u.type === criteria.type);
    }
    
    if (criteria.zone) {
        results = results.filter(u => u.zone?.toLowerCase().includes(criteria.zone.toLowerCase()));
    }
    
    if (criteria.status) {
        results = results.filter(u => u.status === criteria.status);
    }
    
    if (criteria.minPrice !== undefined) {
        results = results.filter(u => u.price >= criteria.minPrice);
    }
    
    if (criteria.maxPrice !== undefined) {
        results = results.filter(u => u.price <= criteria.maxPrice);
    }
    
    if (criteria.minSpace !== undefined) {
        results = results.filter(u => u.space >= criteria.minSpace);
    }
    
    if (criteria.maxSpace !== undefined) {
        results = results.filter(u => u.space <= criteria.maxSpace);
    }
    
    if (criteria.rooms) {
        results = results.filter(u => u.rooms === criteria.rooms);
    }
    
    if (criteria.featured) {
        results = results.filter(u => u.featured === criteria.featured);
    }
    
    if (criteria.assignedTo) {
        results = results.filter(u => u.assignedTo === criteria.assignedTo);
    }
    
    return results;
}

/**
 * Get units by status
 */
function getUnitsByStatus(status) {
    return inventoryData.units.filter(u => u.status === status && !u.archived);
}

/**
 * Get units by type
 */
function getUnitsByType(type) {
    return inventoryData.units.filter(u => u.type === type && !u.archived);
}

/**
 * Get units by zone
 */
function getUnitsByZone(zone) {
    return inventoryData.units.filter(u => u.zone === zone && !u.archived);
}

/**
 * Get featured units
 */
function getFeaturedUnits() {
    return inventoryData.units.filter(u => u.featured && !u.archived);
}

/**
 * Get recently added units
 */
function getRecentlyAddedUnits(days = 7) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return inventoryData.units.filter(u => 
        new Date(u.createdAt) > cutoffDate && !u.archived
    );
}

/**
 * Get most viewed units
 */
function getMostViewedUnits(limit = 10) {
    return inventoryData.units
        .filter(u => !u.archived)
        .sort((a, b) => b.views - a.views)
        .slice(0, limit);
}

// ==================== STATISTICS ====================

/**
 * Get inventory statistics
 */
function getInventoryStatistics() {
    const activeUnits = inventoryData.units.filter(u => !u.archived);
    const available = activeUnits.filter(u => u.status === UNIT_STATUS.AVAILABLE).length;
    const reserved = activeUnits.filter(u => u.status === UNIT_STATUS.RESERVED).length;
    const sold = activeUnits.filter(u => u.status === UNIT_STATUS.SOLD).length;
    
    const totalValue = activeUnits.reduce((sum, u) => sum + (u.price || 0), 0);
    const averagePrice = activeUnits.length === 0 ? 0 : Math.round(totalValue / activeUnits.length);
    
    return {
        total: activeUnits.length,
        available,
        reserved,
        sold,
        featured: activeUnits.filter(u => u.featured).length,
        totalValue,
        averagePrice,
        byType: {
            resale: activeUnits.filter(u => u.type === 'resale').length,
            rental: activeUnits.filter(u => u.type === 'rental').length,
            primary: activeUnits.filter(u => u.type === 'primary').length
        }
    };
}

/**
 * Get units by zone statistics
 */
function getUnitsByZoneStats() {
    const stats = {};
    const activeUnits = inventoryData.units.filter(u => !u.archived);
    
    activeUnits.forEach(unit => {
        if (!stats[unit.zone]) {
            stats[unit.zone] = { count: 0, value: 0 };
        }
        stats[unit.zone].count++;
        stats[unit.zone].value += unit.price || 0;
    });
    
    return stats;
}

/**
 * Get price distribution
 */
function getPriceDistribution() {
    const activeUnits = inventoryData.units.filter(u => !u.archived);
    const ranges = {
        '0-500000': 0,
        '500000-1000000': 0,
        '1000000-2000000': 0,
        '2000000-5000000': 0,
        '5000000+': 0
    };
    
    activeUnits.forEach(unit => {
        const price = unit.price || 0;
        if (price < 500000) ranges['0-500000']++;
        else if (price < 1000000) ranges['500000-1000000']++;
        else if (price < 2000000) ranges['1000000-2000000']++;
        else if (price < 5000000) ranges['2000000-5000000']++;
        else ranges['5000000+']++;
    });
    
    return ranges;
}

// ==================== ACTIVITY LOG ====================

/**
 * Log inventory activity
 */
function logInventoryActivity(description) {
    const activity = {
        id: Date.now(),
        description,
        createdBy: currentUser?.id || 'system',
        createdAt: new Date().toISOString()
    };
    
    inventoryData.activities.push(activity);
    saveInventoryData();
}

/**
 * Get activity log
 */
function getActivityLog(limit = 50) {
    return inventoryData.activities
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, limit);
}

// ==================== BULK OPERATIONS ====================

/**
 * Bulk update units
 */
function bulkUpdateUnits(unitIds, updates) {
    unitIds.forEach(unitId => {
        updateUnit(unitId, updates);
    });
}

/**
 * Bulk change status
 */
function bulkChangeStatus(unitIds, newStatus) {
    unitIds.forEach(unitId => {
        changeUnitStatus(unitId, newStatus);
    });
}

/**
 * Bulk archive units
 */
function bulkArchiveUnits(unitIds) {
    unitIds.forEach(unitId => {
        archiveUnit(unitId);
    });
}

// ==================== EXPORT & IMPORT ====================

/**
 * Export units to JSON
 */
function exportUnitsJSON() {
    const dataStr = JSON.stringify(inventoryData.units.filter(u => !u.archived), null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `inventory_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

/**
 * Export units to CSV
 */
function exportUnitsCSV() {
    const units = inventoryData.units.filter(u => !u.archived);
    let csv = 'الكود,النوع,المنطقة,الغرف,المساحة,المجموعة,السعر,الأقساط,الأوفر,الحالة,التاريخ\n';
    
    units.forEach(unit => {
        csv += `${unit.code},${unit.type},${unit.zone},${unit.rooms},${unit.space},${unit.category},${unit.price},${unit.installments},${unit.offer_price},${unit.status},${new Date(unit.createdAt).toLocaleDateString('ar-EG')}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `inventory_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

/**
 * Import units from JSON
 */
function importUnitsJSON(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            imported.forEach(unitData => {
                createUnit(unitData);
            });
            alert(`تم استيراد ${imported.length} وحدة بنجاح`);
            location.reload();
        } catch (error) {
            alert('خطأ في استيراد البيانات: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// ==================== DATA PERSISTENCE ====================

/**
 * Save inventory data to localStorage
 */
function saveInventoryData() {
    localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
}

/**
 * Get all units
 */
function getAllUnits() {
    return inventoryData.units.filter(u => !u.archived);
}

/**
 * Get archived units
 */
function getArchivedUnits() {
    return inventoryData.units.filter(u => u.archived);
}

/**
 * Clear all data (dangerous!)
 */
function clearAllInventoryData() {
    if (confirm('هل أنت متأكد؟ سيتم حذف جميع البيانات!')) {
        inventoryData = {
            units: [],
            activities: [],
            favorites: [],
            archives: []
        };
        saveInventoryData();
        alert('تم حذف جميع البيانات');
        location.reload();
    }
}

// ==================== INITIALIZATION ====================

// Initialize inventory system
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ نظام الإنفنتوري المتقدم جاهز');
    console.log(`📦 عدد الوحدات: ${getAllUnits().length}`);
