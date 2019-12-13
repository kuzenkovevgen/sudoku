/*function chk() {
    var a1 = document.getElementById('a1').value * 1;
    var a2 = document.getElementById('a2').value * 1;
    var a3 = document.getElementById('a3').value * 1;
    var a4 = document.getElementById('a4').value * 1;
    var a5 = document.getElementById('a5').value * 1;
    var a6 = document.getElementById('a6').value * 1;
    var a7 = document.getElementById('a7').value * 1;
    var a8 = document.getElementById('a8').value * 1;
    var a9 = document.getElementById('a9').value * 1;

    var b1 = document.getElementById('b1').value * 1;
    var b2 = document.getElementById('b2').value * 1;
    var b3 = document.getElementById('b3').value * 1;
    var b4 = document.getElementById('b4').value * 1;
    var b5 = document.getElementById('b5').value * 1;
    var b6 = document.getElementById('b6').value * 1;
    var b7 = document.getElementById('b7').value * 1;
    var b8 = document.getElementById('b8').value * 1;
    var b9 = document.getElementById('b9').value * 1;

    var c1 = document.getElementById('c1').value * 1;
    var c2 = document.getElementById('c2').value * 1;
    var c3 = document.getElementById('c3').value * 1;
    var c4 = document.getElementById('c4').value * 1;
    var c5 = document.getElementById('c5').value * 1;
    var c6 = document.getElementById('c6').value * 1;
    var c7 = document.getElementById('c7').value * 1;
    var c8 = document.getElementById('c8').value * 1;
    var c9 = document.getElementById('c9').value * 1;

    var d1 = document.getElementById('d1').value * 1;
    var d2 = document.getElementById('d2').value * 1;
    var d3 = document.getElementById('d3').value * 1;
    var d4 = document.getElementById('d4').value * 1;
    var d5 = document.getElementById('d5').value * 1;
    var d6 = document.getElementById('d6').value * 1;
    var d7 = document.getElementById('d7').value * 1;
    var d8 = document.getElementById('d8').value * 1;
    var d9 = document.getElementById('d9').value * 1;

    var e1 = document.getElementById('e1').value * 1;
    var e2 = document.getElementById('e2').value * 1;
    var e3 = document.getElementById('e3').value * 1;
    var e4 = document.getElementById('e4').value * 1;
    var e5 = document.getElementById('e5').value * 1;
    var e6 = document.getElementById('e6').value * 1;
    var e7 = document.getElementById('e7').value * 1;
    var e8 = document.getElementById('e8').value * 1;
    var e9 = document.getElementById('e9').value * 1;

    var f1 = document.getElementById('f1').value * 1;
    var f2 = document.getElementById('f2').value * 1;
    var f3 = document.getElementById('f3').value * 1;
    var f4 = document.getElementById('f4').value * 1;
    var f5 = document.getElementById('f5').value * 1;
    var f6 = document.getElementById('f6').value * 1;
    var f7 = document.getElementById('f7').value * 1;
    var f8 = document.getElementById('f8').value * 1;
    var f9 = document.getElementById('f9').value * 1;

    var g1 = document.getElementById('g1').value * 1;
    var g2 = document.getElementById('g2').value * 1;
    var g3 = document.getElementById('g3').value * 1;
    var g4 = document.getElementById('g4').value * 1;
    var g5 = document.getElementById('g5').value * 1;
    var g6 = document.getElementById('g6').value * 1;
    var g7 = document.getElementById('g7').value * 1;
    var g8 = document.getElementById('g8').value * 1;
    var g9 = document.getElementById('g9').value * 1;

    var h1 = document.getElementById('h1').value * 1;
    var h2 = document.getElementById('h2').value * 1;
    var h3 = document.getElementById('h3').value * 1;
    var h4 = document.getElementById('h4').value * 1;
    var h5 = document.getElementById('h5').value * 1;
    var h6 = document.getElementById('h6').value * 1;
    var h7 = document.getElementById('h7').value * 1;
    var h8 = document.getElementById('h8').value * 1;
    var h9 = document.getElementById('h9').value * 1;

    var j1 = document.getElementById('j1').value * 1;
    var j2 = document.getElementById('j2').value * 1;
    var j3 = document.getElementById('j3').value * 1;
    var j4 = document.getElementById('j4').value * 1;
    var j5 = document.getElementById('j5').value * 1;
    var j6 = document.getElementById('j6').value * 1;
    var j7 = document.getElementById('j7').value * 1;
    var j8 = document.getElementById('j8').value * 1;
    var j9 = document.getElementById('j9').value * 1;

    var sumA = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9;
    var sumB = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9;
    var sumC = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9;
    var sumD = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9;
    var sumE = e1 + e2 + e3 + e4 + e5 + e6 + e7 + e8 + e9;
    var sumF = f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9;
    var sumG = g1 + g2 + g3 + g4 + g5 + g6 + g7 + g8 + g9;
    var sumH = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    var sumJ = j1 + j2 + j3 + j4 + j5 + j6 + j7 + j8 + j9;

    var sum1 = a1 + b1 + c1 + d1 + e1 + f1 + g1 + h1 + j1;
    var sum2 = a2 + b2 + c2 + d2 + e2 + f2 + g2 + h2 + j2;
    var sum3 = a3 + b3 + c3 + d3 + e3 + f3 + g3 + h3 + j3;
    var sum4 = a4 + b4 + c4 + d4 + e4 + f4 + g4 + h4 + j4;
    var sum5 = a5 + b5 + c5 + d5 + e5 + f5 + g5 + h5 + j5;
    var sum6 = a6 + b6 + c6 + d6 + e6 + f6 + g6 + h6 + j6;
    var sum7 = a7 + b7 + c7 + d7 + e7 + f7 + g7 + h7 + j7;
    var sum8 = a8 + b8 + c8 + d8 + e8 + f8 + g8 + h8 + j8;
    var sum9 = a9 + b9 + c9 + d9 + e9 + f9 + g9 + h9 + j9;

    var diag1 = a1 + b2 + c3 + d4 + e5 + f6 + g7 + h8 + j9;
    var diag2 = a9 + b8 + c7 + d6 + e5 + f4 + g3 + h2 + j1;

    var ac13 = a1 + a2 + a3 + b1 + b2 + b3 + c1 + c2 + c3;
    var ac46 = a4 + a5 + a6 + b4 + b5 + b6 + c4 + c5 + c6;
    var ac79 = a7 + a8 + a9 + b7 + b8 + b9 + c7 + c8 + c9;

    var df13 = d1 + d2 + d3 + e1 + e2 + e3 + f1 + f2 + f3;
    var df46 = d4 + d5 + d6 + e4 + e5 + e6 + f4 + f5 + f6;
    var df79 = d7 + d8 + d9 + e7 + e8 + e9 + f7 + f8 + f9;

    var gj13 = g1 + g2 + g3 + h1 + h2 + h3 + j1 + j2 + j3;
    var gj46 = g4 + g5 + g6 + h4 + h5 + h6 + j4 + j5 + j6;
    var gj79 = g7 + g8 + g9 + h7 + h8 + h9 + j7 + j8 + j9;

    if (sumA == 45 &&
        sumB == 45 &&
        sumC == 45 &&
        sumD == 45 &&
        sumE == 45 &&
        sumF == 45 &&
        sumG == 45 &&
        sumH == 45 &&
        sumJ == 45 &&
        sum1 == 45 &&
        sum2 == 45 &&
        sum3 == 45 &&
        sum4 == 45 &&
        sum5 == 45 &&
        sum6 == 45 &&
        sum7 == 45 &&
        sum8 == 45 &&
        sum9 == 45 &&
        diag1 == 45 &&
        diag2 == 45 &&
        ac13 == 45 &&
        ac46 == 45 &&
        ac79 == 45 &&
        df13 == 45 &&
        df46 == 45 &&
        df79 == 45 &&
        gj13 == 45 &&
        gj46 == 45 &&
        gj79 == 45
    ) {
        chkstr.innerHTML = "OK";
    }
    else {
        chkstr.innerHTML = "BAD";
    }

    console.log(sumA, sumB, sumC, sumD, sumE, sumF, sumG, sumH, sumJ,
        sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9,
        diag1, diag2,
        ac13, ac46, ac79, df13, df46, df79, gj13, gj46, gj79);
}
*/



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

    //начало расчёта сумм квадратов


    var sumSqr1 = 0;

    for (let i = 0; i < 3; i++) {
        let sumSqrI = 0;
        for (let cols = 0; cols < 3; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr1 += sumSqrI;
    }
    if (sumSqr1 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 1 " + sumSqr1);


    // следующий
    var sumSqr2 = 0;

    for (let i = 0; i < 3; i++) {
        let sumSqrI = 0;
        for (let cols = 3; cols < 6; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr2 += sumSqrI;
    }
    if (sumSqr2 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 2 " + sumSqr2);
    //следующий
    var sumSqr3 = 0;

    for (let i = 0; i < 3; i++) {
        let sumSqrI = 0;
        for (let cols = 6; cols < 9; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr3 += sumSqrI;
    }
    if (sumSqr3 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 3 " + sumSqr3);
    //следующий
    var sumSqr4 = 0;

    for (let i = 3; i < 6; i++) {
        let sumSqrI = 0;
        for (let cols = 0; cols < 3; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr4 += sumSqrI;
    }
    if (sumSqr4 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 4 " + sumSqr4);
    //следующий
    var sumSqr5 = 0;

    for (let i = 3; i < 6; i++) {
        let sumSqrI = 0;
        for (let cols = 3; cols < 6; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr5 += sumSqrI;
    }
    if (sumSqr5 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 5 " + sumSqr5);
    //следующий
    var sumSqr6 = 0;

    for (let i = 3; i < 6; i++) {
        let sumSqrI = 0;
        for (let cols = 6; cols < 9; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr6 += sumSqrI;
    }
    if (sumSqr6 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 6 " + sumSqr6);
    //следующий
    var sumSqr7 = 0;

    for (let i = 6; i < 9; i++) {
        let sumSqrI = 0;
        for (let cols = 0; cols < 3; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr7 += sumSqrI;
    }
    if (sumSqr7 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 7 " + sumSqr7);
    //следующий
    var sumSqr8 = 0;

    for (let i = 6; i < 9; i++) {
        let sumSqrI = 0;
        for (let cols = 3; cols < 6; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr8 += sumSqrI;
    }
    if (sumSqr8 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 8 " + sumSqr8);
    //следующий
    var sumSqr9 = 0;

    for (let i = 6; i < 9; i++) {
        let sumSqrI = 0;
        for (let cols = 6; cols < 9; cols++) {
            sumSqrI += table[i][cols];
        }
        sumSqr9 += sumSqrI;
    }
    if (sumSqr9 == sumN) {
        result.push("true");
    }
    else {
        result.push("false");
    }
    console.log("сумма квадрата 9 " + sumSqr9);
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


    console.log(result[0]);                     //проверочная хрень
    var right = result.every(function (x) {             //проверка элементов проверочного массива
        return x == "true";
    })
    console.log(right);
    console.log(table);
    console.log(result);

    if (right == true) {
        res.innerHTML = "Судоку решено верно";
    }
    else {
        res.innerHTML = "Судоку решено неверно";
    }
}

function clr() {
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let inputsI = document.getElementsByTagName('input')[i];
        // console.log(inputsI);
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
    res.innerHTML = "";
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        let inputsI = document.getElementsByTagName('input')[i];
        inputsI.value = '';
    }
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
