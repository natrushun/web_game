const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 0],
        [1, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0, 1, 0], //// 0, 1 ,0
        [1, 1, 1],
        [0, 1, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [1, 0, 0],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 0, 0],
        [1, 1, 1],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 1]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
]
const missions =
{
    "basic": [
        {
            "title": "Az erdő széle",
            "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
            img: "assets/missions_hun/Group 69.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    if (matrix[i][0] == 2) point++;
                    if (matrix[i][10] == 2) point++;
                    if (i + 1 < 10 && matrix[0][i + 1] == 2) point++;
                    if (i + 1 < 10 && matrix[10][i + 1] == 2) point++;
                }
                return point;
            },

        },
        {
            "title": "Álmos-völgy",
            "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
            img: "assets/missions_hun/Group 74.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    let counter = 0;
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 2) counter++;
                    }
                    if (counter == 3) point += 4;
                }
                return point;
            }
        },
        {
            "title": "Krumpliöntözés",
            "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
            img: "assets/missions_hun/Group 70.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 3) {
                            if (i != 0 && matrix[i - 1][j] == 5) point += 2;
                            if (i != 10 && matrix[i + 1][j] == 5) point += 2;
                            if (j != 0 && matrix[i][j - 1] == 5) point += 2;
                            if (j != 10 && matrix[i][j + 1] == 5) point += 2;
                        }
                    }

                }
                return point;
            }
        },
        {
            "title": "Határvidék",
            "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
            img: "assets/missions_hun/Group 78.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    let row = true;
                    let col = true;
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 0) row = false;
                        if (matrix[j][i] == 0) col = false;
                    }
                    if (row) point += 6;
                    if (col) point += 6;
                }
                return point;
            }
        },
        {
            "title": "Fasor",
            "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
            img: "assets/missions_hun/Group 68.png",
            calc: function (matrix) {
                let point = 0;
                let max = 0;

                for (let i = 0; i < 11; i++) {
                    let counter = 0;
                    let l = false;
                    for (let j = 0; j < 11; j++) {
                        if (matrix[j][i] == 2 && l) counter++;
                        if (matrix[j][i] == 2 && !l) {
                            l = true; counter++;
                        }
                        if (matrix[j][i] != 2) {
                            l = false;
                            if (counter > max) max = counter;
                            counter = 0;

                        }
                    }
                    if (counter > max) max = counter;

                }
                point = max * 2;
                return point;
            }

        },
        {
            "title": "Gazdag város",
            "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
            img: "assets/missions_hun/Group 71.png",
            calc: function (matrix) {
                let point = 0;

                for (let i = 0; i < 11; i++) {
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 4) {
                            let neighbors = new Set();
                            if (i != 0 && matrix[i - 1][j] != 0) neighbors.add(matrix[i - 1][j]);
                            if (i != 10 && matrix[i + 1][j] != 0) neighbors.add(matrix[i + 1][j]);
                            if (j != 0 && matrix[i][j - 1] != 0) neighbors.add(matrix[i][j - 1]);
                            if (j != 10 && matrix[i][j + 1] != 0) neighbors.add(matrix[i][j + 1]);
                            if (neighbors.size >= 3) point += 3
                        }
                    }

                }
                return point;
            }

        },
        {
            "title": "Öntözőcsatorna",
            "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
            img: "assets/missions_hun/Group 75.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    let wcounter = 0;
                    let fcounter = 0;
                    for (let j = 0; j < 11; j++) {
                        if (matrix[j][i] == 5) wcounter++;
                        if (matrix[j][i] == 3) fcounter++;
                    }
                    if (wcounter > 0 && wcounter == fcounter) point += 4;
                }
                return point;
            }
        },
        {
            "title": "Mágusok völgye",
            "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
            img: "assets/missions_hun/Group 76.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 1) {
                            if (i != 0 && matrix[i - 1][j] == 5) point += 3;
                            if (i != 10 && matrix[i + 1][j] == 5) point += 3;
                            if (j != 0 && matrix[i][j - 1] == 5) point += 3;
                            if (j != 10 && matrix[i][j + 1] == 5) point += 3;
                        }
                    }

                }
                return point;

            }
        },
        {
            "title": "Üres telek",
            "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
            img: "assets/missions_hun/Group 77.png",
            calc: function (matrix) {
                let point = 0;
                let voidtiles = new Set();
                for (let i = 0; i < 11; i++) {
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 4) {
                            if (i != 0 && matrix[i - 1][j] == 0) voidtiles.add(`${i - 1},${j}`);
                            if (i != 10 && matrix[i + 1][j] == 0) voidtiles.add(`${i + 1},${j}`);
                            if (j != 0 && matrix[i][j - 1] == 0) voidtiles.add(`${i},${j - 1}`);
                            if (j != 10 && matrix[i][j + 1] == 0) voidtiles.add(`${i},${j + 1}`);
                        }
                    }

                }
                point = voidtiles.size * 2
                return point;

            }
        },
        {
            "title": "Sorház",
            "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
            img: "assets/missions_hun/Group 72.png",
            calc: function (matrix) {
                let point = 0;
                let max = 0;

                for (let i = 0; i < 11; i++) {
                    let counter = 0;
                    let l = false;
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] == 4 && l) counter++;
                        if (matrix[i][j] == 4 && !l) {
                            l = true; counter++;
                        }
                        if (matrix[i][j] != 4) {
                            l = false;
                            if (counter == max) point += max * 2;
                            if (counter > max) {
                                max = counter;
                                point = 0;
                            }

                            counter = 0;

                        }
                    }
                    if (counter == max) point += max * 2;
                    if (counter > max) {
                        max = counter;
                        point = 0;
                    }


                }

                point += max * 2;
                return point;

            }
        },
        {
            "title": "Páratlan silók",
            "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
            img: "assets/missions_hun/Group 73.png",
            calc: function (matrix) {
                let point = 0;
                for (let i = 0; i < 11; i++) {
                    let col = true;
                    for (let j = 0; j < 11; j += 2) {
                        if (matrix[j][i] == 0) col = false;
                    }
                    if (col) point += 10;
                }
                return point;

            }
        },
        {
            "title": "Gazdag vidék",
            "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
            img: "assets/missions_hun/Group 79.png",
            calc: function (matrix) {
                let point = 0;

                for (let i = 0; i < 11; i++) {
                    let tiles = new Set();
                    for (let j = 0; j < 11; j++) {
                        if (matrix[i][j] != 0) {

                            tiles.add(matrix[i][j]);
                        }
                    }
                    if (tiles.size >= 5) point += 4;

                }
                return point;
            }
        }

    ],
    "extra": [
    ],
}
function mountainSurrounded() {
    let point = 0;
    for (let i = 0; i < 11; i++) {
        let counter = 0;
        for (let j = 0; j < 11; j++) {
            if (matrix[i][j] == 1) {
                if (i != 0 && matrix[i - 1][j] != 0) counter++;
                if (i != 10 && matrix[i + 1][j] != 0) counter++;
                if (j != 0 && matrix[i][j - 1] != 0) counter++;
                if (j != 10 && matrix[i][j + 1] != 0) counter++;
                if (counter == 4) point++;
            }

        }

    }
    return point;
}
const divtable = document.querySelector('#divtable');
let h1 = document.querySelector('#title');
const table = document.querySelector('#gametable');
let tds = document.querySelectorAll('td');
let infodiv = document.querySelector('#info');
let sectable = document.querySelector('#sec table');
let rotatebutton = document.querySelector('#forgat');
let mirrorbutton = document.querySelector("#tukroz");
let img_mis = document.querySelectorAll("#imggrid div img")
let spans = document.querySelectorAll("span");
let restart = document.querySelector("#restart");
restart.classList.add('restart2');
let matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let secMatrix = [
    [0, 0, 0],
    [0, 0, 0,]
    [0, 0, 0]
];
let time = 0;
let sum = 0;
function getImageIndexBySrc(src) {
    for (let i = 0; i < img_mis.length; i++) {
        if (img_mis[i].getAttribute("src") === src) {
            return i;
        }
    }
}
function changeSeason() {
    time = 0;
    if (seasons.length == 0) return 0;
    let season = seasons.shift();
    spans[10].innerHTML = time;
    spans[5].innerHTML = season.title;
    img_mis[getImageIndexBySrc(season.mission[0].img)].style.border = "7px solid green"
    img_mis[getImageIndexBySrc(season.mission[1].img)].style.border = "7px solid green"
    return season;
}
function drawTable() {
    divtable.innerHTML = "";
    table.innerHTML = "";
    divtable.append(h1);
    for (let i = 0; i < 11; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < 11; j++) {
            td = document.createElement('td')
            switch (matrix[i][j]) {
                case 0:
                    td.style.backgroundImage = "url(assets/tiles/base_tile.png)";
                    break;
                case 1:
                    td.style.backgroundImage = "url(assets/tiles/mountain_tile.png)";
                    break;
                case 2:
                    td.style.backgroundImage = "url(assets/tiles/forest_tile.png)";
                    break;
                case 3:
                    td.style.backgroundImage = "url(assets/tiles/plains_tile.png)";
                    break;
                case 4:
                    td.style.backgroundImage = "url(assets/tiles/village_tile.png)";
                    break;
                case 5:
                    td.style.backgroundImage = "url(assets/tiles/water_tile.png)";
                    break;
                default:
                    break;
            }
            td.style.backgroundSize = "cover";
            td.id = `${i},${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }
    divtable.append(table);
    divtable.append(restart);
    tds = document.querySelectorAll('td');
}
function drawSecondTable() {
    sectable.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            if (shufled[0].shape[i][j] == 1) {
                switch (shufled[0].type) {
                    case "forest":
                        td.style.backgroundImage = "url(assets/tiles/forest_tile.png)";
                        break;
                    case "farm":
                        td.style.backgroundImage = "url(assets/tiles/plains_tile.png)";
                        break;
                    case "town":
                        td.style.backgroundImage = "url(assets/tiles/village_tile.png)";
                        break;
                    case "water":
                        td.style.backgroundImage = "url(assets/tiles/water_tile.png)";
                        break;
                    default:
                        break;
                }
            } else {
                td.style.backgroundImage = "url(assets/tiles/base_tile.png)";
            }
            td.style.backgroundSize = "cover";
            tr.append(td);
        }
        spans[11].innerHTML = shufled[0].time;
        sectable.append(tr);
    }

}
function shuffleElements(shufle) {
    let array = shufle;
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * array.length)
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function chooseMissions() {
    missionArray = [];
    while (missionArray.length < 4) {
        let mission = missions.basic[Math.floor(Math.random() * (missions.basic.length))];
        if (!missionArray.includes(mission)) {
            missionArray.push(mission)
        }
    }
    for (let i = 0; i < missionArray.length; i++) {
        img_mis[i].src = missionArray[i].img;
    }

    return missionArray;
}
let shufled = Array.from(shuffleElements(elements));
drawSecondTable();
drawTable();
let ms_Array = chooseMissions();
let seasons = [
    {
        title: "Tavasz",
        mission: [ms_Array[0], ms_Array[1]],
        span: [spans[0], spans[6], spans[7]],
    },
    {
        title: "Nyár",
        mission: [ms_Array[1], ms_Array[2]],
        span: [spans[1], spans[7], spans[8]],
    },
    {
        title: "Ősz",
        mission: [ms_Array[2], ms_Array[3]],
        span: [spans[2], spans[8], spans[9]],
    },
    {
        title: "Tél",
        mission: [ms_Array[3], ms_Array[0]],
        span: [spans[3], spans[9], spans[6]],
    },

]
let currentSeason = changeSeason();
function shapeRealCordinates(id, element) {
    let cordinates = id.split(',').map(Number);
    let array = [];
    let first = true;
    let firstj = 0;
    let firsti = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (element[0].shape[i][j] == 1 && !first) {
                if (firstj > j) {
                    array.push(`${(Math.abs(firsti - i)) + cordinates[0]},${cordinates[1] - (firstj - j)}`)
                } else {
                    array.push(`${(Math.abs(firsti - i)) + cordinates[0]},${cordinates[1] + (Math.abs(firstj - j))}`)
                }
            }
            if (element[0].shape[i][j] == 1 && first) {
                array.push(id);
                first = false;
                firstj = j;
                firsti = i;
            }
        }
    }
    return array;
}
function outOfBounds(shapeArray) {
    let l = false;
    let idArray = [];
    tds.forEach((e) => {
        let tdid = e.id;
        idArray.push(tdid);
    });
    shapeArray.forEach(e => {
        if (!(idArray.includes(e))) {
            l = true;
        }
    });
    return l;
}
function wrongPlacement(shapeArray) {
    let l = false;
    shapeArray.forEach(e => {
        let cordinates = e.split(',').map(Number);
        if (matrix[cordinates[0]][cordinates[1]] != 0) l = true;
    })
    return l;
}
table.addEventListener('mouseover', (e) => {
    if (e.target.matches('td')) {

        let shapeArray = shapeRealCordinates(e.target.id, shufled);

        if (outOfBounds(shapeArray) || wrongPlacement(shapeArray)) {
            shapeArray.forEach(e => {
                tds.forEach(k => {
                    if (e === k.id) {
                        k.style.border = "2px solid red";
                    }
                });
            });
        } else {
            shapeArray.forEach(e => {
                tds.forEach(k => {
                    if (e === k.id) {
                        k.style.border = "2px solid green";
                    }
                });
            });
        }
    }
})
table.addEventListener('mouseout', (e) => {
    if (e.target.matches('td')) {
        let shapeArray = shapeRealCordinates(e.target.id, shufled);
        shapeArray.forEach(e => {
            tds.forEach(k => {
                if (e === k.id) {
                    k.style.border = "2px solid aliceblue";
                }
            });
        });

    }
})
table.addEventListener('click', e => {
    if (e.target.matches('td')) {
        let shapeArray = shapeRealCordinates(e.target.id, shufled);
        if (!outOfBounds(shapeArray) && !wrongPlacement(shapeArray)) {
            shapeArray.forEach(e => {
                let cordinates = e.split(',').map(Number);
                switch (shufled[0].type) {
                    case "forest":
                        matrix[cordinates[0]][cordinates[1]] = 2;
                        break;
                    case "farm":
                        matrix[cordinates[0]][cordinates[1]] = 3;
                        break;
                    case "town":
                        matrix[cordinates[0]][cordinates[1]] = 4;
                        break;
                    case "water":
                        matrix[cordinates[0]][cordinates[1]] = 5;
                        break;
                    default:
                        break;
                }
            });
            time += shufled[0].time;
            if (time >= 7) {
                currentSeason.span[1].innerHTML = currentSeason.mission[0].calc(matrix);
                currentSeason.span[2].innerHTML = currentSeason.mission[1].calc(matrix);
                currentSeason.span[0].innerHTML = currentSeason.mission[0].calc(matrix) + currentSeason.mission[1].calc(matrix) + mountainSurrounded();
                sum += currentSeason.mission[0].calc(matrix) + currentSeason.mission[1].calc(matrix) + mountainSurrounded();
                img_mis[getImageIndexBySrc(currentSeason.mission[0].img)].style.border = "7px solid rgba(0, 128, 0, 0)";
                img_mis[getImageIndexBySrc(currentSeason.mission[1].img)].style.border = "7px solid rgba(0, 128, 0, 0)";
                currentSeason = changeSeason();
                if (currentSeason != 0) {
                    currentSeason.span[1].innerHTML = currentSeason.mission[0].calc(matrix);
                    currentSeason.span[2].innerHTML = currentSeason.mission[1].calc(matrix);
                    shufled = Array.from(shuffleElements(elements));
                } else {
                    spans[10].innerHTML = "-";
                    spans[4].innerHTML = sum;
                    rotatebutton.style.pointerEvents = "none";
                    mirrorbutton.style.pointerEvents = "none";
                    table.style.pointerEvents = "none";
                    table.style.filter = "blur(4px)";
                    restart.style.pointerEvents = "auto";
                    restart.classList.add('restart1');

                }
            } else {
                currentSeason.span[1].innerHTML = currentSeason.mission[0].calc(matrix);
                currentSeason.span[2].innerHTML = currentSeason.mission[1].calc(matrix);
                spans[10].innerHTML = time;
            }
            drawTable();
            shufled.shift();
            drawSecondTable()
        }
    }
});
mirrorbutton.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < Math.floor(3 / 2); j++) {
            const temp = shufled[0].shape[i][j];
            shufled[0].shape[i][j] = shufled[0].shape[i][3 - 1 - j];
            shufled[0].shape[i][3 - 1 - j] = temp;
        }
    }
    drawSecondTable();
});
rotatebutton.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        for (let j = i; j < 3; j++) {
            let temp = shufled[0].shape[i][j];
            shufled[0].shape[i][j] = shufled[0].shape[j][i];
            shufled[0].shape[j][i] = temp;
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < Math.floor(3 / 2); j++) {
            const temp = shufled[0].shape[i][j];
            shufled[0].shape[i][j] = shufled[0].shape[i][3 - 1 - j];
            shufled[0].shape[i][3 - 1 - j] = temp;
        }
    }
    drawSecondTable();
});
restart.addEventListener('click', () => {
    spans.forEach(e => {
        e.innerHTML = 0;
    });
    ms_Array.forEach(e => {
        img_mis[getImageIndexBySrc(e.img)].style.border = "7px solid rgba(0, 128, 0, 0)";
    });
    time = 0;
    sum = 0;
    shufled = Array.from(shuffleElements(elements));
    drawSecondTable();
    ms_Array = chooseMissions();
    matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    seasons = [
        {
            title: "Tavasz",
            mission: [ms_Array[0], ms_Array[1]],
            span: [spans[0], spans[6], spans[7]],
        },
        {
            title: "Nyár",
            mission: [ms_Array[1], ms_Array[2]],
            span: [spans[1], spans[7], spans[8]],
        },
        {
            title: "Ősz",
            mission: [ms_Array[2], ms_Array[3]],
            span: [spans[2], spans[8], spans[9]],
        },
        {
            title: "Tél",
            mission: [ms_Array[3], ms_Array[0]],
            span: [spans[3], spans[9], spans[6]],
        },

    ]
    currentSeason = changeSeason();
    spans[10].innerHTML = 0;
    spans[4].innerHTML = 0;
    rotatebutton.style.pointerEvents = "auto";
    mirrorbutton.style.pointerEvents = "auto";
    table.style.pointerEvents = "auto";
    table.style.filter = "blur(0px)";
    drawTable();
    restart.classList.remove('restart1');
})
