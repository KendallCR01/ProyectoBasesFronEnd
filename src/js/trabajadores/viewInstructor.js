import { logoutUser } from "../conexion/logout.js";
import { viewMantenimiento } from "./viewMantenimiento.js";
import { viewInicio } from "../mostrarInicio.js";
import { searchClientView } from "../clientes/searchClient.js";
import { searchCourseView } from "../cursos/searchCurso.js";
import { searchRoutineView } from "../rutinas/searchRutina.js";

export const viewInstructor=(username)=>{

    const divHeader=document.querySelector(".header");
    
    divHeader.innerHTML='';
    
    const divNav=document.createElement('nav');
    
    const divUl=document.createElement('ul');
    
    const divLi=document.createElement('li');
    
    const divLi2=document.createElement('li');
    
    const divLi3=document.createElement('li');
    
    const divLi4=document.createElement('li');

    const divLi5=document.createElement('li');
    
    
    
    divLi.textContent='MANTENIMIENTO'
    
    divLi2.textContent='CLIENTES'
    
    divLi3.textContent='CURSOS'

    divLi4.textContent='RUTINAS'
    
    divLi5.textContent='LOGOUT'

    
    divUl.appendChild(divLi);
    divUl.appendChild(divLi2);
    divUl.appendChild(divLi3);
    divUl.appendChild(divLi4);
    divUl.appendChild(divLi5);
    divNav.appendChild(divUl);
    divHeader.appendChild(divNav);


    divLi5.addEventListener('click', async (event) => {
        event.preventDefault();
        if (logoutUser(username)) {
            viewInicio();
        }
    })

    divLi.addEventListener('click', async (event) => {
        event.preventDefault();
        viewMantenimiento();
    })

    divLi2.addEventListener('click', async (event) => {
        event.preventDefault();
        searchClientView();
    })

    divLi3.addEventListener('click', async (event) => {
        event.preventDefault();
        searchCourseView();
    })

    divLi4.addEventListener('click', async (event) => {
        event.preventDefault();
        searchRoutineView();
    })

    
    
    const divPrincipal=document.querySelector(".main");
    
    divPrincipal.innerHTML='';
    
    const divVista=document.createElement('div');
    
    divVista.classList.add('viewClient')
    
    const text= document.createElement('h1');
    
    text.textContent='VISTA INSTRUCTOR';
    
    divVista.appendChild(text);
    divPrincipal.appendChild(divVista);
    
    }