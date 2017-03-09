function dale(){
  var cuenta = document.getElementById("correo").value;
  var imprime = document.getElementById("a");
var cuenta_correo = /\A[^@]+@[^@]+\z/;

  if(cuenta == ""){

    imprime.innerHTML = "El campo del usuario no puede estar en blanco";
  }else if(cuenta_correo.test(cuenta)){
  imprime.innerHTML = "incorrecto";
}else{
    imprime.innerHTML = "Bien";
}

}
