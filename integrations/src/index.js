/**
 * @author wendleypf <wendleypf@gmail.com>
 */
import './fonts.css'
import './index.css'
import $ from 'jquery'
import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {faAnchor, faBacon} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap'

library.add(faBacon)
library.add(faAnchor)
dom.watch()

const body = $('body')
const p = $('<p></p>').text('Hello word.').css('color', 'red')

body.append(p)
