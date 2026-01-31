function menu() {
  let continuar = true;
  while (continuar) {
    let numero = parseInt(
      prompt(
        "Ingresa un numero: (1: Agregar gastos | 2: Listar gastos | 3: Calcular total | 4: Eliminar gastos | 5: Salir)",
      ),
    );
    switch (numero) {
      case 1:
        agregarGastos(gastos);
        break;
      case 2:
        listarGastos(gastos);
        break;
      case 3:
        calcularTotal(gastos);
        break;
      case 4:
        gastos = eliminarGastos(gastos);
        break;
      case 5:
        continuar = false;
        break;
      default:
        alert("El numero ingresado no es correcto");
    }
  }
}

let gastos = [];
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

function listarGastos(gastos) {
  if (gastos.length === 0) {
    alert("No hay registro de gastos");
    return;
  }
  for (let gasto of gastos) {
    console.log(
      `Id: ${gasto.id} | Descripcion: ${gasto.descripcion} | Monto: ${gasto.monto} | Categoria: ${gasto.categoria}`,
    );
  }
}

function calcularTotal(gastos) {
  let total = gastos.reduce((acc, gasto) => {
    return (acc += gasto.monto);
  }, 0);
  console.log(`El total es de: ${total}`);
}

function eliminarGastos(gastos) {
  let encontrado = false;
  let eliminar = parseInt(prompt("Ingresa el id"));
  for (let gasto of gastos) {
    if (eliminar === gasto.id) {
      encontrado = true;
      return gastos.filter((gasto) => gasto.id !== eliminar);
    }
  }
  if (!encontrado) {
    alert("Id no encontrado");
    return gastos;
  }
}
menu();
