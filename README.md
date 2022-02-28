# The Fork Replica
 Replica del sitio web The Fork en Angular. (Sin Deploy)

_El proyecto se encuentra en desarrollo._

## **Hay dos maneras de visualizar el proyecto:**
<br>

- Una manera es **SIN** el uso de la API:
    - Abrir el proyecto en la terminal
    - Ejecutar **_'npm i'_** para instalar los paquetes de las dependencias.
    - Una vez instalado todo ejecutar el comando **_'npm start'_**. 
    - Abrir en el navegador el puerto que nos indica en la terminal.
<br>
<br>

- La otra manera es **CON** el uso de una API creada en EXPRESS JS que se encuentra en la carpeta *"api_the_fork"*:
    - Abrir la carpeta *"api_the_fork"* en la terminal.
    - Ejecutar el comando **_'npm i'_** y esperar a que se instalen todos los paquetes.
    - Ejecutar el comando **_'npx nodemon index'_** para lanzar el servidor.
    - Abrir en el navegador el puerto que nos indica en la terminal.
<!--  -->
    Hay que comentar y descomentar ciertas líneas de código para poder visualizar la info desde la  llamada a la API.
    Dentro de los archivos TS de cada componente o página viene indicadas esas líneas.
    Por defecto están habilitadas las líneas para visualizar la aplicación sin el uso de la API.
    Te indico cuáles son los componentes que de momento se ven afectados:

<!-- -->
### Componentes en los que hay que modificar el archivo *TypeScript*:
- En la carpeta _"src/app/**services**"_. 
    - _Inhabilitar_ líneas de la **62 a 1169**, **1173 a 3694**.
    - _Habilitar_ líneas **4755**, **4759**, **4763 a 4774**
- En la carpeta _"src/app/**components**"_:
    - ***/buscador***  
- En la carpeta _"src/app/**pages**"_:
    - ***/inicio***
    - ***/restaurante***