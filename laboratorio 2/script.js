//EVENTOS CLICK

// Ejemplo 1
let contador = 0;
// Obtener referencia al botón y al párrafo donde se mostrará el contador
const button = document.getElementById('button');
const counterParagraph = document.getElementById('counter');

// Agregar un evento 'click' al botón
button.addEventListener('click', function() {
    // Aumentar el contador en 1
    contador++;

    // Actualizar el texto del párrafo para mostrar el nuevo valor del contador
    counterParagraph.textContent = 'Contador: ' + contador;
});

// Ejemplo 3
document.getElementById('clickExample3').addEventListener('click', function() {
    alert('Has hecho clic en el Ejemplo 3');
});


// Ejemplo2  
const elemento = document.getElementById('elemento');

// Función para cambiar el color de fondo al hacer clic
function cambiarColorClick() {
    // Generar un color aleatorio en formato hexadecimal
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambiar el color de fondo del elemento
    elemento.style.backgroundColor = color;
}
// Agregar un evento 'click' al elemento 
elemento.addEventListener('click', cambiarColorClick);


// Eventos para los ejemplos de FOCUS  - - - - - - - -- - - -  - -- - - - - - - - - - - - - - - 
// Ejemplo 1
document.getElementById('focusExample1').addEventListener('focus', function() {
});

// Evento click para imprimir el nombre
document.getElementById('printNameBtn').addEventListener('click', function() {
    const nombre = document.getElementById('focusExample1').value;
    if (nombre.trim() === '') {
        document.getElementById('printedName').textContent = 'Por favor, ingresa tu nombre antes de imprimirlo.';
    } else {
        document.getElementById('printedName').textContent = 'Nombre: ' + nombre;
    }
});

// Ejemplo 2
document.getElementById('chooseNumberBtn').addEventListener('click', function() {
    // Obtener el número ingresado por el usuario
    const numeroUsuario = parseInt(document.getElementById('focusExample2').value);

    // Verificar si el número está dentro del rango válido (del 1 al 3)
    if (numeroUsuario >= 1 && numeroUsuario <= 5) {
        // Generar un número aleatorio del 1 al 3
        const numeroAzar = Math.floor(Math.random() * 5) + 1;

        // Comprobar si el número elegido por el usuario coincide con el número aleatorio
        if (numeroUsuario === numeroAzar) {
            document.getElementById('resultText').textContent = '¡¡PUMM!! La papa explotó';
        } else {
            document.getElementById('resultText').textContent = 'Te has salvado de la papa caliente.';
        }
    } else {
        // Mostrar un mensaje de error si el número está fuera del rango
        document.getElementById('resultText').textContent = 'Por favor, ingresa un número válido del 1 al 3.';
    }
});

// Obtener el input y el párrafo para mostrar el contador de caracteres
const inputField = document.getElementById('focusExample3');
const charCount = document.getElementById('charCount');

// Evento focus para iniciar el conteo de caracteres
inputField.addEventListener('focus', function() {
    // Reiniciar el contador cuando se hace focus en el input
    charCount.textContent = '0 caracteres';
});

// Evento input para actualizar el contador en tiempo real
inputField.addEventListener('input', function() {
    // Obtener la longitud del texto ingresado por el usuario
    const characterLength = this.value.length;
    
    // Actualizar el contador de caracteres
    charCount.textContent = `${characterLength} ${(characterLength === 1) ? 'carácter' : 'caracteres'}`;
});








//Evento mouseover - - - - - - - - - -- - - - - - - - - -- -- - -  -  -  - -  -  -  - -   - -  - -

// Ejemplo1
const elemento3 = document.getElementById('elemento3');

// Función para cambiar el color de fondo al pasar el mouse
function cambiarColorMouseover() {
    // Cambiar el color de fondo del elemento al azul claro
    elemento3.style.backgroundColor = 'lightblue';
}

// Función para restaurar el color de fondo cuando el mouse sale del elemento
function restaurarColorMouseover() {
    // Restaurar el color de fondo del elemento al amarillo dorado
    elemento3.style.backgroundColor = 'rgb(149, 155, 192)';
}

// Agregar el evento 'mouseover' al elemento
elemento3.addEventListener('mouseover', cambiarColorMouseover);

// Agregar el evento 'mouseout' al elemento para restaurar el color original
elemento3.addEventListener('mouseout', restaurarColorMouseover);


//Ejemplo2 - - - - - - - - - - - - - - - - - - - - - - - - - -
const elemento4 = document.getElementById('elemento4');

// Función para cambiar el tamaño de texto al pasar el mouse
function cambiarTamañoTexto() {
    // Cambiar el tamaño de texto a 24px al pasar el mouse sobre el elemento
    elemento4.style.fontSize = '30px';
}

// Agregar el evento 'mouseover' al elemento
elemento4.addEventListener('mouseover', cambiarTamañoTexto);

// Función para restaurar el tamaño de texto cuando el mouse sale del elemento
function restaurarTamañoTexto() {
    // Restaurar el tamaño de texto a 20px cuando el mouse sale del elemento
    elemento4.style.fontSize = '20px';
}

// Ejemplo3  - - - - - - - - - - - - - - - - - - - -  - - - - - 
elemento4.addEventListener('mouseout', restaurarTamañoTexto);

// Obtener referencia al elemento sobre el que queremos aplicar el evento
const elemento5 = document.getElementById('elemento5');

// Función para resaltar el texto al pasar el mouse
function resaltarTexto() {
    // Cambiar el color del texto a rojo cuando el mouse está sobre el elemento
    elemento5.style.color = 'red';
}

// Agregar el evento 'mouseover' al elemento
elemento5.addEventListener('mouseover', resaltarTexto);

// Función para restaurar el color original del texto cuando el mouse sale del elemento
function restaurarTexto() {
    // Restaurar el color del texto al negro
    elemento5.style.color = '#000000';
}

// Agregar el evento 'mouseout' al elemento para restaurar el color original del texto
elemento5.addEventListener('mouseout', restaurarTexto);