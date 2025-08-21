(function() {
    'use strict';
    
    // Check if disclaimer has already been shown in this session
    if (sessionStorage.getItem('akin-demo-disclaimer-shown')) {
        return;
    }
    
    // Create modal HTML
    const modalHTML = `
        <div id="akin-disclaimer-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
            <div style="
                background: white;
                padding: 2rem;
                border-radius: 12px;
                max-width: 500px;
                margin: 1rem;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                text-align: center;
            ">
                <h2 style="
                    color: #d63384;
                    margin-top: 0;
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                ">⚠️ Demo Page Disclaimer</h2>
                
                <p style="
                    color: #333;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    text-align: left;
                ">
                    This page is a <strong>demo page</strong> and is by no way associated with the brand it represents.
                </p>
                
                <p style="
                    color: #333;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    text-align: left;
                ">
                    The page is for <strong>demonstration purposes only</strong> and will be deleted after the potential partner has viewed the demo.
                </p>
                
                <p style="
                    color: #333;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    text-align: left;
                ">
                    Please contact us right away if there are any legal concerns: 
                    <a href="mailto:hello@akin.pub" style="color: #007bff; text-decoration: none;">hello@akin.pub</a>
                </p>
                
                <button id="akin-disclaimer-close" style="
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    font-size: 1rem;
                    cursor: pointer;
                    font-weight: 500;
                ">I Understand</button>
            </div>
        </div>
    `;
    
    // Add modal to page when DOM is ready
    function showDisclaimer() {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add close functionality
        const closeBtn = document.getElementById('akin-disclaimer-close');
        const modal = document.getElementById('akin-disclaimer-modal');
        
        closeBtn.addEventListener('click', function() {
            modal.remove();
            sessionStorage.setItem('akin-demo-disclaimer-shown', 'true');
        });
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
                sessionStorage.setItem('akin-demo-disclaimer-shown', 'true');
            }
        });
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('akin-disclaimer-modal')) {
                modal.remove();
                sessionStorage.setItem('akin-demo-disclaimer-shown', 'true');
            }
        });
    }
    
    // Show disclaimer when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showDisclaimer);
    } else {
        showDisclaimer();
    }
})();
