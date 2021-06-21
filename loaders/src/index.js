/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import {Button, Img, Title} from './components'
import warning from './templates/warning.html'
import textT from './files/text.txt'
import data from './files/data.json'

const title = new Title()
title.create('First Page')

const img = new Img()
img.insertImg()

const button = new Button()
button.create()

// Babel spread
const obj = {
  a: 10,
  b: 1,
  c: 3,
  d: 5
}
let {a, b, ...test} = obj
console.log(a)
console.log(b)
console.log(test)

// Import HTML
const body = document.querySelector('body')
body.innerHTML += warning

// Import Text
const text = textT
console.log(text)

// Import JSON
const people = data
console.log(people)
