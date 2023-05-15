var flags = [["Oostenrijk.png", "België.png", "Bulgarije.png", "Kroatië.png", "Cyprus.png", "Tsjechië.png", "Denemarken.png", "Estland.png", "Finland.png", "Frankrijk.png", "Duitsland.png", "Griekenland.png", "Hongarije.png", "Ierland.png", "Italië.png", "Letland.png", "Litouwen.png", "Luxemburg.png", "Malta.png", "Nederland.png", "Polen.png", "Portugal.png", "Roemenië.png", "Slowakije.png", "Slovenië.png", "Spanje.png", "Zweden.png"   // voeg hier meer vlaggen toe...

]];


    const form = document.getElementById('form');

function chooseflag1(){
    var claw = document.getElementById('claw');
    var flag = document.getElementById("flag1");

    
    
    /*naam van vlag halen*/
    var fullpath = document.getElementById("flag1").src;
    console.log(fullpath);
    var filename = flag1.src.split('/').pop();
    console.log(filename);

    /*animaties starten*/
    flag.classList.add("moveflag1");
    claw.classList.add("moveclaw1");
    
}

function chooseflag2(){
    var claw = document.getElementById('claw');
    var flag = document.getElementById("flag2");

        console.log("yo1");

    
    /*naam van vlag halen*/
    var fullpath = document.getElementById("flag2").src;
    console.log(fullpath);
    var filename = flag1.src.split('/').pop();
    console.log(filename);
    console.log("yo2");

    /*animaties starten*/
    flag.classList.add("moveflag2");
    claw.classList.add("moveclaw2");
        console.log("yo3");

}

function chooseflag3(){
    var claw = document.getElementById('claw');
    var flag = document.getElementById("flag3");

    
    
    /*naam van vlag halen*/
    var fullpath = document.getElementById("flag3").src;
    console.log(fullpath);
    var filename = flag1.src.split('/').pop();
    console.log(filename);

    /*animaties starten*/
    flag.classList.add("moveflag3");
    claw.classList.add("moveclaw3");
    
}
