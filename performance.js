/ ==================== PERFORMANCE OPTIMIZATION UTILITIES ====================

/**
 * Debounce function - delays execution until user stops typing
 * Reduces number of render calls during search/filter
 */
function debounce(func, delay = 300) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function - limits execution frequency
 * Useful for scroll events and resize handlers
 */
function throttle(func, limit = 300) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Cache for expensive computations
 * Stores results to avoid recalculation
 */
class ComputationCache {
    constructor(maxSize = 100) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }

    set(key, value) {
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }

    get(key) {
        return this.cache.get(key);
    }

    has(key) {
        return this.cache.has(key);
    }

    clear() {
        this.cache.clear();
    }
}

// Global cache instance
const filterCache = new ComputationCache(50);

/**
 * Lazy load images - improves initial page load
 * Images load only when they come into viewport
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Batch DOM updates - groups multiple DOM changes
 * Reduces reflows and repaints
 */
function batchDOMUpdate(callback) {
    requestAnimationFrame(() => {
        callback();
    });
}

/**
 * Virtual scrolling helper - renders only visible items
 * Improves performance with large lists
 */
class VirtualScroller {
    constructor(container, items, itemHeight, renderItem) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.renderItem = renderItem;
        this.visibleRange = { start: 0, end: 10 };
        
        this.container.addEventListener('scroll', throttle(() => this.onScroll(), 100));
    }

    onScroll() {
        const scrollTop = this.container.scrollTop;
        const start = Math.floor(scrollTop / this.itemHeight);
        const end = start + Math.ceil(this.container.clientHeight / this.itemHeight);
        
        if (start !== this.visibleRange.start || end !== this.visibleRange.end) {
            this.visibleRange = { start, end };
            this.render();
        }
    }

    render() {
        const fragment = document.createDocumentFragment();
        const { start, end } = this.visibleRange;
        
        for (let i = start; i < Math.min(end, this.items.length); i++) {
            const item = this.renderItem(this.items[i], i);
            fragment.appendChild(item);
        }
        
        this.container.innerHTML = '';
        this.container.appendChild(fragment);
    }
}

/**
 * Memory-efficient data filtering with caching
 */
function cachedFilter(items, filterFn, cacheKey) {
    if (filterCache.has(cacheKey)) {
        return filterCache.get(cacheKey);
    }
    
    const result = items.filter(filterFn);
    filterCache.set(cacheKey, result);
    return result;
}

/**
 * Efficient pagination calculator
 */
function getPaginationData(items, page, itemsPerPage) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);
    
    return { totalPages, pageItems, start, end };
}

/**
 * Generate pagination HTML efficiently
 */
function generatePaginationHTML(currentPage, totalPages, onPageClick) {
    if (totalPages <= 1) return '';
    
    let html = '<div class="flex justify-center gap-2 mt-4 flex-wrap">';
    
    // Previous button
    if (currentPage > 1) {
        html += `<button onclick="${onPageClick}(${currentPage - 1})" class="px-3 py-2 rounded bg-gold text-black">السابق</button>`;
    }
    
    // Page numbers (show max 5 pages)
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        html += `<button onclick="${onPageClick}(1)" class="px-3 py-2 rounded bg-gray-700 text-white">1</button>`;
        if (startPage > 2) html += '<span class="px-2">...</span>';
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `<button onclick="${onPageClick}(${i})" class="px-3 py-2 rounded ${i === currentPage ? 'bg-gold text-black' : 'bg-gray-700 text-white'}">${i}</button>`;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) html += '<span class="px-2">...</span>';
        html += `<button onclick="${onPageClick}(${totalPages})" class="px-3 py-2 rounded bg-gray-700 text-white">${totalPages}</button>`;
    }
    
    // Next button
    if (currentPage < totalPages) {
        html += `<button onclick="${onPageClick}(${currentPage + 1})" class="px-3 py-2 rounded bg-gold text-black">التالي</button>`;
    }
    
    html += '</div>';
    return html;
}

/**
 * Efficient table rendering with HTML fragments
 */
function renderTableRows(items, columns, rowRenderer) {
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gold/20 hover:bg-black/50';
        row.innerHTML = rowRenderer(item);
        fragment.appendChild(row);
    });
    
    return fragment;
}

/**
 * Data loading with proper error handling and caching
 */
async function loadDataWithCache(url, cacheKey, cacheDuration = 3600000) {
    // Check localStorage cache
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < cacheDuration) {
            return data;
        }
    }
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        
        // Cache the data
        localStorage.setItem(cacheKey, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
        
        return data;
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
        // Return cached data even if expired
        if (cached) {
            return JSON.parse(cached).data;
        }
        throw error;
    }
}

/**
 * Initialize performance monitoring
 */
function initPerformanceMonitoring() {
    if (window.performance && window.performance.mark) {
        // Mark page load start
        window.performance.mark('page-load-start');
        
        window.addEventListener('load', () => {
            window.performance.mark('page-load-end');
            window.performance.measure('page-load', 'page-load-start', 'page-load-end');
            
            const measure = window.performance.getEntriesByName('page-load')[0];
            console.log(`⏱️ Page load time: ${measure.duration.toFixed(2)}ms`);
        });
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        ComputationCache,
        initLazyLoading,
        batchDOMUpdate,
        VirtualScroller,
        cachedFilter,
        getPaginationData,
        generatePaginationHTML,
        renderTableRows,
        loadDataWithCache,
        initPerformanceMonitoring
    };
}
