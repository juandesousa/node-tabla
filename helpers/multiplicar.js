const fs = require('fs');

const crearArchivo = (base = 5, listar, height) => {

    const promise = new Promise((resolve,reject)=>{
        


        let salida = '';

        for(let i=1;i<=height;i++){

            salida += `${base} x ${i} = ${base*i}\n`;

        }

        if(listar){
            console.log(`===============`)
            console.log(`  Tabla del:`, base)
            console.log(`===============`)
            console.log(salida)
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        resolve(`tabla-${base}.txt creado`)
    })
    
    return promise;

}

module.exports = {
    crearArchivo
}