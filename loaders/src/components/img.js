/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import Lake from '../img/lake.jpg'

export default class Img {
  insertImg() {
    const img = document.createElement('img')
    img.src = Lake
    img.width = 200
    document.querySelector('body').appendChild(img)
  }
}
