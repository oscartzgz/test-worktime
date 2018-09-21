// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require_tree .

const url = 'http://localhost:3000'

var http_head = {}



function getEmployees() {
  return  fetch(`${url}/employees.json`)
    .then(response => response.json())
    .then(json => json)
}

function getEmployee(id) {
  return  fetch(`${url}/employee/${id}.json`)
    .then(response => response.json())
    .then(json => json)
}

function createEmployee(data) {
  data = JSON.stringify({employee: data})

  return  fetch(`${url}/employees`, {
    method: 'post',
    credentials: "same-origin",
    body: data,
    headers:{
      'X-CSRF-Token': Rails.csrfToken(),
      'Content-Type': 'application/json'
    }
  }).then(response => {
    status = response.status
    return response.json() 
  })
    .then(json => json)
    .catch(err => console.log('Hubo un error!'))
}

function deleteEmployee(id){
  return fetch(`${url}/employees/${id}`, {
    method: 'delete',
    headers:{
      'X-CSRF-Token': Rails.csrfToken(),
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    status = response.status
  })
}


// formToJSON: Encapsula el formulario en un objeto JSOM
// params: un objeto DOM o vacio para el primer formulario del documento
// return: un objeto JSON con el contenido del formulario
function formToJSON( form ) {
  //form = document.querySelector( form ) || document.forms[0];
  var elems = form.elements;
  var i, len = elems.length;
  var jsonForm = {};
  
  for( i = 0 ; i < len ; i++ ) {
  
    var element = elems[i];
    var type = element.type;
    var name = element.name;
    var value = element.value;
    
    switch(type) {
      case 'color':
      case 'date':
      case 'datetime':
      case 'datetime-local':
      case 'email':
      case 'month':
      case 'number':
      case 'range':
      case 'search':
      case 'tel':
      case 'time':
      case 'url':
      case 'week':
      case 'text':
      case 'radio':
      case 'tel':
      case 'textarea':
      case 'select-one':
        jsonForm[ name ] = value;
      break;
      case 'checkbox':
        if ( element.checked )
          jsonForm[ name ] = value;
      break;
      default: break;
    }
  }
  return jsonForm;
}