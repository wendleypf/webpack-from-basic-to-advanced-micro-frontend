/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import print from './msg'

console.log(_.difference([1, 2, 3, 4], [4, 5]))
console.log(_.lastIndexOf([1, 2, 3], 2))

if (module.hot) {
  module.hot.accept('./msg', () => {
    console.log('The module msg is updated')
    print()
  })
}

function createBtn() {
  const btn = document.createElement('button')
  btn.innerText = 'Click Here'

  document.querySelector('body').appendChild(btn)
  btn.onclick = e => import('./lazy').then(module => {
    const lazy = module.default
    lazy()
  })
}

createBtn()
