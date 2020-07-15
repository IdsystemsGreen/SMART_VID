SMART VID -Web applications-app Mobile-Sensors server

1.- Meshlium
Enchufar, esperar hasta escuchar la señal.
Navicat: para visualizar la BD de Meshlium.  Envío de datos: SensorParser Table.

2. Consola meshlium
a. Obtener la dirección IP del meshlium
b. Abrir directamente la consola meshlium desde la aplicación web
c. Visualizar los frame desde la BD de Meshlium en la BD Local con SensorNetworks Capture.

3.  Monitor 
a. Waspmote conectado al servidor
b. Ejecutar waspmok desde Waspmote_pro_ide (wasppmote.exe)
c. Correcciones a waspmote mediante Scketches, en  P.de. Opciones Adrress, IPAdress, desde la dirección de IP del meshlium. Fechas en RTC.SetTime.

4. Waspmote
Verificar switchs. Tardará aproximadamente 2 minutos en mandar el primer frame.

5. Tomcat
Levantar el tomcat. SensorDataWeb/login
En Share ver properties file.

6. APK. Sobre TC20

IMPORTANTE1: en caso de CIERRE para no dañar Meshlium:
•En el Monitor, cerrar directamente con  X.
•En el waspmote, correr los switch a la derecha
•Apagar el Tomcat
•Cerrar consola web
IMPORTANTE2: Meshlium: apagado por consola: Shutdown 1 y shutdown 2. 
No apagar Meshlium desde el equipo (evita daños de hard). Delay de 5 minutos y señal al apagarse. 
Si el Meshlium está apagado, la consola del meshlium no abre.
