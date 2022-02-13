let meses = [
    {
        mes : 'Enero',
        dias : 31
    },   
    {
        mes : 'Febrero',
        dias : 28
    },  
    {
        mes : 'Marzo',
        dias : 31
    },  
    {
        mes : 'Abril',
        dias : 30
    },  
    {
        mes : 'Mayo',
        dias : 31
    },  
    {
        mes : 'Junio',
        dias : 30
    },  
    {
        mes : 'Julio',
        dias : 31
    },  
    {
        mes : 'Agosto',
        dias : 31
    },  
    {
        mes : 'Septiembre',
        dias : 30
    },  
    {
        mes : 'Octubre',
        dias : 31
    },  
    {
        mes : 'Noviembre',
        dias : 30
    },  
    {
        mes : 'Diciembre',
        dias : 31
    },  
]

meses.forEach(  mes => {
    console.group( mes.mes )
    for (let dia = 1; dia < mes.dias +1 ; dia++) {
        console.log( dia )
        
    }
    console.groupEnd()
})