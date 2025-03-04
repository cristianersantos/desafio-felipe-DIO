/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  /**************************************************************************************************/

  class Heroina{
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    apresentar(){
    console.log(`Saudações! Eu sou ${this.nome}, uma ${this.tipo},  e tenho ${this.idade} anos.`);
    };

    atacar() {
      let ataque;

      //Uso da estrutura de repetição Switch case conforme aulas anteriores
      switch (this.tipo.toLowerCase()){
        case "ninja":
          ataque = "haduken";
          break;
        case "guerreira":
          ataque = "espada";
          break;
        case "feiticeira":
          ataque = "feitiço que transforma em animal";
          break;
        case "mutante":
          ataque = "raios e trovões";
          break;
        default:
          ataque = "realizou um ataque desconhecido"

      }

      console.log(`A ${this.tipo} atacou usando ${ataque}.`);
    }
  }

  const heroina1 = new Heroina("Onika", 25, "Ninja");
  const heroina2 = new Heroina("Nzinga", 30, "Guerreira");
  const heroina3 = new Heroina("Shuri", 200, "Feiticeira");
  const heroina4 = new Heroina("Tempestade", 40, "Mutante");

  heroina1.apresentar();
  heroina1.atacar();
  console.log("----------------")

  heroina2.apresentar();
  heroina2.atacar();
  console.log("----------------")

  heroina3.apresentar();
  heroina3.atacar();
  console.log("----------------")

  heroina4.apresentar();
  heroina4.atacar();
  

  
  
  
