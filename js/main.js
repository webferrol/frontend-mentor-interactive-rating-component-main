import { changeFavicon } from './favicon-visibility-change.js'
// Cambio del estado del favicon cuando la pestaña tiene o no el foco
changeFavicon()

/**
 * Evento del formulario
 * @param {SubmitEvent} e
 */
function handleSubmit (e) {
  e.preventDefault()
  const { target: form } = e
  const cardRatingElement = form.closest('article')
  const cardThanksElement = cardRatingElement.nextElementSibling
  if (!form['start-selected'].value) return
  cardRatingElement.classList.add('none')
  cardThanksElement.classList.remove('none')
  // Efectos especiales
  cardThanksElement.querySelector('.title')
    .classList.add('animate__animated', 'animate__flip')
}

/**
 * Guardamos la calificación marcada (interactive rating)
 * @param {Event} e Click event
 */
function handleStars (e) {
  // Limpiamos clase activa de las stars si existen
  const activeElement = document.querySelector('.active')
  if (activeElement) activeElement.classList.remove('active')
  // Comprobamos el botón pulsado que la etiqueta INPUT
  if (e.target.nodeName === 'INPUT') {
    const inputButton = e.target
    document.querySelector('[name="start-selected"]').value = inputButton.value
    // Añadimos clase de seleccionada y efectos especiales
    inputButton.classList.add('active', 'animate__animated', 'animate__hinge')

    document.querySelector('.featured em')
      .innerHTML = inputButton.value

    // Quitamos efectos especiales
    setTimeout(() => {
      inputButton.classList.remove('animate__animated', 'animate__hinge')
    }, 2500)
  }
}

// Eventos
document.querySelector('.btn-group')
  .addEventListener('click', handleStars)

document.querySelector('#rating-form')
  .addEventListener('submit', handleSubmit)
