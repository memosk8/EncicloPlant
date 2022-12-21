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

<br>
<table align="center" border="2px" >
  <thead>
    <tr style="font-weight: 600; color: black; background-color: white; text-align: center;">
      <td>id</td>
      <td>created_at</td>
      <td>updated_at</td>
      <td>common_name</td>
      <td>official_name</td>
    </tr>
  </thead>
  <tbody style="background-color: gray;">
    <tr style="color: lightgreen; text-decoration: overline; cursor: pointer">
      <td><span> ObjectId </span></td>
      <td><span> DateTime </span></td>
      <td><span> DateTime </span></td>
      <td><span> String </span></td>
      <td><span> String </span></td>
    </tr>
  </tbody>
</table>
<br>

### Modelo orientado a documentos NoSql para _mongodb_

<table align="center" bgcolor="darkgreen">
<thead>
<th><h3>Planta</h3></th>
<th><h3>Usuario</h3></th>
</thead>
<tr>
<!-- Planta -->
<td><pre>
{
  id: ObjectId(),
  create_at: DateTime(),
  updated_at: DateTime(),
  common_name: String,
  official_name: String
}
</pre></td>
<!-- Usuario -->
<td><pre>
{
  id: ObjectId(),
  create_at: DateTime(),
  updated_at: DateTime(),
  user_name: String,
  email: String,
  password: Hashed_pwd
}
</pre></td>
</tr>
</table>
