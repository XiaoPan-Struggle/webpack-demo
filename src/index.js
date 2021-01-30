import x from './x.js'
import png from './assets/me.jpg'
const div = document.getElementById('app')
div.innerHTML = `
<img src="${png}">`
console.log('hi')
console.log('heheheh')

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
  const promise = import('./lazy.js')
  promise.then((module) => {
    module.default()
  })
}
div.appendChild(button)