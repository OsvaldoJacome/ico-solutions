'use strict'
// Capturar el evento on submit

var formulario = document.querySelector("#facturas");

formulario.addEventListener('submit', function(){
console.log("entraste a la funcion ");

   var titulo =  document.querySelector('#addFacturas').value;

    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo); 
    }else{
        alert("El campo esta vacio");
    } 
});

    // Agregar
var ul = document.querySelector('#id_facturas');
for (var i in localStorage) {
    
        if (typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);   
        }
    }

    // Borrar 

var formulario = document.querySelector("#borraFacturas");

formulario.addEventListener('submit', function(){
    

   var titulo =  document.querySelector('#borra_id').value;
    
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo); 
        
    }
     
});
