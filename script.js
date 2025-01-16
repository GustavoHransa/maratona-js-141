/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.*/

   function soma(){

            let num1 = parseInt(document.getElementById("n1").value);
            let num2 = parseInt(document.getElementById("n2").value);
            let soma = num1+num2;
            alert(soma);
            
        }
/* 2 opção =
   const funSoma = (num1,num2)  => alert.(num1 + num2) ;
   funSoma(valor1,valor2);
   
   /*

   /*
2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".*/



function parImpar(){

    let num3 = parseInt(document.getElementById("n3").value);
    let total=num3/2;
    if(num3%2 == 0){
        alert("Par");
    }else{
        alert("Impar");
    }
    
}


/*
3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.


*/
function Loop(){
    
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i; 
        if (i < 10) {
            output += ",";
        }
    }
    alert(output);

    }

/*

4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.

*/

function calcularTabuada() {
    let numero = parseInt(document.getElementById("n4").value);
    let resultado = ""; 

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`; 
    }

    alert(resultado); 
}

/*




5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.

*/ 

function encontrarMaiorNumero() {
    
    let numeros = [3, 7, 2, 9, 5];
    let maiorNumero = numeros[0]; 

   
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]; 
        }
    }
    alert("O maior número é: "+ maiorNumero);
}


/*

6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.

*/

function inverterPalavra() {
   
    let palavra = document.getElementById("palavra").value;

    let palavraInvertida = palavra.split('').reverse().join('');

    document.getElementById("resultado").innerText = "Palavra invertida: " + palavraInvertida;
}

/*

7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.

*/

function calcularSoma() {

    const numeros = [1, 2, 3, 4, 5];
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    alert("A soma dos elementos do array é: "+ soma);
}


/*

8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".

*/

function verificarPrimo() {

    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado2");


    if (numero < 2) {
        resultado.innerText = "Não é primo";
        return;
    }


    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            resultado.innerText = "Não é primo";
            return;
        }
    }

    resultado.innerText = "É primo";
}

/*

9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.

*/
function calcularFatorial() {
   
    let numero = parseInt(document.getElementById("numero3").value);
    let resultado = 1;
    
    if (numero < 0) {
        console.log("O fatorial não está definido para números negativos.");
        return;
    }
  
    for (let i = 1; i <= numero; i++) {
        resultado *= i; 
    }

  
    alert("O fatorial de " + numero + " é: " + resultado);
}


/*

10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.

*/

function verificarPalindromo() {

    let palavra = document.getElementById("palavra2").value;
    let palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    let palavraInvertida = palavraLimpa.split('').reverse().join('');

    if (palavraLimpa === palavraInvertida) {
        alert(`"${palavra}" é um palíndromo.`);
    } else {
        alert(`"${palavra}" não é um palíndromo.`);
    }
}

/*

11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.


*/

function contarVogais() {
    let frase = document.getElementById("frase").value;
    let contador = 0;

    frase = frase.toLowerCase();

    for (let i = 0; i < frase.length; i++) {

        if ('aeiou'.includes(frase[i])) {
            contador++; 
        }
    }

    document.getElementById("resultado4").innerText = "Total de vogais: " + contador;
}


/*

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.

*/
function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    alert("Número aleatório gerado:" + numeroAleatorio);
}

/*

13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.

*/

function substituirNegativos() {
    let numeros = [4, -3, 2, -1, 0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            numeros[i] = 0;
        }
    }

    alert("Array após substituição:" + numeros);
}

/*

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

*/

function verificarPalavrasProibidas() {

    const palavrasProibidas = ['imposto', 'taxa'];

    const texto = document.getElementById('texto2').value;


    for (let i = 0; i < palavrasProibidas.length; i++) {
        if (texto.includes(palavrasProibidas[i])) {
            alert(`A frase contém uma palavra proibida: ${palavrasProibidas[i]}`);
            return;
        }
    }

    alert("Nenhuma palavra proibida encontrada.");
}


/*

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/


function gerarNumerosPares() {
    let numerosPares = [];

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) { 
            numerosPares.push(i);
        }
    }

    alert("Números pares entre 1 e 20:" + numerosPares);
}
