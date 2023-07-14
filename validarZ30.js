function validarZ(letra) {
    return letra.charAt(0) === 'Z';
  }
  
  function validarnumero(valor, percentual) {
    return (valor * percentual) / 100;
  }
  
  
  console.log(validarnumero);
  console.log(validarZ);
  
  module.exports = {
    validarZ,
    validarnumero
  };