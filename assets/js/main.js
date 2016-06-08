$(".list-group-item:not([id=active])").hover(function() {
    var self = this;
    $(self).css("background", "linear-gradient(135deg, #f00 0.75%, #fff 0.75%, #fff 1.5%, #00f 1.5%, #00f 2.25%, #fff 2.25%)");
    
    var count = 1;
    var time = 42; // The answer to life, the universe and everything.
    window.interval = setInterval(function() {
        $(self).css({background: "linear-gradient(135deg, #f00 " + 0.75 * count/time*10 + "%, #fff " + 0.75 * count/time*10 + "%, #fff " + 1.5 * count/time*10 + "%, #00f " + 1.5 * count/time*10 + "%, #00f " + 2.25 * count/time*10 + "%, #fff " + 2.25 * count/time*10 + "%)", "padding-left": 25 + count/time*20 + "px"});
        
        if (count < time)
            ++count;
        else
            clearInterval(window.interval);
    }, 0);
}, function() {
    clearInterval(window.interval);
    $(this).css({background: "", "padding-left": ""});
});
