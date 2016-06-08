function preloadImages() {
    for (var i = 0; i < arguments.length; ++i) {
        $("<img>").attr("src", "../images/" + arguments[i]);
    }
}

preloadImages("dumpster.jpg", "family.jpg", "flag-cropped.png", "flag.png", "four-seasons.gif", "french-fries.jpg", "fried-chicken.jpg", "friends.jpg", "grenouille.gif", "hamburger.jpg", "hard-rock.png", "hot-dog.jpg", "le-cirque.gif", "mc-donalds.png", "phone.png", "russian-tea.jpg", "sardis.jpg", "subway.jpg", "tavern-green.jpg", "toilet.jpg", "trash.jpg", "trump-love.jpg");
