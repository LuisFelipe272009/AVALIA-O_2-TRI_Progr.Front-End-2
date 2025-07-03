let inscritos = 0;
let equipes = 0;

function calcular () {
    inscritos +=1;
    equipes = parseInt(inscritos / 3);
    alert ("Número de inscritos" + inscritos + "equipe:" + equipes);

    if(equipes>= 4) {
        alert("O limite de equipes foi atingido. O campeonato pode iniciar (3x3x3x3)");
    }
}