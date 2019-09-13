const isActiveBlock = (stack, spot) => {

};

const LETTERS = {
    '1': [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
    ],

    '2': [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ],

    '3': [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
    ],

    '4': [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
    ],
};

const renderLetter = (letterArray, letterString, color) => {
    const letterDiv = document.getElementById('letterBlock').cloneNode(true);
    const id = letterDiv.id = letterString;
    document.getElementById('screenLetter').appendChild(letterDiv);
    for (var r = 0; r < letterArray.length; r++) {
        for (var b = 0; b < letterArray.length; b++) {
            if (letterArray[r][b] === 1) {
                blockString = 'b' + r.toString() + b.toString();
                raw = 'r' + r.toString();
                block = 'b' + r.toString() + b.toString();
                const blockElement = document.getElementById(letterString).children[raw].children[block];
                blockElement.style.background = color;
            }
        }
    }
}


function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

const initImage = () => {
    window.myCanvas = document.getElementById('imageCanvas');
    var ctx = window.myCanvas.getContext('2d');
    var img = new Image;
    img.onload = function() {
        ctx.drawImage(img,0,0, 80, 80);
    };
    // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Google_Photos_icon.svg/128px-Google_Photos_icon.svg.png';
    img.src = 'img_1.jpg';
    img.crossOrigin = "";
}

const drawImage = (x, y) => {
    var pixelData = window.myCanvas.getContext('2d').getImageData(x, y, 1, 1).data;
    RC = pixelData[0];
    GC = pixelData[1];
    BC = pixelData[2];
    AC = pixelData[3];
    color = buildRGB(RC, GC, BC, AC);
    renderLetter(LETTERS[Math.floor(random(1, 4))], Math.random(), color);
}


const buildRGB = (r, g, b, a) => {
    // return '#000';
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

