/* Language switcher — English default, French / Italian toggle */
(function () {
    function applyLang(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-fr]').forEach(function (el) {
            var txt = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-' + lang);
            if (txt === null) txt = el.getAttribute('data-en');
            if (txt !== null) el.textContent = txt;
        });

        document.querySelectorAll('[data-fr-html]').forEach(function (el) {
            var html = lang === 'en' ? el.getAttribute('data-en-html') : el.getAttribute('data-' + lang + '-html');
            if (html === null) html = el.getAttribute('data-en-html');
            if (html !== null) el.innerHTML = html;
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('portfolioLang', lang);
    }

    window.switchLang = function (lang) { applyLang(lang); };

    document.addEventListener('DOMContentLoaded', function () {
        /* Cache original EN text for elements that only have data-fr */
        document.querySelectorAll('[data-fr]').forEach(function (el) {
            if (!el.hasAttribute('data-en')) {
                el.setAttribute('data-en', el.textContent.trim());
            }
        });
        var lang = localStorage.getItem('portfolioLang') || 'en';
        applyLang(lang);
    });
})();
