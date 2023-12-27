window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("goTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

