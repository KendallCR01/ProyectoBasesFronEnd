import { logoutUser } from "../conexion/logout.js";
import { login } from "../mostrarLogin.js";
import { viewMantenimiento } from "./viewMantenimiento.js";

export const viewInstructor=(username)=>{

    const divHeader=document.querySelector(".header");
    
    divHeader.innerHTML='';
    
    const divNav=document.createElement('nav');
    
    const divUl=document.createElement('ul');
    
    const divLi=document.createElement('li');
    
    const divLi2=document.createElement('li');
    
    const divLi3=document.createElement('li');
    
    const divLi4=document.createElement('li');
    
    
    
    divLi.textContent='MANTENIMIENTO'
    
    divLi2.textContent='PESAJE'
    
    divLi3.textContent='NUTRICION'
    
    divLi4.textContent='LOGOUT'

    
    divUl.appendChild(divLi);
    divUl.appendChild(divLi2);
    divUl.appendChild(divLi3);
    divUl.appendChild(divLi4);
    divNav.appendChild(divUl);
    divHeader.appendChild(divNav);


    divLi4.addEventListener('click', async (event) => {
        event.preventDefault();
        if (logoutUser(username)) {
            login();
        }
    })

    divLi.addEventListener('click', async (event) => {
        event.preventDefault();
        viewMantenimiento();
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