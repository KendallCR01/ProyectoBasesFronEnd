import { getMaquinas } from "./traerMaquinasPrincipal.js";
import { obtenerImagenPorNombre } from "../traerImagines.js";

export const viewMaquinas = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; 

    const divVistaMaquinas = document.createElement('div');
    divVistaMaquinas.classList.add('viewMaquinas');

    const maquinas= await getMaquinas();


    maquinas.forEach(maquina => {
        const divMaquina = document.createElement('div');
        divMaquina.classList.add('maquina');

 

        const img = document.createElement('img');
        img.src = obtenerImagenPorNombre(maquina.descripcion);
        img.alt = maquina.descripcion;
        img.classList.add('maquina-imagen');

        const descripcion = document.createElement('h2');
        descripcion.textContent = maquina.descripcion;

        console.log(maquina.descripcion);

        const estado= document.createElement('h3');
        estado.textContent =  maquina.estado;


        const dificultad = document.createElement('p');
        dificultad.textContent = 'Dificultad:' + maquina.dificultad;
        
        divMaquina.appendChild(img);
        divMaquina.appendChild(descripcion);
        divMaquina.appendChild(estado);
        divMaquina.appendChild(dificultad);
        divVistaMaquinas.appendChild(divMaquina);
    });

    divPrincipal.appendChild(divVistaMaquinas);
};