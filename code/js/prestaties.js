function next() {
    document.getElementById("page1").style.display = 'none';
    document.getElementById("page2").style.display = 'flex';
    document.getElementById("page3").style.display = 'none';

    document.getElementById("arrow").style.display = 'none';
    document.getElementById("arrow2").style.display = 'block';
    document.getElementById("arrow3").style.display = 'block';
    document.getElementById("arrow4").style.display = 'none';
}



function next2() {
    document.getElementById("page1").style.display = 'none';
    document.getElementById("page2").style.display = 'none';
    document.getElementById("page3").style.display = 'flex';


    document.getElementById("arrow").style.display = 'none';
    document.getElementById("arrow2").style.display = 'none';
    document.getElementById("arrow3").style.display = 'none';
    document.getElementById("arrow4").style.display = 'block';
}

function back() {
    document.getElementById("page1").style.display = 'flex';
    document.getElementById("page2").style.display = 'none';
    document.getElementById("page3").style.display = 'none';

    document.getElementById("arrow").style.display = 'block';
    document.getElementById("arrow2").style.display = 'none';
    document.getElementById("arrow3").style.display = 'none';
    document.getElementById("arrow4").style.display = 'none';
}


function back2() {
    document.getElementById("page1").style.display = 'none';
    document.getElementById("page2").style.display = 'flex';
    document.getElementById("page3").style.display = 'none';

    document.getElementById("arrow").style.display = 'none';
    document.getElementById("arrow2").style.display = 'block';
    document.getElementById("arrow3").style.display = 'block';
    document.getElementById("arrow4").style.display = 'none';
}