//1 – 

function primeiraQuestao(text){
    return(Olá) + text + "!";
}

//2 
function segundaquestao(v1, v2, callback){
    console.log(callback(v1,v2));
}
segundaquestao(x, y, function(x, y){
    return x - y;
});

//3 –
function terceiraquestao(x, callback){
    return function verificar(y){
        callback(x,y);
    };
}
var numeros = terceiraquestao(21, function(x, y){
    x % y == 0 ? true : false;
    console.log(x);
    console.log(y);
});

//4 – 
function mesesdoano(mes){
    switch(mes){
        case 1:
            return 'janeiro';
            break;
        case 2:
            return 'fevereiro';
            break;
        case 3:
            return 'março';
            break;
        case 4:
            return 'abril';
            break;
        case 5:
            return 'maio';
            break;
        case 6:
            return 'junho';
            break;
        case 7:
            return 'julho';
            break;
        case 8:
            return 'agosto';
            break;
        case 9:
            return 'setembro';
            break;
        case 10:
            return 'outubro';
            break;
        case 11:
            return 'novembro';
            break;
        case 12:
            return 'dezembro';
            break;
        default:
            return 'Cê precisa colocar um número entre 1 e 12 ai amigão';
            break;
    }
}

//5 –
function verificarmaior(n1, n2){
    if(n1 > n2){
        return 'primeiro número é maior';
    }
    else {
        return 'segundo número é maior';
    }
}

function compara(a, b, callback){
    return callback(a, b);
}