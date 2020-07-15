function generarGraficosAtmosfera(temperatura, humedad, presionAire) {
	generarHumedad(humedad);
	generarTemperatura(temperatura);
	generarPresionAire(presionAire);
}

function generarGraficosRadiacion(radiacionSolar, humedadSuelo,
		intensidadLuminosa) {
	generarRadiacionSolar(radiacionSolar);
	generarHumedadSuelo(humedadSuelo);
	generarIntensidadLuminosa(intensidadLuminosa);
}

function generarGraficosNodo(nivelBateria, temperaturaInterna) {
	generarTemperaturaInterna(temperaturaInterna);
	generarNivelBateria(nivelBateria);
}

function generarGraficos(velocidadViento, lluvia, direccionViento) {
	generarVelocidadViento(velocidadViento);
	generarLluvia(lluvia) ;
	generarDireccionViento(direccionViento);
}

function generarHumedad(humedad) {
	var background = {
		type : 'radialGradient',
		x0 : 0.50,
		y0 : 0.50,
		r0 : 0.0,
		x1 : 0.50,
		y1 : 0.50,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : 'white'
		}, {
			offset : 1,
			color : '#AAD7FF'
		} ]
	};

	var gradient1 = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0.5,
		x1 : 1,
		y1 : 0.5,
		colorStops : [ {
			offset : 0,
			color : '#C5F80B'
		}, {
			offset : 1,
			color : '#6B8901'
		} ]
	};

	var gradient2 = {
		type : 'linearGradient',
		x0 : 0.5,
		y0 : 0,
		x1 : 0.5,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	var anchorGradient = {
		type : 'radialGradient',
		x0 : 0.35,
		y0 : 0.35,
		r0 : 0.0,
		x1 : 0.35,
		y1 : 0.35,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#4F6169'
		}, {
			offset : 1,
			color : '#252E32'
		} ]
	};

	$('#jqHumedad').jqRadialGauge({
		background : background,
		border : {
			lineWidth : 6,
			strokeStyle : '#76786A',
			padding : 20
		},
		anchor : {
			visible : true,
			fillStyle : anchorGradient,
			radius : 0.10
		},
		tooltips : {
			disabled : false,
			highlighting : true
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : humedad + '%',
			font : '18px sans-serif',
			horizontalOffset : 0.5,
			verticalOffset : 0.80
		} ],
		scales : [ {
			minimum : 0,
			maximum : 100,
			startAngle : 140,
			endAngle : 400,
			majorTickMarks : {
				length : 12,
				lineWidth : 2,
				interval : 10,
				offset : 0.80
			},
			minorTickMarks : {
				visible : true,
				length : 8,
				lineWidth : 2,
				interval : 2,
				offset : 0.80
			},
			labels : {
				orientation : 'horizontal',
				interval : 10,
				stringFormat : '%d%%',
				offset : 1.00
			},
			needles : [ {
				value : humedad,
				type : 'pointer',
				outerOffset : 0.8,
				mediumOffset : 0.7,
				width : 10,
				fillStyle : '#252E32'
			} ],
			ranges : [ {
				outerOffset : 0.80,
				innerStartOffset : 0.76,
				innerEndOffset : 0.68,
				startValue : 1,
				endValue : 70,
				fillStyle : gradient1
			}, {
				outerOffset : 0.80,
				innerStartOffset : 0.68,
				innerEndOffset : 0.60,
				startValue : 70,
				endValue : 100,
				fillStyle : gradient2
			} ]
		} ]
	});
}

function generarTemperatura(temperatura) {

	var baja = 0;
	var alta = 0;

	if (parseFloat(temperatura) > 50)
		alta = temperatura;
	else
		baja = temperatura;

	var linearGradientRange = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 0,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FE642E'
		}, {
			offset : 1,
			color : '#FFFF00'
		} ]
	};

	var linearGradientBarMarker = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#B2183E'
		}, {
			offset : 0.42,
			color : '#FF3366'
		}, {
			offset : 0.48,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	var radialGradient = {
		type : 'radialGradient',
		x0 : 0.45,
		y0 : 0.45,
		r0 : 0.0,
		x1 : 0.45,
		y1 : 0.45,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	$(document).ready(function() {
		$('#jqTemperatura').jqLinearGauge({
			orientation : 'vertical',
			background : '#F7F7F7',
			border : {
				padding : 12,
				lineWidth : 4,
				strokeStyle : '#76786A'
			},
			tooltips : {
				disabled : true,
				highlighting : false
			},
			annotations : [ {
				text : temperatura + ' ' + String.fromCharCode(176) + 'C',
				font : '18px sans-serif',
				horizontalOffset : 0.5,
				verticalOffset : 0.95
			} ],
			scales : [ {
				margin : {
					top : 6,
					left : 0,
					right : 0,
					bottom : 32
				},
				minimum : -30,
				maximum : 50,
				interval : 10,
				labels : {
					offset : 0.20,
					font : '14px sans-serif',
					hAlign : 'right'
				},
				majorTickMarks : {
					offset : 0.25,
					length : 15,
					interval : 5
				},
				minorTickMarks : {
					visible : true,
					interval : 1,
					offset : 0.31
				},
				ranges : [ {
					startValue : -30,
					endValue : 50,
					fillStyle : 'black',
					innerOffset : 0.38,
					outerStartOffset : 0.39,
					outerEndOffset : 0.39
				} ],
				barMarkers : [ {
					value : baja,
					innerOffset : 0.39,
					outerOffset : 0.58,
					fillStyle : linearGradientBarMarker,
					zIndex : 5
				} ],
				needles : [ {
					type : 'ellipse',
					fillStyle : radialGradient,
					lineWidth : 1,
					strokeStyle : 'black',
					value : -33,
					width : 34,
					height : 34,
					innerOffset : 0.335
				} ]
			}, {
				minimum : -22,
				maximum : 122,
				interval : 20,
				margin : {
					top : 6,
					left : 0,
					right : 0,
					bottom : 32
				},
				labels : {
					offset : 0.78,
					font : '14px sans-serif',
					hAlign : 'left'
				},
				majorTickMarks : {
					offset : 0.60,
					length : 15,
					interval : 10
				},
				minorTickMarks : {
					visible : true,
					interval : 2,
					offset : 0.60
				},
				ranges : [ {
					startValue : -22,
					endValue : 122,
					fillStyle : 'black',
					innerOffset : 0.58,
					outerStartOffset : 0.59,
					outerEndOffset : 0.59
				} ],
				barMarkers : [ {
					value : alta,
					innerOffset : 0.39,
					outerOffset : 0.58,
					fillStyle : linearGradientBarMarker,
					zIndex : 5
				} ],
				needles : [ {
					type : 'ellipse',
					fillStyle : radialGradient,
					lineWidth : 1,
					strokeStyle : 'black',
					value : -27.5,
					width : 34,
					height : 34,
					innerOffset : 0.335
				} ]
			} ]
		});
	});
}

function generarPresionAire(presionAire) {
	var gradient1 = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0.5,
		x1 : 1,
		y1 : 0.5,
		colorStops : [ {
			offset : 0,
			color : '#C5F80B'
		}, {
			offset : 1,
			color : '#6B8901'
		} ]
	};

	var gradient2 = {
		type : 'linearGradient',
		x0 : 0.5,
		y0 : 0,
		x1 : 0.5,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	var anchorGradient = {
		type : 'radialGradient',
		x0 : 0.35,
		y0 : 0.35,
		r0 : 0.0,
		x1 : 0.35,
		y1 : 0.35,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#4F6169'
		}, {
			offset : 1,
			color : '#252E32'
		} ]
	};

	$('#jqPresionAire').jqRadialGauge({
		background : '#F7F7F7',
		border : {
			lineWidth : 6,
			strokeStyle : '#76786A',
			padding : 16
		},
		shadows : {
			enabled : true
		},
		anchor : {
			visible : true,
			fillStyle : anchorGradient,
			radius : 0.10
		},
		tooltips : {
			disabled : false,
			highlighting : true
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : presionAire + ' kPa',
			font : '18px sans-serif',
			horizontalOffset : 0.5,
			verticalOffset : 0.82
		} ],
		scales : [ {
			minimum : 0,
			maximum : 200,
			startAngle : 140,
			endAngle : 400,
			majorTickMarks : {
				length : 12,
				lineWidth : 4,
				strokeStyle : '#B2183E',
				interval : 20,
				offset : 0.84
			},
			minorTickMarks : {
				visible : true,
				length : 8,
				lineWidth : 2,
				strokeStyle : '#1F66A8',
				interval : 2,
				offset : 0.84
			},
			labels : {
				orientation : 'horizontal',
				interval : 20,
				offset : 1.00
			},
			needles : [ {
				value : presionAire,
				type : 'pointer',
				outerOffset : 0.8,
				mediumOffset : 0.7,
				width : 10,
				fillStyle : '#252E32'
			} ],
			ranges : [ {
				outerOffset : 0.82,
				innerStartOffset : 0.76,
				innerEndOffset : 0.60,
				startValue : 40,
				endValue : 200,
				fillStyle : gradient1
			} ]
		} ]
	});
}

function generarRadiacionSolar(radiacionSolar) {
	var gradient1 = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0.5,
		x1 : 1,
		y1 : 0.5,
		colorStops : [ {
			offset : 0,
			color : '#C5F80B'
		}, {
			offset : 1,
			color : '#6B8901'
		} ]
	};

	var gradient2 = {
		type : 'linearGradient',
		x0 : 0.5,
		y0 : 0,
		x1 : 0.5,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	var anchorGradient = {
		type : 'radialGradient',
		x0 : 0.35,
		y0 : 0.35,
		r0 : 0.0,
		x1 : 0.35,
		y1 : 0.35,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#4F6169'
		}, {
			offset : 1,
			color : '#252E32'
		} ]
	};

	$('#jqRadiacionSolar').jqRadialGauge({
		background : '#F7F7F7',
		border : {
			lineWidth : 6,
			strokeStyle : '#76786A',
			padding : 16
		},
		shadows : {
			enabled : true
		},
		anchor : {
			visible : true,
			fillStyle : anchorGradient,
			radius : 0.10
		},
		tooltips : {
			disabled : false,
			highlighting : true
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : radiacionSolar + ' µmol / m2 . s',
			font : '17px sans-serif',
			horizontalOffset : 0.8,
			verticalOffset : 0.95
		} ],
		scales : [ {
			minimum : -20,
			maximum : 100,
			startAngle : 180,
			endAngle : 360,
			majorTickMarks : {
				length : 12,
				lineWidth : 2,
				interval : 10,
				offset : 0.84
			},
			minorTickMarks : {
				visible : true,
				length : 8,
				lineWidth : 2,
				interval : 2,
				offset : 0.84
			},
			labels : {
				orientation : 'horizontal',
				interval : 10,
				offset : 1.00
			},
			needles : [ {
				value : radiacionSolar,
				type : 'pointer',
				outerOffset : 0.8,
				mediumOffset : 0.7,
				width : 10,
				fillStyle : '#252E32'
			} ],
			ranges : [ {
				outerOffset : 0.82,
				innerStartOffset : 0.76,
				innerEndOffset : 0.68,
				startValue : 40,
				endValue : 80,
				fillStyle : gradient1
			}, {
				outerOffset : 0.82,
				innerStartOffset : 0.68,
				innerEndOffset : 0.60,
				startValue : 80,
				endValue : 100,
				fillStyle : gradient2
			} ]
		} ]
	});

}

function generarHumedadSuelo(humedad) {
	var background = {
		type : 'radialGradient',
		x0 : 0.50,
		y0 : 0.50,
		r0 : 0.0,
		x1 : 0.50,
		y1 : 0.50,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : 'white'
		}, {
			offset : 1,
			color : '#ffa366'
		} ]
	};

	var gradient1 = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0.5,
		x1 : 1,
		y1 : 0.5,
		colorStops : [ {
			offset : 0,
			color : '#C5F80B'
		}, {
			offset : 1,
			color : '#6B8901'
		} ]
	};

	var gradient2 = {
		type : 'linearGradient',
		x0 : 0.5,
		y0 : 0,
		x1 : 0.5,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	var anchorGradient = {
		type : 'radialGradient',
		x0 : 0.35,
		y0 : 0.35,
		r0 : 0.0,
		x1 : 0.35,
		y1 : 0.35,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#4F6169'
		}, {
			offset : 1,
			color : '#252E32'
		} ]
	};

	$('#jqHumedadSuelo').jqRadialGauge({
		background : background,
		border : {
			lineWidth : 6,
			strokeStyle : '#76786A',
			padding : 20
		},
		anchor : {
			visible : true,
			fillStyle : anchorGradient,
			radius : 0.10
		},
		tooltips : {
			disabled : false,
			highlighting : true
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : humedad + ' cbar',
			font : '18px sans-serif',
			horizontalOffset : 0.5,
			verticalOffset : 0.80
		} ],
		scales : [ {
			minimum : 0,
			maximum : 260,
			startAngle : 140,
			endAngle : 400,
			majorTickMarks : {
				length : 12,
				lineWidth : 2,
				interval : 10,
				offset : 0.80
			},
			minorTickMarks : {
				visible : true,
				length : 8,
				lineWidth : 2,
				interval : 5,
				offset : 0.80
			},

			needles : [ {
				value : humedad,
				type : 'pointer',
				outerOffset : 0.8,
				mediumOffset : 0.7,
				width : 10,
				fillStyle : '#252E32'
			} ],
			ranges : [ {
				outerOffset : 0.80,
				innerStartOffset : 0.76,
				innerEndOffset : 0.68,
				startValue : 0,
				endValue : 160,
				fillStyle : gradient1
			}, {
				outerOffset : 0.80,
				innerStartOffset : 0.68,
				innerEndOffset : 0.60,
				startValue : 160,
				endValue : 260,
				fillStyle : gradient2
			} ]
		} ]
	});
}

function generarIntensidadLuminosa(intensidadLuminosa) {
	var scaleBackgroundGradient = {
		type : 'linearGradient',
		x0 : 1,
		y0 : 0,
		x1 : 0,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#A4D020'
		}, {
			offset : 0.993,
			color : '#BFFE01'
		} ]
	};

	var range1Gradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#61B603'
		}, {
			offset : 1,
			color : '#448100'
		} ]
	};

	var range2Gradient = {
		type : 'linearGradient',
		x0 : 1,
		y0 : 0,
		x1 : 0,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#87B202'
		}, {
			offset : 1,
			color : '#A6DC01'
		} ]
	};

	var comparativeMeasureGradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 0,
		y1 : 1,
		colorStops : [ {
			offset : 0.900,
			color : '#E4E4E4'
		}, {
			offset : 0.900,
			color : '#FFFFFF'
		} ]
	};

	var featuredMeasureGradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#BABABA'
		}, {
			offset : 0.495,
			color : '#FFFFFF'
		} ]
	};

	$('#jqIntensidadLuminosa').jqBulletGraph({
		orientation : 'vertical',
		border : {
			lineWidth : 0
		},
		tooltips : {
			disabled : false,
			highlighting : false
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : intensidadLuminosa + ' v',
			font : '18px sans-serif',
			horizontalOffset : 0.5,
			verticalOffset : 0.97
		} ],
		quantitativeScale : {
			margin : {
				top : 0,
				left : 0,
				bottom : 20,
				right : 0
			},
			name : 'Main Scale',
			minimum : 0,
			maximum : 20,
			interval : 2,
			background : scaleBackgroundGradient,
			qualitativeRanges : [ {
				value : 6,

				fillStyle : range1Gradient
			}, {
				value : 12,
				fillStyle : range2Gradient
			} ]
		},

		featuredMeasures : [ {
			title : 'Featured Measure',
			value : intensidadLuminosa,
			innerOffset : 0.4,
			outerOffset : 0.6,
			fillStyle : featuredMeasureGradient
		} ]
	});
}

function generarNivelBateria(nivelBateria) {
	var scaleBackgroundGradient = {
		type : 'linearGradient',
		x0 : 1,
		y0 : 0,
		x1 : 0,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#0099ff'
		}, {
			offset : 0.993,
			color : '#7070db'
		} ]
	};

	var range1Gradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#7070db'
		}, {
			offset : 1,
			color : '#0099ff'
		} ]
	};

	var range2Gradient = {
		type : 'linearGradient',
		x0 : 1,
		y0 : 0,
		x1 : 0,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#0099ff'
		}, {
			offset : 1,
			color : '#7070db'
		} ]
	};

	var comparativeMeasureGradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 0,
		y1 : 1,
		colorStops : [ {
			offset : 0.900,
			color : '#E4E4E4'
		}, {
			offset : 0.900,
			color : '#FFFFFF'
		} ]
	};

	var featuredMeasureGradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#BABABA'
		}, {
			offset : 0.495,
			color : '#FFFFFF'
		} ]
	};

	$('#jqNivelBateria').jqBulletGraph({
		orientation : 'vertical',
		border : {
			lineWidth : 0
		},
		tooltips : {
			disabled : false,
			highlighting : false
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : nivelBateria + ' %',
			font : '18px sans-serif',
			horizontalOffset : 0.6,
			verticalOffset : 0.97
		} ],
		quantitativeScale : {
			margin : {
				top : 0,
				left : 0,
				bottom : 20,
				right : 0
			},
			name : 'Main Scale',
			minimum : 0,
			maximum : 100,
			interval : 25,
			background : scaleBackgroundGradient,
			qualitativeRanges : [ {
				value : 70,

				fillStyle : range1Gradient
			}, {
				value : 30,
				fillStyle : range2Gradient
			} ]
		},

		featuredMeasures : [ {
			title : 'Featured Measure',
			value : nivelBateria,
			innerOffset : 0.4,
			outerOffset : 0.6,
			fillStyle : featuredMeasureGradient
		} ]
	});
}

function generarTemperaturaInterna(temperaturaInterna) {

	var baja = 0;
	var alta = 0;

	if (parseFloat(temperaturaInterna) > 50)
		alta = temperaturaInterna;
	else
		baja = temperaturaInterna;

	var linearGradientRange = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 0,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FE642E'
		}, {
			offset : 1,
			color : '#FFFF00'
		} ]
	};

	var linearGradientBarMarker = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#0066ff'
		}, {
			offset : 0.42,
			color : '#66a3ff'
		}, {
			offset : 0.48,
			color : '#66a3ff'
		}, {
			offset : 1,
			color : '#66a3ff'
		} ]
	};

	var radialGradient = {
		type : 'radialGradient',
		x0 : 0.45,
		y0 : 0.45,
		r0 : 0.0,
		x1 : 0.45,
		y1 : 0.45,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#0066ff'
		}, {
			offset : 1,
			color : '#66a3ff'
		} ]
	};

	$(document).ready(
			function() {
				$('#jqTemperaturaInterna').jqLinearGauge(
						{
							orientation : 'vertical',
							background : '#F7F7F7',
							border : {
								padding : 12,
								lineWidth : 4,
								strokeStyle : '#76786A'
							},
							tooltips : {
								disabled : true,
								highlighting : false
							},
							annotations : [ {
								text : temperaturaInterna + ' '
										+ String.fromCharCode(176) + 'C',
								font : '18px sans-serif',
								horizontalOffset : 0.5,
								verticalOffset : 0.95
							} ],
							scales : [ {
								margin : {
									top : 6,
									left : 0,
									right : 0,
									bottom : 32
								},
								minimum : -30,
								maximum : 50,
								interval : 10,
								labels : {
									offset : 0.20,
									font : '14px sans-serif',
									hAlign : 'right'
								},
								majorTickMarks : {
									offset : 0.25,
									length : 15,
									interval : 5
								},
								minorTickMarks : {
									visible : true,
									interval : 1,
									offset : 0.31
								},
								ranges : [ {
									startValue : -30,
									endValue : 50,
									fillStyle : 'black',
									innerOffset : 0.38,
									outerStartOffset : 0.39,
									outerEndOffset : 0.39
								} ],
								barMarkers : [ {
									value : baja,
									innerOffset : 0.39,
									outerOffset : 0.58,
									fillStyle : linearGradientBarMarker,
									zIndex : 5
								} ],
								needles : [ {
									type : 'ellipse',
									fillStyle : radialGradient,
									lineWidth : 1,
									strokeStyle : 'black',
									value : -33,
									width : 34,
									height : 34,
									innerOffset : 0.335
								} ]
							}, {
								minimum : -22,
								maximum : 122,
								interval : 20,
								margin : {
									top : 6,
									left : 0,
									right : 0,
									bottom : 32
								},
								labels : {
									offset : 0.78,
									font : '14px sans-serif',
									hAlign : 'left'
								},
								majorTickMarks : {
									offset : 0.60,
									length : 15,
									interval : 10
								},
								minorTickMarks : {
									visible : true,
									interval : 2,
									offset : 0.60
								},
								ranges : [ {
									startValue : -22,
									endValue : 122,
									fillStyle : 'black',
									innerOffset : 0.58,
									outerStartOffset : 0.59,
									outerEndOffset : 0.59
								} ],
								barMarkers : [ {
									value : alta,
									innerOffset : 0.39,
									outerOffset : 0.58,
									fillStyle : linearGradientBarMarker,
									zIndex : 5
								} ],
								needles : [ {
									type : 'ellipse',
									fillStyle : radialGradient,
									lineWidth : 1,
									strokeStyle : 'black',
									value : -27.5,
									width : 34,
									height : 34,
									innerOffset : 0.335
								} ]
							} ]
						});
			});
}

function generarVelocidadViento(velocidadViento) {
	if(velocidadViento == null)
		velocidadViento = 0;
	
	var kmh = parseFloat(velocidadViento) * 1.62137;
	
	var gradient1 = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0.5,
		x1 : 1,
		y1 : 0.5,
		colorStops : [ {
			offset : 0,
			color : '#C5F80B'
		}, {
			offset : 1,
			color : '#6B8901'
		} ]
	};

	var gradient2 = {
		type : 'linearGradient',
		x0 : 0.5,
		y0 : 0,
		x1 : 0.5,
		y1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#FF3366'
		}, {
			offset : 1,
			color : '#B2183E'
		} ]
	};

	var anchorGradient = {
		type : 'radialGradient',
		x0 : 0.35,
		y0 : 0.35,
		r0 : 0.0,
		x1 : 0.35,
		y1 : 0.35,
		r1 : 1,
		colorStops : [ {
			offset : 0,
			color : '#4F6169'
		}, {
			offset : 1,
			color : '#252E32'
		} ]
	};

	$('#jqVelocidadViento').jqRadialGauge({
		background : '#F7F7F7',
		border : {
			lineWidth : 6,
			strokeStyle : '#76786A',
			padding : 16
		},
		shadows : {
			enabled : true
		},
		anchor : {
			visible : true,
			fillStyle : anchorGradient,
			radius : 0.10
		},
		tooltips : {
			disabled : false,
			highlighting : true
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : kmh.toFixed(1) + ' km/h',
			fillStyle : '#339CFF',
			font : '16px sans-serif',
			horizontalOffset : 0.5,
			verticalOffset : 0.83
		}, {
			text : velocidadViento + ' MPH',
			fillStyle : '#FF3366',
			font : '16px sans-serif',
			horizontalOffset : 0.5,
			verticalOffset : 0.88
		}],
		scales : [ {
			minimum : 0,
			maximum : 150,
			interval : 10,
			startAngle : 120,
			endAngle : 420,
			labels : {
				offset : 1.00
			},
			majorTickMarks : {
				length : 14,
				lineWidth : 2,
				offset : 0.82,
				strokeStyle : '#FF3366'
			},
			minorTickMarks : {
				visible : true,
				length : 8,
				lineWidth : 2,
				interval : 2,
				offset : 0.82,
				strokeStyle : '#FF3366'
			},
			ranges : [ {
				outerOffset : 0.83,
				innerStartOffset : 0.81,
				innerEndOffset : 0.81,
				startValue : 0,
				endValue : 150,
				fillStyle : '#FF3366'
			} ],
			needles : [ {
				value : velocidadViento,
				type : 'pointer',
				outerOffset : 0.8,
				mediumOffset : 0.7,
				width : 10,
				fillStyle : '#252E32'
			} ]
		}, {
			minimum : 0,
			maximum : 240,
			interval : 20,
			startAngle : 120,
			endAngle : 420,
			labels : {
				offset : 0.60
			},
			majorTickMarks : {
				length : 14,
				lineWidth : 2,
				offset : 0.68,
				strokeStyle : '#339CFF'
			},
			minorTickMarks : {
				visible : true,
				length : 8,
				lineWidth : 2,
				interval : 5,
				offset : 0.72,
				strokeStyle : '#339CFF'
			},
			ranges : [ {
				outerOffset : 0.79,
				innerStartOffset : 0.77,
				innerEndOffset : 0.77,
				startValue : 0,
				endValue : 240,
				fillStyle : '#339CFF'
	 		} ]
		} ] 
	});
}


function generarLluvia(lluvia) { 
	var scaleBackgroundGradient = {
		type : 'linearGradient',
		x0 : 1,
		y0 : 0,
		x1 : 0,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#0099ff'
		}, {
			offset : 0.993,
			color : '#7070db'
		} ]
	};

	var range1Gradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#7070db'
		}, {
			offset : 1,
			color : '#0099ff'
		} ]
	};

	var range2Gradient = {
		type : 'linearGradient',
		x0 : 1,
		y0 : 0,
		x1 : 0,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#0099ff'
		}, {
			offset : 1,
			color : '#7070db'
		} ]
	};

	var comparativeMeasureGradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 0,
		y1 : 1,
		colorStops : [ {
			offset : 0.900,
			color : '#E4E4E4'
		}, {
			offset : 0.900,
			color : '#FFFFFF'
		} ]
	};

	var featuredMeasureGradient = {
		type : 'linearGradient',
		x0 : 0,
		y0 : 0,
		x1 : 1,
		y1 : 0,
		colorStops : [ {
			offset : 0,
			color : '#BABABA'
		}, {
			offset : 0.495,
			color : '#FFFFFF'
		} ]
	};

	$('#jqLluvia').jqBulletGraph({
		orientation : 'vertical',
		border : {
			lineWidth : 0
		},
		tooltips : {
			disabled : false,
			highlighting : false
		},
		animation : {
			duration : 1
		},
		annotations : [ {
			text : lluvia + ' mm/h',
			font : '18px sans-serif',
			horizontalOffset : 0.6,
			verticalOffset : 0.97
		} ],
		quantitativeScale : {
			margin : {
				top : 0,
				left : 0,
				bottom : 20,
				right : 0
			},
			name : 'Main Scale',
			minimum : 0,
			maximum : 100,
			interval : 10,
			background : scaleBackgroundGradient,
			qualitativeRanges : [ {
				value : 70,

				fillStyle : range1Gradient
			}, {
				value : 30,
				fillStyle : range2Gradient
			} ]
		},

		featuredMeasures : [ {
			title : 'Featured Measure',
			value : lluvia,
			innerOffset : 0.4,
			outerOffset : 0.6,
			fillStyle : featuredMeasureGradient
		} ]
	});
}


function generarDireccionViento(direccionViento){
	
	var valueViento = 16;
	
	
	switch(direccionViento){
	case 'N' : {valueViento = 16; break;}
	case 'NNW' : {valueViento = 15; break;}
	case 'NW' : {valueViento = 14; break;}
	case 'WNW' : {valueViento = 13; break;}
	case 'W' : {valueViento = 12; break;}
	case 'WSW' : {valueViento = 11; break;}
	case 'SW' : {valueViento = 10; break;}
	case 'SSW' : {valueViento = 9; break;}
	case 'S' : {valueViento = 8; break;}
	case 'SSE' : {valueViento = 7; break;}
	case 'SE' : {valueViento = 6; break;}
	case 'ESE' : {valueViento = 5; break;}
	case 'E' : {valueViento = 4; break;}
	case 'ENE' : {valueViento = 3; break;}
	case 'NE' : {valueViento = 2; break;}
	case 'NNE' : {valueViento = 1; break;}
}

    var anchorGradient = {
        type: 'radialGradient',
        x0: 0.35,
        y0: 0.35,
        r0: 0.0,
        x1: 0.35,
        y1: 0.35,
        r1: 1,
        colorStops: [{ offset: 0, color: '#cc3300' },
                     { offset: 1, color: '#cc3300' }]
    };


    $('#jqRadialGauge').jqRadialGauge({
        background: '#F7F7F7',
        border: {
            lineWidth: 8,
            strokeStyle: '#3366ff',
            padding: 10
        },
        shadows: {
            enabled: true
        },
        anchor: {
            visible: true,
            fillStyle: anchorGradient
        },
        tooltips: {
            disabled: true,
            highlighting: false
        },
        scales: [
                 {
                     minimum: 0,
                     maximum: 16,
                     interval: 1,
                     startAngle: 270,
                     endAngle: 630,
                     labels: {
                         offset: 0.85,
                         showFirstLabel: false,
                         font: '10px sans-serif'
                     },
                     minorTickMarks: {
                         visible: true,
                         interval: 0.2,
                         offset: 0.98
                     },
                     majorTickMarks: {
                         lineWidth: 3,
                         offset: 0.97
                     },
                     needles: [
                                {
                                     value: valueViento,
                                    type: 'pointer',
                                    outerOffset: 0.8,
                                    mediumOffset: 0.6,
                                    width: 12,
                                    fillStyle: '#cc3300'
                                },
                                {
                                    value: 6,
                                    type: 'pointer',
                                    outerOffset: 0.8,
                                    mediumOffset: 0.6,
                                    width: 0,
                                    fillStyle: '#252E32'
                                },
                                {
                                    value: 10,
                                    type: 'line',
                                    outerOffset: 0.8,
                                    innerOffset: -0.2,
                                    lineWidth: 0,
                                    strokeStyle: '#B2183E'
									
                                }
                     ]
                 }
        ]
    });

    $('#jqRadialGauge').bind('labelCreating', function (event, data) {
        switch (data.text) {
            case '1':
                data.text = 'NNE';
                break;
            case '2':
                data.text = 'NE';
                data.font = '18px sans-serif';
			break;
            case '3':
                data.text = 'ENE';
				
                break;
            case '4':
                data.text = 'E';
				data.font = '25px sans-serif';
				data.fillStyle = '#3366ff'
                break;
            case '5':
                data.text = 'ESE';
                break;
            case '6':
                data.text = 'SE';
		        data.font = '18px sans-serif';
		        break;
            case '7':
                data.text = 'SSE';
                break;
            case '8':
                data.text = 'S';
				data.font = '25px sans-serif';
				data.fillStyle = '#3366ff'
                break;
            case '9':
                data.text = 'SSW';
                break;
            case '10':
                data.text = 'SW';
		        data.font = '18px sans-serif';
		
                break;
            case '11':
                data.text = 'WSW';
                break;
            case '12':
                data.text = 'W';
				data.font = '25px sans-serif';
				data.fillStyle = '#3366ff'
                break;
		    case '13':
                data.text = 'WNW';
                break;
            case '14':
                data.text = 'NW';
		        data.font = '18px sans-serif';
		        break;
			case '15':
                data.text = 'NNW';
                break;
			case '16':
                data.text = 'N';
				data.font = '25px sans-serif';
				data.fillStyle = '#3366ff'
                break;
        
        }

    });

    updateGauge(valueViento);
}

function updateGauge(valueViento) {
    var scales = $('#jqRadialGauge').jqRadialGauge('option', 'scales');

    
    
    
    scales[0].needles[0].value = valueViento;
  
    $('#jqRadialGauge').jqRadialGauge('update');

}


