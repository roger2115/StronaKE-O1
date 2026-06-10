/**
 * UI Module - Navigation & View Management
 */

const UIModule = (() => {
    /**
     * Switch between views
     */
    const showView = (viewId) => {
        console.log('Switching to view:', viewId);
        
        document.querySelectorAll('.view').forEach(v => {
            v.classList.remove('active');
            v.style.display = 'none';
        });
        
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.add('active');
            targetView.style.display = 'block';
            targetView.style.opacity = '1';
            targetView.style.visibility = 'visible';
            
            console.log('View displayed:', viewId);
            
            // Instant scroll to top (no animation)
            window.scrollTo({ top: 0, behavior: 'auto' });
        } else {
            console.error('View not found:', viewId);
        }
    };

    /**
     * Open modal dialog
     */
    const openModal = (id) => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.showModal();
        }
    };

    /**
     * Close modal dialog
     */
    const closeModal = (id) => {
        const modal = document.getElementById(id);
        if (modal) {
            modal.close();
        }
    };

    return {
        showView,
        openModal,
        closeModal
    };
})();

// Expose to global scope
window.showView = UIModule.showView;
window.openModal = UIModule.openModal;
window.closeModal = UIModule.closeModal;
