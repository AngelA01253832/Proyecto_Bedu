## Equipo 14
- Ángel Manuel Bonilla Huesca
- Aury Josué Almazán Guzmán
- Darwin Jiménez
- Wilber Aldair Alegria Mendez

## Descripción del Proyecto

Planteamos desarrollar un sistema de delivery para restaurantes, que controle la publicación de platillos, venta y entrega de los mismos.

## Alcance

Para este módulo del curso, la API va a cumplir con las siguientes funcionalidades:
- Los clientes deben poder consultar los diferentes platillos que hay en el sistema
- Los clientes deben poder realizar pedidos
- Mostrar la lista de platillos, así como la información correspondiente a cada uno de estos
- CRUD de clientes
- CRUD de platillos

## Lista de entidades
- Plato
    - Informa a los clientes que platos están disponibles, así como su tiempo de preparación y costo.
    - Contiene los ingredientes y la receta de cada plato

- Cliente
    - Puede consultar platos
    - Contiene los datos del cliente

- Pedido
    - Agrupa los platillos que el cliente solicita.
    - Calcula el tiempo de demora y el costo del pedido

- Receta
    - Informa los ingredientes y  su cantidad de un platillo

## Historias de usuario y casos de uso
- Como cliente o visitante de DeliveryApp quiero ver todos los platillos que hay en el sistema para poder realizar un pedido

<p align="center">
  <img src="assets/CasosUso/consultar_pedido.jpg" />
</p>

 - Como cliente de DeliveryApp quiero realizar un pedido para solicitar los platillos que me agraden
 
 <p align="center">
  <img src="assets/CasosUso/realizar_pedido.jpg" />
</p>

- Como administrador de DeliveryApp quiero gestionar platillos

<p align="center">
  <img src="assets/CasosUso/mantener_platos.jpg" />
</p>

- Como administrador de DeliveryApp quiero gestionar clientes

<p align="center">
  <img src="assets/CasosUso/mantener_ctes.jpg" />
</p>
 
## Descripción técnica
- Para poder ejecutar es necesario tener instalado nodejs, postman y mongodb con la finalidad de ver en tiempo real el funcionamiento de nuestra api.
  <h4>Node js.</h4>
- Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje Javascript, es aquí donde nosotros hemos creado la lógica de nuestra API. Para saber si tienes instalado node en tu computador basta con abrir la terminal y ejecutar *node --version*, esta te desplegará la versión que tienes. 
- De no ser así puedes descargarlo en este link:
    <a href="https://nodejs.org/es/" tag="_blank">Instalar NodeJS</a> (elije la versión recomendada).
    
  <h4>POSTMAN</h4>
- Es una herramienta que nos servirá para hacer peticiones crud a nuestra api, esto con la finalidad de proveernos una mejor forma de trabajo, para instalar este programa puedes dar click al siguiente enlace: 
    <a href="https://www.postman.com/" tag="_blank">Instalar POSTMAN</a>
    
   <h4>MongoDB</h4>
-  Para este proyecto utilizaremos MongoDB, que es un gestor de base de datos noSQL orientado a documentos, para su instalación tendrás que entrar al link adjunto e ir a la parte de Sistemas operativos, tendrás que descargar e instalar el archivo que esté asociado a tu SO, el siguiente enlace te lleva a la sección de instalación: 
    <a href="https://docs.mongodb.com/manual/installation/" tag="_blank">Instalar MongoDB</a>
   
    <h3>Ejecución del proyecto</h3>
 - Para esto tendrás que hacer un git clone de este proyecto y alojarlo en una carpeta exclusiva, una vez haciendo descargado tendrás que dirigirte a la terminal y ejecutar el comando *npm i*, esta nos generará una carpeta llamada *node_dependences* que servirá para la ejecución de nuestro proyecto. Por último en la terminal, una vez en nuestro proyecto ejecutamos el comando npm run dev, levantando así nuestro server y finalmente poder hacer las peticiones que querramos.

 - Como nota, es recomendable hacer estos pasos utilizando el git bash.
