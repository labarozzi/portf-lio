Copy code

var $certificado = $("#certificado");

$certificado.on('mouseover', function() {
  $certificado.stop().css({ height: "400px", width: "400px" });
});

$certificado.on('mouseout', function() {
  $certificado.stop().animate({ height: "50px", width: "50px" });
});