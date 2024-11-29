
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.queryselector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){

elementos1.addEventListener('click', comprarElemento);
carrito.addEventListener('click', eliminarElemento);
vaciarcarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento= e.target.parentElement.parentElement;
        leerDatosElemento(elemento);

    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.queryselector('img').src,
        titulo: elemento.queryselector('h3').textContent,
        precio: elemento.queryselector('.precio').textContent,
        id: elemento.queryselector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `

        <td>
        <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}">X </a>
        </td>
    `;
    lista.appendChild(row);

}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento= e.target.parentElement.parentElement;
        elementoId=elemento.queryselector('a').getAttribute('data-id');
    }


}

function vaciarCarrito() {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
       }
       return false;

}

