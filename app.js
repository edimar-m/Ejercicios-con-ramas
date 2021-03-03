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
