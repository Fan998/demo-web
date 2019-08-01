function openCity(evt, cityName) {
    var i, Content, tablinks;
    Content = document.getElementsByClassName("Content");
    for (i = 0; i < Content.length; i++) {
        Content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}