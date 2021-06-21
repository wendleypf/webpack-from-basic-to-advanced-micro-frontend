/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import './button.scss'

export default class Button {
  create() {
    const button = document.createElement('button')
    button.innerText = 'Click'
    button.classList.add('btn')
    document.querySelector('body').appendChild(button)
  }
}
