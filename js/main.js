import { changeFavicon } from './favicon-visibility-change.js'
// Cambio del estado del favicon cuando la pestaña tiene o no el foco
changeFavicon()

/**
 * Envío del formulario
 * @param {SubmitEvent} e
 */
function handleSubmit (e) {
  e.preventDefault()
  const article = e.target.closest('article')
  const article2 = article.nextElementSibling
  if (!e.target['start-selected'].value) return
  article.classList.add('none')
  article2.classList.remove('none')
  // Efectos especiales
  document.querySelector('.thank-you-state .title')
    .classList.add('animate__animated', 'animate__flip')
}

/**
 * Guardamos la calificación marcada (interactive rating)
 * @param {Event} e Click event
 */
function handleStars (e) {
  // Limpiamos clase activa de las stars si existen
  const active = document.querySelector('.active')
  if (active) active.classList.remove('active')

  // Comprobamos el botón pulsado que la etiqueta INPUT
  if (e.target.nodeName === 'INPUT') {
    document.querySelector('[name="start-selected"]').value = e.target.value
    // Añadimos clase de seleccionada y efectos especiales
    e.target.classList.add('active', 'animate__animated', 'animate__hinge')

    document.querySelector('.featured em')
      .innerHTML = e.target.value

    // Quitamos efectos especiales
    setTimeout(() => {
      e.target.classList.remove('animate__animated', 'animate__hinge')
    }, 2500)
  }
}

// Eventos
document.querySelector('.btn-group')
  .addEventListener('click', handleStars)

document.querySelector('#rating-form')
  .addEventListener('submit', handleSubmit)
