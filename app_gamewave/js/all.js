let items = document.querySelector('#items')

let catalogo = [
    {
        ID: 0,
        Nombre: 'GABINETE CORSAIR CARBIDE DELTA RGB',
        Imagen: './imagenes/gabinete.jpg',
        Descripcion: 'Gabinete MID Tower',
        Precio: 14.291 ,
    },
    {
        ID: 1,
        Nombre: 'MOUSE LOGITECH G203',
        Imagen: './imagenes/mouselg.jpg',
        Descripcion: 'Mouse RGB 6800DPI',
        Precio: 3.922,
    },
    {
        ID: 2,
        Nombre: 'GEFORCE GTX 1650 4GB MSI OC',
        Imagen: './imagenes/placavideo.jpg',
        Descripcion: 'Tarjeta Grafica MSI',
        Precio: 22.059,
    },
    {
        ID: 3,
        Nombre: 'TECLADO GX GENIUS K8',
        Imagen: './imagenes/teclado.jpg',
        Descripcion: 'Teclado GX de Membrana',
        Precio: 2.341,
    },
    {
        ID: 4,
        Nombre: 'DISCO HDD 1TB SATA3',
        Imagen: './imagenes/disco.jpg',
        Descripcion: 'Disco Rigido de 1TB',
        Precio: 4.593,
    },
    {
        ID: 5,
        Nombre: 'TECLADO HYPERX ALLOY FPS PRO',
        Imagen: './imagenes/teclado2.jpg',
        Descripcion: 'Teclado Mecanico Hyperex',
        Precio: 7.599,
    },
    {
        ID: 6,
        Nombre: 'AURICULAR LOGITECH PRO',
        Imagen: './imagenes/auricular.jpg',
        Descripcion: 'Auriculares Wireless Logitech',
        Precio: 14.441,
    },
    {
        ID: 7,
        Nombre: 'WEBCAM LOGITECH C922 PRO HD',
        Imagen: './imagenes/webcam.jpg',
        Descripcion: 'Webcam Full HD Logitech',
        Precio: 11.889,
    },
    {
        ID: 8,
        Nombre: 'MICROFONO TRUST EXXO',
        Imagen: './imagenes/microfono.jpg',
        Descripcion: 'Microfono de Mesa Trust',
        Precio: 19.731,
    },
    {
        ID: 9,
        Nombre: 'MONITOR 24" MSI OPTIX 144Hz',
        Imagen: './imagenes/monitor.jpg',
        Descripcion: 'Monitor 24" 144Hz',
        Precio: 54.917,
    },
]

catalogo.forEach(producto=>draw(producto))

function draw(info) {
    let card = document.createElement('div')
    card.setAttribute('id', info['ID'])
    card.classList.add('card','col-sm-5','col-md-3')

    let productos = document.createElement('div')
    productos.classList.add('card-body', 'align-items-center', 'd-flex', 'row')

    let titulo = document.createElement('h2')
    titulo.classList.add('card-title','h5','font-barlow-500')
    titulo.textContent = info['Nombre']

    let imagen = document.createElement('img')
    imagen.classList.add('img-fluid','pb-3','mh-3')
    imagen.setAttribute('src', info['Imagen'])

    let precio = document.createElement('p')
    precio.classList.add('font-barlow-500')
    precio.textContent = info['Precio'] + '$'

    let btnSuma = document.createElement('button')
    btnSuma.classList.add('btn','background-primary','btn-block','font-barlow-300')
    btnSuma.textContent = 'AGREGAR'
    btnSuma.setAttribute('marcador', info['ID'])

    let btnVerMas = document.createElement('button')
    btnVerMas.classList.add('btn','border-cl-primary','btn-block','font-barlow-300')
    btnVerMas.textContent = 'Ver Más'
    btnVerMas.setAttribute('marcador', info['ID'])
    btnVerMas.addEventListener('click', Ampliar)

    productos.appendChild(titulo)
    productos.appendChild(imagen)
    productos.appendChild(precio)
    productos.appendChild(btnSuma)
    productos.appendChild(btnVerMas)
    card.appendChild(productos)
    items.appendChild(card)
}

function Ampliar(){
    let info = catalogo[this.getAttribute('marcador')]

    let fademodal = document.createElement('div')
    fademodal.classList.add('fade-modal','fixed-top','justify-content-center','align-items-center','d-flex','container-fluid')
    document.querySelector('body').style.overflow = 'hidden'
    

    let modale = document.createElement('div')
    modale.classList.add('modales','row')

    let headerModal = document.createElement('div')
    headerModal.classList.add('col-12')
    let title = document.createElement('h2')
    title.classList.add('h4','font-barlow-500')
    title.textContent = info['Nombre'] 

    let btnCerrar = document.createElement('button')
    btnCerrar.classList.add('btn','color-primary','font-barlow-500')
    btnCerrar.textContent = 'Cerrar'
    btnCerrar.addEventListener('click', CerrarModal)

    let divImg = document.createElement('div')
    divImg.classList.add('text-center','col-12')

    let imgProducto = document.createElement('img')
    imgProducto.classList.add('img-fluid','pb-3')
    imgProducto.setAttribute('src', info['Imagen'])

    let divDesc = document.createElement('div')
    divDesc.classList.add('col-12')

    let descripcion = document.createElement('p')
    descripcion.textContent = info['Descripcion']


    let btnMagregar = document.createElement('button')
    btnMagregar.classList.add('btn','background-primary','btn-block','font-barlow-300')
    btnMagregar.textContent = 'AGREGAR AL CARRITO'
    btnMagregar.setAttribute('marcador', info['ID'])

    modale.appendChild(headerModal)
    headerModal.appendChild(btnCerrar)
    headerModal.appendChild(title)

    divImg.appendChild(imgProducto)
    modale.appendChild(divImg)

    divDesc.appendChild(descripcion)
    divDesc.appendChild(btnMagregar)
    modale.appendChild(divDesc)

    fademodal.appendChild(modale)
    document.querySelector('body').appendChild(fademodal)
}


function CerrarModal() {
    document.querySelector('.fade-modal').remove()
    document.querySelector('body').style.overflow = ''
}

function Carrito() {
    fadeModal = document.createElement('div')
    fadeModal.classList.add('fade-modal','fixed-top','align-items-center','d-flex')
    document.querySelector('body').style.overflow = 'hidden'

    let modale = document.createElement('div')
    modale.classList.add('modales')

    let title = document.createElement('h2')
    title.classList.add('h4','pt-1','pb-3','font-barlow-500','m-auto','text-center')
    title.textContent = 'CARRITO' 

    let btnCancelarCompra = document.createElement('button')
    btnCancelarCompra.classList.add('btn','color-primary','font-barlow-500','font-small','pl-0')
    btnCancelarCompra.textContent = 'CANCELAR COMPRA'
    btnCancelarCompra.addEventListener('click', CerrarModal)

    let divProducto = document.createElement('div')
    divProducto.classList.add('d-flex')

    let imgProducto = document.createElement('img')
    imgProducto.classList.add('img-fluid','pb-3','w-45')
    imgProducto.setAttribute('src', './imagenes/gabinetemini.jpg')

    let divInfo = document.createElement('div')

    let titleProducto = document.createElement('h2')
    titleProducto.textContent = 'GABINETE CORSAIR CARBIDE DELTA RGB'
    titleProducto.classList.add('h6','font-barlow-500')

    let priceProduct = document.createElement('p')
    priceProduct.textContent = '14.291$'
    priceProduct.classList.add('font-barlow-500','color-primary')

    /* ------------------------------------------------------------------------------------------------------- */
    let divProducto2 = document.createElement('div')
    divProducto2.classList.add('d-flex')

    let imgProducto2 = document.createElement('img')
    imgProducto2.classList.add('img-fluid','pb-3','w-45')
    imgProducto2.setAttribute('src', './imagenes/mousemini.jpg')

    let divInfo2 = document.createElement('div')

    let titleProducto2 = document.createElement('h2')
    titleProducto2.textContent = 'MOUSE LOGITECH G203'
    titleProducto2.classList.add('h6','font-barlow-500')

    let priceProduct2 = document.createElement('p')
    priceProduct2.textContent = '3.922$'
    priceProduct2.classList.add('font-barlow-500','color-primary')
    /* ------------------------------------------------------------------------------------------------------- */

    let divDesc = document.createElement('div')
    divDesc.classList.add('d-flex','justify-content-center')

    let btnFinalizarCompra = document.createElement('button')
    btnFinalizarCompra.classList.add('btn','background-primary','btn-block','font-barlow-300','w-75')
    btnFinalizarCompra.textContent = 'FINALIZAR COMPRA'
    btnFinalizarCompra.addEventListener('click', DatosCompra)


    modale.appendChild(btnCancelarCompra)
    modale.appendChild(title)

    divProducto.appendChild(imgProducto)
    divProducto.appendChild(divInfo)

    divInfo.appendChild(titleProducto)
    divInfo.appendChild(priceProduct)
    modale.appendChild(divProducto)

/* ------------------------------------------------ */

    divProducto2.appendChild(imgProducto2)
    divProducto2.appendChild(divInfo2)

    divInfo2.appendChild(titleProducto2)
    divInfo2.appendChild(priceProduct2)
    modale.appendChild(divProducto2)

/* ------------------------------------------------ */

    divDesc.appendChild(btnFinalizarCompra)
    modale.appendChild(divDesc)

    fadeModal.appendChild(modale)
    document.querySelector('body').appendChild(fadeModal)
}

/* ----------------- FORMULARIO DE COMPRA ----------------- */
function CerrarModal2() {
    document.querySelector('.fade-modal2').remove()
    document.querySelector('body').style.overflow = ''
}

function DatosCompra(){

    let fademodal = document.createElement('div')
    fademodal.classList.add('fade-modal2','fixed-top','justify-content-center','d-flex')
    document.querySelector('body').style.overflow = 'hidden'
    fademodal.setAttribute('id', 'datosform')

    let modale = document.createElement('div')
    modale.classList.add('bg-light','p-3','modales','text-center')

    let datos = document.createElement('h2')
    datos.textContent = 'DATOS DE COMPRA'
    datos.classList.add('font-barlow-500','h4')

    let asideForm = document.createElement('aside')
    asideForm.classList.add('contact','col-12','m-auto','col-sm-4')

    let form = document.createElement('form')
    form.classList.add('m-auto','p-3')
    form.setAttribute('action','#')

    let inpName = document.createElement('input')
    inpName.setAttribute('name','Nombre')
    inpName.setAttribute('type','text')
    inpName.setAttribute('placeholder','Nombre')
    inpName.setAttribute('id','nameV')

    let inpMail = document.createElement('input')
    inpMail.setAttribute('name','email')
    inpMail.setAttribute('type','email')
    inpMail.setAttribute('placeholder','Email')
    inpMail.classList.add('my-4')

    let inpDirec = document.createElement('input')
    inpDirec.setAttribute('name','email')
    inpDirec.setAttribute('type','text')
    inpDirec.setAttribute('placeholder','Lugar de entrega')
    inpDirec.setAttribute('id','direcV')

    let inpTarjeta = document.createElement('input')
    inpTarjeta.classList.add('mt-4')
    inpTarjeta.setAttribute('name','tarjeta')
    inpTarjeta.setAttribute('type','number')
    inpTarjeta.setAttribute('placeholder','Numero de Tarjeta')

    let label = document.createElement('label')
    label.classList.add('my-4','mr-3')
    label.textContent = 'Horario de Entrega:'
    label.setAttribute('for','horario')

    let select = document.createElement('select')
    select.setAttribute('name','horario')

    let opcion1 = document.createElement('option')
    opcion1.textContent = '07:00 - 12:00'
    opcion1.setAttribute('value','mañana')

    let opcion2 = document.createElement('option')
    opcion2.textContent = '12:00 - 17:00'
    opcion2.setAttribute('value','tarde')

    let opcion3 = document.createElement('option')
    opcion3.textContent = '17:00 - 21:00'
    opcion3.setAttribute('value','noche')

    let inpSend = document.createElement('input')
    inpSend.classList.add('btn','background-primary','font-barlow-300')
    inpSend.setAttribute('value','Finalizar Compra')
    inpSend.setAttribute('type','submit')

    let btnCerrar = document.createElement('button')
    btnCerrar.classList.add('btn','border','border-secondary')
    btnCerrar.textContent = 'Cancelar Compra'
    btnCerrar.addEventListener('click', CerrarModal2)

    let elementos = [inpName,inpMail,inpDirec,inpTarjeta,label,select,inpSend]
    elementos.forEach(elementos => form.appendChild(elementos))

    select.appendChild(opcion1)
    select.appendChild(opcion2)
    select.appendChild(opcion3)
    asideForm.appendChild(form)
    modale.appendChild(datos)
    modale.appendChild(asideForm)
    modale.appendChild(btnCerrar)
    fademodal.appendChild(modale)
    document.querySelector('body').appendChild(fademodal)
}

