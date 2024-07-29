document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidadImagenes = 16

    for(let i = 1; i <= cantidadImagenes; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `img/gallery/full/${i}.jpg`;

        //Event Handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG');
    imagen.src = `img/gallery/full/${i}.jpg`;

    //generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    //generar boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(cerrarModalBtn)
    modal.appendChild(imagen)

    //agregar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(() => {
     modal?.remove()

     const body = document.querySelector('body')
     body.classList.remove('overflow-hidden')

    }, 500);
    //nueva forma de contemplar un "si Existe una clase"(en este caso)
   
}