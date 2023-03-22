'use strict'
const favicon = document.querySelector('link[rel=icon]')
window.addEventListener('visibilitychange', () => {
  const { hidden } = document
  favicon
    .setAttribute(
      'href',
      hidden ? '/images/favicon-hidden-32x32.png' : '/images/favicon32x32.png'
    )
})

function handleSubmit (e) {
  e.preventDefault()
}

document.querySelector('#rating-form')
  .addEventListener('submit', handleSubmit)

function handleStars (e) {
  console.log(e.target.nodeName)
  if (e.target.nodeName === 'INPUT') {
    e.target.classList.add('animate__animated', 'animate__hinge')
    setTimeout(() => {
      e.target.classList.remove('animate__animated', 'animate__hinge')
    }, 2500)
  }
}

document.querySelector('.btn-group')
  .addEventListener('click', handleStars)
