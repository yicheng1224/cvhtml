document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const feedbackSection = document.querySelector('.feedback-section');
    const feedbackHeader = document.querySelector('.feedback-header');
    const feedbackForm = document.querySelector('.feedback-form');
    const sectionHeaders = document.querySelectorAll('h2');
    
    // 切换段落内容显示/隐藏
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const list = this.nextElementSibling;
            if (list.style.maxHeight) {
                list.style.maxHeight = null;
            } else {
                list.style.maxHeight = list.scrollHeight + "px";
            }
        });
    });

    // 返回顶部功能
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 显示或隐藏返回顶部按钮
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // 调整返回顶部按钮位置
    function adjustBackToTopButton() {
        const feedbackHeight = feedbackSection.offsetHeight || 40; // 最小反馈区高度
        backToTopBtn.style.bottom = feedbackHeight + 20 + 'px';
    }

    // 反馈表单展开/折叠功能
    feedbackHeader.addEventListener('click', function () {
        const isFormVisible = feedbackForm.style.display === 'block';
        feedbackForm.style.display = isFormVisible ? 'none' : 'block';
        feedbackSection.style.height = isFormVisible ? '40px' : (feedbackForm.scrollHeight + 40) + 'px';
        adjustBackToTopButton();
    });


    // 初始化
    adjustBackToTopButton();
    window.addEventListener('resize', adjustBackToTopButton);

    // 返回顶部按钮点击事件
    backToTopBtn.addEventListener('click', scrollToTop);

    

    

});


function confirmRedirect(link) {
    // 弹出警告框
    alert("您即將跳轉到其他網頁！");
    // 弹出确认框
    const userConfirmed = confirm("是否確定跳轉到此網頁？");
    if (userConfirmed) {
        // 如果用户确认，则跳转
        window.location.href = link.href;
        return true; // 确认跳转
    }
    // 阻止默认跳转行为
    return false; // 不跳转
}
