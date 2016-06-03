function autoType(string, element, intervalNormal, intervalBreak, intervalStop, intervalAtEnd, callback) {
    var i = 0;
    var interval = intervalNormal;
    var done = false;
    var autoTypeInterval = function() {
        var skipAppend = false;
        var skipInterval = false;
        
        switch (string.charAt(i)) {
            case ",":
            case ";":
            case ":":
                interval = intervalBreak;
                break;
            case ".":
            case "?":
            case "!":
                if (string.charAt(i+1) === ")") {
                    element.innerHTML += string.charAt(i);
                    setTimeout(function() {
                        element.innerHTML += ")";
                    }, interval);
                    
                    skipAppend = true;
                    ++i;
                    interval = intervalStop;
                    break;
                }
                
                if (!(string.charAt(i+1) === "." || string.charAt(i+1) === "?" || string.charAt(i+1) === "!")) {
                    interval = intervalStop;
                    break;
                }
            case "\\":
                if (string.charAt(i+1) === "n") {
                    element.appendChild(document.createElement("br"));
                    skipAppend = true;
                    skipInterval = true;
                    ++i;
                    break;
                }
            default:
                interval = intervalNormal;
        }
        
        if (!skipAppend)
            element.innerHTML += string.charAt(i);
        
        if (i >= string.length - 1) {
            done = true;
            
            if (intervalAtEnd)
                setTimeout(function() {
                    if (callback)
                        callback();
                }, interval);
            else if (callback)
                callback();
        } else
            ++i;
        
        if (skipInterval)
            typer = setTimeout(autoTypeInterval, 0);
        else if (!done)
            typer = setTimeout(autoTypeInterval, interval);
    };
    var typer = setTimeout(autoTypeInterval, interval);
}

$("#start").click(function() {
    $(this).off("click").fadeOut(500, function() {
        setTimeout(function() {
            autoType("Really? That's the best you can do? You're given a huge red button, and all you can think of to do is make it fade away?\\n\\nThis is America, you know better than that! We need some explosions! Where's Michael Bay?!\\n\\nHere, you get a second chance.", $(".auto-type")[0], 75, 250, 500, true, function() {
                $(".auto-type").fadeOut(500);
                $("#start").css("top", "-275px").show().animate({top: "45%"}, 500, function() {
                    $(this).effect("bounce", {times: 3}, 1500, function() {
                        $(this).click(function() {
                            $(this).off("click").animate({height: "+=1000px", width: "+=1000px"}, 200).fadeOut(10);
                            $(".explosion").show();
                            setTimeout(function() {
                                $(".explosion").fadeOut(1000, function() {
                                    if ($(this).is(":nth-child(7)"))
                                        setTimeout(function() {
                                            $(".auto-type").text("");
                                            $(".auto-type").show();
                                            autoType("Great, you're catching on! Here's a reward.", $(".auto-type")[0], 75, 250, 500, true, function() {
                                                setTimeout(function() {
                                                    $("#salad").css({height: "auto", left: "50%", top: "45%", transform: "translate(-50%, -45%)", width: "500px"}).click(function() {
                                                        $(this).off("click").animate({height: "+=1000px", width: "+=1000px"}, 200).fadeOut(10);
                                                        $(".auto-type").fadeOut(200);
                                                        $(".explosion").show();
                                                        setTimeout(function() {
                                                            $(".explosion").fadeOut(500, function() {
                                                                if ($(this).is(":nth-child(7)"))
                                                                    setTimeout(function() {
                                                                        $(".auto-type").text("");
                                                                        $(".auto-type").show();
                                                                        autoType("Excellent, now you've got the hang of it! Americans hate unhealthy foods like salad! (Duh.)", $(".auto-type")[0], 75, 250, 500, true, function() {
                                                                            $('<a href="welcome"></a>').appendTo(".auto-type");
                                                                            autoType("\\n\\nLet's go learn some more American conventions.", $(".auto-type a")[0], 75, 250, 500, false, function() {
                                                                                $("i").css({left: "", position: "relative", top: ""}).appendTo(".auto-type a");
                                                                            });
                                                                        });
                                                                    }, 100);
                                                            });
                                                        }, 100);
                                                    });
                                                }, 0);
                                            });
                                        }, 100);
                                });
                            }, 100);
                        });
                    });
                });
            });
        }, 100);
    });
});
