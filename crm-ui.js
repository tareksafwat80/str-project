// ==================== CRM UI FUNCTIONS ====================

/**
 * Initialize CRM dashboard
 */
function initializeCRMDashboard() {
    updateCRMDashboard();
    renderPipelineView();
}

/**
 * Update CRM dashboard statistics
 */
function updateCRMDashboard() {
    const stats = getCRMStatistics();
    
    document.getElementById('crmTotalLeads').textContent = stats.totalLeads;
    document.getElementById('crmHotLeads').textContent = stats.hotLeads;
    document.getElementById('crmConversionRate').textContent = stats.conversionRate + '%';
    document.getElementById('crmOverdueTasks').textContent = stats.overdueTasks;
}

/**
 * Render pipeline view with drag and drop
 */
function renderPipelineView() {
    const pipeline = getPipelineData();
    const pipelineContainer = document.getElementById('crmPipeline');
    
    if (!pipelineContainer) return;
    
    let html = '';
    
    Object.entries(pipeline).forEach(([stage, data]) => {
        html += `
            <div class="bg-gold-card border-2 border-black rounded-lg p-4 min-h-[400px]">
                <div class="flex justify-between items-center mb-4 pb-3 border-b-2 border-black">
                    <h4 class="font-bold text-black">${stage}</h4>
                    <span class="bg-black text-gold px-3 py-1 rounded-full text-sm font-bold">${data.count}</span>
                </div>
                <div class="space-y-2" id="pipeline-${stage.replace(/\\s+/g, '-')}">
        `;
        
        data.leads.forEach(lead => {
            const tempColor = lead.temperature === 'ساخن' ? '#FF6B6B' : 
                             lead.temperature === 'دافئ' ? '#FFA500' : '#808080';
            
            html += `
                <div class="bg-white border-2 border-black rounded p-3 cursor-move hover:shadow-lg transition" 
                     draggable="true" 
                     ondragstart="dragStart(event, ${lead.id})"
                     style="border-left: 4px solid ${tempColor};">
                    <p class="font-bold text-black text-sm">${lead.name}</p>
                    <p class="text-xs text-gray-600">${lead.phone}</p>
                    <p class="text-xs text-gray-500 mt-1">${lead.temperature}</p>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    pipelineContainer.innerHTML = html;
}

/**
 * Drag and drop functionality
 */
let draggedLeadId = null;

function dragStart(event, leadId) {
    draggedLeadId = leadId;
    event.dataTransfer.effectAllowed = 'move';
}

function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function drop(event, stage) {
    event.preventDefault();
    if (draggedLeadId) {
        const lead = crmData.leads.find(l => l.id === draggedLeadId);
        if (lead) {
            lead.stage = stage;
            logActivity(draggedLeadId, `تم نقل الليد إلى: ${stage}`);
            saveCRMData();
            renderPipelineView();
        }
    }
}

/**
 * Open lead details modal
 */
function openLeadDetailsModal(leadId) {
    const lead = crmData.leads.find(l => l.id === leadId);
    if (!lead) return;
    
    const modal = document.createElement('div');
    modal.id = 'leadDetailsModal';
    modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:9999;';
    
    const activities = getLeadActivities(leadId);
    const notes = getLeadNotes(leadId);
    const tasks = getLeadTasks(leadId);
    
    modal.innerHTML = `
        <div style="background:#1a1a1a; color:#fff; padding:20px; border-radius:8px; max-width:800px; width:90%; max-height:80vh; overflow-y:auto; border:2px solid #d4af37;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:2px solid #d4af37; padding-bottom:10px;">
                <h2 style="color:#d4af37; margin:0;">${lead.name}</h2>
                <button onclick="closeLeadDetailsModal()" style="background:#FF0000; color:#fff; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:bold;">إغلاق</button>
            </div>
            
            <!-- Lead Info -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:20px;">
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">الهاتف:</p>
                    <p>${lead.phone}</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">البريد:</p>
                    <p>${lead.email}</p>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">المرحلة:</p>
                    <select onchange="updateLead(${leadId}, {stage: this.value}); renderPipelineView();" style="background:#333; color:#fff; border:1px solid #d4af37; padding:5px; border-radius:3px;">
                        <option value="جديد" ${lead.stage === 'جديد' ? 'selected' : ''}>جديد</option>
                        <option value="متابعة" ${lead.stage === 'متابعة' ? 'selected' : ''}>متابعة</option>
                        <option value="مهتم" ${lead.stage === 'مهتم' ? 'selected' : ''}>مهتم</option>
                        <option value="تحت المراجعة" ${lead.stage === 'تحت المراجعة' ? 'selected' : ''}>تحت المراجعة</option>
                        <option value="مغلق" ${lead.stage === 'مغلق' ? 'selected' : ''}>مغلق</option>
                    </select>
                </div>
                <div>
                    <p style="color:#d4af37; font-weight:bold; margin-bottom:5px;">درجة الحرارة:</p>
                    <select onchange="updateLeadTemperature(${leadId}, this.value); renderPipelineView();" style="background:#333; color:#fff; border:1px solid #d4af37; padding:5px; border-radius:3px;">
                        <option value="ساخن" ${lead.temperature === 'ساخن' ? 'selected' : ''}>ساخن</option>
                        <option value="دافئ" ${lead.temperature === 'دافئ' ? 'selected' : ''}>دافئ</option>
                        <option value="بارد" ${lead.temperature === 'بارد' ? 'selected' : ''}>بارد</option>
                    </select>
                </div>
            </div>
            
            <!-- Activities -->
            <div style="margin-bottom:20px; border-top:2px solid #d4af37; padding-top:15px;">
                <h3 style="color:#d4af37; margin-bottom:10px;">سجل الأنشطة</h3>
                <div style="max-height:200px; overflow-y:auto; background:#333; padding:10px; border-radius:4px;">
                    ${activities.length === 0 ? '<p style="color:#999;">لا توجد أنشطة</p>' : ''}
                    ${activities.map(a => `
                        <div style="padding:8px; border-bottom:1px solid #555; font-size:12px;">
                            <p style="color:#d4af37; margin:0;">${a.description}</p>
                            <p style="color:#999; margin:5px 0 0 0; font-size:11px;">${new Date(a.createdAt).toLocaleString('ar-EG')}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Notes -->
            <div style="margin-bottom:20px; border-top:2px solid #d4af37; padding-top:15px;">
                <h3 style="color:#d4af37; margin-bottom:10px;">الملاحظات</h3>
                <textarea id="newNote" placeholder="أضف ملاحظة جديدة..." style="width:100%; padding:8px; background:#333; color:#fff; border:1px solid #d4af37; border-radius:4px; min-height:60px; margin-bottom:10px;"></textarea>
                <button onclick="addLeadNote(${leadId}, document.getElementById('newNote').value); document.getElementById('newNote').value=''; openLeadDetailsModal(${leadId});" style="background:#d4af37; color:#000; padding:8px 16px; border:none; border-radius:4px; cursor:pointer; font-weight:bold;">إضافة ملاحظة</button>
                <div style="max-height:150px; overflow-y:auto; background:#333; padding:10px; border-radius:4px; margin-top:10px;">
                    ${notes.length === 0 ? '<p style="color:#999;">لا توجد ملاحظات</p>' : ''}
                    ${notes.map(n => `
                        <div style="padding:8px; border-bottom:1px solid #555; font-size:12px;">
                            <p style="margin:0;">${n.text}</p>
                            <p style="color:#999; margin:5px 0 0 0; font-size:11px;">${new Date(n.createdAt).toLocaleString('ar-EG')}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Tasks -->
            <div style="border-top:2px solid #d4af37; padding-top:15px;">
                <h3 style="color:#d4af37; margin-bottom:10px;">المهام</h3>
                <div style="max-height:150px; overflow-y:auto; background:#333; padding:10px; border-radius:4px;">
                    ${tasks.length === 0 ? '<p style="color:#999;">لا توجد مهام</p>' : ''}
                    ${tasks.map(t => `
                        <div style="padding:8px; border-bottom:1px solid #555; font-size:12px;">
                            <input type="checkbox" onchange="completeTask(${t.id}); openLeadDetailsModal(${leadId});" style="margin-left:5px;">
                            <span>${t.title}</span>
                            <p style="color:#999; margin:5px 0 0 0; font-size:11px;">الموعد: ${new Date(t.dueDate).toLocaleDateString('ar-EG')}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

/**
 * Close lead details modal
 */
function closeLeadDetailsModal() {
    const modal = document.getElementById('leadDetailsModal');
    if (modal) modal.remove();
}

/**
 * Render CRM leads list
 */
function renderCRMLeadsList(page = 1) {
    const itemsPerPage = 40;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    const leads = crmData.leads.filter(l => !l.archived).slice(start, end);
    
    let html = '<table style="width:100%; border-collapse:collapse; font-size:12px;">';
    html += '<tr style="background:#d4af37; color:#000; font-weight:bold;"><th style="padding:8px; text-align:right;">الاسم</th><th style="padding:8px; text-align:right;">الهاتف</th><th style="padding:8px; text-align:right;">المرحلة</th><th style="padding:8px; text-align:right;">درجة الحرارة</th><th style="padding:8px; text-align:right;">الأولوية</th><th style="padding:8px; text-align:right;">آخر تواصل</th><th style="padding:8px; text-align:right;">الإجراءات</th></tr>';
    
    leads.forEach(lead => {
        const lastContact = lead.lastContactDate ? new Date(lead.lastContactDate).toLocaleDateString('ar-EG') : '--';
        const tempColor = lead.temperature === 'ساخن' ? '#FF6B6B' : lead.temperature === 'دافئ' ? '#FFA500' : '#808080';
        
        html += `<tr style="border:1px solid #ddd;">
            <td style="padding:8px;">${lead.name}</td>
            <td style="padding:8px;">${lead.phone}</td>
            <td style="padding:8px;">${lead.stage}</td>
            <td style="padding:8px; color:${tempColor}; font-weight:bold;">${lead.temperature}</td>
            <td style="padding:8px;">${lead.priority}</td>
            <td style="padding:8px;">${lastContact}</td>
            <td style="padding:8px;">
                <button onclick="openLeadDetailsModal(${lead.id})" style="background:#d4af37; color:#000; padding:4px 8px; margin:2px; border:none; border-radius:3px; cursor:pointer; font-weight:bold; font-size:11px;">تفاصيل</button>
                <button onclick="archiveLead(${lead.id}); renderCRMLeadsList(1);" style="background:#FF9800; color:#fff; padding:4px 8px; margin:2px; border:none; border-radius:3px; cursor:pointer; font-weight:bold; font-size:11px;">أرشيف</button>
            </td>
        </tr>`;
    });
    
    html += '</table>';
    
    // Add pagination
    const totalPages = Math.ceil(crmData.leads.filter(l => !l.archived).length / itemsPerPage);
    html += '<div style="margin-top:20px; text-align:center;">';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="renderCRMLeadsList(${i})" style="margin:5px; ${i === page ? 'background:#d4af37;' : ''}">${i}</button>`;
    }
    html += '</div>';
    
    const container = document.getElementById('crmLeadsListContainer');
    if (container) container.innerHTML = html;
}

/**
 * Show CRM tab
 */
function showCRMTab() {
    initializeCRMDashboard();
    renderCRMLeadsList(1);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ واجهة CRM جاهزة');
});
