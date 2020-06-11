/*MENU */
$(document).ready(main);
function main(){
	$('.menu_bar').click(function(){
		$('nav').toggle(); 
	});
 
};

$(document).ready(function(){
  $('#table-misprestamos').DataTable();
});

$('#btn-sesion').click(function(){
    window.open("ingresar.html", '_self');
    return false;
});

$('#btn-ingresar').click(function () {
  window.open("misprestamos.html", '_self');
  return false;
});

$('#btn-agregar').click(function () {
  window.open("misprestamos.html", '_self');
  return false;
});


function redireccionar() {
  setTimeout("href='iniciar_sesion.html'", 5000);
}



  