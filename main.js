function menu() {
  let numero = parseInt(prompt("Ingresa un numero"));
  let continuar = true;
  while (continuar === true) {
    switch (numero) {
      case 1:
        agregarGastos();
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
menu();
