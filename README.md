# playgrouplatam



<img width="33%" alt="image" src="https://github.com/CristianPumaES6/playgrouplatam/assets/29841048/327ea6d2-0281-4897-bc6d-b912d4349e96">
<img width="33%" alt="image" src="https://github.com/CristianPumaES6/playgrouplatam/assets/29841048/b4ab5d73-1de4-4b2c-bd79-1603b2629bd2">
<img width="33%" alt="image" src="https://github.com/CristianPumaES6/playgrouplatam/assets/29841048/a7e9eed4-706c-477f-9dad-4814687a3266">



Para el backend se estara usando **NESTJS** 

*NestJS* es un framework que nos permite trabajar con *TypeScript y procesarlo a javascript*, nestjs expone sus servicios usando la libreria *expressJS* esto los podemos revisar desde el archivo *main.js*

<span style="color: green; font-weight: bold;"> app.controller.ts </span>  => Este archivo es donde exponemos los servicios.
<span style="color: green; font-weight: bold;"> app.service.ts </span> => Aqui implementamos la logica.
<span style="color: green; font-weight: bold;"> app.controller.spect.ts </span> => Aqui estan las pruebas unitarias.


Estamos creando una variable tipo arreglo para llevar un registro de los cambios en los productos modificados. Además, estamos desarrollando los servicios REST correspondientes: POST (para agregar nuevos productos), PUT (para actualizar productos), GET (para obtener información de los productos) y DELETE (para eliminar productos).
![image](https://github.com/CristianPumaES6/playgrouplatam/assets/29841048/56cd0f11-513b-4ec5-b006-d71c2312b945)



------------------------------------

Para el frontend se estara usando **Angular**

Angular es un framework que nos permite trabajar con TypeScript y procesarlo a javascript.

<span style="color: green; font-weight: bold;"> app.service.ts </span> => Este archivo contiene el consumo de los servicios creados por el backend.
<span style="color: green; font-weight: bold;"> app.component.ts  </span> => Aqui esta la logica del componente, este archivo utiza el archivo app.service.ts
<span style="color: green; font-weight: bold;"> app.component.ts  </span> => Aqui tenemos la interfaz.


En el frontend, en lugar de exponer, consumimos los servicios GET, CREATE, UPDATE y DELETE. Tenemos una variable llamada URL para agregar el dominio donde está alojado el backend que está en ejecución.
![image](https://github.com/CristianPumaES6/playgrouplatam/assets/29841048/f8b73143-5976-42b1-9049-e62cf7062252)


