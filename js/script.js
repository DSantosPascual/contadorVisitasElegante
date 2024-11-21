const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

let visitas = +localStorage.getItem('visitas') || 0; //! recupero el contador desde el localStorage.El operador "+" convierte a número la cadena (se puede hacer con parseInt???)//

visitas++;                              
contadorVisitas.textContent = visitas;

localStorage.setItem('visitas', visitas); //! Guardo el nuevo valor en localStorage//

btnReestablecer.addEventListener('click', () => {   //!Evento reseteo del contador//
  localStorage.setItem('visitas', 0);
  contadorVisitas.textContent = 0;
});
