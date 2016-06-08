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

function start() {
    $("#start, #button").off("click").fadeOut();
    $("#content > p").fadeOut(function() {
        if ($(this)[0] === $("#content > p")[1]) {
            $("#auto-type").text("").show();
            autoType("Great, let's get started! Please click on the sentence below in English.", $("#auto-type")[0], 75, 200, 400, true, function() {
                $("#sentences").fadeIn();
                $("#sentences p").click(function() {
                    if ($(this).off("click").text() === "Liberty and justice for all!") {
                        $("#sentences").fadeOut(function() {
                            $("#auto-type").text("");
                            autoType("Whew, nice job! This quiz must be really hard.\\nNow, please select your most cherished thing.", $("#auto-type")[0], 75, 200, 400, true, function() {
                                $("#images").fadeIn();
                                $("#images div").click(function() {
                                    if ($(this).off("click").find("h2").text() === "Your phone") {
                                        $("#images").fadeOut(function() {
                                            $("#auto-type").text("");
                                            autoType("For a second there, I was scared you might choose your friends or family over your phone. That would be preposterous!\\nFor the finale, please select the most healthy and sustainable restaurant in America.", $("#auto-type")[0], 75, 200, 400, true, function() {
                                                $("#restaurants").fadeIn();
                                                $("#restaurants img").click(function() {
                                                    if ($(this).off("click").attr("src") === "assets/images/mc-donalds.png") {
                                                        $("#restaurants").fadeOut(function() {
                                                            $("#auto-type").text("");
                                                            autoType("Congratulations! After overcoming this incredibly difficult quiz, you can feel proud knowing you are a true American.\\nHere's a professional certificate of your achievement:", $("#auto-type")[0], 75, 200, 400, true, function() {
                                                                $("#certificate").fadeIn();
                                                            });
                                                        });
                                                    } else
                                                        $(this).fadeOut();
                                                });
                                            });
                                        });
                                    } else
                                        $(this).fadeOut();
                                });
                            });
                        });
                    } else
                        $(this).fadeOut();
                });
            });
        }
    });
}

var counter = 0;

$("#start").click(start);

$("#button").click(function buttonClick() {
    if (counter === 0)
        $("#button").off("click");
    
    $("p").eq(0).fadeOut(function() {
        ++counter;
        
        if (counter === 1) {
            $("#button").text("");
            autoType("1 click isn't enough. Come on, show some American effort and persistence!", $("#button")[0], 75, 200, 400, false, function() {
                $("#button").click(buttonClick);
            });
        } else
            $("#button").text(counter + " clicks aren't enough. Come on, show some American effort and persistence!");
        
        if (counter === 30) {
            $("#start").off("click");
            autoType("\\nSorry to interrupt your focus, but have you considered pressing the button in the top right corner? Don't worry, Americans aren't known for their brightness.", $("#auto-type")[0], 75, 200, 400, false, function() {
                $("#start").click(start);
            });
        }
        
        if (counter === 150) {
            $("#start").off("click");
            autoType(" Hey, can you even read?", $("#auto-type")[0], 75, 200, 400, false, function() {
                $("#start").click(start);
            });
        }
        
        if (counter === 200) {
            $("#start").off("click");
            autoType("\\n\\nPress the other button already!", $("#auto-type")[0], 75, 200, 400, false, function() {
                $("#start").click(start);
            });
        }
        
        if (counter === 250) {
            $("#button").off("click").text("");
            autoType("Haha, can't press me anymore. Go press the OTHER button!", $("#button")[0], 75, 200, 400, false);
        }
    });
});
