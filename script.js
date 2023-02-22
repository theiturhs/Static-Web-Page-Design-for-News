function closeNav(){
    document.getElementById("profileList").style.right = "-100%";
    document.getElementById("profileList").style.opacity = "0";
}
function openNav(){
    document.getElementById("profileList").style.right = "0";
    document.getElementById("profileList").style.opacity = "1";
}
function showleft(){
    document.getElementById("leftArrow").style.display = "block";
    document.getElementById("rightArrow").style.display = "none";
    document.getElementById("lists").style.width = "200px";
}
function showright(){
    document.getElementById("rightArrow").style.display = "block";
    document.getElementById("leftArrow").style.display = "none";
    document.getElementById("lists").style.width = "35px";
}