// script.js
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// 自动显示公告
window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
