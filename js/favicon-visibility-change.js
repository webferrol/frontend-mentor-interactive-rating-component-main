/**
 * Cambiar favicon cuando la pestaña pierde el foco
 */
export function changeFavicon () {
  const favicon = document.querySelector('link[rel=icon]')
  window.addEventListener('visibilitychange', () => {
    const { hidden } = document
    favicon
      .setAttribute(
        'href',
        hidden ? '/images/favicon-hidden-32x32.png' : '/images/favicon32x32.png'
      )
  })
}
