# Resumen Rápido — JavaScript II

> Chuleta de puntos clave para el examen. Para ver ejercicios completos, consultar `Apuntes_Examen_JS2.md`.


---


## Fetch

- `fetch` carga archivos de forma asíncrona.
- La función **siempre** lleva `async` delante.
- **Siempre hay dos `await`**:

```javascript
async function cargar() {
    const response = await fetch("archivo.xml");   // await 1
    const texto = await response.text();            // await 2
    // parsear según tipo...
}
```

- Después de obtener el texto, hay que **parsearlo** según el tipo (XML o JSON).


---


## XML — Parsear con DOMParser

- Convertir texto a documento XML navegable:

```javascript
const datos = new DOMParser().parseFromString(texto, "text/xml");
```

- Obtener elementos por etiqueta (devuelve una **lista**):

```javascript
const elementos = datos.getElementsByTagName("CD");
```

- Leer el contenido de un campo:

```javascript
elementos[i].getElementsByTagName("TITLE")[0].textContent
//                                         ^^^
//                              EL [0] ES OBLIGATORIO
```

- Se recorre con un `for` clásico: `for (let i = 0; i < elementos.length; i++)`


---


## JSON — Parsear con JSON.parse

- Mucho más sencillo que XML:

```javascript
const coches = JSON.parse(texto);   // Ya es un array de objetos JS
```

- Acceso directo a las propiedades:

```javascript
coches[i].marca          // Con punto, sin getElementsByTagName
coches[i].lugar_origen
```

### Comparación rápida

| | XML | JSON |
|---|---|---|
| Parsear | `new DOMParser().parseFromString(texto, "text/xml")` | `JSON.parse(texto)` |
| Leer campo | `nodo.getElementsByTagName("X")[0].textContent` | `objeto.propiedad` |


---


## DOM — Crear y montar elementos

```javascript
// Obtener elemento existente
const salida = document.getElementById("salida");

// Crear elemento nuevo
const div = document.createElement("div");

// Meter contenido
div.innerHTML = "<strong>Nombre:</strong> Pepe<br>";    // interpreta HTML
div.textContent = "Solo texto plano";                    // ignora HTML

// Estilos en línea
div.style.border = "1px solid black";
div.style.padding = "10px";

// Añadir al DOM
salida.appendChild(div);

// Limpiar contenedor
salida.innerHTML = "";

// Eliminar elemento concreto
div.remove();
```

Texto dentro — dos formas:

```javascript
// Concatenación
let txt = "";
txt += "<strong>Nombre</strong>: " + valor + "<br>";

// Template literals (más limpio)
div.innerHTML = `<strong>Nombre:</strong> ${valor}`;
```


---


## Borrar elementos

Dos estrategias:

```javascript
// OPCIÓN A — Solo del DOM (rápido, no toca el array)
elemento.remove();

// OPCIÓN B — Del array + repintar (necesario con localStorage)
array.splice(index, 1);
mostrarDatos();
```

Métodos de array:

- `splice(indice, cantidad)` → quita elementos (modifica el original)
- `indexOf(elemento)` → posición en el array (-1 si no existe)


---


## Insertar desde formularios

```javascript
// Leer valor de un input
const valor = document.getElementById("inputId").value;

// Crear objeto y añadir al array
let nuevo = { nombre: valor };
array.push(nuevo);

// Limpiar input después
document.getElementById("inputId").value = "";

// Repintar
mostrarDatos();
```

El truco de `esManual: true` marca los elementos añadidos a mano para no perderlos al recargar del fichero:

```javascript
listaDatos = listaDatos.filter(item => item.esManual === true);
```


---


## Filtrar con select

```javascript
// Obtener valor seleccionado
const elegido = document.getElementById("miSelect").value;

// Comparar dentro del for
if (datos[i].campo === elegido) { /* mostrar */ }
```

- El `value` del `<option>` es lo que se compara.


---


## LocalStorage

Guarda datos **persistentes** (sobreviven a recargar la página). **Solo guarda strings.**

```javascript
// Guardar (siempre stringify)
localStorage.setItem("clave", JSON.stringify(array));

// Leer (siempre parse)
let datos = JSON.parse(localStorage.getItem("clave"));

// Borrar
localStorage.removeItem("clave");
localStorage.clear();   // borra todo
```

Inicialización al cargar la página:

```javascript
let datos = JSON.parse(localStorage.getItem("clave")) || [];
//  null || [] → si no hay nada guardado, empieza con array vacío
```

Función para guardar cambios:

```javascript
function actualizarMemoria() {
    localStorage.setItem("clave", JSON.stringify(datos));
}
```

**El patrón CRUD siempre es igual:**

| Acción | Qué hacer |
|--------|-----------|
| Insertar | `push` → guardar → repintar → limpiar inputs |
| Borrar | `splice(index, 1)` → guardar → repintar |
| Editar | `prompt()` → modificar `array[index]` → guardar → repintar |

Las **dos últimas líneas siempre son las mismas**:

```javascript
actualizarMemoria();   // guardar en localStorage
mostrarDatos();        // repintar en pantalla
```

Si falta la primera → se pierden al recargar. Si falta la segunda → no se ven.

Para editar, `prompt("mensaje", valorActual)` devuelve `null` si cancela → comprobar `!== null`.
```javascript
    let nuevoNombre = prompt("Nuevo nombre:", alumnos[index].nombre);
```


---


## Sin array vs Con array

| | Sin array | Con array |
|---|---|---|
| Necesitas localStorage | No vale | Sí |
| Solo mostrar y borrar | Perfecta | También vale |
| Insertar o editar | Complicado | Fácil |

- **Sin array**: creas los elementos en el mismo `for`, borrar = `fila.remove()`.
- **Con array**: array global + función `mostrarDatos()` que limpia y repinta todo.


---


## Errores que siempre se cometen

- Olvidar `async` en la función que usa `fetch`
- Olvidar el `[0]` después de `getElementsByTagName`
- No limpiar `salida.innerHTML = ""` antes de repintar (se duplican datos)
- No llamar a `mostrarDatos()` después de modificar el array
- Guardar en localStorage sin `JSON.stringify` → se guarda `[object Object]`
- Leer de localStorage sin `JSON.parse` → obtienes un string
- No limpiar los inputs después de insertar
- Poner `appendChild` del contenedor **dentro** del for (debe ir fuera)
- Poner `mostrarDatos()` **dentro** del for (se repinta en cada iteración)


---


## Mapas mentales

### ¿Qué tipo de ejercicio me ha caído?

```mermaid
flowchart TD
    A["Leo el enunciado"] --> B{"¿Cargar un fichero?"}
    B -->|Sí| C{"¿.xml o .json?"}
    B -->|No| D{"¿Guardar datos persistentes?"}
    C -->|XML| E["DOMParser"]
    C -->|JSON| F["JSON.parse"]
    D -->|Sí| G["localStorage"]
    D -->|No| H["Solo DOM"]
    E --> I{"¿Filtrar?"}
    F --> I
    I -->|Sí| J["Leer select/input + if en el for"]
    I -->|No| K["Mostrar todo"]
    G --> L{"¿CRUD completo?"}
    L -->|Sí| M["Insertar + Mostrar + Borrar + Editar"]
    L -->|Solo guardar| N["setItem + getItem"]
```


---


### Flujo XML

```mermaid
flowchart TD
    A["async function"] --> B["await fetch 'archivo.xml'"]
    B --> C["await response.text()"]
    C --> D["new DOMParser .parseFromString texto, text/xml"]
    D --> E["getElementsByTagName 'ETIQUETA'"]
    E --> F["for i=0 ..."]
    F --> G["Leer: getElementsByTagName 'CAMPO' 0 .textContent"]
    G --> H{"¿Filtro?"}
    H -->|Sí| I["if campo === valor"]
    H -->|No| J["Crear div/li"]
    I --> J
    J --> K["appendChild"]
    K --> L["appendChild del contenedor FUERA del for"]
```


---


### Flujo JSON

```mermaid
flowchart TD
    A["async function"] --> B["await fetch 'archivo.json'"]
    B --> C["await response.text()"]
    C --> D["JSON.parse texto"]
    D --> E["Ya es un array de objetos"]
    E --> F["for i=0 ..."]
    F --> G["datos i .propiedad"]
    G --> H{"¿Filtro?"}
    H -->|Sí| I["if datos i .campo === filtro"]
    H -->|No| J["Crear div/li"]
    I --> J
    J --> K["appendChild"]
```


---


### CRUD con localStorage

```mermaid
flowchart TD
    A["Al cargar"] --> B["let datos = JSON.parse getItem clave o array vacío"]
    B --> mostrar

    subgraph actualizarMemoria["actualizarMemoria()"]
        AM["localStorage.setItem clave, JSON.stringify datos"]
    end

    subgraph mostrar["mostrarDatos()"]
        M1["salida.innerHTML = vacío"] --> M2["forEach dato, index"]
        M2 --> M3["createElement div + innerHTML datos"]
        M3 --> M4["Crear botones Borrar y Editar con onclick"]
        M4 --> M5["appendChild div a salida"]
    end

    D["INSERTAR"] --> E["Leer inputs .value"]
    E --> F["Crear objeto"]
    F --> G["datos.push nuevo"]
    G --> actualizarMemoria
    actualizarMemoria --> mostrar
    mostrar --> J2["Limpiar inputs .value = vacío"]

    K["BORRAR"] --> L2["datos.splice index, 1"]
    L2 --> actualizarMemoria

    O["EDITAR"] --> P["prompt con valor actual"]
    P --> Q{"¿Canceló? !== null"}
    Q -->|No| R["datos index .campo = nuevoValor"]
    R --> actualizarMemoria
    Q -->|Sí| S["No hacer nada"]
```


---


### Montar elementos en el DOM

```mermaid
flowchart TD
    A["getElementById 'salida'"] --> B["innerHTML = vacío"]
    B --> C["Recorrer datos"]
    C --> D["createElement 'div'"]
    D --> E["innerHTML = datos"]
    E --> F{"¿Botones?"}
    F -->|Sí| G["createElement 'button'"] --> H["onclick = función"] --> I["div.appendChild button"]
    F -->|No| J["Directo"]
    I --> K["salida.appendChild div"]
    J --> K
```


---


> **Mucha suerte en el examen.**
