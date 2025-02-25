/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
/***************************************************************/

function saldoVitorias(Vitorias, Derrotas) {
    let saldoVitorias = (Vitorias - Derrotas) 
    return saldoVitorias
};

let resultado = saldoVitorias(90, 20);

let nivel;

if(resultado < 10) {  // Usar "resultado" em vez de "saldoVitorias"
    nivel = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário";
} else if (resultado >= 101) {
    nivel = "Imortal";
}

console.log("O Herói tem saldo de " + resultado + " está no nível de " + nivel);







