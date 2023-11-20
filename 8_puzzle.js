var solucao = 0;
var matriz_cores = [];
var cores = [];
var tabuleiro = [];
var movimento = 0;
var x_branco = 0;
var y_branco = 0;
var dificuldade = 100;

window.onload = function () {
    nova_partida();
    preenche_tabuleiro();

}

function nova_partida() {
    movimento = 0;
    // coordenadas do branco
    x_branco = 0;
    y_branco = 0;
    document.getElementById("resultado").innerHTML = "<strong>Dificuldade";
    if (frmSetup.dificuldade.value == 'D') {
        dificuldade = 100;
    }
    else if (frmSetup.dificuldade.value == 'N') {
        dificuldade = 50;
    }

    else {
        dificuldade = 5;
    }

    inicializa_variaveis();
    
}

function inicializa_variaveis() {
    movimento = 0;
    document.getElementById("jogadas_realizadas").innerHTML = "movimentos: " + movimento;
    // coordenadas do branco
    x_branco = 0;
    y_branco = 0;

    matriz_cores[0] = ["#FF8000", "#CC0000", "#660066"];
    matriz_cores[1] = ["#009900", "#000000", "#FF66FF"];
    matriz_cores[2] = ["#66FF66", "#0000CC", "#A8A8A8"];


    cores = ["#FF8000", "#CC0000", "#660066", "#009900", "#000000", "#FF66FF", "#66FF66", "#0000CC", "#A8A8A8"];
    tabuleiro[0] = [0, 0, 0];
    tabuleiro[1] = [0, 0, 0];
    tabuleiro[2] = [0, 0, 0];
    k = 0;
    // preenche o tabuleiro já solucionado.
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            k++;
            tabuleiro[i][j] = k;
        }
    }

    // guarda a posição inicial do branco (valor 9)
    x_branco = 2;
    y_branco = 2;
    movimento = 0;

}

function preenche_tabuleiro() {
    cont = 0;
    for (i = 0; i < tabuleiro.length; i++) {
        for (j = 0; j < tabuleiro[i].length; j++) {
            cont = cont + 1;
            if (tabuleiro[i][j] != 9) {
                celulaTabela = document.getElementById('celula_' + (cont));
                matriz_cores[i][j] = cores[tabuleiro[i][j] - 1];
                document.getElementById('celula_' + (cont)).style.background = "" + matriz_cores[i][j];
                celulaTabela.innerHTML = "" + tabuleiro[i][j];
            }

            else {
                celulaTabela = document.getElementById('celula_' + (cont));
                celulaTabela.innerText = "";
                matriz_cores[i][j] = cores[tabuleiro[i][j] - 1];
                document.getElementById('celula_' + (cont)).style.background = "" + matriz_cores[i][j];
            }
        }
    }

}
function verifica_se_ganhou() {
    let count = 1;
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            if (tabuleiro[i][j] !== count) {
                return false;
            }
            count++;
        }
    }
    return true;
}
function imprime_vitoria(solucao) {
    if (solucao) {
        document.getElementById("resultado").innerHTML = "<strong>Parabéns, você venceu!</strong>";
    }
}
function checaControles(tecla) {
    let direcao = "";
    switch (tecla) {
        case 37:
            direcao = "Esquerda";
            break;
        case 38:
            direcao = "Cima";
            break;
        case 39:
            direcao = "Direita";
            break;
        case 40:
            direcao = "Baixo";
            break;
        default:
            direcao = "Tecla não reconhecida";
            break;
    }
    document.getElementById("jogadas_realizadas").innerHTML = "Movimento: " + direcao;
}
window.onload = function () {
    nova_partida();
    preenche_tabuleiro();
    solucao = verifica_se_ganhou();
    imprime_vitoria(solucao);
}
