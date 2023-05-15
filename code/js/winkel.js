const profile_names_full = ["aap.jpg", "auto.jpg", "bus.jpg", "eenhoorn.jpg", "flamingo.jpg", "giraf.jpg", "gorilla.jpg", "hond.jpg", "kat.jpg", "koala.jpg", "konijn.jpg", "leeuw.png", "paard1.png", "paard2.png", "panda.jpg", "raket.jfif", "tijger.png", "vogel.jpg"],
    profile_prices = [250, 300, 200, 300, 300, 250, 300, 250, 200, 300, 250, 250, 200, 250, 300, 250, 250, 200];

let profile_names = [];
for (let i = 0; i < profile_names_full.length; i++) {
    profile_names.push(profile_names_full[i].substring(0, profile_names_full[i].indexOf(".")));
}


function load_images() {
    for (let i = 0; i < profile_names.length; i++) {
        var img = document.createElement("img");
        img.src = "images/profile_pictures/" + profile_names_full[i];
        img.alt = profile_names[i];
        var src = document.querySelector("#img1_" + (i + 1));
        src.appendChild(img);
        var modal = document.getElementById("modal" + (i + 1));
        modal.classList.add(profile_names[i]);
    }
}

function myFunction(index) {
    for (let i = 0; i < profile_names.length; i++) {
        var temp = document.querySelector("." + profile_names[i]);
        try {
            if (!(temp.style.display === "flex" && temp === document.querySelector("." + profile_names[index - 1]))) {
                temp.style.display = "none";
            }
        } catch {

        }
    }
    var price = document.getElementsByClassName("price");
    price[index - 1].innerHTML = profile_names[index - 1] + ": " + profile_prices[index - 1];
    temp = document.querySelector("." + profile_names[index - 1]);
    if (temp.style.display !== "flex") {
        temp.style.display = "flex";
        console.log("on");
        document.getElementById("overlay").style.opacity = "1";
    } else {
        temp.style.display = "none";
        document.getElementById("overlay").style.opacity = "0";
        console.log("off");
    }
}