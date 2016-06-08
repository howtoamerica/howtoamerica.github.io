var text = $("h1").eq(0).text().substring(0, $("h1").eq(0).text().length - 3);
var interval = 1500;

setInterval(function() {
    $("h1").eq(0).text(text  + ".");
}, interval);

setTimeout(function() {
    setInterval(function() {
        $("h1").eq(0).text(text  + "..");
    }, interval);
}, interval / 3);

setTimeout(function() {
    setInterval(function() {
        $("h1").eq(0).text(text  + "...");
    }, interval);
}, interval * 2 / 3);

window.location.href = "https://howtoamerica.github.io/welcome";
