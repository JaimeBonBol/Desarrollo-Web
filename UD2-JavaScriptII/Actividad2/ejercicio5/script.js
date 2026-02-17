async function cargarFichero() {
    
    // Fetch y parseo
    const respuesta = await fetch("supers.json");
    const texto = await respuesta.text();
    const datos = JSON.parse(texto);
    /*
    // TRUCO: Puedes hacer .json() directamente y te ahorras el JSON.parse()
    // Pero tu forma (.text + JSON.parse) también es correcta.
    const datos = await respuesta.json(); */

    // Limpiamos el div antes de pintar para que no se repitan
    const contenedor = document.getElementById("datos");
    contenedor.innerHTML = "";

    // Usamos 'datos.members' porque 'members' está dentro de 'datos'
    for (let i = 0; i < datos.members.length; i++) {
        
        // Accedemos a datos.members[i]
        // La propiedad .length nos dice cuántos poderes tiene ese array
        if (datos.members[i].powers.length <= 3) {
            
            let parrafo = document.createElement("p");
            
            // Usamos datos.members[i] otra vez
            parrafo.textContent = `${datos.members[i].name} (Poderes: ${datos.members[i].powers.length})`;
            
            contenedor.appendChild(parrafo);
        }
    }
}