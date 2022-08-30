
var color = ["#C21010", "#E64848", "#FFFDE3", "#59CE8F", "#7F5283", "#DF7861",];


var i = 0;
document.querySelector("button").addEventListener("click", function() {
    
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]

});
