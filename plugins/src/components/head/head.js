/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import head from './head.css'

export default class Head {
  /**
   * @param {string} title
   */
  create(title) {
    const h1 = document.createElement('h1')
    h1.innerText = title
    h1.classList.add('title')
    document.querySelector('body').appendChild(h1)
  }
}
