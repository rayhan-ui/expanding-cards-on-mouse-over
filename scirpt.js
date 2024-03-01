const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('mouseover', () => {
    removeactiveclass()
    panel.classList.add('active')
  })
})

function removeactiveclass() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
