function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

var rover = document.getElementById("rover");
var flag = document.getElementById("flag");

if (rover && flag) {
    rover.addEventListener('click', function () {
        // generate a random flag image file name from the flags folder
        var flagImages = ['austria.png', 'belgium.png', 'bulgaria.png', 'croatia.png', 'cyprus.png', 'czech.png', 'denmark.png', 'estonia.png', 'finland.png', 'france.png', 'germany.png', 'greece.png', 'hungary.png', 'ireland.png', 'italy.png', 'latvia.png', 'lithunia.png', 'luxembourg.png', 'malta.png', 'netherlands.png', 'poland.png', 'portugal.png', 'romania.png', 'slovakia.png', 'slovenia.png', 'spain.png', 'sweden.png']; // list all flag image filenames here
        var randomFlagImage = flagImages[Math.floor(Math.random() * flagImages.length)];

        // set the new image source for the flag element
        flag.src = 'images/flags/' + randomFlagImage;
    });
} else {
    console.error('Could not find rover or flag element.');
}

var loginForm = document.querySelector('.login');
var registerForm = document.querySelector('.register');
var registerLink = document.querySelector('.register-link');
var loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.add('hide');
    registerForm.classList.remove('hide');
});

loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    registerForm.classList.add('hide');
    loginForm.classList.remove('hide');
});

var passwordInput = document.querySelector("#wachtwoord");
var eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
    var type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
