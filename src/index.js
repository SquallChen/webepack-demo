import $ from 'jquery'
import _ from 'lodash'
import './index.scss'

var img1 = document.createElement("img");
img1.src = require("./2.jpg");
document.body.appendChild(img1);

function component() {
  var $div = $('<div/>')
 
  $div.html(_.join(['Hello', 'webpack'], ' '))

  return $div
}

$(document.body).append(component())
