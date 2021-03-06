function showResults(n, tituloKata) {
    const result = document.createElement("p");
    const titulo = document.createElement("p");
    titulo.innerText = tituloKata;
    result.innerText = n + ', ';
    const destination = document.getElementById("resultado")
    destination.appendChild(titulo);
    destination.appendChild(result);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // criar uma variavel (array) para guardar o resultado
    // retornar valores de 1 a 25
    // criar um loop for até 25
    // ao final do loop usar o return e showResults para retornar o resultado

    let results = [];

    for(let i = 1; i <= 25; i++) {
        results.push(i);
    }

    const titulo = "Kata 1";

    showResults(results, titulo);
    return results;
}

kata1();

function kata2() {
    // implemente o código do kata 2 aqui

    let resultado = [];

    for(let i = 25; i > 0; i--) {
        resultado.push(i);
    }

    const titulo = "Kata 2";

    showResults(resultado, titulo);
    return resultado;
}

kata2();

function kata3() {
    // implemente o código do kata 3 aqui

    let resultado = [];

    for(let i = -1; i >= -25; i--) {
        resultado.push(i)
    }

    const titulo = "Kata 3";

    showResults(resultado, titulo);
    return resultado;
}

kata3();

function kata4() {
    // implemente o código do kata 4 aqui

    let resultado = [];

    for(let i = -25; i <= -1; i++) {
        resultado.push(i);
    }

    const titulo = "Kata 4";

    showResults(resultado, titulo);
    return resultado;
}

kata4();

function kata5() {
    // implemente o código do kata 5 aqui

    let resultado = [];

    for(let i = 25; i >= -25; i--) {
        if(i % 2 !== 0) {
            resultado.push(i);
        }
    }

    const titulo = "Kata 5";

    showResults(resultado, titulo);
    return resultado;
}

kata5();

function kata6() {
    // implemente o código do kata 6 aqui

    let resultado = [];

    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0) {
            resultado.push(i);
        }
    }

    const titulo = "Kata 6";

    showResults(resultado, titulo);
    return resultado;
}

kata6();

function kata7() {
    // implemente o código do kata 7 aqui

    let resultado = [];

    for(let i = 1; i <= 100; i++) {
        if(i % 7 === 0) {
            resultado.push(i);
        }
    }

    const titulo = "Kata 7";

    showResults(resultado, titulo);
    return resultado;
}

kata7();

function kata8() {
    // implemente o código do kata 8 aqui

    let resultado = [];

    for(let i = 100; i > 0; i--) {
        if(i % 3 === 0 || i % 7 === 0) {
            resultado.push(i);
        }
    }

    const titulo = "Kata 8";

    showResults(resultado, titulo);
    return resultado;
}

kata8();

function kata9() {
    // implemente o código do kata 9 aqui

    let resultado = [];

    for(let i = 1; i <= 100; i++) {
        if(i % 2 !== 0 && i % 5 === 0) {
            resultado.push(i);
        }
    }

    const titulo = "Kata 9";

    showResults(resultado, titulo);
    return resultado;
}

kata9();

function kata10() {
    // implemente o código do kata 10 aqui

    const titulo = "Kata 10";

    showResults(sampleArray, titulo);
    return sampleArray;
}

kata10();

function kata11() {
    // implemente o código do kata 11 aqui

    let resultado = [];

    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0) {
            resultado.push(sampleArray[i]);
        }
    }

    const titulo = "Kata 11";

    showResults(resultado, titulo);
    return resultado;
}

kata11();

function kata12() {
    // implemente o código do kata 12 aqui

    let resultado = [];

    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {
            resultado.push(sampleArray[i]);
        }
    }

    const titulo = "Kata 12";

    showResults(resultado, titulo);
    return resultado;
}

kata12()

function kata13() {
    // implemente o código do kata 13 aqui

    let resultado = [];

    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {
            resultado.push(sampleArray[i]);
        }
    }

    const titulo = "Kata 13";

    showResults(resultado, titulo);
    return resultado;
}

kata13();

function kata14() {
    // implemente o código do kata 14 aqui

    let resultado = [];

    for(let i = 0; i < sampleArray.length; i++) {
        resultado.push(sampleArray[i] * sampleArray[i]);
    }

    const titulo = "Kata 14";

    showResults(resultado, titulo);
    return resultado;
}

kata14();

function kata15() {
    // implemente o código do kata 15 aqui

    let soma = 0;

    for(let i = 0; i <= 20; i++) {
        soma += i;
    }

    const titulo = "Kata 15";

    showResults(soma, titulo);
    return soma;
}

kata15();

function kata16() {
    // implemente o código do kata 16 aqui

    let soma = 0;

    for(let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i];
    }

    const titulo = "Kata 16";

    showResults(soma, titulo);
    return soma;
}

kata16();

function kata17() {
    // implemente o código do kata 17 aqui

    let resultado = 1000;

    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] < resultado) {
            resultado = sampleArray[i];
        }
    }

    const titulo = "Kata 17";

    showResults(resultado, titulo);
    return resultado;
}

kata17();

function kata18() {
    // implemente o código do kata 18 aqui

    let resultado = 0;

    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] > resultado)
        resultado = sampleArray[i];
    }

    const titulo = "Kata 18";

    showResults(resultado, titulo);
    return resultado;
}

kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui

    for(let i = 0; i < 20; i++) {
        let retangulo = document.createElement("div");
        retangulo.style.height = "20px";
        retangulo.style.width = "100px";
        retangulo.style.border = "2px solid #6c757d";
        const destination = document.getElementById("resultado");
        destination.appendChild(retangulo);
    }
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui

    let largura = 105;

    for(let i = 0; i < 20; i++) {
        let retangulo = document.createElement("div");
        retangulo.style.height = "20px";
        retangulo.style.width = largura + "px";
        retangulo.style.border = "2px solid #6c757d";
        const destination = document.getElementById("resultado");
        destination.appendChild(retangulo);
        largura += 5;
    }
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui

    for(let i = 0; i < sampleArray.length; i++) {
        let retangulo = document.createElement("div");
        retangulo.style.height = "20px";
        retangulo.style.width = sampleArray[i] + "px";
        retangulo.style.border = "2px solid #6c757d";
        const destination = document.getElementById("resultado");
        destination.appendChild(retangulo);
    }
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui

    for(let i = 0; i < sampleArray.length; i++) {
        let retangulo = document.createElement("div");
        retangulo.style.height = "20px";
        retangulo.style.width = sampleArray[i] + "px";
        if(i % 2 === 0) {
            retangulo.style.border = "2px solid #dc2f02";
            retangulo.style.backgroundColor = "#6a040f";
        } else {
            retangulo.style.border = "2px solid #212529";
            retangulo.style.backgroundColor = "#6c757d";
        }
        const destination = document.getElementById("resultado");
        destination.appendChild(retangulo);
    }
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui

    for(let i = 0; i < sampleArray.length; i++) {
        let retangulo = document.createElement("div");
        retangulo.style.height = "20px";
        retangulo.style.width = sampleArray[i] + "px";
        if(sampleArray[i] % 2 === 0) {
            retangulo.style.border = "2px solid #dc2f02";
            retangulo.style.backgroundColor = "#6a040f";
        } else {
            retangulo.style.border = "2px solid #212529";
            retangulo.style.backgroundColor = "#6c757d";
        }
        const destination = document.getElementById("resultado");
        destination.appendChild(retangulo);
    }
}
