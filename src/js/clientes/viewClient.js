
export const viewCliente=()=>{

const divHeader=document.querySelector(".header");

divHeader.innerHTML='';

const divNav=document.createElement('nav');

const divUl=document.createElement('ul');

const divLi=document.createElement('li');

const divLi2=document.createElement('li');

const divLi3=document.createElement('li');

const divLi4=document.createElement('li');



divLi.textContent='MAQUINAS'

divLi2.textContent='PESAJE'

divLi3.textContent='NUTRICION'

divLi4.textContent='CONTACTO'


divUl.appendChild(divLi);
divUl.appendChild(divLi2);
divUl.appendChild(divLi3);
divUl.appendChild(divLi4);
divNav.appendChild(divUl);
divHeader.appendChild(divNav);


const divPrincipal=document.querySelector(".main");

divPrincipal.innerHTML='';

const divVista=document.createElement('div');

divVista.classList.add('viewClient')

const text= document.createElement('h1');

text.textContent='VISTA CLIENTE';

divVista.appendChild(text);
divPrincipal.appendChild(divVista);

}