var valor;
var resultado;
function botao(num) {
  valor = document.calculadora.entrada.value += num;
}

function calcula() {
  resultado = eval(valor);
  document.calculadora.entrada.value = resultado.toLocaleString("pt-BR");

}
