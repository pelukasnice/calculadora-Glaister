function calcularTiempo() {
  const tempRectalCadaverica = parseFloat(document.getElementById("tempRectal").value);
  const tempRectalNormal = 36;

  if (isNaN(tempRectalCadaverica)) {
    alert('Por favor ingrese valores válidos para las temperaturas');
    return;
  }

  const horasFallecimiento = (tempRectalNormal - tempRectalCadaverica) / 0.83;

  document.getElementById("resultado").innerHTML = "El tiempo de fallecimiento estimado es de aproximadamente " + horasFallecimiento.toFixed(2) + " horas.";
}



/*function calcularHoraDeLaMuerte() {
    const tempAmbiente = parseFloat(document.getElementById('tempAmbiente').value);
    const tempRectal = parseFloat(document.getElementById('tempRectal').value);
  
    if (isNaN(tempAmbiente) || isNaN(tempRectal)) {
      alert('Por favor ingrese valores válidos para las temperaturas');
      return;
    }
  
    const difTemperaturas = tempRectal - tempAmbiente;
    const horaMuerte = new Date(Date.now() - (difTemperaturas / 0.8) * 60 * 60 * 1000);
  
    const hora = horaMuerte.getHours();
    const minutos = horaMuerte.getMinutes();
  
    document.getElementById('resultado').innerHTML = `La hora de la muerte estimada es: ${hora}:${minutos < 10 ? '0' : ''}${minutos}`;
  }*/