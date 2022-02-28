export interface Propietario{
    titulo      : string,
    descripcion : string,
    boton       : string,
    href        : string,
    routing     : boolean
}
export interface Enlaces{
    title   : string,
    href    : string,
    externo : boolean
}
export interface Tarjetainfo{
    tipo          : string,
    imagen        : string,
    categoria?    : Array<string>,
    titulo        : string,
    nota?         : Array<number>,
    dobleYums?    : boolean,
    insider?      : boolean,
    pay?          : boolean,
    parrafo?      : string,
    precio?       : number,
    descuento?    : string,
    aceptaYums?   : boolean,
    enlace?       : string,
    routing?      : boolean,
    textoEnlace?  : string,
    imagenes?     : Array<string>,
    detalles?     : Array<Detalles>
}
export interface Sliders{
    titulo      : string,
    cuantosVeo  : number,
    tipoSlider  : string,
    contenido   : Array<Tarjetainfo>
}
export interface Detalles{
    boton :  string,
    texto :  Array<DetallesRestaurante>,
    enlace? : string,
    insider? : boolean,
    tipo?    : string
}
export interface DetallesRestaurante{
    parrafo : string,
    precio? : number
}
export interface Mes{
    ano : number,
    mes : string,
    dias : number
}