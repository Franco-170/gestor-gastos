function menu() {
  let continuar = true;
  while (continuar) {
    let numero = parseInt(prompt("Ingresa un numero"));
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
      case 4:
        eliminarGastos();
        break;
      case 5:
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
  if (!descripcion || descripcion.trim() === "") {
    alert("Error. Intentalo otra vez");
    return;
  }
  if (isNaN(monto) || monto <= 0) {
    alert("Error. Ingresa monto valido");
    return;
  }
  if (!categoria || categoria.trim() === "") {
    alert("Error. Intentalo otra vez");
    return;
  }
  gastos.push({
    id: contador,
    descripcion: descripcion,
    monto: monto,
    categoria: categoria,
  });
  contador++;
}
menu();
