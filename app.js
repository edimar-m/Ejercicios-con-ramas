const texto = document.getElementById('texto');
const lista = document.getElementById('lista');


const palabras = ['perrito', 'gatito', 'Futbol', 'Motos'];

const pintarLista = arr => {
  let cajita = '';
  for (let index = 0; index < arr.length; index++) {
    cajita += `<li>${arr[index]}</li>`;
  };
  lista.innerHTML = cajita;
};

pintarLista(palabras);

texto.addEventListener('keyup', () => {
  let result = [];
  for (let index = 0; index < palabras.length; index++) {
    const palabra = palabras[index].toUpperCase();
    const ingresado = texto.value.toUpperCase();
    if(palabra.includes(ingresado)){
      result.push(palabras[index]);
    }
  }
  pintarLista(result);
})

//GASTOS

const moneda = document.getElementById('moneda');
const agregar = document.getElementById('agregar');
const gastos = document.getElementById('gastos');
const total = document.getElementById('total');

let arreglo = [];

agregar.addEventListener('click', () => {
  arreglo.push(moneda.value);
  pintarArreglo(arreglo);
})

const pintarArreglo = arr => {
  let totalMoneda = 0;
  let cajita = '';
  for (let index = 0; index < arr.length; index++) {
    cajita += `<li>${arr[index]}</li>`
    console.log(totalMoneda += parseInt(arr[index]))
  }
  gastos.innerHTML = cajita;
  total.innerHTML = `El total de los gastos es de:$${totalMoneda}`;
  moneda.value = '';
}
//subir a la rama gastos