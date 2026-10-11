// Scroll reveal for cards (adds a small stagger between siblings)
(function () {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('in'); });
        return;
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            var siblings = Array.prototype.filter.call(el.parentNode.children, function (c) {
                return c.classList.contains('reveal');
            });
            el.style.transitionDelay = (siblings.indexOf(el) % 4) * 90 + 'ms';
            el.classList.add('in');
            io.unobserve(el);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { io.observe(el); });
})();
