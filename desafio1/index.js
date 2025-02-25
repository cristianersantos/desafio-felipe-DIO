// Desfio: Classificador de nível de  Herói
/***O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" ***************************************/

let nomeHeroi = "Tempestade";
let quantidadeExperiencia = 8001;

let nivel;

if(quantidadeExperiencia < 1000) {
    nivel = "Ferro";
} else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000) {
    nivel = "Bronze";
}else if(quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000) {
    nivel="Prata";
}else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <=7000){
    nivel="Ouro";
}else if(quantidadeExperiencia >= 7001 && quantidadeExperiencia <=8000){
    nivel="Platina";

}else if(quantidadeExperiencia >= 8001 && quantidadeExperiencia <=9000){
    nivel="Ascendente";
}else if(quantidadeExperiencia >= 9001 && quantidadeExperiencia <=10000){
    nivel="Imortal";
}else if(quantidadeExperiencia >= 10000){
    nivel="Radiante";
}

console.log("A Heroína de nome " + nomeHeroi + " está no nível de " + nivel);