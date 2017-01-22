// var display = '';

$(function(){
  console.log('document loaded up');

  $('button').on('click',operations);
  $('#clear').on('click', clear);

});
// Each numerical value and the mathematical operator type will be bundled up in
// an object and then sent to the server via a POST request

var number = {
  x: 0,
  y: 0,
  type: ''
}



function operations(){
  number.x = $('#x').val();
  number.y = $('#y').val();
  number.type = $(this).attr('class');
  console.log(number);
$.ajax({
  type: "POST",
  url: "/scripts/results/" + number.type,
  data: number,
  success: getAnswer


})

}

function getAnswer(){
  console.log('getAnswer');
  $.ajax({
    type: "GET",
    url: "/scripts/results",
    success: displayAnswer

  })
}

function displayAnswer(answer){
  console.log(answer.result);
  $('#answer').text(answer.result);
}
function clear(){
$('#answer').empty();
$('#x').empty();
$('#y').empty();
}
