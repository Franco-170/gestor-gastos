function menu() {
  let numero = parseInt(prompt("Ingresa un numero"));
  let continuar = true;
  while (continuar === true) {
    switch (numero) {
      case 1:
        agregarGastos(gastos);
        break;
      case 2:
        listarGastos();
        break;
      case 3:
        calcularTotal();
        break;
      case 3:
        eliminarGastos();
      case 4:
        continuar = false;
        break;
    }
  }
}
const gastos = [];
let contador = 1;
function agregarGastos(gastos) {
  let descripcion = prompt("Agrega una descripcion");
  let monto = parseInt(prompt("Agrega el monto"));
  let categoria = prompt("Agrega la categoria");
  gastos.push({
    id: contador,
    descripcion: descripcion,
    monto: monto,
    categoria: categoria,
  });
  contador++;
}
menu();
