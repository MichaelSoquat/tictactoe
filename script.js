let fields = [];
let gameOver = false;
let currentShape = 'cross';


function fillShape(id) {
    addLines();

    if (!fields[id] && (!gameOver)) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        }
        else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}
function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restartButton').classList.add('d-none');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }

}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;
    //First row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.2)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }
    if (winner || fields[0]&& fields[1]&& fields[2]&& fields[3]&& fields[4]&& fields[5]&& fields[6]&& fields[7]&& fields[8]) {
        console.log('Gewonnen:', winner)
        gameOver = true;

        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
        }, 1000);
        setTimeout(function () {
            document.getElementById('restartButton').classList.remove('d-none');
        }, 1000);

    }

}

function addLines(media) {
    var media = window.matchMedia("(max-width: 450px )");
    if (media.matches) {
        document.getElementById('drawLines').innerHTML = `<div id="line-1" class="horizontal-line" style="top: -113px; right: 234px;"></div>
        <div id="line-2" class="horizontal-line" style="bottom: 16px; right: 231px;"></div>
        <div id="line-3" class="horizontal-line" style="top: 82px; right: 231px;"></div>
        <div id="line-4" class="horizontal-line make-vertical" style="top: -35px; right: 340px"></div>
        <div id="line-5" class="horizontal-line make-vertical" style="top: -45px; right: 233px"></div>
        <div id="line-6" class="horizontal-line make-vertical" style="top: -55px; right: 125px"></div>
        <div id="line-7" class="horizontal-line" style="top: -68px; left: -235px; transform: rotate(45deg) scaleX(0.0);"></div>
        <div id="line-8" class="horizontal-line" style="top: -68px; right: 235px; transform: rotate(-45deg) scaleX(0.0);">
        </div>`;
    }
    else {
        document.getElementById('drawLines').innerHTML = `<div id="line-1" class="horizontal-line" style="top: -147px; right:250px;"></div>
    <div id="line-2" class="horizontal-line" style="bottom: 16px; right: 250px;"></div>
    <div id="line-3" class="horizontal-line" style="top: 113px; right: 250px;"></div>
    <div id="line-4" class="horizontal-line make-vertical" style="top: -35px; right: 388px"></div>
    <div id="line-5" class="horizontal-line make-vertical" style="top: -45px; right: 250px"></div>
    <div id="line-6" class="horizontal-line make-vertical" style="top: -55px; right: 112px"></div>
    <div id="line-7" class="horizontal-line" style="top: -68px; left: -251px; transform: rotate(45deg) scaleX(0.0);"></div>
    <div id="line-8" class="horizontal-line" style="top: -68px; right: 251px; transform: rotate(-45deg) scaleX(0.0);">
    </div>`;
    }
}