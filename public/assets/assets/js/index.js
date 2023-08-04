console.log("aquii")

const btnFiltrar = document.querySelector('#btnFiltrar');
const selectRegion = document.querySelector('#selectRegion');
const selectCurso = document.querySelector('#selectCurso');
const tablaResultados = document.querySelector('#tablaResultados tbody');

// Llenar los selects
async function llenarSelects() {
    const urlRegion = 'http://localhost:8080/routerRegion';
    const urlCurso = 'http://localhost:8080/routerPlanFormativo';

    const responseRegion = await fetch(urlRegion);
    const dataRegion = await responseRegion.json();
    dataRegion.forEach(region => {
        const option = document.createElement('option');
        option.value = region.id; 
        option.text = region.nombre; 
        selectRegion.appendChild(option);
    });

    const responseCurso = await fetch(urlCurso);
    const dataCurso = await responseCurso.json();
    dataCurso.forEach(curso => {
        const option = document.createElement('option');
        option.value = curso.id; 
        option.text = curso.descripcion; 
        selectCurso.appendChild(option);
    });
}







llenarSelects();




btnFiltrar.addEventListener('click', async () => {
    console.log("Click");
    
    const urlTodosLosEstudiantesPorCadaRegionYporCadaCurso = 'http://localhost:8080/routerEstudiantes/filtrar';

    // Fetch 
    const responseEstudiantes = await fetch(urlTodosLosEstudiantesPorCadaRegionYporCadaCurso);
    const dataEstudiantes = await responseEstudiantes.json();
    console.log("Estas son todos los estudiantes:", dataEstudiantes);

    // Obtener valores seleccionados
    const regionSeleccionada = selectRegion.options[selectRegion.selectedIndex].text;
    const cursoSeleccionado = selectCurso.options[selectCurso.selectedIndex].text;

    // Filtrar estudiantes
    const estudiantesFiltrados = dataEstudiantes.filter(estudiante => 
        estudiante.Comuna.Region.nombre === regionSeleccionada && 
        estudiante.Curso.Plan_Formativo.descripcion === cursoSeleccionado
    );

    // Diagnóstico
    console.log("Región seleccionada:", regionSeleccionada);
    console.log("Curso seleccionado:", cursoSeleccionado);
    console.log("Estudiantes filtrados:", estudiantesFiltrados);

    // Limpiar tabla actual
    tablaResultados.innerHTML = '';

    // Llenar la tabla con los datos filtrados
    estudiantesFiltrados.forEach(estudiante => {
        const row = tablaResultados.insertRow();
        row.insertCell(0).innerText = estudiante.rut;
        row.insertCell(1).innerText = estudiante.nombre;
        row.insertCell(2).innerText = estudiante.apellido_pat;
        row.insertCell(3).innerText = estudiante.apellido_mat;
        row.insertCell(4).innerText = estudiante.codigo_curso;
        row.insertCell(5).innerText = estudiante.Curso.Plan_Formativo.descripcion;
    });
});


