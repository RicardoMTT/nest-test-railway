src/commons/: Cosas comunes a toda la aplicación(infrastructure y domain).
  Infrastructure : conexion a base de datos - ORM

src/commons/domain/entities: Son parte de las reglase de negocio,las tablas de la bd - Persistencia.

src/commons/domain/repositories: Interaccion entre las entities con la base de datos.

src/commons/domain/dto: usado en el repository

-Patron de diseño repository

src/commons/infrastructure : Todo lo que se va a estar comunicando con el exterior(conexion a bd, controllers)
## Diagrama 
![image](https://github.com/RicardoMTT/nest-test-railway/assets/33745675/7e15c135-7131-455b-8cc5-c51e86667c97)
