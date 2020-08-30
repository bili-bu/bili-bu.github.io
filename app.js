function main() {

  const backButton = document.querySelector('#back-button')

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      backButton.style.display = 'block'
    } else {
      backButton.style.display = 'none'
    }
  })
  
  backButton.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })
}

window.addEventListener('DOMContentLoaded', main)