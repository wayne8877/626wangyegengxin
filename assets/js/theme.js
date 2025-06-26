// 更新主题UI
function updateThemeUI(theme) {
    // 强制设置为亮色主题
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark-mode');
    
    // 移除localStorage中的主题设置，防止下次加载时读取
    localStorage.removeItem('theme');
    localStorage.removeItem('selectedTheme');
}

// 初始化主题切换（已禁用，仅保留亮色）
export function initThemeSwitch() {
    // 强制使用亮色主题
    updateThemeUI('light');
    
    // 覆盖任何可能的切换逻辑
    const themeElements = document.querySelectorAll('.theme-switch, .theme-switch-wrapper');
    themeElements.forEach(el => {
        if(el) {
            el.style.display = 'none';
            // 移除事件监听器
            const newEl = el.cloneNode(true);
            if(el.parentNode) {
                el.parentNode.replaceChild(newEl, el);
            }
        }
    });
    
    // 监听DOM变化，确保data-theme不被修改为dark
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && 
                mutation.attributeName === 'data-theme' &&
                document.documentElement.getAttribute('data-theme') === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        });
    });
    
    observer.observe(document.documentElement, { attributes: true });
} 