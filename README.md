# Proyecto React de Ariel Erráez

## Descripción

Esta app se enfoca en recopilar datos por parte del cliente para que posteriormente sean almacenados en una base de datos.

Para almacenar la información se utilizan estados para cada una de las secciones del formulario. En estas secciones procesamos el formulario con  FormData para evitar tener que agregar un onchange en cada input. Se obtiene un objeto donde la clave es el name de cada input y su valor el value. 
Se realiza una excepción para la sección de selección de servicios debido a que es necesario tener una lista de objetos con el nombre de cada servicio y el precio del mismo (no es posible poner como value de un input estos dos valores a la vez) Por lo que se almacena como valor el indice de cada servicio para luego acceder a el y agregar al estado su nombre y precio.

La última sección genera la orden trabajo con toda la información ingresada. No es posible cambiar la info en esta sección sin embargo la aplicación permite al usuario regresar y cambiar los valores de cualquier sección. Se acceden a los valores ya almacenados para evitar que el usuario tenga que ingresarlos de nuevo utilizando el atributo defaultvalue el cual permite cambiar el valor del input sin necesidad de un onchange.




### Desarrollo

Para iniciar el desarrollo de la app se debe utilizar los siguientes comandos:

1. `npm install`
2. `npm run start`



### Despliegue

Para desplegar la app se debe:

1. Ingresar el comando `npm run build`
2. Crear un bucket público en S3
3. Ingresar al bucket el siguiente ACL y CORS

ACL
{
 "Version": "2012-10-17",
 "Statement": [
     {
         "Effect": "Allow",
         "Principal": "*",
         "Action": [
             "s3:GetObject",
             "s3:PutObject"
         ],
         "Resource": [
             "arn:aws:s3:::<Your-Bucket-name>",
             "arn:aws:s3:::<Your-Bucket-name>/*"
         ]
     }
     ]
 }

CORS

[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ]
    }
]

4. Habilitar despliegue de sitio estático
5. Cargar los archivos de la carpeta build