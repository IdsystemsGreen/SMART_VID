var interval;
var radiacionSolarSimbolo = 'µmol / m2 . s';
var intensidadLuminosaSimbolo= 'v';
var humedadSueloSimbolo = 'cbar';


var temperaturaSimbolo = String.fromCharCode(176) + 'C';
var presionAireSimbolo = 'kPa';
var humedadSimbolo = '%';

var velocidadVientoSimbolo = 'km/h';
var lluviaSimbolo = 'mm/h';

var nivelBateriaSimbolo = '%';
var temperaturaInternaSimbolo = String.fromCharCode(176)  + 'C';

function runAutomatic() {
	stopCallServer();
	interval = setInterval(function(){
		getSensorData();
	},10000); 
}


function getSensorData(){
	$.ajax({
		url: '/SensorDataRestService/rest/sensoData/sensorsByFrameWebApp2', 
		type : "GET",  
		dataType : 'json',
		success : function(sensorData, data) {
			updateSensorData(sensorData);
		},
		error: function(data) {
			var jsonData = JSON.parse(data.responseText);
	    	toastr.error(jsonData.msg);
		} 
	});
}

function stopCallServer(){
	if(interval != null)
		clearInterval(interval)
}

function updateSensorData(sensorData){ 
	
	$("#presionAire").text(sensorData.atmosfera.presionAire + ' ' + presionAireSimbolo);
	$("#temperatura").text(sensorData.atmosfera.temperatura + ' ' + temperaturaSimbolo);
	$("#humedad").text(sensorData.atmosfera.humedad + ' ' + humedadSimbolo);
	
	$("#radiacionSolar").text(sensorData.radiacion.radiacionSolar + ' ' + radiacionSolarSimbolo);
	$("#intensidadLuminosa").text(sensorData.radiacion.intensidadLuminosa + ' ' + intensidadLuminosaSimbolo);
	$("#humedadSuelo").text(sensorData.radiacion.humedadSuelo + ' ' + humedadSueloSimbolo);
	
	$("#velocidadViento").text(sensorData.estacionMetereologica.velocidadViento + ' ' + velocidadVientoSimbolo);
	$("#direccionViento").text(sensorData.estacionMetereologica.direccionViento);
	$("#lluvia").text(sensorData.estacionMetereologica.lluvia == null ? '' : sensorData.estacionMetereologica.lluvia  + ' ' + lluviaSimbolo);
	
	$("#nivelBateria").text(sensorData.nodo.nivelBateria + ' ' + nivelBateriaSimbolo);
	
	var temperaturaInterna = sensorData.nodo.temperaturaInterna  + ' ' + temperaturaInternaSimbolo;
	$("#temperaturaInterna").text(temperaturaInterna);
	$("#fecha").text(sensorData.fecha);
	$("#frame").text(sensorData.frame);
	
	generarAlertas(sensorData);
	
	generarGraficosAtmosfera(sensorData.atmosfera.temperatura, sensorData.atmosfera.humedad, sensorData.atmosfera.presionAire);
	generarGraficosRadiacion(sensorData.radiacion.radiacionSolar, sensorData.radiacion.humedadSuelo, sensorData.radiacion.intensidadLuminosa);
	generarGraficos(sensorData.estacionMetereologica.velocidadViento, sensorData.estacionMetereologica.lluvia, sensorData.estacionMetereologica.direccionViento);
	generarGraficosNodo(sensorData.nodo.nivelBateria, sensorData.nodo.temperaturaInterna);
	
	
	
	
}


function generarAlertas(sensorData) {
	apilcarFormatoAlertas('iRadiacionSolar', 'spanRadiacionSolar','iRadiacionSolarDatos', 'radiacionSolar', 'radiacionSolarLbl', sensorData.radiacion.hayAlertaRadiacionSolar, sensorData.radiacion.radiacionSolarMax, radiacionSolarSimbolo);
	apilcarFormatoAlertas('iHumedadSuelo', 'spanHumedadSuelo', 'iHumedadSueloDatos', 'humedadSuelo', 'humedadSueloLbl', sensorData.radiacion.hayAlertaHumedadSuelo, sensorData.radiacion.humedadSueloMax, humedadSueloSimbolo);
	apilcarFormatoAlertas('iIntensidadLuminosa', 'spanIntensidadLuminosa', 'iIntensidadLuminosaDatos', 'intensidadLuminosa', 'intensidadLuminosaLbl', sensorData.radiacion.hayAlertaIntensidadLuminosa, sensorData.radiacion.intensidadLuminosaMax, intensidadLuminosaSimbolo);


	apilcarFormatoAlertas('iHumedad', 'spanHumedad','iHumedadDatos', 'humedad', 'humedadLbl', sensorData.atmosfera.hayAlertaHumedad, sensorData.atmosfera.humedadMax, humedadSimbolo);
	apilcarFormatoAlertas('iPresionAire', 'spanPresionAire', 'iPresionAireDatos', 'presionAire', 'presionAireLbl', sensorData.atmosfera.hayAlertaPresionAire, sensorData.atmosfera.presionAireMax, presionAireSimbolo);
	apilcarFormatoAlertas('iTemperatura', 'spanTemperatura', 'iTemperaturaDatos', 'temperatura', 'temperaturaLbl', sensorData.atmosfera.hayAlertaTemperatura, sensorData.atmosfera.temperaturaMax, temperaturaSimbolo);

	apilcarFormatoAlertas('iVelocidadViento', 'spanVelocidadViento', 'iVelocidadVientoDatos', 'velocidadViento', 'velocidadVientoLbl', sensorData.estacionMetereologica.hayAlertaVelocidadViento, sensorData.estacionMetereologica.velocidadVientoMax, velocidadVientoSimbolo);
	apilcarFormatoAlertas('iLluvia', 'spanLluvia', 'iLluviaDatos', 'lluvia', 'lluviaLbl', sensorData.estacionMetereologica.hayAlertaLluvia, sensorData.estacionMetereologica.lluviaMax, lluviaSimbolo);


	apilcarFormatoAlertas('iNivelBateria', 'spanNivelBateria', 'iNivelBateriaDatos', 'nivelBateria', 'nivelBateriaLbl', sensorData.nodo.hayAlertaNivelBateria, sensorData.nodo.nivelBateriaMax, nivelBateriaSimbolo);
	apilcarFormatoAlertas('iTemperaturaInterna', 'spanTemperaturaInterna', 'iTemperaturaInternaDatos', 'temperaturaInterna', 'temperaturaInternaLbl', sensorData.nodo.hayAlertaTemperaturaInterna, sensorData.nodo.temperaturaInternaMax, temperaturaInternaSimbolo);

	
}

function apilcarFormatoAlertas(iIdGraficos, spanIdGraficos, iIdDatos, spanIdDatos, idLblText, hayAlerta, maxValue, simbolo){
	if(hayAlerta) {
		$('#' + iIdGraficos).addClass("fa fa-exclamation-triangle fa-fw fa-2x text-danger blink");
		$('#' + spanIdGraficos).addClass("text-danger blink");
		$('#' + iIdDatos).addClass("fa fa-exclamation-triangle fa-fw fa-1x text-danger blink");
		$('#' + spanIdDatos).addClass("text-danger");
		$('#' + idLblText).addClass("text-danger");
		
		
		$('#' + idLblText).mouseover(function(){
			$('#alertaModal').modal('show');
			$('#sensorMaxValueLbl').text(maxValue + ' ' + simbolo);
			$('#sensorNombreLbl').text($('#' + spanIdGraficos).text())
		});
		
		$('#' + spanIdDatos).mouseover(function(){
			$('#alertaModal').modal('show');
			$('#sensorMaxValueLbl').text(maxValue + ' ' + simbolo);
			$('#sensorNombreLbl').text($('#' + spanIdGraficos).text())
		});
		
		$('#' + iIdDatos).mouseover(function(){
			$('#alertaModal').modal('show');
			$('#sensorMaxValueLbl').text(maxValue + ' ' + simbolo);
			$('#sensorNombreLbl').text($('#' + spanIdGraficos).text())
		});
		
		$('#' + iIdGraficos).mouseover(function(){
			$('#alertaModal').modal('show');
			$('#sensorMaxValueLbl').text(maxValue + ' ' + simbolo);
			$('#sensorNombreLbl').text($('#' + spanIdGraficos).text())
		});
		
		$('#' + spanIdGraficos).mouseover(function(){
			$('#alertaModal').modal('show');
			$('#sensorMaxValueLbl').text(maxValue + ' ' + simbolo);
			$('#sensorNombreLbl').text($('#' + spanIdGraficos).text())
		});
	} else {
		$('#' + iIdGraficos).removeClass("fa fa-exclamation-triangle fa-fw fa-2x text-danger blink");
		$('#' + spanIdGraficos).removeClass("text-danger blink");
		$('#' + iIdDatos).removeClass("fa fa-exclamation-triangle fa-fw fa-1x text-danger blink");
		$('#' + spanIdDatos).removeClass("text-danger");
		$('#' + idLblText).removeClass("text-danger");
		$('#' + idLblText).off('mouseover');
		$('#' + spanIdDatos).off('mouseover');
		$('#' + iIdDatos).off('mouseover');
		$('#' + iIdGraficos).off('mouseover');
		$('#' + spanIdGraficos).off('mouseover');
	}
	

}





	


