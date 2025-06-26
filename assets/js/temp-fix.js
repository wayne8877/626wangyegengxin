// 修复移除水平导航栏后的潜在问题
document.addEventListener('DOMContentLoaded', function() {
    // 防止因找不到horizontal-nav-item而导致的错误
    window.fixHorizontalNavError = function() {
        // 检查是否存在相关代码
        if (typeof window.loadNavigation === 'function') {
            // 备份原始函数
            const originalLoadNavigation = window.loadNavigation;
            
            // 覆盖函数
            window.loadNavigation = function() {
                try {
                    originalLoadNavigation();
                } catch (e) {
                    console.log('已处理导航栏相关错误');
                }
            };
        }
    };
    
    // 执行修复
    window.fixHorizontalNavError();
}); 