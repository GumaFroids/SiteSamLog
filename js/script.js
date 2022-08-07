// cria uma variavel com o valor 1
let count = 1;

// aqui vai deixar o radio1 como ativo 
document.getElementById("radio1").checked = true;

// setInterval serve para fazer algo em um tempo determinado em milessimos de segundos
// aqui no caso esta puxando uma função nextImage que vai repetir a cada 5 segundos
setInterval( function(){
	nextImage();
}, 5000)

// Aqui foi feita uma function nextImage para ir adicionando +1 no count e qdo chegar ao 4 deixar o count = 1
function nextImage(){
	// adiciona +1
	count++;
	// se count for maior que 4 ---> count vai receber 1
	if(count>4){
		count = 1;
	}
	// Aqui vai colocar o valor do count no lado do radio e deixando ele como ativo
	// Cada vez que chama essa funcao vai mudar o count assim o radio vai ficar com 1, 2, 3, 4 e voltar para 1 em loop infinito de 1 a 4
	document.getElementById("radio"+count).checked = true;
}