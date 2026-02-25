// ==================== ADVANCED CRM SYSTEM ====================

// CRM Data Structure
let crmData = JSON.parse(localStorage.getItem('crmData')) || {
    leads: [],
    activities: [],
    tasks: [],
    pipelines: [],
    notes: []
};

// Lead Stages (مراحل البيع)
const LEAD_STAGES = {
    NEW: 'جديد',
    FOLLOW_UP: 'متابعة',
    INTERESTED: 'مهتم',
    REVIEW: 'تحت المراجعة',
    CLOSED: 'مغلق'
};

// Lead Temperature (درجة الحرارة)
const LEAD_TEMPERATURE = {
    HOT: 'ساخن',
    WARM: 'دافئ',
    COLD: 'بارد'
};

// Lead Priority
const LEAD_PRIORITY = {
    HIGH: 'عالية',
    MEDIUM: 'متوسطة',
    LOW: 'منخفضة'
};

// Lead Status
const LEAD_STATUS = {
    NEW: 'جديد',
    CONTACTED: 'متصل به',
    INTERESTED: 'مهتم',
    NOT_INTERESTED: 'غير مهتم',
    PENDING: 'معلق',
    CLOSED: 'مغلق'
};

// ==================== LEAD MANAGEMENT ====================

/**
 * Create a new lead with all required fields
 */
function createLead(leadData) {
    const newLead = {
        id: Date.now(),
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email,
        source: leadData.source || 'موقع',
        stage: leadData.stage || LEAD_STAGES.NEW,
        temperature: leadData.temperature || LEAD_TEMPERATURE.COLD,
        priority: leadData.priority || LEAD_PRIORITY.MEDIUM,
        status: leadData.status || LEAD_STATUS.NEW,
        assignedTo: leadData.assignedTo || null,
        relatedUnit: leadData.relatedUnit || null,
        lastContactDate: null,
        nextFollowUpDate: leadData.nextFollowUpDate || null,
        notes: [],
        activities: [],
        tasks: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        featured: false,
        archived: false
    };
    
    crmData.leads.push(newLead);
    saveCRMData();
    return newLead;
}

/**
 * Update lead information
 */
function updateLead(leadId, updates) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return null;
    
    Object.assign(lead, updates);
    lead.updatedAt = new Date().toISOString();
    
    saveCRMData();
    return lead;
}

/**
 * Move lead to next stage in pipeline
 */
function moveLeadToNextStage(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return;
    
    const stages = Object.values(LEAD_STAGES);
    const currentIndex = stages.indexOf(lead.stage);
    
    if (currentIndex < stages.length - 1) {
        lead.stage = stages[currentIndex + 1];
        lead.updatedAt = new Date().toISOString();
        
        // Log activity
        logActivity(leadId, `تم نقل الليد إلى مرحلة: ${lead.stage}`);
        
        saveCRMData();
    }
}

/**
 * Update lead temperature (Hot/Warm/Cold)
 */
function updateLeadTemperature(leadId, temperature) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return;
    
    lead.temperature = temperature;
    lead.updatedAt = new Date().toISOString();
    
    logActivity(leadId, `تم تحديث درجة الحرارة إلى: ${temperature}`);
    saveCRMData();
}

/**
 * Get leads by stage (for pipeline view)
 */
function getLeadsByStage(stage) {
    return crmData.leads.filter(l => l.stage === stage && !l.archived);
}

/**
 * Get leads assigned to employee
 */
function getEmployeeLeads(employeeId) {
    return crmData.leads.filter(l => l.assignedTo === employeeId && !l.archived);
}

/**
 * Get overdue follow-ups
 */
function getOverdueFollowUps() {
    const now = new Date();
    return crmData.leads.filter(l => 
        l.nextFollowUpDate && 
        new Date(l.nextFollowUpDate) < now && 
        !l.archived
    );
}

// ==================== ACTIVITY LOG ====================

/**
 * Log an activity for a lead
 */
function logActivity(leadId, description, type = 'general') {
    const activity = {
        id: Date.now(),
        leadId,
        description,
        type, // 'contact', 'note', 'stage_change', 'general'
        createdBy: currentUser?.id || 'system',
        createdAt: new Date().toISOString()
    };
    
    crmData.activities.push(activity);
    
    const lead = crmData.leads.find(l => l.id === leadId);
    if (lead) {
        lead.activities.push(activity.id);
        lead.lastContactDate = new Date().toISOString();
    }
    
    saveCRMData();
    return activity;
}

/**
 * Get activity log for a lead
 */
function getLeadActivities(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return [];
    
    return crmData.activities.filter(a => lead.activities.includes(a.id));
}

// ==================== NOTES & COMMENTS ====================

/**
 * Add a note to a lead
 */
function addLeadNote(leadId, noteText) {
    const note = {
        id: Date.now(),
        leadId,
        text: noteText,
        createdBy: currentUser?.id || 'system',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    crmData.notes.push(note);
    
    const lead = crmData.leads.find(l => l.id === leadId);
    if (lead) {
        lead.notes.push(note.id);
    }
    
    logActivity(leadId, `تم إضافة ملاحظة: ${noteText.substring(0, 50)}...`);
    saveCRMData();
    return note;
}

/**
 * Get notes for a lead
 */
function getLeadNotes(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return [];
    
    return crmData.notes.filter(n => lead.notes.includes(n.id));
}

// ==================== TASKS ====================

/**
 * Create a task for a lead
 */
function createTask(leadId, title, dueDate, priority = LEAD_PRIORITY.MEDIUM) {
    const task = {
        id: Date.now(),
        leadId,
        title,
        dueDate,
        priority,
        completed: false,
        createdBy: currentUser?.id || 'system',
        createdAt: new Date().toISOString()
    };
    
    crmData.tasks.push(task);
    
    const lead = crmData.leads.find(l => l.id === leadId);
    if (lead) {
        lead.tasks.push(task.id);
    }
    
    saveCRMData();
    return task;
}

/**
 * Complete a task
 */
function completeTask(taskId) {
    const task = crmData.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    task.completed = true;
    
    logActivity(task.leadId, `تم إكمال المهمة: ${task.title}`);
    saveCRMData();
}

/**
 * Get pending tasks for a lead
 */
function getLeadTasks(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return [];
    
    return crmData.tasks.filter(t => lead.tasks.includes(t.id) && !t.completed);
}

/**
 * Get overdue tasks
 */
function getOverdueTasks() {
    const now = new Date();
    return crmData.tasks.filter(t => 
        new Date(t.dueDate) < now && 
        !t.completed
    );
}

// ==================== PIPELINE VIEW ====================

/**
 * Get pipeline data for visualization
 */
function getPipelineData() {
    const pipeline = {};
    
    Object.entries(LEAD_STAGES).forEach(([key, stage]) => {
        const leads = getLeadsByStage(stage);
        pipeline[stage] = {
            count: leads.length,
            leads: leads,
            value: leads.reduce((sum, lead) => {
                const unit = units.find(u => u.id === lead.relatedUnit);
                return sum + (unit?.price || 0);
            }, 0)
        };
    });
    
    return pipeline;
}

// ==================== STATISTICS ====================

/**
 * Get conversion rate
 */
function getConversionRate() {
    const totalLeads = crmData.leads.filter(l => !l.archived).length;
    const closedLeads = crmData.leads.filter(l => l.stage === LEAD_STAGES.CLOSED && !l.archived).length;
    
    return totalLeads === 0 ? 0 : ((closedLeads / totalLeads) * 100).toFixed(2);
}

/**
 * Get employee performance
 */
function getEmployeePerformance(employeeId) {
    const employeeLeads = getEmployeeLeads(employeeId);
    const closedLeads = employeeLeads.filter(l => l.stage === LEAD_STAGES.CLOSED);
    
    return {
        totalLeads: employeeLeads.length,
        closedLeads: closedLeads.length,
        conversionRate: employeeLeads.length === 0 ? 0 : ((closedLeads.length / employeeLeads.length) * 100).toFixed(2),
        hotLeads: employeeLeads.filter(l => l.temperature === LEAD_TEMPERATURE.HOT).length,
        warmLeads: employeeLeads.filter(l => l.temperature === LEAD_TEMPERATURE.WARM).length,
        coldLeads: employeeLeads.filter(l => l.temperature === LEAD_TEMPERATURE.COLD).length
    };
}

/**
 * Get CRM statistics
 */
function getCRMStatistics() {
    const totalLeads = crmData.leads.filter(l => !l.archived).length;
    const newLeads = crmData.leads.filter(l => l.stage === LEAD_STAGES.NEW && !l.archived).length;
    const hotLeads = crmData.leads.filter(l => l.temperature === LEAD_TEMPERATURE.HOT && !l.archived).length;
    const closedLeads = crmData.leads.filter(l => l.stage === LEAD_STAGES.CLOSED && !l.archived).length;
    const overdueTasks = getOverdueTasks().length;
    const overdueFollowUps = getOverdueFollowUps().length;
    
    return {
        totalLeads,
        newLeads,
        hotLeads,
        closedLeads,
        conversionRate: getConversionRate(),
        overdueTasks,
        overdueFollowUps,
        avgTimeToClose: calculateAverageTimeToClose()
    };
}

/**
 * Calculate average time to close a lead
 */
function calculateAverageTimeToClose() {
    const closedLeads = crmData.leads.filter(l => l.stage === LEAD_STAGES.CLOSED);
    
    if (closedLeads.length === 0) return 0;
    
    const totalTime = closedLeads.reduce((sum, lead) => {
        const created = new Date(lead.createdAt);
        const updated = new Date(lead.updatedAt);
        return sum + (updated - created);
    }, 0);
    
    const avgMilliseconds = totalTime / closedLeads.length;
    const avgDays = Math.round(avgMilliseconds / (1000 * 60 * 60 * 24));
    
    return avgDays;
}

// ==================== SEARCH & FILTER ====================

/**
 * Search leads with multiple criteria
 */
function searchLeads(criteria) {
    let results = crmData.leads.filter(l => !l.archived);
    
    if (criteria.name) {
        results = results.filter(l => l.name.toLowerCase().includes(criteria.name.toLowerCase()));
    }
    
    if (criteria.phone) {
        results = results.filter(l => l.phone.includes(criteria.phone));
    }
    
    if (criteria.stage) {
        results = results.filter(l => l.stage === criteria.stage);
    }
    
    if (criteria.temperature) {
        results = results.filter(l => l.temperature === criteria.temperature);
    }
    
    if (criteria.priority) {
        results = results.filter(l => l.priority === criteria.priority);
    }
    
    if (criteria.assignedTo) {
        results = results.filter(l => l.assignedTo === criteria.assignedTo);
    }
    
    if (criteria.status) {
        results = results.filter(l => l.status === criteria.status);
    }
    
    return results;
}

// ==================== ARCHIVE & DELETE ====================

/**
 * Archive a lead (soft delete)
 */
function archiveLead(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return;
    
    lead.archived = true;
    logActivity(leadId, 'تم أرشفة الليد');
    saveCRMData();
}

/**
 * Restore archived lead
 */
function restoreArchivedLead(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return;
    
    lead.archived = false;
    logActivity(leadId, 'تم استرجاع الليد من الأرشيف');
    saveCRMData();
}

/**
 * Get archived leads
 */
function getArchivedLeads() {
    return crmData.leads.filter(l => l.archived);
}

// ==================== DATA PERSISTENCE ====================

/**
 * Save CRM data to localStorage
 */
function saveCRMData() {
    localStorage.setItem('crmData', JSON.stringify(crmData));
}

/**
 * Export CRM data
 */
function exportCRMData() {
    const dataStr = JSON.stringify(crmData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `crm_data_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

/**
 * Import CRM data
 */
function importCRMData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            crmData = imported;
            saveCRMData();
            alert('تم استيراد البيانات بنجاح');
            location.reload();
        } catch (error) {
            alert('خطأ في استيراد البيانات: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// ==================== INITIALIZATION ====================

// Initialize CRM data on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ نظام CRM متقدم جاهز');
    console.log(`📊 عدد الليدز: ${crmData.leads.length}`);
});
