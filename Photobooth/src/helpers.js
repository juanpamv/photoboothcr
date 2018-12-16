export function validateRequired(value) {
  if (value !== ''){
    return true;
  }else{
    return {
      error: "Debe llenar este espacio."
    };
  }
}

export function validateMail(value) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  result = regex.test(value);

  if (result){
    return true;
  } else {
    return {
      error: "Debe ingresar un email válido."
    }
  }
}

export function validatePhone(value) {
  var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  result = regex.test(value);

  if (result){
    return true;
  } else {
    return {
      error: "Debe ingresar un teléfono válido."
    }
  }
}
