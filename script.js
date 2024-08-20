// Waldo Fernández

let siloMaiz = {
    stockActual: 280,
    capacidad: 800  
};
let siloSoja = {
    stockActual: 150,
    capacidad: 1200  
};


function alertMaiz(){
    alert(`
Está ingresando a la planta, una carga de Maíz.

Se debe dirigir al silo correspondiente.

El silo de Maíz tiene una capacidad de ${siloMaiz.capacidad} toneladas y actualmente un stock de ${siloMaiz.stockActual} toneladas.

Usted puede ingresar un máximo de ${siloMaiz.capacidad - siloMaiz.stockActual} toneladas al silo de maíz`);
}

function alertSoja(){
    alert(`
Está ingresando a la planta, una carga de Soja.

Se debe dirigir al silo correspondiente.

El silo de Soja tiene una capacidad de ${siloSoja.capacidad} toneladas y actualmente un stock de ${siloSoja.stockActual} toneladas.

Usted puede ingresar un máximo de ${siloSoja.capacidad - siloSoja.stockActual} toneladas al silo de Soja`);
}

function acumularMaiz(){
    let cargaMaiz;
    do{
        cargaMaiz = parseInt(prompt(`Por favor, indique cuántas toneladas de maíz tiene su carga`));
        if (isNaN(cargaMaiz) || cargaMaiz <= 0){
            alert('Por favor, ingrese un número válido.');
        };
    } while (isNaN(cargaMaiz) || cargaMaiz <= 0);

        if(cargaMaiz < (siloMaiz.capacidad - siloMaiz.stockActual)){
            siloMaiz.stockActual += cargaMaiz
            alert(`Se ha ingresado correctamente la carga en el silo de Maíz.
                El stock actual es de ${siloMaiz.stockActual} toneladas de Maiz`);
            alert(`Con el Stock actualizado, el silo puede recibir ${siloMaiz.capacidad - siloMaiz.stockActual} toneladas más.`);
        } else {
            alert(`La capacidad del silo es insuficiente para la carga que desea ingresar
Por favor reduzca la carga a un máximo ${siloMaiz.capacidad - siloMaiz.stockActual} toneladas`);
        };            
};

function acumularSoja(){
    let cargaSoja;
        do{
            cargaSoja = parseInt(prompt(`Por favor, indique cuántas toneladas de Soja tiene su carga`));
            if (isNaN(cargaSoja) || cargaSoja <= 0){
                alert('Por favor, ingrese un número válido.')
            };
        } while (isNaN(cargaSoja) || cargaSoja <= 0);

        if(cargaSoja < (siloSoja.capacidad - siloSoja.stockActual)){
            siloSoja.stockActual += cargaSoja
            alert(`Se ha ingresado correctamente la carga en el silo de Soja.
                El stock actual es de ${siloSoja.stockActual} toneladas de Soja`);
            alert(`Con el Stock actualizado, el silo puede recibir ${siloSoja.capacidad - siloSoja.stockActual} toneladas más.`);
        } else {
            alert(`La capacidad del silo es insuficiente para la carga que desea ingresar
Por favor reduzca la carga a un máximo ${siloSoja.capacidad - siloSoja.stockActual} toneladas`);
        };            
};


function tipoDeCeral(){
    let cerealTipo = '';
    while (cerealTipo !== 'm' && cerealTipo !== 's') {
        let cerealTipo = prompt(`
            ¿Qué tipo de cereal está ingresando?
            Presione "M" para Maíz
            Presione "S" para Soja
            Presione "F" para Finalizar`).toLowerCase();
    
        switch (cerealTipo) {
            case 'm': alertMaiz(); acumularMaiz();            
                break;
            case 's' : alertSoja(); acumularSoja();            
                break;
            case 'f' : alert(`Finalizando el programa`);
                return
            default: alert(`Seleccionaste una tecla erronea.
            Presione "M" para Maíz
            Presione "S" para Soja
            Presione "F" para finalizar`)
                break;
        };
    };
    
};

tipoDeCeral()



