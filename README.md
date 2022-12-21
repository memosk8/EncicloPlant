<h1 style="color: green; text-align: center">EncicloPlant &#127795 🪴</h1>

## Funciones principales

 * __Búsqueda de información de plantas por nombre__ (común o científico)
 * __Búsqueda de información de plantas por imágen__ (coincidencias posíbles)
 * __Consultar distintas fuentes de información que proveean una mejor contextualización para el crecimiento y cuidado de la plantas__
 * __Cuentas de usuarios que guarden búsquedas de plantas__
 * __Interfaz web accesible desde cualquier dispositivo__

## Modelos de datos

El modelo de datos se tendrà que adaptar a los tipos de respuestas de las distintas fuentas de información, puesto que cada una puede tener esquemas de datos distintios.

Sin embargo, es imperativo tener un control de cada una de las consultas guardadas por lo que se considera el siguiente modelo de datos para almacenar las búsquedas en la base de datos mongodb:

### Modelo orientado a documentos NoSql para _mongodb_

<hr>
<table align="center" style="width: max-content; color: black; ">
<thead style="border: 2px dotted gray">
<tr style="background-color: lightgreen; color: black; ">
<th ><h3 >Planta</h3></th>
<th ><h3 >Usuario</h3></th>
<th ><h3 >Búsqueda</h3></th>
</tr>
</thead>
<tr>
<!-- Planta -->
<td><pre id="planta">
{
  id: <a href="https://www.mongodb.com/docs/manual/reference/method/ObjectId/" target="_blank">ObjectId</a>, 
  create_at: <span style="font-weight: bold;"> DateTime </span>, 
  updated_at: <span style="font-weight: bold;"> DateTime </span>, 
  common_name: <span style="font-weight: bold;"> String </span>, 
  official_name: <span style="font-weight: bold;"> String </span>
  family: <span style="font-weight: bold;"> String </span>, 
  history: <span style="font-weight: bold;"> String </span>, 
  botanic_prop: [...<span style="font-weight: bold;"> String </span>], 
  habitat: <span style="font-weight: bold;"> String </span>, 
  human_use: [...<span style="font-weight: bold;"> String </span>], 
  img_link: <span style="font-weight: bold;"> String </span>
}
</pre></td>
<!-- Usuario -->
<td><pre id="usuario">
{
  id: ObjectId(), 
  create_at: <span style="font-weight: bold; ">DateTime</span>, 
  updated_at: <span style="font-weight: bold; ">DateTime</span>, 
  user_name: <span style="font-weight: bold; ">String</span>, 
  email: <span style="font-weight: bold; ">String</span>, 
  password: Hashed_pwd, 
  searches: [Search]
}
</pre></td>
<!-- Busqueda -->
<td><pre id="busqueda">
{
  id: ObjectId(), 
  create_at: <span style="font-weight: bold; ">DateTime</span>, 
  user: <a href="#usuario">id_usuario</a>, 
  email: <span style="font-weight: bold; ">String</span>, 
  password: Hashed_pwd, 
  searches: [Search]
}
</pre></td>
</tr>

</table>
<hr>
