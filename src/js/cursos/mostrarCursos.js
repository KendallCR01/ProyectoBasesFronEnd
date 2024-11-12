import { getCursos } from "./traerCursosPrincipal.js";


export const viewCursos = async () => {
    const divPrincipal = document.querySelector(".main");
    divPrincipal.innerHTML = ''; // Limpia el contenido anterior

    // Contenedor principal de la vista de cursos
    const divVistaCursos = document.createElement('div');
    divVistaCursos.classList.add('viewCursos');

     const cursos = await getCursos();

    // Lista estática de cursos
    const cursos2 = [
        { id: '001', descripcion: 'Curso de Yoga para principiantes', horario: 'Lunes y Miércoles 10:00 - 11:00 AM', disponibilidad: true },
        { id: '002', descripcion: 'Entrenamiento Funcional', horario: 'Martes y Jueves 6:00 - 7:00 PM', disponibilidad: false },
        { id: '003', descripcion: 'Curso de Pilates', horario: 'Viernes 9:00 - 10:30 AM', disponibilidad: true },
        { id: '004', descripcion: 'CrossFit avanzado', horario: 'Lunes, Miércoles y Viernes 7:00 - 8:00 AM', disponibilidad: true },
        { id: '005', descripcion: 'Zumba para todos los niveles', horario: 'Martes y Jueves 5:00 - 6:00 PM', disponibilidad: false }
    ];

    // Itera sobre cada curso para crear su cuadro
    cursos.forEach(curso => {
        const divCurso = document.createElement('div');
        divCurso.classList.add('curso');

        console.log(curso.ID_CURSO);


        // ID del curso
        const id = document.createElement('h3');

        id.textContent = `ID: ${curso.id_curso}`;
        id.classList.add('curso-id');

        // Descripción del curso
        const descripcion = document.createElement('p');
        descripcion.textContent = curso.descripcion;
        descripcion.classList.add('curso-descripcion');

        // Horario del curso
        const horario = document.createElement('p');
        horario.textContent = `Horario: ${curso.horario}`;
        horario.classList.add('curso-horario');

        // Disponibilidad del curso
        const disponibilidad = document.createElement('p');
        disponibilidad.textContent = `Disponibilidad: ${curso.disponibilidad ? 'Disponible' : 'No disponible'}`;
        disponibilidad.classList.add('curso-disponibilidad');
        disponibilidad.style.color = curso.disponibilidad? '#008000' : '#d32f2f';

        // Agrega los elementos al contenedor de cada curso
        divCurso.appendChild(id);
        divCurso.appendChild(descripcion);
        divCurso.appendChild(horario);
        divCurso.appendChild(disponibilidad);

        // Agrega cada curso al contenedor principal de la vista de cursos
        divVistaCursos.appendChild(divCurso);
    });

    // Agrega el contenedor principal al área principal de visualización
    divPrincipal.appendChild(divVistaCursos);
};