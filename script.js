function chk() {                            //запуск скрипта
    var table = new Array(n);               //создаем массив
    var n = 9;                              //задаем количество строк и столбцов поля
    for (let i = 0; i < n; i++) {
        table[i] = new Array(n);            //создаем двумерный массив
    }
    for (let rows = 0; rows < n; rows++) {
        for (let cols = 0; cols < n; cols++) {
            table[rows][cols] = document.getElementById(String(rows + 1) + String(cols + 1)).value * 1;
        }                                   //заносим значения в массив
    }
    var sumN = 0;                           //вычисляем сумму чисел, играющих в судоку
    for (let i = 0; i < (n + 1); i++) {
        sumN += i;
    }
    var result = new Array();
    console.log("Необходимая сумма " + sumN);                      //выводим эту сумму

    for (let i = 0; i < n; i++) {           //вычисляем суммы во всех столбцах
        var sumcol = 0;
        for (let rows = 0; rows < n; rows++) {
            sumcol += table[rows][i];
        }
        console.log("сумма " + (i + 1) + " столбца " + sumcol);                //выводим суммы n столбцов
        if (sumcol == sumN) {
            result.push("true");
        }
        else {
            result.push("false");
        }
    }

    for (let i = 0; i < n; i++) {           //вычисляем суммы во всех строках
        var sumrow = 0;
        for (let cols = 0; cols < n; cols++) {
            sumrow += table[i][cols];
        }
        console.log("сумма " + (i + 1) + " строки " + sumrow);                //выводим суммы n строк
        if (sumrow == sumN) {
            result.push("true");
        }
        else {
            result.push("false");
        }
    }

    //расчёт сумм квадратов 1-3

    for (let j = 0; j < 9; j = j + 3) {
        var sumSqr13 = 0;
        for (let i = 0; i < 3; i++) {
            let sumSqrI = 0;
            for (let cols = j; cols < (j + 3); cols++) {
                sumSqrI += table[i][cols];
            }
            sumSqr13 += sumSqrI;
        }
        if (sumSqr13 == sumN) {
            result.push("true");
        }
        else {
            result.push("false");
        }
        console.log("сумма квадрата " + (j / 3 + 1) + " " + sumSqr13);
    }

    //расчёт сумм квадратов 4-6

    for (let j = 0; j < 9; j = j + 3) {
        var sumSqr46 = 0;
        for (let i = 3; i < 6; i++) {
            let sumSqrI = 0;
            for (let cols = j; cols < (j + 3); cols++) {
                sumSqrI += table[i][cols];
            }
            sumSqr46 += sumSqrI;
        }
        if (sumSqr46 == sumN) {
            result.push("true");
        }
        else {
            result.push("false");
        }
        console.log("сумма квадрата " + (j / 3 + 4) + " " + sumSqr46);
    }

    //следующий
    for (let j = 0; j < 9; j = j + 3) {
        var sumSqr79 = 0;
        for (let i = 6; i < 9; i++) {
            let sumSqrI = 0;
            for (let cols = j; cols < (j + 3); cols++) {
                sumSqrI += table[i][cols];
            }
            sumSqr79 += sumSqrI;
        }
        if (sumSqr79 == sumN) {
            result.push("true");
        }
        else {
            result.push("false");
        }
        console.log("сумма квадрата " + (j / 3 + 7) + " " + sumSqr79);
    }

    //закончили с квадратами

    //приступаем к диагоналям

    var diag1 = 0;
    for (let i = 0, j = 0; i < 9, j < 9; i++ , j++) {
        diag1 += table[i][j];
    }
    console.log("сумма 1 диагонали " + diag1);

    var diag2 = 0;
    for (let i = 0, j = 8; i<9, j>(-1); i++ , j--) {
        diag2 += table[i][j];
    }
    console.log("сумма 2 диагонали " + diag2);

    console.log(result[0]);                             //проверочная хрень
    var right = result.every(function (x) {             //проверка элементов проверочного массива
        return x == "true";
    })
    console.log(right);
    console.log(table);
    console.log(result);

    if (right == true) {
        res.innerHTML = "Correct";
        let span = document.getElementById('res').style;
        span.color = "green";
    }
    else {
        res.innerHTML = "Wrong";
        let span = document.getElementById('res').style;
        span.color = "red";
    }
}

function clr() {
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let inputsI = document.getElementsByTagName('input')[i];
        inputsI.value = '';
    }
}

var arrLevel1 =
    [7, 3, 9, 1, 2, 6, 4, 5, 8,
        6, 8, 4, 9, 3, 5, 2, 7, 1,
        5, 1, 2, 8, 4, 7, 3, 6, 9,
        3, 4, 6, 5, 9, 1, 8, 2, 7,
        9, 5, 7, 2, 6, 8, 1, 4, 3,
        1, 2, 8, 4, 7, 3, 6, 9, 5,
        4, 7, 5, 3, 1, 2, 9, 8, 6,
        8, 9, 3, 6, 5, 4, 7, 1, 2,
        2, 6, 1, 7, 8, 9, 5, 3, 4];


function lvl1() {
    clr();
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i = i + 2) {
        let inputsI = document.getElementsByTagName('input')[i];
        inputsI.value = arrLevel1[i];
    }
}

function lvl1right() {
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let inputsI = document.getElementsByTagName('input')[i];
        inputsI.value = arrLevel1[i];
    }
}

var arrLevel2 =
    [4, 7, 8, 1, 9, 3, 5, 6, 2,
        2, 9, 1, 8, 6, 5, 4, 7, 3,
        6, 3, 5, 4, 7, 2, 8, 9, 1,
        8, 1, 7, 6, 2, 4, 9, 3, 5,
        9, 2, 4, 5, 3, 7, 1, 8, 6,
        5, 6, 3, 9, 1, 8, 7, 2, 4,
        3, 4, 6, 7, 8, 1, 2, 5, 9,
        7, 5, 9, 2, 4, 6, 3, 1, 8,
        1, 8, 2, 3, 5, 9, 6, 4, 7];


function lvl2() {
    clr();
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i = i + 2) {
        let inputsI = document.getElementsByTagName('input')[i];
        inputsI.value = arrLevel2[i];
    }
}

function lvl2right() {
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let inputsI = document.getElementsByTagName('input')[i];
        inputsI.value = arrLevel2[i];
    }
}
